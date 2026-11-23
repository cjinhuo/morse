import { forwardRef, memo, useCallback, useEffect, useImperativeHandle, useMemo, useRef } from 'react'
import { debounceTime, Subject } from 'rxjs'
import styled from 'styled-components'
import { CHAR_CLASS_NAME, CHAR_STATUS, WORD_CONTAINER_CLASS_NAME } from '../shared/constants'

const CARET_CLASS_NAME = 'caret'
const CARET_ANIMATION_CLASS_NAME = 'caret-animation'
const ERROR_CHAR_ANIMATION = 'blink'
const PureTypeCharContainer = styled.div`
  position: relative;
  .${CARET_CLASS_NAME} {
    height: 3.4rem;
    position: absolute;
    background-color: var(--color-neutral-4);
    width: 0.2rem;
    top: 0;
    left: 0;
    transition: left 0.2s;
  }
  .${CARET_ANIMATION_CLASS_NAME} {
    animation: caretFlashSmooth 1s infinite;
  }
  @keyframes caretFlashSmooth {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .${WORD_CONTAINER_CLASS_NAME} {
    line-height: 3.4rem;
    font-size: 3rem;
    margin-top: 0.2rem;
  }
  .${CHAR_CLASS_NAME} {
    /* outline: 1px solid var(--color-linear-bg-start); */
    margin-right: 0.2rem;
    color: var(--color-neutral-6);
    position: relative;
    display: inline-block;
  }

  .${CHAR_STATUS.correct} {
    color: var(--color-neutral-4);
    background-color: var(--color-neutral-8);
  }
  .${CHAR_STATUS.warn} {
    color: #fb923c;
    background-color: #fed7aa;
  }
  /* https://tailwindcss.com/docs/customizing-colors */
  .${CHAR_STATUS.error} {
    color: #fb7185;
    background-color: #fecdd3;
  }
  .${CHAR_STATUS.active} {
  }
  .${ERROR_CHAR_ANIMATION} {
    position: absolute;
    bottom: 0;
    left: 0;
    color: white;
    animation: blink_smooth 1s linear;
  }
  @keyframes blink_smooth {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0.8;
    }
    100% {
      opacity: 0;
    }
  }
`

export interface RefMethodsType {
  next: (status: CHAR_STATUS, inputChar?: string) => [HTMLElement | null, HTMLElement | null]
  prev: () => [HTMLElement, HTMLElement | null]
  start: () => HTMLElement | null
}

type PropType = {
  data: string
}
export default memo(
  forwardRef<RefMethodsType, PropType>(function PureTypeChar({ data }, ref) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const caretRef = useRef<HTMLDivElement | null>(null)
    const activeCharRef = useRef<HTMLElement | null>(null)
    const inputSubject = useMemo(() => new Subject<void>(), [])

    const calculateCaretPosition = useCallback(() => {
      const activeChar = activeCharRef.current
      if (!caretRef.current || !activeChar) return
      caretRef.current.style.left = `${activeChar.offsetLeft}px`
      caretRef.current.style.top = `${activeChar.offsetTop}px`
    }, [])

    useEffect(() => {
      const idleSubscription = inputSubject.pipe(debounceTime(2000)).subscribe(() => {
        caretRef.current?.classList.add(CARET_ANIMATION_CLASS_NAME)
      })
      window.addEventListener('resize', calculateCaretPosition)
      return () => {
        idleSubscription.unsubscribe()
        window.removeEventListener('resize', calculateCaretPosition)
      }
    }, [calculateCaretPosition, inputSubject])

    const TypeBlock = useMemo(() => {
      if (data.length === 0) return null
      const words = data.split(' ')
      return words.map((word, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: The practice sentence is fixed for the lifetime of this component.
        <div key={`${word}-${index}`} className={`inline-block ${WORD_CONTAINER_CLASS_NAME}`}>
          {Array.from(word).map((char, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: Each occurrence of a letter is a separate typing target.
            <div key={`${char}-${index}`} className={CHAR_CLASS_NAME} data-char={char}>
              {char}
            </div>
          ))}
          {index !== words.length - 1 && (
            <div className={`${CHAR_CLASS_NAME} w-6 whitespace-pre-wrap`} data-char=' '>
              {' '}
            </div>
          )}
        </div>
      ))
    }, [data])

    useImperativeHandle(ref, () => {
      let isStarted = false
      let lastChar: HTMLElement | null = null
      return {
        start() {
          if (!containerRef.current || !caretRef.current) return null
          isStarted = true
          const firstChar = containerRef.current.querySelector(`.${WORD_CONTAINER_CLASS_NAME}`)
            ?.firstElementChild as HTMLElement | null
          if (firstChar) {
            activeCharRef.current = firstChar
            return firstChar
          }
          throw new Error('Start Fn Error: not found the first char in container')
        },
        prev() {
          if (!isStarted) {
            throw new Error('Prev Fn Error: should run [start] fn first')
          }
          if (!lastChar) {
            throw new Error('Prev Fn Error: there is no last char to iterate')
          }
          if (!lastChar.classList.contains(CHAR_STATUS.error)) {
            lastChar.classList.remove(CHAR_STATUS.correct)
          }
          const activeChar = lastChar
          activeCharRef.current = activeChar
          calculateCaretPosition()

          lastChar = activeChar.previousElementSibling as HTMLElement | null
          if (!lastChar) {
            const prevWord = activeChar.parentElement?.previousElementSibling as HTMLElement | null
            if (prevWord?.className.includes(WORD_CONTAINER_CLASS_NAME)) {
              lastChar = prevWord.lastElementChild as HTMLElement | null
            }
          }
          return [activeChar, lastChar]
        },
        next(status: CHAR_STATUS, inputChar?: string) {
          if (!isStarted) {
            throw new Error('Next Fn Error: should run [start] fn first')
          }
          const activeChar = activeCharRef.current
          if (!activeChar) {
            throw new Error('Next Fn Error: there is no char to iterate')
          }
          lastChar = activeChar
          // always remove the 'warn' class since it probably set by prev()
          activeChar.classList.remove(CHAR_STATUS.warn)
          activeChar.classList.add(status)
          const nextChar = activeChar.nextElementSibling as HTMLElement | null
          if (nextChar) {
            activeCharRef.current = nextChar
          } else {
            const nextWord = activeChar.parentElement?.nextElementSibling
            activeCharRef.current = nextWord?.classList.contains(WORD_CONTAINER_CLASS_NAME)
              ? nextWord.querySelector<HTMLElement>(`.${CHAR_CLASS_NAME}`)
              : null
          }
          if (status === CHAR_STATUS.error && inputChar) {
            // If inputting error char, append the error char to override current char. Inspiring by 'typing club'
            const errorChar = document.createElement('span')
            errorChar.classList.add(ERROR_CHAR_ANIMATION)
            errorChar.textContent = inputChar
            lastChar.appendChild(errorChar)
            errorChar.addEventListener('animationend', () => errorChar.remove(), { once: true })
          }
          if (activeCharRef.current) {
            calculateCaretPosition()
          } else {
            caretRef.current!.style.left = `${lastChar.offsetLeft + lastChar.getBoundingClientRect().width}px`
          }
          caretRef.current?.classList.remove(CARET_ANIMATION_CLASS_NAME)
          inputSubject.next()
          return [activeCharRef.current, lastChar]
        },
      }
    }, [calculateCaretPosition, inputSubject])

    return (
      <PureTypeCharContainer ref={containerRef}>
        {TypeBlock}
        <div className={`${CARET_CLASS_NAME} ${CARET_ANIMATION_CLASS_NAME}`} ref={caretRef} />
      </PureTypeCharContainer>
    )
  })
)

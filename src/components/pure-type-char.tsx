import { forwardRef, memo, useEffect, useImperativeHandle, useMemo, useRef } from 'react'
import { Subject, debounceTime } from 'rxjs'
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
  forwardRef(function PureTypeChar({ data }: PropType, ref) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const caretRef = useRef<HTMLDivElement | null>(null)
    const inputSubject = new Subject()
    // after a two-second pause, the caret will flash again
    inputSubject.pipe(debounceTime(2000)).subscribe(() => {
      if (!caretRef.current || caretRef.current.classList.contains(CARET_ANIMATION_CLASS_NAME)) return
      caretRef.current.classList.add(CARET_ANIMATION_CLASS_NAME)
    })

    const caretNext = () => {
      if (!caretRef.current) return
      caretRef.current.classList.remove(CARET_ANIMATION_CLASS_NAME)
      inputSubject.next('')
    }
    let isStarted = false
    let activeChar: HTMLElement | null = null
    let lastChar: HTMLElement | null = null
    const calculateCaretPosition = () => {
      if (!caretRef.current || !activeChar) return
      caretRef.current.style.left = `${activeChar.offsetLeft}px`
      caretRef.current.style.top = `${activeChar.offsetTop}px`
    }

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
      if (!caretRef.current || !containerRef.current) return
      window.addEventListener('resize', calculateCaretPosition)
      return () => {
        window.removeEventListener('resize', calculateCaretPosition)
      }
    }, [])

    const TypeBlock = useMemo(() => {
      if (data.length === 0) return null
      const words = data.split(' ')
      return words.map((word, index) => (
        <div key={`${word}-${index}`} className={`inline-block ${WORD_CONTAINER_CLASS_NAME}`}>
          {Array.from(word).map((char, index) => (
            <div key={`${char}-${index}`} className={CHAR_CLASS_NAME}>
              {char}
            </div>
          ))}
          {index !== words.length - 1 && <div className={`${CHAR_CLASS_NAME} w-6 whitespace-pre-wrap`}> </div>}
        </div>
      ))
    }, [data])

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useImperativeHandle(
      ref,
      () => {
        return {
          start() {
            if (!containerRef.current || !caretRef.current) return
            isStarted = true
            const firstChar = containerRef.current.querySelector(`.${WORD_CONTAINER_CLASS_NAME}`)
              ?.firstElementChild as HTMLElement | null
            if (firstChar) {
              // firstChar.classList.add(CHAR_STATUS.active)
              activeChar = firstChar
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
            if (lastChar.classList.contains(CHAR_STATUS.error)) {
              calculateCaretPosition()
            } else {
              lastChar.classList.remove(CHAR_STATUS.correct)
            }
            activeChar = lastChar
            caretRef.current!.style.left = `${activeChar.offsetLeft}px`
            caretRef.current!.style.top = `${activeChar.offsetTop}px`

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
            if (!activeChar) {
              throw new Error('Next Fn Error: there is no char to iterate')
            }
            lastChar = activeChar
            // always remove the 'warn' class since it probably set by prev()
            activeChar.classList.remove(CHAR_STATUS.warn)
            activeChar.classList.add(status)
            // activeChar.classList.remove(CHAR_STATUS.active)
            const nextChar = activeChar.nextElementSibling as HTMLElement | null
            if (nextChar) {
              activeChar = nextChar
              // activeChar.classList.add(CHAR_STATUS.active)
            } else {
              const nextWord = activeChar.parentElement?.nextElementSibling
              if (nextWord?.className.includes(WORD_CONTAINER_CLASS_NAME)) {
                activeChar = nextWord.firstElementChild as HTMLElement | null
                // activeChar?.classList.add(CHAR_STATUS.active)
              } else {
                activeChar = null
              }
            }
            if (status === CHAR_STATUS.error && inputChar) {
              // If inputting error char, append the error char to override current char. Inspiring by 'typing club'
              const errorChar = document.createElement('span')
              errorChar.classList.add(ERROR_CHAR_ANIMATION)
              errorChar.innerHTML = inputChar
              lastChar.appendChild(errorChar)
              const tempLastChar = lastChar

              // Use animationend event to ensure smooth removal after animation completes
              const handleAnimationEnd = () => {
                try {
                  if (tempLastChar.contains(errorChar)) {
                    tempLastChar.removeChild(errorChar)
                  }
                } catch (error) {
                  // Silently handle case where element was already removed
                }
                errorChar.removeEventListener('animationend', handleAnimationEnd)
              }
              // 在动画结束后移除事件监听器，避免用 setTimeout 导致时间和 css 动画时间不同步 
              errorChar.addEventListener('animationend', handleAnimationEnd)
            }
            if (activeChar) {
              calculateCaretPosition()
            } else {
              caretRef.current!.style.left = `${lastChar.offsetLeft + lastChar.getBoundingClientRect().width}px`
            }
            // stop the caret animation when typing
            caretNext()
            return [activeChar, lastChar]
          },
        }
      },
      []
    )

    return (
      <PureTypeCharContainer ref={containerRef}>
        {TypeBlock}
        <div className={`${CARET_CLASS_NAME} ${CARET_ANIMATION_CLASS_NAME}`} ref={caretRef} />
      </PureTypeCharContainer>
    )
  })
)

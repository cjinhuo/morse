import styled from 'styled-components'
import { CHAR_CLASS_NAME, CHAR_STATUS, WORD_CONTAINER_CLASS_NAME } from '../shared/constants'
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { setClassNameWithArray } from '../shared/utils'
import { Subject, debounceTime } from 'rxjs'

const CARET_CLASS_NAME = 'caret'
const CARET_ANIMATION_CLASS_NAME = 'caret-animation'
const ERROR_CHAR_ANIMATION = 'blink'
const PureTypeCharContainer = styled.div`
  position: relative;
  .${CARET_CLASS_NAME} {
    height: 3rem;
    position: absolute;
    background-color: var(--color-neutral-4);
    width: 0.2rem;
    top: 3px;
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
  .${CHAR_STATUS.error} {
    color: #fb7185;
    background-color: #fecdd3;
  }
  .${CHAR_STATUS.active} {
  }
  .${ERROR_CHAR_ANIMATION} {
    position: absolute;
    top: 0;
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
  next: (status: CHAR_STATUS, inputChar?: string) => HTMLElement | null
  start: () => HTMLElement | null
}

type PropType = {
  data: string
}
export default forwardRef(function PureTypeChar({ data }: PropType, ref) {
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

  useEffect(() => {
    if (!caretRef.current || !containerRef.current) return
  }, [])

  const TypeBlock = useMemo(() => {
    if (data.length === 0) return null
    const words = data.split(' ')
    return words.map((word, index) => (
      <div key={word} className={`inline-block ${WORD_CONTAINER_CLASS_NAME}`}>
        {Array.from(word).map((char, index) => (
          <div key={`${word}-${index}`} className={CHAR_CLASS_NAME}>
            {char}
          </div>
        ))}
        {index !== words.length - 1 && <div className={`${CHAR_CLASS_NAME} w-6`}></div>}
      </div>
    ))
  }, [data])

  useImperativeHandle(
    ref,
    () => {
      return {
        next(status: CHAR_STATUS, inputChar?: string) {
          if (!isStarted) {
            throw new Error('Next Fn Error: should run [start] fn first')
          }
          if (!activeChar) {
            throw new Error('Next Fn Error: there is no char to iterate')
          }
          let lastChar = activeChar
          activeChar.classList.add(status)
          activeChar.classList.remove(CHAR_STATUS.active)
          const nextChar = activeChar.nextElementSibling as HTMLElement | null
          if (nextChar) {
            activeChar = nextChar
            activeChar.classList.add(CHAR_STATUS.active)
          } else {
            const nextWords = activeChar.parentElement?.nextElementSibling
            if (nextWords?.className.includes(WORD_CONTAINER_CLASS_NAME)) {
              activeChar = nextWords.firstElementChild as HTMLElement | null
              activeChar?.classList.add(CHAR_STATUS.active)
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
            setTimeout(() => {
              lastChar.removeChild(errorChar)
            }, 1000)
          }
          if (activeChar) {
            caretRef.current!.style.left = `${activeChar.offsetLeft}px`
          } else {
            caretRef.current!.style.left = `${lastChar.offsetLeft + lastChar.getBoundingClientRect().width}px`
          }
          // stop the caret animation when typing
          caretNext()
          return activeChar
        },
        start() {
          if (!containerRef.current || !caretRef.current) return
          isStarted = true
          const firstChar = containerRef.current.querySelector(`.${WORD_CONTAINER_CLASS_NAME}`)
            ?.firstElementChild as HTMLElement | null
          if (firstChar) {
            firstChar.classList.add(CHAR_STATUS.active)
            activeChar = firstChar
            return firstChar
          } else {
            throw new Error('Start Fn Error: not found the first char in container')
          }
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

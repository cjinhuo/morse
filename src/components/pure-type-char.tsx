import styled from 'styled-components'
import { CHAR_CLASS_NAME, CHAR_STATUS, WORD_CONTAINER_CLASS_NAME } from '../shared/constants'
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { setClassNameWithArray } from '../shared/utils'

const PureTypeCharContainer = styled.div`
  position: relative;
  .caret {
    height: 3rem;
    position: absolute;
    // todo当开始打字过程中去掉闪烁动画，防抖
    animation: caretFlashSmooth 1s infinite;
    background: black;
    width: 0.2rem;
    top: 0;
    transition: 0.125s;
  }
  @keyframes caretFlashSmooth {
    0%,
    100% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }
  }

  .${WORD_CONTAINER_CLASS_NAME} {
    line-height: 3.4rem;
    font-size: 3rem;
  }
  .${CHAR_CLASS_NAME} {
    outline: 1px solid white;
    position: relative;
    display: inline-block;
  }

  .${CHAR_STATUS.correct} {
    color: green;
  }
  .${CHAR_STATUS.error} {
    color: red;
    background-color: pink;
  }
  .${CHAR_STATUS.active} {
  }
  .blink {
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
  let isStarted = false
  let activeChar: HTMLElement | null = null

  useEffect(() => {
    if (!caretRef.current || !containerRef.current) return
  }, [])

  const TypeBlock = useMemo(() => {
    if (data.length === 0) return null
    const words = data.split(' ')
    return words.map((word, index) => (
      <div key={word} className={setClassNameWithArray(WORD_CONTAINER_CLASS_NAME, 'inline-block')}>
        {Array.from(word).map((char, index) => (
          <span key={word} className={CHAR_CLASS_NAME}>
            {char}
          </span>
        ))}
        {index !== words.length - 1 && <span className={CHAR_CLASS_NAME}>&nbsp;</span>}
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
            // If input error char, append the error char to override current char. Inspiring by 'typing club'
            const errorChar = document.createElement('span')
            errorChar.classList.add('blink')
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
      <div className='caret' ref={caretRef} />
    </PureTypeCharContainer>
  )
})

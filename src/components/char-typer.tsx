import { useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import styled from 'styled-components'
import { fromEvent } from 'rxjs'
import { setClassNameWithArray } from '../utils'
import typeWriterAudio from '../assets/typewriter.mp3'
import { CHAR_CLASS_NAME, CHAR_STATUS, WORD_CONTAINER_CLASS_NAME } from '../constants'
const FunInputContainer = styled.div`
  position: relative;
  .caret {
    height: 3rem;
    position: absolute;
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
  .char {
    line-height: 3rem;
    font-size: 3rem;
  }
  .correct {
    color: green;
  }
  .error {
    color: red;
  }
  .active {
  }
`
const PresetData = 'I am iron man!'
type PropType = {
  data: string
}
const sound = new Audio(typeWriterAudio)
console.log('typeWriterAudio', typeWriterAudio)
export default function CharTyper({ data }: PropType) {
  const caretRef = useRef(null)

  useEffect(() => {
    const caretNode = caretRef.current as HTMLElement | null
    if (!caretNode) return

    document.querySelector(`.${WORD_CONTAINER_CLASS_NAME}`)?.firstElementChild?.classList.add(CHAR_STATUS.active)
    let activeChar = document.querySelector(`.${CHAR_CLASS_NAME}.${CHAR_STATUS.active}`) as HTMLElement | null
    if (activeChar) {
      caretNode.style.left = `${activeChar.offsetLeft}px`
    }
    const keyDownEvent = fromEvent<KeyboardEvent>(document, 'keydown')
    const keyDownEventSubscription = keyDownEvent.subscribe((e) => {
      if (!activeChar) return
      sound.currentTime = 0
      sound.play()
      const wordContent = activeChar.innerHTML === '&nbsp;' ? ' ' : activeChar.innerHTML
      if (wordContent === e.key) {
        activeChar.classList.add(CHAR_STATUS.correct)
        activeChar.classList.remove(CHAR_STATUS.active)
        const nextChar = activeChar.nextElementSibling as HTMLElement
        if (nextChar) {
          activeChar = nextChar
          activeChar.classList.add(CHAR_STATUS.active)
        } else {
          const nextWords = activeChar.parentElement?.nextElementSibling
          if (nextWords?.className.includes(WORD_CONTAINER_CLASS_NAME)) {
            activeChar = nextWords.firstElementChild as HTMLElement
            activeChar.classList.add(CHAR_STATUS.active)
          } else {
            activeChar = null
          }
        }
        if (activeChar) {
          caretNode.style.left = `${activeChar.offsetLeft}px`
        } else {
          console.log('结束，取消订阅')
          keyDownEventSubscription.unsubscribe()
        }
      }
    })
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
  return (
    <FunInputContainer>
      {TypeBlock}
      <div className='caret' ref={caretRef} />
    </FunInputContainer>
  )
}

import { useEffect, useLayoutEffect, useMemo } from 'react'
import styled from 'styled-components'
import { fromEvent } from 'rxjs'
import { setClassNameWithArray } from '../utils'

const FunInputContainer = styled.div`
  position: relative;
  #caret {
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
  }
  .error {
  }
  .active {
    color: red;
  }
`
const PresetData = 'I am iron man!'
type PropType = {
  data: string
}
const WORD_CONTAINER_CLASS_NAME = 'word'
const CHAR_CLASS_NAME = 'char'
const CHAR_ACTIVE_CLASS_NAME = 'active'
export default function CharTyper({ data }: PropType) {
  useEffect(() => {
    const caretNode = document.querySelector('#caret') as HTMLElement
    document.querySelector(`.${WORD_CONTAINER_CLASS_NAME}`)?.firstElementChild?.classList.add(CHAR_ACTIVE_CLASS_NAME)
    console.log('caretNode', caretNode)
    let activeChar = document.querySelector(`.${CHAR_CLASS_NAME}.${CHAR_ACTIVE_CLASS_NAME}`) as HTMLElement | null
    if (activeChar) {
      caretNode!.style.left = `${activeChar.offsetLeft}px`
    }
    const keyDownEvent = fromEvent<KeyboardEvent>(document, 'keydown')
    const keyDownEventSubscription = keyDownEvent.subscribe((e) => {
      if (!activeChar) return
      const wordContent = activeChar.innerHTML === '&nbsp;' ? ' ' : activeChar.innerHTML
      if (wordContent === e.key) {
        activeChar.classList.remove(CHAR_ACTIVE_CLASS_NAME)
        const nextChar = activeChar.nextElementSibling as HTMLElement
        if (nextChar) {
          activeChar = nextChar
          activeChar.classList.add(CHAR_ACTIVE_CLASS_NAME)
        } else {
          const nextWords = activeChar.parentElement?.nextElementSibling
          if (nextWords && nextWords.className.includes(WORD_CONTAINER_CLASS_NAME)) {
            activeChar = nextWords.firstElementChild as HTMLElement
            activeChar.classList.add(CHAR_ACTIVE_CLASS_NAME)
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
      <div key={index} className={setClassNameWithArray(WORD_CONTAINER_CLASS_NAME, 'inline-block')}>
        {Array.from(word).map((char, index) => (
          <span key={index} className={CHAR_CLASS_NAME}>
            {char}
          </span>
        ))}
        <span className={CHAR_CLASS_NAME}>&nbsp;</span>
      </div>
    ))
  }, [data])
  return (
    <FunInputContainer>
      {TypeBlock}
      <div id='caret'></div>
    </FunInputContainer>
  )
}

import { useEffect } from 'react'
import styled from 'styled-components'
import { fromEvent } from 'rxjs'

const FunInputContainer = styled.div`
  position: relative;
  #caret {
    height: 3rem;
    position: absolute;
    animation: caretFlashSmooth 1s infinite;
    background: black;
    width: 0.2rem;
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
  .word {
    line-height: 3rem;
    font-size: 3rem;
  }
`
export default function FunInput() {
  useEffect(() => {
    const caretNode = document.querySelector('#caret') as HTMLElement
    let activeChar = document.querySelector('.word.active') as HTMLElement
    if (activeChar) {
      caretNode!.style.left = `${activeChar.offsetLeft}px`
    }
    const keyDownEvent = fromEvent<KeyboardEvent>(document, 'keydown')
    keyDownEvent.subscribe((e) => {
      const wordContent = activeChar.innerHTML === '&nbsp;' ? ' ' : activeChar.innerHTML
      if (wordContent === e.key) {
        activeChar.classList.remove('active')
        const nextChar = activeChar.nextElementSibling as HTMLElement
        if (nextChar) {
          activeChar = nextChar
          activeChar.classList.add('active')
        } else {
          const nextWords = activeChar.parentElement?.nextElementSibling
          if (nextWords && nextWords.className.includes('word-container')) {
            activeChar = nextWords.firstElementChild as HTMLElement
            activeChar.classList.add('active')
          } else {
            activeChar = null
          }
        }
        if (activeChar) {
          caretNode.style.left = `${activeChar.offsetLeft}px`
        } else {
          console.log('结束')
        }
      }
      // if (e.key === 'a') {
      //   setHighlightEdge('e1-2')
      // } else {
      //   setHighlightEdge('e1-3')
      // }
    })
  }, [])
  return (
    <FunInputContainer>
      <div id='caret'></div>
      <div className='word-container inline-block'>
        <span className='word active'>t</span>
        {/* <span className='word'>E</span> */}
        {/* <span className='word'>S</span> */}
        {/* <span className='word'>T</span> */}
        <span className='word'>&nbsp;</span>
      </div>
      <div className='word-container inline-block'>
        <span className='word active'>b</span>
        {/* <span className='word'>E</span> */}
        {/* <span className='word'>S</span> */}
        {/* <span className='word'>T</span> */}
        <span className='word'>&nbsp;</span>
      </div>
      <div className='word-container inline-block'>
        <span className='word'>T</span>
      </div>
    </FunInputContainer>
  )
}

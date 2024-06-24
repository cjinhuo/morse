import { useAtomValue } from 'jotai'
import { InputtingMorseCodeAtom } from '../atom/atom'
import styled from 'styled-components'
import { TYPING_STATUS } from '../shared/constants'
import { useMemo } from 'react'
import { transformMorseCodeToChar } from '../shared/utils'
import MorseCodeSvg from './morse-code-svg'

const InputMaskContainer = styled.div`
  position: fixed;
  left: 20%;
  bottom: 10rem;
  min-width: 60%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .visibility-hidden {
    animation: maskHideAnimation 1s forwards;
  }
  .visibility-show {
    animation: maskShowAnimation 0.5s forwards;
  }

  @keyframes maskShowAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes maskHideAnimation {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export default function InputMask() {
  const { morseCode, status } = useAtomValue(InputtingMorseCodeAtom)

  const [blockClassName, targetChar] = useMemo(() => {
    if (status === TYPING_STATUS.idle) return ['visibility-show']
    if (status === TYPING_STATUS.done) {
      return ['visibility-show', transformMorseCodeToChar(morseCode)]
    }
    return ['visibility-show']
  }, [status, morseCode])

  return (
    <InputMaskContainer>
      <div
        style={{ backgroundColor: 'var(--color-neutral-8)', opacity: '0.8' }}
        className={`text-3xl w-full h-full flex justify-center items-center rounded-2xl ${blockClassName}`}>
        <div className='text-skin-neutral-4'>
          {targetChar === null ? '-> invalid morse code' : <MorseCodeSvg morseCode={morseCode}></MorseCodeSvg>}
        </div>
      </div>
    </InputMaskContainer>
  )
}

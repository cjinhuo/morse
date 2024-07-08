import { useAtomValue } from 'jotai'
import { InputtingMorseCodeAtom } from '../atom/atom'
import styled from 'styled-components'
import { TYPING_STATUS } from '../shared/constants'
import { useMemo } from 'react'
import { transformMorseCodeToChar } from '../shared/utils'
import MorseCodeSvg from './morse-code-svg'
import MotionSpaceButton from './motion-space-button'
import useMobile from '../hooks/useMobile'

const InputMaskContainer = styled.div`
  position: fixed;
  left: 20%;
  bottom: 16vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .visibility-hidden {
    animation: maskHideAnimation 1.5s forwards;
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
  const isMobile = useMobile()
  const [blockClassName, targetChar] = useMemo(() => {
    if (status === TYPING_STATUS.idle) return ['invisible']
    if (status === TYPING_STATUS.done) {
      return ['visibility-hidden', transformMorseCodeToChar(morseCode)]
    }
    return ['visibility-show']
  }, [status, morseCode])

  return (
    <InputMaskContainer>
      <div
        style={{ backgroundColor: 'var(--color-neutral-8)', opacity: '0.8' }}
        className={`text-3xl overflow-hidden w-full h-16 flex justify-center items-center rounded-2xl ${blockClassName}`}>
        <MorseCodeSvg morseCode={morseCode}></MorseCodeSvg>
        <div className='text-skin-neutral-4'>{targetChar === null ? '-> invalid morse code' : targetChar}</div>
      </div>
      {isMobile && (
        <div className='h-16 w-full mt-4'>
          <MotionSpaceButton></MotionSpaceButton>
        </div>
      )}
    </InputMaskContainer>
  )
}

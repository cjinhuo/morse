import { useAtomValue } from 'jotai'
import { InputtingMorseCodeAtom } from '../atom/atom'
import styled from 'styled-components'
import { TYPING_STATUS } from '../shared/constants'
import { useMemo } from 'react'

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
    animation: maskShowAnimation 0.8s forwards;
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

  const blockClassName = useMemo(() => {
    if (status === TYPING_STATUS.idle) return 'hidden'
    if (status === TYPING_STATUS.done) {
      return 'visibility-hidden'
    }
    return 'visibility-show'
  }, [status])
  return (
    <InputMaskContainer>
      <div className={`text-3xl w-full h-full text-center bg-slate-400 ${blockClassName}`}>{morseCode}</div>
    </InputMaskContainer>
  )
}

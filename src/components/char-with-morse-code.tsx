import React, { useMemo } from 'react'
import { NUMBER_MORSE_CODE, WORD_MORSE_CODE } from '../shared/constants'

type PropsType = {
  char: string
}
export default function CharWithMorseCode({ char }: PropsType) {
  const numberMorseCode = NUMBER_MORSE_CODE[char]
  const charMorseCode = WORD_MORSE_CODE[char]
  const morseCode = numberMorseCode || charMorseCode
  if (!morseCode) throw new Error(`do not find the  ${char}'s morse code`)
  return (
    <div className='flex flex-col'>
      {/* <span>{morseCode}</span> */}
      <span data-morse-code={morseCode}>{char}</span>
    </div>
  )
}

import { atomWithReset } from "jotai/utils";
import { TYPING_STATUS } from "../shared/constants";
import { LATIN_SENTENCES, MORSE_SENTENCES } from "../shared/sentences";

export const HighlightEdgeAtom = atomWithReset('');



export const InputtingMorseCodeAtom = atomWithReset<{
  morseCode: string
  status: TYPING_STATUS
}>({
  morseCode: '',
  status: TYPING_STATUS.idle,
})

export const ActiveMorseCodeAtom = atomWithReset<string>('')

// 当前练习句子（默认随机一条）
const getRandomIndex = (max: number) => Math.floor(Math.random() * max)
export const MorseSentenceAtom = atomWithReset<string>(
  MORSE_SENTENCES[getRandomIndex(MORSE_SENTENCES.length)]
)

export const LatinSentenceAtom = atomWithReset<string>(
  LATIN_SENTENCES[getRandomIndex(LATIN_SENTENCES.length)]
)
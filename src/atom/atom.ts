import { atomWithReset } from "jotai/utils";
import { TYPING_STATUS } from "../shared/constants";

export const HighlightEdgeAtom = atomWithReset('');



export const InputtingMorseCodeAtom = atomWithReset<{
  morseCode: string
  status: TYPING_STATUS
}>({
  morseCode: '',
  status: TYPING_STATUS.idle,
})

export const ActiveMorseCodeAtom = atomWithReset<string>('')
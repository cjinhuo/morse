import { atomWithReset } from "jotai/utils";
import { TYPING_STATUS } from "./constants";

export const HighlightEdgeAtom = atomWithReset('');



export const CurrentMorseCodeSetAtom = atomWithReset<{
  morseCode: string
  status: TYPING_STATUS
}>({
  morseCode: '',
  status: TYPING_STATUS.idle,
})
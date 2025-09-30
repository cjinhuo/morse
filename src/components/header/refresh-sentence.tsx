import { Tooltip } from "@douyinfe/semi-ui";
import { useAtomValue, useSetAtom } from "jotai";
import { IconParkNames, TYPING_STATUS } from "../../shared/constants";
import { ActiveMorseCodeAtom, MorseSentenceAtom, InputtingMorseCodeAtom, LatinSentenceAtom } from "../../atom/atom";
import { LATIN_SENTENCES, MORSE_SENTENCES } from "../../shared/sentences";
import LinkWithIcon from "../link-with-icon";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useCallback } from "react";
import { LATIN_PATH, MORSE_PATH } from "../../router/router";

const HeaderMenuContainer = styled.nav`
  display: flex;
  margin-left: 1rem;
  > div {
    margin-right: 2rem;
  }
`
const pickRandom = () => MORSE_SENTENCES[Math.floor(Math.random() * MORSE_SENTENCES.length)]

const pickRandomLatin = () => LATIN_SENTENCES[Math.floor(Math.random() * LATIN_SENTENCES.length)]

// const REFRESH_SENTENCE_PATH = '/morse'
export default function RefreshSentence() {
  const setMorseSentence = useSetAtom(MorseSentenceAtom)
  const currentMorseSentence = useAtomValue(MorseSentenceAtom)
  const currentLatinSentence = useAtomValue(LatinSentenceAtom)
  const setLatinSentence = useSetAtom(LatinSentenceAtom)

  const location = useLocation()


  const refreshMorseSentence = useCallback(() => {
    if (!MORSE_SENTENCES.length) return

    let next = pickRandom()
    if (MORSE_SENTENCES.length > 1) {
      let guard = 0
      while (next === currentMorseSentence && guard < 8) {
        next = pickRandom()
        guard += 1
      }
    }
    setMorseSentence(next)
  }, [setMorseSentence, currentMorseSentence])

  const refreshLatinSentence = useCallback(() => {
    if (!LATIN_SENTENCES.length) return
    let next = pickRandomLatin()
    setLatinSentence(next)
    if (LATIN_SENTENCES.length > 1) {
      let guard = 0
      while (next === currentLatinSentence && guard < 8) {
        next = pickRandomLatin()
        guard += 1
      }
    }
    setLatinSentence(next)
  }, [setLatinSentence, currentLatinSentence])

  const refreshSentence = useCallback(() => {
    if (location.pathname === MORSE_PATH) {
      refreshMorseSentence()
    } else if (location.pathname === LATIN_PATH) {
      refreshLatinSentence()
    }
  }, [refreshMorseSentence, refreshLatinSentence, location.pathname])

  return (
    (location.pathname === MORSE_PATH || location.pathname === LATIN_PATH) && <HeaderMenuContainer>
      <Tooltip content="Random Sentence" position="right">
        <div className="flex items-center">
          <LinkWithIcon
            name={IconParkNames.refresh}
            onClick={refreshSentence}
          />
        </div>
      </Tooltip>
    </HeaderMenuContainer>
  )
}

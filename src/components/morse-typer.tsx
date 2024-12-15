import { useSetAtom } from 'jotai'
import { useEffect, useRef, useState } from 'react'
import { InputtingMorseCodeAtom } from '../atom/atom'
import { CHAR_STATUS, TYPING_STATUS } from '../shared/constants'
import { getOscillatorNodeWithParams, subscribeKeyEventForMorseCode, transformMorseCodeToChar } from '../shared/utils'
import PureTypeChar, { type RefMethodsType } from './pure-type-char'

export default function MorseTyper() {
	const setCurrentMorseCode = useSetAtom(InputtingMorseCodeAtom)
	const pureTypeCharRef = useRef<RefMethodsType | null>(null)
	const [currentElementState, setCurrentElementState] = useState<Element | null>(null)

	useEffect(() => {
		if (!currentElementState) return
	}, [currentElementState])

	useEffect(() => {
		if (!pureTypeCharRef.current) return

		let currentElement = pureTypeCharRef.current.start()
		setCurrentElementState(currentElement)
		const [$singleChar, $fragment] = subscribeKeyEventForMorseCode(getOscillatorNodeWithParams)
		const singleCharSubscription = $singleChar.subscribe((char) => {
			setCurrentMorseCode((prev) => {
				return prev.status !== TYPING_STATUS.typing
					? {
							status: TYPING_STATUS.typing,
							morseCode: char,
						}
					: {
							status: TYPING_STATUS.typing,
							morseCode: prev.morseCode + char,
						}
			})
		})
		const fragmentSubscription = $fragment.subscribe((fragment) => {
			const char = transformMorseCodeToChar(fragment)
			console.log('currentElement', currentElement)
			if (char) {
				if (currentElement?.innerHTML === char) {
					;[currentElement] = pureTypeCharRef.current!.next(CHAR_STATUS.correct)
				} else {
					;[currentElement] = pureTypeCharRef.current!.next(CHAR_STATUS.error, char)
				}
			}
			console.log('next element', currentElement)

			setCurrentMorseCode((prev) => ({
				status: TYPING_STATUS.done,
				morseCode: prev.morseCode,
			}))
			if (currentElement) {
				// skip when encounter space char
				if (currentElement.innerText === ' ') {
					;[currentElement] = pureTypeCharRef.current!.next(CHAR_STATUS.correct)
				}
				setCurrentElementState(currentElement)
				//
			} else {
				setCurrentElementState(null)
				singleCharSubscription.unsubscribe()
				fragmentSubscription.unsubscribe()
				console.log('ALL over')
			}
		})
		return () => {
			singleCharSubscription.unsubscribe()
			fragmentSubscription.unsubscribe()
		}
	}, [setCurrentMorseCode])
	return (
		<div>
			<PureTypeChar data='HELLO WORLD' ref={pureTypeCharRef} />
		</div>
	)
}

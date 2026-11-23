import assert from 'node:assert/strict'
import { test } from '@playwright/test'
import { encodeWords, formatCode, supportedText } from '../../src/shared/morse'
import { beginSession, editSession, scoreSession } from '../../src/shared/practice'

test('encoding preserves supported punctuation, separates words and ignores unsupported input', () => {
  assert.equal(supportedText('a中2?\nB💡'), 'a2?\nB')
  assert.equal(formatCode(encodeWords('  a2?\n B  ')), '.- ..--- ..--.. / -...')
  assert.equal(formatCode(encodeWords('  \n')), '')
})

test('Morse skips word gaps without scoring them, and freezes the final time', () => {
  let session = beginSession('E T')
  session = editSession(session, { type: 'input', value: 'E', mode: 'morse', at: 1000 })
  assert.equal(session.typed, 'E ')
  session = editSession(session, { type: 'input', value: 'T', mode: 'morse', at: 7000 })
  assert.deepEqual(scoreSession(session, 'morse', 90000), { wpm: 4, cpm: 20, accuracy: 100, errors: 0, time: '00:06' })
  assert.equal(editSession(session, { type: 'input', value: 'T', mode: 'morse', at: 9000 }), session)
})

test('correcting an English mistake updates the accuracy and error count', () => {
  let session = beginSession('ABC')
  session = editSession(session, { type: 'input', value: 'A', mode: 'latin', at: 1000 })
  session = editSession(session, { type: 'input', value: 'Z', mode: 'latin', at: 2000 })
  assert.equal(scoreSession(session, 'latin', 2000).accuracy, 50)
  session = editSession(session, { type: 'backspace', at: 3000 })
  assert.equal(scoreSession(session, 'latin', 3000).errors, 0)
  assert.equal(session.typed, 'A')
})

test('sample characters and demo time are excluded from real scores on continuation', () => {
  let session = beginSession('ABC', 'X')
  session = editSession(session, { type: 'input', value: 'B', mode: 'latin', at: 10000 })
  session = editSession(session, { type: 'input', value: 'C', mode: 'latin', at: 16000 })
  assert.deepEqual(scoreSession(session, 'latin', 20000), { wpm: 4, cpm: 20, accuracy: 100, errors: 0, time: '00:06' })
})

test('pausing a twelve-second round preserves its text and counts only subsequent active time', () => {
  let session = editSession(beginSession('ABC'), { type: 'replace', value: 'A', at: 1000 })
  session = editSession(session, { type: 'pause', at: 13000 })
  assert.equal(session.typed, 'A')
  assert.equal(scoreSession(session, 'latin', 613000).time, '00:12')
  assert.equal(editSession(session, { type: 'pause', at: 613000 }), session)
  session = editSession(session, { type: 'replace', value: 'AB', at: 613000 })
  session = editSession(session, { type: 'replace', value: 'ABC', at: 616000 })
  assert.deepEqual(scoreSession(session, 'latin', 916000), { wpm: 2, cpm: 12, accuracy: 100, errors: 0, time: '00:15' })
})

import { motion } from 'framer-motion'
import { useCallback } from 'react'
import styled from 'styled-components'

const SpaceButton = styled(motion.button)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  background-color: var(--color-neutral-7);
  &:hover {
    background-color: var(--color-neutral-8);
  }
  &:active {
    top: 6px;
    &::before {
      top: 1px;
      left: 0px;
      width: 100%;
      height: 100%;
    }
  }
  &::before {
    background-color: var(--color-neutral-6);
    position: absolute;
    content: '';
    width: calc(100% + 4px);
    height: calc(100% + 8px);
    top: 0px;
    left: -2px;
    border-radius: inherit;
    z-index: -1;
  }
`

export default function MotionSpaceButton() {
  const triggerKeyEvent = useCallback((type: 'keydown' | 'keyup') => {
    const event = new KeyboardEvent(type, {
      key: ' ',
      code: 'Space',
      keyCode: 32, // keyCode is deprecated but still used in some browsers
      charCode: 32,
      bubbles: true,
      cancelable: true,
    })
    document.dispatchEvent(event)
  }, [])

  // 处理按钮的onMouseDown事件
  const handleMouseDown = useCallback(() => {
    triggerKeyEvent('keydown')
  }, [triggerKeyEvent])

  // 处理按钮的onMouseUp事件
  const handleMouseUp = useCallback(() => {
    triggerKeyEvent('keyup')
  }, [triggerKeyEvent])

  // 处理按钮的onMouseLeave事件（防止鼠标移出后未触发onMouseUp事件）
  // const handleMouseLeave = useCallback(() => {
  //   triggerKeyEvent('keyup')
  // }, [triggerKeyEvent])
  return (
    <SpaceButton onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      Click Me
    </SpaceButton>
  )
}

import { useAtom } from 'jotai'
import './App.css'
import Tree from './flow-tree/Tree'
import { fromEvent } from 'rxjs'
import { HighlightEdgeAtom } from './atom'
import React, { useEffect } from 'react'

const App = () => {
  const [_, setHighlightEdge] = useAtom(HighlightEdgeAtom)

  useEffect(() => {
    console.log('11')
    const keyDownEvent = fromEvent(document, 'keydown')
    keyDownEvent.subscribe((e) => {
      console.log('keyDownEvent', e)
      // if (e.key === 'a') {
      //   setHighlightEdge('e1-2')
      // } else {
      //   setHighlightEdge('e1-3')
      // }
    })
  }, [])
  return <Tree />
}

export default React.memo(App)

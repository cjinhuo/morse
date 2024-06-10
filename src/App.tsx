import './App.css'
import Tree from './Tree'
import { fromEvent } from 'rxjs'
const App = () => {
  const keyDownEvent = fromEvent(document, 'keydown')
  keyDownEvent.subscribe((e) => {
    console.log('keyDownEvent', e)
  })
  return <Tree />
}

export default App

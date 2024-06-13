import { useAtomValue } from 'jotai'
import { memo, useEffect, useState } from 'react'
import { BaseEdge, getStraightPath, type EdgeProps } from 'reactflow'
import { HighlightEdgeAtom } from '../../atom'
import { type EdgeData } from '../../constants'
import { MorseCodeType } from '../../types'

const ClassNameInit = ['react-flow__edge-path']
export default memo(({ id, sourceX, sourceY, targetX, targetY, data }: EdgeProps<EdgeData>) => {
  const edgeId = useAtomValue(HighlightEdgeAtom)
  const [className, setClassName] = useState(ClassNameInit)
  // console.log('edge', id, sourceX, sourceY, targetX, targetY)
  // todo 需要计算两个节点之间的路径
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  })

  useEffect(() => {
    console.log('edgeId', edgeId, id)
    if (edgeId === id) {
      setClassName((prev) => [...prev, 'react-flow__edge-path--animated'])
      setTimeout(() => {
        setClassName(ClassNameInit)
      }, 500)
    }
  }, [edgeId, id])

  const strokeDasharray = data!.type === MorseCodeType.dot ? '1, 4' : '4, 2'

  return (
    <>
      {/* react-flow_edge-animate */}
      <path className={className.join(' ')} stroke='deepskyblue' strokeDasharray={strokeDasharray} id={id} d={edgePath}></path>
    </>
  )
})

import { memo } from 'react'
import { BaseEdge, getStraightPath, type EdgeProps } from 'reactflow'
import styled from 'styled-components'
export enum MorseCodeType {
  dot = 'dot',
  dash = 'dash',
}
export interface EdgeData {
  type: MorseCodeType
}
export default memo(({ id, sourceX, sourceY, targetX, targetY, data }: EdgeProps<EdgeData>) => {
  console.log('edge', id, sourceX, sourceY, targetX, targetY)
  // todo 需要计算两个节点之间的路径
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  })

  const strokeDasharray = data!.type === MorseCodeType.dot ? '1, 4' : '4, 2'

  return (
    <>
      {/* react-flow_edge-animate */}
      <path className='react-flow__edge-path' stroke-dasharray={strokeDasharray} id={id} d={edgePath}></path>
    </>
  )
})

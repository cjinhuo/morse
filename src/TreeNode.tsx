import React, { memo, ReactNode } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'
import styled from 'styled-components'
export type NodeData = {
  title: string
  value: string
}
const Node = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  .node_content {
  }
  .react-flow__handle {
    opacity: 0;
  }
`

export default memo(({ data }: NodeProps<NodeData>) => {
  console.log('data', data)
  return (
    <Node>
      <div className='node_content'>{data.title}</div>
      <Handle type='source' position={Position.Bottom} />
      <Handle type='target' position={Position.Top} />
    </Node>
  )
})

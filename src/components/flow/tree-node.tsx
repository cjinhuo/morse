import React, { memo, ReactNode, useState } from 'react'
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
  /* border: 1px solid white; */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  .node_content {
    color: white;
  }
  .react-flow__handle {
    opacity: 0;
  }
  @keyframes spinner {
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
`

const NodeClassNameInit = ['react-flow__node--animated']
export default memo(({ data }: NodeProps<NodeData>) => {
  const [className, setClassName] = useState(NodeClassNameInit)
  console.log('data', data)
  return (
    <Node className={className.join(' ')}>
      <div className='node_content gradient'>{data.title}</div>
      <Handle type='source' position={Position.Bottom} />
      <Handle type='target' position={Position.Top} />
    </Node>
  )
})

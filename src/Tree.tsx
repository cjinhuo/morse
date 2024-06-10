import ReactFlow, { type Node, type Edge, useEdgesState, useNodesState, Background } from 'reactflow'
import { useState } from 'react'
import 'reactflow/dist/style.css'
import TreeEdge, { MorseCodeType, type EdgeData } from './TreeEdge'
import TreeNode, { type NodeData } from './TreeNode'
import styled from 'styled-components'
const initialNodes: Node<NodeData>[] = [
  {
    id: '1',
    type: 'tree',
    data: { title: '', value: '' },
    draggable: false,
    connectable: false,
    position: { x: 250, y: 25 },
  },
  {
    id: '2',
    type: 'tree',
    draggable: false,
    connectable: false,
    data: { title: 'E', value: '.' },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'tree',
    draggable: false,
    connectable: false,
    data: { title: 'T', value: '.-' },
    position: { x: 400, y: 125 },
  },
  {
    id: '4',
    type: 'tree',
    draggable: false,
    connectable: false,
    data: { title: 'I', value: '..' },
    position: { x: 250, y: 250 },
  },
]

const initialEdges: Edge<EdgeData>[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'tree',
    data: {
      type: MorseCodeType.dot,
    },
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
    type: 'tree',
    data: {
      type: MorseCodeType.dash,
    },
  },
]
const edgeTypes = {
  tree: TreeEdge,
}
const nodeTypes = {
  tree: TreeNode,
}
const ReactFlowWrap = styled(ReactFlow)`
  .react-flow__edge-path {
    stroke: white;
  }
  .react-flow__edge .react-flow__edge-path--animated {
    animation: flow 0.5s linear;
    stroke-dasharray: 0, 0;
    fill: none;
    stroke: deepskyblue;
  }
  .react-flow__node--animated::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #1a232a;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: conic-gradient(transparent, rgba(168, 239, 255, 1), transparent 30%);
    animation: rotate 2s linear infinite;
  }
  .react-flow__node--animated::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 2px;
    top: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background: #000;
    border-radius: 50%;
  }
  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }
  @keyframes flow {
    0% {
      stroke-dasharray: 0, 260;
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dasharray: 260, 0;
      stroke-dashoffset: 0;
    }
  }
`
export default function Tree() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ReactFlowWrap
        defaultEdgeOptions={{ type: 'tree' }}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView>
        {/* <Background /> */}
      </ReactFlowWrap>
    </div>
  )
}

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
    stroke: black;
  }
  .react-flow__edge .react-flow__edge-path--animated {
    animation: flow 0.5s linear;
    stroke-dasharray: 0, 0;
    fill: none;
    stroke: deepskyblue;
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

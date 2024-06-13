import ReactFlow, { type Node, type Edge, useEdgesState, useNodesState, Background } from 'reactflow'
import 'reactflow/dist/style.css'
import TreeEdge from './tree-edge'
import styled from 'styled-components'
import { builtMorseBinaryTree } from '../utils'
import { FLOW_TREE_NAME, WORD_MORSE_CODE, type EdgeData } from '../constants'
import { MorseCodeType, type BinaryTreeNode, type FlowTreeNode } from '../types'
import dagre from 'dagre'
import { Position } from '@xyflow/react'
import type { NodeData } from './tree-node'
import TreeNode from './tree-node'
const dagreGraph = new dagre.graphlib.Graph()
dagreGraph.setDefaultEdgeLabel(() => ({}))

const nodeWidth = 172
const nodeHeight = 36
const getLayoutedElements = (nodes: Node<NodeData>[], edges: Edge<EdgeData>[], direction = 'TB') => {
  const isHorizontal = direction === 'LR'
  dagreGraph.setGraph({ rankdir: direction })

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight })
  })

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target)
  })

  dagre.layout(dagreGraph)

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id)
    node.targetPosition = isHorizontal ? Position.Left : Position.Top
    node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    }

    return node
  })

  return { nodes, edges }
}
const wordMorseCodeTree = builtMorseBinaryTree(WORD_MORSE_CODE)
function traverseMorseCodeBinaryTreeByBfs(root: BinaryTreeNode) {
  let id = 0
  const stack: FlowTreeNode[] = [root]
  const nodes: Node<NodeData>[] = []
  const edges: Edge<EdgeData>[] = []
  while (stack.length !== 0) {
    id++
    const node = stack.shift()
    if (!node) {
      break
    }
    if (node.parentId) {
      edges.push({
        id: `${id}`,
        source: node.parentId,
        target: String(id),
        type: FLOW_TREE_NAME,
        data: {
          type: node.morseCodeType === MorseCodeType.dot ? MorseCodeType.dot : MorseCodeType.dash,
        },
      })
    }
    nodes.push({
      id: String(id),
      type: FLOW_TREE_NAME,
      data: { title: node.label, value: node.value },
      draggable: false,
      connectable: false,
      position: { x: 0, y: 0 },
    })
    node.left &&
      stack.push({
        ...node.left,
        parentId: String(id),
        morseCodeType: MorseCodeType.dot,
      })
    node.right &&
      stack.push({
        ...node.right,
        parentId: String(id),
        morseCodeType: MorseCodeType.dash,
      })
  }
  return [nodes, edges] as const
}

const edgeTypes = {
  tree: TreeEdge,
}
const nodeTypes = {
  tree: TreeNode,
}
const ReactFlowWrap = styled(ReactFlow)`
  .react-flow__edge-path {
    /* stroke: white; */
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
    /* background: #000; */
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
const [morseNodes, morseEdges] = traverseMorseCodeBinaryTreeByBfs(wordMorseCodeTree)
const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(morseNodes, morseEdges)
export default function Tree() {
  console.log('layoutedNodes', layoutedNodes)
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges)

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
        <Background />
      </ReactFlowWrap>
    </div>
  )
}

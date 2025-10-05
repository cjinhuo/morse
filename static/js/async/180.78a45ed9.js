"use strict";(self.webpackChunkmorse_code=self.webpackChunkmorse_code||[]).push([["180"],{69886:function(e,t,o){var r=o(52676),a=o(97413),n=o(37921),i=o(75271),s=o(30735),d=o(59497);let l=["react-flow__edge-path"];t.Z=(0,i.memo)(e=>{let{id:t,sourceX:o,sourceY:c,targetX:h,targetY:p,data:f}=e,g=(0,n.Dv)(s.Al),[u,y]=(0,i.useState)(l),[m]=(0,a.Hm)({sourceX:o,sourceY:c,targetX:h,targetY:p});(0,i.useEffect)(()=>{console.log("edgeId",g,t),g===t&&(y(e=>[...e,"react-flow__edge-path--animated"]),setTimeout(()=>{y(l)},500))},[g,t]);let k=(null==f?void 0:f.type)===d.Ok.dot?"1, 4":"4, 2";return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("path",{className:u.join(" "),stroke:"deepskyblue",strokeDasharray:k,id:t,d:m})})})},62769:function(e,t,o){var r=o(52676),a=o(90698),n=o(97413),i=o(75271),s=o(29508);let d=s.ZP.div`
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
`,l=["react-flow__node--animated"];t.Z=(0,i.memo)(e=>{let{data:t}=e,[o,s]=(0,i.useState)(l);return console.log("data",t),(0,r.jsxs)(d,{className:o.join(" "),children:[(0,r.jsx)("div",{className:"node_content gradient",children:t.title}),(0,r.jsx)(a.HH,{type:"source",position:n.Ly.Bottom}),(0,r.jsx)(a.HH,{type:"target",position:n.Ly.Top})]})})},82424:function(e,t,o){o.r(t),o.d(t,{default:function(){return _}}),o(34210);var r=o(52676),a=o(90698);o(16618);var n=o(97413),i=o(6724),s=o.n(i),d=o(29508),l=o(59497),c=o(72853),h=o(69886),p=o(62769);let f=new(s()).graphlib.Graph;f.setDefaultEdgeLabel(()=>({}));let g=(0,c.wv)(l.Tb),u={tree:h.Z},y={tree:p.Z},m=d.ZP.div`
  width: 100%;
  height: 100%;
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
`,[k,w]=function(e){let t=0,o=[e],r=[],a=[];for(;0!==o.length;){t++;let e=o.shift();if(!e)break;e.parentId&&a.push({id:`${t}`,source:e.parentId,target:String(t),type:l.lw,data:{type:e.morseCodeType===l.Ok.dot?l.Ok.dot:l.Ok.dash}}),r.push({id:String(t),type:l.lw,data:{title:e.label,value:e.value},draggable:!1,connectable:!1,position:{x:0,y:0}}),e.left&&o.push({...e.left,parentId:String(t),morseCodeType:l.Ok.dot}),e.right&&o.push({...e.right,parentId:String(t),morseCodeType:l.Ok.dash})}return[r,a]}(g),{nodes:x,edges:b}=function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"TB",r="LR"===o;for(let t of(f.setGraph({rankdir:o}),e))f.setNode(t.id,{width:172,height:36});for(let e of t)f.setEdge(e.source,e.target);for(let t of(s().layout(f),e)){let e=f.node(t.id);t.targetPosition=r?n.Ly.Left:n.Ly.Top,t.sourcePosition=r?n.Ly.Right:n.Ly.Bottom,t.position={x:e.x-86,y:e.y-18}}return{nodes:e,edges:t}}(k,w);function _(){console.log("layoutedNodes",x);let[e,t,o]=(0,a.Rr)(x),[n,i,s]=(0,a.ll)(b);return(0,r.jsx)("div",{style:{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsx)(m,{children:(0,r.jsx)(a.x$,{defaultEdgeOptions:{type:"tree"},nodes:e,edges:n,onNodesChange:o,onEdgesChange:s,nodeTypes:y,edgeTypes:u,fitView:!0,children:(0,r.jsx)(a.Aq,{})})})})}}}]);
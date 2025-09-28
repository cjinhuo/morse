(()=>{"use strict";var e={86668:function(){},90997:function(e,t,r){e.exports=r.p+"static/media/error_input.08e6c1b7.wav"},3426:function(e,t,r){e.exports=r.p+"static/media/typewriter.08d818ca.mp3"},30735:function(e,t,r){r.d(t,{Al:function(){return o},J2:function(){return a}});var n=r(62401),i=r(59497);let o=(0,n.rw)(""),a=(0,n.rw)({morseCode:"",status:i.G2.idle});(0,n.rw)("")},98911:function(e,t,r){r.d(t,{a:function(){return o},l:function(){return i}});var n=r(62401);let i={strokeWidth:3,dashWidth:12,lineHeight:24,letterSpace:16,dotDashSpace:6,containerPadding:20},o=(0,n.O4)("morse-svg-config",i)},25100:function(e,t,r){var n=r(52676);r(86668);var i=r(70782),o=r(75271),a=r(80455),l=r(29508),s=r(7667);let c=l.ZP.div`
  padding: 5vh 8vw;
`;t.Z=o.memo(function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Ar.Header,{children:(0,n.jsx)(s.Z,{})}),(0,n.jsx)(i.Ar.Content,{children:(0,n.jsx)(c,{className:"w-full grow",children:(0,n.jsx)(a.j3,{})})}),(0,n.jsx)(i.Ar.Footer,{})]})})},69886:function(e,t,r){var n=r(52676),i=r(97413),o=r(37921),a=r(75271),l=r(30735),s=r(59497);let c=["react-flow__edge-path"];t.Z=(0,a.memo)(e=>{let{id:t,sourceX:r,sourceY:u,targetX:d,targetY:f,data:h}=e,m=(0,o.Dv)(l.Al),[p,x]=(0,a.useState)(c),[v]=(0,i.Hm)({sourceX:r,sourceY:u,targetX:d,targetY:f});(0,a.useEffect)(()=>{console.log("edgeId",m,t),m===t&&(x(e=>[...e,"react-flow__edge-path--animated"]),setTimeout(()=>{x(c)},500))},[m,t]);let g=(null==h?void 0:h.type)===s.Ok.dot?"1, 4":"4, 2";return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("path",{className:p.join(" "),stroke:"deepskyblue",strokeDasharray:g,id:t,d:v})})})},62769:function(e,t,r){var n=r(52676),i=r(90698),o=r(97413),a=r(75271),l=r(29508);let s=l.ZP.div`
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
`,c=["react-flow__node--animated"];t.Z=(0,a.memo)(e=>{let{data:t}=e,[r,l]=(0,a.useState)(c);return console.log("data",t),(0,n.jsxs)(s,{className:r.join(" "),children:[(0,n.jsx)("div",{className:"node_content gradient",children:t.title}),(0,n.jsx)(i.HH,{type:"source",position:o.Ly.Bottom}),(0,n.jsx)(i.HH,{type:"target",position:o.Ly.Top})]})})},82424:function(e,t,r){r.d(t,{Z:function(){return j}}),r(34210);var n=r(52676),i=r(90698);r(16618);var o=r(97413),a=r(6724),l=r.n(a),s=r(29508),c=r(59497),u=r(72853),d=r(69886),f=r(62769);let h=new(l()).graphlib.Graph;h.setDefaultEdgeLabel(()=>({}));let m=(0,u.wv)(c.Tb),p={tree:d.Z},x={tree:f.Z},v=s.ZP.div`
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
`,[g,b]=function(e){let t=0,r=[e],n=[],i=[];for(;0!==r.length;){t++;let e=r.shift();if(!e)break;e.parentId&&i.push({id:`${t}`,source:e.parentId,target:String(t),type:c.lw,data:{type:e.morseCodeType===c.Ok.dot?c.Ok.dot:c.Ok.dash}}),n.push({id:String(t),type:c.lw,data:{title:e.label,value:e.value},draggable:!1,connectable:!1,position:{x:0,y:0}}),e.left&&r.push({...e.left,parentId:String(t),morseCodeType:c.Ok.dot}),e.right&&r.push({...e.right,parentId:String(t),morseCodeType:c.Ok.dash})}return[n,i]}(m),{nodes:y,edges:w}=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"TB",n="LR"===r;for(let t of(h.setGraph({rankdir:r}),e))h.setNode(t.id,{width:172,height:36});for(let e of t)h.setEdge(e.source,e.target);for(let t of(l().layout(h),e)){let e=h.node(t.id);t.targetPosition=n?o.Ly.Left:o.Ly.Top,t.sourcePosition=n?o.Ly.Right:o.Ly.Bottom,t.position={x:e.x-86,y:e.y-18}}return{nodes:e,edges:t}}(g,b);function j(){console.log("layoutedNodes",y);let[e,t,r]=(0,i.Rr)(y),[o,a,l]=(0,i.ll)(w);return(0,n.jsx)("div",{style:{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsx)(v,{children:(0,n.jsx)(i.x$,{defaultEdgeOptions:{type:"tree"},nodes:e,edges:o,onNodesChange:r,onEdgesChange:l,nodeTypes:x,edgeTypes:p,fitView:!0,children:(0,n.jsx)(i.Aq,{})})})})}},61690:function(e,t,r){var n=r(52676),i=r(70782),o=r(80455),a=r(87428),l=r(59497),s=r(29508);let c=s.ZP.nav`
  display: flex;
  margin-left: 1rem;
  > div {
    margin-right: 2rem;
  }
`;t.Z=()=>{let e=(0,o.TH)();return(0,n.jsxs)(c,{children:[(0,n.jsx)(i.u,{content:"Morse Code Converter",children:(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsx)(a.Z,{name:l.Jz.switch,value:"/morse/converter",type:"route",active:"/morse/converter"===e.pathname})})}),(0,n.jsx)(i.u,{content:"Latin Type",children:(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsx)(a.Z,{name:l.Jz["keyboard-2"],value:"/morse/latin",type:"route",active:"/morse/latin"===e.pathname})})})]})}},7667:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(52676),i=r(29508),o=r(15389),a=r(25585);let l=i.ZP.div`
  padding-left: 5vw;
  padding-right: 5vw;
`;function s(){return(0,n.jsxs)(l,{className:"w-full flex items-center justify-between h-10",children:[(0,n.jsx)(o.Z,{}),(0,n.jsx)(a.Z,{})]})}},15389:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(52676),i=r(78203);function o(){return(0,n.jsx)("div",{className:"h-full flex justify-start",children:(0,n.jsx)(i.Z,{})})}},78203:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(52676),i=r(80455),o=r(59497),a=r(5437);function l(){let e=(0,i.s0)();return(0,n.jsxs)("div",{onClick:()=>{e("/morse")},className:"h-full flex cursor-pointer",children:[(0,n.jsx)(a.Z,{class:"text-skin-neutral-2 relative",style:{bottom:"2px"},name:o.Jz["morse-code"],size:"2.5rem"}),(0,n.jsx)("div",{className:"text-skin-neutral-3 font-medium text-3xl",children:"MorseType"})]})}},25585:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(52676),i=r(59497),o=r(87428),a=r(61690),l=r(94540);function s(){return(0,n.jsxs)("div",{className:"h-full flex",children:[(0,n.jsx)(a.Z,{}),(0,n.jsx)(o.Z,{name:i.Jz.github,value:"https://github.com/cjinhuo/cjinhuo.github.io",type:"link"}),(0,n.jsx)(l.Z,{})]})}},94540:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(52676),i=r(6523),o=r(59497),a=r(87428);function l(){let[e,t]=(0,i.Z)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.Z,{style:{marginLeft:"2rem"},name:e===o.hY.light?o.Jz.light:o.Jz.dark,onClick:()=>{t(e===o.hY.light?o.hY.dark:o.hY.light)}})})}},5437:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(52676);function i(e){return(0,n.jsx)("iconpark-icon",{size:"1.3rem",style:{transition:"color 0.1s"},class:`text-skin-neutral-7 hover:text-skin-neutral-5 ${e.active?"text-skin-neutral-5":""}`,...e})}},26216:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(52676),i=r(37921),o=r(75271),a=r(29508),l=r(30735),s=r(10272),c=r(59497),u=r(72853),d=r(58212),f=r(62168);let h=a.ZP.div`
  position: fixed;
  left: 20%;
  bottom: 16vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .visibility-hidden {
    animation: maskHideAnimation 1.5s forwards;
  }
  .visibility-show {
    animation: maskShowAnimation 0.5s forwards;
  }

  @keyframes maskShowAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes maskHideAnimation {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;function m(){let{morseCode:e,status:t}=(0,i.Dv)(l.J2);(0,s.Z)();let[r,a]=(0,o.useMemo)(()=>t===c.G2.idle?["invisible"]:t===c.G2.done?["visibility-hidden",(0,u.R4)(e)]:["visibility-show"],[t,e]);return(0,n.jsxs)(h,{children:[(0,n.jsxs)("div",{style:{backgroundColor:"var(--color-neutral-8)",opacity:"0.8"},className:`text-3xl overflow-hidden w-full h-16 flex justify-center items-center rounded-2xl ${r}`,children:[(0,n.jsx)(d.Z,{morseCode:e}),(0,n.jsx)("div",{className:"text-skin-neutral-4",children:null===a?"-> invalid morse code":a})]}),(0,n.jsx)("div",{className:"h-16 w-full mt-4",children:(0,n.jsx)(f.Z,{})})]})}},87428:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(52676),i=r(84127),o=r(80455),a=r(5437);function l(e){let{name:t,value:r,type:l,onClick:s,active:c=!1,...u}=e,d=(0,o.s0)();return(0,n.jsx)(i.E.div,{whileHover:c?{}:{scale:1.2},style:{scale:c?1.2:1},className:`flex items-center ${c?"cursor-not-allowed opacity-50":"cursor-pointer"}`,onClick:()=>{if(!c){if(null==s||s(),"link"===l)return window.open(r);if("route"===l&&r)return d(r)}},children:(0,n.jsx)(a.Z,{...u,name:t,active:c})})}},58212:function(e,t,r){r(64072),r(87395);var n=r(52676),i=r(53954),o=r.n(i),a=r(75271),l=r(29508),s=r(59497);let c={dotWidth:0,dashWidth:8,strokeWidth:4,stroke:"",lineHeight:20,letterSpace:10,dotDashSpace:4,containerWidth:10,containerHeight:10,containerPadding:10,autoCalculateContainerSize:!0},u=l.ZP.svg`
  .line {
    stroke: ${e=>{let{stroke:t}=e;return t||"var(--color-neutral-4)"}};
  }
`,d=(0,a.forwardRef)((e,t)=>{let r=o()(c,e,(e,t)=>void 0===t?e:t),[i,a,...l]=(()=>{let e=r.containerPadding,t=r.containerPadding,i=e,o=t,a=2*r.containerPadding,l=2*r.containerPadding;if(r.morseCode.length){let c=r.morseCode.split(s.o4).map((c,u)=>(e=i=r.containerPadding,0!==u&&(t+=r.lineHeight,o+=r.lineHeight,l+=r.lineHeight),(0,n.jsx)("g",{children:Array.from(c).map((l,u)=>{if(u===c.length-1&&(a=Math.max(a,i+r.containerPadding)),l===s.bX)return e+=r.letterSpace,(0,n.jsx)(n.Fragment,{});let d=l===s.OF.dotChar;i=(e=0===e?e:e+r.dotDashSpace)+(d?r.dotWidth:r.dashWidth);let f=(0,n.jsx)("line",{strokeWidth:r.strokeWidth,strokeLinecap:"round",className:"line",x1:e,y1:t,x2:i,y2:o},`${e}${t}`);return e=i+=r.dotDashSpace,f})},t)));return[r.autoCalculateContainerSize?a:r.containerWidth,r.autoCalculateContainerSize?l:r.containerHeight,...c]}return[0,0,null]})();return(0,n.jsx)(u,{ref:t,width:i,height:a,stroke:e.stroke,children:l})});d.displayName="MorseCodeSvg",t.Z=d},97988:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(52676),i=r(37921),o=r(84127),a=r(75271),l=r(99056),s=r.n(l),c=r(30735),u=r(59497),d=r(72853),f=r(4778);function h(){let e=(0,i.b9)(c.J2),t=(0,a.useRef)(null),[r,l]=(0,a.useState)(void 0),[h,m]=(0,a.useState)({x:0,y:0,content:""});return(0,a.useEffect)(()=>{if(!t.current)return;let r=t.current.start();l(r);let[n,i]=(0,d.LP)(d.Bh),o=n.subscribe(t=>{e(e=>e.status!==u.G2.typing?{status:u.G2.typing,morseCode:t}:{status:u.G2.typing,morseCode:e.morseCode+t})}),a=i.subscribe(n=>{let i=(0,d.R4)(n);i&&((null==r?void 0:r.innerHTML)===i?[r]=t.current.next(u.kc.correct):[r]=t.current.next(u.kc.error,i)),e(e=>({status:u.G2.done,morseCode:e.morseCode})),r?(" "===r.innerText&&([r]=t.current.next(u.kc.correct)),l(r)):(l(null),o.unsubscribe(),a.unsubscribe())});return()=>{o.unsubscribe(),a.unsubscribe()}},[e]),(0,a.useEffect)(()=>{if(!r)return;let e=(0,d.aE)(r.innerHTML);e&&m({x:r.offsetLeft+2,y:r.offsetTop-36,content:e})},[r]),(0,a.useEffect)(()=>()=>{e(e=>({status:u.G2.idle,morseCode:""}))},[e]),(0,n.jsxs)("div",{className:"relative",children:[null===r&&(0,n.jsx)(s(),{autorun:{speed:10,duration:3e3}}),r&&(0,n.jsx)(o.E.div,{animate:{opacity:1,x:h.x,y:h.y},transition:{type:"spring",stiffness:300,damping:30},className:"absolute transform -translate-x-1/2 px-2 py-1 text-sm rounded shadow-lg",style:{backgroundColor:"var(--color-neutral-4)",color:"var(--color-neutral-8)"},children:h.content}),(0,n.jsx)(f.Z,{data:"HELLO WORLD",ref:t})]})}},62168:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(52676),i=r(84127),o=r(75271),a=r(29508);let l=(0,a.ZP)(i.E.button)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  color: var(--color-neutral-5);
  font-size: 1.6rem;
  background-color: var(--color-neutral-8);
  &:hover {
    background-color: var(--color-normal-bg);
  }
  &:active {
    top: 6px;
    &::before {
      top: 1px;
      left: 0px;
      width: 100%;
      height: 100%;
    }
  }
  &::before {
    background-color: var(--color-neutral-7);
    position: absolute;
    content: '';
    width: calc(100% + 4px);
    height: calc(100% + 8px);
    top: 0px;
    left: -2px;
    border-radius: inherit;
    z-index: -1;
  }
`;function s(){let e=(0,o.useCallback)(e=>{let t=new KeyboardEvent(e,{key:" ",code:"Space",keyCode:32,charCode:32,bubbles:!0,cancelable:!0});document.dispatchEvent(t)},[]),t=(0,o.useCallback)(()=>{e("keydown")},[e]),r=(0,o.useCallback)(()=>{e("keyup")},[e]);return(0,n.jsx)(l,{className:"select-none",onPointerDown:t,onPointerUp:r,children:"SPACE"})}},4778:function(e,t,r){r(64072),r(87395),r(19608),r(1056);var n=r(52676),i=r(75271),o=r(9921),a=r(56301),l=r(29508),s=r(59497);let c="caret",u="caret-animation",d="blink",f=l.ZP.div`
  position: relative;
  .${c} {
    height: 3.4rem;
    position: absolute;
    background-color: var(--color-neutral-4);
    width: 0.2rem;
    top: 0;
    left: 0;
    transition: left 0.2s;
  }
  .${u} {
    animation: caretFlashSmooth 1s infinite;
  }
  @keyframes caretFlashSmooth {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .${s._Y} {
    line-height: 3.4rem;
    font-size: 3rem;
    margin-top: 0.2rem;
  }
  .${s.hH} {
    /* outline: 1px solid var(--color-linear-bg-start); */
    margin-right: 0.2rem;
    color: var(--color-neutral-6);
    position: relative;
    display: inline-block;
  }

  .${s.kc.correct} {
    color: var(--color-neutral-4);
    background-color: var(--color-neutral-8);
  }
  .${s.kc.warn} {
    color: #fb923c;
    background-color: #fed7aa;
  }
  /* https://tailwindcss.com/docs/customizing-colors */
  .${s.kc.error} {
    color: #fb7185;
    background-color: #fecdd3;
  }
  .${s.kc.active} {
  }
  .${d} {
    position: absolute;
    bottom: 0;
    left: 0;
    color: white;
    animation: blink_smooth 1s linear;
  }
  @keyframes blink_smooth {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0.8;
    }
    100% {
      opacity: 0;
    }
  }
`;t.Z=(0,i.memo)((0,i.forwardRef)(function(e,t){let{data:r}=e,l=(0,i.useRef)(null),h=(0,i.useRef)(null),m=new o.x;m.pipe((0,a.b)(2e3)).subscribe(()=>{!(!h.current||h.current.classList.contains(u))&&h.current.classList.add(u)});let p=()=>{h.current&&(h.current.classList.remove(u),m.next(""))},x=!1,v=null,g=null,b=()=>{h.current&&v&&(h.current.style.left=`${v.offsetLeft}px`,h.current.style.top=`${v.offsetTop}px`)};(0,i.useEffect)(()=>{if(h.current&&l.current)return window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)}},[]);let y=(0,i.useMemo)(()=>{if(0===r.length)return null;let e=r.split(" ");return e.map((t,r)=>(0,n.jsxs)("div",{className:`inline-block ${s._Y}`,children:[Array.from(t).map((e,t)=>(0,n.jsx)("div",{className:s.hH,children:e},`${e}-${t}`)),r!==e.length-1&&(0,n.jsx)("div",{className:`${s.hH} w-6 whitespace-pre-wrap`,children:" "})]},`${t}-${r}`))},[r]);return(0,i.useImperativeHandle)(t,()=>({start(){var e;if(!l.current||!h.current)return;x=!0;let t=null===(e=l.current.querySelector(`.${s._Y}`))||void 0===e?void 0:e.firstElementChild;if(t)return v=t,t;throw Error("Start Fn Error: not found the first char in container")},prev(){if(!x)throw Error("Prev Fn Error: should run [start] fn first");if(!g)throw Error("Prev Fn Error: there is no last char to iterate");if(g.classList.contains(s.kc.error)?b():g.classList.remove(s.kc.correct),v=g,h.current.style.left=`${v.offsetLeft}px`,h.current.style.top=`${v.offsetTop}px`,!(g=v.previousElementSibling)){var e;let t=null===(e=v.parentElement)||void 0===e?void 0:e.previousElementSibling;(null==t?void 0:t.className.includes(s._Y))&&(g=t.lastElementChild)}return[v,g]},next(e,t){if(!x)throw Error("Next Fn Error: should run [start] fn first");if(!v)throw Error("Next Fn Error: there is no char to iterate");g=v,v.classList.remove(s.kc.warn),v.classList.add(e);let r=v.nextElementSibling;if(r)v=r;else{var n;let e=null===(n=v.parentElement)||void 0===n?void 0:n.nextElementSibling;v=(null==e?void 0:e.className.includes(s._Y))?e.firstElementChild:null}if(e===s.kc.error&&t){let e=document.createElement("span");e.classList.add(d),e.innerHTML=t,g.appendChild(e);let r=g;setTimeout(()=>{r.removeChild(e)},1e3)}return v?b():h.current.style.left=`${g.offsetLeft+g.getBoundingClientRect().width}px`,p(),[v,g]}}),[]),(0,n.jsxs)(f,{ref:l,children:[y,(0,n.jsx)("div",{className:`${c} ${u}`,ref:h})]})}))},13755:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(52676),i=r(75271),o=r(37921),a=r(70782),l=r(16322),s=r(98911);function c(){let[e,t]=(0,o.KO)(s.a),[r,c]=(0,i.useState)(!1),[u,d]=(0,i.useState)(null),f=(0,i.useCallback)((e,r)=>{t(e=>({...e,...r}))},[t]),h=(0,i.useCallback)(()=>{u&&(u.setValues(s.l),t(s.l))},[u,t]),m=(0,n.jsxs)("div",{className:"w-80 p-4",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,n.jsx)(a.Sx.Title,{heading:6,children:"SVG Config"}),(0,n.jsx)(a.zx,{size:"small",onClick:h,children:"Reset"})]}),(0,n.jsxs)(a.l0,{getFormApi:d,initValues:e,onValueChange:f,layout:"vertical",style:{gap:"10px"},children:[(0,n.jsx)(a.l0.Slider,{field:"strokeWidth",label:"Stroke Width",min:1,max:10,step:.5}),(0,n.jsx)(a.l0.Slider,{field:"dashWidth",label:"Dash Width",min:5,max:30,step:1}),(0,n.jsx)(a.l0.Slider,{field:"lineHeight",label:"Line Height",min:15,max:50,step:1}),(0,n.jsx)(a.l0.Slider,{field:"letterSpace",label:"Letter Spacing",min:5,max:30,step:1}),(0,n.jsx)(a.l0.Slider,{field:"dotDashSpace",label:"Dot Dash Spacing",min:2,max:15,step:1}),(0,n.jsx)(a.l0.Slider,{field:"containerPadding",label:"Container Padding",min:10,max:50,step:1})]})]});return(0,n.jsx)(a.J2,{content:m,visible:r,onVisibleChange:c,trigger:"click",position:"left",children:(0,n.jsx)(a.zx,{icon:(0,n.jsx)(l.Z,{}),size:"small",type:"tertiary","aria-label":"\u914D\u7F6E SVG \u53C2\u6570",children:"SVG Config"})})}},10272:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(75271),i=r(99395),o=r(56301),a=r(72853);function l(){let[e,t]=(0,n.useState)((0,a.tq)());return(0,n.useLayoutEffect)(()=>{let e=(0,i.R)(window,"resize").pipe((0,o.b)(500)).subscribe(()=>{t((0,a.tq)())});return()=>{e.unsubscribe()}},[]),e}},6523:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(75271),i=r(72853),o=r(59497);function a(){let[e,t]=(0,n.useState)((0,i.Am)());return(0,n.useEffect)(()=>{let t=document.body;e===o.hY.dark?(t.setAttribute("theme-mode","dark"),document.documentElement.classList.add(o.hY.dark)):(t.removeAttribute("theme-mode"),document.documentElement.classList.remove(o.hY.dark))},[e]),[e,e=>{e===o.hY.light?(localStorage.setItem(o.a1,o.hY.light),t(o.hY.light)):(localStorage.setItem(o.a1,o.hY.dark),t(o.hY.dark))}]}},17204:function(e,t,r){var n=r(52676),i=r(38751),o=r(76455),a=r(96233);let l=document.getElementById("root");l&&i.createRoot(l).render((0,n.jsx)(o.pG,{router:a.Z}))},10199:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(52676);function i(){return(0,n.jsx)("div",{children:(0,n.jsx)("h1",{children:"contributors"})})}},18226:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(52676),i=r(26216),o=r(97988);function a(){return(0,n.jsxs)("div",{className:"w-full h-full",children:[(0,n.jsx)(o.Z,{}),(0,n.jsx)(i.Z,{})]})}},16535:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(52676),i=r(75271),o=r(99395),a=r(73860),l=r(29561),s=r(4778),c=r(59497),u=r(82173);function d(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(!e.current)return;let t=(0,o.R)(document,"keydown").pipe((0,a.U)(e=>({repeat:e.repeat,key:"Space"===e.code?" ":e.key})),(0,l.h)(e=>!e.repeat&&c.oZ.has(e.key))),r=t.pipe((0,l.h)(e=>!c.dc.has(e.key))),n=t.pipe((0,l.h)(e=>c.dc.has(e.key))),i=e.current.start(),s=null,d=r.subscribe(t=>{if(t.key===(null==i?void 0:i.innerText)?([i,s]=e.current.next(c.kc.correct),(0,u.v)()):([i,s]=e.current.next(c.kc.error,t.key),(0,u.M)()),!i){console.log("over");return}}),f=n.subscribe(t=>{if(!!s)(0,u.v)(),[i,s]=e.current.prev()});return()=>{d.unsubscribe(),f.unsubscribe()}},[]),(0,n.jsx)("div",{children:(0,n.jsx)(s.Z,{data:"It's tempting to want to live in the past. It's familiar. It's comfortable. But it's where fossils come from.",ref:e})})}},19098:function(e,t,r){r.d(t,{Z:function(){return f}}),r(18936),r(54335),r(67475),r(94541),r(38174),r(43118);var n=r(52676),i=r(75271),o=r(37921),a=r(70782),l=r(58212),s=r(13755),c=r(72853),u=r(59497),d=r(98911);function f(){let[e,t]=(0,i.useState)(""),[r,f]=(0,i.useState)(""),h=(0,o.Dv)(d.a),m=(0,i.useRef)(null),p="localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname;return(0,n.jsx)("div",{className:"w-full h-full",children:(0,n.jsxs)("div",{className:"mx-auto max-w-[1200px] space-y-4",children:[(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)(a.Sx.Title,{className:"mb-2 text-3xl font-bold",children:"Morse Code Converter"})}),(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsx)(a.Sx.Title,{className:"text-xl font-semibold",children:"Input Text"}),(0,n.jsx)(a.Kx,{value:e,onChange:e=>{let r=e.split("").filter(e=>u.oZ.has(e)||" "===e).join("");t(r),r.trim()?f((0,c.Ow)(r)):f("")},placeholder:"Enter Latin characters, numbers and punctuation marks...",autosize:{minRows:4,maxRows:8},className:"w-full"}),p&&r&&(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(a.Sx.Text,{strong:!0,children:"Morse Code"}),(0,n.jsx)(a.II,{value:r,readOnly:!0})]})]}),(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)(a.Sx.Title,{className:"text-xl font-semibold",children:"SVG Preview"}),(0,n.jsx)(s.Z,{})]}),(0,n.jsx)("div",{className:"border rounded",children:r?(0,n.jsx)("div",{className:"w-full h-full overflow-x-scroll p-1",children:(0,n.jsx)(l.Z,{ref:m,morseCode:r,strokeWidth:h.strokeWidth,dashWidth:h.dashWidth,lineHeight:h.lineHeight,letterSpace:h.letterSpace,dotDashSpace:h.dotDashSpace,containerPadding:h.containerPadding,stroke:"currentColor"},r)}):(0,n.jsx)("div",{className:"flex items-center justify-center min-h-[200px] p-1",children:(0,n.jsx)(a.Sx.Text,{type:"tertiary",children:"Morse code SVG will appear here after input"})})}),r&&(0,n.jsxs)("div",{className:"flex gap-3",children:[(0,n.jsx)(a.zx,{onClick:()=>{if(!m.current)return;let e=m.current,t=document.createElement("canvas"),r=t.getContext("2d");if(!r)return;let n=e.getBoundingClientRect();t.width=2*n.width,t.height=2*n.height,r.fillStyle="#ffffff",r.fillRect(0,0,t.width,t.height);let i=new Blob([new XMLSerializer().serializeToString(e)],{type:"image/svg+xml;charset=utf-8"}),o=URL.createObjectURL(i),a=new Image;a.onload=()=>{r.drawImage(a,0,0,t.width,t.height),t.toBlob(e=>{if(e){let t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download=`morse-code-${Date.now()}.png`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(t)}URL.revokeObjectURL(o)})},a.src=o},type:"primary",children:"Export as PNG"}),(0,n.jsx)(a.zx,{onClick:()=>{if(!m.current)return;let e=new XMLSerializer().serializeToString(m.current);console.log("svgData",e);let t=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),r=URL.createObjectURL(t),n=document.createElement("a");n.href=r,n.download=`morse-code-${Date.now()}.svg`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(r)},type:"secondary",children:"Export as SVG"})]})]})]})})}},96233:function(e,t,r){var n=r(52676),i=r(76455),o=r(25100),a=r(82424),l=r(10199),s=r(18226),c=r(16535),u=r(19098);let d=(0,i.aj)([{path:"/morse",element:(0,n.jsx)(o.Z,{}),children:[{index:!0,path:"/morse",element:(0,n.jsx)(s.Z,{})},{path:"/morse/about",element:(0,n.jsx)(l.Z,{})},{path:"/morse/latin",element:(0,n.jsx)(c.Z,{})},{path:"/morse/tree",element:(0,n.jsx)(a.Z,{})},{path:"/morse/converter",element:(0,n.jsx)(u.Z,{})}]}]);t.Z=d},59497:function(e,t,r){var n,i,o,a,l,s,c,u,d,f,h,m,p,x,v;r.d(t,{G2:function(){return u},Jz:function(){return i},KN:function(){return j},MG:function(){return w},NZ:function(){return R},OF:function(){return l},Ok:function(){return a},TC:function(){return k},Tb:function(){return P},_Y:function(){return Z},a1:function(){return S},bX:function(){return N},cd:function(){return _},dc:function(){return y},gZ:function(){return L},hH:function(){return E},hY:function(){return n},i1:function(){return T},kc:function(){return s},lw:function(){return C},o4:function(){return O},oZ:function(){return b}}),r(56972),r(56879),r(51540),r(50638),r(94910),r(70126),r(80886),r(43605),r(20540),r(21558),r(73845),r(79388),r(3522),r(50294),r(68522),r(49200),r(21911),r(25615),r(39526),r(98774),r(69191),r(83848),r(32768),r(25074),r(77084),r(67475),(d=n||(n={})).light="light",d.dark="dark",(f=i||(i={})).github="github",f.info="info",f.setting="setting",f.keyboard="keyboard",f["keyboard-2"]="keyboard-2",f.dark="dark",f.light="light",f.switch="switch",f["morse-code-1"]="morse-code-1",f["morse-code-2"]="morse-code-2",f["morse-code"]="morse-code";let g=["Backspace","Delete"],b=new Set(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?","'","!","/","(",")","&",":",";","=","+","-","_",'"',"$","@",">","<","[","]","{","}","|",...g," "]),y=new Set(g),w=400,j=130,k=500,S="morse-theme",C="tree";(o||(o={})).space="Space",(h=a||(a={}))[h.dot=1]="dot",h[h.dash=2]="dash",(m=l||(l={})).dotChar=".",m.dashChar="-",(p=s||(s={})).active="active",p.correct="correct",p.error="error",p.warn="warn",(x=c||(c={})).running="running",x.close="close",(v=u||(u={})).idle="idle",v.typing="typing",v.done="done";let Z="word",E="char",N="|",O="+",L="/",T="?",P={A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--.."},_={...P,0:"-----",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----.",".":".-.-.-",",":"--..--","?":"..--..","'":".----.","!":"-.-.--","/":"-..-.","(":"-.--.",")":"-.--.-","&":".-...",":":"---...",";":"-.-.-.","=":"-...-","+":".-.-.","-":"-....-",_:"..--.-",'"':".-..-.",$:"...-..-","@":".--.-."},R=Object.entries(_).reduce((e,t)=>{let[r,n]=t;return e[n]=r,e},{})},82173:function(e,t,r){r.d(t,{M:function(){return l},v:function(){return o}});var n=r(90997);let i=new Audio(r(3426)),o=()=>{i.currentTime=0,i.play()},a=new Audio(n),l=()=>{a.currentTime=0,a.play()}},72853:function(e,t,r){r.d(t,{Am:function(){return w},Bh:function(){return p},LP:function(){return x},Ow:function(){return b},R4:function(){return v},aE:function(){return g},tq:function(){return y},wv:function(){return h}}),r(93088),r(87866),r(12131),r(6016),r(28763),r(96408),r(56201),r(45521),r(81354),r(73206),r(82762),r(42242),r(5320),r(69708),r(11160),r(75698),r(67475),r(18936),r(54335),r(25074),r(77084);var n=r(99395),i=r(29561),o=r(3115),a=r(49969),l=r(73860),s=r(92229),c=r(64777),u=r(56301),d=r(59497);function f(e,t){let r=Object.create(null);return r.label=e,r.value=t,r}function h(e){let t=f("root",""),r=new Map;return Object.entries(e).sort((e,t)=>e[1].length-t[1].length).forEach(e=>{let[n,i]=e,o=f(n,i),a=i.length;if(1===a)i===d.OF.dotChar?t.left=o:t.right=o;else{let e=i.slice(0,a-1),t=r.get(e);t&&(i[a-1]===d.OF.dotChar?t.left=o:t.right=o)}r.set(i,o)}),t}let m=new window.AudioContext;function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sine";arguments.length>1&&void 0!==arguments[1]&&arguments[1];let t=m.createOscillator();t.type=e,t.frequency.setValueAtTime(600,m.currentTime);let r=m.createGain();return r.gain.setValueAtTime(.2,m.currentTime),t.connect(r),r.connect(m.destination),t}function x(e){let t=(0,n.R)(document,"keydown").pipe((0,i.h)(e=>"Space"===e.code&&!e.repeat)),r=(0,n.R)(document,"keyup").pipe((0,i.h)(e=>"Space"===e.code)),f=t.pipe((0,o.w)(()=>{let t=Date.now(),n=e();return n.start(),(0,a.S)(r.pipe((0,l.U)(()=>Date.now()-t<d.KN?d.OF.dotChar:d.OF.dashChar)),(0,s.H)(d.MG).pipe((0,l.U)(()=>d.OF.dashChar))).pipe((0,l.U)(e=>(n.stop(),e)))})),h=f.pipe((0,c.f)(f.pipe((0,u.b)(d.TC))),(0,i.h)(e=>e.length>0),(0,l.U)(e=>e.join("")));return[f,h]}function v(e){return d.NZ[e]||null}function g(e){return d.cd[e]||null}function b(e){return Array.from(e=e.toUpperCase()).reduce((e,t)=>{if(" "===t)return e+=d.o4;if("\n"===t)return e+=d.gZ;let r=g(t);return e+=r?r+d.bX:`${t}${d.i1}`},"")}function y(){return!!window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||!1}function w(){let e=localStorage.getItem(d.a1);return e?e:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?d.hY.dark:d.hY.light}}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(n,i){if(1&i&&(n=this(n)),8&i||"object"==typeof n&&n&&(4&i&&n.__esModule||16&i&&"function"==typeof n.then))return n;var o=Object.create(null);r.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&i&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(function(e){a[e]=function(){return n[e]}});return a.default=function(){return n},r.d(o,a),o}})(),r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],!e.children&&(e.children=[]),e},r.nc=void 0,(()=>{var e=[];r.O=function(t,n,i,o){if(n){o=o||0;for(var a=e.length;a>0&&e[a-1][2]>o;a--)e[a]=e[a-1];e[a]=[n,i,o];return}for(var l=1/0,a=0;a<e.length;a++){for(var n=e[a][0],i=e[a][1],o=e[a][2],s=!0,c=0;c<n.length;c++)l>=o&&Object.keys(r.O).every(function(e){return r.O[e](n[c])})?n.splice(c--,1):(s=!1,o<l&&(l=o));if(s){e.splice(a--,1);var u=i();void 0!==u&&(t=u)}}return t}})(),r.p="/morse/",(()=>{var e={980:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i=n[0],o=n[1],a=n[2],l,s,c=0;if(i.some(function(t){return 0!==e[t]})){for(l in o)r.o(o,l)&&(r.m[l]=o[l]);if(a)var u=a(r)}for(t&&t(n);c<i.length;c++)s=i[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(u)},n=self.webpackChunkmorse_code=self.webpackChunkmorse_code||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,["707","126","361","118","157"],function(){return r("17204")});n=r.O(n)})();
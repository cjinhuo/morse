(()=>{"use strict";var e={86668:function(){},90997:function(e,t,r){e.exports=r.p+"static/media/error_input.08e6c1b7.wav"},3426:function(e,t,r){e.exports=r.p+"static/media/typewriter.08d818ca.mp3"},30735:function(e,t,r){r.d(t,{Al:function(){return i},J2:function(){return a}});var n=r(62401),o=r(59497);let i=(0,n.rw)(""),a=(0,n.rw)({morseCode:"",status:o.G2.idle});(0,n.rw)("")},25100:function(e,t,r){var n=r(52676);r(86668);var o=r(7667),i=r(82157),a=r(80455),s=r(75271),l=r(69747),c=r(29508);let u=c.ZP.div`
  padding: 5vh 8vw;
`;t.Z=s.memo(function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Ar.Header,{children:(0,n.jsx)(o.Z,{})}),(0,n.jsx)(l.Ar.Content,{children:(0,n.jsx)(u,{className:"w-full grow",children:(0,n.jsx)(a.j3,{})})}),(0,n.jsx)(l.Ar.Footer,{children:(0,n.jsx)(i.Z,{})})]})})},69886:function(e,t,r){var n=r(52676),o=r(97413),i=r(37921),a=r(75271),s=r(30735),l=r(59497);let c=["react-flow__edge-path"];t.Z=(0,a.memo)(e=>{let{id:t,sourceX:r,sourceY:u,targetX:d,targetY:f,data:h}=e,p=(0,i.Dv)(s.Al),[m,v]=(0,a.useState)(c),[g]=(0,o.Hm)({sourceX:r,sourceY:u,targetX:d,targetY:f});(0,a.useEffect)(()=>{console.log("edgeId",p,t),p===t&&(v(e=>[...e,"react-flow__edge-path--animated"]),setTimeout(()=>{v(c)},500))},[p,t]);let x=(null==h?void 0:h.type)===l.Ok.dot?"1, 4":"4, 2";return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("path",{className:m.join(" "),stroke:"deepskyblue",strokeDasharray:x,id:t,d:g})})})},62769:function(e,t,r){var n=r(52676),o=r(90698),i=r(97413),a=r(75271),s=r(29508);let l=s.ZP.div`
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
`,c=["react-flow__node--animated"];t.Z=(0,a.memo)(e=>{let{data:t}=e,[r,s]=(0,a.useState)(c);return console.log("data",t),(0,n.jsxs)(l,{className:r.join(" "),children:[(0,n.jsx)("div",{className:"node_content gradient",children:t.title}),(0,n.jsx)(o.HH,{type:"source",position:i.Ly.Bottom}),(0,n.jsx)(o.HH,{type:"target",position:i.Ly.Top})]})})},82424:function(e,t,r){r.d(t,{Z:function(){return w}}),r(34210);var n=r(52676),o=r(90698);r(16618);var i=r(97413),a=r(6724),s=r.n(a),l=r(29508),c=r(59497),u=r(72853),d=r(69886),f=r(62769);let h=new(s()).graphlib.Graph;h.setDefaultEdgeLabel(()=>({}));let p=(0,u.wv)(c.Tb),m={tree:d.Z},v={tree:f.Z},g=l.ZP.div`
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
`,[x,b]=function(e){let t=0,r=[e],n=[],o=[];for(;0!==r.length;){t++;let e=r.shift();if(!e)break;e.parentId&&o.push({id:`${t}`,source:e.parentId,target:String(t),type:c.lw,data:{type:e.morseCodeType===c.Ok.dot?c.Ok.dot:c.Ok.dash}}),n.push({id:String(t),type:c.lw,data:{title:e.label,value:e.value},draggable:!1,connectable:!1,position:{x:0,y:0}}),e.left&&r.push({...e.left,parentId:String(t),morseCodeType:c.Ok.dot}),e.right&&r.push({...e.right,parentId:String(t),morseCodeType:c.Ok.dash})}return[n,o]}(p),{nodes:y,edges:k}=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"TB",n="LR"===r;for(let t of(h.setGraph({rankdir:r}),e))h.setNode(t.id,{width:172,height:36});for(let e of t)h.setEdge(e.source,e.target);for(let t of(s().layout(h),e)){let e=h.node(t.id);t.targetPosition=n?i.Ly.Left:i.Ly.Top,t.sourcePosition=n?i.Ly.Right:i.Ly.Bottom,t.position={x:e.x-86,y:e.y-18}}return{nodes:e,edges:t}}(x,b);function w(){console.log("layoutedNodes",y);let[e,t,r]=(0,o.Rr)(y),[i,a,s]=(0,o.ll)(k);return(0,n.jsx)("div",{style:{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsx)(g,{children:(0,n.jsx)(o.x$,{defaultEdgeOptions:{type:"tree"},nodes:e,edges:i,onNodesChange:r,onEdgesChange:s,nodeTypes:v,edgeTypes:m,fitView:!0,children:(0,n.jsx)(o.Aq,{})})})})}},82157:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(52676);function o(){return(0,n.jsx)("div",{className:"w-full px-8 h-9",children:(0,n.jsx)("span",{})})}},7667:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(52676),o=r(29508),i=r(15389),a=r(25585);let s=o.ZP.div`
  padding-left: 5vw;
  padding-right: 5vw;
`;function l(){return(0,n.jsxs)(s,{className:"w-full flex items-center justify-between h-10",children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)(a.Z,{})]})}},15389:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(52676),o=r(78203),i=r(87428),a=r(59497),s=r(29508);let l=s.ZP.nav`
  display: flex;
  margin-left: 1rem;
  > div {
    margin-right: 2rem;
  }
`,c=()=>(0,n.jsxs)(l,{children:[(0,n.jsx)(i.Z,{name:a.Jz["keyboard-2"],value:"/morse/latin",type:"route"}),(0,n.jsx)(i.Z,{name:a.Jz.setting}),(0,n.jsx)(i.Z,{name:a.Jz.info})]});function u(){return(0,n.jsxs)("div",{className:"h-full flex justify-start",children:[(0,n.jsx)(o.Z,{}),(0,n.jsx)(c,{})]})}},78203:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(52676),o=r(80455),i=r(59497),a=r(5437);function s(){let e=(0,o.s0)();return(0,n.jsxs)("div",{onClick:()=>{e("/morse")},className:"h-full flex cursor-pointer",children:[(0,n.jsx)(a.Z,{class:"text-skin-neutral-2 relative",style:{bottom:"2px"},name:i.Jz["morse-code"],size:"2.5rem"}),(0,n.jsx)("div",{className:"text-skin-neutral-3 font-medium text-3xl",children:"MorseType"})]})}},25585:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(52676),o=r(59497),i=r(87428),a=r(94540);function s(){return(0,n.jsxs)("div",{className:"h-full flex",children:[(0,n.jsx)(i.Z,{name:o.Jz.github,value:"https://github.com/cjinhuo/cjinhuo.github.io",type:"link"}),(0,n.jsx)(a.Z,{})]})}},94540:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(52676),o=r(6523),i=r(59497),a=r(87428);function s(){let[e,t]=(0,o.Z)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.Z,{style:{marginLeft:"2rem"},name:e===i.hY.light?i.Jz.light:i.Jz.dark,onClick:()=>{t(e===i.hY.light?i.hY.dark:i.hY.light)}})})}},5437:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(52676);function o(e){return(0,n.jsx)("iconpark-icon",{size:"1.3rem",style:{transition:"color 0.1s"},class:"text-skin-neutral-7 hover:text-skin-neutral-5",...e})}},26216:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(52676),o=r(37921),i=r(75271),a=r(29508),s=r(30735),l=r(10272),c=r(59497),u=r(72853),d=r(58212),f=r(62168);let h=a.ZP.div`
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
`;function p(){let{morseCode:e,status:t}=(0,o.Dv)(s.J2);(0,l.Z)();let[r,a]=(0,i.useMemo)(()=>t===c.G2.idle?["invisible"]:t===c.G2.done?["visibility-hidden",(0,u.R4)(e)]:["visibility-show"],[t,e]);return(0,n.jsxs)(h,{children:[(0,n.jsxs)("div",{style:{backgroundColor:"var(--color-neutral-8)",opacity:"0.8"},className:`text-3xl overflow-hidden w-full h-16 flex justify-center items-center rounded-2xl ${r}`,children:[(0,n.jsx)(d.Z,{morseCode:e}),(0,n.jsx)("div",{className:"text-skin-neutral-4",children:null===a?"-> invalid morse code":a})]}),(0,n.jsx)("div",{className:"h-16 w-full mt-4",children:(0,n.jsx)(f.Z,{})})]})}},87428:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(52676),o=r(84127),i=r(80455),a=r(5437);function s(e){let{name:t,value:r,type:s,onClick:l,...c}=e,u=(0,i.s0)();return(0,n.jsx)(o.E.div,{whileHover:{scale:1.2},className:"flex items-center cursor-pointer",onClick:()=>(null==l||l(),"link"===s)?window.open(r):"route"===s&&r?u(r):void 0,children:(0,n.jsx)(a.Z,{...c,name:t})})}},58212:function(e,t,r){r.d(t,{Z:function(){return u}}),r(64072),r(87395);var n=r(52676),o=r(53954),i=r.n(o),a=r(29508),s=r(59497);let l={dotWidth:0,dashWidth:8,strokeWidth:4,stroke:"",lineHeight:20,letterSpace:10,dotDashSpace:4,containerWidth:10,containerHeight:10,containerPadding:10,autoCalculateContainerSize:!0},c=a.ZP.svg`
  .line {
    stroke: ${e=>{let{stroke:t}=e;return t||"var(--color-neutral-4)"}};
  }
`;function u(e){let t=i()(l,e,(e,t)=>void 0===t?e:t),[r,o,a]=(()=>{let e=t.containerPadding,r=t.containerPadding,o=e,i=r,a=2*t.containerPadding,l=2*t.containerPadding;if(t.morseCode.length){let c=t.morseCode.split(s.s$).map((c,u)=>(e=o=t.containerPadding,0!==u&&(r+=t.lineHeight,i+=t.lineHeight,l+=t.lineHeight),(0,n.jsx)("g",{children:Array.from(c).map((l,u)=>{if(l===s.bX)return e+=t.letterSpace,(0,n.jsx)(n.Fragment,{});let d=l===s.OF.dotChar;o=(e=0===e?e:e+t.dotDashSpace)+(d?t.dotWidth:t.dashWidth);let f=(0,n.jsx)("line",{strokeWidth:t.strokeWidth,strokeLinecap:"round",className:"line",x1:e,y1:r,x2:o,y2:i},`${e}${r}`);return e=o+=t.dotDashSpace,u===c.length-1&&(a=Math.max(a,o+t.containerPadding)),f})},r)));return[t.autoCalculateContainerSize?a:t.containerWidth,t.autoCalculateContainerSize?l:t.containerHeight,...c]}return[0,0,null]})();return(0,n.jsx)(c,{width:r,height:o,stroke:e.stroke,children:a})}},97988:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(52676),o=r(37921),i=r(84127),a=r(75271),s=r(99056),l=r.n(s),c=r(30735),u=r(59497),d=r(72853),f=r(4778);function h(){let e=(0,o.b9)(c.J2),t=(0,a.useRef)(null),[r,s]=(0,a.useState)(void 0),[h,p]=(0,a.useState)({x:0,y:0,content:""});return(0,a.useEffect)(()=>{if(!t.current)return;let r=t.current.start();s(r);let[n,o]=(0,d.LP)(d.Bh),i=n.subscribe(t=>{e(e=>e.status!==u.G2.typing?{status:u.G2.typing,morseCode:t}:{status:u.G2.typing,morseCode:e.morseCode+t})}),a=o.subscribe(n=>{let o=(0,d.R4)(n);o&&((null==r?void 0:r.innerHTML)===o?[r]=t.current.next(u.kc.correct):[r]=t.current.next(u.kc.error,o)),e(e=>({status:u.G2.done,morseCode:e.morseCode})),r?(" "===r.innerText&&([r]=t.current.next(u.kc.correct)),s(r)):(s(null),i.unsubscribe(),a.unsubscribe())});return()=>{i.unsubscribe(),a.unsubscribe()}},[e]),(0,a.useEffect)(()=>{if(!r)return;let e=(0,d.aE)(r.innerHTML);e&&p({x:r.offsetLeft+2,y:r.offsetTop-36,content:e})},[r]),(0,n.jsxs)("div",{className:"relative",children:[null===r&&(0,n.jsx)(l(),{autorun:{speed:10,duration:3e3}}),r&&(0,n.jsx)(i.E.div,{animate:{opacity:1,x:h.x,y:h.y},transition:{type:"spring",stiffness:300,damping:30},className:"absolute transform -translate-x-1/2 px-2 py-1 text-sm rounded shadow-lg",style:{backgroundColor:"var(--color-neutral-4)",color:"var(--color-neutral-8)"},children:h.content}),(0,n.jsx)(f.Z,{data:"HELLO WORLD",ref:t})]})}},62168:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(52676),o=r(84127),i=r(75271),a=r(29508);let s=(0,a.ZP)(o.E.button)`
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
`;function l(){let e=(0,i.useCallback)(e=>{let t=new KeyboardEvent(e,{key:" ",code:"Space",keyCode:32,charCode:32,bubbles:!0,cancelable:!0});document.dispatchEvent(t)},[]),t=(0,i.useCallback)(()=>{e("keydown")},[e]),r=(0,i.useCallback)(()=>{e("keyup")},[e]);return(0,n.jsx)(s,{className:"select-none",onPointerDown:t,onPointerUp:r,children:"SPACE"})}},4778:function(e,t,r){r(64072),r(87395),r(19608),r(1056);var n=r(52676),o=r(29508),i=r(59497),a=r(75271),s=r(9921),l=r(56301);let c="caret",u="caret-animation",d="blink",f=o.ZP.div`
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

  .${i._Y} {
    line-height: 3.4rem;
    font-size: 3rem;
    margin-top: 0.2rem;
  }
  .${i.hH} {
    /* outline: 1px solid var(--color-linear-bg-start); */
    margin-right: 0.2rem;
    color: var(--color-neutral-6);
    position: relative;
    display: inline-block;
  }

  .${i.kc.correct} {
    color: var(--color-neutral-4);
    background-color: var(--color-neutral-8);
  }
  .${i.kc.warn} {
    color: #fb923c;
    background-color: #fed7aa;
  }
  /* https://tailwindcss.com/docs/customizing-colors */
  .${i.kc.error} {
    color: #fb7185;
    background-color: #fecdd3;
  }
  .${i.kc.active} {
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
`;t.Z=(0,a.memo)((0,a.forwardRef)(function(e,t){let{data:r}=e,o=(0,a.useRef)(null),h=(0,a.useRef)(null),p=new s.x;p.pipe((0,l.b)(2e3)).subscribe(()=>{!(!h.current||h.current.classList.contains(u))&&h.current.classList.add(u)});let m=()=>{h.current&&(h.current.classList.remove(u),p.next(""))},v=!1,g=null,x=null,b=()=>{h.current&&g&&(h.current.style.left=`${g.offsetLeft}px`,h.current.style.top=`${g.offsetTop}px`)};(0,a.useEffect)(()=>{if(h.current&&o.current)return window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)}},[]);let y=(0,a.useMemo)(()=>{if(0===r.length)return null;let e=r.split(" ");return e.map((t,r)=>(0,n.jsxs)("div",{className:`inline-block ${i._Y}`,children:[Array.from(t).map((e,t)=>(0,n.jsx)("div",{className:i.hH,children:e},`${e}-${t}`)),r!==e.length-1&&(0,n.jsx)("div",{className:`${i.hH} w-6 whitespace-pre-wrap`,children:" "})]},`${t}-${r}`))},[r]);return(0,a.useImperativeHandle)(t,()=>({start(){var e;if(!o.current||!h.current)return;v=!0;let t=null===(e=o.current.querySelector(`.${i._Y}`))||void 0===e?void 0:e.firstElementChild;if(t)return g=t,t;throw Error("Start Fn Error: not found the first char in container")},prev(){if(!v)throw Error("Prev Fn Error: should run [start] fn first");if(!x)throw Error("Prev Fn Error: there is no last char to iterate");if(x.classList.contains(i.kc.error)?b():x.classList.remove(i.kc.correct),g=x,h.current.style.left=`${g.offsetLeft}px`,h.current.style.top=`${g.offsetTop}px`,!(x=g.previousElementSibling)){var e;let t=null===(e=g.parentElement)||void 0===e?void 0:e.previousElementSibling;(null==t?void 0:t.className.includes(i._Y))&&(x=t.lastElementChild)}return[g,x]},next(e,t){if(!v)throw Error("Next Fn Error: should run [start] fn first");if(!g)throw Error("Next Fn Error: there is no char to iterate");x=g,g.classList.remove(i.kc.warn),g.classList.add(e);let r=g.nextElementSibling;if(r)g=r;else{var n;let e=null===(n=g.parentElement)||void 0===n?void 0:n.nextElementSibling;g=(null==e?void 0:e.className.includes(i._Y))?e.firstElementChild:null}if(e===i.kc.error&&t){let e=document.createElement("span");e.classList.add(d),e.innerHTML=t,x.appendChild(e);let r=x;setTimeout(()=>{r.removeChild(e)},1e3)}return g?b():h.current.style.left=`${x.offsetLeft+x.getBoundingClientRect().width}px`,m(),[g,x]}}),[]),(0,n.jsxs)(f,{ref:o,children:[y,(0,n.jsx)("div",{className:`${c} ${u}`,ref:h})]})}))},10272:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(75271),o=r(99395),i=r(56301),a=r(72853);function s(){let[e,t]=(0,n.useState)((0,a.tq)());return(0,n.useLayoutEffect)(()=>{let e=(0,o.R)(window,"resize").pipe((0,i.b)(500)).subscribe(()=>{t((0,a.tq)())});return()=>{e.unsubscribe()}},[]),e}},6523:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(75271),o=r(72853),i=r(59497);function a(){let[e,t]=(0,n.useState)((0,o.Am)());return(0,n.useEffect)(()=>{e===i.hY.dark?(document.documentElement.classList.add(i.hY.dark),localStorage.setItem(i.a1,i.hY.dark)):(localStorage.removeItem(i.a1),document.documentElement.classList.remove(i.hY.dark))},[e]),[e,t]}},17204:function(e,t,r){var n=r(52676),o=r(38751),i=r(76455),a=r(96233);let s=document.getElementById("root");s&&o.createRoot(s).render((0,n.jsx)(i.pG,{router:a.Z}))},10199:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(52676);function o(){return(0,n.jsx)("div",{children:(0,n.jsx)("h1",{children:"contributors"})})}},18226:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(52676),o=r(26216),i=r(97988);function a(){return(0,n.jsxs)("div",{className:"w-full h-full",children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)(o.Z,{})]})}},16535:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(52676),o=r(75271),i=r(99395),a=r(73860),s=r(29561),l=r(4778),c=r(59497),u=r(82173);function d(){let e=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(!e.current)return;let t=(0,i.R)(document,"keydown").pipe((0,a.U)(e=>({repeat:e.repeat,key:"Space"===e.code?" ":e.key})),(0,s.h)(e=>!e.repeat&&c.oZ.has(e.key))),r=t.pipe((0,s.h)(e=>!c.dc.has(e.key))),n=t.pipe((0,s.h)(e=>c.dc.has(e.key))),o=e.current.start(),l=null,d=r.subscribe(t=>{if(t.key===(null==o?void 0:o.innerText)?([o,l]=e.current.next(c.kc.correct),(0,u.v)()):([o,l]=e.current.next(c.kc.error,t.key),(0,u.M)()),!o){console.log("over");return}}),f=n.subscribe(t=>{if(!!l)(0,u.v)(),[o,l]=e.current.prev()});return()=>{d.unsubscribe(),f.unsubscribe()}},[]),(0,n.jsx)("div",{children:(0,n.jsx)(l.Z,{data:"It's tempting to want to live in the past. It's familiar. It's comfortable. But it's where fossils come from.",ref:e})})}},96233:function(e,t,r){var n=r(52676),o=r(76455),i=r(25100),a=r(82424),s=r(10199),l=r(18226),c=r(16535);let u=(0,o.aj)([{path:"/morse",element:(0,n.jsx)(i.Z,{}),children:[{index:!0,path:"/morse",element:(0,n.jsx)(l.Z,{})},{path:"/morse/about",element:(0,n.jsx)(s.Z,{})},{path:"/morse/latin",element:(0,n.jsx)(c.Z,{})},{path:"/morse/tree",element:(0,n.jsx)(a.Z,{})}]}]);t.Z=u},59497:function(e,t,r){var n,o,i,a,s,l,c,u,d,f,h,p,m,v,g;r.d(t,{G2:function(){return u},Jz:function(){return o},KN:function(){return w},MG:function(){return k},NZ:function(){return P},OF:function(){return s},Ok:function(){return a},TC:function(){return j},Tb:function(){return L},_Y:function(){return E},a1:function(){return Z},bX:function(){return O},cd:function(){return N},dc:function(){return y},hH:function(){return S},hY:function(){return n},kc:function(){return l},lw:function(){return C},oZ:function(){return b},s$:function(){return _}}),r(56972),r(56879),r(51540),r(50638),r(94910),r(70126),r(80886),r(43605),r(20540),r(21558),r(73845),r(79388),r(3522),r(50294),r(68522),r(49200),r(21911),r(25615),r(39526),r(98774),r(69191),r(83848),r(32768),r(25074),r(77084),r(67475),(d=n||(n={})).light="light",d.dark="dark",(f=o||(o={})).github="github",f.info="info",f.setting="setting",f.keyboard="keyboard",f["keyboard-2"]="keyboard-2",f.dark="dark",f.light="light",f["morse-code-1"]="morse-code-1",f["morse-code-2"]="morse-code-2",f["morse-code"]="morse-code";let x=["Backspace","Delete"],b=new Set(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?","'","!","/","(",")","&",":",";","=","+","-","_",'"',"$","@",">","<","[","]","{","}","|",...x," "]),y=new Set(x),k=400,w=130,j=500,Z="theme",C="tree";(i||(i={})).space="Space",(h=a||(a={}))[h.dot=1]="dot",h[h.dash=2]="dash",(p=s||(s={})).dotChar=".",p.dashChar="-",(m=l||(l={})).active="active",m.correct="correct",m.error="error",m.warn="warn",(v=c||(c={})).running="running",v.close="close",(g=u||(u={})).idle="idle",g.typing="typing",g.done="done";let E="word",S="char",O="|",_="+",L={A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--.."},N={...L,0:"-----",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----.",".":".-.-.-",",":"--..--","?":"..--..","'":".----.","!":"-.-.--","/":"-..-.","(":"-.--.",")":"-.--.-","&":".-...",":":"---...",";":"-.-.-.","=":"-...-","+":".-.-.","-":"-....-",_:"..--.-",'"':".-..-.",$:"...-..-","@":".--.-."},P=Object.entries(N).reduce((e,t)=>{let[r,n]=t;return e[n]=r,e},{})},82173:function(e,t,r){r.d(t,{M:function(){return s},v:function(){return i}});var n=r(90997);let o=new Audio(r(3426)),i=()=>{o.currentTime=0,o.play()},a=new Audio(n),s=()=>{a.currentTime=0,a.play()}},72853:function(e,t,r){r.d(t,{Am:function(){return y},Bh:function(){return m},LP:function(){return v},R4:function(){return g},aE:function(){return x},tq:function(){return b},wv:function(){return h}}),r(93088),r(87866),r(12131),r(6016),r(28763),r(96408),r(56201),r(45521),r(81354),r(73206),r(82762),r(78754),r(5320),r(69708),r(11160),r(75698),r(67475),r(18936),r(54335),r(25074),r(77084);var n=r(99395),o=r(29561),i=r(3115),a=r(49969),s=r(73860),l=r(92229),c=r(64777),u=r(56301),d=r(59497);function f(e,t){let r=Object.create(null);return r.label=e,r.value=t,r}function h(e){let t=f("root",""),r=new Map;return Object.entries(e).sort((e,t)=>e[1].length-t[1].length).forEach(e=>{let[n,o]=e,i=f(n,o),a=o.length;if(1===a)o===d.OF.dotChar?t.left=i:t.right=i;else{let e=o.slice(0,a-1),t=r.get(e);t&&(o[a-1]===d.OF.dotChar?t.left=i:t.right=i)}r.set(o,i)}),t}let p=new window.AudioContext;function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sine";arguments.length>1&&void 0!==arguments[1]&&arguments[1];let t=p.createOscillator();t.type=e,t.frequency.setValueAtTime(600,p.currentTime);let r=p.createGain();return r.gain.setValueAtTime(.2,p.currentTime),t.connect(r),r.connect(p.destination),t}function v(e){let t=(0,n.R)(document,"keydown").pipe((0,o.h)(e=>"Space"===e.code&&!e.repeat)),r=(0,n.R)(document,"keyup").pipe((0,o.h)(e=>"Space"===e.code)),f=t.pipe((0,i.w)(()=>{let t=Date.now(),n=e();return n.start(),(0,a.S)(r.pipe((0,s.U)(()=>Date.now()-t<d.KN?d.OF.dotChar:d.OF.dashChar)),(0,l.H)(d.MG).pipe((0,s.U)(()=>d.OF.dashChar))).pipe((0,s.U)(e=>(n.stop(),e)))})),h=f.pipe((0,c.f)(f.pipe((0,u.b)(d.TC))),(0,o.h)(e=>e.length>0),(0,s.U)(e=>e.join("")));return[f,h]}function g(e){return d.NZ[e]||null}function x(e){return d.cd[e]||null}function b(){return!!window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||!1}function y(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches||"dark"===localStorage.getItem(d.a1)?d.hY.dark:d.hY.light}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(n,o){if(1&o&&(n=this(n)),8&o||"object"==typeof n&&n&&(4&o&&n.__esModule||16&o&&"function"==typeof n.then))return n;var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(function(e){a[e]=function(){return n[e]}});return a.default=function(){return n},r.d(i,a),i}})(),r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],!e.children&&(e.children=[]),e},r.nc=void 0,(()=>{var e=[];r.O=function(t,n,o,i){if(n){i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[n,o,i];return}for(var s=1/0,a=0;a<e.length;a++){for(var n=e[a][0],o=e[a][1],i=e[a][2],l=!0,c=0;c<n.length;c++)s>=i&&Object.keys(r.O).every(function(e){return r.O[e](n[c])})?n.splice(c--,1):(l=!1,i<s&&(s=i));if(l){e.splice(a--,1);var u=o();void 0!==u&&(t=u)}}return t}})(),r.p="/morse/",(()=>{var e={980:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o=n[0],i=n[1],a=n[2],s,l,c=0;if(o.some(function(t){return 0!==e[t]})){for(s in i)r.o(i,s)&&(r.m[s]=i[s]);if(a)var u=a(r)}for(t&&t(n);c<o.length;c++)l=o[c],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(u)},n=self.webpackChunkmorse_code=self.webpackChunkmorse_code||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,["707","126","361","118","24"],function(){return r("17204")});n=r.O(n)})();
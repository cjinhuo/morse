"use strict";(self.rspackChunkmorse_code=self.rspackChunkmorse_code||[]).push([["b"],{M6(e,t,r){var n=r("A"),i=r("Hz"),o=r.n(i),a=r("U"),s=r("n6");r("OU");let l={dotWidth:0,dashWidth:8,strokeWidth:4,stroke:"",lineHeight:20,letterSpace:10,dotDashSpace:4,containerWidth:10,containerHeight:10,containerPadding:10,autoCalculateContainerSize:!0},d=s.Ay.svg`
  .line {
    stroke: ${e=>{let{stroke:t}=e;return t||"var(--color-neutral-4)"}};
  }
`,c=(0,a.forwardRef)((e,t)=>{let r=o()(l,e,(e,t)=>void 0===t?e:t),[i,a,...s]=(()=>{let e=r.containerPadding,t=r.containerPadding,i=e,o=t,a=2*r.containerPadding,s=2*r.containerPadding;if(r.morseCode.length){let l=r.morseCode.split("+").map((l,d)=>(e=i=r.containerPadding,0!==d&&(t+=r.lineHeight,o+=r.lineHeight,s+=r.lineHeight),(0,n.jsx)("g",{children:Array.from(l).map((s,c)=>{if(c===l.length-1&&(a=Math.max(a,i+r.containerPadding)),"|"===s)return e+=r.letterSpace,null;i=(e=0===e?e:e+r.dotDashSpace)+("."===s?r.dotWidth:r.dashWidth);let u=(0,n.jsx)("line",{strokeWidth:r.strokeWidth,strokeLinecap:"round",className:"line",x1:e,y1:t,x2:i,y2:o},`line-${d}-${c}`);return e=i+=r.dotDashSpace,u})},`word-${d}`)));return[r.autoCalculateContainerSize?a:r.containerWidth,r.autoCalculateContainerSize?s:r.containerHeight,...l]}return[0,0,null]})();return(0,n.jsx)(d,{ref:t,width:i,height:a,stroke:e.stroke,children:s})});c.displayName="MorseCodeSvg",t.A=c},tJ(e,t,r){r.r(t),r.d(t,{default:()=>C});var n=r("A"),i=r("hS"),o=r("U"),a=r("n6"),s=r("li"),l=r("M6"),d=r("Ya");let c=(0,a.Ay)(d.P.button)`
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
`;function u(){let e=(0,o.useCallback)(e=>{let t=new KeyboardEvent(e,{key:" ",code:"Space",keyCode:32,charCode:32,bubbles:!0,cancelable:!0});document.dispatchEvent(t)},[]),t=(0,o.useCallback)(()=>{e("keydown")},[e]),r=(0,o.useCallback)(()=>{e("keyup")},[e]);return(0,n.jsx)(c,{className:"select-none",onPointerDown:t,onPointerUp:r,children:"SPACE"})}r("OU");var h=r("jrz");let m=a.Ay.div`
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
`;function f(){let{morseCode:e,status:t}=(0,i.m)(s.Di),[r,a]=(0,o.useMemo)(()=>"idle"===t?["invisible"]:"done"===t?["visibility-hidden",(0,h.jk)(e)]:["visibility-show"],[t,e]);return(0,n.jsxs)(m,{children:[(0,n.jsxs)("div",{style:{backgroundColor:"var(--color-neutral-8)",opacity:"0.8"},className:`text-3xl overflow-hidden w-full h-16 flex justify-center items-center rounded-2xl ${r}`,children:[(0,n.jsx)(l.A,{morseCode:e}),(0,n.jsx)("div",{className:"text-skin-neutral-4",children:null===a?"-> invalid morse code":a})]}),(0,n.jsx)("div",{className:"h-16 w-full mt-4",children:(0,n.jsx)(u,{})})]})}var p=r("mS"),x=r("rA"),b=r.n(x),y=r("zl"),v=r("k8"),g=r("VH");function k(){let e=(0,i.m)(s.zH),t=(0,p.X)(s.Di),r=(0,o.useRef)(null),[a,l]=(0,o.useState)(void 0),[c,u]=(0,o.useState)({x:0,y:0,content:""}),[m,f]=(0,o.useState)(!1),{stats:x,startStats:k,recordInput:C,finishStats:j,resetStats:w}=(0,g.M4)();return(0,o.useEffect)(()=>{if(w(),f(!1),!e||!r.current)return;let n=r.current.start();l(n);let i=!1,[o,a]=(0,h.Y7)(h.lZ),s=o.subscribe(e=>{t(t=>"typing"!==t.status?{status:"typing",morseCode:e}:{status:"typing",morseCode:t.morseCode+e})}),d=a.subscribe(e=>{let o=(0,h.jk)(e);if(o){i||(k(),f(!0),i=!0);let e=n?.dataset.char;e===o?([n]=r.current.next("correct"),C("correct",o,e)):([n]=r.current.next("error",o),C("error",o,e))}t(e=>({status:"done",morseCode:e.morseCode})),n?(" "===n.dataset.char&&([n]=r.current.next("correct")),l(n)):(j(),l(null),s.unsubscribe(),d.unsubscribe())});return()=>{s.unsubscribe(),d.unsubscribe(),t(()=>({status:"idle",morseCode:""}))}},[e,t,k,C,j,w]),(0,o.useEffect)(()=>{if(!a)return;let e=(0,h.z3)(a.dataset.char??"");e&&u({x:a.offsetLeft+2,y:a.offsetTop-36,content:e})},[a]),(0,n.jsxs)("div",{className:"relative",children:[null===a&&(0,n.jsx)(b(),{autorun:{speed:10,duration:3e3}}),a&&(0,n.jsx)(d.P.div,{animate:{opacity:1,x:c.x,y:c.y},transition:{type:"spring",stiffness:300,damping:30},className:"absolute transform -translate-x-1/2 px-2 py-1 text-sm rounded shadow-lg",style:{backgroundColor:"var(--color-neutral-4)",color:"var(--color-neutral-8)"},children:c.content}),(0,n.jsx)(y.A,{data:e,ref:r},e),(m||x.isCompleted)&&(0,n.jsx)(v.A,{data:x})]})}function C(){return(0,n.jsxs)("div",{className:"w-full h-full",children:[(0,n.jsx)("h1",{className:"text-2xl font-semibold",children:"Morse Code Typing Practice"}),(0,n.jsx)("p",{children:"Tap the space bar for a dot, or hold it for a dash."}),(0,n.jsx)(k,{}),(0,n.jsx)(f,{})]})}}}]);
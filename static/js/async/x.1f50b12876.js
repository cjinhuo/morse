"use strict";(self.rspackChunkmorse_code=self.rspackChunkmorse_code||[]).push([["x"],{M6(e,t,r){var n=r("A"),i=r("Hz"),o=r.n(i),a=r("U"),s=r("n6");r("OU");let l={dotWidth:0,dashWidth:8,strokeWidth:4,stroke:"",lineHeight:20,letterSpace:10,dotDashSpace:4,containerWidth:10,containerHeight:10,containerPadding:10,autoCalculateContainerSize:!0},c=s.Ay.svg`
  .line {
    stroke: ${e=>{let{stroke:t}=e;return t||"var(--color-neutral-4)"}};
  }
`,d=(0,a.forwardRef)((e,t)=>{let r=o()(l,e,(e,t)=>void 0===t?e:t),[i,a,...s]=(()=>{let e=r.containerPadding,t=r.containerPadding,i=e,o=t,a=2*r.containerPadding,s=2*r.containerPadding;if(r.morseCode.length){let l=r.morseCode.split("+").map((l,c)=>(e=i=r.containerPadding,0!==c&&(t+=r.lineHeight,o+=r.lineHeight,s+=r.lineHeight),(0,n.jsx)("g",{children:Array.from(l).map((s,d)=>{if(d===l.length-1&&(a=Math.max(a,i+r.containerPadding)),"|"===s)return e+=r.letterSpace,null;i=(e=0===e?e:e+r.dotDashSpace)+("."===s?r.dotWidth:r.dashWidth);let u=(0,n.jsx)("line",{strokeWidth:r.strokeWidth,strokeLinecap:"round",className:"line",x1:e,y1:t,x2:i,y2:o},`line-${c}-${d}`);return e=i+=r.dotDashSpace,u})},`word-${c}`)));return[r.autoCalculateContainerSize?a:r.containerWidth,r.autoCalculateContainerSize?s:r.containerHeight,...l]}return[0,0,null]})();return(0,n.jsx)(c,{ref:t,width:i,height:a,stroke:e.stroke,children:s})});d.displayName="MorseCodeSvg",t.A=d},v4(e,t,r){r.r(t),r.d(t,{default:()=>w});var n=r("A"),i=r("hS"),o=r("U"),a=r("n6"),s=r("li"),l=r("M6"),c=r("Ya");let d=(0,a.Ay)(c.P.button)`
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
`;function u(){let e=(0,o.useCallback)(e=>{let t=new KeyboardEvent(e,{key:" ",code:"Space",keyCode:32,charCode:32,bubbles:!0,cancelable:!0});document.dispatchEvent(t)},[]),t=(0,o.useCallback)(()=>{e("keydown")},[e]),r=(0,o.useCallback)(()=>{e("keyup")},[e]);return(0,n.jsx)(d,{className:"select-none",onPointerDown:t,onPointerUp:r,children:"SPACE"})}var h=r("mD"),m=r("Fhe"),f=r("jrz");r("OU");let p=a.Ay.div`
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
`;function x(){let{morseCode:e,status:t}=(0,i.m)(s.Di);!function(){let[e,t]=(0,o.useState)((0,f.Fr)());(0,o.useLayoutEffect)(()=>{let e=(0,h.R)(window,"resize").pipe((0,m.B)(500)).subscribe(()=>{t((0,f.Fr)())});return()=>{e.unsubscribe()}},[])}();let[r,a]=(0,o.useMemo)(()=>"idle"===t?["invisible"]:"done"===t?["visibility-hidden",(0,f.jk)(e)]:["visibility-show"],[t,e]);return(0,n.jsxs)(p,{children:[(0,n.jsxs)("div",{style:{backgroundColor:"var(--color-neutral-8)",opacity:"0.8"},className:`text-3xl overflow-hidden w-full h-16 flex justify-center items-center rounded-2xl ${r}`,children:[(0,n.jsx)(l.A,{morseCode:e}),(0,n.jsx)("div",{className:"text-skin-neutral-4",children:null===a?"-> invalid morse code":a})]}),(0,n.jsx)("div",{className:"h-16 w-full mt-4",children:(0,n.jsx)(u,{})})]})}var b=r("mS"),y=r("rA"),v=r.n(y),g=r("zl"),k=r("k8"),C=r("VH");function j(){let e=(0,i.m)(s.zH),t=(0,b.X)(s.Di),r=(0,o.useRef)(null),[a,l]=(0,o.useState)(void 0),[d,u]=(0,o.useState)({x:0,y:0,content:""}),[h,m]=(0,o.useState)(!1),{stats:p,startStats:x,recordInput:y,finishStats:j,resetStats:w}=(0,C.M4)();return(0,o.useEffect)(()=>{if(w(),m(!1),!r.current)return;let e=r.current.start();l(e);let n=!1,[i,o]=(0,f.Y7)(f.lZ),a=i.subscribe(e=>{t(t=>"typing"!==t.status?{status:"typing",morseCode:e}:{status:"typing",morseCode:t.morseCode+e})}),s=o.subscribe(i=>{let o=(0,f.jk)(i);if(o){n||(x(),m(!0),n=!0);let t=e?.innerHTML;t===o?([e]=r.current.next("correct"),y("correct",o,t)):([e]=r.current.next("error",o),y("error",o,t))}t(e=>({status:"done",morseCode:e.morseCode})),e?(" "===e.innerText&&([e]=r.current.next("correct")),l(e)):(j(),l(null),a.unsubscribe(),s.unsubscribe())});return()=>{a.unsubscribe(),s.unsubscribe(),t(()=>({status:"idle",morseCode:""}))}},[e,t,x,y,j,w]),(0,o.useEffect)(()=>{if(!a)return;let e=(0,f.z3)(a.innerHTML);e&&u({x:a.offsetLeft+2,y:a.offsetTop-36,content:e})},[a]),(0,n.jsxs)("div",{className:"relative",children:[null===a&&(0,n.jsx)(v(),{autorun:{speed:10,duration:3e3}}),a&&(0,n.jsx)(c.P.div,{animate:{opacity:1,x:d.x,y:d.y},transition:{type:"spring",stiffness:300,damping:30},className:"absolute transform -translate-x-1/2 px-2 py-1 text-sm rounded shadow-lg",style:{backgroundColor:"var(--color-neutral-4)",color:"var(--color-neutral-8)"},children:d.content}),(0,n.jsx)(g.A,{data:e,ref:r},e),(h||p.isCompleted)&&(0,n.jsx)(k.A,{data:p})]})}function w(){return(0,n.jsxs)("div",{className:"w-full h-full",children:[(0,n.jsx)("h1",{className:"text-2xl font-semibold",children:"Morse Code Typing Practice"}),(0,n.jsx)("p",{children:"Tap the space bar for a dot, or hold it for a dash."}),(0,n.jsx)(j,{}),(0,n.jsx)(x,{})]})}}}]);
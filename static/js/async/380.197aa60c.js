"use strict";(self.webpackChunkmorse_code=self.webpackChunkmorse_code||[]).push([["380"],{58212:function(e,t,n){n(64072),n(87395);var r=n(52676),i=n(53954),o=n.n(i),a=n(75271),s=n(29508),l=n(59497);let c={dotWidth:0,dashWidth:8,strokeWidth:4,stroke:"",lineHeight:20,letterSpace:10,dotDashSpace:4,containerWidth:10,containerHeight:10,containerPadding:10,autoCalculateContainerSize:!0},d=s.ZP.svg`
  .line {
    stroke: ${e=>{let{stroke:t}=e;return t||"var(--color-neutral-4)"}};
  }
`,u=(0,a.forwardRef)((e,t)=>{let n=o()(c,e,(e,t)=>void 0===t?e:t),[i,a,...s]=(()=>{let e=n.containerPadding,t=n.containerPadding,i=e,o=t,a=2*n.containerPadding,s=2*n.containerPadding;if(n.morseCode.length){let c=n.morseCode.split(l.o4).map((c,d)=>(e=i=n.containerPadding,0!==d&&(t+=n.lineHeight,o+=n.lineHeight,s+=n.lineHeight),(0,r.jsx)("g",{children:Array.from(c).map((s,u)=>{if(u===c.length-1&&(a=Math.max(a,i+n.containerPadding)),s===l.bX)return e+=n.letterSpace,null;let h=s===l.OF.dotChar;i=(e=0===e?e:e+n.dotDashSpace)+(h?n.dotWidth:n.dashWidth);let f=(0,r.jsx)("line",{strokeWidth:n.strokeWidth,strokeLinecap:"round",className:"line",x1:e,y1:t,x2:i,y2:o},`line-${d}-${u}`);return e=i+=n.dotDashSpace,f})},`word-${d}`)));return[n.autoCalculateContainerSize?a:n.containerWidth,n.autoCalculateContainerSize?s:n.containerHeight,...c]}return[0,0,null]})();return(0,r.jsx)(d,{ref:t,width:i,height:a,stroke:e.stroke,children:s})});u.displayName="MorseCodeSvg",t.Z=u},62168:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(52676),i=n(84127),o=n(75271),a=n(29508);let s=(0,a.ZP)(i.E.button)`
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
`;function l(){let e=(0,o.useCallback)(e=>{let t=new KeyboardEvent(e,{key:" ",code:"Space",keyCode:32,charCode:32,bubbles:!0,cancelable:!0});document.dispatchEvent(t)},[]),t=(0,o.useCallback)(()=>{e("keydown")},[e]),n=(0,o.useCallback)(()=>{e("keyup")},[e]);return(0,r.jsx)(s,{className:"select-none",onPointerDown:t,onPointerUp:n,children:"SPACE"})}},10272:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(75271),i=n(99395),o=n(56301),a=n(72853);function s(){let[e,t]=(0,r.useState)((0,a.tq)());return(0,r.useLayoutEffect)(()=>{let e=(0,i.R)(window,"resize").pipe((0,o.b)(500)).subscribe(()=>{t((0,a.tq)())});return()=>{e.unsubscribe()}},[]),e}},18226:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var r=n(52676),i=n(94290),o=n(78631);function a(){return(0,r.jsxs)("div",{className:"w-full h-full",children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)(i.Z,{})]})}},94290:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(52676),i=n(37921),o=n(75271),a=n(29508),s=n(30735),l=n(58212),c=n(62168),d=n(10272),u=n(59497),h=n(72853);let f=a.ZP.div`
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
`;function m(){let{morseCode:e,status:t}=(0,i.Dv)(s.J2);(0,d.Z)();let[n,a]=(0,o.useMemo)(()=>t===u.G2.idle?["invisible"]:t===u.G2.done?["visibility-hidden",(0,h.R4)(e)]:["visibility-show"],[t,e]);return(0,r.jsxs)(f,{children:[(0,r.jsxs)("div",{style:{backgroundColor:"var(--color-neutral-8)",opacity:"0.8"},className:`text-3xl overflow-hidden w-full h-16 flex justify-center items-center rounded-2xl ${n}`,children:[(0,r.jsx)(l.Z,{morseCode:e}),(0,r.jsx)("div",{className:"text-skin-neutral-4",children:null===a?"-> invalid morse code":a})]}),(0,r.jsx)("div",{className:"h-16 w-full mt-4",children:(0,r.jsx)(c.Z,{})})]})}},78631:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(52676),i=n(37921),o=n(84127),a=n(75271),s=n(99056),l=n.n(s),c=n(30735),d=n(4778),u=n(47097),h=n(15459),f=n(59497),m=n(72853);function p(){let e=(0,i.Dv)(c.jR),t=(0,i.b9)(c.J2),n=(0,a.useRef)(null),[s,p]=(0,a.useState)(void 0),[b,x]=(0,a.useState)({x:0,y:0,content:""}),[v,k]=(0,a.useState)(!1),{stats:y,startStats:g,recordInput:C,finishStats:w,resetStats:j}=(0,h.BU)();return(0,a.useEffect)(()=>{if(j(),k(!1),!n.current)return;let e=n.current.start();p(e);let r=!1,[i,o]=(0,m.LP)(m.Bh),a=i.subscribe(e=>{t(t=>t.status!==f.G2.typing?{status:f.G2.typing,morseCode:e}:{status:f.G2.typing,morseCode:t.morseCode+e})}),s=o.subscribe(i=>{let o=(0,m.R4)(i);if(o){!r&&(g(),k(!0),r=!0);let t=null==e?void 0:e.innerHTML;t===o?([e]=n.current.next(f.kc.correct),C(f.kc.correct,o,t)):([e]=n.current.next(f.kc.error,o),C(f.kc.error,o,t))}t(e=>({status:f.G2.done,morseCode:e.morseCode})),e?(" "===e.innerText&&([e]=n.current.next(f.kc.correct)),p(e)):(w(),p(null),a.unsubscribe(),s.unsubscribe())});return()=>{a.unsubscribe(),s.unsubscribe(),t(()=>({status:f.G2.idle,morseCode:""}))}},[e,t,g,C,w,j]),(0,a.useEffect)(()=>{if(!s)return;let e=(0,m.aE)(s.innerHTML);e&&x({x:s.offsetLeft+2,y:s.offsetTop-36,content:e})},[s]),(0,r.jsxs)("div",{className:"relative",children:[null===s&&(0,r.jsx)(l(),{autorun:{speed:10,duration:3e3}}),s&&(0,r.jsx)(o.E.div,{animate:{opacity:1,x:b.x,y:b.y},transition:{type:"spring",stiffness:300,damping:30},className:"absolute transform -translate-x-1/2 px-2 py-1 text-sm rounded shadow-lg",style:{backgroundColor:"var(--color-neutral-4)",color:"var(--color-neutral-8)"},children:b.content}),(0,r.jsx)(d.Z,{data:e,ref:n},e),(v||y.isCompleted)&&(0,r.jsx)(u.Z,{data:y})]})}}}]);
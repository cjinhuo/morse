"use strict";(self.webpackChunkmorse_code=self.webpackChunkmorse_code||[]).push([["380"],{58212:function(e,t,r){r(64072),r(87395);var n=r(52676),i=r(53954),o=r.n(i),l=r(75271),a=r(29508),s=r(59497);let c={dotWidth:0,dashWidth:8,strokeWidth:4,stroke:"",lineHeight:20,letterSpace:10,dotDashSpace:4,containerWidth:10,containerHeight:10,containerPadding:10,autoCalculateContainerSize:!0},u=a.ZP.svg`
  .line {
    stroke: ${e=>{let{stroke:t}=e;return t||"var(--color-neutral-4)"}};
  }
`,d=(0,l.forwardRef)((e,t)=>{let r=o()(c,e,(e,t)=>void 0===t?e:t),[i,l,...a]=(()=>{let e=r.containerPadding,t=r.containerPadding,i=e,o=t,l=2*r.containerPadding,a=2*r.containerPadding;if(r.morseCode.length){let c=r.morseCode.split(s.o4).map((c,u)=>(e=i=r.containerPadding,0!==u&&(t+=r.lineHeight,o+=r.lineHeight,a+=r.lineHeight),(0,n.jsx)("g",{children:Array.from(c).map((a,d)=>{if(d===c.length-1&&(l=Math.max(l,i+r.containerPadding)),a===s.bX)return e+=r.letterSpace,null;let f=a===s.OF.dotChar;i=(e=0===e?e:e+r.dotDashSpace)+(f?r.dotWidth:r.dashWidth);let h=(0,n.jsx)("line",{strokeWidth:r.strokeWidth,strokeLinecap:"round",className:"line",x1:e,y1:t,x2:i,y2:o},`line-${u}-${d}`);return e=i+=r.dotDashSpace,h})},`word-${u}`)));return[r.autoCalculateContainerSize?l:r.containerWidth,r.autoCalculateContainerSize?a:r.containerHeight,...c]}return[0,0,null]})();return(0,n.jsx)(u,{ref:t,width:i,height:l,stroke:e.stroke,children:a})});d.displayName="MorseCodeSvg",t.Z=d},62168:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(52676),i=r(84127),o=r(75271),l=r(29508);let a=(0,l.ZP)(i.E.button)`
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
`;function s(){let e=(0,o.useCallback)(e=>{let t=new KeyboardEvent(e,{key:" ",code:"Space",keyCode:32,charCode:32,bubbles:!0,cancelable:!0});document.dispatchEvent(t)},[]),t=(0,o.useCallback)(()=>{e("keydown")},[e]),r=(0,o.useCallback)(()=>{e("keyup")},[e]);return(0,n.jsx)(a,{className:"select-none",onPointerDown:t,onPointerUp:r,children:"SPACE"})}},4778:function(e,t,r){r(64072),r(87395),r(19608),r(1056);var n=r(52676),i=r(75271),o=r(9921),l=r(56301),a=r(29508),s=r(59497);let c="caret",u="caret-animation",d="blink",f=a.ZP.div`
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
`;t.Z=(0,i.memo)((0,i.forwardRef)(function(e,t){let{data:r}=e,a=(0,i.useRef)(null),h=(0,i.useRef)(null),m=new o.x;m.pipe((0,l.b)(2e3)).subscribe(()=>{!(!h.current||h.current.classList.contains(u))&&h.current.classList.add(u)});let p=()=>{h.current&&(h.current.classList.remove(u),m.next(""))},v=!1,b=null,x=null,g=()=>{h.current&&b&&(h.current.style.left=`${b.offsetLeft}px`,h.current.style.top=`${b.offsetTop}px`)};(0,i.useEffect)(()=>{if(h.current&&a.current)return window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)}},[]);let k=(0,i.useMemo)(()=>{if(0===r.length)return null;let e=r.split(" ");return e.map((t,r)=>(0,n.jsxs)("div",{className:`inline-block ${s._Y}`,children:[Array.from(t).map((e,t)=>(0,n.jsx)("div",{className:s.hH,children:e},`${e}-${t}`)),r!==e.length-1&&(0,n.jsx)("div",{className:`${s.hH} w-6 whitespace-pre-wrap`,children:" "})]},`${t}-${r}`))},[r]);return(0,i.useImperativeHandle)(t,()=>({start(){var e;if(!a.current||!h.current)return;v=!0;let t=null===(e=a.current.querySelector(`.${s._Y}`))||void 0===e?void 0:e.firstElementChild;if(t)return b=t,t;throw Error("Start Fn Error: not found the first char in container")},prev(){if(!v)throw Error("Prev Fn Error: should run [start] fn first");if(!x)throw Error("Prev Fn Error: there is no last char to iterate");if(x.classList.contains(s.kc.error)?g():x.classList.remove(s.kc.correct),b=x,h.current.style.left=`${b.offsetLeft}px`,h.current.style.top=`${b.offsetTop}px`,!(x=b.previousElementSibling)){var e;let t=null===(e=b.parentElement)||void 0===e?void 0:e.previousElementSibling;(null==t?void 0:t.className.includes(s._Y))&&(x=t.lastElementChild)}return[b,x]},next(e,t){if(!v)throw Error("Next Fn Error: should run [start] fn first");if(!b)throw Error("Next Fn Error: there is no char to iterate");x=b,b.classList.remove(s.kc.warn),b.classList.add(e);let r=b.nextElementSibling;if(r)b=r;else{var n;let e=null===(n=b.parentElement)||void 0===n?void 0:n.nextElementSibling;b=(null==e?void 0:e.className.includes(s._Y))?e.firstElementChild:null}if(e===s.kc.error&&t){let e=document.createElement("span");e.classList.add(d),e.innerHTML=t,x.appendChild(e);let r=x,n=()=>{try{r.contains(e)&&r.removeChild(e)}catch(e){}e.removeEventListener("animationend",n)};e.addEventListener("animationend",n)}return b?g():h.current.style.left=`${x.offsetLeft+x.getBoundingClientRect().width}px`,p(),[b,x]}}),[]),(0,n.jsxs)(f,{ref:a,children:[k,(0,n.jsx)("div",{className:`${c} ${u}`,ref:h})]})}))},10272:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(75271),i=r(99395),o=r(56301),l=r(72853);function a(){let[e,t]=(0,n.useState)((0,l.tq)());return(0,n.useLayoutEffect)(()=>{let e=(0,i.R)(window,"resize").pipe((0,o.b)(500)).subscribe(()=>{t((0,l.tq)())});return()=>{e.unsubscribe()}},[]),e}},18226:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(52676),i=r(94290),o=r(78631);function l(){return(0,n.jsxs)("div",{className:"w-full h-full",children:[(0,n.jsx)(o.Z,{}),(0,n.jsx)(i.Z,{})]})}},94290:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(52676),i=r(37921),o=r(75271),l=r(29508),a=r(30735),s=r(58212),c=r(62168),u=r(10272),d=r(59497),f=r(72853);let h=l.ZP.div`
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
`;function m(){let{morseCode:e,status:t}=(0,i.Dv)(a.J2);(0,u.Z)();let[r,l]=(0,o.useMemo)(()=>t===d.G2.idle?["invisible"]:t===d.G2.done?["visibility-hidden",(0,f.R4)(e)]:["visibility-show"],[t,e]);return(0,n.jsxs)(h,{children:[(0,n.jsxs)("div",{style:{backgroundColor:"var(--color-neutral-8)",opacity:"0.8"},className:`text-3xl overflow-hidden w-full h-16 flex justify-center items-center rounded-2xl ${r}`,children:[(0,n.jsx)(s.Z,{morseCode:e}),(0,n.jsx)("div",{className:"text-skin-neutral-4",children:null===l?"-> invalid morse code":l})]}),(0,n.jsx)("div",{className:"h-16 w-full mt-4",children:(0,n.jsx)(c.Z,{})})]})}},78631:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(52676),i=r(37921),o=r(84127),l=r(75271),a=r(99056),s=r.n(a),c=r(30735),u=r(4778),d=r(59497),f=r(72853);function h(){let e=(0,i.Dv)(c.jR),t=(0,i.b9)(c.J2),r=(0,l.useRef)(null),[a,h]=(0,l.useState)(void 0),[m,p]=(0,l.useState)({x:0,y:0,content:""});return(0,l.useEffect)(()=>{if(!r.current)return;let e=r.current.start();h(e);let[n,i]=(0,f.LP)(f.Bh),o=n.subscribe(e=>{t(t=>t.status!==d.G2.typing?{status:d.G2.typing,morseCode:e}:{status:d.G2.typing,morseCode:t.morseCode+e})}),l=i.subscribe(n=>{let i=(0,f.R4)(n);i&&((null==e?void 0:e.innerHTML)===i?[e]=r.current.next(d.kc.correct):[e]=r.current.next(d.kc.error,i)),t(e=>({status:d.G2.done,morseCode:e.morseCode})),e?(" "===e.innerText&&([e]=r.current.next(d.kc.correct)),h(e)):(h(null),o.unsubscribe(),l.unsubscribe())});return()=>{o.unsubscribe(),l.unsubscribe(),t(()=>({status:d.G2.idle,morseCode:""}))}},[t,e]),(0,l.useEffect)(()=>{if(!a)return;let e=(0,f.aE)(a.innerHTML);e&&p({x:a.offsetLeft+2,y:a.offsetTop-36,content:e})},[a]),(0,n.jsxs)("div",{className:"relative",children:[null===a&&(0,n.jsx)(s(),{autorun:{speed:10,duration:3e3}}),a&&(0,n.jsx)(o.E.div,{animate:{opacity:1,x:m.x,y:m.y},transition:{type:"spring",stiffness:300,damping:30},className:"absolute transform -translate-x-1/2 px-2 py-1 text-sm rounded shadow-lg",style:{backgroundColor:"var(--color-neutral-4)",color:"var(--color-neutral-8)"},children:m.content}),(0,n.jsx)(u.Z,{data:e,ref:r},e)]})}}}]);
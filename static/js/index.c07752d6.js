(()=>{"use strict";var e={86668:function(){},90997:function(e,t,n){e.exports=n.p+"static/media/error_input.08e6c1b7.wav"},3426:function(e,t,n){e.exports=n.p+"static/media/typewriter.08d818ca.mp3"},30735:function(e,t,n){n.d(t,{G6:function(){return c},J2:function(){return a},jR:function(){return s}});var r=n(62401),i=n(59497),o=n(2070);(0,r.rw)("");let a=(0,r.rw)({morseCode:"",status:i.G2.idle});(0,r.rw)("");let l=e=>Math.floor(Math.random()*e),s=(0,r.rw)(o.t[l(o.t.length)]),c=(0,r.rw)(o.c[l(o.c.length)])},98911:function(e,t,n){n.d(t,{a:function(){return o},l:function(){return i}});var r=n(62401);let i={strokeWidth:3,dashWidth:12,lineHeight:24,letterSpace:16,dotDashSpace:6,containerPadding:20},o=(0,r.O4)("morse-svg-config",i)},25100:function(e,t,n){var r=n(52676);n(86668);var i=n(70782),o=n(75271),a=n(80455),l=n(29508),s=n(7667);let c=l.ZP.div`
  padding: 5vh 8vw;
`;t.Z=o.memo(function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Ar.Header,{children:(0,r.jsx)(s.Z,{})}),(0,r.jsx)(i.Ar.Content,{children:(0,r.jsx)(c,{className:"w-full grow",children:(0,r.jsx)(a.j3,{})})}),(0,r.jsx)(i.Ar.Footer,{})]})})},61690:function(e,t,n){var r=n(52676),i=n(70782),o=n(80455),a=n(29508),l=n(96233),s=n(59497),c=n(87428);let u=a.ZP.nav`
  display: flex;
  margin-left: 1rem;
  > div {
    margin-right: 2rem;
  }
`;t.Z=()=>{let e=(0,o.TH)();return console.log(e.pathname),(0,r.jsxs)(u,{children:[(0,r.jsx)(i.u,{content:"Morse Code Converter",children:(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)(c.Z,{name:s.Jz.switch,value:l.xs,type:"route",active:e.pathname===l.xs})})}),(0,r.jsx)(i.u,{content:"Latin Type",children:(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)(c.Z,{name:s.Jz["keyboard-2"],value:l.MU,type:"route",active:e.pathname===l.MU})})})]})}},7667:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(52676),i=n(29508),o=n(15389),a=n(25585);let l=i.ZP.div`
  padding-left: 5vw;
  padding-right: 5vw;
`;function s(){return(0,r.jsxs)(l,{className:"w-full flex items-center justify-between h-10",children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)(a.Z,{})]})}},15389:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(52676),i=n(78203),o=n(34776);function a(){return(0,r.jsxs)("div",{className:"h-full flex justify-start",children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(o.Z,{})]})}},78203:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(52676),i=n(80455),o=n(59497),a=n(5437);function l(){let e=(0,i.s0)();return(0,r.jsxs)("div",{onClick:()=>{e("/morse")},className:"h-full flex cursor-pointer",children:[(0,r.jsx)(a.Z,{class:"text-skin-neutral-2 relative",style:{bottom:"2px"},name:o.Jz["morse-code"],size:"2.5rem"}),(0,r.jsx)("div",{className:"text-skin-neutral-3 font-medium text-3xl",children:"MorseType"})]})}},34776:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(52676),i=n(70782),o=n(37921),a=n(75271),l=n(80455),s=n(29508),c=n(30735),u=n(96233),d=n(59497),h=n(2070),f=n(87428);let m=s.ZP.nav`
  display: flex;
  margin-left: 1rem;
  > div {
    margin-right: 2rem;
  }
`,p=()=>h.t[Math.floor(Math.random()*h.t.length)],x=()=>h.c[Math.floor(Math.random()*h.c.length)];function v(){let e=(0,o.b9)(c.jR),t=(0,o.Dv)(c.jR),n=(0,o.Dv)(c.G6),s=(0,o.b9)(c.G6),v=(0,l.TH)(),g=(0,a.useCallback)(()=>{if(!h.t.length)return;let n=p();if(h.t.length>1){let e=0;for(;n===t&&e<8;)n=p(),e+=1}e(n)},[e,t]),b=(0,a.useCallback)(()=>{if(!h.c.length)return;let e=x();if(s(e),h.c.length>1){let t=0;for(;e===n&&t<8;)e=x(),t+=1}s(e)},[s,n]),y=(0,a.useCallback)(()=>{v.pathname===u.zF?g():v.pathname===u.MU&&b()},[g,b,v.pathname]);return(v.pathname===u.zF||v.pathname===u.MU)&&(0,r.jsx)(m,{children:(0,r.jsx)(i.u,{content:"Random Sentence",position:"right",children:(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsx)(f.Z,{name:d.Jz.refresh,onClick:y})})})})}},25585:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(52676),i=n(59497),o=n(87428),a=n(61690),l=n(94540);function s(){return(0,r.jsxs)("div",{className:"h-full flex",children:[(0,r.jsx)(a.Z,{}),(0,r.jsx)(o.Z,{name:i.Jz.github,value:"https://github.com/cjinhuo/cjinhuo.github.io",type:"link"}),(0,r.jsx)(l.Z,{})]})}},94540:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(52676),i=n(6523),o=n(59497),a=n(87428);function l(){let[e,t]=(0,i.Z)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.Z,{style:{marginLeft:"2rem"},name:e===o.hY.light?o.Jz.light:o.Jz.dark,onClick:()=>{t(e===o.hY.light?o.hY.dark:o.hY.light)}})})}},5437:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(52676);function i(e){return(0,r.jsx)("iconpark-icon",{size:"1.3rem",style:{transition:"color 0.1s"},class:`hover:text-skin-neutral-5 ${e.active?"text-skin-neutral-5":"text-skin-neutral-7"}`,...e})}},87428:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(52676),i=n(84127),o=n(80455),a=n(5437);function l(e){let{name:t,value:n,type:l,onClick:s,active:c=!1,...u}=e,d=(0,o.s0)();return(0,r.jsx)(i.E.div,{whileHover:c?{}:{scale:1.2},style:{scale:c?1.2:1},className:`flex items-center ${c?"cursor-not-allowed":"cursor-pointer"}`,onClick:()=>{if(!c){if(null==s||s(),"link"===l)return window.open(n);if("route"===l&&n)return d(n)}},children:(0,r.jsx)(a.Z,{...u,name:t,active:c})})}},58212:function(e,t,n){n(64072),n(87395);var r=n(52676),i=n(53954),o=n.n(i),a=n(75271),l=n(29508),s=n(59497);let c={dotWidth:0,dashWidth:8,strokeWidth:4,stroke:"",lineHeight:20,letterSpace:10,dotDashSpace:4,containerWidth:10,containerHeight:10,containerPadding:10,autoCalculateContainerSize:!0},u=l.ZP.svg`
  .line {
    stroke: ${e=>{let{stroke:t}=e;return t||"var(--color-neutral-4)"}};
  }
`,d=(0,a.forwardRef)((e,t)=>{let n=o()(c,e,(e,t)=>void 0===t?e:t),[i,a,...l]=(()=>{let e=n.containerPadding,t=n.containerPadding,i=e,o=t,a=2*n.containerPadding,l=2*n.containerPadding;if(n.morseCode.length){let c=n.morseCode.split(s.o4).map((c,u)=>(e=i=n.containerPadding,0!==u&&(t+=n.lineHeight,o+=n.lineHeight,l+=n.lineHeight),(0,r.jsx)("g",{children:Array.from(c).map((l,d)=>{if(d===c.length-1&&(a=Math.max(a,i+n.containerPadding)),l===s.bX)return e+=n.letterSpace,null;let h=l===s.OF.dotChar;i=(e=0===e?e:e+n.dotDashSpace)+(h?n.dotWidth:n.dashWidth);let f=(0,r.jsx)("line",{strokeWidth:n.strokeWidth,strokeLinecap:"round",className:"line",x1:e,y1:t,x2:i,y2:o},`line-${u}-${d}`);return e=i+=n.dotDashSpace,f})},`word-${u}`)));return[n.autoCalculateContainerSize?a:n.containerWidth,n.autoCalculateContainerSize?l:n.containerHeight,...c]}return[0,0,null]})();return(0,r.jsx)(u,{ref:t,width:i,height:a,stroke:e.stroke,children:l})});d.displayName="MorseCodeSvg",t.Z=d},62168:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(52676),i=n(84127),o=n(75271),a=n(29508);let l=(0,a.ZP)(i.E.button)`
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
`;function s(){let e=(0,o.useCallback)(e=>{let t=new KeyboardEvent(e,{key:" ",code:"Space",keyCode:32,charCode:32,bubbles:!0,cancelable:!0});document.dispatchEvent(t)},[]),t=(0,o.useCallback)(()=>{e("keydown")},[e]),n=(0,o.useCallback)(()=>{e("keyup")},[e]);return(0,r.jsx)(l,{className:"select-none",onPointerDown:t,onPointerUp:n,children:"SPACE"})}},4778:function(e,t,n){n(64072),n(87395),n(19608),n(1056);var r=n(52676),i=n(75271),o=n(9921),a=n(56301),l=n(29508),s=n(59497);let c="caret",u="caret-animation",d="blink",h=l.ZP.div`
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
`;t.Z=(0,i.memo)((0,i.forwardRef)(function(e,t){let{data:n}=e,l=(0,i.useRef)(null),f=(0,i.useRef)(null),m=new o.x;m.pipe((0,a.b)(2e3)).subscribe(()=>{!(!f.current||f.current.classList.contains(u))&&f.current.classList.add(u)});let p=()=>{f.current&&(f.current.classList.remove(u),m.next(""))},x=!1,v=null,g=null,b=()=>{f.current&&v&&(f.current.style.left=`${v.offsetLeft}px`,f.current.style.top=`${v.offsetTop}px`)};(0,i.useEffect)(()=>{if(f.current&&l.current)return window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)}},[]);let y=(0,i.useMemo)(()=>{if(0===n.length)return null;let e=n.split(" ");return e.map((t,n)=>(0,r.jsxs)("div",{className:`inline-block ${s._Y}`,children:[Array.from(t).map((e,t)=>(0,r.jsx)("div",{className:s.hH,children:e},`${e}-${t}`)),n!==e.length-1&&(0,r.jsx)("div",{className:`${s.hH} w-6 whitespace-pre-wrap`,children:" "})]},`${t}-${n}`))},[n]);return(0,i.useImperativeHandle)(t,()=>({start(){var e;if(!l.current||!f.current)return;x=!0;let t=null===(e=l.current.querySelector(`.${s._Y}`))||void 0===e?void 0:e.firstElementChild;if(t)return v=t,t;throw Error("Start Fn Error: not found the first char in container")},prev(){if(!x)throw Error("Prev Fn Error: should run [start] fn first");if(!g)throw Error("Prev Fn Error: there is no last char to iterate");if(g.classList.contains(s.kc.error)?b():g.classList.remove(s.kc.correct),v=g,f.current.style.left=`${v.offsetLeft}px`,f.current.style.top=`${v.offsetTop}px`,!(g=v.previousElementSibling)){var e;let t=null===(e=v.parentElement)||void 0===e?void 0:e.previousElementSibling;(null==t?void 0:t.className.includes(s._Y))&&(g=t.lastElementChild)}return[v,g]},next(e,t){if(!x)throw Error("Next Fn Error: should run [start] fn first");if(!v)throw Error("Next Fn Error: there is no char to iterate");g=v,v.classList.remove(s.kc.warn),v.classList.add(e);let n=v.nextElementSibling;if(n)v=n;else{var r;let e=null===(r=v.parentElement)||void 0===r?void 0:r.nextElementSibling;v=(null==e?void 0:e.className.includes(s._Y))?e.firstElementChild:null}if(e===s.kc.error&&t){let e=document.createElement("span");e.classList.add(d),e.innerHTML=t,g.appendChild(e);let n=g,r=()=>{try{n.contains(e)&&n.removeChild(e)}catch(e){}e.removeEventListener("animationend",r)};e.addEventListener("animationend",r)}return v?b():f.current.style.left=`${g.offsetLeft+g.getBoundingClientRect().width}px`,p(),[v,g]}}),[]),(0,r.jsxs)(h,{ref:l,children:[y,(0,r.jsx)("div",{className:`${c} ${u}`,ref:f})]})}))},13755:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(52676),i=n(16322),o=n(70782),a=n(37921),l=n(75271),s=n(98911);function c(){let[e,t]=(0,a.KO)(s.a),[n,c]=(0,l.useState)(!1),[u,d]=(0,l.useState)(null),h=(0,l.useCallback)((e,n)=>{t(e=>({...e,...n}))},[t]),f=(0,l.useCallback)(()=>{u&&(u.setValues(s.l),t(s.l))},[u,t]),m=(0,r.jsxs)("div",{className:"w-80 p-4",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between mb-2",children:[(0,r.jsx)(o.Sx.Title,{heading:6,children:"SVG Config"}),(0,r.jsx)(o.zx,{size:"small",onClick:f,children:"Reset"})]}),(0,r.jsxs)(o.l0,{getFormApi:d,initValues:e,onValueChange:h,layout:"vertical",style:{gap:"10px"},children:[(0,r.jsx)(o.l0.Slider,{field:"strokeWidth",label:"Stroke Width",min:1,max:10,step:.5}),(0,r.jsx)(o.l0.Slider,{field:"dashWidth",label:"Dash Width",min:5,max:30,step:1}),(0,r.jsx)(o.l0.Slider,{field:"lineHeight",label:"Line Height",min:15,max:50,step:1}),(0,r.jsx)(o.l0.Slider,{field:"letterSpace",label:"Letter Spacing",min:5,max:30,step:1}),(0,r.jsx)(o.l0.Slider,{field:"dotDashSpace",label:"Dot Dash Spacing",min:2,max:15,step:1}),(0,r.jsx)(o.l0.Slider,{field:"containerPadding",label:"Container Padding",min:10,max:50,step:1})]})]});return(0,r.jsx)(o.J2,{content:m,visible:n,onVisibleChange:c,trigger:"click",position:"left",children:(0,r.jsx)(o.zx,{icon:(0,r.jsx)(i.Z,{}),size:"small",type:"tertiary","aria-label":"\u914D\u7F6E SVG \u53C2\u6570",children:"SVG Config"})})}},10272:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(75271),i=n(99395),o=n(56301),a=n(72853);function l(){let[e,t]=(0,r.useState)((0,a.tq)());return(0,r.useLayoutEffect)(()=>{let e=(0,i.R)(window,"resize").pipe((0,o.b)(500)).subscribe(()=>{t((0,a.tq)())});return()=>{e.unsubscribe()}},[]),e}},6523:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(75271),i=n(59497),o=n(72853);function a(){let[e,t]=(0,r.useState)((0,o.Am)());return(0,r.useEffect)(()=>{let t=document.body;e===i.hY.dark?(t.setAttribute("theme-mode","dark"),document.documentElement.classList.add(i.hY.dark)):(t.removeAttribute("theme-mode"),document.documentElement.classList.remove(i.hY.dark))},[e]),[e,e=>{e===i.hY.light?(localStorage.setItem(i.a1,i.hY.light),t(i.hY.light)):(localStorage.setItem(i.a1,i.hY.dark),t(i.hY.dark))}]}},17204:function(e,t,n){var r=n(52676),i=n(38751),o=n(76455),a=n(96233);let l=document.getElementById("root");l&&i.createRoot(l).render((0,r.jsx)(o.pG,{router:a.ZP}))},10199:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(52676);function i(){return(0,r.jsx)("div",{children:(0,r.jsx)("h1",{children:"contributors"})})}},18226:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(52676),i=n(94290),o=n(78631);function a(){return(0,r.jsxs)("div",{className:"w-full h-full",children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)(i.Z,{})]})}},94290:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(52676),i=n(37921),o=n(75271),a=n(29508),l=n(30735),s=n(58212),c=n(62168),u=n(10272),d=n(59497),h=n(72853);let f=a.ZP.div`
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
`;function m(){let{morseCode:e,status:t}=(0,i.Dv)(l.J2);(0,u.Z)();let[n,a]=(0,o.useMemo)(()=>t===d.G2.idle?["invisible"]:t===d.G2.done?["visibility-hidden",(0,h.R4)(e)]:["visibility-show"],[t,e]);return(0,r.jsxs)(f,{children:[(0,r.jsxs)("div",{style:{backgroundColor:"var(--color-neutral-8)",opacity:"0.8"},className:`text-3xl overflow-hidden w-full h-16 flex justify-center items-center rounded-2xl ${n}`,children:[(0,r.jsx)(s.Z,{morseCode:e}),(0,r.jsx)("div",{className:"text-skin-neutral-4",children:null===a?"-> invalid morse code":a})]}),(0,r.jsx)("div",{className:"h-16 w-full mt-4",children:(0,r.jsx)(c.Z,{})})]})}},78631:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(52676),i=n(37921),o=n(84127),a=n(75271),l=n(99056),s=n.n(l),c=n(30735),u=n(4778),d=n(59497),h=n(72853);function f(){let e=(0,i.Dv)(c.jR),t=(0,i.b9)(c.J2),n=(0,a.useRef)(null),[l,f]=(0,a.useState)(void 0),[m,p]=(0,a.useState)({x:0,y:0,content:""});return(0,a.useEffect)(()=>{if(!n.current)return;let e=n.current.start();f(e);let[r,i]=(0,h.LP)(h.Bh),o=r.subscribe(e=>{t(t=>t.status!==d.G2.typing?{status:d.G2.typing,morseCode:e}:{status:d.G2.typing,morseCode:t.morseCode+e})}),a=i.subscribe(r=>{let i=(0,h.R4)(r);i&&((null==e?void 0:e.innerHTML)===i?[e]=n.current.next(d.kc.correct):[e]=n.current.next(d.kc.error,i)),t(e=>({status:d.G2.done,morseCode:e.morseCode})),e?(" "===e.innerText&&([e]=n.current.next(d.kc.correct)),f(e)):(f(null),o.unsubscribe(),a.unsubscribe())});return()=>{o.unsubscribe(),a.unsubscribe(),t(()=>({status:d.G2.idle,morseCode:""}))}},[t,e]),(0,a.useEffect)(()=>{if(!l)return;let e=(0,h.aE)(l.innerHTML);e&&p({x:l.offsetLeft+2,y:l.offsetTop-36,content:e})},[l]),(0,r.jsxs)("div",{className:"relative",children:[null===l&&(0,r.jsx)(s(),{autorun:{speed:10,duration:3e3}}),l&&(0,r.jsx)(o.E.div,{animate:{opacity:1,x:m.x,y:m.y},transition:{type:"spring",stiffness:300,damping:30},className:"absolute transform -translate-x-1/2 px-2 py-1 text-sm rounded shadow-lg",style:{backgroundColor:"var(--color-neutral-4)",color:"var(--color-neutral-8)"},children:m.content}),(0,r.jsx)(u.Z,{data:e,ref:n},e)]})}},16535:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(52676),i=n(37921),o=n(75271),a=n(99395),l=n(73860),s=n(29561),c=n(30735),u=n(4778),d=n(59497),h=n(82173);function f(){let e=(0,o.useRef)(null),t=(0,i.Dv)(c.G6);return(0,o.useEffect)(()=>{if(!e.current)return;let t=(0,a.R)(document,"keydown").pipe((0,l.U)(e=>({repeat:e.repeat,key:"Space"===e.code?" ":e.key})),(0,s.h)(e=>!e.repeat&&d.oZ.has(e.key))),n=t.pipe((0,s.h)(e=>!d.dc.has(e.key))),r=t.pipe((0,s.h)(e=>d.dc.has(e.key))),i=e.current.start(),o=null,c=n.subscribe(t=>{if(t.key===(null==i?void 0:i.innerText)?([i,o]=e.current.next(d.kc.correct),(0,h.v)()):([i,o]=e.current.next(d.kc.error,t.key),(0,h.M)()),!i){console.log("over");return}}),u=r.subscribe(t=>{if(!!o)(0,h.v)(),[i,o]=e.current.prev()});return()=>{c.unsubscribe(),u.unsubscribe()}},[t]),(0,r.jsx)("div",{children:(0,r.jsx)(u.Z,{data:t,ref:e},t)})}},19098:function(e,t,n){n.d(t,{Z:function(){return h}}),n(18936),n(54335),n(67475),n(94541),n(38174),n(43118);var r=n(52676),i=n(70782),o=n(37921),a=n(75271),l=n(98911),s=n(58212),c=n(13755),u=n(59497),d=n(72853);function h(){let[e,t]=(0,a.useState)(""),[n,h]=(0,a.useState)(""),f=(0,o.Dv)(l.a),m=(0,a.useRef)(null),p="localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname;return(0,r.jsx)("div",{className:"w-full h-full",children:(0,r.jsxs)("div",{className:"mx-auto max-w-[1200px] space-y-4",children:[(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)(i.Sx.Title,{className:"mb-2 text-3xl font-bold",children:"Morse Code Converter"})}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)(i.Sx.Title,{className:"text-xl font-semibold",children:"Input Text"}),(0,r.jsx)(i.Kx,{value:e,onChange:e=>{let n=e.split("").filter(e=>u.oZ.has(e)||" "===e).join("");t(n),n.trim()?h((0,d.Ow)(n)):h("")},placeholder:"Enter Latin characters, numbers and punctuation marks...",autosize:{minRows:4,maxRows:8},className:"w-full"}),p&&n&&(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)(i.Sx.Text,{strong:!0,children:"Morse Code"}),(0,r.jsx)(i.II,{value:n,readOnly:!0})]})]}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(i.Sx.Title,{className:"text-xl font-semibold",children:"SVG Preview"}),(0,r.jsx)(c.Z,{})]}),(0,r.jsx)("div",{className:"border rounded",children:n?(0,r.jsx)("div",{className:"w-full h-full overflow-x-scroll p-1",children:(0,r.jsx)(s.Z,{ref:m,morseCode:n,strokeWidth:f.strokeWidth,dashWidth:f.dashWidth,lineHeight:f.lineHeight,letterSpace:f.letterSpace,dotDashSpace:f.dotDashSpace,containerPadding:f.containerPadding,stroke:"currentColor"},n)}):(0,r.jsx)("div",{className:"flex items-center justify-center min-h-[200px] p-1",children:(0,r.jsx)(i.Sx.Text,{type:"tertiary",children:"Morse code SVG will appear here after input"})})}),n&&(0,r.jsxs)("div",{className:"flex gap-3",children:[(0,r.jsx)(i.zx,{onClick:()=>{if(!m.current)return;let e=m.current,t=document.createElement("canvas"),n=t.getContext("2d");if(!n)return;let r=e.getBoundingClientRect();t.width=2*r.width,t.height=2*r.height,n.fillStyle="#ffffff",n.fillRect(0,0,t.width,t.height);let i=new Blob([new XMLSerializer().serializeToString(e)],{type:"image/svg+xml;charset=utf-8"}),o=URL.createObjectURL(i),a=new Image;a.onload=()=>{n.drawImage(a,0,0,t.width,t.height),t.toBlob(e=>{if(e){let t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=`morse-code-${Date.now()}.png`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(t)}URL.revokeObjectURL(o)})},a.src=o},type:"primary",children:"Export as PNG"}),(0,r.jsx)(i.zx,{onClick:()=>{if(!m.current)return;let e=new XMLSerializer().serializeToString(m.current);console.log("svgData",e);let t=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),n=URL.createObjectURL(t),r=document.createElement("a");r.href=n,r.download=`morse-code-${Date.now()}.svg`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n)},type:"secondary",children:"Export as SVG"})]})]})]})})}},96233:function(e,t,n){n.d(t,{MU:function(){return h},xs:function(){return d},zF:function(){return u}});var r=n(52676),i=n(76455),o=n(25100),a=n(10199),l=n(18226),s=n(16535),c=n(19098);let u="/morse",d="/morse/converter",h="/morse/latin",f=(0,i.cP)([{path:"/morse",element:(0,r.jsx)(o.Z,{}),children:[{index:!0,path:u,element:(0,r.jsx)(l.Z,{})},{path:`${u}/about`,element:(0,r.jsx)(a.Z,{})},{path:h,element:(0,r.jsx)(s.Z,{})},{path:d,element:(0,r.jsx)(c.Z,{})}]}]);t.ZP=f},59497:function(e,t,n){var r,i,o,a,l,s,c,u,d,h,f,m,p,x,v;n.d(t,{G2:function(){return u},Jz:function(){return i},KN:function(){return j},MG:function(){return w},NZ:function(){return R},OF:function(){return l},TC:function(){return k},_Y:function(){return C},a1:function(){return S},bX:function(){return N},cd:function(){return P},dc:function(){return y},gZ:function(){return O},hH:function(){return Z},hY:function(){return r},i1:function(){return L},kc:function(){return s},o4:function(){return E},oZ:function(){return b}}),n(56972),n(56879),n(51540),n(50638),n(94910),n(70126),n(80886),n(43605),n(20540),n(21558),n(73845),n(79388),n(3522),n(50294),n(68522),n(49200),n(21911),n(25615),n(39526),n(98774),n(69191),n(83848),n(32768),n(25074),n(77084),n(67475),(d=r||(r={})).light="light",d.dark="dark",(h=i||(i={})).github="github",h.info="info",h.setting="setting",h.keyboard="keyboard",h["keyboard-2"]="keyboard-2",h.dark="dark",h.light="light",h.switch="switch",h["morse-code-1"]="morse-code-1",h["morse-code-2"]="morse-code-2",h["morse-code"]="morse-code",h.refresh="refresh";let g=["Backspace","Delete"],b=new Set(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?","'","!","/","(",")","&",":",";","=","+","-","_",'"',"$","@",">","<","[","]","{","}","|",...g," "]),y=new Set(g),w=400,j=130,k=500,S="morse-theme";(o||(o={})).space="Space",(f=a||(a={}))[f.dot=1]="dot",f[f.dash=2]="dash",(m=l||(l={})).dotChar=".",m.dashChar="-",(p=s||(s={})).active="active",p.correct="correct",p.error="error",p.warn="warn",(x=c||(c={})).running="running",x.close="close",(v=u||(u={})).idle="idle",v.typing="typing",v.done="done";let C="word",Z="char",N="|",E="+",O="/",L="?",P={A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..",0:"-----",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----.",".":".-.-.-",",":"--..--","?":"..--..","'":".----.","!":"-.-.--","/":"-..-.","(":"-.--.",")":"-.--.-","&":".-...",":":"---...",";":"-.-.-.","=":"-...-","+":".-.-.","-":"-....-",_:"..--.-",'"':".-..-.",$:"...-..-","@":".--.-."},R=Object.entries(P).reduce((e,t)=>{let[n,r]=t;return e[r]=n,e},{})},2070:function(e,t,n){n.d(t,{c:function(){return i},t:function(){return r}});let r=["HELLO WORLD","SOS","SHANKS IS AWESOME","CQ CQ CQ","QRT","QSL","THE QUICK BROWN FOX","PARIS PARIS","TEST TEST","CQ DX","QTH","NAME IS","GOOD MORNING","GOOD EVENING","73 73"],i=["It's tempting to want to live in the past. It's familiar. It's comfortable. But it's where fossils come from.","May the Force be with you, always remember that fear leads to anger, anger leads to hate, hate leads to suffering.","I'll be back, and when I return, nothing will stop me from completing my mission to protect you.","Here's looking at you, kid. Of all the gin joints in all the towns in all the world, she walks into mine.","You talking to me? You talking to me? Then who the hell else are you talking to?","Life is like a box of chocolates, you never know what you're gonna get until you take that first bite.","I see dead people walking around like regular people, they don't see each other, they only see what they want to see.","Show me the money! Help me help you, help me help you, you complete me!","Nobody puts Baby in a corner, she's got a great rhythm and she's a wonderful dancer.","Keep your friends close, but your enemies closer. Never let anyone know what you are thinking."]},82173:function(e,t,n){n.d(t,{M:function(){return l},v:function(){return o}});var r=n(90997);let i=new Audio(n(3426)),o=()=>{i.currentTime=0,i.play()},a=new Audio(r),l=()=>{a.currentTime=0,a.play()}},72853:function(e,t,n){n.d(t,{Am:function(){return b},Bh:function(){return f},LP:function(){return m},Ow:function(){return v},R4:function(){return p},aE:function(){return x},tq:function(){return g}}),n(93088),n(87866),n(12131),n(6016),n(28763),n(96408),n(56201),n(45521),n(81354),n(73206),n(82762),n(42242),n(5320),n(69708),n(11160),n(75698),n(67475),n(18936),n(54335),n(25074),n(77084);var r=n(99395),i=n(29561),o=n(3115),a=n(49969),l=n(73860),s=n(92229),c=n(64777),u=n(56301),d=n(59497);let h=new window.AudioContext;function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sine";arguments.length>1&&void 0!==arguments[1]&&arguments[1];let t=h.createOscillator();t.type=e,t.frequency.setValueAtTime(600,h.currentTime);let n=h.createGain();return n.gain.setValueAtTime(.2,h.currentTime),t.connect(n),n.connect(h.destination),t}function m(e){let t=(0,r.R)(document,"keydown").pipe((0,i.h)(e=>"Space"===e.code&&!e.repeat)),n=(0,r.R)(document,"keyup").pipe((0,i.h)(e=>"Space"===e.code)),h=t.pipe((0,o.w)(()=>{let t=Date.now(),r=e();return r.start(),(0,a.S)(n.pipe((0,l.U)(()=>Date.now()-t<d.KN?d.OF.dotChar:d.OF.dashChar)),(0,s.H)(d.MG).pipe((0,l.U)(()=>d.OF.dashChar))).pipe((0,l.U)(e=>(r.stop(),e)))})),f=h.pipe((0,c.f)(h.pipe((0,u.b)(d.TC))),(0,i.h)(e=>e.length>0),(0,l.U)(e=>e.join("")));return[h,f]}function p(e){return d.NZ[e]||null}function x(e){return d.cd[e]||null}function v(e){return Array.from(e=e.toUpperCase()).reduce((e,t)=>{if(" "===t)return e+=d.o4;if("\n"===t)return e+=d.gZ;let n=x(t);return e+=n?n+d.bX:`${t}${d.i1}`},"")}function g(){return!!window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||!1}function b(){let e=localStorage.getItem(d.a1);return e?e:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?d.hY.dark:d.hY.light}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,i){if(1&i&&(r=this(r)),8&i||"object"==typeof r&&r&&(4&i&&r.__esModule||16&i&&"function"==typeof r.then))return r;var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&i&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach(function(e){a[e]=function(){return r[e]}});return a.default=function(){return r},n.d(o,a),o}})(),n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=function(e){return e.paths=[],!e.children&&(e.children=[]),e},n.nc=void 0,(()=>{var e=[];n.O=function(t,r,i,o){if(r){o=o||0;for(var a=e.length;a>0&&e[a-1][2]>o;a--)e[a]=e[a-1];e[a]=[r,i,o];return}for(var l=1/0,a=0;a<e.length;a++){for(var r=e[a][0],i=e[a][1],o=e[a][2],s=!0,c=0;c<r.length;c++)l>=o&&Object.keys(n.O).every(function(e){return n.O[e](r[c])})?r.splice(c--,1):(s=!1,o<l&&(l=o));if(s){e.splice(a--,1);var u=i();void 0!==u&&(t=u)}}return t}})(),n.p="/morse/",(()=>{var e={980:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i=r[0],o=r[1],a=r[2],l,s,c=0;if(i.some(function(t){return 0!==e[t]})){for(l in o)n.o(o,l)&&(n.m[l]=o[l]);if(a)var u=a(n)}for(t&&t(r);c<i.length;c++)s=i[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},r=self.webpackChunkmorse_code=self.webpackChunkmorse_code||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,["707","126","361","118","286"],function(){return n("17204")});r=n.O(r)})();
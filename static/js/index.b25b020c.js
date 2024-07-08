(()=>{"use strict";var e={86668:function(){},3426:function(e,t,r){e.exports=r.p+"static/media/typewriter.08d818ca.mp3"},30735:function(e,t,r){r.d(t,{J2:function(){return o}});var n=r(62401),i=r(59497);(0,n.rw)("");let o=(0,n.rw)({morseCode:"",status:i.G2.idle});(0,n.rw)("")},25100:function(e,t,r){var n=r(52676);r(86668);var i=r(7667),o=r(82157),c=r(80455),s=r(75271),a=r(69747),l=r(29508);let u=l.ZP.div`
  padding: 5vh 8vw;
`;t.Z=s.memo(function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Ar.Header,{children:(0,n.jsx)(i.Z,{})}),(0,n.jsx)(a.Ar.Content,{children:(0,n.jsx)(u,{className:"w-full grow",children:(0,n.jsx)(c.j3,{})})}),(0,n.jsx)(a.Ar.Footer,{children:(0,n.jsx)(o.Z,{})})]})})},82157:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(52676);function i(){return(0,n.jsx)("div",{className:"w-full px-8 h-9",children:(0,n.jsx)("span",{})})}},7667:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(52676),i=r(29508),o=r(15389),c=r(25585);let s=i.ZP.div`
  padding-left: 5vw;
  padding-right: 5vw;
`;function a(){return(0,n.jsxs)(s,{className:"w-full flex items-center justify-between h-10",children:[(0,n.jsx)(o.Z,{}),(0,n.jsx)(c.Z,{})]})}},15389:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(52676),i=r(78203),o=r(87428),c=r(59497),s=r(29508);let a=s.ZP.nav`
  display: flex;
  margin-left: 1rem;
  > div {
    margin-right: 2.2rem;
  }
`,l=()=>(0,n.jsxs)(a,{children:[(0,n.jsx)(o.Z,{name:c.Jz["keyboard-2"],value:"/morse/latin",type:"route"}),(0,n.jsx)(o.Z,{name:c.Jz.setting}),(0,n.jsx)(o.Z,{name:c.Jz.info})]});function u(){return(0,n.jsxs)("div",{className:"h-full flex justify-start",children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)(l,{})]})}},78203:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(52676),i=r(80455),o=r(59497),c=r(5437);function s(){let e=(0,i.s0)();return(0,n.jsxs)("div",{onClick:()=>{e("/morse")},className:"h-full flex cursor-pointer",children:[(0,n.jsx)(c.Z,{class:"text-skin-neutral-2 relative",style:{bottom:"2px"},name:o.Jz["morse-code"],size:"2.5rem"}),(0,n.jsx)("div",{className:"text-skin-neutral-3 font-medium text-3xl",children:"MorseType"})]})}},25585:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(52676),i=r(87428),o=r(59497);function c(){return(0,n.jsx)("div",{className:"h-full flex",children:(0,n.jsx)(i.Z,{name:o.Jz.github,value:"https://github.com/cjinhuo/cjinhuo.github.io",type:"link"})})}},5437:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(52676);function i(e){return(0,n.jsx)("iconpark-icon",{size:"1.3rem",style:{transition:"color 0.1s"},class:"text-skin-neutral-7 hover:text-skin-neutral-5",...e})}},26216:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(52676),i=r(37921),o=r(30735),c=r(29508),s=r(59497),a=r(75271),l=r(72853),u=r(58212);let d=c.ZP.div`
  position: fixed;
  left: 20%;
  bottom: 10rem;
  min-width: 60%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .visibility-hidden {
    animation: maskHideAnimation 1s forwards;
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
`;function f(){let{morseCode:e,status:t}=(0,i.Dv)(o.J2),[r,c]=(0,a.useMemo)(()=>t===s.G2.idle?["hidden"]:t===s.G2.done?["visibility-hidden",(0,l.R4)(e)]:["visibility-show"],[t,e]);return(0,n.jsx)(d,{children:(0,n.jsxs)("div",{style:{backgroundColor:"var(--color-neutral-8)",opacity:"0.8"},className:`text-3xl w-full h-full flex justify-center items-center rounded-2xl ${r}`,children:[(0,n.jsx)(u.Z,{morseCode:e}),(0,n.jsx)("div",{className:"text-skin-neutral-4",children:null===c?"-> invalid morse code":c})]})})}},87428:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(52676);r(75271);var i=r(5437),o=r(80455),c=r(79391);function s(e){let{name:t,value:r,type:s,onClick:a}=e,l=(0,o.s0)();return(0,n.jsx)(c.E.div,{whileHover:{scale:1.2},className:"flex items-center cursor-pointer",onClick:()=>(a&&a(),"link"===s)?window.open(r):"route"===s&&r?l(r):void 0,children:(0,n.jsx)(i.Z,{name:t})})}},58212:function(e,t,r){r.d(t,{Z:function(){return u}}),r(64072),r(87395);var n=r(52676),i=r(53954),o=r.n(i),c=r(29508),s=r(59497);let a={dotWidth:0,dashWidth:8,strokeWidth:4,stroke:"",lineHeight:20,letterSpace:10,dotDashSpace:4,containerWidth:10,containerHeight:10,containerPadding:10,autoCalculateContainerSize:!0},l=c.ZP.svg`
  .line {
    stroke: ${e=>{let{stroke:t}=e;return t||"var(--color-neutral-4)"}};
  }
`;function u(e){let t=o()(a,e,(e,t)=>void 0===t?e:t),[r,i,c]=(()=>{let e=t.containerPadding,r=t.containerPadding,i=e,o=r,c=2*t.containerPadding,a=2*t.containerPadding;if(t.morseCode.length){let l=t.morseCode.split(s.s$).map((l,u)=>(e=i=t.containerPadding,0!==u&&(r+=t.lineHeight,o+=t.lineHeight,a+=t.lineHeight),(0,n.jsx)("g",{children:Array.from(l).map((a,u)=>{if(a===s.bX)return e+=t.letterSpace,(0,n.jsx)(n.Fragment,{});let d=a===s.OF.dotChar;i=(e=0===e?e:e+t.dotDashSpace)+(d?t.dotWidth:t.dashWidth);let f=(0,n.jsx)("line",{strokeWidth:t.strokeWidth,strokeLinecap:"round",className:"line",x1:e,y1:r,x2:i,y2:o},`${e}${r}`);return e=i+=t.dotDashSpace,u===l.length-1&&(c=Math.max(c,i+t.containerPadding)),f})},r)));return[t.autoCalculateContainerSize?c:t.containerWidth,t.autoCalculateContainerSize?a:t.containerHeight,(0,n.jsxs)(n.Fragment,{children:[...l]})]}return[0,0,(0,n.jsx)(n.Fragment,{})]})();return(0,n.jsx)(l,{width:r,height:i,stroke:e.stroke,children:c})}},97988:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(52676),i=r(75271),o=r(59497),c=r(30735),s=r(37921),a=r(72853),l=r(4778);function u(){let e=(0,s.b9)(c.J2),t=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(!t.current)return;let r=t.current.start(),[n,i]=(0,a.LP)(a.Bh),c=n.subscribe(t=>{e(e=>e.status!==o.G2.typing?{status:o.G2.typing,morseCode:t}:{status:o.G2.typing,morseCode:e.morseCode+t})}),s=i.subscribe(n=>{let i=(0,a.R4)(n);i&&((null==r?void 0:r.innerHTML)===i?[r]=t.current.next(o.kc.correct):[r]=t.current.next(o.kc.error,i)),e(e=>({status:o.G2.done,morseCode:e.morseCode})),r?""===r.innerText&&([r]=t.current.next(o.kc.correct)):(c.unsubscribe(),s.unsubscribe(),console.log("ALL over"))});return()=>{c.unsubscribe(),s.unsubscribe()}},[]),(0,n.jsx)("div",{children:(0,n.jsx)(l.Z,{data:"HELLO WORLD",ref:t})})}},62168:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(52676),i=r(79391),o=r(75271),c=r(29508);let s=c.ZP.div`
  position: fixed;
  bottom: 10vh;
  left: 30%;
  width: 40%;
  height: 3rem;
  @media (max-width: 400px) {
    left: 10%;
    width: 80%;
  }
`,a=(0,c.ZP)(i.E.button)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background-color: var(--color-neutral-7);
  &:hover {
    background-color: var(--color-neutral-8);
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
    background-color: var(--color-neutral-6);
    position: absolute;
    content: '';
    width: calc(100% + 4px);
    height: calc(100% + 8px);
    top: 0px;
    left: -2px;
    border-radius: inherit;
    z-index: -1;
  }
`;function l(){let e=(0,o.useCallback)(e=>{let t=new KeyboardEvent(e,{key:" ",code:"Space",keyCode:32,charCode:32,bubbles:!0,cancelable:!0});document.dispatchEvent(t)},[]),t=(0,o.useCallback)(()=>{e("keydown")},[e]),r=(0,o.useCallback)(()=>{e("keyup")},[e]),i=(0,o.useCallback)(()=>{e("keyup")},[e]);return(0,n.jsx)(s,{children:(0,n.jsx)(a,{onMouseDown:t,onMouseUp:r,onMouseLeave:i,children:"Click Me"})})}},4778:function(e,t,r){r(64072),r(87395),r(19608),r(1056);var n=r(52676),i=r(29508),o=r(59497),c=r(75271),s=r(9921),a=r(56301);let l="caret",u="caret-animation",d="blink",f=i.ZP.div`
  position: relative;
  .${l} {
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

  .${o._Y} {
    line-height: 3.4rem;
    font-size: 3rem;
    margin-top: 0.2rem;
  }
  .${o.hH} {
    /* outline: 1px solid var(--color-linear-bg-start); */
    margin-right: 0.2rem;
    color: var(--color-neutral-6);
    position: relative;
    display: inline-block;
  }

  .${o.kc.correct} {
    color: var(--color-neutral-4);
    background-color: var(--color-neutral-8);
  }
  .${o.kc.warn} {
    color: #fb923c;
    background-color: #fed7aa;
  }
  /* https://tailwindcss.com/docs/customizing-colors */
  .${o.kc.error} {
    color: #fb7185;
    background-color: #fecdd3;
  }
  .${o.kc.active} {
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
`;t.Z=(0,c.forwardRef)(function(e,t){let{data:r}=e,i=(0,c.useRef)(null),h=(0,c.useRef)(null),p=new s.x;p.pipe((0,a.b)(2e3)).subscribe(()=>{!(!h.current||h.current.classList.contains(u))&&h.current.classList.add(u)});let m=()=>{h.current&&(h.current.classList.remove(u),p.next(""))},v=!1,x=null,b=null,g=()=>{h.current&&x&&(h.current.style.left=`${x.offsetLeft}px`,h.current.style.top=`${x.offsetTop}px`)};(0,c.useEffect)(()=>{if(h.current&&i.current)return window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)}},[]);let y=(0,c.useMemo)(()=>{if(0===r.length)return null;let e=r.split(" ");return e.map((t,r)=>(0,n.jsxs)("div",{className:`inline-block ${o._Y}`,children:[Array.from(t).map((e,t)=>(0,n.jsx)("div",{className:o.hH,children:e},`${e}-${t}`)),r!==e.length-1&&(0,n.jsx)("div",{className:`${o.hH} w-6 whitespace-pre-wrap`,children:" "})]},`${t}-${r}`))},[r]);return(0,c.useImperativeHandle)(t,()=>({start(){var e;if(!i.current||!h.current)return;v=!0;let t=null===(e=i.current.querySelector(`.${o._Y}`))||void 0===e?void 0:e.firstElementChild;if(t)return x=t,t;throw Error("Start Fn Error: not found the first char in container")},prev(){if(!v)throw Error("Prev Fn Error: should run [start] fn first");if(!b)throw Error("Prev Fn Error: there is no last char to iterate");if(b.classList.contains(o.kc.error)?g():b.classList.remove(o.kc.correct),x=b,h.current.style.left=`${x.offsetLeft}px`,h.current.style.top=`${x.offsetTop}px`,!(b=x.previousElementSibling)){var e;let t=null===(e=x.parentElement)||void 0===e?void 0:e.previousElementSibling;t&&t.className.includes(o._Y)&&(b=t.lastElementChild)}return[x,b]},next(e,t){if(!v)throw Error("Next Fn Error: should run [start] fn first");if(!x)throw Error("Next Fn Error: there is no char to iterate");b=x,x.classList.remove(o.kc.warn),x.classList.add(e);let r=x.nextElementSibling;if(r)x=r;else{var n;let e=null===(n=x.parentElement)||void 0===n?void 0:n.nextElementSibling;x=(null==e?void 0:e.className.includes(o._Y))?e.firstElementChild:null}if(e===o.kc.error&&t){let e=document.createElement("span");e.classList.add(d),e.innerHTML=t,b.appendChild(e);let r=b;setTimeout(()=>{r.removeChild(e)},1e3)}return x?g():h.current.style.left=`${b.offsetLeft+b.getBoundingClientRect().width}px`,m(),[x,b]}}),[]),(0,n.jsxs)(f,{ref:i,children:[y,(0,n.jsx)("div",{className:`${l} ${u}`,ref:h})]})})},17204:function(e,t,r){var n=r(52676),i=r(38751),o=r(76455),c=r(96233);let s=document.getElementById("root");s&&i.createRoot(s).render((0,n.jsx)(o.pG,{router:c.Z}))},10199:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(52676);function i(){return(0,n.jsx)("div",{children:(0,n.jsx)("h1",{children:"contributors"})})}},18226:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(52676),i=r(26216),o=r(97988),c=r(62168);function s(){return(0,n.jsxs)("div",{className:"w-full h-full",children:[(0,n.jsx)(o.Z,{}),(0,n.jsx)(i.Z,{}),(0,n.jsx)(c.Z,{})]})}},16535:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(52676),i=r(75271),o=r(4778),c=r(99395),s=r(73860),a=r(29561),l=r(59497),u=r(82173);function d(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(!e.current)return;let t=(0,c.R)(document,"keydown").pipe((0,s.U)(e=>({repeat:e.repeat,key:"Space"===e.code?" ":e.key})),(0,a.h)(e=>!e.repeat&&l.oZ.has(e.key))),r=t.pipe((0,a.h)(e=>!l.dc.has(e.key))),n=t.pipe((0,a.h)(e=>l.dc.has(e.key))),i=e.current.start(),o=null,d=r.subscribe(t=>{if(t.key===(null==i?void 0:i.innerText)?[i,o]=e.current.next(l.kc.correct):[i,o]=e.current.next(l.kc.error,t.key),(0,u.v)(),!i){console.log("over");return}}),f=n.subscribe(t=>{if(!!o)(0,u.v)(),[i,o]=e.current.prev()});return()=>{d.unsubscribe(),f.unsubscribe()}},[]),(0,n.jsx)("div",{children:(0,n.jsx)(o.Z,{data:"It's tempting to want to live in the past. It's familiar. It's comfortable. But it's where fossils come from.",ref:e})})}},96233:function(e,t,r){var n=r(52676),i=r(76455),o=r(25100),c=r(18226),s=r(10199),a=r(16535);let l=(0,i.aj)([{path:"/morse",element:(0,n.jsx)(o.Z,{}),children:[{index:!0,path:"/morse",element:(0,n.jsx)(c.Z,{})},{path:"/morse/about",element:(0,n.jsx)(s.Z,{})},{path:"/morse/latin",element:(0,n.jsx)(a.Z,{})}]}]);t.Z=l},59497:function(e,t,r){var n,i,o,c,s,a,l,u,d,f,h,p,m;r.d(t,{G2:function(){return l},Jz:function(){return n},KN:function(){return y},MG:function(){return g},NZ:function(){return E},OF:function(){return c},TC:function(){return k},_Y:function(){return j},bX:function(){return Z},dc:function(){return b},hH:function(){return w},kc:function(){return s},oZ:function(){return x},s$:function(){return C}}),r(56972),r(56879),r(51540),r(50638),r(94910),r(70126),r(80886),r(43605),r(20540),r(21558),r(73845),r(79388),r(3522),r(50294),r(68522),r(49200),r(21911),r(25615),r(39526),r(98774),r(69191),r(83848),r(32768),r(25074),r(77084),r(67475),(u=n||(n={})).github="github",u.info="info",u.setting="setting",u.keyboard="keyboard",u["keyboard-2"]="keyboard-2",u.dark="dark",u.light="light",u["morse-code-1"]="morse-code-1",u["morse-code-2"]="morse-code-2",u["morse-code"]="morse-code";let v=["Backspace","Delete"],x=new Set(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?","'","!","/","(",")","&",":",";","=","+","-","_",'"',"$","@",">","<","[","]","{","}","|",...v," "]),b=new Set(v),g=400,y=130,k=500;(i||(i={})).space="Space",(d=o||(o={}))[d.dot=1]="dot",d[d.dash=2]="dash",(f=c||(c={})).dotChar=".",f.dashChar="-",(h=s||(s={})).active="active",h.correct="correct",h.error="error",h.warn="warn",(p=a||(a={})).running="running",p.close="close",(m=l||(l={})).idle="idle",m.typing="typing",m.done="done";let j="word",w="char",Z="|",C="+",E=Object.entries({A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..",0:"-----",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----.",".":".-.-.-",",":"--..--","?":"..--..","'":".----.","!":"-.-.--","/":"-..-.","(":"-.--.",")":"-.--.-","&":".-...",":":"---...",";":"-.-.-.","=":"-...-","+":".-.-.","-":"-....-",_:"..--.-",'"':".-..-.",$:"...-..-","@":".--.-."}).reduce((e,t)=>{let[r,n]=t;return e[n]=r,e},{})},82173:function(e,t,r){r.d(t,{v:function(){return i}});let n=new Audio(r(3426)),i=()=>{n.currentTime=0,n.play()}},72853:function(e,t,r){r.d(t,{Bh:function(){return h},LP:function(){return p},R4:function(){return m}}),r(93088),r(87866),r(12131),r(6016),r(28763),r(96408),r(56201),r(45521),r(81354),r(73206),r(82762),r(78754),r(5320),r(69708),r(11160),r(75698),r(67475),r(18936),r(54335),r(25074),r(77084);var n=r(99395),i=r(29561),o=r(3115),c=r(49969),s=r(73860),a=r(92229),l=r(64777),u=r(56301),d=r(59497);let f=new window.AudioContext;function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sine";arguments.length>1&&void 0!==arguments[1]&&arguments[1];let t=f.createOscillator();t.type=e,t.frequency.setValueAtTime(600,f.currentTime);let r=f.createGain();return r.gain.setValueAtTime(.2,f.currentTime),t.connect(r),r.connect(f.destination),t}function p(e){let t=(0,n.R)(document,"keydown").pipe((0,i.h)(e=>"Space"===e.code&&!e.repeat)),r=(0,n.R)(document,"keyup").pipe((0,i.h)(e=>"Space"===e.code)),f=t.pipe((0,o.w)(()=>{let t=Date.now(),n=e();return n.start(),(0,c.S)(r.pipe((0,s.U)(()=>Date.now()-t<d.KN?d.OF.dotChar:d.OF.dashChar)),(0,a.H)(d.MG).pipe((0,s.U)(()=>d.OF.dashChar))).pipe((0,s.U)(e=>(n.stop(),e)))})),h=f.pipe((0,l.f)(f.pipe((0,u.b)(d.TC))),(0,i.h)(e=>e.length>0),(0,s.U)(e=>e.join("")));return[f,h]}function m(e){return d.NZ[e]||null}}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(n,i){if(1&i&&(n=this(n)),8&i||"object"==typeof n&&n&&(4&i&&n.__esModule||16&i&&"function"==typeof n.then))return n;var o=Object.create(null);r.r(o);var c={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(function(e){c[e]=function(){return n[e]}});return c.default=function(){return n},r.d(o,c),o}})(),r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],!e.children&&(e.children=[]),e},r.nc=void 0,(()=>{var e=[];r.O=function(t,n,i,o){if(n){o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,i,o];return}for(var s=1/0,c=0;c<e.length;c++){for(var n=e[c][0],i=e[c][1],o=e[c][2],a=!0,l=0;l<n.length;l++)s>=o&&Object.keys(r.O).every(function(e){return r.O[e](n[l])})?n.splice(l--,1):(a=!1,o<s&&(s=o));if(a){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}})(),r.p="/morse/",(()=>{var e={980:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i=n[0],o=n[1],c=n[2],s,a,l=0;if(i.some(function(t){return 0!==e[t]})){for(s in o)r.o(o,s)&&(r.m[s]=o[s]);if(c)var u=c(r)}for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self.webpackChunkmorse_code=self.webpackChunkmorse_code||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,["126","707","361","118","788"],function(){return r("17204")});n=r.O(n)})();
(()=>{"use strict";var e={6668:function(){},735:function(e,t,n){n.d(t,{J2:function(){return o}});var r=n(2401),i=n(9497);(0,r.rw)("");let o=(0,r.rw)({morseCode:"",status:i.G2.idle});(0,r.rw)("")},5100:function(e,t,n){var r=n(2676);n(6668);var i=n(7667),o=n(2157),c=n(455),a=n(5271),s=n(9747);t.Z=a.memo(function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Ar.Header,{children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)(s.Ar.Content,{children:(0,r.jsx)("div",{className:"w-full grow px-40 py-10",children:(0,r.jsx)(c.j3,{})})}),(0,r.jsx)(s.Ar.Footer,{children:(0,r.jsx)(o.Z,{})})]})})},2157:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(2676);function i(){return(0,r.jsx)("div",{className:"w-full px-8 h-9",children:(0,r.jsx)("span",{})})}},7667:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(2676),i=n(9508),o=n(5389),c=n(5585);let a=i.ZP.div``;function s(){return(0,r.jsxs)(a,{className:"w-full flex items-center justify-between px-20 h-10",children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)(c.Z,{})]})}},5389:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(2676),i=n(8203),o=n(7428),c=n(9497),a=n(9508);let s=a.ZP.nav`
  display: flex;
  margin-left: 1rem;
  > div {
    margin-right: 2.2rem;
  }
`,u=()=>(0,r.jsxs)(s,{children:[(0,r.jsx)(o.Z,{name:c.Jz["keyboard-2"],value:"/",type:"route"}),(0,r.jsx)(o.Z,{name:c.Jz.setting}),(0,r.jsx)(o.Z,{name:c.Jz.info})]});function l(){return(0,r.jsxs)("div",{className:"h-full flex justify-start",children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(u,{})]})}},8203:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(2676),i=n(9497),o=n(5437);function c(){return(0,r.jsxs)("div",{className:"h-full flex",children:[(0,r.jsx)(o.Z,{class:"text-skin-neutral-2 relative",style:{bottom:"2px"},name:i.Jz["morse-code"],size:"2.5rem"}),(0,r.jsx)("div",{className:"text-skin-neutral-3 font-medium text-3xl",children:"MorseType"})]})}},5585:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(2676),i=n(7428),o=n(9497);function c(){return(0,r.jsx)("div",{className:"h-full flex",children:(0,r.jsx)(i.Z,{name:o.Jz.github,value:"https://github.com/cjinhuo/cjinhuo.github.io",type:"link"})})}},5437:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(2676);function i(e){return(0,r.jsx)("iconpark-icon",{size:"1.3rem",style:{transition:"color 0.1s"},class:"text-skin-neutral-7 hover:text-skin-neutral-5",...e})}},6216:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(2676),i=n(7921),o=n(735),c=n(9508),a=n(9497),s=n(5271),u=n(2853),l=n(8212);let d=c.ZP.div`
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
`;function f(){let{morseCode:e,status:t}=(0,i.Dv)(o.J2),[n,c]=(0,s.useMemo)(()=>t===a.G2.idle?["hidden"]:t===a.G2.done?["visibility-hidden",(0,u.R4)(e)]:["visibility-show"],[t,e]);return(0,r.jsx)(d,{children:(0,r.jsxs)("div",{style:{backgroundColor:"var(--color-neutral-8)",opacity:"0.8"},className:`text-3xl w-full h-full flex justify-center items-center rounded-2xl ${n}`,children:[(0,r.jsx)(l.Z,{morseCode:e}),(0,r.jsx)("div",{className:"text-skin-neutral-4",children:null===c?"-> invalid morse code":c})]})})}},7428:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(2676);n(5271);var i=n(5437),o=n(455);function c(e){let{name:t,value:n,type:c,onClick:a}=e,s=(0,o.s0)();return(0,r.jsx)("div",{className:"flex items-center cursor-pointer",onClick:()=>(a&&a(),"link"===c)?window.open(n):"route"===c&&n?s(n):void 0,children:(0,r.jsx)(i.Z,{name:t})})}},8212:function(e,t,n){n.d(t,{Z:function(){return u}}),n(4072),n(7395);var r=n(2676),i=n(2699),o=n(9508),c=n(9497);let a={dotWidth:0,dashWidth:8,strokeWidth:4,stroke:"",lineHeight:20,letterSpace:10,dotDashSpace:4,containerWidth:10,containerHeight:10,containerPadding:10,autoCalculateContainerSize:!0},s=o.ZP.svg`
  .line {
    stroke: ${e=>{let{stroke:t}=e;return t||"var(--color-neutral-4)"}};
  }
`;function u(e){let t=(0,i.mergeWith)(a,e,(e,t)=>void 0===t?e:t),[n,o,u]=(()=>{let e=t.containerPadding,n=t.containerPadding,i=e,o=n,a=2*t.containerPadding,s=2*t.containerPadding;if(t.morseCode.length){let u=t.morseCode.split(c.s$).map((u,l)=>(e=i=t.containerPadding,0!==l&&(n+=t.lineHeight,o+=t.lineHeight,s+=t.lineHeight),(0,r.jsx)("g",{children:Array.from(u).map((s,l)=>{if(s===c.bX)return e+=t.letterSpace,(0,r.jsx)(r.Fragment,{});let d=s===c.OF.dotChar;i=(e=0===e?e:e+t.dotDashSpace)+(d?t.dotWidth:t.dashWidth);let f=(0,r.jsx)("line",{strokeWidth:t.strokeWidth,strokeLinecap:"round",className:"line",x1:e,y1:n,x2:i,y2:o},`${e}${n}`);return e=i+=t.dotDashSpace,l===u.length-1&&(a=Math.max(a,i+t.containerPadding)),f})},n)));return[t.autoCalculateContainerSize?a:t.containerWidth,t.autoCalculateContainerSize?s:t.containerHeight,(0,r.jsxs)(r.Fragment,{children:[...u]})]}return[0,0,(0,r.jsx)(r.Fragment,{})]})();return(0,r.jsx)(s,{width:n,height:o,stroke:e.stroke,children:u})}},7988:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(2676),i=n(5271),o=n(9497),c=n(735),a=n(7921),s=n(2853),u=n(4778);function l(){let e=(0,a.b9)(c.J2),t=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(!t.current)return;let n=t.current.start(),[r,i]=(0,s.LP)(s.Bh),c=r.subscribe(t=>{e(e=>e.status!==o.G2.typing?{status:o.G2.typing,morseCode:t}:{status:o.G2.typing,morseCode:e.morseCode+t})}),a=i.subscribe(r=>{let i=(0,s.R4)(r);i&&(n=(null==n?void 0:n.innerHTML)===i?t.current.next(o.kc.correct):t.current.next(o.kc.error,i)),e(e=>({status:o.G2.done,morseCode:e.morseCode})),n?""===n.innerText&&(n=t.current.next(o.kc.correct)):(c.unsubscribe(),a.unsubscribe(),console.log("ALL over"))});return()=>{c.unsubscribe(),a.unsubscribe()}},[]),(0,r.jsx)("div",{children:(0,r.jsx)(u.Z,{data:"HELLO WORLD",ref:t})})}},4778:function(e,t,n){n(4072),n(7395),n(9608),n(1056);var r=n(2676),i=n(9508),o=n(9497),c=n(5271),a=n(9921),s=n(6301);let u="caret",l="caret-animation",d="blink",f=i.ZP.div`
  position: relative;
  .${u} {
    height: 3rem;
    position: absolute;
    background-color: var(--color-neutral-4);
    width: 0.2rem;
    top: 3px;
    left: 0;
    transition: left 0.2s;
  }
  .${l} {
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
  .${o.kc.error} {
    color: #fb7185;
    background-color: #fecdd3;
  }
  .${o.kc.active} {
  }
  .${d} {
    position: absolute;
    top: 0;
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
`;t.Z=(0,c.forwardRef)(function(e,t){let{data:n}=e,i=(0,c.useRef)(null),h=(0,c.useRef)(null),m=new a.x;m.pipe((0,s.b)(2e3)).subscribe(()=>{!(!h.current||h.current.classList.contains(l))&&h.current.classList.add(l)});let p=()=>{h.current&&(h.current.classList.remove(l),m.next(""))},v=!1,x=null;(0,c.useEffect)(()=>{if(!h.current||!i.current)return},[]);let g=(0,c.useMemo)(()=>{if(0===n.length)return null;let e=n.split(" ");return e.map((t,n)=>(0,r.jsxs)("div",{className:`inline-block ${o._Y}`,children:[Array.from(t).map((e,n)=>(0,r.jsx)("div",{className:o.hH,children:e},`${t}-${n}`)),n!==e.length-1&&(0,r.jsx)("div",{className:`${o.hH} w-6`})]},t))},[n]);return(0,c.useImperativeHandle)(t,()=>({next(e,t){if(!v)throw Error("Next Fn Error: should run [start] fn first");if(!x)throw Error("Next Fn Error: there is no char to iterate");let n=x;x.classList.add(e),x.classList.remove(o.kc.active);let r=x.nextElementSibling;if(r)(x=r).classList.add(o.kc.active);else{var i;let e=null===(i=x.parentElement)||void 0===i?void 0:i.nextElementSibling;(null==e?void 0:e.className.includes(o._Y))?null==(x=e.firstElementChild)||x.classList.add(o.kc.active):x=null}if(e===o.kc.error&&t){let e=document.createElement("span");e.classList.add(d),e.innerHTML=t,n.appendChild(e),setTimeout(()=>{n.removeChild(e)},1e3)}return x?h.current.style.left=`${x.offsetLeft}px`:h.current.style.left=`${n.offsetLeft+n.getBoundingClientRect().width}px`,p(),x},start(){var e;if(!i.current||!h.current)return;v=!0;let t=null===(e=i.current.querySelector(`.${o._Y}`))||void 0===e?void 0:e.firstElementChild;if(t)return t.classList.add(o.kc.active),x=t,t;throw Error("Start Fn Error: not found the first char in container")}}),[]),(0,r.jsxs)(f,{ref:i,children:[g,(0,r.jsx)("div",{className:`${u} ${l}`,ref:h})]})})},7204:function(e,t,n){var r=n(2676),i=n(8751),o=n(6455),c=n(6233);let a=document.getElementById("root");a&&i.createRoot(a).render((0,r.jsx)(o.pG,{router:c.Z}))},199:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(2676);function i(){return(0,r.jsx)("div",{children:(0,r.jsx)("h1",{children:"contributors"})})}},8226:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(2676),i=n(6216),o=n(7988);function c(){return(0,r.jsxs)("div",{className:"w-full h-full",children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)(i.Z,{})]})}},6233:function(e,t,n){var r=n(2676),i=n(6455),o=n(5100),c=n(8226),a=n(199);let s=(0,i.aj)([{path:"/",element:(0,r.jsx)(o.Z,{}),children:[{index:!0,path:"/morse",element:(0,r.jsx)(c.Z,{})},{path:"/about",element:(0,r.jsx)(a.Z,{})}]}]);t.Z=s},9497:function(e,t,n){var r,i,o,c,a,s,u,l,d,f,h,m,p;n.d(t,{G2:function(){return u},Jz:function(){return r},KN:function(){return x},MG:function(){return v},NZ:function(){return w},OF:function(){return c},TC:function(){return g},_Y:function(){return b},bX:function(){return y},hH:function(){return j},kc:function(){return a},s$:function(){return k}}),n(5074),n(7084),n(7475),(l=r||(r={})).github="github",l.info="info",l.setting="setting",l.keyboard="keyboard",l["keyboard-2"]="keyboard-2",l.dark="dark",l.light="light",l["morse-code-1"]="morse-code-1",l["morse-code-2"]="morse-code-2",l["morse-code"]="morse-code";let v=400,x=130,g=500;(i||(i={})).space="Space",(d=o||(o={}))[d.dot=1]="dot",d[d.dash=2]="dash",(f=c||(c={})).dotChar=".",f.dashChar="-",(h=a||(a={})).active="active",h.correct="correct",h.error="error",(m=s||(s={})).running="running",m.close="close",(p=u||(u={})).idle="idle",p.typing="typing",p.done="done";let b="word",j="char",y="|",k="+",w=Object.entries({A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..",0:"-----",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----.",".":".-.-.-",",":"--..--","?":"..--..","'":".----.","!":"-.-.--","/":"-..-.","(":"-.--.",")":"-.--.-","&":".-...",":":"---...",";":"-.-.-.","=":"-...-","+":".-.-.","-":"-....-",_:"..--.-",'"':".-..-.",$:"...-..-","@":".--.-."}).reduce((e,t)=>{let[n,r]=t;return e[r]=n,e},{})},2853:function(e,t,n){n.d(t,{Bh:function(){return h},LP:function(){return m},R4:function(){return p}}),n(3088),n(7866),n(2131),n(6016),n(8763),n(6408),n(6201),n(5521),n(1354),n(3206),n(2762),n(8754),n(5320),n(9708),n(1160),n(5698),n(7475),n(8936),n(4335),n(5074),n(7084);var r=n(9395),i=n(9561),o=n(3115),c=n(9969),a=n(7181),s=n(2229),u=n(4777),l=n(6301),d=n(9497);let f=new window.AudioContext;function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sine";arguments.length>1&&void 0!==arguments[1]&&arguments[1];let t=f.createOscillator();t.type=e,t.frequency.setValueAtTime(600,f.currentTime);let n=f.createGain();return n.gain.setValueAtTime(.2,f.currentTime),t.connect(n),n.connect(f.destination),t}function m(e){let t=(0,r.R)(document,"keydown").pipe((0,i.h)(e=>"Space"===e.code&&!e.repeat)),n=(0,r.R)(document,"keyup").pipe((0,i.h)(e=>"Space"===e.code)),f=t.pipe((0,o.w)(()=>{let t=Date.now(),r=e();return r.start(),(0,c.S)(n.pipe((0,a.U)(()=>Date.now()-t<d.KN?d.OF.dotChar:d.OF.dashChar)),(0,s.H)(d.MG).pipe((0,a.U)(()=>d.OF.dashChar))).pipe((0,a.U)(e=>(r.stop(),e)))})),h=f.pipe((0,u.f)(f.pipe((0,l.b)(d.TC))),(0,i.h)(e=>e.length>0),(0,a.U)(e=>e.join("")));return[f,h]}function p(e){return d.NZ[e]||null}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,i){if(1&i&&(r=this(r)),8&i||"object"==typeof r&&r&&(4&i&&r.__esModule||16&i&&"function"==typeof r.then))return r;var o=Object.create(null);n.r(o);var c={};e=e||[null,t({}),t([]),t(t)];for(var a=2&i&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach(function(e){c[e]=function(){return r[e]}});return c.default=function(){return r},n.d(o,c),o}})(),n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=function(e){return e.paths=[],!e.children&&(e.children=[]),e},n.nc=void 0,(()=>{var e=[];n.O=function(t,r,i,o){if(r){o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,i,o];return}for(var a=1/0,c=0;c<e.length;c++){for(var r=e[c][0],i=e[c][1],o=e[c][2],s=!0,u=0;u<r.length;u++)a>=o&&Object.keys(n.O).every(function(e){return n.O[e](r[u])})?r.splice(u--,1):(s=!1,o<a&&(a=o));if(s){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}})(),(()=>{var e={980:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i=r[0],o=r[1],c=r[2],a,s,u=0;if(i.some(function(t){return 0!==e[t]})){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(c)var l=c(n)}for(t&&t(r);u<i.length;u++)s=i[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(l)},r=self.webpackChunkmorse_code=self.webpackChunkmorse_code||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,["126","707","361","118","433"],function(){return n("7204")});r=n.O(r)})();
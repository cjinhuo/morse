(()=>{"use strict";var e={6668:function(){},735:function(e,t,r){r.d(t,{J2:function(){return o}});var n=r(2401),i=r(9497);(0,n.rw)("");let o=(0,n.rw)({morseCode:"",status:i.G2.idle});(0,n.rw)("")},5100:function(e,t,r){var n=r(2676);r(6668);var i=r(7667),o=r(2157),c=r(455),s=r(5271),a=r(9747);t.Z=s.memo(function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Ar.Header,{children:(0,n.jsx)(i.Z,{})}),(0,n.jsx)(a.Ar.Content,{children:(0,n.jsx)("div",{className:"w-full grow px-40 py-10",children:(0,n.jsx)(c.j3,{})})}),(0,n.jsx)(a.Ar.Footer,{children:(0,n.jsx)(o.Z,{})})]})})},2157:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(2676);function i(){return(0,n.jsx)("div",{className:"w-full px-8 h-9",children:(0,n.jsx)("span",{})})}},7667:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(2676),i=r(9508),o=r(5389),c=r(5585);let s=i.ZP.div``;function a(){return(0,n.jsxs)(s,{className:"w-full flex items-center justify-between px-20 h-10",children:[(0,n.jsx)(o.Z,{}),(0,n.jsx)(c.Z,{})]})}},5389:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(2676),i=r(8203),o=r(7428),c=r(9497),s=r(9508);let a=s.ZP.nav`
  display: flex;
  margin-left: 1rem;
  > div {
    margin-right: 2.2rem;
  }
`,u=()=>(0,n.jsxs)(a,{children:[(0,n.jsx)(o.Z,{name:c.Jz["keyboard-2"],value:"/",type:"route"}),(0,n.jsx)(o.Z,{name:c.Jz.setting}),(0,n.jsx)(o.Z,{name:c.Jz.info})]});function l(){return(0,n.jsxs)("div",{className:"h-full flex justify-start",children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)(u,{})]})}},8203:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(2676),i=r(9497),o=r(5437);function c(){return(0,n.jsxs)("div",{className:"h-full flex",children:[(0,n.jsx)(o.Z,{class:"text-skin-neutral-2 relative",style:{bottom:"2px"},name:i.Jz["morse-code"],size:"2.5rem"}),(0,n.jsx)("div",{className:"text-skin-neutral-3 font-medium text-3xl",children:"MorseType"})]})}},5585:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(2676),i=r(7428),o=r(9497);function c(){return(0,n.jsx)("div",{className:"h-full flex",children:(0,n.jsx)(i.Z,{name:o.Jz.github,value:"https://github.com/cjinhuo/cjinhuo.github.io",type:"link"})})}},5437:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(2676);function i(e){return(0,n.jsx)("iconpark-icon",{size:"1.3rem",style:{transition:"color 0.1s"},class:"text-skin-neutral-7 hover:text-skin-neutral-5",...e})}},6216:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(2676),i=r(7921),o=r(735),c=r(9508),s=r(9497),a=r(5271),u=r(2853),l=r(8212);let d=c.ZP.div`
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
`;function f(){let{morseCode:e,status:t}=(0,i.Dv)(o.J2),[r,c]=(0,a.useMemo)(()=>t===s.G2.idle?["hidden"]:t===s.G2.done?["visibility-hidden",(0,u.R4)(e)]:["visibility-show"],[t,e]);return(0,n.jsx)(d,{children:(0,n.jsxs)("div",{style:{backgroundColor:"var(--color-neutral-8)",opacity:"0.8"},className:`text-3xl w-full h-full flex justify-center items-center rounded-2xl ${r}`,children:[(0,n.jsx)(l.Z,{morseCode:e}),(0,n.jsx)("div",{className:"text-skin-neutral-4",children:null===c?"-> invalid morse code":c})]})})}},7428:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(2676);r(5271);var i=r(5437),o=r(455);function c(e){let{name:t,value:r,type:c,onClick:s}=e,a=(0,o.s0)();return(0,n.jsx)("div",{className:"flex items-center cursor-pointer",onClick:()=>(s&&s(),"link"===c)?window.open(r):"route"===c&&r?a(r):void 0,children:(0,n.jsx)(i.Z,{name:t})})}},8212:function(e,t,r){r.d(t,{Z:function(){return u}}),r(4072),r(7395);var n=r(2676),i=r(2699),o=r(9508),c=r(9497);let s={dotWidth:0,dashWidth:8,strokeWidth:4,stroke:"",lineHeight:20,letterSpace:10,dotDashSpace:4,containerWidth:10,containerHeight:10,containerPadding:10,autoCalculateContainerSize:!0},a=o.ZP.svg`
  .line {
    stroke: ${e=>{let{stroke:t}=e;return t||"var(--color-neutral-4)"}};
  }
`;function u(e){let t=(0,i.mergeWith)(s,e,(e,t)=>void 0===t?e:t),[r,o,u]=(()=>{let e=t.containerPadding,r=t.containerPadding,i=e,o=r,s=2*t.containerPadding,a=2*t.containerPadding;if(t.morseCode.length){let u=t.morseCode.split(c.s$).map((u,l)=>(e=i=t.containerPadding,0!==l&&(r+=t.lineHeight,o+=t.lineHeight,a+=t.lineHeight),(0,n.jsx)("g",{children:Array.from(u).map((a,l)=>{if(a===c.bX)return e+=t.letterSpace,(0,n.jsx)(n.Fragment,{});let d=a===c.OF.dotChar;i=(e=0===e?e:e+t.dotDashSpace)+(d?t.dotWidth:t.dashWidth);let f=(0,n.jsx)("line",{strokeWidth:t.strokeWidth,strokeLinecap:"round",className:"line",x1:e,y1:r,x2:i,y2:o},`${e}${r}`);return e=i+=t.dotDashSpace,l===u.length-1&&(s=Math.max(s,i+t.containerPadding)),f})},r)));return[t.autoCalculateContainerSize?s:t.containerWidth,t.autoCalculateContainerSize?a:t.containerHeight,(0,n.jsxs)(n.Fragment,{children:[...u]})]}return[0,0,(0,n.jsx)(n.Fragment,{})]})();return(0,n.jsx)(a,{width:r,height:o,stroke:e.stroke,children:u})}},7988:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(2676),i=r(5271),o=r(9497),c=r(735),s=r(7921),a=r(2853),u=r(4778);function l(){let e=(0,s.b9)(c.J2),t=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(!t.current)return;let r=t.current.start(),[n,i]=(0,a.LP)(a.Bh),c=n.subscribe(t=>{e(e=>e.status!==o.G2.typing?{status:o.G2.typing,morseCode:t}:{status:o.G2.typing,morseCode:e.morseCode+t})}),s=i.subscribe(n=>{let i=(0,a.R4)(n);i&&(r=(null==r?void 0:r.innerHTML)===i?t.current.next(o.kc.correct):t.current.next(o.kc.error,i)),e(e=>({status:o.G2.done,morseCode:e.morseCode})),r?""===r.innerText&&(r=t.current.next(o.kc.correct)):(c.unsubscribe(),s.unsubscribe(),console.log("ALL over"))});return()=>{c.unsubscribe(),s.unsubscribe()}},[]),(0,n.jsx)("div",{children:(0,n.jsx)(u.Z,{data:"HELLO WORLD",ref:t})})}},4778:function(e,t,r){r(4072),r(7395),r(9608),r(1056);var n=r(2676),i=r(9508),o=r(9497),c=r(5271),s=r(9921),a=r(6301);let u="caret",l="caret-animation",d="blink",f=i.ZP.div`
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
    width: 1.6rem;
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
`;t.Z=(0,c.forwardRef)(function(e,t){let{data:r}=e,i=(0,c.useRef)(null),h=(0,c.useRef)(null),m=new s.x;m.pipe((0,a.b)(2e3)).subscribe(()=>{!(!h.current||h.current.classList.contains(l))&&h.current.classList.add(l)});let p=()=>{h.current&&(h.current.classList.remove(l),m.next(""))},v=!1,x=null,b=null;(0,c.useEffect)(()=>{if(!h.current||!i.current)return},[]);let g=(0,c.useMemo)(()=>{if(0===r.length)return null;let e=r.split(" ");return e.map((t,r)=>(0,n.jsxs)("div",{className:`inline-block ${o._Y}`,children:[Array.from(t).map((e,r)=>(0,n.jsx)("div",{className:o.hH,children:e},`${t}-${r}`)),r!==e.length-1&&(0,n.jsx)("div",{className:`${o.hH} w-6`})]},t))},[r]);return(0,c.useImperativeHandle)(t,()=>({start(){var e;if(!i.current||!h.current)return;v=!0;let t=null===(e=i.current.querySelector(`.${o._Y}`))||void 0===e?void 0:e.firstElementChild;if(t)return x=t,t;throw Error("Start Fn Error: not found the first char in container")},prev(){if(!v)throw Error("Prev Fn Error: should run [start] fn first");if(!x||!b)throw Error("Prev Fn Error: there is no char to iterate");if(b.classList.contains(o.kc.error)?(b.classList.add(o.kc.warn),b.classList.remove(o.kc.error)):b.classList.remove(o.kc.active),x=b,h.current.style.left=`${x.offsetLeft}px`,!(b=x.previousElementSibling)){var e;let t=null===(e=x.parentElement)||void 0===e?void 0:e.previousElementSibling;t&&t.className.includes(o._Y)&&(b=t.lastElementChild)}return x},next(e,t){if(!v)throw Error("Next Fn Error: should run [start] fn first");if(!x)throw Error("Next Fn Error: there is no char to iterate");b=x,x.classList.add(e);let r=x.nextElementSibling;if(r)x=r;else{var n;let e=null===(n=x.parentElement)||void 0===n?void 0:n.nextElementSibling;x=(null==e?void 0:e.className.includes(o._Y))?e.firstElementChild:null}if(e===o.kc.error&&t){let e=document.createElement("span");e.classList.add(d),e.innerHTML=t,b.appendChild(e);let r=b;setTimeout(()=>{r.removeChild(e)},1e3)}return x?h.current.style.left=`${x.offsetLeft}px`:h.current.style.left=`${b.offsetLeft+b.getBoundingClientRect().width}px`,p(),x}}),[]),(0,n.jsxs)(f,{ref:i,children:[g,(0,n.jsx)("div",{className:`${u} ${l}`,ref:h})]})})},7204:function(e,t,r){var n=r(2676),i=r(8751),o=r(6455),c=r(6233);let s=document.getElementById("root");s&&i.createRoot(s).render((0,n.jsx)(o.pG,{router:c.Z}))},199:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(2676);function i(){return(0,n.jsx)("div",{children:(0,n.jsx)("h1",{children:"contributors"})})}},8226:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(2676),i=r(6216),o=r(7988);function c(){return(0,n.jsxs)("div",{className:"w-full h-full",children:[(0,n.jsx)(o.Z,{}),(0,n.jsx)(i.Z,{})]})}},6535:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(2676),i=r(5271),o=r(4778),c=r(9395),s=r(7181),a=r(9561),u=r(9497);function l(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(!e.current)return;let t=(0,c.R)(document,"keydown").pipe((0,s.U)(e=>({repeat:e.repeat,key:"Space"===e.code?" ":e.key})),(0,a.h)(e=>!e.repeat&&u.oZ.has(e.key))),r=t.pipe((0,a.h)(e=>!u.dc.has(e.key))),n=t.pipe((0,a.h)(e=>u.dc.has(e.key))),i=e.current.start(),o=r.subscribe(t=>{console.log(t.key,null==i?void 0:i.innerHTML),i=t.key===(null==i?void 0:i.innerHTML)?e.current.next(u.kc.correct):e.current.next(u.kc.error,t.key)}),l=n.subscribe(t=>{i=e.current.prev()});return()=>{o.unsubscribe(),l.unsubscribe()}},[]),(0,n.jsx)("div",{children:(0,n.jsx)(o.Z,{data:"hello world!",ref:e})})}},6233:function(e,t,r){var n=r(2676),i=r(6455),o=r(5100),c=r(8226),s=r(199),a=r(6535);let u=(0,i.aj)([{path:"/morse",element:(0,n.jsx)(o.Z,{}),children:[{index:!0,path:"/morse",element:(0,n.jsx)(c.Z,{})},{path:"/morse/about",element:(0,n.jsx)(s.Z,{})},{path:"/morse/latin",element:(0,n.jsx)(a.Z,{})}]}]);t.Z=u},9497:function(e,t,r){var n,i,o,c,s,a,u,l,d,f,h,m,p;r.d(t,{G2:function(){return u},Jz:function(){return n},KN:function(){return y},MG:function(){return g},NZ:function(){return O},OF:function(){return c},TC:function(){return j},_Y:function(){return k},bX:function(){return Z},dc:function(){return b},hH:function(){return w},kc:function(){return s},oZ:function(){return x},s$:function(){return C}}),r(6972),r(6879),r(1540),r(638),r(4910),r(126),r(886),r(3605),r(540),r(1558),r(3845),r(9388),r(3522),r(294),r(8522),r(9200),r(1911),r(5615),r(9526),r(8774),r(9191),r(3848),r(2768),r(5074),r(7084),r(7475),(l=n||(n={})).github="github",l.info="info",l.setting="setting",l.keyboard="keyboard",l["keyboard-2"]="keyboard-2",l.dark="dark",l.light="light",l["morse-code-1"]="morse-code-1",l["morse-code-2"]="morse-code-2",l["morse-code"]="morse-code";let v=["Backspace","Delete"],x=new Set(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?","'","!","/","(",")","&",":",";","=","+","-","_",'"',"$","@",">","<","[","]","{","}","|",...v," "]),b=new Set(v),g=400,y=130,j=500;(i||(i={})).space="Space",(d=o||(o={}))[d.dot=1]="dot",d[d.dash=2]="dash",(f=c||(c={})).dotChar=".",f.dashChar="-",(h=s||(s={})).active="active",h.correct="correct",h.error="error",h.warn="warn",(m=a||(a={})).running="running",m.close="close",(p=u||(u={})).idle="idle",p.typing="typing",p.done="done";let k="word",w="char",Z="|",C="+",O=Object.entries({A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..",0:"-----",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----.",".":".-.-.-",",":"--..--","?":"..--..","'":".----.","!":"-.-.--","/":"-..-.","(":"-.--.",")":"-.--.-","&":".-...",":":"---...",";":"-.-.-.","=":"-...-","+":".-.-.","-":"-....-",_:"..--.-",'"':".-..-.",$:"...-..-","@":".--.-."}).reduce((e,t)=>{let[r,n]=t;return e[n]=r,e},{})},2853:function(e,t,r){r.d(t,{Bh:function(){return h},LP:function(){return m},R4:function(){return p}}),r(3088),r(7866),r(2131),r(6016),r(8763),r(6408),r(6201),r(5521),r(1354),r(3206),r(2762),r(8754),r(5320),r(9708),r(1160),r(5698),r(7475),r(8936),r(4335),r(5074),r(7084);var n=r(9395),i=r(9561),o=r(3115),c=r(9969),s=r(7181),a=r(2229),u=r(4777),l=r(6301),d=r(9497);let f=new window.AudioContext;function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sine";arguments.length>1&&void 0!==arguments[1]&&arguments[1];let t=f.createOscillator();t.type=e,t.frequency.setValueAtTime(600,f.currentTime);let r=f.createGain();return r.gain.setValueAtTime(.2,f.currentTime),t.connect(r),r.connect(f.destination),t}function m(e){let t=(0,n.R)(document,"keydown").pipe((0,i.h)(e=>"Space"===e.code&&!e.repeat)),r=(0,n.R)(document,"keyup").pipe((0,i.h)(e=>"Space"===e.code)),f=t.pipe((0,o.w)(()=>{let t=Date.now(),n=e();return n.start(),(0,c.S)(r.pipe((0,s.U)(()=>Date.now()-t<d.KN?d.OF.dotChar:d.OF.dashChar)),(0,a.H)(d.MG).pipe((0,s.U)(()=>d.OF.dashChar))).pipe((0,s.U)(e=>(n.stop(),e)))})),h=f.pipe((0,u.f)(f.pipe((0,l.b)(d.TC))),(0,i.h)(e=>e.length>0),(0,s.U)(e=>e.join("")));return[f,h]}function p(e){return d.NZ[e]||null}}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(n,i){if(1&i&&(n=this(n)),8&i||"object"==typeof n&&n&&(4&i&&n.__esModule||16&i&&"function"==typeof n.then))return n;var o=Object.create(null);r.r(o);var c={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(function(e){c[e]=function(){return n[e]}});return c.default=function(){return n},r.d(o,c),o}})(),r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],!e.children&&(e.children=[]),e},r.nc=void 0,(()=>{var e=[];r.O=function(t,n,i,o){if(n){o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,i,o];return}for(var s=1/0,c=0;c<e.length;c++){for(var n=e[c][0],i=e[c][1],o=e[c][2],a=!0,u=0;u<n.length;u++)s>=o&&Object.keys(r.O).every(function(e){return r.O[e](n[u])})?n.splice(u--,1):(a=!1,o<s&&(s=o));if(a){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}})(),(()=>{var e={980:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i=n[0],o=n[1],c=n[2],s,a,u=0;if(i.some(function(t){return 0!==e[t]})){for(s in o)r.o(o,s)&&(r.m[s]=o[s]);if(c)var l=c(r)}for(t&&t(n);u<i.length;u++)a=i[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},n=self.webpackChunkmorse_code=self.webpackChunkmorse_code||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,["126","707","361","118","433"],function(){return r("7204")});n=r.O(n)})();
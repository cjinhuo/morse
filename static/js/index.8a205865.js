(()=>{"use strict";var e={86668:function(){},90997:function(e,t,n){e.exports=n.p+"static/media/error_input.08e6c1b7.wav"},3426:function(e,t,n){e.exports=n.p+"static/media/typewriter.08d818ca.mp3"},30735:function(e,t,n){n.d(t,{J2:function(){return o}});var r=n(62401),i=n(59497);(0,r.rw)("");let o=(0,r.rw)({morseCode:"",status:i.G2.idle});(0,r.rw)("")},25100:function(e,t,n){var r=n(52676);n(86668);var i=n(7667),o=n(82157),c=n(80455),a=n(75271),s=n(69747),u=n(29508);let l=u.ZP.div`
  padding: 5vh 8vw;
`;t.Z=a.memo(function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Ar.Header,{children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)(s.Ar.Content,{children:(0,r.jsx)(l,{className:"w-full grow",children:(0,r.jsx)(c.j3,{})})}),(0,r.jsx)(s.Ar.Footer,{children:(0,r.jsx)(o.Z,{})})]})})},82157:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(52676);function i(){return(0,r.jsx)("div",{className:"w-full px-8 h-9",children:(0,r.jsx)("span",{})})}},7667:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(52676),i=n(29508),o=n(15389),c=n(25585);let a=i.ZP.div`
  padding-left: 5vw;
  padding-right: 5vw;
`;function s(){return(0,r.jsxs)(a,{className:"w-full flex items-center justify-between h-10",children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)(c.Z,{})]})}},15389:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(52676),i=n(78203),o=n(87428),c=n(59497),a=n(29508);let s=a.ZP.nav`
  display: flex;
  margin-left: 1rem;
  > div {
    margin-right: 2rem;
  }
`,u=()=>(0,r.jsxs)(s,{children:[(0,r.jsx)(o.Z,{name:c.Jz["keyboard-2"],value:"/morse/latin",type:"route"}),(0,r.jsx)(o.Z,{name:c.Jz.setting}),(0,r.jsx)(o.Z,{name:c.Jz.info})]});function l(){return(0,r.jsxs)("div",{className:"h-full flex justify-start",children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(u,{})]})}},78203:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(52676),i=n(80455),o=n(59497),c=n(5437);function a(){let e=(0,i.s0)();return(0,r.jsxs)("div",{onClick:()=>{e("/morse")},className:"h-full flex cursor-pointer",children:[(0,r.jsx)(c.Z,{class:"text-skin-neutral-2 relative",style:{bottom:"2px"},name:o.Jz["morse-code"],size:"2.5rem"}),(0,r.jsx)("div",{className:"text-skin-neutral-3 font-medium text-3xl",children:"MorseType"})]})}},25585:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(52676),i=n(59497),o=n(87428),c=n(94540);function a(){return(0,r.jsxs)("div",{className:"h-full flex",children:[(0,r.jsx)(o.Z,{name:i.Jz.github,value:"https://github.com/cjinhuo/cjinhuo.github.io",type:"link"}),(0,r.jsx)(c.Z,{})]})}},94540:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(52676),i=n(6523),o=n(59497),c=n(87428);function a(){let[e,t]=(0,i.Z)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(c.Z,{style:{marginLeft:"2rem"},name:e===o.hY.light?o.Jz.light:o.Jz.dark,onClick:()=>{t(e===o.hY.light?o.hY.dark:o.hY.light)}})})}},5437:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(52676);function i(e){return(0,r.jsx)("iconpark-icon",{size:"1.3rem",style:{transition:"color 0.1s"},class:"text-skin-neutral-7 hover:text-skin-neutral-5",...e})}},26216:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(52676),i=n(37921),o=n(75271),c=n(29508),a=n(30735),s=n(10272),u=n(59497),l=n(72853),d=n(58212),f=n(62168);let h=c.ZP.div`
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
`;function m(){let{morseCode:e,status:t}=(0,i.Dv)(a.J2);(0,s.Z)();let[n,c]=(0,o.useMemo)(()=>t===u.G2.idle?["invisible"]:t===u.G2.done?["visibility-hidden",(0,l.R4)(e)]:["visibility-show"],[t,e]);return(0,r.jsxs)(h,{children:[(0,r.jsxs)("div",{style:{backgroundColor:"var(--color-neutral-8)",opacity:"0.8"},className:`text-3xl overflow-hidden w-full h-16 flex justify-center items-center rounded-2xl ${n}`,children:[(0,r.jsx)(d.Z,{morseCode:e}),(0,r.jsx)("div",{className:"text-skin-neutral-4",children:null===c?"-> invalid morse code":c})]}),(0,r.jsx)("div",{className:"h-16 w-full mt-4",children:(0,r.jsx)(f.Z,{})})]})}},87428:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(52676),i=n(84127),o=n(80455),c=n(5437);function a(e){let{name:t,value:n,type:a,onClick:s,...u}=e,l=(0,o.s0)();return(0,r.jsx)(i.E.div,{whileHover:{scale:1.2},className:"flex items-center cursor-pointer",onClick:()=>(null==s||s(),"link"===a)?window.open(n):"route"===a&&n?l(n):void 0,children:(0,r.jsx)(c.Z,{...u,name:t})})}},58212:function(e,t,n){n.d(t,{Z:function(){return l}}),n(64072),n(87395);var r=n(52676),i=n(53954),o=n.n(i),c=n(29508),a=n(59497);let s={dotWidth:0,dashWidth:8,strokeWidth:4,stroke:"",lineHeight:20,letterSpace:10,dotDashSpace:4,containerWidth:10,containerHeight:10,containerPadding:10,autoCalculateContainerSize:!0},u=c.ZP.svg`
  .line {
    stroke: ${e=>{let{stroke:t}=e;return t||"var(--color-neutral-4)"}};
  }
`;function l(e){let t=o()(s,e,(e,t)=>void 0===t?e:t),[n,i,c]=(()=>{let e=t.containerPadding,n=t.containerPadding,i=e,o=n,c=2*t.containerPadding,s=2*t.containerPadding;if(t.morseCode.length){let u=t.morseCode.split(a.s$).map((u,l)=>(e=i=t.containerPadding,0!==l&&(n+=t.lineHeight,o+=t.lineHeight,s+=t.lineHeight),(0,r.jsx)("g",{children:Array.from(u).map((s,l)=>{if(s===a.bX)return e+=t.letterSpace,(0,r.jsx)(r.Fragment,{});let d=s===a.OF.dotChar;i=(e=0===e?e:e+t.dotDashSpace)+(d?t.dotWidth:t.dashWidth);let f=(0,r.jsx)("line",{strokeWidth:t.strokeWidth,strokeLinecap:"round",className:"line",x1:e,y1:n,x2:i,y2:o},`${e}${n}`);return e=i+=t.dotDashSpace,l===u.length-1&&(c=Math.max(c,i+t.containerPadding)),f})},n)));return[t.autoCalculateContainerSize?c:t.containerWidth,t.autoCalculateContainerSize?s:t.containerHeight,(0,r.jsxs)(r.Fragment,{children:[...u]})]}return[0,0,(0,r.jsx)(r.Fragment,{})]})();return(0,r.jsx)(u,{width:n,height:i,stroke:e.stroke,children:c})}},97988:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(52676),i=n(37921),o=n(84127),c=n(75271),a=n(99056),s=n.n(a),u=n(30735),l=n(59497),d=n(72853),f=n(4778);function h(){let e=(0,i.b9)(u.J2),t=(0,c.useRef)(null),[n,a]=(0,c.useState)(void 0),[h,m]=(0,c.useState)({x:0,y:0,content:""});return(0,c.useEffect)(()=>{if(!t.current)return;let n=t.current.start();a(n);let[r,i]=(0,d.LP)(d.Bh),o=r.subscribe(t=>{e(e=>e.status!==l.G2.typing?{status:l.G2.typing,morseCode:t}:{status:l.G2.typing,morseCode:e.morseCode+t})}),c=i.subscribe(r=>{let i=(0,d.R4)(r);i&&((null==n?void 0:n.innerHTML)===i?[n]=t.current.next(l.kc.correct):[n]=t.current.next(l.kc.error,i)),e(e=>({status:l.G2.done,morseCode:e.morseCode})),n?(" "===n.innerText&&([n]=t.current.next(l.kc.correct)),a(n)):(a(null),o.unsubscribe(),c.unsubscribe())});return()=>{o.unsubscribe(),c.unsubscribe()}},[e]),(0,c.useEffect)(()=>{if(!n)return;let e=(0,d.aE)(n.innerHTML);e&&m({x:n.offsetLeft+2,y:n.offsetTop-36,content:e})},[n]),(0,r.jsxs)("div",{className:"relative",children:[null===n&&(0,r.jsx)(s(),{autorun:{speed:10,duration:3e3}}),n&&(0,r.jsx)(o.E.div,{animate:{opacity:1,x:h.x,y:h.y},transition:{type:"spring",stiffness:300,damping:30},className:"absolute transform -translate-x-1/2 px-2 py-1 bg-black text-white text-sm rounded shadow-lg",children:h.content}),(0,r.jsx)(f.Z,{data:"HELLO WORLD",ref:t})]})}},62168:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(52676),i=n(84127),o=n(75271),c=n(29508);let a=(0,c.ZP)(i.E.button)`
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
`;function s(){let e=(0,o.useCallback)(e=>{let t=new KeyboardEvent(e,{key:" ",code:"Space",keyCode:32,charCode:32,bubbles:!0,cancelable:!0});document.dispatchEvent(t)},[]),t=(0,o.useCallback)(()=>{e("keydown")},[e]),n=(0,o.useCallback)(()=>{e("keyup")},[e]);return(0,r.jsx)(a,{className:"select-none",onPointerDown:t,onPointerUp:n,children:"SPACE"})}},4778:function(e,t,n){n(64072),n(87395),n(19608),n(1056);var r=n(52676),i=n(29508),o=n(59497),c=n(75271),a=n(9921),s=n(56301);let u="caret",l="caret-animation",d="blink",f=i.ZP.div`
  position: relative;
  .${u} {
    height: 3.4rem;
    position: absolute;
    background-color: var(--color-neutral-4);
    width: 0.2rem;
    top: 0;
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
`;t.Z=(0,c.memo)((0,c.forwardRef)(function(e,t){let{data:n}=e,i=(0,c.useRef)(null),h=(0,c.useRef)(null),m=new a.x;m.pipe((0,s.b)(2e3)).subscribe(()=>{!(!h.current||h.current.classList.contains(l))&&h.current.classList.add(l)});let p=()=>{h.current&&(h.current.classList.remove(l),m.next(""))},v=!1,x=null,b=null,g=()=>{h.current&&x&&(h.current.style.left=`${x.offsetLeft}px`,h.current.style.top=`${x.offsetTop}px`)};(0,c.useEffect)(()=>{if(h.current&&i.current)return window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)}},[]);let y=(0,c.useMemo)(()=>{if(0===n.length)return null;let e=n.split(" ");return e.map((t,n)=>(0,r.jsxs)("div",{className:`inline-block ${o._Y}`,children:[Array.from(t).map((e,t)=>(0,r.jsx)("div",{className:o.hH,children:e},`${e}-${t}`)),n!==e.length-1&&(0,r.jsx)("div",{className:`${o.hH} w-6 whitespace-pre-wrap`,children:" "})]},`${t}-${n}`))},[n]);return(0,c.useImperativeHandle)(t,()=>({start(){var e;if(!i.current||!h.current)return;v=!0;let t=null===(e=i.current.querySelector(`.${o._Y}`))||void 0===e?void 0:e.firstElementChild;if(t)return x=t,t;throw Error("Start Fn Error: not found the first char in container")},prev(){if(!v)throw Error("Prev Fn Error: should run [start] fn first");if(!b)throw Error("Prev Fn Error: there is no last char to iterate");if(b.classList.contains(o.kc.error)?g():b.classList.remove(o.kc.correct),x=b,h.current.style.left=`${x.offsetLeft}px`,h.current.style.top=`${x.offsetTop}px`,!(b=x.previousElementSibling)){var e;let t=null===(e=x.parentElement)||void 0===e?void 0:e.previousElementSibling;(null==t?void 0:t.className.includes(o._Y))&&(b=t.lastElementChild)}return[x,b]},next(e,t){if(!v)throw Error("Next Fn Error: should run [start] fn first");if(!x)throw Error("Next Fn Error: there is no char to iterate");b=x,x.classList.remove(o.kc.warn),x.classList.add(e);let n=x.nextElementSibling;if(n)x=n;else{var r;let e=null===(r=x.parentElement)||void 0===r?void 0:r.nextElementSibling;x=(null==e?void 0:e.className.includes(o._Y))?e.firstElementChild:null}if(e===o.kc.error&&t){let e=document.createElement("span");e.classList.add(d),e.innerHTML=t,b.appendChild(e);let n=b;setTimeout(()=>{n.removeChild(e)},1e3)}return x?g():h.current.style.left=`${b.offsetLeft+b.getBoundingClientRect().width}px`,p(),[x,b]}}),[]),(0,r.jsxs)(f,{ref:i,children:[y,(0,r.jsx)("div",{className:`${u} ${l}`,ref:h})]})}))},10272:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(75271),i=n(99395),o=n(56301),c=n(72853);function a(){let[e,t]=(0,r.useState)((0,c.tq)());return(0,r.useLayoutEffect)(()=>{let e=(0,i.R)(window,"resize").pipe((0,o.b)(500)).subscribe(()=>{t((0,c.tq)())});return()=>{e.unsubscribe()}},[]),e}},6523:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(75271),i=n(72853),o=n(59497);function c(){let[e,t]=(0,r.useState)((0,i.Am)());return(0,r.useEffect)(()=>{e===o.hY.dark?(document.documentElement.classList.add(o.hY.dark),localStorage.setItem(o.a1,o.hY.dark)):(localStorage.removeItem(o.a1),document.documentElement.classList.remove(o.hY.dark))},[e]),[e,t]}},17204:function(e,t,n){var r=n(52676),i=n(38751),o=n(76455),c=n(96233);let a=document.getElementById("root");a&&i.createRoot(a).render((0,r.jsx)(o.pG,{router:c.Z}))},10199:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(52676);function i(){return(0,r.jsx)("div",{children:(0,r.jsx)("h1",{children:"contributors"})})}},18226:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(52676),i=n(26216),o=n(97988);function c(){return(0,r.jsxs)("div",{className:"w-full h-full",children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)(i.Z,{})]})}},16535:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(52676),i=n(75271),o=n(99395),c=n(73860),a=n(29561),s=n(4778),u=n(59497),l=n(82173);function d(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(!e.current)return;let t=(0,o.R)(document,"keydown").pipe((0,c.U)(e=>({repeat:e.repeat,key:"Space"===e.code?" ":e.key})),(0,a.h)(e=>!e.repeat&&u.oZ.has(e.key))),n=t.pipe((0,a.h)(e=>!u.dc.has(e.key))),r=t.pipe((0,a.h)(e=>u.dc.has(e.key))),i=e.current.start(),s=null,d=n.subscribe(t=>{if(t.key===(null==i?void 0:i.innerText)?([i,s]=e.current.next(u.kc.correct),(0,l.v)()):([i,s]=e.current.next(u.kc.error,t.key),(0,l.M)()),!i){console.log("over");return}}),f=r.subscribe(t=>{if(!!s)(0,l.v)(),[i,s]=e.current.prev()});return()=>{d.unsubscribe(),f.unsubscribe()}},[]),(0,r.jsx)("div",{children:(0,r.jsx)(s.Z,{data:"It's tempting to want to live in the past. It's familiar. It's comfortable. But it's where fossils come from.",ref:e})})}},96233:function(e,t,n){var r=n(52676),i=n(76455),o=n(25100),c=n(18226),a=n(10199),s=n(16535);let u=(0,i.aj)([{path:"/morse",element:(0,r.jsx)(o.Z,{}),children:[{index:!0,path:"/morse",element:(0,r.jsx)(c.Z,{})},{path:"/morse/about",element:(0,r.jsx)(a.Z,{})},{path:"/morse/latin",element:(0,r.jsx)(s.Z,{})}]}]);t.Z=u},59497:function(e,t,n){var r,i,o,c,a,s,u,l,d,f,h,m,p,v,x;n.d(t,{G2:function(){return l},Jz:function(){return i},KN:function(){return w},MG:function(){return k},NZ:function(){return N},OF:function(){return a},TC:function(){return j},_Y:function(){return C},a1:function(){return Z},bX:function(){return S},cd:function(){return P},dc:function(){return y},hH:function(){return E},hY:function(){return r},kc:function(){return s},oZ:function(){return g},s$:function(){return O}}),n(56972),n(56879),n(51540),n(50638),n(94910),n(70126),n(80886),n(43605),n(20540),n(21558),n(73845),n(79388),n(3522),n(50294),n(68522),n(49200),n(21911),n(25615),n(39526),n(98774),n(69191),n(83848),n(32768),n(25074),n(77084),n(67475),(d=r||(r={})).light="light",d.dark="dark",(f=i||(i={})).github="github",f.info="info",f.setting="setting",f.keyboard="keyboard",f["keyboard-2"]="keyboard-2",f.dark="dark",f.light="light",f["morse-code-1"]="morse-code-1",f["morse-code-2"]="morse-code-2",f["morse-code"]="morse-code";let b=["Backspace","Delete"],g=new Set(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?","'","!","/","(",")","&",":",";","=","+","-","_",'"',"$","@",">","<","[","]","{","}","|",...b," "]),y=new Set(b),k=400,w=130,j=500,Z="theme";(o||(o={})).space="Space",(h=c||(c={}))[h.dot=1]="dot",h[h.dash=2]="dash",(m=a||(a={})).dotChar=".",m.dashChar="-",(p=s||(s={})).active="active",p.correct="correct",p.error="error",p.warn="warn",(v=u||(u={})).running="running",v.close="close",(x=l||(l={})).idle="idle",x.typing="typing",x.done="done";let C="word",E="char",S="|",O="+",P={A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..",0:"-----",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----.",".":".-.-.-",",":"--..--","?":"..--..","'":".----.","!":"-.-.--","/":"-..-.","(":"-.--.",")":"-.--.-","&":".-...",":":"---...",";":"-.-.-.","=":"-...-","+":".-.-.","-":"-....-",_:"..--.-",'"':".-..-.",$:"...-..-","@":".--.-."},N=Object.entries(P).reduce((e,t)=>{let[n,r]=t;return e[r]=n,e},{})},82173:function(e,t,n){n.d(t,{M:function(){return a},v:function(){return o}});var r=n(90997);let i=new Audio(n(3426)),o=()=>{i.currentTime=0,i.play()},c=new Audio(r),a=()=>{c.currentTime=0,c.play()}},72853:function(e,t,n){n.d(t,{Am:function(){return b},Bh:function(){return h},LP:function(){return m},R4:function(){return p},aE:function(){return v},tq:function(){return x}}),n(93088),n(87866),n(12131),n(6016),n(28763),n(96408),n(56201),n(45521),n(81354),n(73206),n(82762),n(78754),n(5320),n(69708),n(11160),n(75698),n(67475),n(18936),n(54335),n(25074),n(77084);var r=n(99395),i=n(29561),o=n(3115),c=n(49969),a=n(73860),s=n(92229),u=n(64777),l=n(56301),d=n(59497);let f=new window.AudioContext;function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sine";arguments.length>1&&void 0!==arguments[1]&&arguments[1];let t=f.createOscillator();t.type=e,t.frequency.setValueAtTime(600,f.currentTime);let n=f.createGain();return n.gain.setValueAtTime(.2,f.currentTime),t.connect(n),n.connect(f.destination),t}function m(e){let t=(0,r.R)(document,"keydown").pipe((0,i.h)(e=>"Space"===e.code&&!e.repeat)),n=(0,r.R)(document,"keyup").pipe((0,i.h)(e=>"Space"===e.code)),f=t.pipe((0,o.w)(()=>{let t=Date.now(),r=e();return r.start(),(0,c.S)(n.pipe((0,a.U)(()=>Date.now()-t<d.KN?d.OF.dotChar:d.OF.dashChar)),(0,s.H)(d.MG).pipe((0,a.U)(()=>d.OF.dashChar))).pipe((0,a.U)(e=>(r.stop(),e)))})),h=f.pipe((0,u.f)(f.pipe((0,l.b)(d.TC))),(0,i.h)(e=>e.length>0),(0,a.U)(e=>e.join("")));return[f,h]}function p(e){return d.NZ[e]||null}function v(e){return d.cd[e]||null}function x(){return!!window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||!1}function b(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches||"dark"===localStorage.getItem(d.a1)?d.hY.dark:d.hY.light}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,i){if(1&i&&(r=this(r)),8&i||"object"==typeof r&&r&&(4&i&&r.__esModule||16&i&&"function"==typeof r.then))return r;var o=Object.create(null);n.r(o);var c={};e=e||[null,t({}),t([]),t(t)];for(var a=2&i&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach(function(e){c[e]=function(){return r[e]}});return c.default=function(){return r},n.d(o,c),o}})(),n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=function(e){return e.paths=[],!e.children&&(e.children=[]),e},n.nc=void 0,(()=>{var e=[];n.O=function(t,r,i,o){if(r){o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,i,o];return}for(var a=1/0,c=0;c<e.length;c++){for(var r=e[c][0],i=e[c][1],o=e[c][2],s=!0,u=0;u<r.length;u++)a>=o&&Object.keys(n.O).every(function(e){return n.O[e](r[u])})?r.splice(u--,1):(s=!1,o<a&&(a=o));if(s){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}})(),n.p="/morse/",(()=>{var e={980:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i=r[0],o=r[1],c=r[2],a,s,u=0;if(i.some(function(t){return 0!==e[t]})){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(c)var l=c(n)}for(t&&t(r);u<i.length;u++)s=i[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(l)},r=self.webpackChunkmorse_code=self.webpackChunkmorse_code||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,["126","707","361","118","620"],function(){return n("17204")});r=n.O(r)})();
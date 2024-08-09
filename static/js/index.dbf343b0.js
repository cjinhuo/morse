(()=>{"use strict";var e={86668:function(){},3426:function(e,t,r){e.exports=r.p+"static/media/typewriter.08d818ca.mp3"},30735:function(e,t,r){r.d(t,{J2:function(){return i}});var n=r(62401),o=r(59497);(0,n.rw)("");let i=(0,n.rw)({morseCode:"",status:o.G2.idle});(0,n.rw)("")},25100:function(e,t,r){var n=r(52676);r(86668);var o=r(7667),i=r(82157),c=r(80455),a=r(75271),s=r(69747),l=r(29508);let u=l.ZP.div`
  padding: 5vh 8vw;
`;t.Z=a.memo(function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Ar.Header,{children:(0,n.jsx)(o.Z,{})}),(0,n.jsx)(s.Ar.Content,{children:(0,n.jsx)(u,{className:"w-full grow",children:(0,n.jsx)(c.j3,{})})}),(0,n.jsx)(s.Ar.Footer,{children:(0,n.jsx)(i.Z,{})})]})})},82157:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(52676);function o(){return(0,n.jsx)("div",{className:"w-full px-8 h-9",children:(0,n.jsx)("span",{})})}},7667:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(52676),o=r(29508),i=r(15389),c=r(25585);let a=o.ZP.div`
  padding-left: 5vw;
  padding-right: 5vw;
`;function s(){return(0,n.jsxs)(a,{className:"w-full flex items-center justify-between h-10",children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)(c.Z,{})]})}},15389:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(52676),o=r(78203),i=r(87428),c=r(59497),a=r(29508);let s=a.ZP.nav`
  display: flex;
  margin-left: 1rem;
  > div {
    margin-right: 2rem;
  }
`,l=()=>(0,n.jsxs)(s,{children:[(0,n.jsx)(i.Z,{name:c.Jz["keyboard-2"],value:"/morse/latin",type:"route"}),(0,n.jsx)(i.Z,{name:c.Jz.setting}),(0,n.jsx)(i.Z,{name:c.Jz.info})]});function u(){return(0,n.jsxs)("div",{className:"h-full flex justify-start",children:[(0,n.jsx)(o.Z,{}),(0,n.jsx)(l,{})]})}},78203:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(52676),o=r(80455),i=r(59497),c=r(5437);function a(){let e=(0,o.s0)();return(0,n.jsxs)("div",{onClick:()=>{e("/morse")},className:"h-full flex cursor-pointer",children:[(0,n.jsx)(c.Z,{class:"text-skin-neutral-2 relative",style:{bottom:"2px"},name:i.Jz["morse-code"],size:"2.5rem"}),(0,n.jsx)("div",{className:"text-skin-neutral-3 font-medium text-3xl",children:"MorseType"})]})}},25585:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(52676),o=r(59497),i=r(87428),c=r(94540);function a(){return(0,n.jsxs)("div",{className:"h-full flex",children:[(0,n.jsx)(i.Z,{name:o.Jz.github,value:"https://github.com/cjinhuo/cjinhuo.github.io",type:"link"}),(0,n.jsx)(c.Z,{})]})}},94540:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(52676),o=r(6523),i=r(59497),c=r(87428);function a(){let[e,t]=(0,o.Z)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.Z,{style:{marginLeft:"2rem"},name:e===i.hY.light?i.Jz.light:i.Jz.dark,onClick:()=>{t(e===i.hY.light?i.hY.dark:i.hY.light)}})})}},5437:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(52676);function o(e){return(0,n.jsx)("iconpark-icon",{size:"1.3rem",style:{transition:"color 0.1s"},class:"text-skin-neutral-7 hover:text-skin-neutral-5",...e})}},26216:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(52676),o=r(37921),i=r(30735),c=r(29508),a=r(59497),s=r(75271),l=r(72853),u=r(58212),d=r(62168),f=r(10272);let h=c.ZP.div`
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
`;function m(){let{morseCode:e,status:t}=(0,o.Dv)(i.J2),r=(0,f.Z)(),[c,m]=(0,s.useMemo)(()=>t===a.G2.idle?["invisible"]:t===a.G2.done?["visibility-hidden",(0,l.R4)(e)]:["visibility-show"],[t,e]);return(0,n.jsxs)(h,{children:[(0,n.jsxs)("div",{style:{backgroundColor:"var(--color-neutral-8)",opacity:"0.8"},className:`text-3xl overflow-hidden w-full h-16 flex justify-center items-center rounded-2xl ${c}`,children:[(0,n.jsx)(u.Z,{morseCode:e}),(0,n.jsx)("div",{className:"text-skin-neutral-4",children:null===m?"-> invalid morse code":m})]}),r&&(0,n.jsx)("div",{className:"h-16 w-full mt-4",children:(0,n.jsx)(d.Z,{})})]})}},87428:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(52676);r(75271);var o=r(5437),i=r(80455),c=r(79391);function a(e){let{name:t,value:r,type:a,onClick:s,...l}=e,u=(0,i.s0)();return(0,n.jsx)(c.E.div,{whileHover:{scale:1.2},className:"flex items-center cursor-pointer",onClick:()=>(s&&s(),"link"===a)?window.open(r):"route"===a&&r?u(r):void 0,children:(0,n.jsx)(o.Z,{...l,name:t})})}},58212:function(e,t,r){r.d(t,{Z:function(){return u}}),r(64072),r(87395);var n=r(52676),o=r(53954),i=r.n(o),c=r(29508),a=r(59497);let s={dotWidth:0,dashWidth:8,strokeWidth:4,stroke:"",lineHeight:20,letterSpace:10,dotDashSpace:4,containerWidth:10,containerHeight:10,containerPadding:10,autoCalculateContainerSize:!0},l=c.ZP.svg`
  .line {
    stroke: ${e=>{let{stroke:t}=e;return t||"var(--color-neutral-4)"}};
  }
`;function u(e){let t=i()(s,e,(e,t)=>void 0===t?e:t),[r,o,c]=(()=>{let e=t.containerPadding,r=t.containerPadding,o=e,i=r,c=2*t.containerPadding,s=2*t.containerPadding;if(t.morseCode.length){let l=t.morseCode.split(a.s$).map((l,u)=>(e=o=t.containerPadding,0!==u&&(r+=t.lineHeight,i+=t.lineHeight,s+=t.lineHeight),(0,n.jsx)("g",{children:Array.from(l).map((s,u)=>{if(s===a.bX)return e+=t.letterSpace,(0,n.jsx)(n.Fragment,{});let d=s===a.OF.dotChar;o=(e=0===e?e:e+t.dotDashSpace)+(d?t.dotWidth:t.dashWidth);let f=(0,n.jsx)("line",{strokeWidth:t.strokeWidth,strokeLinecap:"round",className:"line",x1:e,y1:r,x2:o,y2:i},`${e}${r}`);return e=o+=t.dotDashSpace,u===l.length-1&&(c=Math.max(c,o+t.containerPadding)),f})},r)));return[t.autoCalculateContainerSize?c:t.containerWidth,t.autoCalculateContainerSize?s:t.containerHeight,(0,n.jsxs)(n.Fragment,{children:[...l]})]}return[0,0,(0,n.jsx)(n.Fragment,{})]})();return(0,n.jsx)(l,{width:r,height:o,stroke:e.stroke,children:c})}},97988:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(52676),o=r(75271),i=r(59497),c=r(30735),a=r(37921),s=r(72853),l=r(4778);function u(){let e=(0,a.b9)(c.J2),t=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(!t.current)return;let r=t.current.start(),[n,o]=(0,s.LP)(s.Bh),c=n.subscribe(t=>{e(e=>e.status!==i.G2.typing?{status:i.G2.typing,morseCode:t}:{status:i.G2.typing,morseCode:e.morseCode+t})}),a=o.subscribe(n=>{let o=(0,s.R4)(n);o&&((null==r?void 0:r.innerHTML)===o?[r]=t.current.next(i.kc.correct):[r]=t.current.next(i.kc.error,o)),e(e=>({status:i.G2.done,morseCode:e.morseCode})),r?" "===r.innerText&&([r]=t.current.next(i.kc.correct)):(c.unsubscribe(),a.unsubscribe(),console.log("ALL over"))});return()=>{c.unsubscribe(),a.unsubscribe()}},[]),(0,n.jsx)("div",{children:(0,n.jsx)(l.Z,{data:"HELLO WORLD",ref:t})})}},62168:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(52676),o=r(79391),i=r(75271),c=r(29508);let a=(0,c.ZP)(o.E.button)`
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
`;function s(){let e=(0,i.useCallback)(e=>{let t=new KeyboardEvent(e,{key:" ",code:"Space",keyCode:32,charCode:32,bubbles:!0,cancelable:!0});document.dispatchEvent(t)},[]),t=(0,i.useCallback)(()=>{e("keydown")},[e]),r=(0,i.useCallback)(()=>{e("keyup")},[e]);return(0,n.jsx)(a,{className:"select-none",onPointerDown:t,onPointerUp:r,children:"SPACE"})}},4778:function(e,t,r){r(64072),r(87395),r(19608),r(1056);var n=r(52676),o=r(29508),i=r(59497),c=r(75271),a=r(9921),s=r(56301);let l="caret",u="caret-animation",d="blink",f=o.ZP.div`
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
`;t.Z=(0,c.forwardRef)(function(e,t){let{data:r}=e,o=(0,c.useRef)(null),h=(0,c.useRef)(null),m=new a.x;m.pipe((0,s.b)(2e3)).subscribe(()=>{!(!h.current||h.current.classList.contains(u))&&h.current.classList.add(u)});let p=()=>{h.current&&(h.current.classList.remove(u),m.next(""))},v=!1,x=null,b=null,g=()=>{h.current&&x&&(h.current.style.left=`${x.offsetLeft}px`,h.current.style.top=`${x.offsetTop}px`)};(0,c.useEffect)(()=>{if(h.current&&o.current)return window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)}},[]);let k=(0,c.useMemo)(()=>{if(0===r.length)return null;let e=r.split(" ");return e.map((t,r)=>(0,n.jsxs)("div",{className:`inline-block ${i._Y}`,children:[Array.from(t).map((e,t)=>(0,n.jsx)("div",{className:i.hH,children:e},`${e}-${t}`)),r!==e.length-1&&(0,n.jsx)("div",{className:`${i.hH} w-6 whitespace-pre-wrap`,children:" "})]},`${t}-${r}`))},[r]);return(0,c.useImperativeHandle)(t,()=>({start(){var e;if(!o.current||!h.current)return;v=!0;let t=null===(e=o.current.querySelector(`.${i._Y}`))||void 0===e?void 0:e.firstElementChild;if(t)return x=t,t;throw Error("Start Fn Error: not found the first char in container")},prev(){if(!v)throw Error("Prev Fn Error: should run [start] fn first");if(!b)throw Error("Prev Fn Error: there is no last char to iterate");if(b.classList.contains(i.kc.error)?g():b.classList.remove(i.kc.correct),x=b,h.current.style.left=`${x.offsetLeft}px`,h.current.style.top=`${x.offsetTop}px`,!(b=x.previousElementSibling)){var e;let t=null===(e=x.parentElement)||void 0===e?void 0:e.previousElementSibling;t&&t.className.includes(i._Y)&&(b=t.lastElementChild)}return[x,b]},next(e,t){if(!v)throw Error("Next Fn Error: should run [start] fn first");if(!x)throw Error("Next Fn Error: there is no char to iterate");b=x,x.classList.remove(i.kc.warn),x.classList.add(e);let r=x.nextElementSibling;if(r)x=r;else{var n;let e=null===(n=x.parentElement)||void 0===n?void 0:n.nextElementSibling;x=(null==e?void 0:e.className.includes(i._Y))?e.firstElementChild:null}if(e===i.kc.error&&t){let e=document.createElement("span");e.classList.add(d),e.innerHTML=t,b.appendChild(e);let r=b;setTimeout(()=>{r.removeChild(e)},1e3)}return x?g():h.current.style.left=`${b.offsetLeft+b.getBoundingClientRect().width}px`,p(),[x,b]}}),[]),(0,n.jsxs)(f,{ref:o,children:[k,(0,n.jsx)("div",{className:`${l} ${u}`,ref:h})]})})},10272:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(75271),o=r(99395),i=r(56301),c=r(72853);function a(){let[e,t]=(0,n.useState)((0,c.tq)());return(0,n.useLayoutEffect)(()=>{let e=(0,o.R)(window,"resize").pipe((0,i.b)(500)).subscribe(()=>{t((0,c.tq)())});return()=>{e.unsubscribe()}},[]),e}},6523:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(75271),o=r(72853),i=r(59497);function c(){let[e,t]=(0,n.useState)((0,o.Am)());return(0,n.useEffect)(()=>{e===i.hY.dark?(document.documentElement.classList.add(i.hY.dark),localStorage.setItem(i.a1,i.hY.dark)):(localStorage.removeItem(i.a1),document.documentElement.classList.remove(i.hY.dark))},[e]),[e,t]}},17204:function(e,t,r){var n=r(52676),o=r(38751),i=r(76455),c=r(96233);let a=document.getElementById("root");a&&o.createRoot(a).render((0,n.jsx)(i.pG,{router:c.Z}))},10199:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(52676);function o(){return(0,n.jsx)("div",{children:(0,n.jsx)("h1",{children:"contributors"})})}},18226:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(52676),o=r(26216),i=r(97988);function c(){return(0,n.jsxs)("div",{className:"w-full h-full",children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)(o.Z,{})]})}},16535:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(52676),o=r(75271),i=r(4778),c=r(99395),a=r(73860),s=r(29561),l=r(59497),u=r(82173);function d(){let e=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(!e.current)return;let t=(0,c.R)(document,"keydown").pipe((0,a.U)(e=>({repeat:e.repeat,key:"Space"===e.code?" ":e.key})),(0,s.h)(e=>!e.repeat&&l.oZ.has(e.key))),r=t.pipe((0,s.h)(e=>!l.dc.has(e.key))),n=t.pipe((0,s.h)(e=>l.dc.has(e.key))),o=e.current.start(),i=null,d=r.subscribe(t=>{if(t.key===(null==o?void 0:o.innerText)?[o,i]=e.current.next(l.kc.correct):[o,i]=e.current.next(l.kc.error,t.key),(0,u.v)(),!o){console.log("over");return}}),f=n.subscribe(t=>{if(!!i)(0,u.v)(),[o,i]=e.current.prev()});return()=>{d.unsubscribe(),f.unsubscribe()}},[]),(0,n.jsx)("div",{children:(0,n.jsx)(i.Z,{data:"It's tempting to want to live in the past. It's familiar. It's comfortable. But it's where fossils come from.",ref:e})})}},96233:function(e,t,r){var n=r(52676),o=r(76455),i=r(25100),c=r(18226),a=r(10199),s=r(16535);let l=(0,o.aj)([{path:"/morse",element:(0,n.jsx)(i.Z,{}),children:[{index:!0,path:"/morse",element:(0,n.jsx)(c.Z,{})},{path:"/morse/about",element:(0,n.jsx)(a.Z,{})},{path:"/morse/latin",element:(0,n.jsx)(s.Z,{})}]}]);t.Z=l},59497:function(e,t,r){var n,o,i,c,a,s,l,u,d,f,h,m,p,v,x;r.d(t,{G2:function(){return u},Jz:function(){return o},KN:function(){return w},MG:function(){return y},NZ:function(){return P},OF:function(){return a},TC:function(){return j},_Y:function(){return C},a1:function(){return Z},bX:function(){return E},dc:function(){return k},hH:function(){return S},hY:function(){return n},kc:function(){return s},oZ:function(){return g},s$:function(){return O}}),r(56972),r(56879),r(51540),r(50638),r(94910),r(70126),r(80886),r(43605),r(20540),r(21558),r(73845),r(79388),r(3522),r(50294),r(68522),r(49200),r(21911),r(25615),r(39526),r(98774),r(69191),r(83848),r(32768),r(25074),r(77084),r(67475),(d=n||(n={})).light="light",d.dark="dark",(f=o||(o={})).github="github",f.info="info",f.setting="setting",f.keyboard="keyboard",f["keyboard-2"]="keyboard-2",f.dark="dark",f.light="light",f["morse-code-1"]="morse-code-1",f["morse-code-2"]="morse-code-2",f["morse-code"]="morse-code";let b=["Backspace","Delete"],g=new Set(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?","'","!","/","(",")","&",":",";","=","+","-","_",'"',"$","@",">","<","[","]","{","}","|",...b," "]),k=new Set(b),y=400,w=130,j=500,Z="theme";(i||(i={})).space="Space",(h=c||(c={}))[h.dot=1]="dot",h[h.dash=2]="dash",(m=a||(a={})).dotChar=".",m.dashChar="-",(p=s||(s={})).active="active",p.correct="correct",p.error="error",p.warn="warn",(v=l||(l={})).running="running",v.close="close",(x=u||(u={})).idle="idle",x.typing="typing",x.done="done";let C="word",S="char",E="|",O="+",P=Object.entries({A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..",0:"-----",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----.",".":".-.-.-",",":"--..--","?":"..--..","'":".----.","!":"-.-.--","/":"-..-.","(":"-.--.",")":"-.--.-","&":".-...",":":"---...",";":"-.-.-.","=":"-...-","+":".-.-.","-":"-....-",_:"..--.-",'"':".-..-.",$:"...-..-","@":".--.-."}).reduce((e,t)=>{let[r,n]=t;return e[n]=r,e},{})},82173:function(e,t,r){r.d(t,{v:function(){return o}});let n=new Audio(r(3426)),o=()=>{n.currentTime=0,n.play()}},72853:function(e,t,r){r.d(t,{Am:function(){return x},Bh:function(){return h},LP:function(){return m},R4:function(){return p},tq:function(){return v}}),r(93088),r(87866),r(12131),r(6016),r(28763),r(96408),r(56201),r(45521),r(81354),r(73206),r(82762),r(78754),r(5320),r(69708),r(11160),r(75698),r(67475),r(18936),r(54335),r(25074),r(77084);var n=r(99395),o=r(29561),i=r(3115),c=r(49969),a=r(73860),s=r(92229),l=r(64777),u=r(56301),d=r(59497);let f=new window.AudioContext;function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sine";arguments.length>1&&void 0!==arguments[1]&&arguments[1];let t=f.createOscillator();t.type=e,t.frequency.setValueAtTime(600,f.currentTime);let r=f.createGain();return r.gain.setValueAtTime(.2,f.currentTime),t.connect(r),r.connect(f.destination),t}function m(e){let t=(0,n.R)(document,"keydown").pipe((0,o.h)(e=>"Space"===e.code&&!e.repeat)),r=(0,n.R)(document,"keyup").pipe((0,o.h)(e=>"Space"===e.code)),f=t.pipe((0,i.w)(()=>{let t=Date.now(),n=e();return n.start(),(0,c.S)(r.pipe((0,a.U)(()=>Date.now()-t<d.KN?d.OF.dotChar:d.OF.dashChar)),(0,s.H)(d.MG).pipe((0,a.U)(()=>d.OF.dashChar))).pipe((0,a.U)(e=>(n.stop(),e)))})),h=f.pipe((0,l.f)(f.pipe((0,u.b)(d.TC))),(0,o.h)(e=>e.length>0),(0,a.U)(e=>e.join("")));return[f,h]}function p(e){return d.NZ[e]||null}function v(){return!!window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||!1}function x(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches||"dark"===localStorage.getItem(d.a1)?d.hY.dark:d.hY.light}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(n,o){if(1&o&&(n=this(n)),8&o||"object"==typeof n&&n&&(4&o&&n.__esModule||16&o&&"function"==typeof n.then))return n;var i=Object.create(null);r.r(i);var c={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach(function(e){c[e]=function(){return n[e]}});return c.default=function(){return n},r.d(i,c),i}})(),r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=function(e){return e.paths=[],!e.children&&(e.children=[]),e},r.nc=void 0,(()=>{var e=[];r.O=function(t,n,o,i){if(n){i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i];return}for(var a=1/0,c=0;c<e.length;c++){for(var n=e[c][0],o=e[c][1],i=e[c][2],s=!0,l=0;l<n.length;l++)a>=i&&Object.keys(r.O).every(function(e){return r.O[e](n[l])})?n.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}})(),r.p="/morse/",(()=>{var e={980:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o=n[0],i=n[1],c=n[2],a,s,l=0;if(o.some(function(t){return 0!==e[t]})){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(c)var u=c(r)}for(t&&t(n);l<o.length;l++)s=o[l],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(u)},n=self.webpackChunkmorse_code=self.webpackChunkmorse_code||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,["126","707","361","118","788"],function(){return r("17204")});n=r.O(n)})();
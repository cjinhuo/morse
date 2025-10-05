"use strict";(self.webpackChunkmorse_code=self.webpackChunkmorse_code||[]).push([["426"],{9921:function(e,r,t){t.d(r,{x:function(){return s}});var n=t(95860);class s extends n.y${_closed=!1;get closed(){return this._closed}_observerCounter=0;currentObservers=new Map;observerSnapshot;get observers(){return this.observerSnapshot??=Array.from(this.currentObservers.values())}hasError=!1;thrownError=null;constructor(){super()}_clearObservers(){this.currentObservers.clear(),this.observerSnapshot=void 0}next(e){if(!this._closed){let{observers:r}=this,t=r.length;for(let n=0;n<t;n++)r[n].next(e)}}error(e){if(!this._closed){this.hasError=this._closed=!0,this.thrownError=e;let{observers:r}=this,t=r.length;for(let n=0;n<t;n++)r[n].error(e);this._clearObservers()}}complete(){if(!this._closed){this._closed=!0;let{observers:e}=this,r=e.length;for(let t=0;t<r;t++)e[t].complete();this._clearObservers()}}unsubscribe(){this._closed=!0,this._clearObservers()}get observed(){return this.currentObservers.size>0}_subscribe(e){return this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){if(this.hasError||this._closed)return n.w0.EMPTY;let{currentObservers:r}=this,t=this._observerCounter++;return r.set(t,e),this.observerSnapshot=void 0,e.add(()=>{r.delete(t),this.observerSnapshot=void 0}),e}_checkFinalizedStatuses(e){let{hasError:r,thrownError:t,_closed:n}=this;r?e.error(t):n&&e.complete()}asObservable(){return new n.y$(e=>this.subscribe(e))}}},90997:function(e,r,t){e.exports=t.p+"static/media/error_input.08e6c1b7.wav"},3426:function(e,r,t){e.exports=t.p+"static/media/typewriter.08d818ca.mp3"},4778:function(e,r,t){t(64072),t(87395),t(19608),t(1056);var n=t(52676),s=t(75271),i=t(9921),o=t(56301),l=t(29508),c=t(59497);let a="caret",u="caret-animation",d="blink",h=l.ZP.div`
  position: relative;
  .${a} {
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

  .${c._Y} {
    line-height: 3.4rem;
    font-size: 3rem;
    margin-top: 0.2rem;
  }
  .${c.hH} {
    /* outline: 1px solid var(--color-linear-bg-start); */
    margin-right: 0.2rem;
    color: var(--color-neutral-6);
    position: relative;
    display: inline-block;
  }

  .${c.kc.correct} {
    color: var(--color-neutral-4);
    background-color: var(--color-neutral-8);
  }
  .${c.kc.warn} {
    color: #fb923c;
    background-color: #fed7aa;
  }
  /* https://tailwindcss.com/docs/customizing-colors */
  .${c.kc.error} {
    color: #fb7185;
    background-color: #fecdd3;
  }
  .${c.kc.active} {
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
`;r.Z=(0,s.memo)((0,s.forwardRef)(function(e,r){let{data:t}=e,l=(0,s.useRef)(null),f=(0,s.useRef)(null),v=new i.x;v.pipe((0,o.b)(2e3)).subscribe(()=>{!(!f.current||f.current.classList.contains(u))&&f.current.classList.add(u)});let p=()=>{f.current&&(f.current.classList.remove(u),v.next(""))},m=!1,b=null,k=null,E=()=>{f.current&&b&&(f.current.style.left=`${b.offsetLeft}px`,f.current.style.top=`${b.offsetTop}px`)};(0,s.useEffect)(()=>{if(f.current&&l.current)return window.addEventListener("resize",E),()=>{window.removeEventListener("resize",E)}},[]);let w=(0,s.useMemo)(()=>{if(0===t.length)return null;let e=t.split(" ");return e.map((r,t)=>(0,n.jsxs)("div",{className:`inline-block ${c._Y}`,children:[Array.from(r).map((e,r)=>(0,n.jsx)("div",{className:c.hH,children:e},`${e}-${r}`)),t!==e.length-1&&(0,n.jsx)("div",{className:`${c.hH} w-6 whitespace-pre-wrap`,children:" "})]},`${r}-${t}`))},[t]);return(0,s.useImperativeHandle)(r,()=>({start(){var e;if(!l.current||!f.current)return;m=!0;let r=null===(e=l.current.querySelector(`.${c._Y}`))||void 0===e?void 0:e.firstElementChild;if(r)return b=r,r;throw Error("Start Fn Error: not found the first char in container")},prev(){if(!m)throw Error("Prev Fn Error: should run [start] fn first");if(!k)throw Error("Prev Fn Error: there is no last char to iterate");if(k.classList.contains(c.kc.error)?E():k.classList.remove(c.kc.correct),b=k,f.current.style.left=`${b.offsetLeft}px`,f.current.style.top=`${b.offsetTop}px`,!(k=b.previousElementSibling)){var e;let r=null===(e=b.parentElement)||void 0===e?void 0:e.previousElementSibling;(null==r?void 0:r.className.includes(c._Y))&&(k=r.lastElementChild)}return[b,k]},next(e,r){if(!m)throw Error("Next Fn Error: should run [start] fn first");if(!b)throw Error("Next Fn Error: there is no char to iterate");k=b,b.classList.remove(c.kc.warn),b.classList.add(e);let t=b.nextElementSibling;if(t)b=t;else{var n;let e=null===(n=b.parentElement)||void 0===n?void 0:n.nextElementSibling;b=(null==e?void 0:e.className.includes(c._Y))?e.firstElementChild:null}if(e===c.kc.error&&r){let e=document.createElement("span");e.classList.add(d),e.innerHTML=r,k.appendChild(e);let t=k,n=()=>{try{t.contains(e)&&t.removeChild(e)}catch(e){}e.removeEventListener("animationend",n)};e.addEventListener("animationend",n)}return b?E():f.current.style.left=`${k.offsetLeft+k.getBoundingClientRect().width}px`,p(),[b,k]}}),[]),(0,n.jsxs)(h,{ref:l,children:[w,(0,n.jsx)("div",{className:`${a} ${u}`,ref:f})]})}))},16535:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n=t(52676),s=t(37921),i=t(75271),o=t(99395),l=t(73860),c=t(29561),a=t(30735),u=t(4778),d=t(59497),h=t(82173);function f(){let e=(0,i.useRef)(null),r=(0,s.Dv)(a.G6);return(0,i.useEffect)(()=>{document.title="Latin Type"},[]),(0,i.useEffect)(()=>{if(!e.current)return;let r=(0,o.R)(document,"keydown").pipe((0,l.U)(e=>({repeat:e.repeat,key:"Space"===e.code?" ":e.key})),(0,c.h)(e=>!e.repeat&&d.oZ.has(e.key))),t=r.pipe((0,c.h)(e=>!d.dc.has(e.key))),n=r.pipe((0,c.h)(e=>d.dc.has(e.key))),s=e.current.start(),i=null,a=t.subscribe(r=>{if(r.key===(null==s?void 0:s.innerText)?([s,i]=e.current.next(d.kc.correct),(0,h.v)()):([s,i]=e.current.next(d.kc.error,r.key),(0,h.M)()),!s){console.log("over");return}}),u=n.subscribe(r=>{if(!!i)(0,h.v)(),[s,i]=e.current.prev()});return()=>{a.unsubscribe(),u.unsubscribe()}},[r]),(0,n.jsx)("div",{children:(0,n.jsx)(u.Z,{data:r,ref:e},r)})}},82173:function(e,r,t){t.d(r,{M:function(){return l},v:function(){return i}});var n=t(90997);let s=new Audio(t(3426)),i=()=>{s.currentTime=0,s.play()},o=new Audio(n),l=()=>{o.currentTime=0,o.play()}}}]);
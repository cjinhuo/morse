"use strict";(self.webpackChunkmorse_code=self.webpackChunkmorse_code||[]).push([["702"],{4778:function(r,e,t){t(64072),t(87395),t(19608),t(1056);var a=t(52676),s=t(75271),o=t(9921),n=t(56301),l=t(29508),i=t(59497);let c="caret",d="caret-animation",u="blink",m=l.ZP.div`
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
  .${d} {
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
  .${u} {
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
`;e.Z=(0,s.memo)((0,s.forwardRef)(function(r,e){let{data:t}=r,l=(0,s.useRef)(null),h=(0,s.useRef)(null),p=new o.x;p.pipe((0,n.b)(2e3)).subscribe(()=>{!(!h.current||h.current.classList.contains(d))&&h.current.classList.add(d)});let f=()=>{h.current&&(h.current.classList.remove(d),p.next(""))},v=!1,x=null,b=null,g=()=>{h.current&&x&&(h.current.style.left=`${x.offsetLeft}px`,h.current.style.top=`${x.offsetTop}px`)};(0,s.useEffect)(()=>{if(h.current&&l.current)return window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g)}},[]);let k=(0,s.useMemo)(()=>{if(0===t.length)return null;let r=t.split(" ");return r.map((e,t)=>(0,a.jsxs)("div",{className:`inline-block ${i._Y}`,children:[Array.from(e).map((r,e)=>(0,a.jsx)("div",{className:i.hH,children:r},`${r}-${e}`)),t!==r.length-1&&(0,a.jsx)("div",{className:`${i.hH} w-6 whitespace-pre-wrap`,children:" "})]},`${e}-${t}`))},[t]);return(0,s.useImperativeHandle)(e,()=>({start(){var r;if(!l.current||!h.current)return;v=!0;let e=null===(r=l.current.querySelector(`.${i._Y}`))||void 0===r?void 0:r.firstElementChild;if(e)return x=e,e;throw Error("Start Fn Error: not found the first char in container")},prev(){if(!v)throw Error("Prev Fn Error: should run [start] fn first");if(!b)throw Error("Prev Fn Error: there is no last char to iterate");if(b.classList.contains(i.kc.error)?g():b.classList.remove(i.kc.correct),x=b,h.current.style.left=`${x.offsetLeft}px`,h.current.style.top=`${x.offsetTop}px`,!(b=x.previousElementSibling)){var r;let e=null===(r=x.parentElement)||void 0===r?void 0:r.previousElementSibling;(null==e?void 0:e.className.includes(i._Y))&&(b=e.lastElementChild)}return[x,b]},next(r,e){if(!v)throw Error("Next Fn Error: should run [start] fn first");if(!x)throw Error("Next Fn Error: there is no char to iterate");b=x,x.classList.remove(i.kc.warn),x.classList.add(r);let t=x.nextElementSibling;if(t)x=t;else{var a;let r=null===(a=x.parentElement)||void 0===a?void 0:a.nextElementSibling;x=(null==r?void 0:r.className.includes(i._Y))?r.firstElementChild:null}if(r===i.kc.error&&e){let r=document.createElement("span");r.classList.add(u),r.innerHTML=e,b.appendChild(r);let t=b,a=()=>{try{t.contains(r)&&t.removeChild(r)}catch(r){}r.removeEventListener("animationend",a)};r.addEventListener("animationend",a)}return x?g():h.current.style.left=`${b.offsetLeft+b.getBoundingClientRect().width}px`,f(),[x,b]}}),[]),(0,a.jsxs)(m,{ref:l,children:[k,(0,a.jsx)("div",{className:`${c} ${d}`,ref:h})]})}))},47097:function(r,e,t){var a=t(52676),s=t(75271),o=t(29508);let n=o.ZP.div`
  background: var(--color-neutral-10);
  border: 1px solid var(--color-neutral-8);
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  
  .dark &, body[theme-mode="dark"] & {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  }
`,l=o.ZP.div`
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  background: var(--color-neutral-9);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.1);
  }
  
  .dark &:hover, body[theme-mode="dark"] &:hover {
    box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.3);
  }
  
  .stat-value {
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-neutral-2);
    margin-bottom: 0.25rem;
    background: linear-gradient(135deg, var(--color-link-href), #6366f1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .stat-label {
    font-size: 0.875rem;
    color: var(--color-neutral-5);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
  }
  
  .stat-description {
    font-size: 0.75rem;
    color: var(--color-neutral-6);
    margin-top: 0.25rem;
  }
`,i=o.ZP.div`
  width: 100%;
  height: 10px;
  background: var(--color-neutral-8);
  border-radius: 6px;
  overflow: hidden;
  margin-top: 0.5rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${r=>r.percentage}%;
    background: linear-gradient(90deg, ${r=>r.color}, ${r=>r.color}dd);
    border-radius: 6px;
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;e.Z=(0,s.memo)(function(r){let{data:e,className:t}=r,[o,c]=(0,s.useState)(Date.now());(0,s.useEffect)(()=>{if(!e.startTime||e.isCompleted)return;let r=setInterval(()=>{c(Date.now())},1e3);return()=>clearInterval(r)},[e.startTime,e.isCompleted]);let d=(()=>{let{totalChars:r,correctChars:t,errorChars:a,startTime:s,endTime:n,isCompleted:l}=e,i=(l&&n&&s?n-s:s?o-s:0)/1e3,c=i/60,d=c>0?Math.round(t/5/c):0,u=c>0?Math.round(t/c):0;return{wpm:d,cpm:u,accuracy:Math.round(10*(r>0?t/r*100:0))/10,errorRate:Math.round(10*(r>0?a/r*100:0))/10,time:(r=>{let e=Math.floor(r/60),t=Math.floor(r%60);return`${e}:${t.toString().padStart(2,"0")}`})(i),totalChars:r,correctChars:t,errorChars:a}})();return(0,a.jsxs)(n,{className:t,children:[(0,a.jsxs)(l,{children:[(0,a.jsx)("div",{className:"stat-value",children:d.wpm}),(0,a.jsx)("div",{className:"stat-label",children:"WPM"}),(0,a.jsx)("div",{className:"stat-description",children:"Words Per Minute"})]}),(0,a.jsxs)(l,{children:[(0,a.jsx)("div",{className:"stat-value",children:d.cpm}),(0,a.jsx)("div",{className:"stat-label",children:"CPM"}),(0,a.jsx)("div",{className:"stat-description",children:"Characters Per Minute"})]}),(0,a.jsxs)(l,{children:[(0,a.jsxs)("div",{className:"stat-value",children:[d.accuracy,"%"]}),(0,a.jsx)("div",{className:"stat-label",children:"Accuracy"}),(0,a.jsx)(i,{percentage:d.accuracy,color:d.accuracy>=95?"#10b981":d.accuracy>=85?"#f59e0b":"#ef4444"})]}),(0,a.jsxs)(l,{children:[(0,a.jsx)("div",{className:"stat-value",children:d.errorChars}),(0,a.jsx)("div",{className:"stat-label",children:"Errors"}),(0,a.jsxs)("div",{className:"stat-description",children:[d.errorRate,"% Error Rate"]})]}),(0,a.jsxs)(l,{children:[(0,a.jsx)("div",{className:"stat-value",children:d.time}),(0,a.jsx)("div",{className:"stat-label",children:"Time"}),(0,a.jsx)("div",{className:"stat-description",children:e.isCompleted?"Completed":"In Progress"})]}),(0,a.jsxs)(l,{children:[(0,a.jsxs)("div",{className:"stat-value",children:[d.correctChars,"/",d.totalChars]}),(0,a.jsx)("div",{className:"stat-label",children:"Progress"}),(0,a.jsx)(i,{percentage:d.totalChars>0?d.correctChars/d.totalChars*100:0,color:"var(--color-link-href)"})]})]})})},15459:function(r,e,t){t.d(e,{BU:function(){return o}}),t(34210);var a=t(75271),s=t(59497);function o(){let[r,e]=(0,a.useState)({totalChars:0,correctChars:0,errorChars:0,startTime:null,endTime:null,isCompleted:!1}),t=(0,a.useRef)([]),o=(0,a.useRef)(0),n=(0,a.useCallback)(()=>{e({totalChars:0,correctChars:0,errorChars:0,startTime:Date.now(),endTime:null,isCompleted:!1}),t.current=[],o.current=0},[]),l=(0,a.useCallback)((r,a,o)=>{let n={status:r,inputChar:a,expectedChar:o,timestamp:Date.now()};t.current.push(n),e(e=>{let t={...e};return t.totalChars+=1,r===s.kc.correct?t.correctChars+=1:r===s.kc.error&&(t.errorChars+=1),t})},[]),i=(0,a.useCallback)(()=>{o.current+=1,e(r=>{if(r.totalChars<=0)return r;let e={...r};e.totalChars-=1;let a=t.current[t.current.length-1];return a&&(a.status===s.kc.correct&&e.correctChars>0?e.correctChars-=1:a.status===s.kc.error&&e.errorChars>0&&(e.errorChars-=1),t.current.pop()),e})},[]),c=(0,a.useCallback)(()=>{e(r=>({...r,endTime:Date.now(),isCompleted:!0}))},[]);return{stats:r,startStats:n,recordInput:l,recordBackspace:i,finishStats:c,resetStats:(0,a.useCallback)(()=>{e({totalChars:0,correctChars:0,errorChars:0,startTime:null,endTime:null,isCompleted:!1}),t.current=[],o.current=0},[])}}}}]);
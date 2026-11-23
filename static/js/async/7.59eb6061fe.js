"use strict";(self.rspackChunkmorse_code=self.rspackChunkmorse_code||[]).push([[7],{zl(r,e,t){var a=t("A"),s=t("U"),o=t("Y9"),n=t("Fhe"),l=t("n6");t("OU");let i="caret",c="caret-animation",d="blink",u=l.Ay.div`
  position: relative;
  .${i} {
    height: 3.4rem;
    position: absolute;
    background-color: var(--color-neutral-4);
    width: 0.2rem;
    top: 0;
    left: 0;
    transition: left 0.2s;
  }
  .${c} {
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

  .${"word"} {
    line-height: 3.4rem;
    font-size: 3rem;
    margin-top: 0.2rem;
  }
  .${"char"} {
    /* outline: 1px solid var(--color-linear-bg-start); */
    margin-right: 0.2rem;
    color: var(--color-neutral-6);
    position: relative;
    display: inline-block;
  }

  .${"correct"} {
    color: var(--color-neutral-4);
    background-color: var(--color-neutral-8);
  }
  .${"warn"} {
    color: #fb923c;
    background-color: #fed7aa;
  }
  /* https://tailwindcss.com/docs/customizing-colors */
  .${"error"} {
    color: #fb7185;
    background-color: #fecdd3;
  }
  .${"active"} {
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
`;e.A=(0,s.memo)((0,s.forwardRef)(function(r,e){let{data:t}=r,l=(0,s.useRef)(null),m=(0,s.useRef)(null),h=(0,s.useRef)(null),p=(0,s.useMemo)(()=>new o.B,[]),f=(0,s.useCallback)(()=>{let r=h.current;m.current&&r&&(m.current.style.left=`${r.offsetLeft}px`,m.current.style.top=`${r.offsetTop}px`)},[]);(0,s.useEffect)(()=>{let r=p.pipe((0,n.B)(2e3)).subscribe(()=>{m.current?.classList.add(c)});return window.addEventListener("resize",f),()=>{r.unsubscribe(),window.removeEventListener("resize",f)}},[f,p]);let x=(0,s.useMemo)(()=>{if(0===t.length)return null;let r=t.split(" ");return r.map((e,t)=>(0,a.jsxs)("div",{className:"inline-block word",children:[Array.from(e).map((r,e)=>(0,a.jsx)("div",{className:"char","data-char":r,children:r},`${r}-${e}`)),t!==r.length-1&&(0,a.jsx)("div",{className:"char w-6 whitespace-pre-wrap","data-char":" ",children:" "})]},`${e}-${t}`))},[t]);return(0,s.useImperativeHandle)(e,()=>{let r=!1,e=null;return{start(){if(!l.current||!m.current)return null;r=!0;let e=l.current.querySelector(".word")?.firstElementChild;if(e)return h.current=e,e;throw Error("Start Fn Error: not found the first char in container")},prev(){if(!r)throw Error("Prev Fn Error: should run [start] fn first");if(!e)throw Error("Prev Fn Error: there is no last char to iterate");e.classList.contains("error")||e.classList.remove("correct");let t=e;if(h.current=t,f(),!(e=t.previousElementSibling)){let r=t.parentElement?.previousElementSibling;r?.className.includes("word")&&(e=r.lastElementChild)}return[t,e]},next(t,a){if(!r)throw Error("Next Fn Error: should run [start] fn first");let s=h.current;if(!s)throw Error("Next Fn Error: there is no char to iterate");e=s,s.classList.remove("warn"),s.classList.add(t);let o=s.nextElementSibling;if(o)h.current=o;else{let r=s.parentElement?.nextElementSibling;h.current=r?.classList.contains("word")?r.querySelector(".char"):null}if("error"===t&&a){let r=document.createElement("span");r.classList.add(d),r.textContent=a,e.appendChild(r),r.addEventListener("animationend",()=>r.remove(),{once:!0})}return h.current?f():m.current.style.left=`${e.offsetLeft+e.getBoundingClientRect().width}px`,m.current?.classList.remove(c),p.next(),[h.current,e]}}},[f,p]),(0,a.jsxs)(u,{ref:l,children:[x,(0,a.jsx)("div",{className:`${i} ${c}`,ref:m})]})}))},k8(r,e,t){var a=t("A"),s=t("U"),o=t("n6");let n=o.Ay.div`
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
`,l=o.Ay.div`
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
`,i=o.Ay.div`
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
`;e.A=(0,s.memo)(function(r){let{data:e,className:t}=r,[o,c]=(0,s.useState)(Date.now());(0,s.useEffect)(()=>{if(!e.startTime||e.isCompleted)return;let r=setInterval(()=>{c(Date.now())},1e3);return()=>clearInterval(r)},[e.startTime,e.isCompleted]);let d=(()=>{let r,t,{totalChars:a,correctChars:s,errorChars:n,startTime:l,endTime:i,isCompleted:c}=e,d=(c&&i&&l?i-l:l?o-l:0)/1e3,u=d/60,m=u>0?Math.round(s/5/u):0;return{wpm:m,cpm:u>0?Math.round(s/u):0,accuracy:Math.round(10*(a>0?s/a*100:0))/10,errorRate:Math.round(10*(a>0?n/a*100:0))/10,time:(r=Math.floor(d/60),t=Math.floor(d%60),`${r}:${t.toString().padStart(2,"0")}`),totalChars:a,correctChars:s,errorChars:n}})();return(0,a.jsxs)(n,{className:t,children:[(0,a.jsxs)(l,{children:[(0,a.jsx)("div",{className:"stat-value",children:d.wpm}),(0,a.jsx)("div",{className:"stat-label",children:"WPM"}),(0,a.jsx)("div",{className:"stat-description",children:"Words Per Minute"})]}),(0,a.jsxs)(l,{children:[(0,a.jsx)("div",{className:"stat-value",children:d.cpm}),(0,a.jsx)("div",{className:"stat-label",children:"CPM"}),(0,a.jsx)("div",{className:"stat-description",children:"Characters Per Minute"})]}),(0,a.jsxs)(l,{children:[(0,a.jsxs)("div",{className:"stat-value",children:[d.accuracy,"%"]}),(0,a.jsx)("div",{className:"stat-label",children:"Accuracy"}),(0,a.jsx)(i,{percentage:d.accuracy,color:d.accuracy>=95?"#10b981":d.accuracy>=85?"#f59e0b":"#ef4444"})]}),(0,a.jsxs)(l,{children:[(0,a.jsx)("div",{className:"stat-value",children:d.errorChars}),(0,a.jsx)("div",{className:"stat-label",children:"Errors"}),(0,a.jsxs)("div",{className:"stat-description",children:[d.errorRate,"% Error Rate"]})]}),(0,a.jsxs)(l,{children:[(0,a.jsx)("div",{className:"stat-value",children:d.time}),(0,a.jsx)("div",{className:"stat-label",children:"Time"}),(0,a.jsx)("div",{className:"stat-description",children:e.isCompleted?"Completed":"In Progress"})]}),(0,a.jsxs)(l,{children:[(0,a.jsxs)("div",{className:"stat-value",children:[d.correctChars,"/",d.totalChars]}),(0,a.jsx)("div",{className:"stat-label",children:"Progress"}),(0,a.jsx)(i,{percentage:d.totalChars>0?d.correctChars/d.totalChars*100:0,color:"var(--color-link-href)"})]})]})})},VH(r,e,t){var a=t("U");t("OU"),t.d(e,{},{M4:function(){let[r,e]=(0,a.useState)({totalChars:0,correctChars:0,errorChars:0,startTime:null,endTime:null,isCompleted:!1}),t=(0,a.useRef)([]),s=(0,a.useRef)(0),o=(0,a.useCallback)(()=>{e({totalChars:0,correctChars:0,errorChars:0,startTime:Date.now(),endTime:null,isCompleted:!1}),t.current=[],s.current=0},[]),n=(0,a.useCallback)((r,a,s)=>{let o={status:r,inputChar:a,expectedChar:s,timestamp:Date.now()};t.current.push(o),e(e=>{let t={...e};return t.totalChars+=1,"correct"===r?t.correctChars+=1:"error"===r&&(t.errorChars+=1),t})},[]),l=(0,a.useCallback)(()=>{s.current+=1,e(r=>{if(r.totalChars<=0)return r;let e={...r};e.totalChars-=1;let a=t.current[t.current.length-1];return a&&("correct"===a.status&&e.correctChars>0?e.correctChars-=1:"error"===a.status&&e.errorChars>0&&(e.errorChars-=1),t.current.pop()),e})},[]);return{stats:r,startStats:o,recordInput:n,recordBackspace:l,finishStats:(0,a.useCallback)(()=>{e(r=>({...r,endTime:Date.now(),isCompleted:!0}))},[]),resetStats:(0,a.useCallback)(()=>{e({totalChars:0,correctChars:0,errorChars:0,startTime:null,endTime:null,isCompleted:!1}),t.current=[],s.current=0},[])}}})}}]);
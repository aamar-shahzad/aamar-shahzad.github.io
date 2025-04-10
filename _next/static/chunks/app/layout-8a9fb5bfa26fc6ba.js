(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2660:function(t,e,s){Promise.resolve().then(s.t.bind(s,9646,23)),Promise.resolve().then(s.t.bind(s,3385,23)),Promise.resolve().then(s.bind(s,1576))},1576:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return d}});var r=s(3827),a=s(4090),i=s(963);function o(t){let{data:e,height:s=20,width:a=100,color:i="#ff6b4a"}=t,o=e.map(t=>isNaN(t)?0:t);if(!o.length)return null;let n=Math.max(...o),l=Math.min(...o),c=n-l||n||1,d=o.map((t,e)=>{let r=e/(o.length-1)*a,i=s-(Math.max(l,Math.min(n,t))-l)/c*s;return`${r},${Math.max(0,Math.min(s,i))}`}).join(" ");return 0===n&&0===l?(0,r.jsx)("svg",{width:a,height:s,className:"overflow-visible",children:(0,r.jsx)("line",{x1:"0",y1:s/2,x2:a,y2:s/2,stroke:i,strokeWidth:"1.5",strokeDasharray:"4,4"})}):(0,r.jsxs)("svg",{width:a,height:s,className:"overflow-visible",children:[(0,r.jsx)("g",{className:"text-gray-700/20",children:[void 0,void 0,void 0,void 0,void 0].map((t,e)=>(0,r.jsx)("line",{x1:"0",y1:s/4*e,x2:a,y2:s/4*e,strokeWidth:"0.5",stroke:"currentColor"},e))}),(0,r.jsx)("polyline",{points:d,fill:"none",stroke:i,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsxs)("linearGradient",{id:"gradient",x1:"0",x2:"0",y1:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:i,stopOpacity:"0.2"}),(0,r.jsx)("stop",{offset:"100%",stopColor:i,stopOpacity:"0"})]}),(0,r.jsx)("polyline",{points:`${d} ${a},${s} 0,${s}`,fill:"url(#gradient)"}),o.map((t,e)=>{let d=e/(o.length-1)*a,p=s-(Math.max(l,Math.min(n,t))-l)/c*s,u=Math.max(0,Math.min(s,p));return(0,r.jsxs)("g",{className:"group relative",children:[(0,r.jsx)("circle",{cx:d,cy:u,r:"1.5",fill:i,className:"opacity-0 group-hover:opacity-100 transition-opacity"}),(0,r.jsxs)("title",{children:[t.toLocaleString()," visits"]})]},e)})]})}function n(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;try{return Object.entries(t).filter(t=>{let[e,s]=t;return e&&!isNaN(s)}).sort((t,e)=>{let[,s]=t,[,r]=e;return r-s}).slice(0,e)}catch(t){return console.error("Error getting top items:",t),[]}}function l(t){try{let e=[];for(let s=6;s>=0;s--){let r=new Date;r.setDate(r.getDate()-s);let a=t[r.toISOString().split("T")[0]];e.push(isNaN(a)?0:a||0)}return e}catch(t){return console.error("Error getting last 7 days data:",t),Array(7).fill(0)}}let c={count:0,visits:[],analytics:{dailyVisits:{},browsers:{},platforms:{}}};function d(){let[t,e]=(0,a.useState)(c),[s,d]=(0,a.useState)(!0),[p,u]=(0,a.useState)(!1),[m,f]=(0,a.useState)(null);if((0,a.useEffect)(()=>{(async()=>{try{let t=await fetch("/api/visitors",{method:"POST"});if(!t.ok)throw Error(`HTTP error! status: ${t.status}`);let s=await t.json();e(s),f(null),i.ZP.success("Welcome! Your visit has been counted.")}catch(t){console.error("Error incrementing visitor count:",t),f("Failed to load visitor data"),i.ZP.error("Failed to update visitor count. Please try again later.")}finally{d(!1)}})();let t=setInterval(()=>{e(t=>({...t}))},6e4);return()=>clearInterval(t)},[]),s)return null;if(m)return(0,r.jsx)("div",{className:"text-sm text-red-400",children:m});let x=t.visits[t.visits.length-2],h=x?function(t){try{let e=new Date,s=new Date(t);if(isNaN(s.getTime()))return"Unknown time";let r=Math.floor((e.getTime()-s.getTime())/1e3);if(r<0)return"in the future";if(r<60)return"just now";if(r<3600)return`${Math.floor(r/60)} minutes ago`;if(r<86400)return`${Math.floor(r/3600)} hours ago`;if(r<604800)return`${Math.floor(r/86400)} days ago`;return s.toLocaleDateString()}catch(t){return console.error("Error calculating time ago:",t),"Unknown time"}}(x.timestamp):"No previous visits",g=new Date().toISOString().split("T")[0],y=Math.max(0,t.analytics.dailyVisits[g]||0),v=function(t){try{let e=l(t),s=e.reduce((t,e)=>t+e,0)/7,r=e[e.length-1];if(0===s)return 0;let a=(r-s)/s*100;return isNaN(a)?0:a}catch(t){return console.error("Error calculating visit trend:",t),0}}(t.analytics.dailyVisits),b=Math.max(0,t.count||0),j=n(t.analytics.browsers),N=n(t.analytics.platforms),w=l(t.analytics.dailyVisits);return(0,r.jsx)("div",{className:"bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 transition-all duration-300 hover:bg-gray-800/70",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:(0,r.jsxs)("div",{className:"text-sm text-gray-300 flex flex-col gap-1",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("span",{className:"text-lg",children:"\uD83D\uDC65"}),(0,r.jsxs)("span",{className:"font-medium",children:[b.toLocaleString()," visitor",1!==b?"s":""]}),0!==v&&(0,r.jsxs)("span",{className:`text-xs ${v>0?"text-green-400":"text-red-400"}`,children:[v>0?"↑":"↓"," ",Math.abs(v).toFixed(1),"%"]})]}),p&&(0,r.jsxs)("div",{className:"space-y-3 pt-2 border-t border-gray-700/50",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-1",children:[(0,r.jsxs)("p",{className:"text-xs text-gray-400",children:["Today: ",y," visit",1!==y?"s":""]}),(0,r.jsxs)("p",{className:"text-xs text-gray-400",children:["Last visit: ",h]})]}),(0,r.jsxs)("div",{className:"relative pt-2",children:[(0,r.jsx)(o,{data:w,width:200,height:30}),(0,r.jsx)("div",{className:"absolute top-0 left-0 text-[10px] text-gray-500",children:"Last 7 days"})]})]}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-3",children:[(0,r.jsxs)("div",{className:"space-y-1",children:[(0,r.jsx)("p",{className:"text-xs font-medium text-gray-400",children:"Top Browsers:"}),(0,r.jsx)("div",{className:"space-y-0.5",children:j.length>0?j.map(t=>{let[e,s]=t;return(0,r.jsxs)("div",{className:"text-xs text-gray-500 flex justify-between items-center gap-2",children:[(0,r.jsx)("span",{children:e||"Unknown"}),(0,r.jsxs)("div",{className:"flex items-center gap-1",children:[(0,r.jsx)("div",{className:"h-1 bg-[#ff6b4a]/30 rounded-full",style:{width:`${b?s/b*50:0}px`}}),(0,r.jsx)("span",{children:s})]})]},e)}):(0,r.jsx)("p",{className:"text-xs text-gray-500",children:"No data available"})})]}),(0,r.jsxs)("div",{className:"space-y-1",children:[(0,r.jsx)("p",{className:"text-xs font-medium text-gray-400",children:"Top Platforms:"}),(0,r.jsx)("div",{className:"space-y-0.5",children:N.length>0?N.map(t=>{let[e,s]=t;return(0,r.jsxs)("div",{className:"text-xs text-gray-500 flex justify-between items-center gap-2",children:[(0,r.jsx)("span",{children:e||"Unknown"}),(0,r.jsxs)("div",{className:"flex items-center gap-1",children:[(0,r.jsx)("div",{className:"h-1 bg-[#ff6b4a]/30 rounded-full",style:{width:`${b?s/b*50:0}px`}}),(0,r.jsx)("span",{children:s})]})]},e)}):(0,r.jsx)("p",{className:"text-xs text-gray-500",children:"No data available"})})]})]})]})]})})}},3385:function(){},9646:function(t){t.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}},963:function(t,e,s){"use strict";let r;s.d(e,{ZP:function(){return F},Am:function(){return E}});var a,i=s(4090);let o=t=>((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild,n=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,d=(t,e)=>{let s="",r="",a="";for(let i in t){let o=t[i];"@"==i[0]?"i"==i[1]?s=i+" "+o+";":r+="f"==i[1]?d(o,i):i+"{"+d(o,"k"==i[1]?"":e)+"}":"object"==typeof o?r+=d(o,e?e.replace(/([^,])+/g,t=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,e=>/&/.test(e)?e.replace(/&/g,t):t?t+" "+e:e)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=d.p?d.p(i,o):i+":"+o+";")}return s+(e&&a?e+"{"+a+"}":a)+r},p={},u=t=>{if("object"==typeof t){let e="";for(let s in t)e+=s+u(t[s]);return e}return t},m=(t,e,s,r,a)=>{var i;let o=u(t),m=p[o]||(p[o]=(t=>{let e=0,s=11;for(;e<t.length;)s=101*s+t.charCodeAt(e++)>>>0;return"go"+s})(o));if(!p[m]){let e=o!==t?t:(t=>{let e,s,r=[{}];for(;e=n.exec(t.replace(l,""));)e[4]?r.shift():e[3]?(s=e[3].replace(c," ").trim(),r.unshift(r[0][s]=r[0][s]||{})):r[0][e[1]]=e[2].replace(c," ").trim();return r[0]})(t);p[m]=d(a?{["@keyframes "+m]:e}:e,s?"":"."+m)}let f=s&&p.g?p.g:null;return s&&(p.g=p[m]),i=p[m],f?e.data=e.data.replace(f,i):-1===e.data.indexOf(i)&&(e.data=r?i+e.data:e.data+i),m},f=(t,e,s)=>t.reduce((t,r,a)=>{let i=e[a];if(i&&i.call){let t=i(s),e=t&&t.props&&t.props.className||/^go/.test(t)&&t;i=e?"."+e:t&&"object"==typeof t?t.props?"":d(t,""):!1===t?"":t}return t+r+(null==i?"":i)},"");function x(t){let e=this||{},s=t.call?t(e.p):t;return m(s.unshift?s.raw?f(s,[].slice.call(arguments,1),e.p):s.reduce((t,s)=>Object.assign(t,s&&s.call?s(e.p):s),{}):s,o(e.target),e.g,e.o,e.k)}x.bind({g:1});let h,g,y,v=x.bind({k:1});function b(t,e){let s=this||{};return function(){let r=arguments;function a(i,o){let n=Object.assign({},i),l=n.className||a.className;s.p=Object.assign({theme:g&&g()},n),s.o=/ *go\d+/.test(l),n.className=x.apply(s,r)+(l?" "+l:""),e&&(n.ref=o);let c=t;return t[0]&&(c=n.as||t,delete n.as),y&&c[0]&&y(n),h(c,n)}return e?e(a):a}}var j=t=>"function"==typeof t,N=(t,e)=>j(t)?t(e):t,w=(r=0,()=>(++r).toString()),k=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,20)};case 1:return{...t,toasts:t.toasts.map(t=>t.id===e.toast.id?{...t,...e.toast}:t)};case 2:let{toast:s}=e;return k(t,{type:t.toasts.find(t=>t.id===s.id)?1:0,toast:s});case 3:let{toastId:r}=e;return{...t,toasts:t.toasts.map(t=>t.id===r||void 0===r?{...t,dismissed:!0,visible:!1}:t)};case 4:return void 0===e.toastId?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(t=>t.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let a=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(t=>({...t,pauseDuration:t.pauseDuration+a}))}}},$=[],M={toasts:[],pausedAt:void 0},_=t=>{M=k(M,t),$.forEach(t=>{t(M)})},S=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",s=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...s,id:(null==s?void 0:s.id)||w()}},D=t=>(e,s)=>{let r=S(e,t,s);return _({type:2,toast:r}),r.id},E=(t,e)=>D("blank")(t,e);E.error=D("error"),E.success=D("success"),E.loading=D("loading"),E.custom=D("custom"),E.dismiss=t=>{_({type:3,toastId:t})},E.remove=t=>_({type:4,toastId:t}),E.promise=(t,e,s)=>{let r=E.loading(e.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof t&&(t=t()),t.then(t=>{let a=e.success?N(e.success,t):void 0;return a?E.success(a,{id:r,...s,...null==s?void 0:s.success}):E.dismiss(r),t}).catch(t=>{let a=e.error?N(e.error,t):void 0;a?E.error(a,{id:r,...s,...null==s?void 0:s.error}):E.dismiss(r)}),t};var O=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,T=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,I=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,P=(b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${O} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${I} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`),C=(b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${P} 1s linear infinite;
`,v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`),L=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,A=(b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${C} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${L} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,b("div")`
  position: absolute;
`,b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`);b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${A} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,b("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,a=i.createElement,d.p=void 0,h=a,g=void 0,y=void 0,x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var F=E}},function(t){t.O(0,[971,69,744],function(){return t(t.s=2660)}),_N_E=t.O()}]);
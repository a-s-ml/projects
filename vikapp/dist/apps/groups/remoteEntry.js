var e,r,t,n,o,a,i,l,u,s,d,f,c,h,p,m,v,g,b,y,w,P={168:(e,r,t)=>{var n={"./Module":()=>Promise.all([t.e(828),t.e(140),t.e(136),t.e(568),t.e(560)]).then((()=>()=>t(560)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},S={};function k(e){var r=S[e];if(void 0!==r)return r.exports;var t=S[e]={exports:{}};return P[e](t,t.exports,k),t.exports}k.m=P,k.c=S,k.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return k.d(r,{a:r}),r},k.d=(e,r)=>{for(var t in r)k.o(r,t)&&!k.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},k.f={},k.e=e=>Promise.all(Object.keys(k.f).reduce(((r,t)=>(k.f[t](e,r),r)),[])),k.u=e=>e+"."+{124:"b9066c6a989cd1e7",136:"9e6380781d823b8f",140:"a1d4e5617b961ff0",184:"a5e3aa9ee1ddc16e",356:"5e73788269c43d41",376:"109b772e9678cf4f",408:"9bb7f73da6ad34da",508:"6721c7d205492720",560:"166ec60c9e8ad29a",568:"bebcaf9629b3a419",668:"4ecdfa88b787c4b7",716:"224b41f09f422de2",828:"f0fcb96fc6785544",948:"2cb607a8e569a766"}[e]+".js",k.miniCssF=e=>e+"."+{184:"ad284c8c22716d5e",948:"ad284c8c22716d5e"}[e]+".css",k.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),k.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="groups:",k.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+o){i=d;break}}i||(l=!0,(i=document.createElement("script")).type="module",i.charset="utf-8",i.timeout=120,k.nc&&i.setAttribute("nonce",k.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},k.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{k.S={};var e={},r={};k.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];k.o(k.S,t)||(k.S[t]={});var a=k.S[t],i="groups",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("@components","0.0.1",(()=>Promise.all([k.e(136),k.e(376),k.e(184)]).then((()=>()=>k(948))))),l("@headlessui/react","1.7.18",(()=>Promise.all([k.e(716),k.e(136),k.e(408)]).then((()=>()=>k(716))))),l("@reduxjs/toolkit","1.9.7",(()=>Promise.all([k.e(828),k.e(124)]).then((()=>()=>k(124))))),l("react-dom","18.2.0",(()=>Promise.all([k.e(356),k.e(136)]).then((()=>()=>k(356))))),l("react-redux","8.1.3",(()=>Promise.all([k.e(508),k.e(136),k.e(408)]).then((()=>()=>k(508))))),l("react","18.2.0",(()=>k.e(668).then((()=>()=>k(668)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),k.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():o(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var s,d,f=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(d=(typeof(s=r[i]))[0]))return!u||("u"==f?l>n&&!o:""==f!=o);if("u"==d){if(!u||"u"!=f)return!1}else if(u)if(f==d)if(l<=n){if(s!=e[l])return!1}else{if(o?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=f&&"n"!=f){if(o||l<=n)return!1;u=!1,l--}else{if(l<=n||d<f!=o)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,l--)}}var c=[],h=c.pop.bind(c);for(i=1;i<e.length;i++){var p=e[i];c.push(1==p?h()|h():2==p?h()&h():p?a(p,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",u=(e,r,t,n)=>{var o=i(e,t);return a(n,o)||d(l(e,t,o,n)),f(e[t][o])},s=(e,r,t,n)=>{var o=i(e,t);if(!a(n,o))throw new Error(l(e,t,o,n));return f(e[t][o])},d=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},f=e=>(e.loaded=1,e.get()),h=(c=e=>function(r,t,n,o){var a=k.I(r);return a&&a.then?a.then(e.bind(e,r,k.S[r],t,n,o)):e(r,k.S[r],t,n,o)})(((e,r,t,n,o)=>r&&k.o(r,t)?u(r,0,t,n):o())),p=c(((e,r,t,n,o)=>r&&k.o(r,t)?s(r,0,t,n):o())),m={},v={136:()=>p("default","react",[4,18,2,0],(()=>k.e(668).then((()=>()=>k(668))))),376:()=>p("default","@headlessui/react",[1,1,7,18],(()=>Promise.all([k.e(716),k.e(408)]).then((()=>()=>k(716))))),408:()=>p("default","react-dom",[4,18,2,0],(()=>k.e(356).then((()=>()=>k(356))))),184:()=>h("default","@components",[4,0,0,1],(()=>Promise.all([k.e(376),k.e(948)]).then((()=>()=>k(948))))),640:()=>p("default","react-redux",[1,8,1,3],(()=>Promise.all([k.e(508),k.e(408)]).then((()=>()=>k(508))))),796:()=>p("default","@reduxjs/toolkit",[1,1,9,7],(()=>k.e(124).then((()=>()=>k(124)))))},g={136:[136],376:[376],408:[408],568:[184,640,796]},b={},k.f.consumes=(e,r)=>{k.o(g,e)&&g[e].forEach((e=>{if(k.o(m,e))return r.push(m[e]);if(!b[e]){var t=r=>{m[e]=0,k.m[e]=t=>{delete k.c[e],t.exports=r()}};b[e]=!0;var n=r=>{delete m[e],k.m[e]=t=>{throw delete k.c[e],r}};try{var o=v[e]();o.then?r.push(m[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))},y=e=>new Promise(((r,t)=>{var n=k.miniCssF(e),o=k.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===r)return i}})(n,o))return r();((e,r,t,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,o.parentNode.removeChild(o),n(u)}},o.href=r,document.head.appendChild(o)})(e,o,r,t)})),w={48:0},k.f.miniCss=(e,r)=>{w[e]?r.push(w[e]):0!==w[e]&&{184:1,948:1}[e]&&r.push(w[e]=y(e).then((()=>{w[e]=0}),(r=>{throw delete w[e],r})))},(()=>{var e={48:0};k.f.j=(r,t)=>{var n=k.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(136|376|408|568)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=k.p+k.u(r),i=new Error;k.l(a,(t=>{if(k.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,l]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in i)k.o(i,n)&&(k.m[n]=i[n]);l&&l(k)}for(r&&r(t);u<a.length;u++)o=a[u],k.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkgroups=self.webpackChunkgroups||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var E=k(168),x=E.get,C=E.init;export{x as get,C as init};
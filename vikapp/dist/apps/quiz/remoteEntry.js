var e,r,t,a,n,o,i,l,u,f,s,d,h,c,p,b,m,v,g,y,w,P={9168:(e,r,t)=>{var a={"./Module":()=>Promise.all([t.e(828),t.e(280),t.e(136),t.e(920),t.e(376),t.e(268),t.e(420)]).then((()=>()=>t(8420)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a="default",n=t.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>n,init:()=>o})}},S={};function k(e){var r=S[e];if(void 0!==r)return r.exports;var t=S[e]={exports:{}};return P[e](t,t.exports,k),t.exports}k.m=P,k.c=S,k.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return k.d(r,{a:r}),r},k.d=(e,r)=>{for(var t in r)k.o(r,t)&&!k.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},k.f={},k.e=e=>Promise.all(Object.keys(k.f).reduce(((r,t)=>(k.f[t](e,r),r)),[])),k.u=e=>e+"."+{124:"1db7959cf12ed472",136:"d92a5451b5fed705",148:"b011a18c4f7b961a",268:"c4fbda128a1a99e9",280:"3fb76281ba152b22",356:"3a08111fbf74640a",376:"53d55192d2a98b30",408:"d85228e24b733045",420:"7bb121afbb26a5e2",500:"b0844f64639d3f6f",508:"763b5560de39fe07",668:"87ec4f805a5b8d2b",716:"7af6ff49d7b79e3b",828:"50518fa8f40886b9",880:"f46dd81d5a03e97b",920:"b31e6baeb8c53f69",936:"a9ac9b83a0e622b0",988:"e385c16cf16f556a"}[e]+".js",k.miniCssF=e=>e+"."+{148:"fefa8891ea90525e",988:"fefa8891ea90525e"}[e]+".css",k.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),k.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="quiz:",k.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var i,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var s=u[f];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+n){i=s;break}}i||(l=!0,(i=document.createElement("script")).type="module",i.charset="utf-8",i.timeout=120,k.nc&&i.setAttribute("nonce",k.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[a];var d=(r,a)=>{i.onerror=i.onload=null,clearTimeout(h);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),r)return r(a)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}},k.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{k.S={};var e={},r={};k.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];k.o(k.S,t)||(k.S[t]={});var o=k.S[t],i="quiz",l=(e,r,t,a)=>{var n=o[e]=o[e]||{},l=n[r];(!l||!l.loaded&&(!a!=!l.eager?a:i>l.from))&&(n[r]={get:t,from:i,eager:!!a})},u=[];return"default"===t&&(l("@api/category","0.0.1",(()=>Promise.all([k.e(828),k.e(280),k.e(136),k.e(920),k.e(880)]).then((()=>()=>k(1500))))),l("@components","0.0.1",(()=>Promise.all([k.e(136),k.e(376),k.e(936),k.e(148)]).then((()=>()=>k(8936))))),l("@headlessui/react","1.7.18",(()=>Promise.all([k.e(716),k.e(136),k.e(408)]).then((()=>()=>k(5716))))),l("@reduxjs/toolkit","1.9.7",(()=>Promise.all([k.e(828),k.e(124)]).then((()=>()=>k(7124))))),l("react-dom","18.2.0",(()=>Promise.all([k.e(356),k.e(136)]).then((()=>()=>k(2356))))),l("react-redux","8.1.3",(()=>Promise.all([k.e(508),k.e(136),k.e(408)]).then((()=>()=>k(2508))))),l("react","18.2.0",(()=>k.e(668).then((()=>()=>k(5668)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),k.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var i=r[a],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(l=e[o]))[0]?"-":(a>0?".":"")+(a=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():n(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var i=0,l=1,u=!0;;l++,i++){var f,s,d=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(s=(typeof(f=r[i]))[0]))return!u||("u"==d?l>a&&!n:""==d!=n);if("u"==s){if(!u||"u"!=d)return!1}else if(u)if(d==s)if(l<=a){if(f!=e[l])return!1}else{if(n?f>e[l]:f<e[l])return!1;f!=e[l]&&(u=!1)}else if("s"!=d&&"n"!=d){if(n||l<=a)return!1;u=!1,l--}else{if(l<=a||s<d!=n)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,l--)}}var h=[],c=h.pop.bind(h);for(i=1;i<e.length;i++){var p=e[i];h.push(1==p?c()|c():2==p?c()&c():p?o(p,r):!c())}return!!c()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},l=(e,r,t,a)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(a)+")",u=(e,r,t,a)=>{var n=i(e,t);return o(a,n)||s(l(e,t,n,a)),d(e[t][n])},f=(e,r,t,a)=>{var n=i(e,t);if(!o(a,n))throw new Error(l(e,t,n,a));return d(e[t][n])},s=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},d=e=>(e.loaded=1,e.get()),c=(h=e=>function(r,t,a,n){var o=k.I(r);return o&&o.then?o.then(e.bind(e,r,k.S[r],t,a,n)):e(r,k.S[r],t,a,n)})(((e,r,t,a,n)=>r&&k.o(r,t)?u(r,0,t,a):n())),p=h(((e,r,t,a,n)=>r&&k.o(r,t)?f(r,0,t,a):n())),b={},m={9136:()=>p("default","react",[4,18,2,0],(()=>k.e(668).then((()=>()=>k(5668))))),2796:()=>p("default","@reduxjs/toolkit",[1,1,9,7],(()=>k.e(124).then((()=>()=>k(7124))))),9640:()=>p("default","react-redux",[1,8,1,3],(()=>Promise.all([k.e(508),k.e(408)]).then((()=>()=>k(2508))))),8376:()=>p("default","@headlessui/react",[1,1,7,18],(()=>Promise.all([k.e(716),k.e(408)]).then((()=>()=>k(5716))))),408:()=>p("default","react-dom",[4,18,2,0],(()=>k.e(356).then((()=>()=>k(2356))))),6184:()=>c("default","@components",[4,0,0,1],(()=>Promise.all([k.e(936),k.e(988)]).then((()=>()=>k(8936))))),9424:()=>c("default","@api/category",[4,0,0,1],(()=>k.e(500).then((()=>()=>k(1500)))))},v={136:[9136],268:[6184,9424],376:[8376],408:[408],920:[2796,9640]},g={},k.f.consumes=(e,r)=>{k.o(v,e)&&v[e].forEach((e=>{if(k.o(b,e))return r.push(b[e]);if(!g[e]){var t=r=>{b[e]=0,k.m[e]=t=>{delete k.c[e],t.exports=r()}};g[e]=!0;var a=r=>{delete b[e],k.m[e]=t=>{throw delete k.c[e],r}};try{var n=m[e]();n.then?r.push(b[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}}))},y=e=>new Promise(((r,t)=>{var a=k.miniCssF(e),n=k.p+a;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),a=0;a<t.length;a++){var n=(i=t[a]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===r))return i}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var i;if((n=(i=o[a]).getAttribute("data-href"))===e||n===r)return i}})(a,n))return r();((e,r,t,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,n.parentNode.removeChild(n),a(u)}},n.href=r,document.head.appendChild(n)})(e,n,r,t)})),w={80:0},k.f.miniCss=(e,r)=>{w[e]?r.push(w[e]):0!==w[e]&&{148:1,988:1}[e]&&r.push(w[e]=y(e).then((()=>{w[e]=0}),(r=>{throw delete w[e],r})))},(()=>{var e={80:0};k.f.j=(r,t)=>{var a=k.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(136|376|408|920|988)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=k.p+k.u(r),i=new Error;k.l(o,(t=>{if(k.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,i,l]=t,u=0;if(o.some((r=>0!==e[r]))){for(a in i)k.o(i,a)&&(k.m[a]=i[a]);l&&l(k)}for(r&&r(t);u<o.length;u++)n=o[u],k.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkquiz=self.webpackChunkquiz||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var E=k(9168),x=E.get,C=E.init;export{x as get,C as init};
var e,r,t,n,a,o,i,l,u,s,f,d,c,h,p,m,v,g,b,y,w,P={168:(e,r,t)=>{var n={"./Module":()=>Promise.all([t.e(828),t.e(140),t.e(136),t.e(568),t.e(824)]).then((()=>()=>t(824)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},S={};function k(e){var r=S[e];if(void 0!==r)return r.exports;var t=S[e]={exports:{}};return P[e](t,t.exports,k),t.exports}k.m=P,k.c=S,k.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return k.d(r,{a:r}),r},k.d=(e,r)=>{for(var t in r)k.o(r,t)&&!k.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},k.f={},k.e=e=>Promise.all(Object.keys(k.f).reduce(((r,t)=>(k.f[t](e,r),r)),[])),k.u=e=>e+"."+{124:"eb6f4ea370dd7d96",136:"e3a7c467f0633a1f",140:"02883918fffaf29d",292:"65c5804d9ae35cca",356:"1ed774a0eed2387c",376:"08fadeca319fe701",408:"28e9059aae96bf69",508:"4d666e417db4c9ab",568:"4ac26daa25438b78",668:"eb1ee55662e9f1a3",672:"a177bf9fc0171aed",716:"fed9ada56fb30106",824:"912e70de2c4fc420",828:"2214ecb7f33c403d"}[e]+".js",k.miniCssF=e=>e+"."+{292:"ad284c8c22716d5e",672:"ad284c8c22716d5e"}[e]+".css",k.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),k.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="questions:",k.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+a){i=f;break}}i||(l=!0,(i=document.createElement("script")).type="module",i.charset="utf-8",i.timeout=120,k.nc&&i.setAttribute("nonce",k.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}},k.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{k.S={};var e={},r={};k.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];k.o(k.S,t)||(k.S[t]={});var o=k.S[t],i="questions",l=(e,r,t,n)=>{var a=o[e]=o[e]||{},l=a[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("@components","0.0.1",(()=>Promise.all([k.e(136),k.e(376),k.e(292)]).then((()=>()=>k(672))))),l("@headlessui/react","1.7.18",(()=>Promise.all([k.e(716),k.e(136),k.e(408)]).then((()=>()=>k(716))))),l("@reduxjs/toolkit","1.9.7",(()=>Promise.all([k.e(828),k.e(124)]).then((()=>()=>k(124))))),l("react-dom","18.2.0",(()=>Promise.all([k.e(356),k.e(136)]).then((()=>()=>k(356))))),l("react-redux","8.1.3",(()=>Promise.all([k.e(508),k.e(136),k.e(408)]).then((()=>()=>k(508))))),l("react","18.2.0",(()=>k.e(668).then((()=>()=>k(668)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),k.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():a(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var s,f,d=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(f=(typeof(s=r[i]))[0]))return!u||("u"==d?l>n&&!a:""==d!=a);if("u"==f){if(!u||"u"!=d)return!1}else if(u)if(d==f)if(l<=n){if(s!=e[l])return!1}else{if(a?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=d&&"n"!=d){if(a||l<=n)return!1;u=!1,l--}else{if(l<=n||f<d!=a)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,l--)}}var c=[],h=c.pop.bind(c);for(i=1;i<e.length;i++){var p=e[i];c.push(1==p?h()|h():2==p?h()&h():p?o(p,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",u=(e,r,t,n)=>{var a=i(e,t);return o(n,a)||f(l(e,t,a,n)),d(e[t][a])},s=(e,r,t,n)=>{var a=i(e,t);if(!o(n,a))throw new Error(l(e,t,a,n));return d(e[t][a])},f=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},d=e=>(e.loaded=1,e.get()),h=(c=e=>function(r,t,n,a){var o=k.I(r);return o&&o.then?o.then(e.bind(e,r,k.S[r],t,n,a)):e(r,k.S[r],t,n,a)})(((e,r,t,n,a)=>r&&k.o(r,t)?u(r,0,t,n):a())),p=c(((e,r,t,n,a)=>r&&k.o(r,t)?s(r,0,t,n):a())),m={},v={136:()=>p("default","react",[4,18,2,0],(()=>k.e(668).then((()=>()=>k(668))))),376:()=>p("default","@headlessui/react",[1,1,7,18],(()=>Promise.all([k.e(716),k.e(408)]).then((()=>()=>k(716))))),408:()=>p("default","react-dom",[4,18,2,0],(()=>k.e(356).then((()=>()=>k(356))))),184:()=>h("default","@components",[4,0,0,1],(()=>Promise.all([k.e(376),k.e(672)]).then((()=>()=>k(672))))),796:()=>p("default","@reduxjs/toolkit",[1,1,9,7],(()=>k.e(124).then((()=>()=>k(124))))),640:()=>p("default","react-redux",[1,8,1,3],(()=>Promise.all([k.e(508),k.e(408)]).then((()=>()=>k(508)))))},g={136:[136],376:[376],408:[408],568:[184,796,640]},b={},k.f.consumes=(e,r)=>{k.o(g,e)&&g[e].forEach((e=>{if(k.o(m,e))return r.push(m[e]);if(!b[e]){var t=r=>{m[e]=0,k.m[e]=t=>{delete k.c[e],t.exports=r()}};b[e]=!0;var n=r=>{delete m[e],k.m[e]=t=>{throw delete k.c[e],r}};try{var a=v[e]();a.then?r.push(m[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}}))},y=e=>new Promise(((r,t)=>{var n=k.miniCssF(e),a=k.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var a=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===r))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var i;if((a=(i=o[n]).getAttribute("data-href"))===e||a===r)return i}})(n,a))return r();((e,r,t,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=o=>{if(a.onerror=a.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,a.parentNode.removeChild(a),n(u)}},a.href=r,document.head.appendChild(a)})(e,a,r,t)})),w={648:0},k.f.miniCss=(e,r)=>{w[e]?r.push(w[e]):0!==w[e]&&{292:1,672:1}[e]&&r.push(w[e]=y(e).then((()=>{w[e]=0}),(r=>{throw delete w[e],r})))},(()=>{var e={648:0};k.f.j=(r,t)=>{var n=k.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(136|376|408|568)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=k.p+k.u(r),i=new Error;k.l(o,(t=>{if(k.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,l]=t,u=0;if(o.some((r=>0!==e[r]))){for(n in i)k.o(i,n)&&(k.m[n]=i[n]);l&&l(k)}for(r&&r(t);u<o.length;u++)a=o[u],k.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkquestions=self.webpackChunkquestions||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var E=k(168),x=E.get,C=E.init;export{x as get,C as init};
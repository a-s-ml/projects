var e,r,t,n,a,o,i,l,u,f,d,s,c,h,p,m,v,b,g,y,w,P,k,S={168:(e,r,t)=>{var n={"./Module":()=>Promise.all([t.e(136),t.e(640),t.e(840),t.e(456)]).then((()=>()=>t(456)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},E={};function x(e){var r=E[e];if(void 0!==r)return r.exports;var t=E[e]={exports:{}};return S[e](t,t.exports,x),t.exports}x.m=S,x.c=E,x.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return x.d(r,{a:r}),r},x.d=(e,r)=>{for(var t in r)x.o(r,t)&&!x.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},x.f={},x.e=e=>Promise.all(Object.keys(x.f).reduce(((r,t)=>(x.f[t](e,r),r)),[])),x.u=e=>e+"."+{124:"9e519e07a417b6be",136:"7df8f8c4f2f88ca3",280:"7384a023f8519696",356:"3fd9c1e0d5525928",408:"36fce51860b62ea6",456:"a39acf0f2d7c9ddc",476:"7ded600e9a139e33",508:"9645c247fdb6cfed",576:"c470981178cca19d",640:"17b95dd37ea21bfe",668:"9ba4e56082131f1d",716:"fd9b9a1c050b0b36",792:"f5706453d82e7272",796:"9f7a0be2442fa468",828:"2f37beeefdb1ed9f",840:"976484a8ac015228",856:"d37a791e4b2313df",988:"cc1e4ba6f61b8c67"}[e]+".js",x.miniCssF=e=>e+"."+{792:"ad284c8c22716d5e",988:"ad284c8c22716d5e"}[e]+".css",x.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),x.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="quiz:",x.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var d=u[f];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){i=d;break}}i||(l=!0,(i=document.createElement("script")).type="module",i.charset="utf-8",i.timeout=120,x.nc&&i.setAttribute("nonce",x.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var s=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),l&&document.head.appendChild(i)}},x.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{x.S={};var e={},r={};x.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];x.o(x.S,t)||(x.S[t]={});var o=x.S[t],i="quiz",l=(e,r,t,n)=>{var a=o[e]=o[e]||{},l=a[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(a[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("@components","0.0.1",(()=>Promise.all([x.e(136),x.e(576),x.e(792)]).then((()=>()=>x(576))))),l("@headlessui/react","1.7.18",(()=>Promise.all([x.e(716),x.e(136),x.e(408)]).then((()=>()=>x(716))))),l("@reduxjs/toolkit","1.9.7",(()=>Promise.all([x.e(828),x.e(124)]).then((()=>()=>x(124))))),l("@store/quiz","0.0.0",(()=>Promise.all([x.e(828),x.e(280),x.e(136),x.e(640),x.e(796),x.e(476)]).then((()=>()=>x(856))))),l("react-dom","18.2.0",(()=>Promise.all([x.e(356),x.e(136)]).then((()=>()=>x(356))))),l("react-redux","8.1.3",(()=>Promise.all([x.e(508),x.e(136),x.e(408)]).then((()=>()=>x(508))))),l("react","18.2.0",(()=>x.e(668).then((()=>()=>x(668)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),x.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(o=1;o<e.length;o++){var l=e[o];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():a(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var f,d,s=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(d=(typeof(f=r[i]))[0]))return!u||("u"==s?l>n&&!a:""==s!=a);if("u"==d){if(!u||"u"!=s)return!1}else if(u)if(s==d)if(l<=n){if(f!=e[l])return!1}else{if(a?f>e[l]:f<e[l])return!1;f!=e[l]&&(u=!1)}else if("s"!=s&&"n"!=s){if(a||l<=n)return!1;u=!1,l--}else{if(l<=n||d<s!=a)return!1;u=!1}else"s"!=s&&"n"!=s&&(u=!1,l--)}}var c=[],h=c.pop.bind(c);for(i=1;i<e.length;i++){var p=e[i];c.push(1==p?h()|h():2==p?h()&h():p?o(p,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||n(e,r)?r:e),0))&&t[r]},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},u=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",f=(e,r,t,n)=>{var a=l(e,t);return o(n,a)||s(u(e,t,a,n)),c(e[t][a])},d=(e,r,t,n)=>{var a=l(e,t);if(!o(n,a))throw new Error(u(e,t,a,n));return c(e[t][a])},s=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},c=e=>(e.loaded=1,e.get()),p=(h=e=>function(r,t,n,a){var o=x.I(r);return o&&o.then?o.then(e.bind(e,r,x.S[r],t,n,a)):e(r,x.S[r],t,n,a)})(((e,r,t,n)=>r&&x.o(r,t)?c(i(r,t)):n())),m=h(((e,r,t,n,a)=>r&&x.o(r,t)?f(r,0,t,n):a())),v=h(((e,r,t,n,a)=>r&&x.o(r,t)?d(r,0,t,n):a())),b={},g={136:()=>v("default","react",[4,18,2,0],(()=>x.e(668).then((()=>()=>x(668))))),376:()=>v("default","@headlessui/react",[1,1,7,18],(()=>Promise.all([x.e(716),x.e(408)]).then((()=>()=>x(716))))),408:()=>v("default","react-dom",[4,18,2,0],(()=>x.e(356).then((()=>()=>x(356))))),640:()=>v("default","react-redux",[1,8,1,3],(()=>Promise.all([x.e(508),x.e(408)]).then((()=>()=>x(508))))),796:()=>v("default","@reduxjs/toolkit",[1,1,9,7],(()=>x.e(124).then((()=>()=>x(124))))),184:()=>m("default","@components",[4,0,0,1],(()=>Promise.all([x.e(576),x.e(988)]).then((()=>()=>x(576))))),512:()=>p("default","@store/quiz",(()=>Promise.all([x.e(828),x.e(280),x.e(796),x.e(856)]).then((()=>()=>x(856)))))},y={136:[136],408:[408],576:[376],640:[640],796:[796],840:[184,512]},w={},x.f.consumes=(e,r)=>{x.o(y,e)&&y[e].forEach((e=>{if(x.o(b,e))return r.push(b[e]);if(!w[e]){var t=r=>{b[e]=0,x.m[e]=t=>{delete x.c[e],t.exports=r()}};w[e]=!0;var n=r=>{delete b[e],x.m[e]=t=>{throw delete x.c[e],r}};try{var a=g[e]();a.then?r.push(b[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}}))},P=e=>new Promise(((r,t)=>{var n=x.miniCssF(e),a=x.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var a=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===r))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var i;if((a=(i=o[n]).getAttribute("data-href"))===e||a===r)return i}})(n,a))return r();((e,r,t,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=o=>{if(a.onerror=a.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,a.parentNode.removeChild(a),n(u)}},a.href=r,document.head.appendChild(a)})(e,a,r,t)})),k={80:0},x.f.miniCss=(e,r)=>{k[e]?r.push(k[e]):0!==k[e]&&{792:1,988:1}[e]&&r.push(k[e]=P(e).then((()=>{k[e]=0}),(r=>{throw delete k[e],r})))},(()=>{var e={80:0};x.f.j=(r,t)=>{var n=x.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^([68]40|136|408|796|988)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=x.p+x.u(r),i=new Error;x.l(o,(t=>{if(x.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,l]=t,u=0;if(o.some((r=>0!==e[r]))){for(n in i)x.o(i,n)&&(x.m[n]=i[n]);l&&l(x)}for(r&&r(t);u<o.length;u++)a=o[u],x.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkquiz=self.webpackChunkquiz||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var C=x(168),j=C.get,A=C.init;export{j as get,A as init};
var e,r,t,o,n,a,i,l,u,f,s,d,p,h,c,m,v,g,b,y,w,S,k,E={168:(e,r,t)=>{var o={"./Module":()=>t.e(536).then((()=>()=>t(536)))},n=(e,r)=>(t.R=r,r=t.o(o,e)?o[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var o="default",n=t.S[o];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>n,init:()=>a})}},P={};function C(e){var r=P[e];if(void 0!==r)return r.exports;var t=P[e]={exports:{}};return E[e](t,t.exports,C),t.exports}C.m=E,C.c=P,C.d=(e,r)=>{for(var t in r)C.o(r,t)&&!C.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},C.f={},C.e=e=>Promise.all(Object.keys(C.f).reduce(((r,t)=>(C.f[t](e,r),r)),[])),C.u=e=>e+"."+{108:"3ce7adb35f24f49c",136:"be5eb51022f3f0bf",356:"0cbf74389049c297",372:"1679617221c3336b",420:"7ee63debee834394",476:"432da42ef14e13ff",490:"9f16bf0479cffe64",536:"dddb7f810376bf27",668:"4ecdfa88b787c4b7"}[e]+".js",C.miniCssF=e=>e+"."+{372:"cafc7706cee4572b",420:"db28fafea1d2d24e"}[e]+".css",C.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="groups:",C.l=(t,o,n,a)=>{if(e[t])e[t].push(o);else{var i,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var s=u[f];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+n){i=s;break}}i||(l=!0,(i=document.createElement("script")).type="module",i.charset="utf-8",i.timeout=120,C.nc&&i.setAttribute("nonce",C.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[o];var d=(r,o)=>{i.onerror=i.onload=null,clearTimeout(p);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(o))),r)return r(o)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}},C.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{C.S={};var e={},r={};C.I=(t,o)=>{o||(o=[]);var n=r[t];if(n||(n=r[t]={}),!(o.indexOf(n)>=0)){if(o.push(n),e[t])return e[t];C.o(C.S,t)||(C.S[t]={});var a=C.S[t],i="groups",l=(e,r,t,o)=>{var n=a[e]=a[e]||{},l=n[r];(!l||!l.loaded&&(!o!=!l.eager?o:i>l.from))&&(n[r]={get:t,from:i,eager:!!o})},u=[];return"default"===t&&(l("@myorg/my-lib","0.0.1",(()=>Promise.all([C.e(136),C.e(372),C.e(490)]).then((()=>()=>C(490))))),l("groups/Module","0.0.0",(()=>Promise.all([C.e(136),C.e(476),C.e(420)]).then((()=>()=>C(420))))),l("react-dom","18.2.0",(()=>Promise.all([C.e(356),C.e(136)]).then((()=>()=>C(356))))),l("react","18.2.0",(()=>C.e(668).then((()=>()=>C(668)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),C.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=t[1]?r(t[1]):[];return t[2]&&(o.length++,o.push.apply(o,r(t[2]))),t[3]&&(o.push([]),o.push.apply(o,r(t[3]))),o},o=(e,r)=>{e=t(e),r=t(r);for(var o=0;;){if(o>=e.length)return o<r.length&&"u"!=(typeof r[o])[0];var n=e[o],a=(typeof n)[0];if(o>=r.length)return"u"==a;var i=r[o],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;o++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,t+="u"==(typeof(l=e[a]))[0]?"-":(o>0?".":"")+(o=2,l);return t}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():n(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var o=e[0],n=o<0;n&&(o=-o-1);for(var i=0,l=1,u=!0;;l++,i++){var f,s,d=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(s=(typeof(f=r[i]))[0]))return!u||("u"==d?l>o&&!n:""==d!=n);if("u"==s){if(!u||"u"!=d)return!1}else if(u)if(d==s)if(l<=o){if(f!=e[l])return!1}else{if(n?f>e[l]:f<e[l])return!1;f!=e[l]&&(u=!1)}else if("s"!=d&&"n"!=d){if(n||l<=o)return!1;u=!1,l--}else{if(l<=o||s<d!=n)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,l--)}}var p=[],h=p.pop.bind(p);for(i=1;i<e.length;i++){var c=e[i];p.push(1==c?h()|h():2==c?h()&h():c?a(c,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||o(e,r)?r:e),0))&&t[r]},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&o(e,r)?r:e),0)},u=(e,r,t,o)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+n(o)+")",f=(e,r,t,o)=>{var n=l(e,t);return a(o,n)||d(u(e,t,n,o)),p(e[t][n])},s=(e,r,t,o)=>{var n=l(e,t);if(!a(o,n))throw new Error(u(e,t,n,o));return p(e[t][n])},d=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},p=e=>(e.loaded=1,e.get()),c=(h=e=>function(r,t,o,n){var a=C.I(r);return a&&a.then?a.then(e.bind(e,r,C.S[r],t,o,n)):e(r,C.S[r],t,o,n)})(((e,r,t,o)=>r&&C.o(r,t)?p(i(r,t)):o())),m=h(((e,r,t,o,n)=>r&&C.o(r,t)?f(r,0,t,o):n())),v=h(((e,r,t,o,n)=>r&&C.o(r,t)?s(r,0,t,o):n())),g={},b={136:()=>v("default","react",[4,18,2,0],(()=>C.e(668).then((()=>()=>C(668))))),476:()=>m("default","@myorg/my-lib",[4,0,0,1],(()=>Promise.all([C.e(372),C.e(108)]).then((()=>()=>C(490))))),536:()=>c("default","groups/Module",(()=>Promise.all([C.e(136),C.e(476),C.e(420)]).then((()=>()=>C(420)))))},y={136:[136],476:[476],536:[536]},w={},C.f.consumes=(e,r)=>{C.o(y,e)&&y[e].forEach((e=>{if(C.o(g,e))return r.push(g[e]);if(!w[e]){var t=r=>{g[e]=0,C.m[e]=t=>{delete C.c[e],t.exports=r()}};w[e]=!0;var o=r=>{delete g[e],C.m[e]=t=>{throw delete C.c[e],r}};try{var n=b[e]();n.then?r.push(g[e]=n.then(t).catch(o)):t(n)}catch(e){o(e)}}}))},S=e=>new Promise(((r,t)=>{var o=C.miniCssF(e),n=C.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var n=(i=t[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===r))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var i;if((n=(i=a[o]).getAttribute("data-href"))===e||n===r)return i}})(o,n))return r();((e,r,t,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=a=>{if(n.onerror=n.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,n.parentNode.removeChild(n),o(u)}},n.href=r,document.head.appendChild(n)})(e,n,r,t)})),k={48:0},C.f.miniCss=(e,r)=>{k[e]?r.push(k[e]):0!==k[e]&&{372:1,420:1}[e]&&r.push(k[e]=S(e).then((()=>{k[e]=0}),(r=>{throw delete k[e],r})))},(()=>{var e={48:0};C.f.j=(r,t)=>{var o=C.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^((13|47|53)6|372)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=C.p+C.u(r),i=new Error;C.l(a,(t=>{if(C.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,n,[a,i,l]=t,u=0;if(a.some((r=>0!==e[r]))){for(o in i)C.o(i,o)&&(C.m[o]=i[o]);l&&l(C)}for(r&&r(t);u<a.length;u++)n=a[u],C.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkgroups=self.webpackChunkgroups||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var x=C(168),A=x.get,O=x.init;export{A as get,O as init};
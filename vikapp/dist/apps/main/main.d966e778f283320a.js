import*as e from"https://80q.ru/mf/add-question/remoteEntry.js";import*as r from"https://80q.ru/mf/answers/remoteEntry.js";import*as t from"https://80q.ru/mf/groups/remoteEntry.js";import*as o from"https://80q.ru/mf/questions/remoteEntry.js";import*as n from"https://80q.ru/mf/quiz/remoteEntry.js";var a,i,f,u,l,s,d,c,p={9769:(e,r,t)=>{Promise.all([t.e(828),t.e(280),t.e(136),t.e(408),t.e(920),t.e(416)]).then(t.bind(t,2416)).catch((e=>console.error(e)))},9896:r=>{r.exports=e},5014:e=>{e.exports=r},6440:e=>{e.exports=t},8600:e=>{e.exports=o},4224:e=>{e.exports=n}},h={};function m(e){var r=h[e];if(void 0!==r)return r.exports;var t=h[e]={exports:{}};return p[e](t,t.exports,m),t.exports}m.m=p,m.c=h,m.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return m.d(r,{a:r}),r},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,m.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var t=Object.create(null);m.r(t);var o={};a=a||[null,i({}),i([]),i(i)];for(var n=2&r&&e;"object"==typeof n&&!~a.indexOf(n);n=i(n))Object.getOwnPropertyNames(n).forEach((r=>o[r]=()=>e[r]));return o.default=()=>e,m.d(t,o),t},m.d=(e,r)=>{for(var t in r)m.o(r,t)&&!m.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},m.f={},m.e=e=>Promise.all(Object.keys(m.f).reduce(((r,t)=>(m.f[t](e,r),r)),[])),m.u=e=>e+"."+{16:"5f816445e5155c8c",24:"6d9f313f7f735117",124:"3ac92dee55c557dd",136:"6e5db501e658e640",172:"08b26defd272a95a",280:"5b58be69b7094717",350:"d5f2bebd0f5c9967",356:"a86a99d0ac5333eb",376:"05247f14bb19889d",408:"c2afdf1368f70241",416:"04ae7c2b326e0042",493:"0b14af579d07bceb",508:"5711fcbaa2ba79d8",583:"8d2cf82dff514cd2",668:"35f0c96e8fe2577e",688:"8f7e145c510470c4",716:"1b5f5129fcc405d9",752:"f5503b4a70df7c44",828:"49cf203c96e67b62",904:"43390addfdffe508",920:"fb9462353ca39eb6",964:"57d7698ad08f9207",969:"775cf5e5a2f289ec"}[e]+".js",m.miniCssF=e=>e+"."+{350:"ad284c8c22716d5e",969:"ad284c8c22716d5e"}[e]+".css",m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),m.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),f={},u="main:",m.l=(e,r,t,o)=>{if(f[e])f[e].push(r);else{var n,a;if(void 0!==t)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var s=i[l];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==u+t){n=s;break}}n||(a=!0,(n=document.createElement("script")).type="module",n.charset="utf-8",n.timeout=120,m.nc&&n.setAttribute("nonce",m.nc),n.setAttribute("data-webpack",u+t),n.src=e),f[e]=[r];var d=(r,t)=>{n.onerror=n.onload=null,clearTimeout(c);var o=f[e];if(delete f[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(t))),r)return r(t)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=d.bind(null,n.onerror),n.onload=d.bind(null,n.onload),a&&document.head.appendChild(n)}},m.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l={24:[6024],172:[9172],493:[1493],688:[1688],904:[904]},s={904:["default","./Module",5014],1493:["default","./Module",8600],1688:["default","./Module",9896],6024:["default","./Module",4224],9172:["default","./Module",6440]},m.f.remotes=(e,r)=>{m.o(l,e)&&l[e].forEach((e=>{var t=m.R;t||(t=[]);var o=s[e];if(!(t.indexOf(o)>=0)){if(t.push(o),o.p)return r.push(o.p);var n=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+o[1]+'" from '+o[2]),m.m[e]=()=>{throw r},o.p=0},a=(e,t,a,i,f,u)=>{try{var l=e(t,a);if(!l||!l.then)return f(l,i,u);var s=l.then((e=>f(e,i)),n);if(!u)return s;r.push(o.p=s)}catch(e){n(e)}},i=(e,r,n)=>a(r.get,o[1],t,0,f,n),f=r=>{o.p=1,m.m[e]=e=>{e.exports=r()}};a(m,o[2],0,0,((e,r,t)=>e?a(m.I,o[0],0,e,i,t):n()),1)}}))},(()=>{m.S={};var e={},r={};m.I=(t,o)=>{o||(o=[]);var n=r[t];if(n||(n=r[t]={}),!(o.indexOf(n)>=0)){if(o.push(n),e[t])return e[t];m.o(m.S,t)||(m.S[t]={});var a=m.S[t],i="main",f=(e,r,t,o)=>{var n=a[e]=a[e]||{},f=n[r];(!f||!f.loaded&&(!o!=!f.eager?o:i>f.from))&&(n[r]={get:t,from:i,eager:!!o})},u=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var n=m(e);if(!n)return;var a=e=>e&&e.init&&e.init(m.S[t],o);if(n.then)return l.push(n.then(a,r));var i=a(n);if(i&&i.then)return l.push(i.catch(r))}catch(e){r(e)}},l=[];return"default"===t&&(f("@components","0.0.1",(()=>Promise.all([m.e(136),m.e(376),m.e(969)]).then((()=>()=>m(2350))))),f("@headlessui/react","1.7.18",(()=>Promise.all([m.e(716),m.e(136),m.e(408)]).then((()=>()=>m(5716))))),f("@reduxjs/toolkit","1.9.7",(()=>Promise.all([m.e(828),m.e(124)]).then((()=>()=>m(7124))))),f("@store/groups","0.0.0",(()=>Promise.all([m.e(828),m.e(280),m.e(136),m.e(920),m.e(583)]).then((()=>()=>m(964))))),f("react-dom","18.2.0",(()=>Promise.all([m.e(356),m.e(136)]).then((()=>()=>m(2356))))),f("react-redux","8.1.3",(()=>Promise.all([m.e(508),m.e(136),m.e(408)]).then((()=>()=>m(2508))))),f("react","18.2.0",(()=>m.e(668).then((()=>()=>m(5668))))),u(6440),u(8600),u(9896),u(5014),u(4224)),l.length?e[t]=Promise.all(l).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=t[1]?r(t[1]):[];return t[2]&&(o.length++,o.push.apply(o,r(t[2]))),t[3]&&(o.push([]),o.push.apply(o,r(t[3]))),o},r=(r,t)=>{r=e(r),t=e(t);for(var o=0;;){if(o>=r.length)return o<t.length&&"u"!=(typeof t[o])[0];var n=r[o],a=(typeof n)[0];if(o>=t.length)return"u"==a;var i=t[o],f=(typeof i)[0];if(a!=f)return"o"==a&&"n"==f||"s"==f||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;o++}},t=e=>{var r=e[0],o="";if(1===e.length)return"*";if(r+.5){o+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,o+="u"==(typeof(f=e[a]))[0]?"-":(n>0?".":"")+(n=2,f);return o}var i=[];for(a=1;a<e.length;a++){var f=e[a];i.push(0===f?"not("+u()+")":1===f?"("+u()+" || "+u()+")":2===f?i.pop()+" "+i.pop():t(f))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(r,t)=>{if(0 in r){t=e(t);var n=r[0],a=n<0;a&&(n=-n-1);for(var i=0,f=1,u=!0;;f++,i++){var l,s,d=f<r.length?(typeof r[f])[0]:"";if(i>=t.length||"o"==(s=(typeof(l=t[i]))[0]))return!u||("u"==d?f>n&&!a:""==d!=a);if("u"==s){if(!u||"u"!=d)return!1}else if(u)if(d==s)if(f<=n){if(l!=r[f])return!1}else{if(a?l>r[f]:l<r[f])return!1;l!=r[f]&&(u=!1)}else if("s"!=d&&"n"!=d){if(a||f<=n)return!1;u=!1,f--}else{if(f<=n||s<d!=a)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,f--)}}var c=[],p=c.pop.bind(c);for(i=1;i<r.length;i++){var h=r[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,t):!p())}return!!p()},n=(e,t)=>{var o=e[t];return Object.keys(o).reduce(((e,t)=>!e||!o[e].loaded&&r(e,t)?t:e),0)},a=(e,r,o,n)=>"Unsatisfied version "+o+" from "+(o&&e[r][o].from)+" of shared singleton module "+r+" (required "+t(n)+")",i=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},f=e=>(e.loaded=1,e.get()),u=e=>function(r,t,o,n){var a=m.I(r);return a&&a.then?a.then(e.bind(e,r,m.S[r],t,o,n)):e(r,m.S[r],t,o,n)},l=u(((e,t,o,n)=>t&&m.o(t,o)?f(((e,t)=>{var o=e[t];return(t=Object.keys(o).reduce(((e,t)=>!e||r(e,t)?t:e),0))&&o[t]})(t,o)):n())),s=u(((e,r,t,u,l)=>r&&m.o(r,t)?((e,r,t,u)=>{var l=n(e,t);return o(u,l)||i(a(e,t,l,u)),f(e[t][l])})(r,0,t,u):l())),d=u(((e,r,t,i,u)=>r&&m.o(r,t)?((e,r,t,i)=>{var u=n(e,t);if(!o(i,u))throw new Error(a(e,t,u,i));return f(e[t][u])})(r,0,t,i):u())),c={},p={9136:()=>d("default","react",[4,18,2,0],(()=>m.e(668).then((()=>()=>m(5668))))),408:()=>d("default","react-dom",[4,18,2,0],(()=>m.e(356).then((()=>()=>m(2356))))),2796:()=>d("default","@reduxjs/toolkit",[1,1,9,7],(()=>m.e(124).then((()=>()=>m(7124))))),9640:()=>d("default","react-redux",[1,8,1,3],(()=>Promise.all([m.e(508),m.e(408)]).then((()=>()=>m(2508))))),6184:()=>s("default","@components",[4,0,0,1],(()=>Promise.all([m.e(376),m.e(350)]).then((()=>()=>m(2350))))),9804:()=>l("default","@store/groups",(()=>m.e(964).then((()=>()=>m(964))))),8376:()=>d("default","@headlessui/react",[1,1,7,18],(()=>Promise.all([m.e(716),m.e(408)]).then((()=>()=>m(5716))))),2752:()=>l("default","answers/Module",(()=>m.e(904).then((()=>()=>m(904))))),5016:()=>l("default","quiz/Module",(()=>m.e(24).then((()=>()=>m(6024)))))},h={16:[5016],136:[9136],376:[8376],408:[408],416:[6184,9804],752:[2752],920:[2796,9640]},v={};m.f.consumes=(e,r)=>{m.o(h,e)&&h[e].forEach((e=>{if(m.o(c,e))return r.push(c[e]);if(!v[e]){var t=r=>{c[e]=0,m.m[e]=t=>{delete m.c[e],t.exports=r()}};v[e]=!0;var o=r=>{delete c[e],m.m[e]=t=>{throw delete m.c[e],r}};try{var n=p[e]();n.then?r.push(c[e]=n.then(t).catch(o)):t(n)}catch(e){o(e)}}}))}})(),d=e=>new Promise(((r,t)=>{var o=m.miniCssF(e),n=m.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var n=(i=t[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===r))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var i;if((n=(i=a[o]).getAttribute("data-href"))===e||n===r)return i}})(o,n))return r();((e,r,t,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=a=>{if(n.onerror=n.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),f=a&&a.target&&a.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=f,n.parentNode.removeChild(n),o(u)}},n.href=r,document.head.appendChild(n)})(e,n,r,t)})),c={590:0},m.f.miniCss=(e,r)=>{c[e]?r.push(c[e]):0!==c[e]&&{350:1,969:1}[e]&&r.push(c[e]=d(e).then((()=>{c[e]=0}),(r=>{throw delete c[e],r})))},(()=>{var e={590:0};m.f.j=(r,t)=>{var o=m.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(1(36|6|72)|24|376|408|493|688|752|904|920)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=m.p+m.u(r),i=new Error;m.l(a,(t=>{if(m.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,n,[a,i,f]=t,u=0;if(a.some((r=>0!==e[r]))){for(o in i)m.o(i,o)&&(m.m[o]=i[o]);f&&f(m)}for(r&&r(t);u<a.length;u++)n=a[u],m.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkmain=self.webpackChunkmain||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),m(9769);
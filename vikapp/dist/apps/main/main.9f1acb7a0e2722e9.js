import*as e from"https://80q.ru/mf/answers/remoteEntry.js";import*as r from"https://80q.ru/mf/groups/remoteEntry.js";import*as t from"https://80q.ru/mf/questions/remoteEntry.js";import*as o from"https://80q.ru/mf/quiz/remoteEntry.js";var n,a,i,u,f,l,s,d,c={9769:(e,r,t)=>{Promise.all([t.e(136),t.e(408),t.e(640),t.e(720)]).then(t.bind(t,8720)).catch((e=>console.error(e)))},5014:r=>{r.exports=e},6440:e=>{e.exports=r},8600:e=>{e.exports=t},4224:e=>{e.exports=o}},p={};function h(e){var r=p[e];if(void 0!==r)return r.exports;var t=p[e]={exports:{}};return c[e](t,t.exports,h),t.exports}h.m=c,h.c=p,h.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return h.d(r,{a:r}),r},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,h.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var t=Object.create(null);h.r(t);var o={};n=n||[null,a({}),a([]),a(a)];for(var i=2&r&&e;"object"==typeof i&&!~n.indexOf(i);i=a(i))Object.getOwnPropertyNames(i).forEach((r=>o[r]=()=>e[r]));return o.default=()=>e,h.d(t,o),t},h.d=(e,r)=>{for(var t in r)h.o(r,t)&&!h.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},h.f={},h.e=e=>Promise.all(Object.keys(h.f).reduce(((r,t)=>(h.f[t](e,r),r)),[])),h.u=e=>e+"."+{16:"5f816445e5155c8c",24:"6d9f313f7f735117",124:"3ac92dee55c557dd",136:"6e5db501e658e640",172:"08b26defd272a95a",208:"9f3afe0364234d5d",280:"def5893989c2530a",324:"99fad31dc0bfa191",356:"a86a99d0ac5333eb",376:"05247f14bb19889d",408:"c2afdf1368f70241",493:"0b14af579d07bceb",508:"5711fcbaa2ba79d8",603:"40a0b7c1dbc6ce5e",632:"b43ff7702d1888cf",640:"71d976cb908c6d68",668:"35f0c96e8fe2577e",704:"d1430855cf12878a",716:"71def23118613353",720:"99d825d499cfb242",752:"f5503b4a70df7c44",796:"67b3c025c353319a",828:"076bd04bc31c460b",904:"43390addfdffe508"}[e]+".js",h.miniCssF=e=>e+"."+{324:"ad284c8c22716d5e",704:"ad284c8c22716d5e"}[e]+".css",h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),h.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),i={},u="main:",h.l=(e,r,t,o)=>{if(i[e])i[e].push(r);else{var n,a;if(void 0!==t)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==u+t){n=s;break}}n||(a=!0,(n=document.createElement("script")).type="module",n.charset="utf-8",n.timeout=120,h.nc&&n.setAttribute("nonce",h.nc),n.setAttribute("data-webpack",u+t),n.src=e),i[e]=[r];var d=(r,t)=>{n.onerror=n.onload=null,clearTimeout(c);var o=i[e];if(delete i[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(t))),r)return r(t)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=d.bind(null,n.onerror),n.onload=d.bind(null,n.onload),a&&document.head.appendChild(n)}},h.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f={24:[6024],172:[9172],493:[1493],904:[904]},l={904:["default","./Module",5014],1493:["default","./Module",8600],6024:["default","./Module",4224],9172:["default","./Module",6440]},h.f.remotes=(e,r)=>{h.o(f,e)&&f[e].forEach((e=>{var t=h.R;t||(t=[]);var o=l[e];if(!(t.indexOf(o)>=0)){if(t.push(o),o.p)return r.push(o.p);var n=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+o[1]+'" from '+o[2]),h.m[e]=()=>{throw r},o.p=0},a=(e,t,a,i,u,f)=>{try{var l=e(t,a);if(!l||!l.then)return u(l,i,f);var s=l.then((e=>u(e,i)),n);if(!f)return s;r.push(o.p=s)}catch(e){n(e)}},i=(e,r,n)=>a(r.get,o[1],t,0,u,n),u=r=>{o.p=1,h.m[e]=e=>{e.exports=r()}};a(h,o[2],0,0,((e,r,t)=>e?a(h.I,o[0],0,e,i,t):n()),1)}}))},(()=>{h.S={};var e={},r={};h.I=(t,o)=>{o||(o=[]);var n=r[t];if(n||(n=r[t]={}),!(o.indexOf(n)>=0)){if(o.push(n),e[t])return e[t];h.o(h.S,t)||(h.S[t]={});var a=h.S[t],i="main",u=(e,r,t,o)=>{var n=a[e]=a[e]||{},u=n[r];(!u||!u.loaded&&(!o!=!u.eager?o:i>u.from))&&(n[r]={get:t,from:i,eager:!!o})},f=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var n=h(e);if(!n)return;var a=e=>e&&e.init&&e.init(h.S[t],o);if(n.then)return l.push(n.then(a,r));var i=a(n);if(i&&i.then)return l.push(i.catch(r))}catch(e){r(e)}},l=[];return"default"===t&&(u("@components","0.0.1",(()=>Promise.all([h.e(136),h.e(376),h.e(324)]).then((()=>()=>h(1704))))),u("@headlessui/react","1.7.18",(()=>Promise.all([h.e(716),h.e(136),h.e(408)]).then((()=>()=>h(5716))))),u("@reduxjs/toolkit","1.9.7",(()=>Promise.all([h.e(208),h.e(124)]).then((()=>()=>h(7124))))),u("@store/groups","0.0.0",(()=>Promise.all([h.e(208),h.e(280),h.e(136),h.e(640),h.e(796),h.e(603)]).then((()=>()=>h(5632))))),u("react-dom","18.2.0",(()=>Promise.all([h.e(356),h.e(136)]).then((()=>()=>h(2356))))),u("react-redux","8.1.3",(()=>Promise.all([h.e(508),h.e(136),h.e(408)]).then((()=>()=>h(2508))))),u("react","18.2.0",(()=>h.e(668).then((()=>()=>h(5668))))),f(6440),f(5014),f(8600),f(4224)),l.length?e[t]=Promise.all(l).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=t[1]?r(t[1]):[];return t[2]&&(o.length++,o.push.apply(o,r(t[2]))),t[3]&&(o.push([]),o.push.apply(o,r(t[3]))),o},r=(r,t)=>{r=e(r),t=e(t);for(var o=0;;){if(o>=r.length)return o<t.length&&"u"!=(typeof t[o])[0];var n=r[o],a=(typeof n)[0];if(o>=t.length)return"u"==a;var i=t[o],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;o++}},t=e=>{var r=e[0],o="";if(1===e.length)return"*";if(r+.5){o+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,o+="u"==(typeof(u=e[a]))[0]?"-":(n>0?".":"")+(n=2,u);return o}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+f()+")":1===u?"("+f()+" || "+f()+")":2===u?i.pop()+" "+i.pop():t(u))}return f();function f(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(r,t)=>{if(0 in r){t=e(t);var n=r[0],a=n<0;a&&(n=-n-1);for(var i=0,u=1,f=!0;;u++,i++){var l,s,d=u<r.length?(typeof r[u])[0]:"";if(i>=t.length||"o"==(s=(typeof(l=t[i]))[0]))return!f||("u"==d?u>n&&!a:""==d!=a);if("u"==s){if(!f||"u"!=d)return!1}else if(f)if(d==s)if(u<=n){if(l!=r[u])return!1}else{if(a?l>r[u]:l<r[u])return!1;l!=r[u]&&(f=!1)}else if("s"!=d&&"n"!=d){if(a||u<=n)return!1;f=!1,u--}else{if(u<=n||s<d!=a)return!1;f=!1}else"s"!=d&&"n"!=d&&(f=!1,u--)}}var c=[],p=c.pop.bind(c);for(i=1;i<r.length;i++){var h=r[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,t):!p())}return!!p()},n=(e,t)=>{var o=e[t];return Object.keys(o).reduce(((e,t)=>!e||!o[e].loaded&&r(e,t)?t:e),0)},a=(e,r,o,n)=>"Unsatisfied version "+o+" from "+(o&&e[r][o].from)+" of shared singleton module "+r+" (required "+t(n)+")",i=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},u=e=>(e.loaded=1,e.get()),f=e=>function(r,t,o,n){var a=h.I(r);return a&&a.then?a.then(e.bind(e,r,h.S[r],t,o,n)):e(r,h.S[r],t,o,n)},l=f(((e,t,o,n)=>t&&h.o(t,o)?u(((e,t)=>{var o=e[t];return(t=Object.keys(o).reduce(((e,t)=>!e||r(e,t)?t:e),0))&&o[t]})(t,o)):n())),s=f(((e,r,t,f,l)=>r&&h.o(r,t)?((e,r,t,f)=>{var l=n(e,t);return o(f,l)||i(a(e,t,l,f)),u(e[t][l])})(r,0,t,f):l())),d=f(((e,r,t,i,f)=>r&&h.o(r,t)?((e,r,t,i)=>{var f=n(e,t);if(!o(i,f))throw new Error(a(e,t,f,i));return u(e[t][f])})(r,0,t,i):f())),c={},p={9136:()=>d("default","react",[4,18,2,0],(()=>h.e(668).then((()=>()=>h(5668))))),408:()=>d("default","react-dom",[4,18,2,0],(()=>h.e(356).then((()=>()=>h(2356))))),9640:()=>d("default","react-redux",[1,8,1,3],(()=>Promise.all([h.e(508),h.e(408)]).then((()=>()=>h(2508))))),6184:()=>s("default","@components",[4,0,0,1],(()=>Promise.all([h.e(376),h.e(704)]).then((()=>()=>h(1704))))),9804:()=>l("default","@store/groups",(()=>Promise.all([h.e(208),h.e(280),h.e(796),h.e(632)]).then((()=>()=>h(5632))))),8376:()=>d("default","@headlessui/react",[1,1,7,18],(()=>Promise.all([h.e(716),h.e(408)]).then((()=>()=>h(5716))))),2796:()=>d("default","@reduxjs/toolkit",[1,1,9,7],(()=>h.e(124).then((()=>()=>h(7124))))),2752:()=>l("default","answers/Module",(()=>h.e(904).then((()=>()=>h(904))))),1828:()=>l("default","questions/Module",(()=>h.e(493).then((()=>()=>h(1493))))),5016:()=>l("default","quiz/Module",(()=>h.e(24).then((()=>()=>h(6024)))))},m={16:[5016],136:[9136],376:[8376],408:[408],640:[9640],720:[6184,9804],752:[2752],796:[2796],828:[1828]},v={};h.f.consumes=(e,r)=>{h.o(m,e)&&m[e].forEach((e=>{if(h.o(c,e))return r.push(c[e]);if(!v[e]){var t=r=>{c[e]=0,h.m[e]=t=>{delete h.c[e],t.exports=r()}};v[e]=!0;var o=r=>{delete c[e],h.m[e]=t=>{throw delete h.c[e],r}};try{var n=p[e]();n.then?r.push(c[e]=n.then(t).catch(o)):t(n)}catch(e){o(e)}}}))}})(),s=e=>new Promise(((r,t)=>{var o=h.miniCssF(e),n=h.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var n=(i=t[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===r))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var i;if((n=(i=a[o]).getAttribute("data-href"))===e||n===r)return i}})(o,n))return r();((e,r,t,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=a=>{if(n.onerror=n.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||r,f=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=i,f.request=u,n.parentNode.removeChild(n),o(f)}},n.href=r,document.head.appendChild(n)})(e,n,r,t)})),d={590:0},h.f.miniCss=(e,r)=>{d[e]?r.push(d[e]):0!==d[e]&&{324:1,704:1}[e]&&r.push(d[e]=s(e).then((()=>{d[e]=0}),(r=>{throw delete d[e],r})))},(()=>{var e={590:0};h.f.j=(r,t)=>{var o=h.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(1(36|6|72)|24|376|408|493|640|752|796|828|904)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=h.p+h.u(r),i=new Error;h.l(a,(t=>{if(h.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,n,[a,i,u]=t,f=0;if(a.some((r=>0!==e[r]))){for(o in i)h.o(i,o)&&(h.m[o]=i[o]);u&&u(h)}for(r&&r(t);f<a.length;f++)n=a[f],h.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkmain=self.webpackChunkmain||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),h(9769);
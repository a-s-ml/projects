import*as e from"https://80q.ru/mf/answers/remoteEntry.js";import*as r from"https://80q.ru/mf/groups/remoteEntry.js";import*as t from"https://80q.ru/mf/questions/remoteEntry.js";import*as n from"https://80q.ru/mf/quiz/remoteEntry.js";var o,a,i,u,f,l,s,d,p={769:(e,r,t)=>{Promise.all([t.e(136),t.e(408),t.e(720)]).then(t.bind(t,720)).catch((e=>console.error(e)))},14:r=>{r.exports=e},440:e=>{e.exports=r},600:e=>{e.exports=t},224:e=>{e.exports=n}},c={};function h(e){var r=c[e];if(void 0!==r)return r.exports;var t=c[e]={exports:{}};return p[e](t,t.exports,h),t.exports}h.m=p,h.c=c,h.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return h.d(r,{a:r}),r},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,h.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var t=Object.create(null);h.r(t);var n={};o=o||[null,a({}),a([]),a(a)];for(var i=2&r&&e;"object"==typeof i&&!~o.indexOf(i);i=a(i))Object.getOwnPropertyNames(i).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,h.d(t,n),t},h.d=(e,r)=>{for(var t in r)h.o(r,t)&&!h.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},h.f={},h.e=e=>Promise.all(Object.keys(h.f).reduce(((r,t)=>(h.f[t](e,r),r)),[])),h.u=e=>e+"."+{16:"7664e0a3d5e1b2cc",24:"a1393adcf78a69fd",136:"6784f037196f3c53",172:"c4c9d795d5af1487",324:"aa1f8e905bfafb87",356:"2f4819f81675e200",376:"361c3e7f26436bfa",408:"1a1658cc3fe0ed58",493:"dd24c8b747388575",668:"8229f2db0fe90a12",704:"c35c385d586b7f6d",716:"e89e78abea05db58",720:"86141d8a6524b6c4",752:"3e8bbaeea4fda3e5",828:"7a9e7aec7187ac5a",904:"af83e2a763ce190f"}[e]+".js",h.miniCssF=e=>e+"."+{324:"ad284c8c22716d5e",704:"ad284c8c22716d5e"}[e]+".css",h.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),i={},u="main:",h.l=(e,r,t,n)=>{if(i[e])i[e].push(r);else{var o,a;if(void 0!==t)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==u+t){o=s;break}}o||(a=!0,(o=document.createElement("script")).type="module",o.charset="utf-8",o.timeout=120,h.nc&&o.setAttribute("nonce",h.nc),o.setAttribute("data-webpack",u+t),o.src=e),i[e]=[r];var d=(r,t)=>{o.onerror=o.onload=null,clearTimeout(p);var n=i[e];if(delete i[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(t))),r)return r(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),a&&document.head.appendChild(o)}},h.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f={24:[24],172:[172],493:[493],904:[904]},l={24:["default","./Module",224],172:["default","./Module",440],493:["default","./Module",600],904:["default","./Module",14]},h.f.remotes=(e,r)=>{h.o(f,e)&&f[e].forEach((e=>{var t=h.R;t||(t=[]);var n=l[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),h.m[e]=()=>{throw r},n.p=0},a=(e,t,a,i,u,f)=>{try{var l=e(t,a);if(!l||!l.then)return u(l,i,f);var s=l.then((e=>u(e,i)),o);if(!f)return s;r.push(n.p=s)}catch(e){o(e)}},i=(e,r,o)=>a(r.get,n[1],t,0,u,o),u=r=>{n.p=1,h.m[e]=e=>{e.exports=r()}};a(h,n[2],0,0,((e,r,t)=>e?a(h.I,n[0],0,e,i,t):o()),1)}}))},(()=>{h.S={};var e={},r={};h.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];h.o(h.S,t)||(h.S[t]={});var a=h.S[t],i="main",u=(e,r,t,n)=>{var o=a[e]=a[e]||{},u=o[r];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(o[r]={get:t,from:i,eager:!!n})},f=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var o=h(e);if(!o)return;var a=e=>e&&e.init&&e.init(h.S[t],n);if(o.then)return l.push(o.then(a,r));var i=a(o);if(i&&i.then)return l.push(i.catch(r))}catch(e){r(e)}},l=[];return"default"===t&&(u("@components","0.0.1",(()=>Promise.all([h.e(136),h.e(376),h.e(324)]).then((()=>()=>h(704))))),u("@headlessui/react","1.7.18",(()=>Promise.all([h.e(716),h.e(136),h.e(408)]).then((()=>()=>h(716))))),u("react-dom","18.2.0",(()=>Promise.all([h.e(356),h.e(136)]).then((()=>()=>h(356))))),u("react","18.2.0",(()=>h.e(668).then((()=>()=>h(668))))),f(440),f(14),f(600),f(224)),l.length?e[t]=Promise.all(l).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},t=e=>{var r=e[0],n="";if(1===e.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(u=e[a]))[0]?"-":(o>0?".":"")+(o=2,u);return n}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+f()+")":1===u?"("+f()+" || "+f()+")":2===u?i.pop()+" "+i.pop():t(u))}return f();function f(){return i.pop().replace(/^\((.+)\)$/,"$1")}},n=(r,t)=>{if(0 in r){t=e(t);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,u=1,f=!0;;u++,i++){var l,s,d=u<r.length?(typeof r[u])[0]:"";if(i>=t.length||"o"==(s=(typeof(l=t[i]))[0]))return!f||("u"==d?u>o&&!a:""==d!=a);if("u"==s){if(!f||"u"!=d)return!1}else if(f)if(d==s)if(u<=o){if(l!=r[u])return!1}else{if(a?l>r[u]:l<r[u])return!1;l!=r[u]&&(f=!1)}else if("s"!=d&&"n"!=d){if(a||u<=o)return!1;f=!1,u--}else{if(u<=o||s<d!=a)return!1;f=!1}else"s"!=d&&"n"!=d&&(f=!1,u--)}}var p=[],c=p.pop.bind(p);for(i=1;i<r.length;i++){var h=r[i];p.push(1==h?c()|c():2==h?c()&c():h?n(h,t):!c())}return!!c()},o=(e,t)=>{var n=e[t];return Object.keys(n).reduce(((e,t)=>!e||!n[e].loaded&&r(e,t)?t:e),0)},a=(e,r,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(o)+")",i=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},u=e=>(e.loaded=1,e.get()),f=e=>function(r,t,n,o){var a=h.I(r);return a&&a.then?a.then(e.bind(e,r,h.S[r],t,n,o)):e(r,h.S[r],t,n,o)},l=f(((e,t,n,o)=>t&&h.o(t,n)?u(((e,t)=>{var n=e[t];return(t=Object.keys(n).reduce(((e,t)=>!e||r(e,t)?t:e),0))&&n[t]})(t,n)):o())),s=f(((e,r,t,f,l)=>r&&h.o(r,t)?((e,r,t,f)=>{var l=o(e,t);return n(f,l)||i(a(e,t,l,f)),u(e[t][l])})(r,0,t,f):l())),d=f(((e,r,t,i,f)=>r&&h.o(r,t)?((e,r,t,i)=>{var f=o(e,t);if(!n(i,f))throw new Error(a(e,t,f,i));return u(e[t][f])})(r,0,t,i):f())),p={},c={136:()=>d("default","react",[4,18,2,0],(()=>h.e(668).then((()=>()=>h(668))))),408:()=>d("default","react-dom",[4,18,2,0],(()=>h.e(356).then((()=>()=>h(356))))),184:()=>s("default","@components",[4,0,0,1],(()=>Promise.all([h.e(376),h.e(704)]).then((()=>()=>h(704))))),376:()=>d("default","@headlessui/react",[1,1,7,18],(()=>Promise.all([h.e(716),h.e(408)]).then((()=>()=>h(716))))),752:()=>l("default","answers/Module",(()=>h.e(904).then((()=>()=>h(904))))),828:()=>l("default","questions/Module",(()=>h.e(493).then((()=>()=>h(493))))),636:()=>l("default","quiz/Module",(()=>h.e(24).then((()=>()=>h(24)))))},m={16:[636],136:[136],376:[376],408:[408],720:[184],752:[752],828:[828]},v={};h.f.consumes=(e,r)=>{h.o(m,e)&&m[e].forEach((e=>{if(h.o(p,e))return r.push(p[e]);if(!v[e]){var t=r=>{p[e]=0,h.m[e]=t=>{delete h.c[e],t.exports=r()}};v[e]=!0;var n=r=>{delete p[e],h.m[e]=t=>{throw delete h.c[e],r}};try{var o=c[e]();o.then?r.push(p[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))}})(),s=e=>new Promise(((r,t)=>{var n=h.miniCssF(e),o=h.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===r)return i}})(n,o))return r();((e,r,t,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||r,f=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=i,f.request=u,o.parentNode.removeChild(o),n(f)}},o.href=r,document.head.appendChild(o)})(e,o,r,t)})),d={590:0},h.f.miniCss=(e,r)=>{d[e]?r.push(d[e]):0!==d[e]&&{324:1,704:1}[e]&&r.push(d[e]=s(e).then((()=>{d[e]=0}),(r=>{throw delete d[e],r})))},(()=>{var e={590:0};h.f.j=(r,t)=>{var n=h.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(7(04|16|20)|324|356|590|668)$/.test(r)){var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=h.p+h.u(r),i=new Error;h.l(a,(t=>{if(h.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,o,[a,i,u]=t,f=0;if(a.some((r=>0!==e[r]))){for(n in i)h.o(i,n)&&(h.m[n]=i[n]);u&&u(h)}for(r&&r(t);f<a.length;f++)o=a[f],h.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkmain=self.webpackChunkmain||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),h(769);
import*as e from"https://80q.ru/mf/groups/remoteEntry.js";var r,t,n,o,a,i,f={769:(e,r,t)=>{Promise.all([t.e(828),t.e(280),t.e(136),t.e(27),t.e(920),t.e(408)]).then(t.bind(t,408)).catch((e=>console.error(e)))},440:r=>{r.exports=e}},u={};function l(e){var r=u[e];if(void 0!==r)return r.exports;var t=u[e]={exports:{}};return f[e](t,t.exports,l),t.exports}l.m=f,l.c=u,l.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return l.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);l.r(o);var a={};r=r||[null,t({}),t([]),t(t)];for(var i=2&n&&e;"object"==typeof i&&!~r.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((r=>a[r]=()=>e[r]));return a.default=()=>e,l.d(o,a),o},l.d=(e,r)=>{for(var t in r)l.o(r,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((r,t)=>(l.f[t](e,r),r)),[])),l.u=e=>e+"."+{27:"9c01b3ff2587371f",124:"936fccb138221077",136:"f9a828cb5758eb27",172:"c4c9d795d5af1487",280:"e815c86f758b0b07",356:"78ffd22b8c7802ee",408:"14902919cde86f42",500:"fc0a7b4d3525cafb",508:"15b9e847a7d7c0ad",668:"8229f2db0fe90a12",828:"31b16a7267ff6fd2",880:"f45b0ae75522bd26",916:"494922208b7703c2",920:"db31ae9d833930fd"}[e]+".js",l.miniCssF=e=>{},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n={},o="main:",l.l=(e,r,t,a)=>{if(n[e])n[e].push(r);else{var i,f;if(void 0!==t)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var d=u[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+t){i=d;break}}i||(f=!0,(i=document.createElement("script")).type="module",i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",o+t),i.src=e),n[e]=[r];var c=(r,t)=>{i.onerror=i.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=c.bind(null,i.onerror),i.onload=c.bind(null,i.onload),f&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a={172:[172]},i={172:["default","./Module",440]},l.f.remotes=(e,r)=>{l.o(a,e)&&a[e].forEach((e=>{var t=l.R;t||(t=[]);var n=i[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),l.m[e]=()=>{throw r},n.p=0},a=(e,t,a,i,f,u)=>{try{var l=e(t,a);if(!l||!l.then)return f(l,i,u);var s=l.then((e=>f(e,i)),o);if(!u)return s;r.push(n.p=s)}catch(e){o(e)}},f=(e,r,o)=>a(r.get,n[1],t,0,u,o),u=r=>{n.p=1,l.m[e]=e=>{e.exports=r()}};a(l,n[2],0,0,((e,r,t)=>e?a(l.I,n[0],0,e,f,t):o()),1)}}))},(()=>{l.S={};var e={},r={};l.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];l.o(l.S,t)||(l.S[t]={});var a=l.S[t],i="main",f=(e,r,t,n)=>{var o=a[e]=a[e]||{},f=o[r];(!f||!f.loaded&&(!n!=!f.eager?n:i>f.from))&&(o[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(f("@api/category","0.0.1",(()=>Promise.all([l.e(828),l.e(280),l.e(136),l.e(920),l.e(880)]).then((()=>()=>l(500))))),f("@reduxjs/toolkit","1.9.7",(()=>Promise.all([l.e(828),l.e(124)]).then((()=>()=>l(124))))),f("react-dom","18.2.0",(()=>Promise.all([l.e(356),l.e(136)]).then((()=>()=>l(356))))),f("react-redux","8.1.3",(()=>Promise.all([l.e(508),l.e(136),l.e(27)]).then((()=>()=>l(508))))),f("react","18.2.0",(()=>l.e(668).then((()=>()=>l(668))))),(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var o=l(440);if(!o)return;var a=e=>e&&e.init&&e.init(l.S[t],n);if(o.then)return u.push(o.then(a,r));var i=a(o);if(i&&i.then)return u.push(i.catch(r))}catch(e){r(e)}})()),u.length?e[t]=Promise.all(u).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],f=(typeof i)[0];if(a!=f)return"o"==a&&"n"==f||"s"==f||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},t=e=>{var r=e[0],n="";if(1===e.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(f=e[a]))[0]?"-":(o>0?".":"")+(o=2,f);return n}var i=[];for(a=1;a<e.length;a++){var f=e[a];i.push(0===f?"not("+u()+")":1===f?"("+u()+" || "+u()+")":2===f?i.pop()+" "+i.pop():t(f))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},n=(r,t)=>{if(0 in r){t=e(t);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,f=1,u=!0;;f++,i++){var l,s,d=f<r.length?(typeof r[f])[0]:"";if(i>=t.length||"o"==(s=(typeof(l=t[i]))[0]))return!u||("u"==d?f>o&&!a:""==d!=a);if("u"==s){if(!u||"u"!=d)return!1}else if(u)if(d==s)if(f<=o){if(l!=r[f])return!1}else{if(a?l>r[f]:l<r[f])return!1;l!=r[f]&&(u=!1)}else if("s"!=d&&"n"!=d){if(a||f<=o)return!1;u=!1,f--}else{if(f<=o||s<d!=a)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,f--)}}var c=[],p=c.pop.bind(c);for(i=1;i<r.length;i++){var h=r[i];c.push(1==h?p()|p():2==h?p()&p():h?n(h,t):!p())}return!!p()},o=(e,t)=>{var n=e[t];return Object.keys(n).reduce(((e,t)=>!e||!n[e].loaded&&r(e,t)?t:e),0)},a=(e,r,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(o)+")",i=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},f=e=>(e.loaded=1,e.get()),u=e=>function(r,t,n,o){var a=l.I(r);return a&&a.then?a.then(e.bind(e,r,l.S[r],t,n,o)):e(r,l.S[r],t,n,o)},s=u(((e,t,n,o)=>t&&l.o(t,n)?f(((e,t)=>{var n=e[t];return(t=Object.keys(n).reduce(((e,t)=>!e||r(e,t)?t:e),0))&&n[t]})(t,n)):o())),d=u(((e,r,t,u,s)=>r&&l.o(r,t)?((e,r,t,u)=>{var l=o(e,t);return n(u,l)||i(a(e,t,l,u)),f(e[t][l])})(r,0,t,u):s())),c=u(((e,r,t,i,u)=>r&&l.o(r,t)?((e,r,t,i)=>{var u=o(e,t);if(!n(i,u))throw new Error(a(e,t,u,i));return f(e[t][u])})(r,0,t,i):u())),p={},h={136:()=>c("default","react",[4,18,2,0],(()=>l.e(668).then((()=>()=>l(668))))),27:()=>c("default","react-dom",[4,18,2,0],(()=>l.e(356).then((()=>()=>l(356))))),796:()=>c("default","@reduxjs/toolkit",[1,1,9,7],(()=>l.e(124).then((()=>()=>l(124))))),640:()=>c("default","react-redux",[1,8,1,3],(()=>Promise.all([l.e(508),l.e(27)]).then((()=>()=>l(508))))),424:()=>d("default","@api/category",[4,0,0,1],(()=>l.e(500).then((()=>()=>l(500))))),916:()=>s("default","groups/Module",(()=>l.e(172).then((()=>()=>l(172)))))},v={27:[27],136:[136],408:[424],916:[916],920:[796,640]},m={};l.f.consumes=(e,r)=>{l.o(v,e)&&v[e].forEach((e=>{if(l.o(p,e))return r.push(p[e]);if(!m[e]){var t=r=>{p[e]=0,l.m[e]=t=>{delete l.c[e],t.exports=r()}};m[e]=!0;var n=r=>{delete p[e],l.m[e]=t=>{throw delete l.c[e],r}};try{var o=h[e]();o.then?r.push(p[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))}})(),(()=>{var e={590:0};l.f.j=(r,t)=>{var n=l.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(136|172|27|916|920)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=l.p+l.u(r),i=new Error;l.l(a,(t=>{if(l.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,f]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);f&&f(l)}for(r&&r(t);u<a.length;u++)o=a[u],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkmain=self.webpackChunkmain||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),l(769);
import*as e from"https://80q.ru/mf/groups/remoteEntry.js";import*as r from"https://80q.ru/mf/questions/remoteEntry.js";import*as t from"https://80q.ru/mf/quiz/remoteEntry.js";var n,o,a,i,u,f,l,s,d={9769:(e,r,t)=>{Promise.all([t.e(828),t.e(280),t.e(136),t.e(408),t.e(920),t.e(584)]).then(t.bind(t,1584)).catch((e=>console.error(e)))},6440:r=>{r.exports=e},8600:e=>{e.exports=r},4224:e=>{e.exports=t}},c={};function p(e){var r=c[e];if(void 0!==r)return r.exports;var t=c[e]={exports:{}};return d[e](t,t.exports,p),t.exports}p.m=d,p.c=c,p.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return p.d(r,{a:r}),r},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,p.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var t=Object.create(null);p.r(t);var a={};n=n||[null,o({}),o([]),o(o)];for(var i=2&r&&e;"object"==typeof i&&!~n.indexOf(i);i=o(i))Object.getOwnPropertyNames(i).forEach((r=>a[r]=()=>e[r]));return a.default=()=>e,p.d(t,a),t},p.d=(e,r)=>{for(var t in r)p.o(r,t)&&!p.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},p.f={},p.e=e=>Promise.all(Object.keys(p.f).reduce(((r,t)=>(p.f[t](e,r),r)),[])),p.u=e=>e+"."+{24:"6d9f313f7f735117",124:"3ac92dee55c557dd",136:"00917ce542d932da",172:"08b26defd272a95a",236:"6ca38a155107b033",280:"5b58be69b7094717",356:"a86a99d0ac5333eb",408:"6bff46f709d73f25",493:"0b14af579d07bceb",508:"5711fcbaa2ba79d8",556:"264d8741ebe68349",583:"03ab3219da37f2a1",584:"9ca271c77333d428",616:"7ed2536e0effa87a",668:"35f0c96e8fe2577e",716:"ad0bc430ed9d1d9d",828:"49cf203c96e67b62",920:"9a4d13f0025e944f",964:"b1bff3c9a5baa2e2",976:"c5429ea069164672",988:"1ab48529590e638f"}[e]+".js",p.miniCssF=e=>e+"."+{556:"fefa8891ea90525e",988:"fefa8891ea90525e"}[e]+".css",p.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),p.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a={},i="main:",p.l=(e,r,t,n)=>{if(a[e])a[e].push(r);else{var o,u;if(void 0!==t)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==i+t){o=s;break}}o||(u=!0,(o=document.createElement("script")).type="module",o.charset="utf-8",o.timeout=120,p.nc&&o.setAttribute("nonce",p.nc),o.setAttribute("data-webpack",i+t),o.src=e),a[e]=[r];var d=(r,t)=>{o.onerror=o.onload=null,clearTimeout(c);var n=a[e];if(delete a[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(t))),r)return r(t)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),u&&document.head.appendChild(o)}},p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u={24:[6024],172:[9172],493:[1493]},f={1493:["default","./Module",8600],6024:["default","./Module",4224],9172:["default","./Module",6440]},p.f.remotes=(e,r)=>{p.o(u,e)&&u[e].forEach((e=>{var t=p.R;t||(t=[]);var n=f[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),p.m[e]=()=>{throw r},n.p=0},a=(e,t,a,i,u,f)=>{try{var l=e(t,a);if(!l||!l.then)return u(l,i,f);var s=l.then((e=>u(e,i)),o);if(!f)return s;r.push(n.p=s)}catch(e){o(e)}},i=(e,r,o)=>a(r.get,n[1],t,0,u,o),u=r=>{n.p=1,p.m[e]=e=>{e.exports=r()}};a(p,n[2],0,0,((e,r,t)=>e?a(p.I,n[0],0,e,i,t):o()),1)}}))},(()=>{p.S={};var e={},r={};p.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];p.o(p.S,t)||(p.S[t]={});var a=p.S[t],i="main",u=(e,r,t,n)=>{var o=a[e]=a[e]||{},u=o[r];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(o[r]={get:t,from:i,eager:!!n})},f=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var o=p(e);if(!o)return;var a=e=>e&&e.init&&e.init(p.S[t],n);if(o.then)return l.push(o.then(a,r));var i=a(o);if(i&&i.then)return l.push(i.catch(r))}catch(e){r(e)}},l=[];return"default"===t&&(u("@components","0.0.1",(()=>Promise.all([p.e(136),p.e(976),p.e(556)]).then((()=>()=>p(9976))))),u("@headlessui/react","1.7.18",(()=>Promise.all([p.e(716),p.e(136),p.e(408)]).then((()=>()=>p(5716))))),u("@reduxjs/toolkit","1.9.7",(()=>Promise.all([p.e(828),p.e(124)]).then((()=>()=>p(7124))))),u("@store/groups","0.0.0",(()=>Promise.all([p.e(828),p.e(280),p.e(136),p.e(920),p.e(583)]).then((()=>()=>p(964))))),u("@store/quiz","0.0.0",(()=>Promise.all([p.e(828),p.e(280),p.e(136),p.e(920),p.e(236)]).then((()=>()=>p(6616))))),u("react-dom","18.2.0",(()=>Promise.all([p.e(356),p.e(136)]).then((()=>()=>p(2356))))),u("react-redux","8.1.3",(()=>Promise.all([p.e(508),p.e(136),p.e(408)]).then((()=>()=>p(2508))))),u("react","18.2.0",(()=>p.e(668).then((()=>()=>p(5668))))),f(6440),f(8600),f(4224)),l.length?e[t]=Promise.all(l).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),p.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},t=e=>{var r=e[0],n="";if(1===e.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(u=e[a]))[0]?"-":(o>0?".":"")+(o=2,u);return n}var i=[];for(a=1;a<e.length;a++){var u=e[a];i.push(0===u?"not("+f()+")":1===u?"("+f()+" || "+f()+")":2===u?i.pop()+" "+i.pop():t(u))}return f();function f(){return i.pop().replace(/^\((.+)\)$/,"$1")}},n=(r,t)=>{if(0 in r){t=e(t);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,u=1,f=!0;;u++,i++){var l,s,d=u<r.length?(typeof r[u])[0]:"";if(i>=t.length||"o"==(s=(typeof(l=t[i]))[0]))return!f||("u"==d?u>o&&!a:""==d!=a);if("u"==s){if(!f||"u"!=d)return!1}else if(f)if(d==s)if(u<=o){if(l!=r[u])return!1}else{if(a?l>r[u]:l<r[u])return!1;l!=r[u]&&(f=!1)}else if("s"!=d&&"n"!=d){if(a||u<=o)return!1;f=!1,u--}else{if(u<=o||s<d!=a)return!1;f=!1}else"s"!=d&&"n"!=d&&(f=!1,u--)}}var c=[],p=c.pop.bind(c);for(i=1;i<r.length;i++){var h=r[i];c.push(1==h?p()|p():2==h?p()&p():h?n(h,t):!p())}return!!p()},o=(e,t)=>{var n=e[t];return Object.keys(n).reduce(((e,t)=>!e||!n[e].loaded&&r(e,t)?t:e),0)},a=(e,r,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(o)+")",i=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},u=e=>(e.loaded=1,e.get()),f=e=>function(r,t,n,o){var a=p.I(r);return a&&a.then?a.then(e.bind(e,r,p.S[r],t,n,o)):e(r,p.S[r],t,n,o)},l=f(((e,t,n,o)=>t&&p.o(t,n)?u(((e,t)=>{var n=e[t];return(t=Object.keys(n).reduce(((e,t)=>!e||r(e,t)?t:e),0))&&n[t]})(t,n)):o())),s=f(((e,r,t,f,l)=>r&&p.o(r,t)?((e,r,t,f)=>{var l=o(e,t);return n(f,l)||i(a(e,t,l,f)),u(e[t][l])})(r,0,t,f):l())),d=f(((e,r,t,i,f)=>r&&p.o(r,t)?((e,r,t,i)=>{var f=o(e,t);if(!n(i,f))throw new Error(a(e,t,f,i));return u(e[t][f])})(r,0,t,i):f())),c={},h={9136:()=>d("default","react",[4,18,2,0],(()=>p.e(668).then((()=>()=>p(5668))))),408:()=>d("default","react-dom",[4,18,2,0],(()=>p.e(356).then((()=>()=>p(2356))))),2796:()=>d("default","@reduxjs/toolkit",[1,1,9,7],(()=>p.e(124).then((()=>()=>p(7124))))),9640:()=>d("default","react-redux",[1,8,1,3],(()=>Promise.all([p.e(508),p.e(408)]).then((()=>()=>p(2508))))),5420:()=>l("default","@store/quiz",(()=>p.e(616).then((()=>()=>p(6616))))),6184:()=>s("default","@components",[4,0,0,1],(()=>Promise.all([p.e(976),p.e(988)]).then((()=>()=>p(9976))))),9804:()=>l("default","@store/groups",(()=>p.e(964).then((()=>()=>p(964))))),8376:()=>d("default","@headlessui/react",[1,1,7,18],(()=>Promise.all([p.e(716),p.e(408)]).then((()=>()=>p(5716)))))},m={136:[9136],408:[408],584:[5420,6184,9804],920:[2796,9640],976:[8376]},v={};p.f.consumes=(e,r)=>{p.o(m,e)&&m[e].forEach((e=>{if(p.o(c,e))return r.push(c[e]);if(!v[e]){var t=r=>{c[e]=0,p.m[e]=t=>{delete p.c[e],t.exports=r()}};v[e]=!0;var n=r=>{delete c[e],p.m[e]=t=>{throw delete p.c[e],r}};try{var o=h[e]();o.then?r.push(c[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))}})(),l=e=>new Promise(((r,t)=>{var n=p.miniCssF(e),o=p.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===r)return i}})(n,o))return r();((e,r,t,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||r,f=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=i,f.request=u,o.parentNode.removeChild(o),n(f)}},o.href=r,document.head.appendChild(o)})(e,o,r,t)})),s={590:0},p.f.miniCss=(e,r)=>{s[e]?r.push(s[e]):0!==s[e]&&{556:1,988:1}[e]&&r.push(s[e]=l(e).then((()=>{s[e]=0}),(r=>{throw delete s[e],r})))},(()=>{var e={590:0};p.f.j=(r,t)=>{var n=p.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(136|172|24|408|493|920|988)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=p.p+p.u(r),i=new Error;p.l(a,(t=>{if(p.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,u]=t,f=0;if(a.some((r=>0!==e[r]))){for(n in i)p.o(i,n)&&(p.m[n]=i[n]);u&&u(p)}for(r&&r(t);f<a.length;f++)o=a[f],p.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkmain=self.webpackChunkmain||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),p(9769);
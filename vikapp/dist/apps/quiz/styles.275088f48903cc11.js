var e,r,t,n,o,a,i,l,u,f,s,d,p,c,h,m,v,g={380:()=>{}},b={};function y(e){var r=b[e];if(void 0!==r)return r.exports;var t=b[e]={exports:{}};return g[e](t,t.exports,y),t.exports}y.m=g,y.c=b,y.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return y.d(r,{a:r}),r},y.d=(e,r)=>{for(var t in r)y.o(r,t)&&!y.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},y.f={},y.e=e=>Promise.all(Object.keys(y.f).reduce(((r,t)=>(y.f[t](e,r),r)),[])),y.u=e=>e+"."+{52:"f1c1a2d1ee13ae95",124:"b01815e497afe87c",136:"7df8f8c4f2f88ca3",320:"ae0d03cadeed0478",356:"3fd9c1e0d5525928",408:"36fce51860b62ea6",508:"9645c247fdb6cfed",668:"9ba4e56082131f1d",716:"275d417d2929760c",828:"8372dd95309dee28"}[e]+".js",y.miniCssF=e=>e+".ad284c8c22716d5e.css",y.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),y.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="quiz:",y.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var s=u[f];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+o){i=s;break}}i||(l=!0,(i=document.createElement("script")).type="module",i.charset="utf-8",i.timeout=120,y.nc&&i.setAttribute("nonce",y.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}},y.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{y.S={};var e={},r={};y.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];y.o(y.S,t)||(y.S[t]={});var a=y.S[t],i="quiz",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("@components","0.0.1",(()=>Promise.all([y.e(136),y.e(320),y.e(52)]).then((()=>()=>y(320))))),l("@headlessui/react","1.7.18",(()=>Promise.all([y.e(716),y.e(136),y.e(408)]).then((()=>()=>y(716))))),l("@reduxjs/toolkit","1.9.7",(()=>Promise.all([y.e(828),y.e(124)]).then((()=>()=>y(124))))),l("react-dom","18.2.0",(()=>Promise.all([y.e(356),y.e(136)]).then((()=>()=>y(356))))),l("react-redux","8.1.3",(()=>Promise.all([y.e(508),y.e(136),y.e(408)]).then((()=>()=>y(508))))),l("react","18.2.0",(()=>y.e(668).then((()=>()=>y(668)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),y.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():o(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var f,s,d=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(s=(typeof(f=r[i]))[0]))return!u||("u"==d?l>n&&!o:""==d!=o);if("u"==s){if(!u||"u"!=d)return!1}else if(u)if(d==s)if(l<=n){if(f!=e[l])return!1}else{if(o?f>e[l]:f<e[l])return!1;f!=e[l]&&(u=!1)}else if("s"!=d&&"n"!=d){if(o||l<=n)return!1;u=!1,l--}else{if(l<=n||s<d!=o)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,l--)}}var p=[],c=p.pop.bind(p);for(i=1;i<e.length;i++){var h=e[i];p.push(1==h?c()|c():2==h?c()&c():h?a(h,r):!c())}return!!c()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",u=(e,r,t,n)=>{var o=i(e,t);if(!a(n,o))throw new Error(l(e,t,o,n));return f(e[t][o])},f=e=>(e.loaded=1,e.get()),s=(e=>function(r,t,n,o){var a=y.I(r);return a&&a.then?a.then(e.bind(e,r,y.S[r],t,n,o)):e(0,y.S[r],t,n,o)})(((e,r,t,n,o)=>r&&y.o(r,t)?u(r,0,t,n):o())),d={},p={136:()=>s("default","react",[4,18,2,0],(()=>y.e(668).then((()=>()=>y(668))))),376:()=>s("default","@headlessui/react",[1,1,7,18],(()=>Promise.all([y.e(716),y.e(408)]).then((()=>()=>y(716))))),408:()=>s("default","react-dom",[4,18,2,0],(()=>y.e(356).then((()=>()=>y(356)))))},c={136:[136],320:[376],408:[408]},h={},y.f.consumes=(e,r)=>{y.o(c,e)&&c[e].forEach((e=>{if(y.o(d,e))return r.push(d[e]);if(!h[e]){var t=r=>{d[e]=0,y.m[e]=t=>{delete y.c[e],t.exports=r()}};h[e]=!0;var n=r=>{delete d[e],y.m[e]=t=>{throw delete y.c[e],r}};try{var o=p[e]();o.then?r.push(d[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))},m=e=>new Promise(((r,t)=>{var n=y.miniCssF(e),o=y.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===r)return i}})(n,o))return r();((e,r,t,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,o.parentNode.removeChild(o),n(u)}},o.href=r,document.head.appendChild(o)})(e,o,r,t)})),v={176:0},y.f.miniCss=(e,r)=>{v[e]?r.push(v[e]):0!==v[e]&&{52:1}[e]&&r.push(v[e]=m(e).then((()=>{v[e]=0}),(r=>{throw delete v[e],r})))},(()=>{var e={176:0};y.f.j=(r,t)=>{var n=y.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(136|408)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=y.p+y.u(r),i=new Error;y.l(a,(t=>{if(y.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,l]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in i)y.o(i,n)&&(y.m[n]=i[n]);l&&l(y)}for(r&&r(t);u<a.length;u++)o=a[u],y.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkquiz=self.webpackChunkquiz||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),y(380);
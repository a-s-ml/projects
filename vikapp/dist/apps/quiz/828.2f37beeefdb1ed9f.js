(self.webpackChunkquiz=self.webpackChunkquiz||[]).push([[828],{392:(e,t,r)=>{r.d(t,{Aj:()=>u});var n="NOT_FOUND",o=function(e,t){return e===t};function u(e,t){var r,u,i="object"==typeof t?t:{equalityCheck:t},a=i.equalityCheck,c=void 0===a?o:a,f=i.maxSize,l=void 0===f?1:f,p=i.resultEqualityCheck,s=function(e){return function(t,r){if(null===t||null===r||t.length!==r.length)return!1;for(var n=t.length,o=0;o<n;o++)if(!e(t[o],r[o]))return!1;return!0}}(c),v=1===l?(r=s,{get:function(e){return u&&r(u.key,e)?u.value:n},put:function(e,t){u={key:e,value:t}},getEntries:function(){return u?[u]:[]},clear:function(){u=void 0}}):function(e,t){var r=[];function o(e){var o=r.findIndex((function(r){return t(e,r.key)}));if(o>-1){var u=r[o];return o>0&&(r.splice(o,1),r.unshift(u)),u.value}return n}return{get:o,put:function(t,u){o(t)===n&&(r.unshift({key:t,value:u}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(l,s);function h(){var t=v.get(arguments);if(t===n){if(t=e.apply(null,arguments),p){var r=v.getEntries().find((function(e){return p(e.value,t)}));r&&(t=r.value)}v.put(arguments,t)}return t}return h.clearCache=function(){return v.clear()},h}},884:(e,t,r)=>{function n(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(e){return!!e&&!!e[L]}function u(e){var t;return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===Q}(e)||Array.isArray(e)||!!e[H]||!!(null===(t=e.constructor)||void 0===t?void 0:t[H])||v(e)||h(e))}function i(e){return o(e)||n(23,e),e[L].t}function a(e,t,r){void 0===r&&(r=!1),0===c(e)?(r?Object.keys:V)(e).forEach((function(n){r&&"symbol"==typeof n||t(n,e[n],e)})):e.forEach((function(r,n){return t(n,r,e)}))}function c(e){var t=e[L];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:v(e)?2:h(e)?3:0}function f(e,t){return 2===c(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function l(e,t){return 2===c(e)?e.get(t):e[t]}function p(e,t,r){var n=c(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function s(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function v(e){return J&&e instanceof Map}function h(e){return T&&e instanceof Set}function y(e){return e.o||e.t}function d(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Y(e);delete t[L];for(var r=V(t),n=0;n<r.length;n++){var o=r[n],u=t[o];!1===u.writable&&(u.writable=!0,u.configurable=!0),(u.get||u.set)&&(t[o]={configurable:!0,writable:!0,enumerable:u.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function g(e,t){return void 0===t&&(t=!1),m(e)||o(e)||!u(e)||(c(e)>1&&(e.set=e.add=e.clear=e.delete=b),Object.freeze(e),t&&a(e,(function(e,t){return g(t,!0)}),!0)),e}function b(){n(2)}function m(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function P(e){var t=Z[e];return t||n(18,e),t}function O(e,t){Z[e]||(Z[e]=t)}function w(){return $}function j(e,t){t&&(P("Patches"),e.u=[],e.s=[],e.v=t)}function A(e){k(e),e.p.forEach(E),e.p=null}function k(e){e===$&&($=e.l)}function S(e){return $={p:[],l:$,h:e,m:!0,_:0}}function E(e){var t=e[L];0===t.i||1===t.i?t.j():t.g=!0}function D(e,t){t._=t.p.length;var r=t.p[0],o=void 0!==e&&e!==r;return t.h.O||P("ES5").S(t,e,o),o?(r[L].P&&(A(t),n(4)),u(e)&&(e=R(t,e),t.l||x(t,e)),t.u&&P("Patches").M(r[L].t,e,t.u,t.s)):e=R(t,r,[]),A(t),t.u&&t.v(t.u,t.s),e!==B?e:void 0}function R(e,t,r){if(m(t))return t;var n=t[L];if(!n)return a(t,(function(o,u){return _(e,n,t,o,u,r)}),!0),t;if(n.A!==e)return t;if(!n.P)return x(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=d(n.k):n.o,u=o,i=!1;3===n.i&&(u=new Set(o),o.clear(),i=!0),a(u,(function(t,u){return _(e,n,o,t,u,r,i)})),x(e,o,!1),r&&e.u&&P("Patches").N(n,r,e.u,e.s)}return n.o}function _(e,t,r,n,i,a,c){if(o(i)){var l=R(e,i,a&&t&&3!==t.i&&!f(t.R,n)?a.concat(n):void 0);if(p(r,n,l),!o(l))return;e.m=!1}else c&&r.add(i);if(u(i)&&!m(i)){if(!e.h.D&&e._<1)return;R(e,i),t&&t.A.l||x(e,i)}}function x(e,t,r){void 0===r&&(r=!1),!e.l&&e.h.D&&e.m&&g(t,r)}function N(e,t){var r=e[L];return(r?y(r):e)[t]}function z(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function F(e){e.P||(e.P=!0,e.l&&F(e.l))}function M(e){e.o||(e.o=d(e.t))}function C(e,t,r){var n=v(t)?P("MapSet").F(t,r):h(t)?P("MapSet").T(t,r):e.O?function(e,t){var r=Array.isArray(e),n={i:r?1:0,A:t?t.A:w(),P:!1,I:!1,R:{},l:t,t:e,k:null,o:null,j:null,C:!1},o=n,u=ee;r&&(o=[n],u=te);var i=Proxy.revocable(o,u),a=i.revoke,c=i.proxy;return n.k=c,n.j=a,c}(t,r):P("ES5").J(t,r);return(r?r.A:w()).p.push(n),n}function I(e){return o(e)||n(22,e),function e(t){if(!u(t))return t;var r,n=t[L],o=c(t);if(n){if(!n.P&&(n.i<4||!P("ES5").K(n)))return n.t;n.I=!0,r=K(t,o),n.I=!1}else r=K(t,o);return a(r,(function(t,o){n&&l(n.t,t)===o||p(r,t,e(o))})),3===o?new Set(r):r}(e)}function K(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return d(e)}function q(){function e(e,t){var r=u[e];return r?r.enumerable=t:u[e]=r={configurable:!0,enumerable:t,get:function(){var t=this[L];return ee.get(t,e)},set:function(t){var r=this[L];ee.set(r,e,t)}},r}function t(e){for(var t=e.length-1;t>=0;t--){var o=e[t][L];if(!o.P)switch(o.i){case 5:n(o)&&F(o);break;case 4:r(o)&&F(o)}}}function r(e){for(var t=e.t,r=e.k,n=V(r),o=n.length-1;o>=0;o--){var u=n[o];if(u!==L){var i=t[u];if(void 0===i&&!f(t,u))return!0;var a=r[u],c=a&&a[L];if(c?c.t!==i:!s(a,i))return!0}}var l=!!t[L];return n.length!==V(t).length+(l?0:1)}function n(e){var t=e.k;if(t.length!==e.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);if(r&&!r.get)return!0;for(var n=0;n<t.length;n++)if(!t.hasOwnProperty(n))return!0;return!1}var u={};O("ES5",{J:function(t,r){var n=Array.isArray(t),o=function(t,r){if(t){for(var n=Array(r.length),o=0;o<r.length;o++)Object.defineProperty(n,""+o,e(o,!0));return n}var u=Y(r);delete u[L];for(var i=V(u),a=0;a<i.length;a++){var c=i[a];u[c]=e(c,t||!!u[c].enumerable)}return Object.create(Object.getPrototypeOf(r),u)}(n,t),u={i:n?5:4,A:r?r.A:w(),P:!1,I:!1,R:{},l:r,t,k:o,o:null,g:!1,C:!1};return Object.defineProperty(o,L,{value:u,writable:!0}),o},S:function(e,r,u){u?o(r)&&r[L].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var r=t[L];if(r){var o=r.t,u=r.k,i=r.R,c=r.i;if(4===c)a(u,(function(t){t!==L&&(void 0!==o[t]||f(o,t)?i[t]||e(u[t]):(i[t]=!0,F(r)))})),a(o,(function(e){void 0!==u[e]||f(u,e)||(i[e]=!1,F(r))}));else if(5===c){if(n(r)&&(F(r),i.length=!0),u.length<o.length)for(var l=u.length;l<o.length;l++)i[l]=!1;else for(var p=o.length;p<u.length;p++)i[p]=!0;for(var s=Math.min(u.length,o.length),v=0;v<s;v++)u.hasOwnProperty(v)||(i[v]=!0),void 0===i[v]&&e(u[v])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?r(e):n(e)}})}function W(){function e(t){if(!u(t))return t;if(Array.isArray(t))return t.map(e);if(v(t))return new Map(Array.from(t.entries()).map((function(t){return[t[0],e(t[1])]})));if(h(t))return new Set(Array.from(t).map(e));var r=Object.create(Object.getPrototypeOf(t));for(var n in t)r[n]=e(t[n]);return f(t,H)&&(r[H]=t[H]),r}function t(t){return o(t)?e(t):t}var r="add";O("Patches",{$:function(t,o){return o.forEach((function(o){for(var u=o.path,i=o.op,a=t,f=0;f<u.length-1;f++){var p=c(a),s=u[f];"string"!=typeof s&&"number"!=typeof s&&(s=""+s),0!==p&&1!==p||"__proto__"!==s&&"constructor"!==s||n(24),"function"==typeof a&&"prototype"===s&&n(24),"object"!=typeof(a=l(a,s))&&n(15,u.join("/"))}var v=c(a),h=e(o.value),y=u[u.length-1];switch(i){case"replace":switch(v){case 2:return a.set(y,h);case 3:n(16);default:return a[y]=h}case r:switch(v){case 1:return"-"===y?a.push(h):a.splice(y,0,h);case 2:return a.set(y,h);case 3:return a.add(h);default:return a[y]=h}case"remove":switch(v){case 1:return a.splice(y,1);case 2:return a.delete(y);case 3:return a.delete(o.value);default:return delete a[y]}default:n(17,i)}})),t},N:function(e,n,o,u){switch(e.i){case 0:case 4:case 2:return function(e,n,o,u){var i=e.t,c=e.o;a(e.R,(function(e,a){var p=l(i,e),s=l(c,e),v=a?f(i,e)?"replace":r:"remove";if(p!==s||"replace"!==v){var h=n.concat(e);o.push("remove"===v?{op:v,path:h}:{op:v,path:h,value:s}),u.push(v===r?{op:"remove",path:h}:"remove"===v?{op:r,path:h,value:t(p)}:{op:"replace",path:h,value:t(p)})}}))}(e,n,o,u);case 5:case 1:return function(e,n,o,u){var i=e.t,a=e.R,c=e.o;if(c.length<i.length){var f=[c,i];i=f[0],c=f[1];var l=[u,o];o=l[0],u=l[1]}for(var p=0;p<i.length;p++)if(a[p]&&c[p]!==i[p]){var s=n.concat([p]);o.push({op:"replace",path:s,value:t(c[p])}),u.push({op:"replace",path:s,value:t(i[p])})}for(var v=i.length;v<c.length;v++){var h=n.concat([v]);o.push({op:r,path:h,value:t(c[v])})}i.length<c.length&&u.push({op:"replace",path:n.concat(["length"]),value:i.length})}(e,n,o,u);case 3:return function(e,t,n,o){var u=e.t,i=e.o,a=0;u.forEach((function(e){if(!i.has(e)){var u=t.concat([a]);n.push({op:"remove",path:u,value:e}),o.unshift({op:r,path:u,value:e})}a++})),a=0,i.forEach((function(e){if(!u.has(e)){var i=t.concat([a]);n.push({op:r,path:i,value:e}),o.unshift({op:"remove",path:i,value:e})}a++}))}(e,n,o,u)}},M:function(e,t,r,n){r.push({op:"replace",path:[],value:t===B?void 0:t}),n.push({op:"replace",path:[],value:e})}})}r.d(t,{GU:()=>W,WK:()=>i,Wl:()=>o,cp:()=>ae,eq:()=>ue,kr:()=>g,oz:()=>ie,sx:()=>I,uG:()=>q,yi:()=>u});var U,$,G="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),J="undefined"!=typeof Map,T="undefined"!=typeof Set,X="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,B=G?Symbol.for("immer-nothing"):((U={})["immer-nothing"]=!0,U),H=G?Symbol.for("immer-draftable"):"__$immer_draftable",L=G?Symbol.for("immer-state"):"__$immer_state",Q=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),V="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Y=Object.getOwnPropertyDescriptors||function(e){var t={};return V(e).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)})),t},Z={},ee={get:function(e,t){if(t===L)return e;var r=y(e);if(!f(r,t))return function(e,t,r){var n,o=z(t,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(e.k):void 0}(e,r,t);var n=r[t];return e.I||!u(n)?n:n===N(e.t,t)?(M(e),e.o[t]=C(e.A.h,n,e)):n},has:function(e,t){return t in y(e)},ownKeys:function(e){return Reflect.ownKeys(y(e))},set:function(e,t,r){var n=z(y(e),t);if(null==n?void 0:n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=N(y(e),t),u=null==o?void 0:o[L];if(u&&u.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(s(r,o)&&(void 0!==r||f(e.t,t)))return!0;M(e),F(e)}return e.o[t]===r&&(void 0!==r||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return void 0!==N(e.t,t)||t in e.t?(e.R[t]=!1,M(e),F(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=y(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){n(12)}},te={};a(ee,(function(e,t){te[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),te.deleteProperty=function(e,t){return te.set.call(this,e,t,void 0)},te.set=function(e,t,r){return ee.set.call(this,e[0],t,r,e[0])};var re=function(){function e(e){var t=this;this.O=X,this.D=!0,this.produce=function(e,r,o){if("function"==typeof e&&"function"!=typeof r){var i=r;r=e;var a=t;return function(e){var t=this;void 0===e&&(e=i);for(var n=arguments.length,o=Array(n>1?n-1:0),u=1;u<n;u++)o[u-1]=arguments[u];return a.produce(e,(function(e){var n;return(n=r).call.apply(n,[t,e].concat(o))}))}}var c;if("function"!=typeof r&&n(6),void 0!==o&&"function"!=typeof o&&n(7),u(e)){var f=S(t),l=C(t,e,void 0),p=!0;try{c=r(l),p=!1}finally{p?A(f):k(f)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(e){return j(f,o),D(e,f)}),(function(e){throw A(f),e})):(j(f,o),D(c,f))}if(!e||"object"!=typeof e){if(void 0===(c=r(e))&&(c=e),c===B&&(c=void 0),t.D&&g(c,!0),o){var s=[],v=[];P("Patches").M(e,c,s,v),o(s,v)}return c}n(21,e)},this.produceWithPatches=function(e,r){if("function"==typeof e)return function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),u=1;u<n;u++)o[u-1]=arguments[u];return t.produceWithPatches(r,(function(t){return e.apply(void 0,[t].concat(o))}))};var n,o,u=t.produce(e,r,(function(e,t){n=e,o=t}));return"undefined"!=typeof Promise&&u instanceof Promise?u.then((function(e){return[e,n,o]})):[u,n,o]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){u(e)||n(8),o(e)&&(e=I(e));var t=S(this),r=C(this,e,void 0);return r[L].C=!0,k(t),r},t.finishDraft=function(e,t){var r=(e&&e[L]).A;return j(r,t),D(void 0,r)},t.setAutoFreeze=function(e){this.D=e},t.setUseProxies=function(e){e&&!X&&n(20),this.O=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));var u=P("Patches").$;return o(e)?u(e,t):this.produce(e,(function(e){return u(e,t)}))},e}(),ne=new re,oe=ne.produce,ue=ne.produceWithPatches.bind(ne),ie=(ne.setAutoFreeze.bind(ne),ne.setUseProxies.bind(ne),ne.applyPatches.bind(ne));ne.createDraft.bind(ne),ne.finishDraft.bind(ne);const ae=oe}}]);
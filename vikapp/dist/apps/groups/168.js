/*! For license information please see 168.js.LICENSE.txt */
(self.webpackChunkgroups=self.webpackChunkgroups||[]).push([[168],{360:(e,t,n)=>{var r=n(232),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function a(e){return r.isMemo(e)?c:s[e.$$typeof]||o}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=c;var i=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(y){var o=d(n);o&&o!==y&&e(t,o,r)}var c=f(n);l&&(c=c.concat(l(n)));for(var s=a(t),m=a(n),b=0;b<c.length;++b){var S=c[b];if(!(u[S]||r&&r[S]||m&&m[S]||s&&s[S])){var v=p(n,S);try{i(t,S,v)}catch(e){}}}}return t}},204:(e,t)=>{var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,u=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,a=n?Symbol.for("react.provider"):60109,i=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116,S=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,h=n?Symbol.for("react.responder"):60118,g=n?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case l:case u:case s:case c:case d:return e;default:switch(e=e&&e.$$typeof){case i:case p:case b:case m:case a:return e;default:return t}}case o:return t}}}function P(e){return w(e)===l}t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=i,t.ContextProvider=a,t.Element=r,t.ForwardRef=p,t.Fragment=u,t.Lazy=b,t.Memo=m,t.Portal=o,t.Profiler=s,t.StrictMode=c,t.Suspense=d,t.isAsyncMode=function(e){return P(e)||w(e)===f},t.isConcurrentMode=P,t.isContextConsumer=function(e){return w(e)===i},t.isContextProvider=function(e){return w(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===u},t.isLazy=function(e){return w(e)===b},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===o},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===c},t.isSuspense=function(e){return w(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===u||e===l||e===s||e===c||e===d||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===a||e.$$typeof===i||e.$$typeof===p||e.$$typeof===v||e.$$typeof===h||e.$$typeof===g||e.$$typeof===S)},t.typeOf=w},232:(e,t,n)=>{e.exports=n(204)},104:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),i=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),y=Symbol.for("react.lazy");Symbol.for("react.offscreen");Symbol.for("react.module.reference"),t.isContextConsumer=function(e){return function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case o:case c:case u:case l:case p:return e;default:switch(e=e&&e.$$typeof){case i:case a:case f:case y:case d:case s:return e;default:return t}}case r:return t}}}(e)===a}},160:(e,t,n)=>{e.exports=n(104)},788:(e,t,n)=>{n.r(t),n.d(t,{Provider:()=>U,ReactReduxContext:()=>p,batch:()=>u.unstable_batchedUpdates,connect:()=>L,createDispatchHook:()=>I,createSelectorHook:()=>v,createStoreHook:()=>H,shallowEqual:()=>F,useDispatch:()=>G,useSelector:()=>h,useStore:()=>A});var r=n(432),o=n(412),u=n(408);let c=function(e){e()};const s=()=>c;var a=n(136);const i=Symbol.for("react-redux-context"),f="undefined"!=typeof globalThis?globalThis:{};function l(){var e;if(!a.createContext)return{};const t=null!=(e=f[i])?e:f[i]=new Map;let n=t.get(a.createContext);return n||(n=a.createContext(null),t.set(a.createContext,n)),n}const p=l();function d(e=p){return function(){return(0,a.useContext)(e)}}const y=d(),m=()=>{throw new Error("uSES not initialized!")};let b=m;const S=(e,t)=>e===t;function v(e=p){const t=e===p?y:d(e);return function(e,n={}){const{equalityFn:r=S,stabilityCheck:o,noopCheck:u}="function"==typeof n?{equalityFn:n}:n,{store:c,subscription:s,getServerState:i,stabilityCheck:f,noopCheck:l}=t(),p=((0,a.useRef)(!0),(0,a.useCallback)({[e.name]:t=>e(t)}[e.name],[e,f,o])),d=b(s.addNestedSub,c.getState,i||c.getState,p,r);return(0,a.useDebugValue)(d),d}}const h=v();function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var P=n(360),x=n.n(P),C=n(160);const O=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function E(e,t,n,r,{areStatesEqual:o,areOwnPropsEqual:u,areStatePropsEqual:c}){let s,a,i,f,l,p=!1;return function(d,y){return p?function(p,d){const y=!u(d,a),m=!o(p,s,d,a);return s=p,a=d,y&&m?(i=e(s,a),t.dependsOnOwnProps&&(f=t(r,a)),l=n(i,f,a),l):y?(e.dependsOnOwnProps&&(i=e(s,a)),t.dependsOnOwnProps&&(f=t(r,a)),l=n(i,f,a),l):m?function(){const t=e(s,a),r=!c(t,i);return i=t,r&&(l=n(i,f,a)),l}():l}(d,y):(s=d,a=y,i=e(s,a),f=t(r,a),l=n(i,f,a),p=!0,l)}}function $(e){return function(t){const n=e(t);function r(){return n}return r.dependsOnOwnProps=!1,r}}function M(e){return e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function j(e,t){return function(t,{displayName:n}){const r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e,void 0)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=M(e);let o=r(t,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=M(o),o=r(t,n)),o},r}}function k(e,t){return(n,r)=>{throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`)}}function T(e,t,n){return g({},n,e,t)}const R={notify(){},get:()=>[]};function N(e,t){let n,r=R,o=0,u=!1;function c(){f.onStateChange&&f.onStateChange()}function a(){o++,n||(n=t?t.addNestedSub(c):e.subscribe(c),r=function(){const e=s();let t=null,n=null;return{clear(){t=null,n=null},notify(){e((()=>{let e=t;for(;e;)e.callback(),e=e.next}))},get(){let e=[],n=t;for(;n;)e.push(n),n=n.next;return e},subscribe(e){let r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}function i(){o--,n&&0===o&&(n(),n=void 0,r.clear(),r=R)}const f={addNestedSub:function(e){a();const t=r.subscribe(e);let n=!1;return()=>{n||(n=!0,t(),i())}},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:c,isSubscribed:function(){return u},trySubscribe:function(){u||(u=!0,a())},tryUnsubscribe:function(){u&&(u=!1,i())},getListeners:()=>r};return f}const q="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?a.useLayoutEffect:a.useEffect;function D(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function F(e,t){if(D(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!D(e[n[r]],t[n[r]]))return!1;return!0}const _=["reactReduxForwardedRef"];let B=m;const V=[null,null];function W(e,t,n,r,o,u){e.current=r,n.current=!1,o.current&&(o.current=null,u())}function z(e,t){return e===t}const L=function(e,t,n,{pure:r,areStatesEqual:o=z,areOwnPropsEqual:u=F,areStatePropsEqual:c=F,areMergedPropsEqual:s=F,forwardRef:i=!1,context:f=p}={}){const l=f,d=function(e){return e?"function"==typeof e?j(e):k(e,"mapStateToProps"):$((()=>({})))}(e),y=function(e){return e&&"object"==typeof e?$((t=>function(e,t){const n={};for(const r in e){const o=e[r];"function"==typeof o&&(n[r]=(...e)=>t(o(...e)))}return n}(e,t))):e?"function"==typeof e?j(e):k(e,"mapDispatchToProps"):$((e=>({dispatch:e})))}(t),m=function(e){return e?"function"==typeof e?function(e){return function(t,{displayName:n,areMergedPropsEqual:r}){let o,u=!1;return function(t,n,c){const s=e(t,n,c);return u?r(s,o)||(o=s):(u=!0,o=s),o}}}(e):k(e,"mergeProps"):()=>T}(n),b=Boolean(e);return e=>{const t=e.displayName||e.name||"Component",n=`Connect(${t})`,r={shouldHandleStateChanges:b,displayName:n,wrappedComponentName:t,WrappedComponent:e,initMapStateToProps:d,initMapDispatchToProps:y,initMergeProps:m,areStatesEqual:o,areStatePropsEqual:c,areOwnPropsEqual:u,areMergedPropsEqual:s};function f(t){const[n,o,u]=a.useMemo((()=>{const{reactReduxForwardedRef:e}=t,n=w(t,_);return[t.context,e,n]}),[t]),c=a.useMemo((()=>n&&n.Consumer&&(0,C.isContextConsumer)(a.createElement(n.Consumer,null))?n:l),[n,l]),s=a.useContext(c),i=Boolean(t.store)&&Boolean(t.store.getState)&&Boolean(t.store.dispatch),f=Boolean(s)&&Boolean(s.store),p=i?t.store:s.store,d=f?s.getServerState:p.getState,y=a.useMemo((()=>function(e,t){let{initMapStateToProps:n,initMapDispatchToProps:r,initMergeProps:o}=t,u=w(t,O);return E(n(e,u),r(e,u),o(e,u),e,u)}(p.dispatch,r)),[p]),[m,S]=a.useMemo((()=>{if(!b)return V;const e=N(p,i?void 0:s.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[p,i,s]),v=a.useMemo((()=>i?s:g({},s,{subscription:m})),[i,s,m]),h=a.useRef(),P=a.useRef(u),x=a.useRef(),$=a.useRef(!1),M=(a.useRef(!1),a.useRef(!1)),j=a.useRef();q((()=>(M.current=!0,()=>{M.current=!1})),[]);const k=a.useMemo((()=>()=>x.current&&u===P.current?x.current:y(p.getState(),u)),[p,u]),T=a.useMemo((()=>e=>m?function(e,t,n,r,o,u,c,s,a,i,f){if(!e)return()=>{};let l=!1,p=null;const d=()=>{if(l||!s.current)return;const e=t.getState();let n,d;try{n=r(e,o.current)}catch(e){d=e,p=e}d||(p=null),n===u.current?c.current||i():(u.current=n,a.current=n,c.current=!0,f())};return n.onStateChange=d,n.trySubscribe(),d(),()=>{if(l=!0,n.tryUnsubscribe(),n.onStateChange=null,p)throw p}}(b,p,m,y,P,h,$,M,x,S,e):()=>{}),[m]);var R,D;let F;R=W,D=[P,h,$,u,x,S],q((()=>R(...D)),undefined);try{F=B(T,k,d?()=>y(d(),u):k)}catch(e){throw j.current&&(e.message+=`\nThe error may be correlated with this previous error:\n${j.current.stack}\n\n`),e}q((()=>{j.current=void 0,x.current=void 0,h.current=F}));const z=a.useMemo((()=>a.createElement(e,g({},F,{ref:o}))),[o,e,F]);return a.useMemo((()=>b?a.createElement(c.Provider,{value:v},z):z),[c,z,v])}const p=a.memo(f);if(p.WrappedComponent=e,p.displayName=f.displayName=n,i){const t=a.forwardRef((function(e,t){return a.createElement(p,g({},e,{reactReduxForwardedRef:t}))}));return t.displayName=n,t.WrappedComponent=e,x()(t,e)}return x()(p,e)}},U=function({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",noopCheck:u="once"}){const c=a.useMemo((()=>{const t=N(e);return{store:e,subscription:t,getServerState:r?()=>r:void 0,stabilityCheck:o,noopCheck:u}}),[e,r,o,u]),s=a.useMemo((()=>e.getState()),[e]);q((()=>{const{subscription:t}=c;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),s!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}}),[c,s]);const i=t||p;return a.createElement(i.Provider,{value:c},n)};function H(e=p){const t=e===p?y:d(e);return function(){const{store:e}=t();return e}}const A=H();function I(e=p){const t=e===p?A:H(e);return function(){return t().dispatch}}const G=I();var J,K;J=o.useSyncExternalStoreWithSelector,b=J,(e=>{B=e})(r.useSyncExternalStore),K=u.unstable_batchedUpdates,c=K},510:(e,t,n)=>{var r=n(136),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=r.useState,c=r.useEffect,s=r.useLayoutEffect,a=r.useDebugValue;function i(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=u({inst:{value:n,getSnapshot:t}}),o=r[0].inst,f=r[1];return s((function(){o.value=n,o.getSnapshot=t,i(o)&&f({inst:o})}),[e,n,t]),c((function(){return i(o)&&f({inst:o}),e((function(){i(o)&&f({inst:o})}))}),[e]),a(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:f},76:(e,t,n)=>{var r=n(136),o=n(432),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},c=o.useSyncExternalStore,s=r.useRef,a=r.useEffect,i=r.useMemo,f=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var l=s(null);if(null===l.current){var p={hasValue:!1,value:null};l.current=p}else p=l.current;l=i((function(){function e(e){if(!a){if(a=!0,c=e,e=r(e),void 0!==o&&p.hasValue){var t=p.value;if(o(t,e))return s=t}return s=e}if(t=s,u(c,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(c=e,s=n)}var c,s,a=!1,i=void 0===n?null:n;return[function(){return e(t())},null===i?void 0:function(){return e(i())}]}),[t,n,r,o]);var d=c(e,l[0],l[1]);return a((function(){p.hasValue=!0,p.value=d}),[d]),f(d),d}},432:(e,t,n)=>{e.exports=n(510)},412:(e,t,n)=>{e.exports=n(76)}}]);
//# sourceMappingURL=168.js.map
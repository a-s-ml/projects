/*! For license information please see 8.01563b176b19d008.js.LICENSE.txt */
(self.webpackChunkquestions=self.webpackChunkquestions||[]).push([[8,988],{954:(e,t,n)=>{n.d(t,{gr:()=>o,_g:()=>u,_W:()=>l,Yj:()=>i,IF:()=>a});const r=window.Telegram.WebApp,o=(...e)=>e.filter(Boolean).join(" "),l=()=>{r.showAlert("Данная функция находится в разработке",console.log("inDevelopment"))},u=e=>{if(e)return r.openTelegramLink("https://t.me/more_details")},a=e=>{if("string"==typeof e.value)return!(e.value.length<e.lengthMin||e.value.length>e.lengthMax);if("number"==typeof e.value)return 0!==e.value;if("object"==typeof e.value){let t=0,n=!1;return e.value.map((n=>{n.value.length>=e.lengthMin&&n.value.length<e.lengthMax&&t++})),n=t===e.value.length,n}return!1};var s=n(136);function i(e){const[t,n]=(0,s.useState)(0);return{currentStepIndex:t,step:e[t],steps:e,isFirstStep:0===t,isLastStep:t===e.length-1,goTo:function(e){n(e)},next:function(){n((t=>t>=e.length-1?t:t+1))},back:function(){n((e=>e<=0?e:e-1))}}}},488:(e,t,n)=>{var r=n(136),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,l={},i=null,f=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(f=t.ref),t)u.call(t,r)&&!s.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:o,type:e,key:i,ref:f,props:l,_owner:a.current}}t.Fragment=l,t.jsx=i,t.jsxs=i},0:(e,t,n)=>{e.exports=n(488)}}]);
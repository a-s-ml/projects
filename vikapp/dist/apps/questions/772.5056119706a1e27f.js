/*! For license information please see 772.5056119706a1e27f.js.LICENSE.txt */
(self.webpackChunkquestions=self.webpackChunkquestions||[]).push([[772,988],{460:(e,t,n)=>{n.d(t,{gr:()=>r,_g:()=>a,_W:()=>u,IV:()=>c,Gu:()=>f,Yj:()=>s,IF:()=>l});const o=window.Telegram.WebApp,r=(...e)=>e.filter(Boolean).join(" "),u=()=>{o.showAlert("Данная функция находится в разработке",console.log("inDevelopment"))},a=e=>{if(e)return o.openTelegramLink("https://t.me/more_details")},l=e=>{if("string"==typeof e.value)return!(e.value.length<e.lengthMin||e.value.length>e.lengthMax);if("number"==typeof e.value)return 0!==e.value;if("object"==typeof e.value){let t=0,n=!1;return e.value.map((n=>{n.value.length>=e.lengthMin&&n.value.length<e.lengthMax&&t++})),n=t===e.value.length,n}return!1};var i=n(136);function s(e){const[t,n]=(0,i.useState)(0);return{currentStepIndex:t,step:e[t],steps:e,isFirstStep:0===t,isLastStep:t===e.length-1,goTo:function(e){n(e)},next:function(){n((t=>t>=e.length-1?t:t+1))},back:function(){n((e=>e<=0?e:e-1))}}}const f=e=>{const t=window.Telegram.WebApp,[n,o]=(0,i.useState)(!1);return(0,i.useEffect)((()=>(n?(t.MainButton.setText("Далее"),t.MainButton.show(),t.onEvent("mainButtonClicked",e)):t.MainButton.hide(),()=>{t.MainButton.hide(),t.offEvent("mainButtonClicked",e)})),[n]),{setMainButtonState:o}},c=()=>{const e=window.Telegram.WebApp,[t,n]=(0,i.useState)(!1),[o,r]=(0,i.useState)("");return(0,i.useEffect)((()=>(t?(e.BackButton.show(),e.onEvent("backButtonClicked",(()=>n(!1)))):(e.BackButton.hide(),r("")),()=>{e.BackButton.hide(),e.offEvent("backButtonClicked",(()=>n(!1)))})),[t]),{setTypeSlide:r,setBackButtonState:n,typeSlide:o,backButtonState:t}}},108:(e,t,n)=>{var o=n(136),r=Symbol.for("react.element"),u=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var o,u={},s=null,f=null;for(o in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(f=t.ref),t)a.call(t,o)&&!i.hasOwnProperty(o)&&(u[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===u[o]&&(u[o]=t[o]);return{$$typeof:r,type:e,key:s,ref:f,props:u,_owner:l.current}}t.Fragment=u,t.jsx=s,t.jsxs=s},0:(e,t,n)=>{e.exports=n(108)}}]);
/*! For license information please see 772.9416d86001318d54.js.LICENSE.txt */
(self.webpackChunkgroups=self.webpackChunkgroups||[]).push([[772,988],{460:(e,t,n)=>{n.d(t,{En:()=>l,gr:()=>o,Qx:()=>u,_W:()=>a,IV:()=>s,IF:()=>i});const r=window.Telegram.WebApp,o=(...e)=>e.filter(Boolean).join(" "),l=()=>{r.openTelegramLink("https://t.me/ViktorinaOnlineBot?startgroup=add")},a=()=>{r.showAlert("Данная функция находится в разработке",console.log("inDevelopment"))},u=e=>{if(e)return r.openTelegramLink("https://t.me/more_details")},i=e=>{if("string"==typeof e.value)return!(e.value.length<e.lengthMin||e.value.length>e.lengthMax);if("number"==typeof e.value)return 0!==e.value;if("object"==typeof e.value){let t=0,n=!1;return e.value.map((n=>{n.value.length>=e.lengthMin&&n.value.length<e.lengthMax&&t++})),n=t===e.value.length,n}return!1};var p=n(136);const s=()=>{const e=window.Telegram.WebApp,[t,n]=(0,p.useState)(!1),[r,o]=(0,p.useState)("");return(0,p.useEffect)((()=>(t?(e.BackButton.show(),e.onEvent("backButtonClicked",(()=>n(!1)))):(e.BackButton.hide(),o("")),()=>{e.BackButton.hide(),e.offEvent("backButtonClicked",(()=>n(!1)))})),[t]),{setTypeSlide:o,setBackButtonState:n,typeSlide:r,backButtonState:t}}},108:(e,t,n)=>{var r=n(136),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var r,l={},p=null,s=null;for(r in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(s=t.ref),t)a.call(t,r)&&!i.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:o,type:e,key:p,ref:s,props:l,_owner:u.current}}t.Fragment=l,t.jsx=p,t.jsxs=p},0:(e,t,n)=>{e.exports=n(108)}}]);
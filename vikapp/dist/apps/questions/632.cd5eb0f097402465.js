/*! For license information please see 632.cd5eb0f097402465.js.LICENSE.txt */
(self.webpackChunkquestions=self.webpackChunkquestions||[]).push([[632],{632:(e,s,t)=>{t.r(s);var r=t(136),n=t.n(r),o=t(32),i=t(184),a=t(19),l=t(0);const c=()=>{const e=(0,a.useQuestionDispatch)();return(0,l.jsxs)("ul",{role:"list",className:"mt-4 divide-y divide-[var(--tg-theme-hint-color)]",children:[(0,l.jsx)("li",{className:"my-5",onClick:()=>e((0,a.showQuestionSlide)(!0)),children:"dsfcv1"}),(0,l.jsx)("li",{className:"my-5",onClick:()=>e((0,a.showQuestionSlide)(!0)),children:"dsfcv2"})]})},d=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.Page,{children:(0,l.jsx)(i.MainBlock,{children:(0,l.jsx)(c,{})})})}),u=t(28).K.injectEndpoints({endpoints:e=>({validate:e.query({query:e=>({url:`chat/validateUser/${e}`}),providesTags:["Validate"]})})}),{useValidateQuery:p}=u,h=function(){const e=window.Telegram.WebApp,s=(0,a.useQuestionDispatch)(),t=(0,a.useQuestionSelector)(a.selectQuestionSlide);(0,a.useQuestionSelector)(a.selectQuestionType),n().useEffect((()=>{e.expand(),e.ready()}),[]),t&&(e.BackButton.show(),e.onEvent("backButtonClicked",(()=>{s((0,a.showQuestionSlide)(!1))}))),t||e.BackButton.hide();const{data:r,isSuccess:o,isLoading:u}=p(e.initData);return console.log(r),(0,l.jsxs)(l.Fragment,{children:[u&&(0,l.jsx)(i.Preloader,{}),o&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d,{}),(0,l.jsx)(i.SlidePage,{slide:t,children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{children:"sgssdg1"}),(0,l.jsx)(c,{}),(0,l.jsx)("p",{children:"sgssdg1"})]})})]})]})};o.C(document.getElementById("root")).render((0,l.jsx)(r.StrictMode,{children:(0,l.jsx)(h,{})}))},28:(e,s,t)=>{t.d(s,{K:()=>i});var r=t(392),n=t(280);const o=(0,r.c9)((0,r._)({baseUrl:"https://api80q.ru/viktorinaonlinebot/"}),{maxRetries:5}),i=(0,n.KS)({reducerPath:"vikApi",refetchOnFocus:!0,baseQuery:o,tagTypes:["TypeGroup","TimeGroup","CategoryGroup","Validate","CountAvailableQuestionGroup","CountPublishedQuestionGroup"],endpoints:()=>({})})},32:(e,s,t)=>{var r=t(408);s.C=r.createRoot,r.hydrateRoot},488:(e,s,t)=>{var r=t(136),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,t){var r,o={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(d=s.ref),s)i.call(s,r)&&!l.hasOwnProperty(r)&&(o[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:n,type:e,key:c,ref:d,props:o,_owner:a.current}}s.Fragment=o,s.jsx=c,s.jsxs=c},0:(e,s,t)=>{e.exports=t(488)}}]);
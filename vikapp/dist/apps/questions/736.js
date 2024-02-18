/*! For license information please see 736.js.LICENSE.txt */
(self.webpackChunkquestions=self.webpackChunkquestions||[]).push([[736,356],{356:(e,t,r)=>{r.r(t),r.d(t,{AddGroup:()=>g,DeleteButton:()=>B,Feedback:()=>h,FooterBlock:()=>i,GlobalFooter:()=>x,GlobalHeader:()=>u,HeaderBlock:()=>l,MainBlock:()=>s,Page:()=>n,Preloader:()=>v,SimpleAccordionIcon:()=>L,SimpleAccordionMain:()=>_,SimpleAccordionText:()=>C,SimpleListItem:()=>f,SimpleListItemButtonDown:()=>w,SimpleListItemButtonRight:()=>N,SimpleListItemIcon:()=>k,SimpleListItemText:()=>y,SlidePage:()=>d});var a=r(344);const n=({children:e})=>(0,a.jsx)("div",{className:"container divide-y divide-[var(--tg-theme-hint-color)] overflow-hidden min-h-screen rounded-lg bg-[var(--tg-theme-bg-color)]",children:e}),s=({children:e})=>(0,a.jsx)("div",{className:"px-4 py-5 overflow-y-auto min-h-max",children:e}),l=({children:e})=>(0,a.jsx)("div",{className:"h-1/6 px-4 py-5",children:e}),i=({children:e})=>(0,a.jsx)("div",{className:"h-1/6 px-4 py-4",children:e});var o=r(136),c=r(376);const d=({children:e,slide:t})=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(c.Transition.Root,{show:t,as:o.Fragment,children:(0,a.jsx)(c.Dialog,{as:"div",className:"relative z-10",onClose:close,children:(0,a.jsx)("div",{className:"fixed inset-y-0 right-0 flex max-w-full",children:(0,a.jsx)(c.Transition.Child,{as:o.Fragment,enter:"transform transition ease-in-out duration-500",enterFrom:"translate-x-full opacity-5",enterTo:"translate-x-0 opacity-100",leave:"transform transition ease-in-out duration-500",leaveFrom:"translate-x-0 opacity-100",leaveTo:"translate-x-full opacity-5",children:(0,a.jsx)(c.Dialog.Panel,{className:"pointer-events-auto relative w-screen",children:(0,a.jsx)("div",{className:"h-full overflow-y-auto bg-[var(--tg-theme-bg-color)]",children:e})})})})})})}),m=o.forwardRef((function({title:e,titleId:t,...r},a){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},r),e?o.createElement("title",{id:t},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"}))})),h=()=>{const e=window.Telegram.WebApp;function t(t){if(t)return e.openTelegramLink("https://t.me/more_details")}return(0,a.jsxs)("footer",{className:"absolute inset-x-0 bottom-0 z-50",children:[(0,a.jsx)("div",{className:"bg-gradient-to-t from-[var(--tg-theme-bg-color)] to-transparent pt-16"}),(0,a.jsxs)("div",{className:"group flex items-start px-8 py-8 bg-[var(--tg-theme-bg-color)] space-x-3 cursor-pointer",onClick:()=>e.showConfirm('Задать вопрос или сделать предложение/рекомендацию вы можете разработчику приложения.\n\nНажмите "Ок", чтобы написать разработчику',t),children:[(0,a.jsx)(m,{className:"h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]","aria-hidden":"true"}),(0,a.jsx)("div",{className:"text-sm font-medium text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]",children:(0,a.jsx)("b",{children:"Вопрос/Отзыв/Предложение"})})]})]})},x=({children:e})=>(0,a.jsxs)("footer",{className:"absolute inset-x-0 bottom-0 z-50",children:[(0,a.jsx)("div",{className:"bg-gradient-to-t from-[var(--tg-theme-bg-color)] to-transparent pt-16"}),e]}),u=({children:e})=>(0,a.jsxs)("header",{className:"absolute inset-x-0 top-0 z-50",children:[e,(0,a.jsx)("div",{className:"bg-gradient-to-b from-[var(--tg-theme-bg-color)] to-transparent pt-12 w-screen"})]}),p=o.forwardRef((function({title:e,titleId:t,...r},a){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},r),e?o.createElement("title",{id:t},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))})),g=()=>{const e=window.Telegram.WebApp;return(0,a.jsxs)("div",{className:"group flex items-start px-8 pt-8 pb-4 bg-[var(--tg-theme-bg-color)] space-x-3 cursor-pointer",onClick:()=>e.openTelegramLink("https://t.me/ViktorinaOnlineBot?startgroup=add"),children:[(0,a.jsx)(p,{className:"h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]","aria-hidden":"true"}),(0,a.jsx)("div",{className:"text-sm font-medium text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]",children:(0,a.jsx)("b",{children:"Добавить группу/канал"})})]})},v=()=>(0,a.jsx)("div",{className:"flex items-center justify-center w-full h-40",children:(0,a.jsx)("span",{className:"Preloader_loader__mRPaV"})}),f=({children:e})=>(0,a.jsx)("div",{className:"group relative flex items-start space-x-3 py-4",children:e}),j=o.forwardRef((function({title:e,titleId:t,...r},a){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},r),e?o.createElement("title",{id:t},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"}))})),w=()=>(0,a.jsx)("div",{className:"flex-shrink-0 self-center",children:(0,a.jsx)(j,{className:"h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]","aria-hidden":"true"})}),b=o.forwardRef((function({title:e,titleId:t,...r},a){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},r),e?o.createElement("title",{id:t},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"}))})),N=()=>(0,a.jsx)("div",{className:"flex-shrink-0 self-center",children:(0,a.jsx)(b,{className:"h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]","aria-hidden":"true"})}),k=({children:e})=>(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsx)("span",{className:"inline-flex h-10 w-10 items-center justify-center rounded-lg",children:e})}),y=({text:e,description:t})=>(0,a.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,a.jsx)("span",{className:"absolute inset-0","aria-hidden":"true"}),(0,a.jsx)("p",{className:"text-sm font-medium text-[var(--tg-theme-text-color)]",children:e}),(0,a.jsx)("p",{className:"text-xs text-[var(--tg-theme-hint-color)]",children:t})]}),L=({size:e,children:t})=>(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsx)("span",{className:`inline-flex h-${e} w-${e} items-center justify-center rounded-lg`,children:t})}),E=o.forwardRef((function({title:e,titleId:t,...r},a){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},r),e?o.createElement("title",{id:t},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 15.75 7.5-7.5 7.5 7.5"}))})),_=({content:e,description:t})=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(c.Disclosure,{as:"div",children:({open:r})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("li",{className:"py-4 px-0",children:(0,a.jsxs)(c.Disclosure.Button,{className:"group relative flex w-full items-start justify-between space-x-3",children:[t,(0,a.jsx)("div",{className:"flex-shrink-0 self-center text-right",children:r?(0,a.jsx)(E,{className:"h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]","aria-hidden":"true"}):(0,a.jsx)(j,{className:"h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]","aria-hidden":"true"})})]})}),(0,a.jsx)(c.Disclosure.Panel,{className:"py-4",children:e})]})})}),C=({children:e})=>(0,a.jsx)("div",{className:"min-w-0 flex-1 text-left",children:(0,a.jsx)("div",{className:"text-sm font-medium text-[var(--tg-theme-text-color)]",children:e})}),I=o.forwardRef((function({title:e,titleId:t,...r},a){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},r),e?o.createElement("title",{id:t},e):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"}))})),B=({func:e,text:t})=>{const r=window.Telegram.WebApp;return(0,a.jsxs)("div",{className:"group flex items-start px-[5px] py-2 space-x-3 cursor-pointer text-red-600",onClick:()=>r.showConfirm(t,e),children:[(0,a.jsx)(I,{className:"h-5 w-5","aria-hidden":"true"}),(0,a.jsx)("div",{className:"text-sm font-medium",children:(0,a.jsx)("b",{children:"Удалить"})})]})}},964:(e,t,r)=>{var a=r(136),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var a,s={},c=null,d=null;for(a in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,a)&&!o.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:n,type:e,key:c,ref:d,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},344:(e,t,r)=>{e.exports=r(964)}}]);
//# sourceMappingURL=736.js.map
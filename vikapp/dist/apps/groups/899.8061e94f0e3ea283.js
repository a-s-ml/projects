/*! For license information please see 899.8061e94f0e3ea283.js.LICENSE.txt */
(self.webpackChunkgroups=self.webpackChunkgroups||[]).push([[899],{280:(e,t,r)=>{r.r(t);var s=r(136),a=r(32),l=r(184),o=r(868);const i=o.r.injectEndpoints({endpoints:e=>({getGroups:e.query({query:e=>({url:`chat/findByReferal/${e}`}),providesTags:["TypeGroup","TimeGroup","CategoryGroup"]}),getInfoGroups:e.query({query:e=>({url:`chat/groupInfoById/${e}`})}),getGroupDb:e.query({query:e=>({url:`chat/findByChatId/${e}`}),providesTags:["TypeGroup","TimeGroup"]}),getMemberCountGroups:e.query({query:e=>({url:`chat/groupMemberCountById/${e}`})}),getFilePhoto:e.query({query:e=>({url:`chat/tgGetFilePhoto/${e}`})})})}),{useGetFilePhotoQuery:n,useGetGroupsQuery:c,useGetInfoGroupsQuery:u,useGetMemberCountGroupsQuery:d,useGetGroupDbQuery:p}=i,h=o.r.injectEndpoints({endpoints:e=>({getActiveGroups:e.query({query:e=>({url:`chat-active/${e}`})}),setActiveGroups:e.mutation({query:e=>({url:"/chat-active",method:"POST",body:{chat:e}})}),deleteActiveGroups:e.mutation({query:e=>({url:`/chat-active/${e}`,method:"DELETE",body:{chat:e}})})})}),{useGetActiveGroupsQuery:x,useSetActiveGroupsMutation:m,useDeleteActiveGroupsMutation:f}=h,v=s.forwardRef((function({title:e,titleId:t,...r},a){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},r),e?s.createElement("title",{id:t},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"}),s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}));var y=r(0);function g({id:e}){const{isLoading:t,data:r}=n(e);return(0,y.jsxs)(y.Fragment,{children:[t&&(0,y.jsx)("p",{children:"..."}),r&&(0,y.jsx)("img",{className:"inline-block h-10 w-14 rounded-full",src:`data:image/png;base64,${r}`,alt:e})]})}var j=r(432);function G({group:e}){var t,r,s;const{data:a,isSuccess:l}=x(e),{isError:o,data:i}=u(e),{data:n}=p(e);return(0,j.useAppDispatch)(),(0,y.jsxs)(y.Fragment,{children:[o&&(0,y.jsx)("li",{children:"error"}),i&&n&&(0,y.jsxs)("li",{className:"py-4 px-0",children:[(0,y.jsxs)("div",{className:"group relative flex items-start space-x-3",children:[(0,y.jsx)("div",{className:"flex-shrink-0",children:(0,y.jsxs)("span",{className:"inline-flex h-10 w-10 items-center justify-center rounded-lg",children:[(null==(t=i.photo)?void 0:t.small_file_id)&&(0,y.jsx)(g,{id:null==(r=i.photo)?void 0:r.small_file_id}),!(null!=(s=i.photo)&&s.small_file_id)&&(0,y.jsx)("img",{className:"inline-block h-10 w-14 rounded-full",src:"https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75",alt:i.title})]})}),(0,y.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,y.jsx)("div",{className:"text-sm font-medium text-[var(--tg-theme-text-color)]",children:i.title}),i.username&&(0,y.jsxs)("p",{className:"text-sm text-[var(--tg-theme-hint-color)]",children:["@",i.username]})]}),l&&(0,y.jsx)("div",{className:"flex-shrink-0 self-center text-right"})]}),(0,y.jsxs)("div",{className:"group relative flex items-start space-x-3 cursor-pointer",onClick:()=>{},children:[(0,y.jsx)("div",{className:"min-w-0 flex-1"}),(0,y.jsx)("div",{className:"flex-shrink-0 self-center",children:(0,y.jsx)(v,{className:"h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]","aria-hidden":"true"})})]})]})]})}function b({chat:e}){const{isLoading:t,data:r,isSuccess:s}=c(e);return(0,y.jsxs)(y.Fragment,{children:[t&&(0,y.jsx)(l.Preloader,{}),(0,y.jsxs)("ul",{role:"list",className:"mt-4 divide-y divide-[var(--tg-theme-hint-color)] pt-9",children:[0===(null==r?void 0:r.length)&&(0,y.jsx)("p",{className:"font-light py-2 text-center text-[var(--tg-theme-text-color)]",children:"Вы не добавили бота ещё ни в одну группу/канал"}),s&&r.map((e=>(0,y.jsx)(G,{group:e.chat},e.id)))]}),(0,y.jsx)("div",{className:"pb-12 mb-8"})]})}const k=function(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l.GlobalHeader,{children:(0,y.jsx)(l.AddGroup,{})}),(0,y.jsx)(l.Page,{children:(0,y.jsxs)(l.MainBlock,{children:[(0,y.jsx)("div",{className:"text-center pt-9",children:(0,y.jsx)("h2",{className:"mt-2 text-base font-semibold leading-6 text-[var(--tg-theme-accent-text-color)]",children:"Groups"})}),(0,y.jsx)(b,{chat:521884639})]})}),(0,y.jsx)(l.GlobalFooter,{children:(0,y.jsx)(l.Feedback,{})})]})},_=function(){return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(k,{})})};a.C(document.getElementById("root")).render((0,y.jsx)(s.StrictMode,{children:(0,y.jsx)(_,{})}))},868:(e,t,r)=>{r.d(t,{r:()=>o});var s=r(392),a=r(900);const l=(0,s.c9)((0,s._)({baseUrl:"https://api80q.ru/viktorinaonlinebot/"}),{maxRetries:5}),o=(0,a.KS)({reducerPath:"vikApi",refetchOnFocus:!0,baseQuery:l,tagTypes:["TypeGroup","TimeGroup","CategoryGroup","Validate","CountAvailableQuestionGroup","CountPublishedQuestionGroup"],endpoints:e=>({validate:e.query({query:e=>({url:`chat/validateUser/${e}`}),providesTags:["Validate"]})})}),{useValidateQuery:i}=o},32:(e,t,r)=>{var s=r(408);t.C=s.createRoot,s.hydrateRoot},488:(e,t,r)=>{var s=r(136),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var s,l={},c=null,u=null;for(s in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,s)&&!n.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===l[s]&&(l[s]=t[s]);return{$$typeof:a,type:e,key:c,ref:u,props:l,_owner:i.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},0:(e,t,r)=>{e.exports=r(488)}}]);
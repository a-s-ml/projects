(self.webpackChunkgroups=self.webpackChunkgroups||[]).push([[84],{84:(e,r,t)=>{t.r(r),t.d(r,{default:()=>I});var s=t(640),o=t(184),a=t(936),i=t(556);const l=(0,a.c9)((0,a._)({baseUrl:"https://api80q.ru/viktorinaonlinebot/"}),{maxRetries:5}),u=(0,i.KS)({reducerPath:"vikApi",refetchOnFocus:!0,baseQuery:l,tagTypes:["TypeGroup","TimeGroup","CategoryGroup","Validate","CountAvailableQuestionGroup","CountPublishedQuestionGroup"],endpoints:()=>({})}),n=u.injectEndpoints({endpoints:e=>({getGroups:e.query({query:e=>({url:`chat/findByReferal/${e}`}),providesTags:["TypeGroup","TimeGroup","CategoryGroup"]}),getInfoGroups:e.query({query:e=>({url:`chat/groupInfoById/${e}`})}),getGroupDb:e.query({query:e=>({url:`chat/findByChatId/${e}`}),providesTags:["TypeGroup","TimeGroup"]}),getMemberCountGroups:e.query({query:e=>({url:`chat/groupMemberCountById/${e}`})}),getFilePhoto:e.query({query:e=>({url:`chat/tgGetFilePhoto/${e}`})})})}),{useGetFilePhotoQuery:c,useGetGroupsQuery:d,useGetInfoGroupsQuery:p,useGetMemberCountGroupsQuery:h,useGetGroupDbQuery:x}=n,m=u.injectEndpoints({endpoints:e=>({getActiveGroups:e.query({query:e=>({url:`chat-active/${e}`})}),setActiveGroups:e.mutation({query:e=>({url:"/chat-active",method:"POST",body:{chat:e}})}),deleteActiveGroups:e.mutation({query:e=>({url:`/chat-active/${e}`,method:"DELETE",body:{chat:e}})})})}),{useGetActiveGroupsQuery:g,useSetActiveGroupsMutation:y,useDeleteActiveGroupsMutation:G}=m;var v=t(304),j=t(344);function f({id:e}){const{isLoading:r,data:t}=c(e);return(0,j.jsxs)(j.Fragment,{children:[r&&(0,j.jsx)("p",{children:"..."}),t&&(0,j.jsx)("img",{className:"inline-block h-10 w-14 rounded-full",src:`data:image/png;base64,${t}`,alt:e})]})}function b({group:e}){var r,t,s;const{data:o,isSuccess:a}=g(e),{isError:i,data:l}=p(e),{data:u}=x(e);return(0,j.jsxs)(j.Fragment,{children:[i&&(0,j.jsx)("li",{children:"error"}),l&&u&&(0,j.jsxs)("li",{className:"py-4 px-0",children:[(0,j.jsxs)("div",{className:"group relative flex items-start space-x-3",children:[(0,j.jsx)("div",{className:"flex-shrink-0",children:(0,j.jsxs)("span",{className:"inline-flex h-10 w-10 items-center justify-center rounded-lg",children:[(null==(r=l.photo)?void 0:r.small_file_id)&&(0,j.jsx)(f,{id:null==(t=l.photo)?void 0:t.small_file_id}),!(null!=(s=l.photo)&&s.small_file_id)&&(0,j.jsx)("img",{className:"inline-block h-10 w-14 rounded-full",src:"https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75",alt:l.title})]})}),(0,j.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,j.jsx)("div",{className:"text-sm font-medium text-[var(--tg-theme-text-color)]",children:l.title}),l.username&&(0,j.jsxs)("p",{className:"text-sm text-[var(--tg-theme-hint-color)]",children:["@",l.username]})]})]}),(0,j.jsx)("div",{className:"group relative flex items-start space-x-3 cursor-pointer",onClick:()=>{console.log("asd")},children:(0,j.jsx)("div",{className:"flex-shrink-0 self-center",children:(0,j.jsx)(v.c,{className:"h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]","aria-hidden":"true"})})})]})]})}function q({chat:e}){console.log(e);const{isLoading:r,data:t,isSuccess:s}=d(e);return s&&console.log(t),(0,j.jsxs)(j.Fragment,{children:[r&&(0,j.jsx)(o.Preloader,{}),(0,j.jsx)("ul",{role:"list",className:"mt-4 divide-y divide-[var(--tg-theme-hint-color)] pt-9",children:s&&t.map((e=>(0,j.jsx)(b,{group:e.chat},e.id)))}),(0,j.jsx)("div",{className:"pb-12 mb-8"})]})}var N=t(796);const w=(0,N.createSlice)({name:"groupApp",initialState:{groupSlide:!1,groupType:"",groupId:10},reducers:{showGroupSlide:(e,r)=>{e.groupSlide=r.payload},typeGroup:(e,r)=>{e.groupType=r.payload},dataGroup:(e,r)=>{e.groupId=r.payload}}}),{showGroupSlide:A,typeGroup:S,dataGroup:T}=w.actions,k=e=>e.groupApp.groupSlide,C=e=>e.groupApp.groupType,F=w.reducer,P=(0,N.configureStore)({reducer:{[u.reducerPath]:u.reducer,groupApp:F}}),M=s.useSelector,Q=function(){window.Telegram.WebApp,console.log(M(P.getState));const e=M(k),r=M(C);return console.log("slide",e),console.log("type",r),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o.GlobalHeader,{children:(0,j.jsx)(o.AddGroup,{})}),(0,j.jsx)(o.Page,{children:(0,j.jsxs)(o.MainBlock,{children:[(0,j.jsx)("div",{className:"text-center pt-9",children:(0,j.jsx)("h2",{className:"mt-2 text-base font-semibold leading-6 text-[var(--tg-theme-accent-text-color)]",children:"Groups"})}),(0,j.jsx)(q,{chat:521884639})]})}),(0,j.jsx)(o.GlobalFooter,{children:(0,j.jsx)(o.Feedback,{})})]})},I=()=>(0,j.jsx)(s.Provider,{store:P,children:(0,j.jsx)(Q,{})})}}]);
//# sourceMappingURL=84.js.map
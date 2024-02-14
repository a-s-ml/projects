(self.webpackChunkgroups=self.webpackChunkgroups||[]).push([[948],{948:(e,t,r)=>{r.r(t);var s=r(136),o=r(32),a=r(184),i=r(392),l=r(280);const u=(0,i.c9)((0,i._)({baseUrl:"https://api80q.ru/viktorinaonlinebot/"}),{maxRetries:5}),n=(0,l.KS)({reducerPath:"vikApi",refetchOnFocus:!0,baseQuery:u,tagTypes:["TypeGroup","TimeGroup","CategoryGroup","Validate","CountAvailableQuestionGroup","CountPublishedQuestionGroup"],endpoints:e=>({validate:e.query({query:e=>({url:`chat/validateUser/${e}`}),providesTags:["Validate"]})})}),{useValidateQuery:c}=n,d=n.injectEndpoints({endpoints:e=>({getGroups:e.query({query:e=>({url:`chat/findByReferal/${e}`}),providesTags:["TypeGroup","TimeGroup","CategoryGroup"]}),getInfoGroups:e.query({query:e=>({url:`chat/groupInfoById/${e}`})}),getGroupDb:e.query({query:e=>({url:`chat/findByChatId/${e}`}),providesTags:["TypeGroup","TimeGroup"]}),getMemberCountGroups:e.query({query:e=>({url:`chat/groupMemberCountById/${e}`})}),getFilePhoto:e.query({query:e=>({url:`chat/tgGetFilePhoto/${e}`})})})}),{useGetFilePhotoQuery:p,useGetGroupsQuery:h,useGetInfoGroupsQuery:x,useGetMemberCountGroupsQuery:m,useGetGroupDbQuery:g}=d,y=n.injectEndpoints({endpoints:e=>({getActiveGroups:e.query({query:e=>({url:`chat-active/${e}`})}),setActiveGroups:e.mutation({query:e=>({url:"/chat-active",method:"POST",body:{chat:e}})}),deleteActiveGroups:e.mutation({query:e=>({url:`/chat-active/${e}`,method:"DELETE",body:{chat:e}})})})}),{useGetActiveGroupsQuery:v,useSetActiveGroupsMutation:G,useDeleteActiveGroupsMutation:j}=y;var f=r(920),b=r(0);function q({id:e}){const{isLoading:t,data:r}=p(e);return(0,b.jsxs)(b.Fragment,{children:[t&&(0,b.jsx)("p",{children:"..."}),r&&(0,b.jsx)("img",{className:"inline-block h-10 w-14 rounded-full",src:`data:image/png;base64,${r}`,alt:e})]})}function N({group:e}){var t,r,s;const{data:o,isSuccess:a}=v(e),{isError:i,data:l}=x(e),{data:u}=g(e);return(0,b.jsxs)(b.Fragment,{children:[i&&(0,b.jsx)("li",{children:"error"}),l&&u&&(0,b.jsxs)("li",{className:"py-4 px-0",children:[(0,b.jsxs)("div",{className:"group relative flex items-start space-x-3",children:[(0,b.jsx)("div",{className:"flex-shrink-0",children:(0,b.jsxs)("span",{className:"inline-flex h-10 w-10 items-center justify-center rounded-lg",children:[(null==(t=l.photo)?void 0:t.small_file_id)&&(0,b.jsx)(q,{id:null==(r=l.photo)?void 0:r.small_file_id}),!(null!=(s=l.photo)&&s.small_file_id)&&(0,b.jsx)("img",{className:"inline-block h-10 w-14 rounded-full",src:"https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75",alt:l.title})]})}),(0,b.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,b.jsx)("div",{className:"text-sm font-medium text-[var(--tg-theme-text-color)]",children:l.title}),l.username&&(0,b.jsxs)("p",{className:"text-sm text-[var(--tg-theme-hint-color)]",children:["@",l.username]})]})]}),(0,b.jsx)("div",{className:"group relative flex items-start space-x-3 cursor-pointer",onClick:()=>{console.log("asd")},children:(0,b.jsx)("div",{className:"flex-shrink-0 self-center",children:(0,b.jsx)(f.c,{className:"h-5 w-5 text-[var(--tg-theme-accent-text-color)] group-hover:text-[var(--tg-theme-text-color)]","aria-hidden":"true"})})})]})]})}function w({chat:e}){console.log(e);const{isLoading:t,data:r,isSuccess:s}=h(e);return console.log(r),(0,b.jsxs)(b.Fragment,{children:[t&&(0,b.jsx)(a.Preloader,{}),(0,b.jsx)("ul",{role:"list",className:"mt-4 divide-y divide-[var(--tg-theme-hint-color)] pt-9",children:s&&r.map((e=>(0,b.jsx)(N,{group:e.chat},e.id)))}),(0,b.jsx)("div",{className:"pb-12 mb-8"})]})}var A=r(640),k=r(796);const C=(0,k.createSlice)({name:"groupApp",initialState:{slide:!1,type:"",group:10},reducers:{showGroupSlide:(e,t)=>{e.slide=t.payload},typeGroup:(e,t)=>{e.type=t.payload},dataGroup:(e,t)=>{e.group=t.payload}}}),{showGroupSlide:S,typeGroup:T,dataGroup:F}=C.actions,M=e=>e.groupApp.slide,P=e=>e.groupApp.type,Q=C.reducer,$=(0,k.configureStore)({reducer:{[n.reducerPath]:n.reducer,groupApp:Q}}),B=A.useSelector,D=function(){window.Telegram.WebApp,(0,A.useDispatch)();const e=B(M),t=B(P);return console.log("slide",e),console.log("type",t),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a.GlobalHeader,{children:(0,b.jsx)(a.AddGroup,{})}),(0,b.jsx)(a.Page,{children:(0,b.jsxs)(a.MainBlock,{children:[(0,b.jsx)("div",{className:"text-center pt-9",children:(0,b.jsx)("h2",{className:"mt-2 text-base font-semibold leading-6 text-[var(--tg-theme-accent-text-color)]",children:"Groups"})}),(0,b.jsx)(w,{chat:521884639})]})}),(0,b.jsx)(a.GlobalFooter,{children:(0,b.jsx)(a.Feedback,{})})]})},E=function(){return console.log(B($.getState)),(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(D,{})})};o.C(document.getElementById("root")).render((0,b.jsx)(A.Provider,{store:$,children:(0,b.jsx)(s.StrictMode,{children:(0,b.jsx)(E,{})})}))},32:(e,t,r)=>{var s=r(408);t.C=s.createRoot,s.hydrateRoot}}]);
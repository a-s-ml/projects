(self.webpackChunkgroups=self.webpackChunkgroups||[]).push([[65],{65:(e,r,t)=>{t.r(r);var o=t(32),s=t(640),i=t(184),n=t(392),u=t(280);const a=(0,n.c9)((0,n._)({baseUrl:"https://api80q.ru/viktorinaonlinebot/"}),{maxRetries:5}),l=(0,u.KS)({reducerPath:"vikApi",refetchOnFocus:!0,baseQuery:a,tagTypes:["TypeGroup","TimeGroup","CategoryGroup","Validate","CountAvailableQuestionGroup","CountPublishedQuestionGroup"],endpoints:()=>({})}),d=l.injectEndpoints({endpoints:e=>({getGroups:e.query({query:e=>({url:`chat/findByReferal/${e}`}),providesTags:["TypeGroup","TimeGroup","CategoryGroup"]}),getInfoGroups:e.query({query:e=>({url:`chat/groupInfoById/${e}`})}),getGroupDb:e.query({query:e=>({url:`chat/findByChatId/${e}`}),providesTags:["TypeGroup","TimeGroup"]}),getMemberCountGroups:e.query({query:e=>({url:`chat/groupMemberCountById/${e}`})}),getFilePhoto:e.query({query:e=>({url:`chat/tgGetFilePhoto/${e}`})})})}),{useGetFilePhotoQuery:c,useGetGroupsQuery:p,useGetInfoGroupsQuery:h,useGetMemberCountGroupsQuery:m,useGetGroupDbQuery:x}=d;var g=t(0);function j({id:e}){const{isLoading:r,data:t}=c(e);return(0,g.jsxs)(g.Fragment,{children:[r&&(0,g.jsx)("p",{children:"..."}),t&&(0,g.jsx)("img",{className:"inline-block w-full rounded-full",src:`data:image/png;base64,${t}`,alt:e})]})}function y({group:e}){var r,t,o;const s=window.Telegram.WebApp,{isError:n,data:u}=h(e),{data:a}=x(e),l=`Вы действительно хотите удалить бота из группы ${null!=u&&u.username?u.username:null==u?void 0:u.title}`;return(0,g.jsxs)(g.Fragment,{children:[n&&(0,g.jsx)("li",{children:"error"}),u&&a&&(0,g.jsx)("li",{className:"cursor-pointer",children:(0,g.jsx)(i.SimpleAccordionMain,{description:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(i.SimpleAccordionIcon,{size:10,children:[(null==(r=u.photo)?void 0:r.small_file_id)&&(0,g.jsx)(j,{id:null==(t=u.photo)?void 0:t.small_file_id}),!(null!=(o=u.photo)&&o.small_file_id)&&(0,g.jsx)("img",{className:"inline-block w-full rounded-full",src:"https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75",alt:u.title})]}),(0,g.jsxs)(i.SimpleAccordionText,{children:[(0,g.jsx)("div",{className:"text-sm font-medium text-[var(--tg-theme-text-color)]",children:u.title}),u.username&&(0,g.jsxs)("p",{className:"text-sm text-[var(--tg-theme-hint-color)]",children:["@",u.username]})]})]}),content:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.DeleteButton,{func:function(e){if(e)return s.openTelegramLink("https://t.me/more_details")},text:l}),(0,g.jsx)("p",{children:"Модерировать"}),(0,g.jsx)("p",{children:"Статистика"})]})})})]})}function G({chat:e}){const{isLoading:r,data:t,isSuccess:o}=p(e);return(0,g.jsxs)(g.Fragment,{children:[r&&(0,g.jsx)(i.Preloader,{}),(0,g.jsx)("ul",{role:"list",className:"mt-4 divide-y divide-[var(--tg-theme-hint-color)] pt-9",children:o&&t.map((e=>(0,g.jsx)(y,{group:e.chat},e.id)))}),(0,g.jsx)("div",{className:"pb-12 mb-8"})]})}const f=function(){return window.Telegram.WebApp,(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.GlobalHeader,{children:(0,g.jsx)(i.AddGroup,{})}),(0,g.jsx)(i.Page,{children:(0,g.jsxs)(i.MainBlock,{children:[(0,g.jsx)("div",{className:"text-center pt-9"}),(0,g.jsx)(G,{chat:521884639})]})}),(0,g.jsx)(i.GlobalFooter,{children:(0,g.jsx)(i.Feedback,{})})]})};var b=t(796);const v=(0,b.createSlice)({name:"groupApp",initialState:{groupSlide:!1,groupType:"",groupId:10},reducers:{showGroupSlide:(e,r)=>{e.groupSlide=r.payload},typeGroup:(e,r)=>{e.groupType=r.payload},dataGroup:(e,r)=>{e.groupId=r.payload}}}),{showGroupSlide:T,typeGroup:w,dataGroup:q}=v.actions,C=v.reducer,F=(0,b.configureStore)({reducer:{[l.reducerPath]:l.reducer,groupApp:C}}),S=()=>(0,g.jsx)(s.Provider,{store:F,children:(0,g.jsx)(f,{})});o.C(document.getElementById("root")).render((0,g.jsx)(S,{}))},32:(e,r,t)=>{var o=t(408);r.C=o.createRoot,o.hydrateRoot}}]);
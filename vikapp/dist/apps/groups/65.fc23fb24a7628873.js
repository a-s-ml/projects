(self.webpackChunkgroups=self.webpackChunkgroups||[]).push([[65],{65:(e,t,r)=>{r.r(t);var o=r(32),s=r(640),n=r(184),i=r(392),u=r(280);const l=(0,i.c9)((0,i._)({baseUrl:"https://api80q.ru/viktorinaonlinebot/"}),{maxRetries:5}),a=(0,u.KS)({reducerPath:"vikApi",refetchOnFocus:!0,baseQuery:l,tagTypes:["TypeGroup","TimeGroup","CategoryGroup","Validate","CountAvailableQuestionGroup","CountPublishedQuestionGroup"],endpoints:()=>({})}),c=a.injectEndpoints({endpoints:e=>({getGroups:e.query({query:e=>({url:`chat/findByReferal/${e}`}),providesTags:["TypeGroup","TimeGroup","CategoryGroup"]}),getInfoGroups:e.query({query:e=>({url:`chat/groupInfoById/${e}`})}),getGroupDb:e.query({query:e=>({url:`chat/findByChatId/${e}`}),providesTags:["TypeGroup","TimeGroup"]}),getMemberCountGroups:e.query({query:e=>({url:`chat/groupMemberCountById/${e}`})}),getFilePhoto:e.query({query:e=>({url:`chat/tgGetFilePhoto/${e}`})})})}),{useGetFilePhotoQuery:d,useGetGroupsQuery:p,useGetInfoGroupsQuery:h,useGetMemberCountGroupsQuery:g,useGetGroupDbQuery:x}=c;var m=r(0);function f({id:e}){const{isLoading:t,data:r}=d(e);return(0,m.jsxs)(m.Fragment,{children:[t&&(0,m.jsx)("p",{children:"..."}),r&&(0,m.jsx)("img",{className:"inline-block w-full rounded-full",src:`data:image/png;base64,${r}`,alt:e})]})}function j({group:e}){var t,r,o;const s=window.Telegram.WebApp,{isError:i,data:u}=h(e),{data:l}=x(e);function a(e){if(e)return s.openTelegramLink("https://t.me/more_details")}const c=`Вы действительно хотите удалить бота из группы ${null!=u&&u.username?u.username:null==u?void 0:u.title}`;return(0,m.jsxs)(m.Fragment,{children:[i&&(0,m.jsx)("li",{children:"error"}),u&&l&&(0,m.jsx)("li",{className:"cursor-pointer",children:(0,m.jsx)(n.SimpleAccordionMain,{description:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(n.SimpleAccordionIcon,{size:10,children:[(null==(t=u.photo)?void 0:t.small_file_id)&&(0,m.jsx)(f,{id:null==(r=u.photo)?void 0:r.small_file_id}),!(null!=(o=u.photo)&&o.small_file_id)&&(0,m.jsx)("img",{className:"inline-block w-full h-full rounded-full",src:"https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75",alt:u.title})]}),(0,m.jsxs)(n.SimpleAccordionText,{children:[(0,m.jsx)("div",{className:"text-sm font-medium text-[var(--tg-theme-text-color)]",children:u.title}),u.username&&(0,m.jsxs)("p",{className:"text-sm text-[var(--tg-theme-hint-color)]",children:["@",u.username]})]})]}),content:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n.ButtonDelete,{func:a,text:c}),(0,m.jsx)(n.ButtonStatistic,{func:a,text:"fsgsdfg"}),(0,m.jsx)(n.ButtonIcon,{firstIcon:!1,text:"sfgsfg1",size:10,color:"red-500",icon:"edit",func:a}),(0,m.jsx)(n.ButtonIcon,{firstIcon:!0,text:"sfgsfg2",size:15,color:"[var(--tg-theme-text-color)]",icon:"add",func:a}),(0,m.jsx)("p",{children:"Статистика"})]})})})]})}function y({chat:e}){const{isLoading:t,data:r,isSuccess:o}=p(e);return(0,m.jsxs)(m.Fragment,{children:[t&&(0,m.jsx)(n.Preloader,{}),(0,m.jsx)("ul",{role:"list",className:"mt-4 divide-y divide-[var(--tg-theme-hint-color)] pt-9",children:o&&r.map((e=>(0,m.jsx)(j,{group:e.chat},e.id)))}),(0,m.jsx)("div",{className:"pb-12 mb-8"})]})}var G=r(796);const b=(0,G.createSlice)({name:"groupApp",initialState:{groupSlide:!1,groupType:"",groupId:10},reducers:{showGroupSlide:(e,t)=>{e.groupSlide=t.payload},typeGroup:(e,t)=>{e.groupType=t.payload},dataGroup:(e,t)=>{e.groupId=t.payload}}}),{showGroupSlide:v,typeGroup:S,dataGroup:k}=b.actions,B=e=>e.groupApp.groupSlide,T=b.reducer,w=(0,G.configureStore)({reducer:{[a.reducerPath]:a.reducer,groupApp:T}}),C=s.useSelector,I=function(){const e=window.Telegram.WebApp,t=(0,s.useDispatch)();console.log(C(w.getState));const r=C(B);return r&&(e.BackButton.show(),e.onEvent("backButtonClicked",(()=>{t(v(!1))}))),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n.GlobalHeader,{children:(0,m.jsx)(n.ButtonAdd,{text:"Добавить группу",size:5,func:()=>{e.openTelegramLink("https://t.me/ViktorinaOnlineBot?startgroup=add")}})}),(0,m.jsx)(n.Page,{children:(0,m.jsxs)(n.MainBlock,{children:[(0,m.jsx)("div",{className:"text-center pt-9"}),(0,m.jsx)(y,{chat:521884639}),(0,m.jsx)("button",{className:"pt-4",onClick:()=>t(v(!0)),children:"Click"})]})}),(0,m.jsx)(n.SlidePage,{slide:r,children:(0,m.jsx)("p",{children:"Groups"})})]})},q=()=>(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(s.Provider,{store:w,children:(0,m.jsx)(I,{})})});var A=r(136);o.C(document.getElementById("root")).render((0,m.jsx)(A.StrictMode,{children:(0,m.jsx)(q,{})}))},32:(e,t,r)=>{var o=r(408);t.C=o.createRoot,o.hydrateRoot}}]);
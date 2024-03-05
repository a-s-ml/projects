(self.webpackChunkgroups=self.webpackChunkgroups||[]).push([[308],{308:(e,t,r)=>{r.r(t);var o=r(132),n=r(640),a=r(184),l=r(936),s=r(176);const i=(0,l.c9)((0,l._)({baseUrl:"https://api80q.ru/viktorinaonlinebot/"}),{maxRetries:5}),u=(0,s.KS)({reducerPath:"vikApi",refetchOnFocus:!0,baseQuery:i,tagTypes:["TypeGroup","TimeGroup","CategoryGroup","Validate","CountAvailableQuestionGroup","CountPublishedQuestionGroup"],endpoints:()=>({})}),c=u.injectEndpoints({endpoints:e=>({getGroups:e.query({query:e=>({url:`chat/findByReferal/${e}`}),providesTags:["TypeGroup","TimeGroup","CategoryGroup"]}),getInfoGroups:e.query({query:e=>({url:`chat/groupInfoById/${e}`})}),getGroupDb:e.query({query:e=>({url:`chat/findByChatId/${e}`}),providesTags:["TypeGroup","TimeGroup"]}),getMemberCountGroups:e.query({query:e=>({url:`chat/groupMemberCountById/${e}`})}),getFilePhoto:e.query({query:e=>({url:`chat/tgGetFilePhoto/${e}`})})})}),{useGetFilePhotoQuery:d,useGetGroupsQuery:p,useGetInfoGroupsQuery:h,useGetMemberCountGroupsQuery:m,useGetGroupDbQuery:g}=c;var x=r(776),f=r(344);function j({id:e}){const{data:t}=d(e);return(0,f.jsx)(f.Fragment,{children:t&&(0,f.jsx)("img",{className:"inline-block w-full rounded-full",src:`data:image/png;base64,${t}`,alt:e})})}function v({group:e}){var t,r,o;const{isError:n,data:l}=h(e),{data:s}=g(e);return(0,f.jsxs)(f.Fragment,{children:[n&&(0,f.jsx)("li",{children:"error"}),l&&s&&(0,f.jsx)("li",{className:"cursor-pointer",children:(0,f.jsx)(a.SimpleAccordionMain,{description:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(a.SimpleAccordionIcon,{size:10,children:[(null==(t=l.photo)?void 0:t.small_file_id)&&(0,f.jsx)(j,{id:null==(r=l.photo)?void 0:r.small_file_id}),!(null!=(o=l.photo)&&o.small_file_id)&&(0,f.jsx)("img",{className:"inline-block w-full h-full rounded-full",src:"https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75",alt:l.title})]}),(0,f.jsxs)(a.SimpleAccordionText,{children:[(0,f.jsx)("div",{className:"text-sm font-medium text-[var(--tg-theme-text-color)]",children:l.title}),l.username&&(0,f.jsxs)("p",{className:"text-sm text-[var(--tg-theme-hint-color)]",children:["@",l.username]})]})]}),content:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.ButtonIcon,{firstIcon:!0,text:"Статистика",color:"[var(--tg-theme-accent-text-color)]",icon:"stat",func:x._W}),(0,f.jsx)(a.ButtonIconConfirm,{firstIcon:!0,text:"Удалить",color:"red-500",icon:"delete",func:x.Qx,textConfirm:`Вы действительно хотите удалить бота из группы ${null!=l&&l.username?l.username:null==l?void 0:l.title}`})]})})})]})}function y({chat:e}){const{isLoading:t,data:r,isSuccess:o}=p(e);return(0,f.jsxs)(f.Fragment,{children:[t&&(0,f.jsx)(a.Preloader,{}),(0,f.jsx)("ul",{role:"list",className:"divide-y divide-[var(--tg-theme-hint-color)] pt-9",children:o&&r.map((e=>(0,f.jsx)(v,{group:e.chat},e.id)))}),(0,f.jsx)("div",{className:"pb-12 mb-8"})]})}const b=function(){const{backButtonState:e}=(0,x.IV)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.GlobalHeader,{children:(0,f.jsx)(a.ButtonIcon,{firstIcon:!0,text:"Добавить группу",color:"[var(--tg-theme-accent-text-color)]",icon:"add",func:x.En})}),(0,f.jsx)(a.Page,{children:(0,f.jsxs)(a.MainBlock,{children:[(0,f.jsx)("div",{className:"text-center pt-9"}),(0,f.jsx)(y,{chat:521884639})]})}),(0,f.jsx)(a.SlidePage,{slide:e,children:(0,f.jsx)("p",{children:"Groups"})})]})};var G=r(796);const B=(0,G.createSlice)({name:"groupApp",initialState:{groupId:10},reducers:{dataGroup:(e,t)=>{e.groupId=t.payload}}}),{dataGroup:k}=B.actions,I=B.reducer,S=(0,G.configureStore)({reducer:{[u.reducerPath]:u.reducer,groupApp:I}}),C=()=>(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(n.Provider,{store:S,children:(0,f.jsx)(b,{})})});var T=r(136);o.C(document.getElementById("root")).render((0,f.jsx)(T.StrictMode,{children:(0,f.jsx)(C,{})}))},776:(e,t,r)=>{r.d(t,{En:()=>a,gr:()=>n,Qx:()=>s,_W:()=>l,IV:()=>c,IF:()=>i});const o=window.Telegram.WebApp,n=(...e)=>e.filter(Boolean).join(" "),a=()=>{o.openTelegramLink("https://t.me/ViktorinaOnlineBot?startgroup=add")},l=()=>{o.showAlert("Данная функция находится в разработке",console.log("inDevelopment"))},s=e=>{if(e)return o.openTelegramLink("https://t.me/more_details")},i=e=>{if("string"==typeof e.value)return!(e.value.length<e.lengthMin||e.value.length>e.lengthMax);if("number"==typeof e.value)return 0!==e.value;if("object"==typeof e.value){let t=0,r=!1;return e.value.map((r=>{r.value.length>=e.lengthMin&&r.value.length<e.lengthMax&&t++})),r=t===e.value.length,r}return!1};var u=r(136);const c=()=>{const e=window.Telegram.WebApp,[t,r]=(0,u.useState)(!1),[o,n]=(0,u.useState)("");return(0,u.useEffect)((()=>(console.log("typeSlide",o),console.log("backButtonState",t),t?(e.BackButton.show(),e.onEvent("backButtonClicked",(()=>r(!1)))):(e.BackButton.hide(),n("")),()=>{e.BackButton.hide(),e.offEvent("backButtonClicked",(()=>r(!1)))})),[t]),{setTypeSlide:n,setBackButtonState:r,typeSlide:o,backButtonState:t}}},132:(e,t,r)=>{var o=r(408);t.C=o.createRoot,o.hydrateRoot}}]);
//# sourceMappingURL=308.js.map
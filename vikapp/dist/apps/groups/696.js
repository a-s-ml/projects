(self.webpackChunkgroups=self.webpackChunkgroups||[]).push([[696],{696:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var o=r(640),n=r(184),l=r(936),i=r(176);const u=(0,l.c9)((0,l._)({baseUrl:"https://api80q.ru/viktorinaonlinebot/"}),{maxRetries:5}),s=(0,i.KS)({reducerPath:"vikApi",refetchOnFocus:!0,baseQuery:u,tagTypes:["TypeGroup","TimeGroup","CategoryGroup","Validate","CountAvailableQuestionGroup","CountPublishedQuestionGroup"],endpoints:()=>({})}),a=s.injectEndpoints({endpoints:e=>({getGroups:e.query({query:e=>({url:`chat/findByReferal/${e}`}),providesTags:["TypeGroup","TimeGroup","CategoryGroup"]}),getInfoGroups:e.query({query:e=>({url:`chat/groupInfoById/${e}`})}),getGroupDb:e.query({query:e=>({url:`chat/findByChatId/${e}`}),providesTags:["TypeGroup","TimeGroup"]}),getMemberCountGroups:e.query({query:e=>({url:`chat/groupMemberCountById/${e}`})}),getFilePhoto:e.query({query:e=>({url:`chat/tgGetFilePhoto/${e}`})})})}),{useGetFilePhotoQuery:c,useGetGroupsQuery:p,useGetInfoGroupsQuery:d,useGetMemberCountGroupsQuery:h,useGetGroupDbQuery:g}=a;var m=r(776),x=r(344);function f({id:e}){const{data:t}=c(e);return(0,x.jsx)(x.Fragment,{children:t&&(0,x.jsx)("img",{className:"inline-block w-full rounded-full",src:`data:image/png;base64,${t}`,alt:e})})}function y({group:e}){var t,r,o;window.Telegram.WebApp;const{isError:l,data:i}=d(e),{data:u}=g(e);return(0,x.jsxs)(x.Fragment,{children:[l&&(0,x.jsx)("li",{children:"error"}),i&&u&&(0,x.jsx)("li",{className:"cursor-pointer",children:(0,x.jsx)(n.SimpleAccordionMain,{description:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(n.SimpleAccordionIcon,{size:10,children:[(null==(t=i.photo)?void 0:t.small_file_id)&&(0,x.jsx)(f,{id:null==(r=i.photo)?void 0:r.small_file_id}),!(null!=(o=i.photo)&&o.small_file_id)&&(0,x.jsx)("img",{className:"inline-block w-full h-full rounded-full",src:"https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75",alt:i.title})]}),(0,x.jsxs)(n.SimpleAccordionText,{children:[(0,x.jsx)("div",{className:"text-sm font-medium text-[var(--tg-theme-text-color)]",children:i.title}),i.username&&(0,x.jsxs)("p",{className:"text-sm text-[var(--tg-theme-hint-color)]",children:["@",i.username]})]})]}),content:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n.ButtonIcon,{firstIcon:!0,text:"Статистика",color:"[var(--tg-theme-accent-text-color)]",icon:"stat",func:m._W}),(0,x.jsx)(n.ButtonIconConfirm,{firstIcon:!0,text:"Удалить",color:"red-500",icon:"delete",func:m.Qx,textConfirm:`Вы действительно хотите удалить бота из группы ${null!=i&&i.username?i.username:null==i?void 0:i.title}`})]})})})]})}function j({chat:e}){const{isLoading:t,data:r,isSuccess:o}=p(e);return(0,x.jsxs)(x.Fragment,{children:[t&&(0,x.jsx)(n.Preloader,{}),(0,x.jsx)("ul",{role:"list",className:"divide-y divide-[var(--tg-theme-hint-color)] pt-9",children:o&&r.map((e=>(0,x.jsx)(y,{group:e.chat},e.id)))}),(0,x.jsx)("div",{className:"pb-12 mb-8"})]})}var v=r(796);const G=(0,v.createSlice)({name:"groupApp",initialState:{groupSlide:!1,groupType:"",groupId:10},reducers:{showGroupSlide:(e,t)=>{e.groupSlide=t.payload},typeGroup:(e,t)=>{e.groupType=t.payload},dataGroup:(e,t)=>{e.groupId=t.payload}}}),{showGroupSlide:b,typeGroup:w,dataGroup:B}=G.actions,I=e=>e.groupApp.groupSlide,T=G.reducer,k=(0,v.configureStore)({reducer:{[s.reducerPath]:s.reducer,groupApp:T}}),S=o.useSelector,A=function(){const e=(0,o.useDispatch)(),t=S(I);return(0,m.IV)(t,(()=>e(b(!1)))),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n.GlobalHeader,{children:(0,x.jsx)(n.ButtonIcon,{firstIcon:!0,text:"Добавить группу",color:"[var(--tg-theme-accent-text-color)]",icon:"add",func:m.En})}),(0,x.jsx)(n.Page,{children:(0,x.jsxs)(n.MainBlock,{children:[(0,x.jsx)("div",{className:"text-center pt-9"}),(0,x.jsx)(j,{chat:521884639})]})}),(0,x.jsx)(n.SlidePage,{slide:t,children:(0,x.jsx)("p",{children:"Groups"})})]})},C=()=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(o.Provider,{store:k,children:(0,x.jsx)(A,{})})})},776:(e,t,r)=>{r.d(t,{En:()=>l,gr:()=>n,Qx:()=>u,_W:()=>i,IV:()=>c,IF:()=>s});const o=window.Telegram.WebApp,n=(...e)=>e.filter(Boolean).join(" "),l=()=>{o.openTelegramLink("https://t.me/ViktorinaOnlineBot?startgroup=add")},i=()=>{o.showAlert("Данная функция находится в разработке",console.log("inDevelopment"))},u=e=>{if(e)return o.openTelegramLink("https://t.me/more_details")},s=e=>{if("string"==typeof e.value)return!(e.value.length<e.lengthMin||e.value.length>e.lengthMax);if("number"==typeof e.value)return 0!==e.value;if("object"==typeof e.value){let t=0,r=!1;return e.value.map((r=>{r.value.length>=e.lengthMin&&r.value.length<e.lengthMax&&t++})),r=t===e.value.length,r}return!1};var a=r(136);const c=(e,t)=>{const r=window.Telegram.WebApp;(0,a.useEffect)((()=>{e?(r.BackButton.show(),r.onEvent("backButtonClicked",(r.MainButton.hide(),t))):r.BackButton.hide()}),[e])}}}]);
//# sourceMappingURL=696.js.map
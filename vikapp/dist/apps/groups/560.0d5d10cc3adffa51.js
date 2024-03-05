(self.webpackChunkgroups=self.webpackChunkgroups||[]).push([[560],{560:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var o=r(640),n=r(184),l=r(392),a=r(280);const i=(0,l.c9)((0,l._)({baseUrl:"https://api80q.ru/viktorinaonlinebot/"}),{maxRetries:5}),u=(0,a.KS)({reducerPath:"vikApi",refetchOnFocus:!0,baseQuery:i,tagTypes:["TypeGroup","TimeGroup","CategoryGroup","Validate","CountAvailableQuestionGroup","CountPublishedQuestionGroup"],endpoints:()=>({})}),s=u.injectEndpoints({endpoints:e=>({getGroups:e.query({query:e=>({url:`chat/findByReferal/${e}`}),providesTags:["TypeGroup","TimeGroup","CategoryGroup"]}),getInfoGroups:e.query({query:e=>({url:`chat/groupInfoById/${e}`})}),getGroupDb:e.query({query:e=>({url:`chat/findByChatId/${e}`}),providesTags:["TypeGroup","TimeGroup"]}),getMemberCountGroups:e.query({query:e=>({url:`chat/groupMemberCountById/${e}`})}),getFilePhoto:e.query({query:e=>({url:`chat/tgGetFilePhoto/${e}`})})})}),{useGetFilePhotoQuery:c,useGetGroupsQuery:d,useGetInfoGroupsQuery:p,useGetMemberCountGroupsQuery:h,useGetGroupDbQuery:g}=s;var m=r(460),x=r(0);function f({id:e}){const{data:t}=c(e);return(0,x.jsx)(x.Fragment,{children:t&&(0,x.jsx)("img",{className:"inline-block w-full rounded-full",src:`data:image/png;base64,${t}`,alt:e})})}function y({group:e}){var t,r,o;const{isError:l,data:a}=p(e),{data:i}=g(e);return(0,x.jsxs)(x.Fragment,{children:[l&&(0,x.jsx)("li",{children:"error"}),a&&i&&(0,x.jsx)("li",{className:"cursor-pointer",children:(0,x.jsx)(n.SimpleAccordionMain,{description:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(n.SimpleAccordionIcon,{size:10,children:[(null==(t=a.photo)?void 0:t.small_file_id)&&(0,x.jsx)(f,{id:null==(r=a.photo)?void 0:r.small_file_id}),!(null!=(o=a.photo)&&o.small_file_id)&&(0,x.jsx)("img",{className:"inline-block w-full h-full rounded-full",src:"https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75",alt:a.title})]}),(0,x.jsxs)(n.SimpleAccordionText,{children:[(0,x.jsx)("div",{className:"text-sm font-medium text-[var(--tg-theme-text-color)]",children:a.title}),a.username&&(0,x.jsxs)("p",{className:"text-sm text-[var(--tg-theme-hint-color)]",children:["@",a.username]})]})]}),content:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n.ButtonIcon,{firstIcon:!0,text:"Статистика",color:"[var(--tg-theme-accent-text-color)]",icon:"stat",func:m._W}),(0,x.jsx)(n.ButtonIconConfirm,{firstIcon:!0,text:"Удалить",color:"red-500",icon:"delete",func:m.Qx,textConfirm:`Вы действительно хотите удалить бота из группы ${null!=a&&a.username?a.username:null==a?void 0:a.title}`})]})})})]})}function j({chat:e}){const{isLoading:t,data:r,isSuccess:o}=d(e);return(0,x.jsxs)(x.Fragment,{children:[t&&(0,x.jsx)(n.Preloader,{}),(0,x.jsx)("ul",{role:"list",className:"divide-y divide-[var(--tg-theme-hint-color)] pt-9",children:o&&r.map((e=>(0,x.jsx)(y,{group:e.chat},e.id)))}),(0,x.jsx)("div",{className:"pb-12 mb-8"})]})}const v=function(){const{backButtonState:e}=(0,m.IV)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n.GlobalHeader,{children:(0,x.jsx)(n.ButtonIcon,{firstIcon:!0,text:"Добавить группу",color:"[var(--tg-theme-accent-text-color)]",icon:"add",func:m.En})}),(0,x.jsx)(n.Page,{children:(0,x.jsxs)(n.MainBlock,{children:[(0,x.jsx)("div",{className:"text-center pt-9"}),(0,x.jsx)(j,{chat:521884639})]})}),(0,x.jsx)(n.SlidePage,{slide:e,children:(0,x.jsx)("p",{children:"Groups"})})]})};var G=r(796);const b=(0,G.createSlice)({name:"groupApp",initialState:{groupSlide:!1,groupType:"",groupId:10},reducers:{showGroupSlide:(e,t)=>{e.groupSlide=t.payload},typeGroup:(e,t)=>{e.groupType=t.payload},dataGroup:(e,t)=>{e.groupId=t.payload}}}),{showGroupSlide:B,typeGroup:k,dataGroup:S}=b.actions,I=b.reducer,T=(0,G.configureStore)({reducer:{[u.reducerPath]:u.reducer,groupApp:I}}),w=()=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(o.Provider,{store:T,children:(0,x.jsx)(v,{})})})},460:(e,t,r)=>{r.d(t,{En:()=>l,gr:()=>n,Qx:()=>i,_W:()=>a,IV:()=>c,IF:()=>u});const o=window.Telegram.WebApp,n=(...e)=>e.filter(Boolean).join(" "),l=()=>{o.openTelegramLink("https://t.me/ViktorinaOnlineBot?startgroup=add")},a=()=>{o.showAlert("Данная функция находится в разработке",console.log("inDevelopment"))},i=e=>{if(e)return o.openTelegramLink("https://t.me/more_details")},u=e=>{if("string"==typeof e.value)return!(e.value.length<e.lengthMin||e.value.length>e.lengthMax);if("number"==typeof e.value)return 0!==e.value;if("object"==typeof e.value){let t=0,r=!1;return e.value.map((r=>{r.value.length>=e.lengthMin&&r.value.length<e.lengthMax&&t++})),r=t===e.value.length,r}return!1};var s=r(136);const c=()=>{const e=window.Telegram.WebApp,[t,r]=(0,s.useState)(!1),[o,n]=(0,s.useState)("");return(0,s.useEffect)((()=>(t?(e.BackButton.show(),e.onEvent("backButtonClicked",(()=>r(!1)))):(e.BackButton.hide(),n("")),()=>{e.BackButton.hide(),e.offEvent("backButtonClicked",(()=>r(!1)))})),[t]),{setTypeSlide:n,setBackButtonState:r,typeSlide:o,backButtonState:t}}}}]);
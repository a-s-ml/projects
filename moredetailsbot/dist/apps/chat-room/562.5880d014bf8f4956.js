(self.webpackChunkchat_room=self.webpackChunkchat_room||[]).push([[562],{562:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var o=a(215),s=a(420),c=a(885);const n=(0,s.L5)((0,s.cw)({baseUrl:"https://api80q.ru/mdws/chats"})),i=(0,c.xP)({reducerPath:"mdwsApi",refetchOnFocus:!0,baseQuery:n,tagTypes:["Validate"],endpoints:()=>({})}),l=i.injectEndpoints({endpoints:e=>({validate:e.query({query:e=>({url:`chat/validateUser/${e}`}),providesTags:["Validate"]}),join:e.mutation({query:({chat:e,user:t})=>({url:"/join",method:"POST",body:{chat:e,user:t}})})})}),{useValidateQuery:r,useJoinMutation:d}=l;var h=a(179),m=a(343),p=a(48),u=a(490),x=a(85);const g=({accessToken:e})=>{console.log("accessToken",e);const[t,a]=(0,h.useState)([]);return(0,h.useEffect)((()=>{const o=(0,u.io)("https://api80q.ru/chat",{auth:{token:e},transports:["websocket","polling"]}),s=e=>{a((t=>[...t,e])),console.log("args ",e),console.log("state ",t)};o.on("chat_updated",s),o.on("exception",s),o.on("message",s)}),[e]),console.log("state ",t),(0,x.jsxs)(m.A,{children:[t&&t.map((e=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(p.A,{name:String(e.user),text:e.text,time:String(e.chat)},e.id)}))),(0,x.jsx)("b",{children:"1"})]})};var R=a(647),j=a(638);const C=(0,j.createSlice)({name:"chatRoomApp",initialState:{chatRoomSlide:!1,chatRoomType:"",chatRoomChat:{isLoading:!1,wsErrors:[],isAdmin:!1,nominationCount:0,participantCount:0},chatRoomData:void 0},reducers:{setChatAccessToken:(e,t)=>{e.chatRoomChat.accessToken=t.payload},initializePoll:(e,t)=>{e.chatRoomChat.poll=t.payload},loadingChat:(e,t)=>{e.chatRoomChat.isLoading=t.payload},showChatRoomSlide:(e,t)=>{e.chatRoomSlide=t.payload},typeChatRoom:(e,t)=>{e.chatRoomType=t.payload},dataChatRoom:(e,t)=>{e.chatRoomData=t.payload}}}),{showChatRoomSlide:y,typeChatRoom:v,dataChatRoom:k,initializePoll:f,loadingChat:w,setChatAccessToken:S}=C.actions,T=e=>e.chatRoomApp.chatRoomSlide,A=e=>e.chatRoomApp.chatRoomType,b=C.reducer,N=(0,j.configureStore)({reducer:{[i.reducerPath]:i.reducer,chatRoomApp:b},middleware:e=>e().concat(i.middleware)}),P=o.useSelector,B=()=>{const e=(0,o.useDispatch)(),t=P(T),a=P(A),[s,{data:c}]=d();return((e,t)=>{const a=window.Telegram.WebApp;(0,h.useEffect)((()=>{e?(a.BackButton.show(),a.onEvent("backButtonClicked",(a.MainButton.hide(),t))):a.BackButton.hide()}),[e])})(t,(()=>e(y(!1)))),console.log(t),console.log(a),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("ul",{role:"list",className:"text-left divide-y divide-[var(--tg-theme-hint-color)]",children:(0,x.jsx)(R.Contact,{handelClick:()=>{e(v("openChatRoom")),e(y(!0)),s({chat:10,user:3})},img:"photo2024-02-11_17-14-16.jpg",name:"Антонио-Молодец",time:"17.03.24",lastMessage:"...."})}),(0,x.jsx)(R.SlidePage,{slide:t,children:"openChatRoom"==a&&(0,x.jsx)(g,{accessToken:null==c?void 0:c.accessToken})})]})},q=()=>(0,x.jsx)(o.Provider,{store:N,children:(0,x.jsx)(B,{})})},343:(e,t,a)=>{a.d(t,{A:()=>c,X:()=>s});var o=a(85);function s({children:e}){return(0,o.jsx)("div",{className:"flex-1 overflow-auto bg-orange-200",children:(0,o.jsx)("div",{className:"py-2 px-3",children:e})})}const c=s},48:(e,t,a)=>{a.d(t,{A:()=>c,e:()=>s});var o=a(85);function s({name:e,text:t,time:a}){return(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:"flex mb-2",children:(0,o.jsxs)("div",{className:"rounded py-2 px-3 bg-slate-300",children:[(0,o.jsxs)("p",{className:"text-sm text-orange",children:["Имя: ",e]}),(0,o.jsx)("p",{className:"text-sm mt-1",children:t}),(0,o.jsx)("p",{className:"text-right text-xs text-grey-dark mt-1",children:a})]})})})}const c=s}}]);
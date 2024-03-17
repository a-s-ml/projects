(self.webpackChunkchat_room=self.webpackChunkchat_room||[]).push([[485],{485:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var o=a(215),s=a(638);const n=(0,s.createSlice)({name:"chatRoomApp",initialState:{chatRoomSlide:!1,chatRoomType:"",chatRoomChat:{isLoading:!1,wsErrors:[],isAdmin:!1,nominationCount:0,participantCount:0},chatRoomData:void 0},reducers:{setChatAccessToken:(e,t)=>{e.chatRoomChat.accessToken=t.payload},initializePoll:(e,t)=>{e.chatRoomChat.poll=t.payload},loadingChat:(e,t)=>{e.chatRoomChat.isLoading=t.payload},showChatRoomSlide:(e,t)=>{e.chatRoomSlide=t.payload},typeChatRoom:(e,t)=>{e.chatRoomType=t.payload},dataChatRoom:(e,t)=>{e.chatRoomData=t.payload}}}),{showChatRoomSlide:c,typeChatRoom:i,dataChatRoom:r,initializePoll:d,loadingChat:h,setChatAccessToken:l}=n.actions,m=e=>e.chatRoomApp.chatRoomSlide,p=e=>e.chatRoomApp.chatRoomData,u=e=>e.chatRoomApp.chatRoomType,x=n.reducer;var g=a(420),j=a(885);const v=(0,g.L5)((0,g.cw)({baseUrl:"https://api80q.ru/mdws/chats"})),R=(0,j.xP)({reducerPath:"mdwsApi",refetchOnFocus:!0,baseQuery:v,tagTypes:["Validate"],endpoints:()=>({})}),C=R.injectEndpoints({endpoints:e=>({validate:e.query({query:e=>({url:`/validateUser/${e}`}),providesTags:["Validate"]}),join:e.mutation({query:({chat:e,user:t})=>({url:"/join",method:"POST",body:{chat:e,user:t}})})})}),{useValidateQuery:y,useJoinMutation:w}=C,S=(0,s.configureStore)({reducer:{[R.reducerPath]:R.reducer,chatRoomApp:x},middleware:e=>e().concat(R.middleware)}),k=()=>(0,o.useDispatch)(),f=o.useSelector;var A=a(179),T=a(647),b=a(343),D=a(48),P=a(490),N=a(85);const U=({accessToken:e})=>{const t=f(p);console.log(t);const[a,o]=(0,A.useState)([]),[s,n]=(0,A.useState)("");return(0,A.useEffect)((()=>{const t=(0,P.io)("https://api80q.ru/chat",{auth:{token:e},transports:["websocket","polling"]}),a=e=>{o((t=>[...t,e]))};t.on("chat_updated",a),t.on("exception",a),t.on("message",a)}),[e]),(0,N.jsxs)(b.A,{children:[a&&t&&a.map((e=>e.text?t&&e.chat!==t.UserData.appUser?(0,N.jsx)(D.A,{name:String(t.UserData.user.username),text:e.text},e.id):(0,N.jsx)(T.MessageMyChat,{text:e.text},e.id):(0,N.jsx)(T.MessageSystem,{name:String(e.user),action:"присоединился",chat:String(e.chat)}))),(0,N.jsx)(T.SendPanel,{message:s,handleChange:e=>n(e.target.value)})]})},B=({user:e})=>{const t=k(),a=f(m),o=f(u),[s,{data:n}]=w();return((e,t)=>{const a=window.Telegram.WebApp;(0,A.useEffect)((()=>{e?(a.BackButton.show(),a.onEvent("backButtonClicked",(a.MainButton.hide(),t))):a.BackButton.hide()}),[e])})(a,(()=>t(c(!1)))),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("ul",{role:"list",className:"text-left divide-y divide-[var(--tg-theme-hint-color)]",children:(0,N.jsx)(T.Contact,{handelClick:()=>{t(i("openChatRoom")),t(c(!0)),s({chat:10,user:e.appUser})},img:"photo2024-02-11_17-14-16.jpg",name:"Антонио-Молодец",time:"17.03.24",lastMessage:"...."})}),(0,N.jsx)(T.SlidePage,{slide:a,children:"openChatRoom"==o&&(0,N.jsx)(U,{accessToken:null==n?void 0:n.accessToken})})]})},M=()=>{const e=window.Telegram.WebApp,t=k(),{data:a,isSuccess:o,isLoading:s}=y(e.initData);return o&&t(r(a)),(0,N.jsx)(N.Fragment,{children:a&&(0,N.jsx)(B,{user:a.UserData})})},q=()=>(0,N.jsx)(o.Provider,{store:S,children:(0,N.jsx)(M,{})})},343:(e,t,a)=>{a.d(t,{A:()=>n,X:()=>s});var o=a(85);function s({children:e}){return(0,o.jsx)("div",{className:"flex-1 overflow-auto w-screen h-screen px-5",children:(0,o.jsx)("div",{className:"py-2 px-3",children:e})})}const n=s},48:(e,t,a)=>{a.d(t,{A:()=>n,e:()=>s});var o=a(85);function s({name:e,text:t}){const a=new Date;return(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:"flex mb-2 max-w-[75%]",children:(0,o.jsxs)("div",{className:"rounded py-2 px-3 bg-[var(--tg-theme-hint-color)]",children:[(0,o.jsxs)("p",{className:"text-sm text-[var(--tg-theme-bg-color)]",children:["Имя: ",e]}),(0,o.jsx)("p",{className:"text-sm mt-1 text-[var(--tg-theme-text-color)]",children:t}),(0,o.jsx)("p",{className:"text-right text-xs text-[var(--tg-theme-bg-color)] mt-1",children:a.toString()})]})})})}const n=s}}]);
(self.webpackChunkchat_room=self.webpackChunkchat_room||[]).push([[151],{151:(e,t,a)=>{a.r(t);var o=a(179),s=a(873),c=a(215),n=a(420),i=a(885);const r=(0,n.L5)((0,n.cw)({baseUrl:"https://api80q.ru/mdws/chats"})),d=(0,i.xP)({reducerPath:"mdwsApi",refetchOnFocus:!0,baseQuery:r,tagTypes:["Validate"],endpoints:()=>({})}),h=d.injectEndpoints({endpoints:e=>({validate:e.query({query:e=>({url:`chat/validateUser/${e}`}),providesTags:["Validate"]}),join:e.mutation({query:({chat:e,user:t})=>({url:"/join",method:"POST",body:{chat:e,user:t}})})})}),{useValidateQuery:l,useJoinMutation:m}=h;var p=a(647),u=a(343),x=a(48),g=a(490),v=a(85);const R=({accessToken:e})=>{console.log("accessToken",e);const[t,a]=(0,o.useState)([]);return(0,o.useEffect)((()=>{const t=(0,g.io)("https://api80q.ru/chat",{auth:{token:e},transports:["websocket","polling"]}),o=e=>{a((t=>[...t,e]))};t.on("chat_updated",o),t.on("exception",o),t.on("message",o)}),[e]),console.log("state ",t),(0,v.jsxs)(u.A,{children:[t&&t.map((e=>e.text?(0,v.jsx)(x.A,{name:String(e.user),text:e.text,time:String(e.chat)},e.id):(0,v.jsx)(p.MessageSystem,{name:String(e.user),action:"присоединился",chat:String(e.chat)}))),(0,v.jsx)("b",{children:"1"})]})};var j=a(638);const y=(0,j.createSlice)({name:"chatRoomApp",initialState:{chatRoomSlide:!1,chatRoomType:"",chatRoomChat:{isLoading:!1,wsErrors:[],isAdmin:!1,nominationCount:0,participantCount:0},chatRoomData:void 0},reducers:{setChatAccessToken:(e,t)=>{e.chatRoomChat.accessToken=t.payload},initializePoll:(e,t)=>{e.chatRoomChat.poll=t.payload},loadingChat:(e,t)=>{e.chatRoomChat.isLoading=t.payload},showChatRoomSlide:(e,t)=>{e.chatRoomSlide=t.payload},typeChatRoom:(e,t)=>{e.chatRoomType=t.payload},dataChatRoom:(e,t)=>{e.chatRoomData=t.payload}}}),{showChatRoomSlide:C,typeChatRoom:k,dataChatRoom:S,initializePoll:w,loadingChat:f,setChatAccessToken:T}=y.actions,b=e=>e.chatRoomApp.chatRoomSlide,A=e=>e.chatRoomApp.chatRoomType,N=y.reducer,P=(0,j.configureStore)({reducer:{[d.reducerPath]:d.reducer,chatRoomApp:N},middleware:e=>e().concat(d.middleware)}),B=c.useSelector,E=()=>{const e=(0,c.useDispatch)(),t=B(b),a=B(A),[s,{data:n}]=m();return((e,t)=>{const a=window.Telegram.WebApp;(0,o.useEffect)((()=>{e?(a.BackButton.show(),a.onEvent("backButtonClicked",(a.MainButton.hide(),t))):a.BackButton.hide()}),[e])})(t,(()=>e(C(!1)))),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("ul",{role:"list",className:"text-left divide-y divide-[var(--tg-theme-hint-color)]",children:(0,v.jsx)(p.Contact,{handelClick:()=>{e(k("openChatRoom")),e(C(!0)),s({chat:10,user:3})},img:"photo2024-02-11_17-14-16.jpg",name:"Антонио-Молодец",time:"17.03.24",lastMessage:"...."})}),(0,v.jsx)(p.SlidePage,{slide:t,children:"openChatRoom"==a&&(0,v.jsx)(R,{accessToken:null==n?void 0:n.accessToken})})]})},q=()=>(0,v.jsx)(c.Provider,{store:P,children:(0,v.jsx)(E,{})});s.H(document.getElementById("root")).render((0,v.jsx)(o.StrictMode,{children:(0,v.jsx)(q,{})}))},343:(e,t,a)=>{a.d(t,{A:()=>c,X:()=>s});var o=a(85);function s({children:e}){return(0,o.jsx)("div",{className:"flex-1 overflow-auto w-screen h-screen",children:(0,o.jsx)("div",{className:"py-2 px-3",children:e})})}const c=s},48:(e,t,a)=>{a.d(t,{A:()=>c,e:()=>s});var o=a(85);function s({name:e,text:t,time:a}){return(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:"flex mb-2",children:(0,o.jsxs)("div",{className:"rounded py-2 px-3 bg-[var(--tg-theme-hint-color)]",children:[(0,o.jsxs)("p",{className:"text-sm text-[var(--tg-theme-bg-color)]",children:["Имя: ",e]}),(0,o.jsx)("p",{className:"text-sm mt-1 text-[var(--tg-theme-text-color)]",children:t}),(0,o.jsx)("p",{className:"text-right text-xs text-[var(--tg-theme-bg-color)] mt-1",children:a})]})})})}const c=s},873:(e,t,a)=>{var o=a(67);t.H=o.createRoot,o.hydrateRoot}}]);
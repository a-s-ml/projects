(self.webpackChunkchat_room=self.webpackChunkchat_room||[]).push([[268],{268:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var o=a(215),s=a(420),c=a(885);const n=(0,s.L5)((0,s.cw)({baseUrl:"https://api80q.ru/mdws/chats"})),i=(0,c.xP)({reducerPath:"mdwsApi",refetchOnFocus:!0,baseQuery:n,tagTypes:["Validate"],endpoints:()=>({})}),r=i.injectEndpoints({endpoints:e=>({validate:e.query({query:e=>({url:`chat/validateUser/${e}`}),providesTags:["Validate"]}),join:e.mutation({query:({chat:e,user:t})=>({url:"/join",method:"POST",body:{chat:e,user:t}})})})}),{useValidateQuery:l,useJoinMutation:d}=r;var h=a(85);const m=function({children:e}){return(0,h.jsx)("div",{className:"flex-1 overflow-auto bg-orange-200",children:(0,h.jsx)("div",{className:"py-2 px-3",children:e})})},u=function({name:e,text:t,time:a}){return(0,h.jsx)("div",{children:(0,h.jsx)("div",{className:"flex mb-2",children:(0,h.jsxs)("div",{className:"rounded py-2 px-3 bg-slate-300",children:[(0,h.jsx)("p",{className:"text-sm text-orange",children:e}),(0,h.jsx)("p",{className:"text-sm mt-1",children:t}),(0,h.jsx)("p",{className:"text-right text-xs text-grey-dark mt-1",children:a})]})})})};var p=a(179),x=a(490);const g=({accessToken:e})=>{console.log("accessToken",e);const[t,a]=(0,p.useState)([{id:0,user:0,chat:0,text:""}]);return(0,p.useEffect)((()=>{const o=(0,x.io)("https://api80q.ru/chat",{auth:{token:e},transports:["websocket","polling"]}),s=(...e)=>{a((t=>Object.assign({},t,{args:e}))),console.log("args ",e),console.log("state ",t)};o.on("chat_updated",s),o.on("exception",s),o.on("message",s)}),[e]),console.log("state ",t),(0,h.jsx)("p",{children:(0,h.jsxs)(m,{children:[t&&t.map((e=>(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(u,{name:String(e.user),text:e.text,time:String(e.chat)},e.id)}))),(0,h.jsx)("b",{children:"1"})]})})},j=()=>{const[e,{data:t}]=d();return(0,h.jsxs)("div",{className:"text-center p-10",children:[(0,h.jsx)("button",{className:"p-2 text-red-300 bg-slate-100",onClick:()=>(e({chat:10,user:3}),void console.log(t)),children:"Click"}),(0,h.jsx)(g,{accessToken:null==t?void 0:t.accessToken})]})};var y=a(638);const C=(0,y.createSlice)({name:"chatRoomApp",initialState:{chatRoomSlide:!1,chatRoomType:"",chatRoomChat:{isLoading:!1,wsErrors:[],isAdmin:!1,nominationCount:0,participantCount:0},chatRoomData:void 0},reducers:{setChatAccessToken:(e,t)=>{e.chatRoomChat.accessToken=t.payload},initializePoll:(e,t)=>{e.chatRoomChat.poll=t.payload},loadingChat:(e,t)=>{e.chatRoomChat.isLoading=t.payload},showChatRoomSlide:(e,t)=>{e.chatRoomSlide=t.payload},typeChatRoom:(e,t)=>{e.chatRoomType=t.payload},dataChatRoom:(e,t)=>{e.chatRoomData=t.payload}}}),{showChatRoomSlide:v,typeChatRoom:R,dataChatRoom:k,initializePoll:b,loadingChat:f,setChatAccessToken:w}=C.actions,T=C.reducer,S=(0,y.configureStore)({reducer:{[i.reducerPath]:i.reducer,chatRoomApp:T},middleware:e=>e().concat(i.middleware)}),N=()=>(0,h.jsx)(o.Provider,{store:S,children:(0,h.jsx)(j,{})})}}]);
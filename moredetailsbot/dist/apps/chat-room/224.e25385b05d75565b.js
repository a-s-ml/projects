(self.webpackChunkchat_room=self.webpackChunkchat_room||[]).push([[224],{224:(a,o,e)=>{e.r(o),e.d(o,{default:()=>S});var t=e(215),c=e(420),s=e(885);const i=(0,c.L5)((0,c.cw)({baseUrl:"https://api80q.ru/mdws/chats"})),n=(0,s.xP)({reducerPath:"mdwsApi",refetchOnFocus:!0,baseQuery:i,tagTypes:["Validate"],endpoints:()=>({})}),r=n.injectEndpoints({endpoints:a=>({validate:a.query({query:a=>({url:`chat/validateUser/${a}`}),providesTags:["Validate"]}),join:a.mutation({query:({chat:a,user:o})=>({url:"/join",method:"POST",body:{chat:a,user:o}})})})}),{useValidateQuery:d,useJoinMutation:h}=r;var l=e(85);const p=function({children:a}){return(0,l.jsx)("div",{className:"flex-1 overflow-auto bg-orange-200",children:(0,l.jsx)("div",{className:"py-2 px-3",children:a})})};var u=e(179),m=e(490);const C=({accessToken:a})=>((0,u.useEffect)((()=>{const o=(0,m.io)("https://api80q.ru/chat",{auth:{token:a},transports:["websocket","polling"]});o.on("chat_updated",(({data:a})=>{console.log(a)})),o.on("exception",(({data:a})=>{console.log(a)}))}),[a]),(0,l.jsx)("p",{children:(0,l.jsxs)(p,{children:[(0,l.jsx)("p",{children:"1"}),(0,l.jsx)("p",{children:"2"}),(0,l.jsx)("p",{children:"3"}),(0,l.jsx)("p",{children:"4"})]})})),y=()=>{const[a,{data:o}]=h(),e=()=>{a({chat:10,user:3})};return(0,l.jsxs)("p",{children:[(0,l.jsx)("button",{onClick:()=>e,children:"Click"}),o&&(0,l.jsx)(C,{accessToken:o.accessToken})]})};var R=e(638);const x=(0,R.createSlice)({name:"chatRoomApp",initialState:{chatRoomSlide:!1,chatRoomType:"",chatRoomChat:{isLoading:!1,wsErrors:[],isAdmin:!1,nominationCount:0,participantCount:0},chatRoomData:void 0},reducers:{setChatAccessToken:(a,o)=>{a.chatRoomChat.accessToken=o.payload},initializePoll:(a,o)=>{a.chatRoomChat.poll=o.payload},loadingChat:(a,o)=>{a.chatRoomChat.isLoading=o.payload},showChatRoomSlide:(a,o)=>{a.chatRoomSlide=o.payload},typeChatRoom:(a,o)=>{a.chatRoomType=o.payload},dataChatRoom:(a,o)=>{a.chatRoomData=o.payload}}}),{showChatRoomSlide:j,typeChatRoom:k,dataChatRoom:g,initializePoll:v,loadingChat:w,setChatAccessToken:T}=x.actions,f=x.reducer,b=(0,R.configureStore)({reducer:{[n.reducerPath]:n.reducer,chatRoomApp:f},middleware:a=>a().concat(n.middleware)}),S=()=>(0,l.jsx)(t.Provider,{store:b,children:(0,l.jsx)(y,{})})}}]);
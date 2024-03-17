(self.webpackChunkchat_room=self.webpackChunkchat_room||[]).push([[72],{8072:(e,t,a)=>{a.r(t),a.d(t,{default:()=>W});var s=a(8215),o=a(6638);const n=(0,o.createSlice)({name:"chatRoomApp",initialState:{chatRoomSlide:!1,chatRoomType:"",chatRoomChat:{id:0,isLoading:!1,wsErrors:[],isAdmin:!1,nominationCount:0,participantCount:0},chatRoomData:void 0},reducers:{setChatAccessToken:(e,t)=>{e.chatRoomChat.accessToken=t.payload},setChatRoomChatId:(e,t)=>{e.chatRoomChat.id=t.payload},initializePoll:(e,t)=>{e.chatRoomChat.poll=t.payload},loadingChat:(e,t)=>{e.chatRoomChat.isLoading=t.payload},showChatRoomSlide:(e,t)=>{e.chatRoomSlide=t.payload},typeChatRoom:(e,t)=>{e.chatRoomType=t.payload},dataChatRoom:(e,t)=>{e.chatRoomData=t.payload}}}),{showChatRoomSlide:i,typeChatRoom:c,dataChatRoom:r,initializePoll:l,loadingChat:d,setChatAccessToken:h,setChatRoomChatId:m}=n.actions,p=e=>e.chatRoomApp.chatRoomSlide,u=e=>e.chatRoomApp.chatRoomData,g=e=>e.chatRoomApp.chatRoomType,x=e=>e.chatRoomApp.chatRoomChat.id,f=n.reducer;var C=a(39),w=a(2885);const j=(0,C.L5)((0,C.cw)({baseUrl:"https://api80q.ru/mdws/chats"})),y=(0,w.xP)({reducerPath:"mdwsApi",refetchOnFocus:!0,baseQuery:j,tagTypes:["Validate"],endpoints:()=>({})}),R=y.injectEndpoints({endpoints:e=>({validate:e.query({query:e=>({url:`/validateUser/${e}`}),providesTags:["Validate"]}),join:e.mutation({query:({chat:e,user:t})=>({url:"/join",method:"POST",body:{chat:e,user:t}})}),getMessage:e.query({query:e=>({url:`/messages/${e}`})})})}),{useValidateQuery:v,useJoinMutation:k,useGetMessageQuery:S}=R,b=(0,o.configureStore)({reducer:{[y.reducerPath]:y.reducer,chatRoomApp:f},middleware:e=>e().concat(y.middleware)}),A=()=>(0,s.useDispatch)(),T=s.useSelector;var D=a(9179),M=a.n(D),E=a(1647),L=a(4343),P=a(1048),U=a(3490);const N=e=>(0,D.useMemo)((()=>(0,U.io)("https://api80q.ru/chat",{auth:{token:e},transports:["websocket","polling"]})),[]);var q=a(1085);const O=({accessToken:e})=>{const t=(0,D.useRef)(null),a=(A(),T(x)),s=T(u),{data:o,isSuccess:n,isLoading:i}=S(a),c=N(e),[r,l]=(0,D.useState)([]),[d,h]=(0,D.useState)("");return(0,D.useEffect)((()=>{t.current&&t.current.scrollIntoView({behavior:"smooth",block:"end"})}),[r]),(0,D.useEffect)((()=>{const e=e=>{l((t=>[...t,e])),console.log("args",e)};c.on("chat_updated",e),c.on("exception",e),c.on("message",e)}),[c]),(0,q.jsxs)(L.A,{children:[i&&(0,q.jsx)(E.Preloader,{}),s&&n&&o.map((e=>e.user!==s.UserData.appUser?(0,q.jsx)(P.A,{name:String(e.user),text:e.text},e.id):(0,q.jsx)(E.MessageMyChat,{text:e.text},e.id))),r&&s&&r.map((e=>"message"===e.type&&e.text?e.user.id!==s.UserData.appUser?(0,q.jsx)(P.A,{name:String(e.user.name),text:e.text.text},e.type):(0,q.jsx)(E.MessageMyChat,{text:e.text.text},e.type):(0,q.jsx)(E.MessageSystem,{name:String(e.user.name),action:e.type,chat:String(e.chat.name)}))),(0,q.jsx)("div",{className:"pb-4",ref:t}),(0,q.jsx)(E.SendPanel,{message:d,handleChange:e=>h(e.target.value),handleSubmit:e=>{e.trim(),""!=e&&(c.emit("message",e),h(""))}})]})};var B=a(6658),F=a.n(B);const V=new class{constructor(){this.peer=void 0,this.peer||(this.peer=new RTCPeerConnection({iceServers:[{urls:["stun:stun.l.google.com:19302","stun:global.stun.twilio.com:3478"]}]}))}async getAnswer(e){if(this.peer){await this.peer.setRemoteDescription(e);const t=await this.peer.createAnswer();return await this.peer.setLocalDescription(new RTCSessionDescription(t)),t}}async setLocalDescription(e){this.peer&&await this.peer.setRemoteDescription(new RTCSessionDescription(e))}async getOffer(){if(this.peer){const e=await this.peer.createOffer();return await this.peer.setLocalDescription(new RTCSessionDescription(e)),e}}},_=({accessToken:e})=>{const t=N(e),[a,s]=(0,D.useState)(null),[o,n]=(0,D.useState)(),[i,c]=(0,D.useState)(),r=(0,D.useCallback)((({email:e,id:t})=>{console.log(`Email ${e} joined room`),s(t)}),[]),l=(0,D.useCallback)((async()=>{const e=await navigator.mediaDevices.getUserMedia({audio:!0,video:!0}),s=await V.getOffer();t.emit("user:call",{to:a,offer:s}),n(e)}),[a,t]),d=(0,D.useCallback)((async({from:e,offer:a})=>{s(e);const o=await navigator.mediaDevices.getUserMedia({audio:!0,video:!0});n(o),console.log("Incoming Call",e,a);const i=await V.getAnswer(a);t.emit("call:accepted",{to:e,ans:i})}),[t]),h=(0,D.useCallback)((()=>{if(o)for(const e of o.getTracks())V.peer.addTrack(e,o)}),[o]),m=(0,D.useCallback)((({from:e,ans:t})=>{V.setLocalDescription(t),console.log("Call Accepted!"),h()}),[h]),p=(0,D.useCallback)((async()=>{const e=await V.getOffer();t.emit("peer:nego:needed",{offer:e,to:a})}),[a,t]);(0,D.useEffect)((()=>(V.peer.addEventListener("negotiationneeded",p),()=>{V.peer.removeEventListener("negotiationneeded",p)})),[p]);const u=(0,D.useCallback)((async({from:e,offer:a})=>{const s=await V.getAnswer(a);t.emit("peer:nego:done",{to:e,ans:s})}),[t]),g=(0,D.useCallback)((async({ans:e})=>{await V.setLocalDescription(e)}),[]);return(0,D.useEffect)((()=>{V.peer.addEventListener("track",(async e=>{const t=e.streams;console.log("GOT TRACKS!!"),c(t[0])}))}),[]),(0,D.useEffect)((()=>(t.on("user:joined",r),t.on("incomming:call",d),t.on("call:accepted",m),t.on("peer:nego:needed",u),t.on("peer:nego:final",g),()=>{t.off("user:joined",r),t.off("incomming:call",d),t.off("call:accepted",m),t.off("peer:nego:needed",u),t.off("peer:nego:final",g)})),[t,r,d,m,u,g]),(0,q.jsx)(L.A,{children:(0,q.jsxs)("div",{children:[(0,q.jsx)("h1",{children:"Room Page"}),(0,q.jsx)("h4",{children:a?"Connected":"No one in room"}),o&&(0,q.jsx)("button",{onClick:h,children:"Send Stream"}),a&&(0,q.jsx)("button",{onClick:l,children:"CALL"}),o&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("h1",{children:"My Stream"}),(0,q.jsx)(F(),{playing:!0,muted:!0,height:"100px",width:"200px",url:o})]}),i&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("h1",{children:"Remote Stream"}),(0,q.jsx)(F(),{playing:!0,muted:!0,height:"100px",width:"200px",url:i})]})]})})},I=({user:e})=>{const t=A(),a=T(p),s=T(g),[o,{data:n}]=k();((e,t)=>{const a=window.Telegram.WebApp;(0,D.useEffect)((()=>{e?(a.BackButton.show(),a.onEvent("backButtonClicked",(a.MainButton.hide(),t))):a.BackButton.hide()}),[e])})(a,(()=>t(i(!1))));const r=()=>{t(c("openChatRoom")),t(m(10)),t(i(!0)),o({chat:10,user:e.appUser})};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)("ul",{role:"list",className:"text-left divide-y divide-[var(--tg-theme-hint-color)]",children:[(0,q.jsx)(E.Contact,{handelClick:r,img:"photo2024-02-11_17-14-16.jpg",name:"Антон",time:"17.03.24",lastMessage:"text"}),(0,q.jsx)(E.Contact,{handelClick:r,img:"photo2024-02-11_17-14-16.jpg",name:"Антон",time:"18.03.24",lastMessage:"video"})]}),(0,q.jsxs)(E.SlidePage,{slide:a,children:["openChatRoom"==s&&n&&(0,q.jsx)(O,{accessToken:n.accessToken}),"openVideoRoom"==s&&n&&(0,q.jsx)(_,{accessToken:n.accessToken})]})]})},Q=()=>{const e=window.Telegram.WebApp,t=A(),{data:a,isSuccess:s}=v(e.initData);return s&&t(r(a)),(0,q.jsx)(q.Fragment,{children:a&&(0,q.jsx)(I,{user:a.UserData})})},W=()=>{const e=window.Telegram.WebApp;return M().useEffect((()=>{e.expand(),e.ready()}),[]),(0,q.jsx)(s.Provider,{store:b,children:(0,q.jsx)(Q,{})})}},4343:(e,t,a)=>{a.d(t,{A:()=>n,X:()=>o});var s=a(1085);function o({children:e}){return(0,s.jsx)("div",{className:"flex flex-col px-2 overflow-auto w-screen h-screen pb-16",children:e})}const n=o},1048:(e,t,a)=>{a.d(t,{A:()=>n,e:()=>o});var s=a(1085);function o({name:e,text:t}){const a=new Date;return(0,s.jsx)("div",{className:"flex mb-2",children:(0,s.jsxs)("div",{className:"rounded py-2 px-3 bg-[var(--tg-theme-hint-color)] max-w-[75%]",children:[(0,s.jsx)("p",{className:"text-sm text-left text-[var(--tg-theme-bg-color)]",children:e}),(0,s.jsx)("p",{className:"text-sm mt-4 text-left text-[var(--tg-theme-bg-color)]",children:t}),(0,s.jsx)("p",{className:"text-left text-xs text-[var(--tg-theme-bg-color)] mt-4",children:a.toString()})]})})}const n=o}}]);
(self.webpackChunkchat_room=self.webpackChunkchat_room||[]).push([[856],{1856:(e,t,a)=>{a.r(t);var o=a(9179),s=a.n(o),n=a(5873),r=a(8215),i=a(6638);const c=(0,i.createSlice)({name:"chatRoomApp",initialState:{chatRoomSlide:!1,chatRoomType:"",chatRoomChat:{id:0,isLoading:!1,wsErrors:[],isAdmin:!1,nominationCount:0,participantCount:0},chatRoomData:void 0},reducers:{setChatAccessToken:(e,t)=>{e.chatRoomChat.accessToken=t.payload},setChatRoomChatId:(e,t)=>{e.chatRoomChat.id=t.payload},initializePoll:(e,t)=>{e.chatRoomChat.poll=t.payload},loadingChat:(e,t)=>{e.chatRoomChat.isLoading=t.payload},showChatRoomSlide:(e,t)=>{e.chatRoomSlide=t.payload},typeChatRoom:(e,t)=>{e.chatRoomType=t.payload},dataChatRoom:(e,t)=>{e.chatRoomData=t.payload}}}),{showChatRoomSlide:l,typeChatRoom:d,dataChatRoom:h,initializePoll:m,loadingChat:p,setChatAccessToken:u,setChatRoomChatId:g}=c.actions,x=e=>e.chatRoomApp.chatRoomSlide,f=e=>e.chatRoomApp.chatRoomData,C=e=>e.chatRoomApp.chatRoomType,j=e=>e.chatRoomApp.chatRoomChat.id,w=c.reducer;var y=a(39),R=a(2885);const v=(0,y.L5)((0,y.cw)({baseUrl:"https://api80q.ru/mdws/chats"})),k=(0,R.xP)({reducerPath:"mdwsApi",refetchOnFocus:!0,baseQuery:v,tagTypes:["Validate"],endpoints:()=>({})}),S=k.injectEndpoints({endpoints:e=>({validate:e.query({query:e=>({url:`/validateUser/${e}`}),providesTags:["Validate"]}),join:e.mutation({query:({chat:e,user:t})=>({url:"/join",method:"POST",body:{chat:e,user:t}})}),getMessage:e.query({query:e=>({url:`/messages/${e}`})})})}),{useValidateQuery:b,useJoinMutation:A,useGetMessageQuery:T}=S,D=(0,i.configureStore)({reducer:{[k.reducerPath]:k.reducer,chatRoomApp:w},middleware:e=>e().concat(k.middleware)}),M=()=>(0,r.useDispatch)(),E=r.useSelector;var L=a(1647),P=a(4343),U=a(1048),N=a(3490);const O=e=>(0,o.useMemo)((()=>(0,N.io)("https://api80q.ru/chat",{auth:{token:e},transports:["websocket","polling"]})),[]);var q=a(1085);const B=({accessToken:e})=>{const t=(0,o.useRef)(null),a=E(j),s=E(f),{data:n,isSuccess:r,isLoading:i}=T(a),c=O(e),[l,d]=(0,o.useState)([]),[h,m]=(0,o.useState)("");return(0,o.useEffect)((()=>{t.current&&t.current.scrollIntoView({behavior:"smooth",block:"end"})}),[l]),(0,o.useEffect)((()=>{const e=e=>{d((t=>[...t,e])),console.log("args",e)};c.on("chat_updated",e),c.on("exception",e),c.on("message",e)}),[c]),(0,q.jsxs)(P.A,{children:[i&&(0,q.jsx)(L.Preloader,{}),s&&r&&n.map((e=>e.user!==s.UserData.appUser?(0,q.jsx)(U.A,{name:String(e.user),text:e.text},e.id):(0,q.jsx)(L.MessageMyChat,{text:e.text},e.id))),l&&s&&l.map((e=>"message"===e.type&&e.text?e.user.id!==s.UserData.appUser?(0,q.jsx)(U.A,{name:String(e.user.name),text:e.text.text},e.type):(0,q.jsx)(L.MessageMyChat,{text:e.text.text},e.type):(0,q.jsx)(L.MessageSystem,{name:String(e.user.name),action:e.type,chat:String(e.chat.name)}))),(0,q.jsx)("div",{className:"pb-4",ref:t}),(0,q.jsx)(L.SendPanel,{message:h,handleChange:e=>m(e.target.value),handleSubmit:e=>{e.trim(),""!=e&&(c.emit("message",e),m(""))}})]})};var I=a(6658),V=a.n(I);const F=new class{constructor(){this.peer=void 0,this.peer||(this.peer=new RTCPeerConnection({iceServers:[{urls:["stun:stun.l.google.com:19302","stun:global.stun.twilio.com:3478"]}]}))}async getAnswer(e){if(this.peer){await this.peer.setRemoteDescription(e);const t=await this.peer.createAnswer();return await this.peer.setLocalDescription(new RTCSessionDescription(t)),t}}async setLocalDescription(e){this.peer&&await this.peer.setRemoteDescription(new RTCSessionDescription(e))}async getOffer(){if(this.peer){const e=await this.peer.createOffer();return await this.peer.setLocalDescription(new RTCSessionDescription(e)),e}}},_=({accessToken:e})=>{const t=E(j),a=E(f),s=O(e),[n,r]=(0,o.useState)(null),[i,c]=(0,o.useState)(),[l,d]=(0,o.useState)(),h=(0,o.useCallback)((({email:e,id:t})=>{console.log(`Email ${e} joined room`),r(t)}),[]),m=(0,o.useCallback)((async()=>{const e=await navigator.mediaDevices.getUserMedia({audio:!0,video:!0}),t=await F.getOffer();s.emit("user:call",{to:n,offer:t}),c(e)}),[n,s]),p=(0,o.useCallback)((async({from:e,offer:t})=>{r(e);const a=await navigator.mediaDevices.getUserMedia({audio:!0,video:!0});c(a),console.log("Incoming Call",e,t);const o=await F.getAnswer(t);s.emit("call:accepted",{to:e,ans:o})}),[s]),u=(0,o.useCallback)((()=>{if(i)for(const e of i.getTracks())F.peer.addTrack(e,i)}),[i]),g=(0,o.useCallback)((({from:e,ans:t})=>{F.setLocalDescription(t),console.log("Call Accepted!"),u()}),[u]),x=(0,o.useCallback)((async()=>{const e=await F.getOffer();s.emit("peer:nego:needed",{offer:e,to:n})}),[n,s]);(0,o.useEffect)((()=>(F.peer.addEventListener("negotiationneeded",x),()=>{F.peer.removeEventListener("negotiationneeded",x)})),[x]);const C=(0,o.useCallback)((async({from:e,offer:t})=>{const a=await F.getAnswer(t);s.emit("peer:nego:done",{to:e,ans:a})}),[s]),w=(0,o.useCallback)((async({ans:e})=>{await F.setLocalDescription(e)}),[]);return(0,o.useEffect)((()=>{F.peer.addEventListener("track",(async e=>{const t=e.streams;console.log("GOT TRACKS!!"),d(t[0])}))}),[]),(0,o.useEffect)((()=>(s.on("user:joined",h),s.on("incomming:call",p),s.on("call:accepted",g),s.on("peer:nego:needed",C),s.on("peer:nego:final",w),()=>{s.off("user:joined",h),s.off("incomming:call",p),s.off("call:accepted",g),s.off("peer:nego:needed",C),s.off("peer:nego:final",w)})),[s,h,p,g,C,w]),(0,q.jsx)(P.A,{children:(0,q.jsxs)("div",{children:[(0,q.jsx)("h1",{children:"Room Page"}),a&&(0,q.jsx)("button",{className:"m-4 p-2 bg-slate-300 text-blue-800",onClick:()=>{return e=String(a.UserData.user.id),o=t,void s.emit("room:join",{email:e,room:o});var e,o},children:"Click JOIN"}),(0,q.jsx)("h4",{children:n?"Connected":"No one in room"}),i&&(0,q.jsx)("button",{onClick:u,children:"Send Stream"}),n&&(0,q.jsx)("button",{onClick:m,children:"CALL"}),i&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("h1",{children:"My Stream"}),(0,q.jsx)(V(),{playing:!0,muted:!0,height:"100px",width:"200px",url:i})]}),l&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("h1",{children:"Remote Stream"}),(0,q.jsx)(V(),{playing:!0,muted:!0,height:"100px",width:"200px",url:l})]})]})})},Q=({user:e})=>{const t=M(),a=E(x),s=E(C),[n,{data:r}]=A();return((e,t)=>{const a=window.Telegram.WebApp;(0,o.useEffect)((()=>{e?(a.BackButton.show(),a.onEvent("backButtonClicked",(a.MainButton.hide(),t))):a.BackButton.hide()}),[e])})(a,(()=>t(l(!1)))),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)("ul",{role:"list",className:"text-left divide-y divide-[var(--tg-theme-hint-color)]",children:[(0,q.jsx)(L.Contact,{handelClick:()=>{t(d("openChatRoom")),t(g(10)),t(l(!0)),n({chat:10,user:e.appUser})},img:"photo2024-02-11_17-14-16.jpg",name:"Антон",time:"17.03.24",lastMessage:"text"}),(0,q.jsx)(L.Contact,{handelClick:()=>{t(d("openVideoRoom")),t(g(10)),t(l(!0)),n({chat:11,user:e.appUser})},img:"photo2024-02-11_17-14-16.jpg",name:"Антон",time:"18.03.24",lastMessage:"video"})]}),(0,q.jsxs)(L.SlidePage,{slide:a,children:["openChatRoom"==s&&r&&(0,q.jsx)(B,{accessToken:r.accessToken}),"openVideoRoom"==s&&r&&(0,q.jsx)(_,{accessToken:r.accessToken})]})]})},W=()=>{const e=window.Telegram.WebApp,t=M(),{data:a,isSuccess:o}=b(e.initData);return o&&t(h(a)),(0,q.jsx)(q.Fragment,{children:a&&(0,q.jsx)(Q,{user:a.UserData})})},$=()=>{const e=window.Telegram.WebApp;return s().useEffect((()=>{e.expand(),e.ready()}),[]),(0,q.jsx)(r.Provider,{store:D,children:(0,q.jsx)(W,{})})};n.H(document.getElementById("root")).render((0,q.jsx)(o.StrictMode,{children:(0,q.jsx)($,{})}))},4343:(e,t,a)=>{a.d(t,{A:()=>n,X:()=>s});var o=a(1085);function s({children:e}){return(0,o.jsx)("div",{className:"flex flex-col px-2 overflow-auto w-screen h-screen pb-16",children:e})}const n=s},1048:(e,t,a)=>{a.d(t,{A:()=>n,e:()=>s});var o=a(1085);function s({name:e,text:t}){const a=new Date;return(0,o.jsx)("div",{className:"flex mb-2",children:(0,o.jsxs)("div",{className:"rounded py-2 px-3 bg-[var(--tg-theme-hint-color)] max-w-[75%]",children:[(0,o.jsx)("p",{className:"text-sm text-left text-[var(--tg-theme-bg-color)]",children:e}),(0,o.jsx)("p",{className:"text-sm mt-4 text-left text-[var(--tg-theme-bg-color)]",children:t}),(0,o.jsx)("p",{className:"text-left text-xs text-[var(--tg-theme-bg-color)] mt-4",children:a.toString()})]})})}const n=s},5873:(e,t,a)=>{var o=a(67);t.H=o.createRoot,o.hydrateRoot}}]);
(self.webpackChunkchat_room=self.webpackChunkchat_room||[]).push([[107],{9107:(e,t,o)=>{o.d(t,{A:()=>$});var a=o(8215),s=o(6638);const n=(0,s.createSlice)({name:"chatRoomApp",initialState:{chatRoomSlide:!1,chatRoomType:"",chatRoomChat:{id:0,isLoading:!1,wsErrors:[],isAdmin:!1,nominationCount:0,participantCount:0},chatRoomData:void 0},reducers:{setChatAccessToken:(e,t)=>{e.chatRoomChat.accessToken=t.payload},setChatRoomChatId:(e,t)=>{e.chatRoomChat.id=t.payload},initializePoll:(e,t)=>{e.chatRoomChat.poll=t.payload},loadingChat:(e,t)=>{e.chatRoomChat.isLoading=t.payload},showChatRoomSlide:(e,t)=>{e.chatRoomSlide=t.payload},typeChatRoom:(e,t)=>{e.chatRoomType=t.payload},dataChatRoom:(e,t)=>{e.chatRoomData=t.payload}}}),{showChatRoomSlide:c,typeChatRoom:i,dataChatRoom:r,initializePoll:l,loadingChat:d,setChatAccessToken:m,setChatRoomChatId:h}=n.actions,p=e=>e.chatRoomApp.chatRoomSlide,u=e=>e.chatRoomApp.chatRoomData,g=e=>e.chatRoomApp.chatRoomType,f=e=>e.chatRoomApp.chatRoomChat.id,x=n.reducer;var C=o(39),j=o(2885);const w=(0,C.L5)((0,C.cw)({baseUrl:"https://api80q.ru/mdws/chats"})),y=(0,j.xP)({reducerPath:"mdwsApi",refetchOnFocus:!0,baseQuery:w,tagTypes:["Validate"],endpoints:()=>({})}),v=y.injectEndpoints({endpoints:e=>({validate:e.query({query:e=>({url:`/validateUser/${e}`}),providesTags:["Validate"]}),join:e.mutation({query:({chat:e,user:t})=>({url:"/join",method:"POST",body:{chat:e,user:t}})}),getMessage:e.query({query:e=>({url:`/messages/${e}`})}),getUserById:e.query({query:e=>({url:`/users/${e}`})})})}),{useValidateQuery:k,useJoinMutation:R,useGetMessageQuery:S,useGetUserByIdQuery:b}=v,T=(0,s.configureStore)({reducer:{[y.reducerPath]:y.reducer,chatRoomApp:x},middleware:e=>e().concat(y.middleware)}),A=()=>(0,a.useDispatch)(),N=a.useSelector;var D=o(1647),E=o(4343),L=o(9179),U=o.n(L),M=o(3490);const I=e=>(0,L.useMemo)((()=>(0,M.io)("https://api80q.ru/chat",{auth:{token:e},transports:["websocket","polling"]})),[]);var P=o(1085);const B=({id:e,text:t})=>{const o=N(u),{data:a,isSuccess:s}=b(e);return(0,P.jsx)(P.Fragment,{children:o&&s&&(0,P.jsx)(D.MessageChat,{my:o.UserData.appUser===e,name:o.UserData.appUser===e?"":a.name,text:t})})},q=({accessToken:e})=>{const t=(0,L.useRef)(null),o=N(f),a=N(u),{data:s,isSuccess:n,isLoading:c}=S(o),i=I(e),[r,l]=(0,L.useState)([]),[d,m]=(0,L.useState)("");return(0,L.useEffect)((()=>{t.current&&t.current.scrollIntoView({behavior:"smooth",block:"end"})}),[r]),(0,L.useEffect)((()=>{const e=e=>{l((t=>[...t,e])),console.log("args",e)};i.on("chat_updated",e),i.on("exception",e),i.on("message",e)}),[i]),console.log("socket",i),(0,P.jsxs)(E.A,{children:[c&&(0,P.jsx)(D.Preloader,{}),a&&n&&s.map((e=>(0,P.jsx)(B,{id:e.user,text:e.text},e.id))),r&&a&&r.map((e=>"message"===e.type&&e.text?(0,P.jsx)(B,{id:e.user.id,text:e.text.text},e.type):(0,P.jsx)(D.MessageSystem,{name:String(e.user.name),action:e.type,chat:String(e.chat.name),size:e.size}))),(0,P.jsx)("div",{className:"pb-4",ref:t}),(0,P.jsx)(D.SendPanel,{message:d,handleChange:e=>m(e.target.value),handleSubmit:e=>{e.trim(),""!=e&&(i.emit("message",e),m(""))}})]})};var F=o(6658),O=o.n(F);const V=new class{constructor(){this.peer=void 0,this.peer||(this.peer=new RTCPeerConnection({iceServers:[{urls:["stun:stun.l.google.com:19302","stun:global.stun.twilio.com:3478"]}]}))}async getAnswer(e){if(this.peer){await this.peer.setRemoteDescription(e);const t=await this.peer.createAnswer();return await this.peer.setLocalDescription(new RTCSessionDescription(t)),t}}async setLocalDescription(e){this.peer&&await this.peer.setRemoteDescription(new RTCSessionDescription(e))}async getOffer(){if(this.peer){const e=await this.peer.createOffer();return await this.peer.setLocalDescription(new RTCSessionDescription(e)),e}}},_=({accessToken:e})=>{const t=N(f),o=(N(u),I(e)),[a,s]=(0,L.useState)([]),[n,c]=(0,L.useState)(null),[i,r]=(0,L.useState)();console.log("remoteSocketId",n),console.log("myStream",i);const l=(0,L.useCallback)((({id:e})=>{c(e)}),[]),d=(0,L.useCallback)((async()=>{console.log("handleCallUser");const e=await navigator.mediaDevices.getUserMedia({audio:!0,video:!0}),t=await V.getOffer();o.emit("user:call",{to:n,offer:t}),r(e)}),[n,o]),m=(0,L.useCallback)((async({from:e,offer:t})=>{console.log("handleIncommingCall"),c(e);const a=await navigator.mediaDevices.getUserMedia({audio:!0,video:!0});r(a),console.log("Incoming Call",e,t);const s=await V.getAnswer(t);o.emit("call:accepted",{to:e,ans:s})}),[o]),h=(0,L.useCallback)((()=>{if(console.log("sendStreams"),i)for(const e of i.getTracks())V.peer.addTrack(e,i)}),[i]),p=(0,L.useCallback)((({from:e,ans:t})=>{console.log("handleCallAccepted"),V.setLocalDescription(t),console.log("Call Accepted!"),h()}),[h]),g=(0,L.useCallback)((async()=>{console.log("handleNegoNeeded");const e=await V.getOffer();o.emit("peer:nego:needed",{offer:e,to:n})}),[n,o]);(0,L.useEffect)((()=>(V.peer.addEventListener("negotiationneeded",g),()=>{V.peer.removeEventListener("negotiationneeded",g)})),[g]);const x=(0,L.useCallback)((async({from:e,offer:t})=>{console.log("handleNegoNeedIncomming");const a=await V.getAnswer(t);o.emit("peer:nego:done",{to:e,ans:a})}),[o]),C=(0,L.useCallback)((async({ans:e})=>{console.log("handleNegoNeedFinal"),await V.setLocalDescription(e)}),[]);return(0,L.useEffect)((()=>{o.emit("room:join",t)}),[]),(0,L.useEffect)((()=>(o.on("chat_updated",(e=>{s((t=>[...t,e])),console.log("args",e)})),o.on("user:joined",l),o.on("incomming:call",m),o.on("call:accepted",p),o.on("peer:nego:needed",x),o.on("peer:nego:final",C),()=>{o.off("user:joined",l),o.off("incomming:call",m),o.off("call:accepted",p),o.off("peer:nego:needed",x),o.off("peer:nego:final",C)})),[o,l,m,p,x,C]),(0,P.jsx)(E.A,{children:(0,P.jsxs)("div",{children:[(0,P.jsxs)("div",{className:"text-center p-5",children:[(0,P.jsx)("h1",{className:"text-[var(--tg-theme-accent-text-color)] p-2",children:"Комната стриммера"}),n?(0,P.jsx)("p",{className:"text-[var(--tg-theme-hint-color)]",children:"Есть зрители"}):(0,P.jsx)("p",{className:"text-[var(--tg-theme-hint-color)]",children:"Нет зрителей"}),n&&(0,P.jsx)(D.SimpleButton,{content:i?"Отправить видео":"Начать трансляцию",click:d,icon:"send"})]}),i&&(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(O(),{playing:!0,muted:!0,height:"auto",width:"100%",url:i})})]})})},z=({accessToken:e})=>{const t=N(f),o=(N(u),I(e)),[a,s]=(0,L.useState)([]),[n,c]=(0,L.useState)(null),[i,r]=(0,L.useState)();console.log("remoteSocketId",n),console.log("remoteStream",i);const l=(0,L.useCallback)((({id:e})=>{c(e)}),[]),d=(0,L.useCallback)((async({from:e,offer:t})=>{console.log("handleIncommingCall"),c(e),console.log("Incoming Call",e,t);const a=await V.getAnswer(t);o.emit("call:accepted",{to:e,ans:a})}),[o]),m=(0,L.useCallback)((async()=>{console.log("handleNegoNeeded");const e=await V.getOffer();o.emit("peer:nego:needed",{offer:e,to:n})}),[n,o]);(0,L.useEffect)((()=>(V.peer.addEventListener("negotiationneeded",m),()=>{V.peer.removeEventListener("negotiationneeded",m)})),[m]);const h=(0,L.useCallback)((async({from:e,offer:t})=>{console.log("handleNegoNeedIncomming");const a=await V.getAnswer(t);o.emit("peer:nego:done",{to:e,ans:a})}),[o]),p=(0,L.useCallback)((async({ans:e})=>{console.log("handleNegoNeedFinal"),await V.setLocalDescription(e)}),[]);return(0,L.useEffect)((()=>{o.emit("room:join",t),V.peer.addEventListener("track",(async e=>{const t=e.streams;console.log("GOT TRACKS!!"),r(t[0])}))}),[]),(0,L.useEffect)((()=>(o.on("chat_updated",(e=>{s((t=>[...t,e])),console.log("args",e)})),o.on("user:joined",l),o.on("incomming:call",d),o.on("peer:nego:needed",h),o.on("peer:nego:final",p),()=>{o.off("user:joined",l),o.off("incomming:call",d),o.off("peer:nego:needed",h),o.off("peer:nego:final",p)})),[o,l,d,h,p]),(0,P.jsx)(E.A,{children:(0,P.jsxs)("div",{children:[(0,P.jsxs)("div",{className:"text-center p-5",children:[(0,P.jsx)("h1",{className:"text-[var(--tg-theme-accent-text-color)] p-2",children:"Комната гостя"}),n?(0,P.jsx)("p",{className:"text-[var(--tg-theme-hint-color)]",children:"Идёт трансляция"}):(0,P.jsx)("p",{className:"text-[var(--tg-theme-hint-color)]",children:"Трансляция ещё не началась"})]}),i&&(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(O(),{playing:!0,muted:!0,height:"auto",width:"100%",url:i})})]})})};var G=o(3655);const Q=({user:e})=>{const t=A(),o=N(p),a=N(g),[s,{data:n}]=R();return(0,G.z)(o,(()=>t(c(!1)))),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)("ul",{role:"list",className:"text-left divide-y divide-[var(--tg-theme-hint-color)]",children:[(0,P.jsx)(D.Contact,{handelClick:()=>{t(i("openChatRoom")),t(h(10)),t(c(!0)),s({chat:10,user:e.appUser})},img:"photo2024-02-11_17-14-16.jpg",name:"Антон",time:"17.03.24",lastMessage:"text"}),(0,P.jsx)(D.Contact,{handelClick:()=>{t(i("openVideoRoomMaster")),t(h(10)),t(c(!0)),s({chat:11,user:e.appUser})},img:"2024-03-19_00-48-51.png",name:"Стриммер",time:"19.03.24",lastMessage:"video"}),(0,P.jsx)(D.Contact,{handelClick:()=>{t(i("openVideoRoomGuest")),t(h(10)),t(c(!0)),s({chat:11,user:e.appUser})},img:"2024-03-18_23-35-23.png",name:"Зритель",time:"19.03.24",lastMessage:"video"})]}),(0,P.jsxs)(D.SlidePage,{slide:o,children:["openChatRoom"===a&&n&&(0,P.jsx)(q,{accessToken:n.accessToken}),"openVideoRoomMaster"===a&&n&&(0,P.jsx)(_,{accessToken:n.accessToken}),"openVideoRoomGuest"===a&&n&&(0,P.jsx)(z,{accessToken:n.accessToken})]})]})},W=()=>{const e=window.Telegram.WebApp,t=A(),{data:o,isSuccess:a}=k(e.initData);return a&&t(r(o)),(0,P.jsx)(P.Fragment,{children:o&&(0,P.jsx)(Q,{user:o.UserData})})},$=()=>{const e=window.Telegram.WebApp;return U().useEffect((()=>{e.expand(),e.ready()}),[]),(0,P.jsx)(a.Provider,{store:T,children:(0,P.jsx)(W,{})})}},4343:(e,t,o)=>{o.d(t,{A:()=>n,X:()=>s});var a=o(1085);function s({children:e}){return(0,a.jsx)("div",{className:"flex flex-col px-2 overflow-auto w-screen h-screen pb-16",children:e})}const n=869!=o.j?s:null},3655:(e,t,o)=>{o.d(t,{x:()=>n,z:()=>s});var a=o(9179);const s=(e,t)=>{const o=window.Telegram.WebApp;(0,a.useEffect)((()=>{e?(o.BackButton.show(),o.onEvent("backButtonClicked",(o.MainButton.hide(),t))):o.BackButton.hide()}),[e])},n=(...e)=>e.filter(Boolean).join(" ")}}]);
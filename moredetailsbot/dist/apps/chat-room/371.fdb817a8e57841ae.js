(self.webpackChunkchat_room=self.webpackChunkchat_room||[]).push([[371],{141:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var o=a(420),s=a(885);const n=(0,o.L5)((0,o.cw)({baseUrl:"https://api80q.ru:4000/mdws/chats"})),r=(0,s.xP)({reducerPath:"mdwsApi",refetchOnFocus:!0,baseQuery:n,tagTypes:["Validate"],endpoints:()=>({})}).injectEndpoints({endpoints:e=>({validate:e.query({query:e=>({url:`chat/validateUser/${e}`}),providesTags:["Validate"]}),join:e.mutation({query:({chat:e,user:t})=>({url:"/join",method:"POST",body:{chat:e,user:t}})})})}),{useValidateQuery:u,useJoinMutation:c}=r;var i=a(179),d=a(490),h=a(85);const l=function(){const[e,{}]=c(),t=e({chat:10,user:3}),a=(0,d.io)("http://api80q.ru:4000/chat",{auth:{token:t},transports:["websocket","polling"]});return(0,i.useEffect)((()=>{a.on("chat_updated",(({data:e})=>{console.log(e)}))}),[]),(0,i.useEffect)((()=>{a.on("exception",(({data:e})=>{console.log(e)}))}),[]),(0,h.jsx)("p",{children:(0,h.jsx)("b",{})})}}}]);
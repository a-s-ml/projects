(self.webpackChunkquiz=self.webpackChunkquiz||[]).push([[744],{8744:(e,u,t)=>{t.r(u),t.d(u,{TypeQuiz:()=>d,default:()=>l});var r=t(4988);const o=t(8028).K.injectEndpoints({endpoints:e=>({getType:e.query({query:()=>({url:"question-type"})}),getTypeById:e.query({query:e=>({url:`question-type/${e}`}),providesTags:["TypeGroup"]}),updateTypeGroups:e.mutation({query:({chat:e,question_type:u})=>({url:`/chat/updateTypeChat/${e}`,method:"PATCH",body:{question_type:u}}),invalidatesTags:["TypeGroup"]})})}),{useGetTypeQuery:p,useGetTypeByIdQuery:s,useUpdateTypeGroupsMutation:i}=o;var a=t(6184),n=t(9136),y=t(7e3);const d=()=>{const{data:e,isLoading:u,isSuccess:t}=p(""),{data:o}=(0,r.Ce)(521884639),{data:d}=s((null==o?void 0:o.question_type)||0),[l,c]=(0,n.useState)(null==d?void 0:d.id),[G,{}]=i();function q(e){c(e)}return(0,y.jsx)(y.Fragment,{children:e&&"number"==typeof l&&(0,y.jsx)(a.SimpleRadioGroup,{state:l,setState:c,children:(0,y.jsxs)("div",{className:"grid grid-cols-3 gap-2",children:[u&&(0,y.jsx)(a.Preloader,{}),d&&e&&e.map((e=>(0,y.jsx)(a.SimpleRadioGroupOption,{id:e.id,description:e.description,active:Boolean(e.active),func:q},e.id)))]})})})},l=d},4988:(e,u,t)=>{t.d(u,{Ce:()=>a});const r=t(8028).K.injectEndpoints({endpoints:e=>({getGroups:e.query({query:e=>({url:`chat/findByReferal/${e}`}),providesTags:["TypeGroup","TimeGroup","CategoryGroup"]}),getInfoGroups:e.query({query:e=>({url:`chat/groupInfoById/${e}`})}),getGroupDb:e.query({query:e=>({url:`chat/findByChatId/${e}`}),providesTags:["TypeGroup","TimeGroup"]}),getMemberCountGroups:e.query({query:e=>({url:`chat/groupMemberCountById/${e}`})}),getFilePhoto:e.query({query:e=>({url:`chat/tgGetFilePhoto/${e}`})})})}),{useGetFilePhotoQuery:o,useGetGroupsQuery:p,useGetInfoGroupsQuery:s,useGetMemberCountGroupsQuery:i,useGetGroupDbQuery:a}=r}}]);
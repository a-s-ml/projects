(self.webpackChunkquestions=self.webpackChunkquestions||[]).push([[880,500],{500:(e,t,r)=>{r.r(t),r.d(t,{extendedApiSlice:()=>o,useAddCategoryGroupsMutation:()=>s,useCountCategoryQuery:()=>u,useDeleteCategoryGroupsMutation:()=>g,useGetCategoryByIdQuery:()=>n,useGetCategoryGroupsQuery:()=>y,useGetCategoryQuery:()=>a});const o=r(28).K.injectEndpoints({endpoints:e=>({countCategory:e.query({query:e=>({url:`category/${e}`})}),getCategory:e.query({query:()=>({url:"category"})}),getCategoryById:e.query({query:e=>({url:`category/${e}`})}),getCategoryGroups:e.query({query:e=>({url:`chat-category/${e}`}),providesTags:["CategoryGroup"]}),addCategoryGroups:e.mutation({query:({chat:e,category:t})=>({url:"/chat-category",method:"POST",body:{chat:e,category:t}}),invalidatesTags:["CategoryGroup","CountAvailableQuestionGroup"]}),deleteCategoryGroups:e.mutation({query:({chat:e,category:t})=>({url:"/chat-category",method:"DELETE",body:{chat:e,category:t}}),invalidatesTags:["CategoryGroup","CountAvailableQuestionGroup"]})})}),{useCountCategoryQuery:u,useGetCategoryQuery:a,useGetCategoryGroupsQuery:y,useAddCategoryGroupsMutation:s,useDeleteCategoryGroupsMutation:g,useGetCategoryByIdQuery:n}=o},28:(e,t,r)=>{r.d(t,{K:()=>y});var o=r(392),u=r(900);const a=(0,o.c9)((0,o._)({baseUrl:"https://api80q.ru/viktorinaonlinebot/"}),{maxRetries:5}),y=(0,u.KS)({reducerPath:"vikApi",refetchOnFocus:!0,baseQuery:a,tagTypes:["TypeGroup","TimeGroup","CategoryGroup","Validate","CountAvailableQuestionGroup","CountPublishedQuestionGroup"],endpoints:()=>({})})}}]);
(self.webpackChunkquiz=self.webpackChunkquiz||[]).push([[500],{1500:(e,t,r)=>{r.r(t),r.d(t,{extendedApiSlice:()=>u,useAddCategoryGroupsMutation:()=>s,useCountCategoryQuery:()=>a,useDeleteCategoryGroupsMutation:()=>C,useGetCategoryByIdQuery:()=>y,useGetCategoryGroupsQuery:()=>g,useGetCategoryQuery:()=>o});const u=r(8028).K.injectEndpoints({endpoints:e=>({getCategory:e.query({query:()=>({url:"category"})}),countCategory:e.query({query:e=>({url:`category/${e}`})}),getCategoryById:e.query({query:e=>({url:`category/${e}`})}),getCategoryGroups:e.query({query:e=>({url:`chat-category/${e}`}),providesTags:["CategoryGroup"]}),addCategoryGroups:e.mutation({query:({chat:e,category:t})=>({url:"/chat-category",method:"POST",body:{chat:e,category:t}}),invalidatesTags:["CategoryGroup","CountAvailableQuestionGroup"]}),deleteCategoryGroups:e.mutation({query:({chat:e,category:t})=>({url:"/chat-category",method:"DELETE",body:{chat:e,category:t}}),invalidatesTags:["CategoryGroup","CountAvailableQuestionGroup"]})})}),{useGetCategoryQuery:o,useCountCategoryQuery:a,useGetCategoryByIdQuery:y,useGetCategoryGroupsQuery:g,useAddCategoryGroupsMutation:s,useDeleteCategoryGroupsMutation:C}=u}}]);
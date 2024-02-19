(self.webpackChunkquestions=self.webpackChunkquestions||[]).push([[136],{136:(e,t,o)=>{o.r(t);var n=o(756),s=o(32),i=o(640),r=o(184),u=o(392),a=o(280);const d=(0,u.c9)((0,u._)({baseUrl:"https://api80q.ru/viktorinaonlinebot/"}),{maxRetries:5}),c=(0,a.KS)({reducerPath:"vikApi",refetchOnFocus:!0,baseQuery:d,tagTypes:["TypeGroup","TimeGroup","CategoryGroup","Validate","CountAvailableQuestionGroup","CountPublishedQuestionGroup"],endpoints:()=>({})}),l=c.injectEndpoints({endpoints:e=>({getQuestionById:e.query({query:e=>({url:`question/findById/${e}`})}),getQuestionByChat:e.query({query:e=>({url:`question/findByChatId/${e}`})}),updateQuestion:e.mutation({query:({id:e,question:t})=>({url:`/question/${e}`,method:"PATCH",body:{question:t}})}),addQuestion:e.mutation({query:e=>({url:"/question",method:"POST",body:e})}),deleteQuestion:e.mutation({query:e=>({url:"/chat-category",method:"DELETE",body:{id:e}})}),countAvailableQuestion:e.query({query:e=>({url:`auto-post/countAvailableQuestionByChatId/${e}`}),providesTags:["CountAvailableQuestionGroup"]}),countPublishedQuestion:e.query({query:e=>({url:`auto-post/countPublishedQuestion/${e}`}),providesTags:["CountAvailableQuestionGroup"]})})}),{useGetQuestionByChatQuery:p,useGetQuestionByIdQuery:Q,useAddQuestionMutation:h,useDeleteQuestionMutation:g,useUpdateQuestionMutation:y,useCountAvailableQuestionQuery:x,useCountPublishedQuestionQuery:m}=l;var w=o(0);const j=({chat:e})=>{const t=window.Telegram.WebApp,{isLoading:o,isError:n,data:s,isSuccess:i}=p(e);function u(e){if(e)return t.openTelegramLink("https://t.me/more_details")}const a=`Вы действительно хотите удалить бота из группы ${i?s[0].id:"не success"}`;return(0,w.jsxs)(w.Fragment,{children:[o&&(0,w.jsx)(r.Preloader,{}),i&&s.map((e=>(0,w.jsx)("li",{className:"cursor-pointer",children:(0,w.jsx)(r.SimpleAccordionMain,{description:(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(r.SimpleAccordionText,{children:(0,w.jsx)("p",{children:e.text})})}),content:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(r.ButtonIcon,{firstIcon:!0,text:"Модерировать",color:"[var(--tg-theme-accent-text-color)]",icon:"moderate",func:()=>console.log("moderate")}),(0,w.jsx)(r.ButtonIcon,{firstIcon:!0,text:"Статистика",color:"[var(--tg-theme-accent-text-color)]",icon:"stat",func:()=>console.log("stat")}),(0,w.jsx)(r.ButtonIcon,{firstIcon:!0,text:"Отправить",color:"[var(--tg-theme-accent-text-color)]",icon:"send",func:()=>console.log("send")}),(0,w.jsx)(r.ButtonIconConfirm,{firstIcon:!0,text:"Удалить",color:"red-500",icon:"delete",func:u,textConfirm:a})]})})})))]})},q=()=>(0,w.jsx)("ul",{role:"list",className:"mt-4 divide-y divide-[var(--tg-theme-hint-color)]",children:(0,w.jsx)(j,{chat:521884639})});var A=o(796);const v=(0,A.createSlice)({name:"questionApp",initialState:{questionSlide:!1,questionType:"",questionData:void 0,addQuestion:{text:"",category:0,answer1:"",answer2:"",answer3:"",answer4:"",answerright:0}},reducers:{showQuestionSlide:(e,t)=>{e.questionSlide=t.payload},typeQuestion:(e,t)=>{e.questionType=t.payload},dataQuestion:(e,t)=>{e.questionData=t.payload},getQuestionText:(e,t)=>{e.addQuestion.text=t.payload},getQuestionCategory:(e,t)=>{e.addQuestion.category=t.payload},getQuestionAnswerOne:(e,t)=>{e.addQuestion.answer1=t.payload},getQuestionAnswerTwo:(e,t)=>{e.addQuestion.answer2=t.payload},getQuestionAnswerThree:(e,t)=>{e.addQuestion.answer3=t.payload},getQuestionAnswerFour:(e,t)=>{e.addQuestion.answer4=t.payload},getQuestionAnswerright:(e,t)=>{e.addQuestion.answerright=t.payload},getQuestionDefault:(e,t)=>{e.addQuestion.text="",e.addQuestion.category=0,e.addQuestion.answer1="",e.addQuestion.answer2="",e.addQuestion.answer3="",e.addQuestion.answer4="",e.addQuestion.answerright=0}}}),{showQuestionSlide:b,typeQuestion:C,dataQuestion:f,getQuestionText:T,getQuestionCategory:B,getQuestionAnswerOne:I,getQuestionAnswerTwo:S,getQuestionAnswerThree:k,getQuestionAnswerFour:P,getQuestionAnswerright:G,getQuestionDefault:F}=v.actions,D=e=>e.questionApp.questionSlide,E=v.reducer,M=(0,A.configureStore)({reducer:{[c.reducerPath]:c.reducer,questionApp:E},middleware:e=>e().concat(c.middleware)}),$=i.useSelector,O=()=>{const e=window.Telegram.WebApp,t=(0,i.useDispatch)(),o=$(D);return o&&(e.BackButton.show(),e.onEvent("backButtonClicked",(()=>{t(b(!1))}))),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(r.GlobalHeader,{children:(0,w.jsx)(r.ButtonIcon,{firstIcon:!0,text:"Добавить вопрос",color:"[var(--tg-theme-accent-text-color)]",icon:"add",func:()=>{e.openTelegramLink("https://t.me/ViktorinaOnlineBot?startgroup=add")}})}),(0,w.jsx)(r.Page,{children:(0,w.jsxs)(r.MainBlock,{children:[(0,w.jsx)("div",{className:"text-center pt-9"}),(0,w.jsx)(q,{}),(0,w.jsx)("button",{className:"pt-4",onClick:()=>t(b(!0)),children:"Click"})]})}),(0,w.jsx)(r.SlidePage,{slide:o,children:(0,w.jsx)("p",{children:"Question"})})]})},L=()=>(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(i.Provider,{store:M,children:(0,w.jsx)(O,{})})});s.C(document.getElementById("root")).render((0,w.jsx)(n.StrictMode,{children:(0,w.jsx)(L,{})}))},32:(e,t,o)=>{var n=o(408);t.C=n.createRoot,n.hydrateRoot}}]);
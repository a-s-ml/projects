(self.webpackChunkquestions=self.webpackChunkquestions||[]).push([[872],{984:(e,t,s)=>{s.d(t,{c:()=>P});var n=s(136),a=s.n(n),i=s(184),o=s(344);const r=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.Page,{children:(0,o.jsx)(i.MainBlock,{children:void 0})})});var d=s(640),u=s(796),l=s(936),c=s(556);const p=(0,l.c9)((0,l._)({baseUrl:"https://api80q.ru/viktorinaonlinebot/"}),{maxRetries:5}),g=(0,c.KS)({reducerPath:"vikApi",refetchOnFocus:!0,baseQuery:p,tagTypes:["TypeGroup","TimeGroup","CategoryGroup","Validate","CountAvailableQuestionGroup","CountPublishedQuestionGroup"],endpoints:()=>({})}),Q=(0,u.createSlice)({name:"questionApp",initialState:{questionSlide:!1,questionType:"",questionData:void 0,addQuestion:{text:"",category:0,answer1:"",answer2:"",answer3:"",answer4:"",answerright:0}},reducers:{showQuestionSlide:(e,t)=>{e.questionSlide=t.payload},typeQuestion:(e,t)=>{e.questionType=t.payload},dataQuestion:(e,t)=>{e.questionData=t.payload},getQuestionText:(e,t)=>{e.addQuestion.text=t.payload},getQuestionCategory:(e,t)=>{e.addQuestion.category=t.payload},getQuestionAnswerOne:(e,t)=>{e.addQuestion.answer1=t.payload},getQuestionAnswerTwo:(e,t)=>{e.addQuestion.answer2=t.payload},getQuestionAnswerThree:(e,t)=>{e.addQuestion.answer3=t.payload},getQuestionAnswerFour:(e,t)=>{e.addQuestion.answer4=t.payload},getQuestionAnswerright:(e,t)=>{e.addQuestion.answerright=t.payload},getQuestionDefault:(e,t)=>{e.addQuestion.text="",e.addQuestion.category=0,e.addQuestion.answer1="",e.addQuestion.answer2="",e.addQuestion.answer3="",e.addQuestion.answer4="",e.addQuestion.answerright=0}}}),{showQuestionSlide:w,typeQuestion:h,dataQuestion:y,getQuestionText:x,getQuestionCategory:q,getQuestionAnswerOne:v,getQuestionAnswerTwo:A,getQuestionAnswerThree:j,getQuestionAnswerFour:m,getQuestionAnswerright:T,getQuestionDefault:f}=Q.actions,S=e=>e.questionApp.questionSlide,k=e=>e.questionApp.questionType,C=Q.reducer,b=((0,u.configureStore)({reducer:{[g.reducerPath]:g.reducer,questionApp:C},middleware:e=>e().concat(g.middleware)}),d.useSelector),B=g.injectEndpoints({endpoints:e=>({validate:e.query({query:e=>({url:`chat/validateUser/${e}`}),providesTags:["Validate"]})})}),{useValidateQuery:D}=B,F=()=>(0,o.jsxs)("ul",{role:"list",className:"mt-4 divide-y divide-[var(--tg-theme-hint-color)]",children:[(0,o.jsx)("li",{children:"dsfcv"}),(0,o.jsx)("li",{children:"fsgdfgfg"})]}),P=function(){const e=window.Telegram.WebApp,t=(0,d.useDispatch)(),s=b(S),n=b(k);a().useEffect((()=>{e.expand(),e.ready()}),[]),s&&(e.BackButton.show(),e.onEvent("backButtonClicked",(()=>{t(w(!1))}))),s||e.BackButton.hide();const{data:u,isSuccess:l,isLoading:c}=D(e.initData);return(0,o.jsxs)(o.Fragment,{children:[c&&(0,o.jsx)(i.Preloader,{}),l&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{}),(0,o.jsxs)(i.SlidePage,{slide:s,children:["groups"==n&&(0,o.jsx)(F,{}),"questions"==n&&(0,o.jsx)(F,{})]})]})]})}},872:(e,t,s)=>{s.r(t);var n=s(136),a=s(132),i=s(984),o=s(344);a.C(document.getElementById("root")).render((0,o.jsx)(n.StrictMode,{children:(0,o.jsx)(i.c,{})}))},132:(e,t,s)=>{var n=s(408);t.C=n.createRoot,n.hydrateRoot}}]);
//# sourceMappingURL=872.js.map
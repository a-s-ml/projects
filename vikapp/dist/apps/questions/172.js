(self.webpackChunkquestions=self.webpackChunkquestions||[]).push([[172],{172:(e,t,s)=>{s.r(t);var n=s(136),i=s.n(n),a=s(132),o=s(184),r=s(344);const d=({chat:e})=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("li",{className:"cursor-pointer",children:(0,r.jsx)(o.SimpleAccordionMain,{description:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.SimpleAccordionText,{children:(0,r.jsx)("p",{children:"sg"})})}),content:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Удалить"}),(0,r.jsx)("p",{children:"Модерировать"}),(0,r.jsx)("p",{children:"Статистика"})]})})})}),u=()=>(0,r.jsx)("ul",{role:"list",className:"mt-4 divide-y divide-[var(--tg-theme-hint-color)]",children:(0,r.jsx)(d,{chat:521884639})}),c=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.Page,{children:(0,r.jsx)(o.MainBlock,{children:(0,r.jsx)(u,{})})})});var l=s(640),p=s(796),g=s(936),h=s(556);const Q=(0,g.c9)((0,g._)({baseUrl:"https://api80q.ru/viktorinaonlinebot/"}),{maxRetries:5}),w=(0,h.KS)({reducerPath:"vikApi",refetchOnFocus:!0,baseQuery:Q,tagTypes:["TypeGroup","TimeGroup","CategoryGroup","Validate","CountAvailableQuestionGroup","CountPublishedQuestionGroup"],endpoints:()=>({})}),x=(0,p.createSlice)({name:"questionApp",initialState:{questionSlide:!1,questionType:"",questionData:void 0,addQuestion:{text:"",category:0,answer1:"",answer2:"",answer3:"",answer4:"",answerright:0}},reducers:{showQuestionSlide:(e,t)=>{e.questionSlide=t.payload},typeQuestion:(e,t)=>{e.questionType=t.payload},dataQuestion:(e,t)=>{e.questionData=t.payload},getQuestionText:(e,t)=>{e.addQuestion.text=t.payload},getQuestionCategory:(e,t)=>{e.addQuestion.category=t.payload},getQuestionAnswerOne:(e,t)=>{e.addQuestion.answer1=t.payload},getQuestionAnswerTwo:(e,t)=>{e.addQuestion.answer2=t.payload},getQuestionAnswerThree:(e,t)=>{e.addQuestion.answer3=t.payload},getQuestionAnswerFour:(e,t)=>{e.addQuestion.answer4=t.payload},getQuestionAnswerright:(e,t)=>{e.addQuestion.answerright=t.payload},getQuestionDefault:(e,t)=>{e.addQuestion.text="",e.addQuestion.category=0,e.addQuestion.answer1="",e.addQuestion.answer2="",e.addQuestion.answer3="",e.addQuestion.answer4="",e.addQuestion.answerright=0}}}),{showQuestionSlide:y,typeQuestion:j,dataQuestion:m,getQuestionText:A,getQuestionCategory:q,getQuestionAnswerOne:S,getQuestionAnswerTwo:T,getQuestionAnswerThree:v,getQuestionAnswerFour:k,getQuestionAnswerright:C,getQuestionDefault:F}=x.actions,b=e=>e.questionApp.questionSlide,f=e=>e.questionApp.questionType,B=x.reducer,D=((0,p.configureStore)({reducer:{[w.reducerPath]:w.reducer,questionApp:B},middleware:e=>e().concat(w.middleware)}),l.useSelector),P=w.injectEndpoints({endpoints:e=>({validate:e.query({query:e=>({url:`chat/validateUser/${e}`}),providesTags:["Validate"]})})}),{useValidateQuery:G}=P,E=function(){const e=window.Telegram.WebApp,t=(0,l.useDispatch)(),s=D(b);D(f),i().useEffect((()=>{e.expand(),e.ready()}),[]),s&&(e.BackButton.show(),e.onEvent("backButtonClicked",(()=>{t(y(!1))}))),s||e.BackButton.hide();const{data:n,isSuccess:a,isLoading:d}=G(e.initData);return console.log(n),(0,r.jsxs)(r.Fragment,{children:[d&&(0,r.jsx)(o.Preloader,{}),a&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(o.SlidePage,{slide:s,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"sgssdg1"}),(0,r.jsx)(u,{}),(0,r.jsx)("p",{children:"sgssdg1"})]})})]})]})};a.C(document.getElementById("root")).render((0,r.jsx)(n.StrictMode,{children:(0,r.jsx)(E,{})}))},132:(e,t,s)=>{var n=s(408);t.C=n.createRoot,n.hydrateRoot}}]);
//# sourceMappingURL=172.js.map
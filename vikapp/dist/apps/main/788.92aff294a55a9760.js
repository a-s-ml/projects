(self.webpackChunkmain=self.webpackChunkmain||[]).push([[788],{8788:(e,t,s)=>{s.r(t),s.d(t,{storeQuestion:()=>S,useQuestionDispatch:()=>q,useQuestionSelector:()=>T});var n=s(9640),a=s(2796),o=s(8028);const i=(0,a.createSlice)({name:"questionApp",initialState:{questionSlide:!1,questionType:"",questionData:void 0,addQuestion:{text:"",category:0,answer1:"",answer2:"",answer3:"",answer4:"",answerright:0}},reducers:{showQuestionSlide:(e,t)=>{e.questionSlide=t.payload},typeQuestion:(e,t)=>{e.questionType=t.payload},dataQuestion:(e,t)=>{e.questionData=t.payload},getQuestionText:(e,t)=>{e.addQuestion.text=t.payload},getQuestionCategory:(e,t)=>{e.addQuestion.category=t.payload},getQuestionAnswerOne:(e,t)=>{e.addQuestion.answer1=t.payload},getQuestionAnswerTwo:(e,t)=>{e.addQuestion.answer2=t.payload},getQuestionAnswerThree:(e,t)=>{e.addQuestion.answer3=t.payload},getQuestionAnswerFour:(e,t)=>{e.addQuestion.answer4=t.payload},getQuestionAnswerright:(e,t)=>{e.addQuestion.answerright=t.payload},getQuestionDefault:(e,t)=>{e.addQuestion.text="",e.addQuestion.category=0,e.addQuestion.answer1="",e.addQuestion.answer2="",e.addQuestion.answer3="",e.addQuestion.answer4="",e.addQuestion.answerright=0}}}),{showQuestionSlide:u,typeQuestion:r,dataQuestion:d,getQuestionText:Q,getQuestionCategory:w,getQuestionAnswerOne:g,getQuestionAnswerTwo:l,getQuestionAnswerThree:p,getQuestionAnswerFour:c,getQuestionAnswerright:y,getQuestionDefault:h}=i.actions,A=i.reducer,S=(0,a.configureStore)({reducer:{[o.K.reducerPath]:o.K.reducer,questionApp:A},middleware:e=>e().concat(o.K.middleware)}),q=()=>(0,n.useDispatch)(),T=n.useSelector}}]);
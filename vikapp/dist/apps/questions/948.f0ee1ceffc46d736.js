(self.webpackChunkquestions=self.webpackChunkquestions||[]).push([[948],{948:(e,t,s)=>{s.r(t),s.d(t,{storeQuestion:()=>q,useQuestionDispatch:()=>S,useQuestionSelector:()=>T});var n=s(640),o=s(416),a=s(28);const i=(0,o.createSlice)({name:"questionApp",initialState:{questionSlide:!1,questionType:"",questionData:void 0,addQuestion:{text:"",category:0,answer1:"",answer2:"",answer3:"",answer4:"",answerright:0}},reducers:{showQuestionSlide:(e,t)=>{e.questionSlide=t.payload},typeQuestion:(e,t)=>{e.questionType=t.payload},dataQuestion:(e,t)=>{e.questionData=t.payload},getQuestionText:(e,t)=>{e.addQuestion.text=t.payload},getQuestionCategory:(e,t)=>{e.addQuestion.category=t.payload},getQuestionAnswerOne:(e,t)=>{e.addQuestion.answer1=t.payload},getQuestionAnswerTwo:(e,t)=>{e.addQuestion.answer2=t.payload},getQuestionAnswerThree:(e,t)=>{e.addQuestion.answer3=t.payload},getQuestionAnswerFour:(e,t)=>{e.addQuestion.answer4=t.payload},getQuestionAnswerright:(e,t)=>{e.addQuestion.answerright=t.payload},getQuestionDefault:(e,t)=>{e.addQuestion.text="",e.addQuestion.category=0,e.addQuestion.answer1="",e.addQuestion.answer2="",e.addQuestion.answer3="",e.addQuestion.answer4="",e.addQuestion.answerright=0}}}),{showQuestionSlide:u,typeQuestion:r,dataQuestion:d,getQuestionText:Q,getQuestionCategory:w,getQuestionAnswerOne:g,getQuestionAnswerTwo:l,getQuestionAnswerThree:p,getQuestionAnswerFour:c,getQuestionAnswerright:y,getQuestionDefault:h}=i.actions,A=i.reducer,q=(0,o.configureStore)({reducer:{[a.K.reducerPath]:a.K.reducer,questionApp:A},middleware:e=>e().concat(a.K.middleware)}),S=()=>(0,n.useDispatch)(),T=n.useSelector}}]);
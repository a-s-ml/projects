(self.webpackChunkmain=self.webpackChunkmain||[]).push([[100,720],{5100:(e,t,s)=>{s.r(t),s.d(t,{dataQuestion:()=>Q,default:()=>T,getQuestionAnswerright:()=>p,getQuestionAnswers:()=>w,getQuestionCategory:()=>l,getQuestionDefault:()=>g,getQuestionText:()=>r,initialAnswers:()=>i,questionAppSlice:()=>o,selectQuestion:()=>x,selectQuestionAnswerright:()=>S,selectQuestionCategory:()=>h,selectQuestionData:()=>c,selectQuestionSlide:()=>y,selectQuestionText:()=>A,selectQuestionType:()=>q,showQuestionSlide:()=>u,typeQuestion:()=>d});var n=s(2796);const i=[{id:1,name:"answer1",value:""},{id:2,name:"answer2",value:""},{id:3,name:"answer3",value:""},{id:4,name:"answer4",value:""}],a={questionSlide:!1,questionType:"",questionData:void 0,addQuestion:{text:"",category:0,answers:i,answerright:0}},o=(0,n.createSlice)({name:"questionApp",initialState:a,reducers:{showQuestionSlide:(e,t)=>{e.questionSlide=t.payload},typeQuestion:(e,t)=>{e.questionType=t.payload},dataQuestion:(e,t)=>{e.questionData=t.payload},getQuestionText:(e,t)=>{e.addQuestion.text=t.payload},getQuestionCategory:(e,t)=>{e.addQuestion.category=t.payload},getQuestionAnswers:(e,t)=>{e.addQuestion.answers=t.payload},getQuestionAnswerright:(e,t)=>{e.addQuestion.answerright=t.payload},getQuestionDefault:e=>{e.addQuestion.text="",e.addQuestion.category=0,e.addQuestion.answers=i,e.addQuestion.answerright=0}}}),{showQuestionSlide:u,typeQuestion:d,dataQuestion:Q,getQuestionText:r,getQuestionCategory:l,getQuestionAnswerright:p,getQuestionDefault:g,getQuestionAnswers:w}=o.actions,y=e=>e.questionApp.questionSlide,c=e=>e.questionApp.questionData,q=e=>e.questionApp.questionType,A=e=>e.questionApp.addQuestion.text,h=e=>e.questionApp.addQuestion.category,S=e=>e.questionApp.addQuestion.answerright,x=e=>e.questionApp.addQuestion,T=o.reducer}}]);
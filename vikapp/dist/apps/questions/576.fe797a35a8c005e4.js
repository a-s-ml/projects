/*! For license information please see 576.fe797a35a8c005e4.js.LICENSE.txt */
(self.webpackChunkquestions=self.webpackChunkquestions||[]).push([[576],{512:(e,t,n)=>{n.d(t,{c:()=>a});var s=n(136);const a=s.forwardRef((function({title:e,titleId:t,...n},a){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},n),e?s.createElement("title",{id:t},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"}))}))},8:(e,t,n)=>{n.d(t,{c:()=>a});var s=n(136);const a=s.forwardRef((function({title:e,titleId:t,...n},a){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},n),e?s.createElement("title",{id:t},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}))},576:(e,t,n)=>{n.d(t,{c:()=>te});var s=n(640),a=n(184),r=n(28);const o=r.K.injectEndpoints({endpoints:e=>({getQuestionById:e.query({query:e=>({url:`question/findById/${e}`})}),getQuestionByChat:e.query({query:e=>({url:`question/findByChatId/${e}`})}),updateQuestion:e.mutation({query:({id:e,question:t})=>({url:`/question/${e}`,method:"PATCH",body:{question:t}})}),addQuestion:e.mutation({query:e=>({url:"/question",method:"POST",body:e})}),deleteQuestion:e.mutation({query:e=>({url:"/chat-category",method:"DELETE",body:{id:e}})}),countAvailableQuestion:e.query({query:e=>({url:`auto-post/countAvailableQuestionByChatId/${e}`}),providesTags:["CountAvailableQuestionGroup"]}),countPublishedQuestion:e.query({query:e=>({url:`auto-post/countPublishedQuestion/${e}`}),providesTags:["CountAvailableQuestionGroup"]})})}),{useGetQuestionByChatQuery:i,useGetQuestionByIdQuery:u,useAddQuestionMutation:l,useDeleteQuestionMutation:c,useUpdateQuestionMutation:d,useCountAvailableQuestionQuery:x,useCountPublishedQuestionQuery:p}=o,h=window.Telegram.WebApp,m=()=>{h.showAlert("Данная функция находится в разработке",console.log("inDevelopment"))},g=e=>{if(e)return h.openTelegramLink("https://t.me/more_details")};var w=n(0);const f=({chat:e})=>{window.Telegram.WebApp;const{isLoading:t,data:n,isSuccess:s}=i(e);return(0,w.jsxs)(w.Fragment,{children:[t&&(0,w.jsx)(a.Preloader,{}),s&&n.map((e=>(0,w.jsx)("li",{className:"cursor-pointer",children:(0,w.jsx)(a.SimpleAccordionMain,{description:(0,w.jsxs)(a.SimpleAccordionText,{children:[(0,w.jsxs)("span",{className:"text-xs text-[var(--tg-theme-hint-color)]",children:["Дата: ",String(e.dateadd)]}),(0,w.jsx)("p",{children:e.text}),(0,w.jsxs)("span",{className:"text-xs text-[var(--tg-theme-hint-color)]",children:["Категория: ",e.category]})]}),content:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(a.ButtonIcon,{firstIcon:!0,text:"Модерировать",color:"[var(--tg-theme-accent-text-color)]",icon:"moderate",func:m}),(0,w.jsx)(a.ButtonIcon,{firstIcon:!0,text:"Статистика",color:"[var(--tg-theme-accent-text-color)]",icon:"stat",func:m}),(0,w.jsx)(a.ButtonIcon,{firstIcon:!0,text:"Отправить",color:"[var(--tg-theme-accent-text-color)]",icon:"send",func:m}),(0,w.jsx)(a.ButtonIconConfirm,{firstIcon:!0,text:"Удалить",color:"red-500",icon:"delete",func:g,textConfirm:`Вы действительно хотите удалить вопрос №${s?n[0].id:"не success"}`})]})})})))]})},y=()=>(0,w.jsx)("ul",{role:"list",className:"divide-y divide-[var(--tg-theme-hint-color)]",children:(0,w.jsx)(f,{chat:521884639})});var j=n(796);const v=(0,j.createSlice)({name:"questionApp",initialState:{questionSlide:!1,questionType:"",questionData:void 0,addQuestion:{text:"",category:0,answer1:"",answer2:"",answer3:"",answer4:"",answerright:0}},reducers:{showQuestionSlide:(e,t)=>{e.questionSlide=t.payload},typeQuestion:(e,t)=>{e.questionType=t.payload},dataQuestion:(e,t)=>{e.questionData=t.payload},getQuestionText:(e,t)=>{e.addQuestion.text=t.payload},getQuestionCategory:(e,t)=>{e.addQuestion.category=t.payload},getQuestionAnswerOne:(e,t)=>{e.addQuestion.answer1=t.payload},getQuestionAnswerTwo:(e,t)=>{e.addQuestion.answer2=t.payload},getQuestionAnswerThree:(e,t)=>{e.addQuestion.answer3=t.payload},getQuestionAnswerFour:(e,t)=>{e.addQuestion.answer4=t.payload},getQuestionAnswerright:(e,t)=>{e.addQuestion.answerright=t.payload},getQuestionDefault:(e,t)=>{e.addQuestion.text="",e.addQuestion.category=0,e.addQuestion.answer1="",e.addQuestion.answer2="",e.addQuestion.answer3="",e.addQuestion.answer4="",e.addQuestion.answerright=0}}}),{showQuestionSlide:Q,typeQuestion:b,dataQuestion:S,getQuestionText:A,getQuestionCategory:q,getQuestionAnswerOne:T,getQuestionAnswerTwo:k,getQuestionAnswerThree:C,getQuestionAnswerFour:B,getQuestionAnswerright:N,getQuestionDefault:I}=v.actions,E=e=>e.questionApp.questionSlide,P=e=>e.questionApp.questionType,_=e=>e.questionApp.addQuestion.text,O=e=>e.questionApp.addQuestion.category,M=e=>e.questionApp.addQuestion,F=v.reducer,L=(0,j.configureStore)({reducer:{[r.K.reducerPath]:r.K.reducer,questionApp:F},middleware:e=>e().concat(r.K.middleware)}),G=()=>(0,s.useDispatch)(),D=s.useSelector;var W=n(136),R=n(512),$=n(8);const K=window.Telegram.WebApp;function U({text:e,onSubmit:t}){return e.length>10&&"?"===e.substring(e.length-1)?(K.MainButton.setText("Следующий шаг"),K.MainButton.show(),K.onEvent("mainButtonClicked",t)):K.MainButton.hide(),(0,w.jsxs)("div",{className:"py-4",children:[(0,w.jsxs)("div",{className:"mt-1 flex items-center gap-x-1.5",children:[e.length>=10&&(0,w.jsx)(R.c,{className:"h-5 w-5 text-green-600","aria-hidden":"true"}),e.length<10&&(0,w.jsx)($.c,{className:"h-5 w-5 text-red-500","aria-hidden":"true"}),(0,w.jsx)("span",{className:"max-w-[80%] text-xs "+(e.length>=10?"text-green-600":"text-red-500"),children:"Минимальная длина текста вопроса должна составлять не менее 10 символов"})]}),(0,w.jsxs)("div",{className:"mt-1 flex items-center gap-x-1.5",children:["?"===e.substring(e.length-1)&&(0,w.jsx)(R.c,{className:"h-5 w-5 text-green-600","aria-hidden":"true"}),"?"!=e.substring(e.length-1)&&(0,w.jsx)($.c,{className:"h-5 w-5 text-red-500","aria-hidden":"true"}),(0,w.jsx)("span",{className:"max-w-[80%] text-xs "+("?"===e.substring(e.length-1)?"text-green-600":"text-red-500"),children:"Сформулируйте вопрос так, чтобы он заканчивался вопросительным знаком"})]})]})}function H({onSubmit:e}){const t=window.Telegram.WebApp,n=D(_),s=G(),[r,o]=(0,W.useState)("");(0,W.useEffect)((()=>{const e=e=>e?i(n):s(I(""));setTimeout((()=>{""!=n&&t.showConfirm("Применить несохранённый черновик?",e)}),1500)}),[]);const i=e=>{o(e),s(A(e))};return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("div",{className:"py-2",children:[(0,w.jsx)(a.SimpleTextArea,{label:"Текст вопроса:",rows:5,value:r,func:e=>i(e.target.value)}),(0,w.jsx)(U,{text:r,onSubmit:e})]})})}function V({step:e,stepsCount:t}){let n=[];for(let s=0;s<t;s++)n.push({id:s,status:e>s?"complete":"upcoming"});return(0,w.jsxs)("nav",{className:"flex items-center px-8 pt-8 pb-4 bg-[var(--tg-theme-bg-color)] space-x-3 justify-center","aria-label":"Progress",children:[(0,w.jsxs)("p",{className:"text-sm font-medium text-[var(--tg-theme-accent-text-color)]",children:["Шаг ",e," из ",t]}),(0,w.jsx)("ol",{role:"list",className:"ml-8 flex items-center space-x-5",children:n.map((e=>(0,w.jsx)("li",{children:"complete"===e.status?(0,w.jsx)("span",{className:"block h-2.5 w-2.5 rounded-full bg-[var(--tg-theme-accent-text-color)]"}):"current"===e.status?(0,w.jsxs)("span",{className:"relative flex items-center justify-center","aria-current":"step",children:[(0,w.jsx)("span",{className:"absolute flex h-5 w-5 p-px","aria-hidden":"true",children:(0,w.jsx)("span",{className:"h-full w-full rounded-full bg-[var(--tg-theme-text-color)]"})}),(0,w.jsx)("span",{className:"relative block h-2.5 w-2.5 rounded-full bg-[var(--tg-theme-accent-text-color)]","aria-hidden":"true"})]}):(0,w.jsx)("span",{className:"block h-2.5 w-2.5 rounded-full bg-[var(--tg-theme-text-color)]"})},e.id)))})]})}var Y=n(424);const z=window.Telegram.WebApp;function J({onSubmit:e}){const t=D(O),{data:n,isSuccess:s}=(0,Y.useGetCategoryQuery)(""),r=G(),[o,i]=(0,W.useState)(0!=t?null==n?void 0:n.find((e=>e.id===t)):{id:0,name:" "});return(0,w.jsx)("div",{className:"py-2",children:s&&(0,w.jsx)(a.SimpleCategorySelect,{value:o||{id:0,name:" "},func:e=>{i(e),r(q(e.id)),z.MainButton.setText("Следующий шаг"),z.MainButton.show(),z.onEvent("mainButtonClicked",(()=>{z.MainButton.hide()}))},data:n})})}function X({onSubmit:e}){const t=[{id:1,text:"Вариант ответа 1",name:"Answer1",value:""},{id:2,text:"Вариант ответа 2",name:"Answer2",value:""},{id:3,text:"Вариант ответа 3",name:"Answer3",value:""},{id:4,text:"Вариант ответа 4",name:"Answer4",value:""}],n=D(M),[s,r]=(0,W.useState)(n.answerright),[o,i]=(0,W.useState)(t),u=G(),l=e=>{const t=e.target.name,n=e.target.value,s=o.map((e=>e.name!=t?e:Object.assign({},e,{value:n})));i(s)},c=e=>{r(e),u(N(e))};return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("div",{className:"py-2",children:t.map((e=>(0,w.jsx)(a.SimpleInputAnswer,{id:e.id,selected:s,label:e.text,value:e.value,funcChange:l,funcButton:c})))})})}const Z=()=>{window.Telegram.WebApp;const e=G(),t=D(M);async function n(){if(!i)return u();i&&(""!=t.text&&await c({chat:521884639,text:t.text,category:t.category,answer1:t.answer1,answer2:t.answer2,answer3:t.answer3,answer4:t.answer4,answerright:t.answerright}),e(Q(!1)),e(I("")))}console.log(D(L.getState));const{steps:s,currentStepIndex:r,step:o,isLastStep:i,next:u}=function(e){const[t,n]=(0,W.useState)(0);return{currentStepIndex:t,step:e[t],steps:e,isFirstStep:0===t,isLastStep:t===e.length-1,goTo:function(e){n(e)},next:function(){n((t=>t>=e.length-1?t:t+1))},back:function(){n((e=>e<=0?e:e-1))}}}([(0,w.jsx)(H,{onSubmit:n}),(0,w.jsx)(J,{onSubmit:n}),(0,w.jsx)(X,{onSubmit:n})]),[c,{}]=l();return(0,w.jsxs)(a.Page,{children:[(0,w.jsx)(a.HeaderBlock,{children:(0,w.jsx)(V,{step:r+1,stepsCount:s.length})}),(0,w.jsx)(a.MainBlock,{children:o})]})},ee=()=>{const e=window.Telegram.WebApp,t=G(),n=D(E),s=D(P);return n&&(e.BackButton.show(),e.onEvent("backButtonClicked",(()=>{t(Q(!1))}))),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(a.GlobalHeader,{children:(0,w.jsx)(a.ButtonIcon,{firstIcon:!0,text:"Добавить вопрос",color:"[var(--tg-theme-accent-text-color)]",icon:"add",func:()=>{t(b("addQuestion")),t(Q(!0))}})}),(0,w.jsx)(a.Page,{children:(0,w.jsxs)(a.MainBlock,{children:[(0,w.jsx)("div",{className:"text-center pt-9"}),(0,w.jsx)(y,{})]})}),(0,w.jsx)(a.SlidePage,{slide:n,children:"addQuestion"==s&&(0,w.jsx)(Z,{})})]})},te=()=>(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(s.Provider,{store:L,children:(0,w.jsx)(ee,{})})})},28:(e,t,n)=>{n.d(t,{K:()=>o});var s=n(392),a=n(280);const r=(0,s.c9)((0,s._)({baseUrl:"https://api80q.ru/viktorinaonlinebot/"}),{maxRetries:5}),o=(0,a.KS)({reducerPath:"vikApi",refetchOnFocus:!0,baseQuery:r,tagTypes:["TypeGroup","TimeGroup","CategoryGroup","Validate","CountAvailableQuestionGroup","CountPublishedQuestionGroup"],endpoints:()=>({})})},488:(e,t,n)=>{var s=n(136),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,r={},l=null,c=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,s)&&!u.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:a,type:e,key:l,ref:c,props:r,_owner:i.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},0:(e,t,n)=>{e.exports=n(488)}}]);
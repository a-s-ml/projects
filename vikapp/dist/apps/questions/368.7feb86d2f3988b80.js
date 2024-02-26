/*! For license information please see 368.7feb86d2f3988b80.js.LICENSE.txt */
(self.webpackChunkquestions=self.webpackChunkquestions||[]).push([[368],{368:(e,t,n)=>{n.d(t,{c:()=>Y});var s=n(640),a=n(796),o=n(28);const i=(0,a.createSlice)({name:"questionApp",initialState:{questionSlide:!1,questionType:"",questionData:void 0,addQuestion:{text:"",category:0,answer1:"",answer2:"",answer3:"",answer4:"",answerright:0}},reducers:{showQuestionSlide:(e,t)=>{e.questionSlide=t.payload},typeQuestion:(e,t)=>{e.questionType=t.payload},dataQuestion:(e,t)=>{e.questionData=t.payload},getQuestionText:(e,t)=>{e.addQuestion.text=t.payload},getQuestionCategory:(e,t)=>{e.addQuestion.category=t.payload},getQuestionAnswerOne:(e,t)=>{e.addQuestion.answer1=t.payload},getQuestionAnswerTwo:(e,t)=>{e.addQuestion.answer2=t.payload},getQuestionAnswerThree:(e,t)=>{e.addQuestion.answer3=t.payload},getQuestionAnswerFour:(e,t)=>{e.addQuestion.answer4=t.payload},getQuestionAnswerright:(e,t)=>{e.addQuestion.answerright=t.payload},getQuestionDefault:(e,t)=>{e.addQuestion.text="",e.addQuestion.category=0,e.addQuestion.answer1="",e.addQuestion.answer2="",e.addQuestion.answer3="",e.addQuestion.answer4="",e.addQuestion.answerright=0}}}),{showQuestionSlide:r,typeQuestion:u,dataQuestion:l,getQuestionText:c,getQuestionCategory:d,getQuestionAnswerOne:p,getQuestionAnswerTwo:x,getQuestionAnswerThree:h,getQuestionAnswerFour:g,getQuestionAnswerright:m,getQuestionDefault:v}=i.actions,y=e=>e.questionApp.questionSlide,f=e=>e.questionApp.questionType,j=e=>e.questionApp.addQuestion.text,w=e=>e.questionApp.addQuestion.category,Q=e=>e.questionApp.addQuestion,b=i.reducer,S=(0,a.configureStore)({reducer:{[o.K.reducerPath]:o.K.reducer,questionApp:b},middleware:e=>e().concat(o.K.middleware)}),A=()=>(0,s.useDispatch)(),q=s.useSelector;var T=n(184);const B=o.K.injectEndpoints({endpoints:e=>({getQuestionById:e.query({query:e=>({url:`question/findById/${e}`})}),getQuestionByChat:e.query({query:e=>({url:`question/findByChatId/${e}`})}),updateQuestion:e.mutation({query:({id:e,question:t})=>({url:`/question/${e}`,method:"PATCH",body:{question:t}})}),addQuestion:e.mutation({query:e=>({url:"/question",method:"POST",body:e})}),deleteQuestion:e.mutation({query:e=>({url:"/chat-category",method:"DELETE",body:{id:e}})}),countAvailableQuestion:e.query({query:e=>({url:`auto-post/countAvailableQuestionByChatId/${e}`}),providesTags:["CountAvailableQuestionGroup"]}),countPublishedQuestion:e.query({query:e=>({url:`auto-post/countPublishedQuestion/${e}`}),providesTags:["CountAvailableQuestionGroup"]})})}),{useGetQuestionByChatQuery:M,useGetQuestionByIdQuery:C,useAddQuestionMutation:N,useDeleteQuestionMutation:k,useUpdateQuestionMutation:_,useCountAvailableQuestionQuery:I,useCountPublishedQuestionQuery:P}=B;var F=n(954),O=n(0);const E=({chat:e})=>{window.Telegram.WebApp;const{isLoading:t,data:n,isSuccess:s}=M(e);return(0,O.jsxs)(O.Fragment,{children:[t&&(0,O.jsx)(T.Preloader,{}),s&&n.map((e=>(0,O.jsx)("li",{className:"cursor-pointer",children:(0,O.jsx)(T.SimpleAccordionMain,{description:(0,O.jsxs)(T.SimpleAccordionText,{children:[(0,O.jsxs)("span",{className:"text-xs text-[var(--tg-theme-hint-color)]",children:["Дата: ",String(e.dateadd)]}),(0,O.jsx)("p",{className:"line-clamp-3",children:e.text}),(0,O.jsxs)("span",{className:"text-xs text-[var(--tg-theme-hint-color)]",children:["Категория: ",e.category]})]}),content:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(T.ButtonIcon,{firstIcon:!0,text:"Модерировать",color:"[var(--tg-theme-accent-text-color)]",icon:"moderate",func:F._W}),(0,O.jsx)(T.ButtonIcon,{firstIcon:!0,text:"Статистика",color:"[var(--tg-theme-accent-text-color)]",icon:"stat",func:F._W}),(0,O.jsx)(T.ButtonIcon,{firstIcon:!0,text:"Отправить",color:"[var(--tg-theme-accent-text-color)]",icon:"send",func:F._W}),(0,O.jsx)(T.ButtonIconConfirm,{firstIcon:!0,text:"Удалить",color:"red-500",icon:"delete",func:F._g,textConfirm:`Вы действительно хотите удалить вопрос №${s?n[0].id:"не success"}`})]})})})))]})},W=()=>(0,O.jsx)("ul",{role:"list",className:"divide-y divide-[var(--tg-theme-hint-color)]",children:(0,O.jsx)(E,{chat:521884639})});var G=n(136);function D({onSubmit:e}){const t=window.Telegram.WebApp,n=q(j),s=A(),[a,o]=(0,G.useState)(""),[i,r]=(0,G.useState)(!1);(0,G.useEffect)((()=>{const e=e=>e?u(n):s(v(""));setTimeout((()=>{""!=n&&t.showConfirm("Применить несохранённый черновик?",e)}),1500)}),[]),i?(t.MainButton.setText("Следующий шаг"),t.MainButton.show(),t.MainButton.onClick(e)):t.MainButton.hide();const u=e=>{o(e),s(c(e))};return(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)("div",{className:"py-2",children:[(0,O.jsx)(T.SimpleTextArea,{label:"Текст вопроса:",rows:5,value:a,func:e=>u(e.target.value)}),(0,O.jsx)("div",{className:"py-4",children:(0,O.jsx)(T.ValidateForm,{text:"Длина текста вопроса должна быть не менее 10 не более 250 символов",data:{value:a,lengthMin:10,lengthMax:250},validation:r})})]})})}function L({step:e,stepsCount:t}){let n=[];for(let s=0;s<t;s++)n.push({id:s,status:e>s?"complete":"upcoming"});return(0,O.jsxs)("nav",{className:"flex items-center px-8 pt-8 pb-4 bg-[var(--tg-theme-bg-color)] space-x-3 justify-center","aria-label":"Progress",children:[(0,O.jsxs)("p",{className:"text-sm font-medium text-[var(--tg-theme-accent-text-color)]",children:["Шаг ",e," из ",t]}),(0,O.jsx)("ol",{role:"list",className:"ml-8 flex items-center space-x-5",children:n.map((e=>(0,O.jsx)("li",{children:"complete"===e.status?(0,O.jsx)("span",{className:"block h-2.5 w-2.5 rounded-full bg-[var(--tg-theme-accent-text-color)]"}):"current"===e.status?(0,O.jsxs)("span",{className:"relative flex items-center justify-center","aria-current":"step",children:[(0,O.jsx)("span",{className:"absolute flex h-5 w-5 p-px","aria-hidden":"true",children:(0,O.jsx)("span",{className:"h-full w-full rounded-full bg-[var(--tg-theme-text-color)]"})}),(0,O.jsx)("span",{className:"relative block h-2.5 w-2.5 rounded-full bg-[var(--tg-theme-accent-text-color)]","aria-hidden":"true"})]}):(0,O.jsx)("span",{className:"block h-2.5 w-2.5 rounded-full bg-[var(--tg-theme-text-color)]"})},e.id)))})]})}var $=n(424);const K=window.Telegram.WebApp;function R({onSubmit:e}){const t=q(w),{data:n,isSuccess:s}=(0,$.useGetCategoryQuery)(""),a=A(),[o,i]=(0,G.useState)(n&&0!=t?n.find((e=>e.id===t)):{id:0,name:""}),[r,u]=(0,G.useState)(!1);return r?(K.MainButton.setText("Следующий шаг"),K.MainButton.show(),K.MainButton.onClick(e)):K.MainButton.hide(),(0,O.jsxs)("div",{className:"py-2",children:[n&&(0,O.jsx)(T.SimpleCategorySelect,{value:o||{id:0,name:" "},func:e=>{i(e),a(d(e.id))},data:n}),(0,O.jsx)("div",{className:"py-4",children:(0,O.jsx)(T.ValidateForm,{text:"Выберите подходящую категорию",data:{value:o?o.id:0,lengthMin:0,lengthMax:0},validation:u})})]})}function V({onSubmit:e}){const t=window.Telegram.WebApp,n=q(Q),[s,a]=(0,G.useState)(n.answerright),[o,i]=(0,G.useState)([{id:1,name:"Answer1",value:""},{id:2,name:"Answer2",value:""},{id:3,name:"Answer3",value:""},{id:4,name:"Answer4",value:""}]),r=A(),u=e=>{const t=e.target.name,n=e.target.value,s=o.map((e=>e.name===t?Object.assign({},e,{value:n}):e));i(s)},[l,c]=(0,G.useState)(!1),[d,p]=(0,G.useState)(!1);l&&d?(t.MainButton.setText("Следующий шаг"),t.MainButton.show(),t.MainButton.onClick(e)):t.MainButton.hide();const x=e=>{a(e),r(m(e))};return(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)("div",{className:"py-2",children:[o.map((e=>(0,O.jsx)(T.SimpleInputAnswer,{id:e.id,selected:s,value:e.value,funcChange:u,funcButton:x}))),(0,O.jsxs)("div",{className:"py-4",children:[(0,O.jsx)(T.ValidateForm,{text:"Длина текста ответов должна быть не менее 1 не более 35 символов",data:{value:o,lengthMin:1,lengthMax:35},validation:c}),(0,O.jsx)(T.ValidateForm,{text:"Обязательно нужно выбрать верный вариант ответа (вопросы для всех групп проходят модерацию)",data:{value:s,lengthMin:0,lengthMax:0},validation:p})]})]})})}const U=()=>{const e=window.Telegram.WebApp,t=A();function n(){if(console.log("onSubmit"),e.MainButton.hide(),!i)return u();i&&(console.log("dispatch"),t(r(!1)),t(v("")))}q(Q);const{steps:s,currentStepIndex:a,step:o,isLastStep:i,next:u}=(0,F.Yj)([(0,O.jsx)(D,{onSubmit:n}),(0,O.jsx)(R,{onSubmit:n}),(0,O.jsx)(V,{onSubmit:n})]),[l,{}]=N();return console.log("currentStepIndex",a),console.log("isLastStep",i),(0,O.jsxs)(T.Page,{children:[(0,O.jsx)(T.HeaderBlock,{children:(0,O.jsx)(L,{step:a+1,stepsCount:s.length})}),(0,O.jsx)("div",{className:"text-center pt-9"}),(0,O.jsx)(T.MainBlock,{children:o})]})},H=()=>{const e=window.Telegram.WebApp,t=A(),n=q(y),s=q(f);return n&&(e.BackButton.show(),e.onEvent("backButtonClicked",(()=>{t(r(!1))}))),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(T.GlobalHeader,{children:(0,O.jsx)(T.ButtonIcon,{firstIcon:!0,text:"Добавить вопрос",color:"[var(--tg-theme-accent-text-color)]",icon:"add",func:()=>{t(u("addQuestion")),t(r(!0))}})}),(0,O.jsx)(T.Page,{children:(0,O.jsxs)(T.MainBlock,{children:[(0,O.jsx)("div",{className:"text-center pt-9"}),(0,O.jsx)(W,{})]})}),(0,O.jsx)(T.SlidePage,{slide:n,children:"addQuestion"==s&&(0,O.jsx)(U,{})})]})},Y=()=>(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(s.Provider,{store:S,children:(0,O.jsx)(H,{})})})},28:(e,t,n)=>{n.d(t,{K:()=>i});var s=n(392),a=n(280);const o=(0,s.c9)((0,s._)({baseUrl:"https://api80q.ru/viktorinaonlinebot/"}),{maxRetries:5}),i=(0,a.KS)({reducerPath:"vikApi",refetchOnFocus:!0,baseQuery:o,tagTypes:["TypeGroup","TimeGroup","CategoryGroup","Validate","CountAvailableQuestionGroup","CountPublishedQuestionGroup"],endpoints:()=>({})})},954:(e,t,n)=>{n.d(t,{gr:()=>a,_g:()=>i,_W:()=>o,Yj:()=>l,IF:()=>r});const s=window.Telegram.WebApp,a=(...e)=>e.filter(Boolean).join(" "),o=()=>{s.showAlert("Данная функция находится в разработке",console.log("inDevelopment"))},i=e=>{if(e)return s.openTelegramLink("https://t.me/more_details")},r=e=>{if("string"==typeof e.value)return!(e.value.length<e.lengthMin||e.value.length>e.lengthMax);if("number"==typeof e.value)return 0!==e.value;if("object"==typeof e.value){let t=0,n=!1;return e.value.map((n=>{n.value.length>=e.lengthMin&&n.value.length<e.lengthMax&&t++})),n=t===e.value.length,n}return!1};var u=n(136);function l(e){const[t,n]=(0,u.useState)(0);return{currentStepIndex:t,step:e[t],steps:e,isFirstStep:0===t,isLastStep:t===e.length-1,goTo:function(e){n(e)},next:function(){n((t=>t>=e.length-1?t:t+1))},back:function(){n((e=>e<=0?e:e-1))}}}},488:(e,t,n)=>{var s=n(136),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,o={},l=null,c=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,s)&&!u.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:a,type:e,key:l,ref:c,props:o,_owner:r.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},0:(e,t,n)=>{e.exports=n(488)}}]);
/*! For license information please see 368.d9475c27d1aadee6.js.LICENSE.txt */
(self.webpackChunkquestions=self.webpackChunkquestions||[]).push([[368],{368:(e,t,n)=>{n.d(t,{c:()=>H});var s=n(640),a=n(796),o=n(28);const i=(0,a.createSlice)({name:"questionApp",initialState:{questionSlide:!1,questionType:"",questionData:void 0,addQuestion:{text:"",category:0,answer1:"",answer2:"",answer3:"",answer4:"",answerright:0}},reducers:{showQuestionSlide:(e,t)=>{e.questionSlide=t.payload},typeQuestion:(e,t)=>{e.questionType=t.payload},dataQuestion:(e,t)=>{e.questionData=t.payload},getQuestionText:(e,t)=>{e.addQuestion.text=t.payload},getQuestionCategory:(e,t)=>{e.addQuestion.category=t.payload},getQuestionAnswerOne:(e,t)=>{e.addQuestion.answer1=t.payload},getQuestionAnswerTwo:(e,t)=>{e.addQuestion.answer2=t.payload},getQuestionAnswerThree:(e,t)=>{e.addQuestion.answer3=t.payload},getQuestionAnswerFour:(e,t)=>{e.addQuestion.answer4=t.payload},getQuestionAnswerright:(e,t)=>{e.addQuestion.answerright=t.payload},getQuestionDefault:(e,t)=>{e.addQuestion.text="",e.addQuestion.category=0,e.addQuestion.answer1="",e.addQuestion.answer2="",e.addQuestion.answer3="",e.addQuestion.answer4="",e.addQuestion.answerright=0}}}),{showQuestionSlide:r,typeQuestion:u,dataQuestion:l,getQuestionText:c,getQuestionCategory:d,getQuestionAnswerOne:p,getQuestionAnswerTwo:h,getQuestionAnswerThree:x,getQuestionAnswerFour:g,getQuestionAnswerright:m,getQuestionDefault:v}=i.actions,f=e=>e.questionApp.questionSlide,y=e=>e.questionApp.questionType,j=e=>e.questionApp.addQuestion.text,Q=e=>e.questionApp.addQuestion.category,w=e=>e.questionApp.addQuestion,b=i.reducer,S=(0,a.configureStore)({reducer:{[o.K.reducerPath]:o.K.reducer,questionApp:b},middleware:e=>e().concat(o.K.middleware)}),A=()=>(0,s.useDispatch)(),q=s.useSelector;var C=n(184);const B=o.K.injectEndpoints({endpoints:e=>({getQuestionById:e.query({query:e=>({url:`question/findById/${e}`})}),getQuestionByChat:e.query({query:e=>({url:`question/findByChatId/${e}`})}),updateQuestion:e.mutation({query:({id:e,question:t})=>({url:`/question/${e}`,method:"PATCH",body:{question:t}})}),addQuestion:e.mutation({query:e=>({url:"/question",method:"POST",body:e})}),deleteQuestion:e.mutation({query:e=>({url:"/chat-category",method:"DELETE",body:{id:e}})}),countAvailableQuestion:e.query({query:e=>({url:`auto-post/countAvailableQuestionByChatId/${e}`}),providesTags:["CountAvailableQuestionGroup"]}),countPublishedQuestion:e.query({query:e=>({url:`auto-post/countPublishedQuestion/${e}`}),providesTags:["CountAvailableQuestionGroup"]})})}),{useGetQuestionByChatQuery:T,useGetQuestionByIdQuery:k,useAddQuestionMutation:I,useDeleteQuestionMutation:M,useUpdateQuestionMutation:N,useCountAvailableQuestionQuery:_,useCountPublishedQuestionQuery:P}=B;var E=n(460),F=n(0);const G=({chat:e})=>{const{isLoading:t,data:n,isSuccess:s}=T(e);return(0,F.jsxs)(F.Fragment,{children:[t&&(0,F.jsx)(C.Preloader,{}),s&&n.map((e=>(0,F.jsx)("li",{className:"cursor-pointer",children:(0,F.jsx)(C.SimpleAccordionMain,{description:(0,F.jsxs)(C.SimpleAccordionText,{children:[(0,F.jsxs)("span",{className:"text-xs text-[var(--tg-theme-hint-color)]",children:["Дата: ",String(e.dateadd)]}),(0,F.jsx)("p",{className:"line-clamp-3",children:e.text}),(0,F.jsxs)("span",{className:"text-xs text-[var(--tg-theme-hint-color)]",children:["Категория: ",e.category]})]}),content:(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(C.ButtonIcon,{firstIcon:!0,text:"Модерировать",color:"[var(--tg-theme-accent-text-color)]",icon:"moderate",func:E._W}),(0,F.jsx)(C.ButtonIcon,{firstIcon:!0,text:"Статистика",color:"[var(--tg-theme-accent-text-color)]",icon:"stat",func:E._W}),(0,F.jsx)(C.ButtonIcon,{firstIcon:!0,text:"Отправить",color:"[var(--tg-theme-accent-text-color)]",icon:"send",func:E._W}),(0,F.jsx)(C.ButtonIconConfirm,{firstIcon:!0,text:"Удалить",color:"red-500",icon:"delete",func:E._g,textConfirm:`Вы действительно хотите удалить вопрос №${s?n[0].id:"не success"}`})]})})})))]})},O=()=>(0,F.jsx)("ul",{role:"list",className:"divide-y divide-[var(--tg-theme-hint-color)]",children:(0,F.jsx)(G,{chat:521884639})});var D=n(136);function W({validate:e}){const t=window.Telegram.WebApp,n=q(j),s=A(),[a,o]=(0,D.useState)(""),[i,r]=(0,D.useState)(!1);(0,D.useEffect)((()=>{const e=e=>e?u(n):s(v(""));setTimeout((()=>{""!=n&&t.showConfirm("Применить несохранённый черновик?",e)}),1500)}),[]),e(!!i);const u=e=>{o(e),s(c(e))};return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)("div",{className:"py-2",children:[(0,F.jsx)(C.SimpleTextArea,{label:"Текст вопроса:",rows:5,value:a,func:e=>u(e.target.value)}),(0,F.jsx)("div",{className:"py-4",children:(0,F.jsx)(C.ValidateForm,{text:"Длина текста вопроса должна быть не менее 10 не более 250 символов",data:{value:a,lengthMin:10,lengthMax:250},validation:r})})]})})}function L({step:e,stepsCount:t}){let n=[];for(let s=0;s<t;s++)n.push({id:s,status:e>s?"complete":"upcoming"});return(0,F.jsxs)("nav",{className:"flex items-center px-8 pt-8 pb-4 bg-[var(--tg-theme-bg-color)] space-x-3 justify-center","aria-label":"Progress",children:[(0,F.jsxs)("p",{className:"text-sm font-medium text-[var(--tg-theme-accent-text-color)]",children:["Шаг ",e," из ",t]}),(0,F.jsx)("ol",{role:"list",className:"ml-8 flex items-center space-x-5",children:n.map((e=>(0,F.jsx)("li",{children:"complete"===e.status?(0,F.jsx)("span",{className:"block h-2.5 w-2.5 rounded-full bg-[var(--tg-theme-accent-text-color)]"}):"current"===e.status?(0,F.jsxs)("span",{className:"relative flex items-center justify-center","aria-current":"step",children:[(0,F.jsx)("span",{className:"absolute flex h-5 w-5 p-px","aria-hidden":"true",children:(0,F.jsx)("span",{className:"h-full w-full rounded-full bg-[var(--tg-theme-text-color)]"})}),(0,F.jsx)("span",{className:"relative block h-2.5 w-2.5 rounded-full bg-[var(--tg-theme-accent-text-color)]","aria-hidden":"true"})]}):(0,F.jsx)("span",{className:"block h-2.5 w-2.5 rounded-full bg-[var(--tg-theme-text-color)]"})},e.id)))})]})}var $=n(424);function V({validate:e}){const t=q(Q);console.log("questionCategory",t);const{data:n}=(0,$.useGetCategoryQuery)("");console.log("data",n);const s=A(),[a,o]=(0,D.useState)(n&&0!=t?n.find((e=>e.id===t)):{id:0,name:""});console.log("selectedCategory",a);const[i,r]=(0,D.useState)(!1);return e(!!i),(0,F.jsxs)("div",{className:"py-2",children:[n&&(0,F.jsx)(C.SimpleCategorySelect,{value:a||{id:0,name:" "},func:e=>{o(e),s(d(e.id))},data:n}),(0,F.jsx)("div",{className:"py-4",children:(0,F.jsx)(C.ValidateForm,{text:"Выберите подходящую категорию",data:{value:a?a.id:0,lengthMin:0,lengthMax:0},validation:r})})]})}function K({validate:e}){const t=q(w),[n,s]=(0,D.useState)(t.answerright),[a,o]=(0,D.useState)([{id:1,name:"Answer1",value:""},{id:2,name:"Answer2",value:""},{id:3,name:"Answer3",value:""},{id:4,name:"Answer4",value:""}]),i=A(),r=e=>{const t=e.target.name,n=e.target.value,s=a.map((e=>e.name===t?Object.assign({},e,{value:n}):e));o(s)},[u,l]=(0,D.useState)(!1),[c,d]=(0,D.useState)(!1);e(!(!u||!c));const p=e=>{s(e),i(m(e))};return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)("div",{className:"py-2",children:[a.map((e=>(0,F.jsx)(C.SimpleInputAnswer,{id:e.id,selected:n,value:e.value,funcChange:r,funcButton:p}))),(0,F.jsxs)("div",{className:"py-4",children:[(0,F.jsx)(C.ValidateForm,{text:"Длина текста ответов должна быть не менее 1 не более 35 символов",data:{value:a,lengthMin:1,lengthMax:35},validation:l}),(0,F.jsx)(C.ValidateForm,{text:"Обязательно нужно выбрать верный вариант ответа (вопросы для всех групп проходят модерацию)",data:{value:n,lengthMin:0,lengthMax:0},validation:d})]})]})})}const R=({success:e})=>{const t=A();q(w);const{setMainButtonState:n}=(0,E.Gu)((function(){u||l(),u&&(t(r(!1)),t(v("")))})),s=e=>{n(e)},{steps:a,currentStepIndex:o,step:i,isLastStep:u,next:l}=(0,E.Yj)([(0,F.jsx)(W,{validate:s}),(0,F.jsx)(V,{validate:s}),(0,F.jsx)(K,{validate:s})]),[c,{}]=I();return(0,F.jsxs)(C.Page,{children:[(0,F.jsx)(C.HeaderBlock,{children:(0,F.jsx)(L,{step:o+1,stepsCount:a.length})}),(0,F.jsx)(C.MainBlock,{children:i})]})},U=()=>{const e=window.Telegram.WebApp,t=A(),n=q(f),s=q(y),[a,o]=(0,D.useState)(!1);return(0,E.IV)(n,(()=>t(r(!1)))),(0,D.useEffect)((()=>{a&&e.showConfirm("Вопрос успешно добавлен!",console.log("showPopup"))}),[a]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(C.Page,{children:[(0,F.jsx)(C.GlobalHeader,{children:(0,F.jsx)(C.ButtonIcon,{firstIcon:!0,text:"Добавить вопрос",color:"[var(--tg-theme-accent-text-color)]",icon:"add",func:()=>{t(u("addQuestion")),t(r(!0))}})}),(0,F.jsxs)(C.MainBlock,{children:[(0,F.jsx)("div",{className:"text-center pt-9"}),(0,F.jsx)(O,{})]})]}),(0,F.jsx)(C.SlidePage,{slide:n,children:"addQuestion"==s&&(0,F.jsx)(R,{success:e=>{o(e)}})})]})},H=()=>(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(s.Provider,{store:S,children:(0,F.jsx)(U,{})})})},28:(e,t,n)=>{n.d(t,{K:()=>i});var s=n(392),a=n(280);const o=(0,s.c9)((0,s._)({baseUrl:"https://api80q.ru/viktorinaonlinebot/"}),{maxRetries:5}),i=(0,a.KS)({reducerPath:"vikApi",refetchOnFocus:!0,baseQuery:o,tagTypes:["TypeGroup","TimeGroup","CategoryGroup","Validate","CountAvailableQuestionGroup","CountPublishedQuestionGroup"],endpoints:()=>({})})},460:(e,t,n)=>{n.d(t,{gr:()=>a,_g:()=>i,_W:()=>o,IV:()=>d,Gu:()=>c,Yj:()=>l,IF:()=>r});const s=window.Telegram.WebApp,a=(...e)=>e.filter(Boolean).join(" "),o=()=>{s.showAlert("Данная функция находится в разработке",console.log("inDevelopment"))},i=e=>{if(e)return s.openTelegramLink("https://t.me/more_details")},r=e=>{if("string"==typeof e.value)return!(e.value.length<e.lengthMin||e.value.length>e.lengthMax);if("number"==typeof e.value)return 0!==e.value;if("object"==typeof e.value){let t=0,n=!1;return e.value.map((n=>{n.value.length>=e.lengthMin&&n.value.length<e.lengthMax&&t++})),n=t===e.value.length,n}return!1};var u=n(136);function l(e){const[t,n]=(0,u.useState)(0);return{currentStepIndex:t,step:e[t],steps:e,isFirstStep:0===t,isLastStep:t===e.length-1,goTo:function(e){n(e)},next:function(){n((t=>t>=e.length-1?t:t+1))},back:function(){n((e=>e<=0?e:e-1))}}}const c=e=>{const t=window.Telegram.WebApp,[n,s]=(0,u.useState)(!1);return(0,u.useEffect)((()=>(n?(t.MainButton.setText("Далее"),t.MainButton.show(),t.onEvent("mainButtonClicked",e)):t.MainButton.hide(),()=>{t.MainButton.hide(),t.offEvent("mainButtonClicked",e)})),[n]),{setMainButtonState:s}},d=(e,t)=>{const n=window.Telegram.WebApp;(0,u.useEffect)((()=>{e?(n.BackButton.show(),n.onEvent("backButtonClicked",t)):n.BackButton.hide()}),[e])}},108:(e,t,n)=>{var s=n(136),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,o={},l=null,c=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,s)&&!u.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:a,type:e,key:l,ref:c,props:o,_owner:r.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},0:(e,t,n)=>{e.exports=n(108)}}]);
/*! For license information please see 300.1d9a99da88870b1a.js.LICENSE.txt */
(self.webpackChunkquiz=self.webpackChunkquiz||[]).push([[300],{300:(e,a,r)=>{r.r(a),r.d(a,{default:()=>v});var t=r(640),s=r(796);const n="quiz",l=(0,s.createEntityAdapter)(),o=(0,s.createAsyncThunk)("quiz/fetchStatus",(async(e,a)=>Promise.resolve([]))),d=l.getInitialState({loadingStatus:"not loaded",error:null}),c=(0,s.createSlice)({name:n,initialState:d,reducers:{add:l.addOne,remove:l.removeOne},extraReducers:e=>{e.addCase(o.pending,(e=>{e.loadingStatus="loading"})).addCase(o.fulfilled,((e,a)=>{l.setAll(e,a.payload),e.loadingStatus="loaded"})).addCase(o.rejected,((e,a)=>{e.loadingStatus="error",e.error=a.error.message}))}}),{selectAll:i,selectEntities:x}=(c.reducer,c.actions,l.getSelectors()),m=e=>e[n],u=(0,s.createSelector)(m,i);(0,s.createSelector)(m,x);var p=r(136),f=r(376),g=r(184),h=r(0);const b=[{name:"Свои вопросы",component:g.AddGroup},{name:"Вопросы бота",component:g.Feedback}];function y(){return(0,h.jsxs)("div",{className:"bg-white",children:["s",(0,h.jsx)("section",{"aria-labelledby":"features-heading",className:"mx-auto max-w-7xl py-8 sm:px-2 lg:px-8",children:(0,h.jsxs)("div",{className:"mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0",children:[(0,h.jsx)("div",{className:"max-w-3xl",children:(0,h.jsx)("h2",{id:"features-heading",className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Виды викторины"})}),(0,h.jsxs)(f.Tab.Group,{as:"div",className:"mt-4",children:[(0,h.jsx)("div",{className:"-mx-4 flex overflow-x-auto sm:mx-0",children:(0,h.jsx)("div",{className:"flex-auto border-b border-gray-200 px-4 sm:px-0",children:(0,h.jsx)(f.Tab.List,{className:"-mb-px flex space-x-10",children:b.map((e=>(0,h.jsx)(f.Tab,{className:({selected:e})=>function(...e){return e.filter(Boolean).join(" ")}(e?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700","whitespace-nowrap border-b-2 py-6 text-sm font-medium"),children:e.name},e.name)))})})}),(0,h.jsx)(f.Tab.Panels,{as:p.Fragment,children:b.map((e=>(0,h.jsx)(f.Tab.Panel,{className:"space-y-16 pt-10 lg:pt-16",children:(0,h.jsx)(e.component,{})},e.name)))})]})]})})]})}const v=function(){const e=(0,t.useSelector)(u);return console.log("entities",e),(0,h.jsx)("div",{children:(0,h.jsx)(y,{})})}},488:(e,a,r)=>{var t=r(136),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,r){var t,n={},c=null,i=null;for(t in void 0!==r&&(c=""+r),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(i=a.ref),a)l.call(a,t)&&!d.hasOwnProperty(t)&&(n[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===n[t]&&(n[t]=a[t]);return{$$typeof:s,type:e,key:c,ref:i,props:n,_owner:o.current}}a.Fragment=n,a.jsx=c,a.jsxs=c},0:(e,a,r)=>{e.exports=r(488)}}]);
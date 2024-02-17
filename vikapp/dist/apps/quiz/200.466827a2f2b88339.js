/*! For license information please see 200.466827a2f2b88339.js.LICENSE.txt */
(self.webpackChunkquiz=self.webpackChunkquiz||[]).push([[200],{200:(e,r,a)=>{a.r(r);var t=a(136),s=a(32),n=a(640),o=a(796);const l="quiz",d=(0,o.createEntityAdapter)(),c=(0,o.createAsyncThunk)("quiz/fetchStatus",(async(e,r)=>Promise.resolve([]))),i=d.getInitialState({loadingStatus:"not loaded",error:null}),x=(0,o.createSlice)({name:l,initialState:i,reducers:{add:d.addOne,remove:d.removeOne},extraReducers:e=>{e.addCase(c.pending,(e=>{e.loadingStatus="loading"})).addCase(c.fulfilled,((e,r)=>{d.setAll(e,r.payload),e.loadingStatus="loaded"})).addCase(c.rejected,((e,r)=>{e.loadingStatus="error",e.error=r.error.message}))}}),m=x.reducer,{selectAll:u,selectEntities:p}=(x.actions,d.getSelectors()),f=e=>e[l],h=(0,o.createSelector)(f,u);(0,o.createSelector)(f,p);var g=a(376),y=a(184),b=a(0);const v=[{name:"Свои вопросы",component:y.AddGroup},{name:"Вопросы бота",component:y.Feedback}];function j(){return(0,b.jsxs)("div",{className:"bg-white",children:["s",(0,b.jsx)("section",{"aria-labelledby":"features-heading",className:"mx-auto max-w-7xl py-8 sm:px-2 lg:px-8",children:(0,b.jsxs)("div",{className:"mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0",children:[(0,b.jsx)("div",{className:"max-w-3xl",children:(0,b.jsx)("h2",{id:"features-heading",className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Виды викторины"})}),(0,b.jsxs)(g.Tab.Group,{as:"div",className:"mt-4",children:[(0,b.jsx)("div",{className:"-mx-4 flex overflow-x-auto sm:mx-0",children:(0,b.jsx)("div",{className:"flex-auto border-b border-gray-200 px-4 sm:px-0",children:(0,b.jsx)(g.Tab.List,{className:"-mb-px flex space-x-10",children:v.map((e=>(0,b.jsx)(g.Tab,{className:({selected:e})=>function(...e){return e.filter(Boolean).join(" ")}(e?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700","whitespace-nowrap border-b-2 py-6 text-sm font-medium"),children:e.name},e.name)))})})}),(0,b.jsx)(g.Tab.Panels,{as:t.Fragment,children:v.map((e=>(0,b.jsx)(g.Tab.Panel,{className:"space-y-16 pt-10 lg:pt-16",children:(0,b.jsx)(e.component,{})},e.name)))})]})]})})]})}const S=function(){const e=(0,n.useSelector)(h);return console.log("entities",e),(0,b.jsx)("div",{children:(0,b.jsx)(j,{})})},_=s.C(document.getElementById("root")),w=(0,o.configureStore)({reducer:{[l]:m},middleware:e=>e(),devTools:!1,enhancers:[]});_.render((0,b.jsx)(n.Provider,{store:w,children:(0,b.jsx)(t.StrictMode,{children:(0,b.jsx)(S,{})})}))},32:(e,r,a)=>{var t=a(408);r.C=t.createRoot,t.hydrateRoot},488:(e,r,a)=>{var t=a(136),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,a){var t,n={},c=null,i=null;for(t in void 0!==a&&(c=""+a),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(i=r.ref),r)o.call(r,t)&&!d.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===n[t]&&(n[t]=r[t]);return{$$typeof:s,type:e,key:c,ref:i,props:n,_owner:l.current}}r.Fragment=n,r.jsx=c,r.jsxs=c},0:(e,r,a)=>{e.exports=a(488)}}]);
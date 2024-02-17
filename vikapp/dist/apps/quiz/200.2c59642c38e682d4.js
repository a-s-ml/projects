/*! For license information please see 200.2c59642c38e682d4.js.LICENSE.txt */
(self.webpackChunkquiz=self.webpackChunkquiz||[]).push([[200],{200:(e,a,r)=>{r.r(a);var t=r(136),s=r(32),i=r(640),n=r(796);const o="quiz",l=(0,n.createEntityAdapter)(),c=(0,n.createAsyncThunk)("quiz/fetchStatus",(async(e,a)=>Promise.resolve([]))),d=l.getInitialState({loadingStatus:"not loaded",error:null}),m=(0,n.createSlice)({name:o,initialState:d,reducers:{add:l.addOne,remove:l.removeOne},extraReducers:e=>{e.addCase(c.pending,(e=>{e.loadingStatus="loading"})).addCase(c.fulfilled,((e,a)=>{l.setAll(e,a.payload),e.loadingStatus="loaded"})).addCase(c.rejected,((e,a)=>{e.loadingStatus="error",e.error=a.error.message}))}}),u=m.reducer,{selectAll:g,selectEntities:p}=(m.actions,l.getSelectors()),x=e=>e[o],h=(0,n.createSelector)(x,g);(0,n.createSelector)(x,p);var f=r(376),y=r(0);const v=[{name:"Design",features:[{name:"Adaptive and modular",description:"The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.",imageSrc:"https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg",imageAlt:"Maple organizer base with slots, supporting white polycarbonate trays of various sizes."}]},{name:"Material",features:[{name:"Natural wood options",description:"Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material, or match similar woods for a calm and cohesive look. Every base is hand sanded and finished.",imageSrc:"https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg",imageAlt:"Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment."}]}];function b(){return(0,y.jsx)("div",{className:"bg-white",children:(0,y.jsx)("section",{"aria-labelledby":"features-heading",className:"mx-auto max-w-7xl py-32 sm:px-2 lg:px-8",children:(0,y.jsxs)("div",{className:"mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0",children:[(0,y.jsxs)("div",{className:"max-w-3xl",children:[(0,y.jsx)("h2",{id:"features-heading",className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Виды викторины"}),(0,y.jsx)("p",{className:"mt-4 text-gray-500",children:"The Organize modular system offers endless options for arranging your favorite and most used items. Keep everything at reach and in its place, while dressing up your workspace."})]}),(0,y.jsxs)(f.Tab.Group,{as:"div",className:"mt-4",children:[(0,y.jsx)("div",{className:"-mx-4 flex overflow-x-auto sm:mx-0",children:(0,y.jsx)("div",{className:"flex-auto border-b border-gray-200 px-4 sm:px-0",children:(0,y.jsx)(f.Tab.List,{className:"-mb-px flex space-x-10",children:v.map((e=>(0,y.jsx)(f.Tab,{className:({selected:e})=>function(...e){return e.filter(Boolean).join(" ")}(e?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700","whitespace-nowrap border-b-2 py-6 text-sm font-medium"),children:e.name},e.name)))})})}),(0,y.jsx)(f.Tab.Panels,{as:t.Fragment,children:v.map((e=>(0,y.jsx)(f.Tab.Panel,{className:"space-y-16 pt-10 lg:pt-16",children:e.features.map((e=>(0,y.jsxs)("div",{className:"flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8",children:[(0,y.jsxs)("div",{className:"mt-6 lg:col-span-5 lg:mt-0",children:[(0,y.jsx)("h3",{className:"text-lg font-medium text-gray-900",children:e.name}),(0,y.jsx)("p",{className:"mt-2 text-sm text-gray-500",children:e.description})]}),(0,y.jsx)("div",{className:"lg:col-span-7",children:(0,y.jsx)("div",{className:"aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5",children:(0,y.jsx)("img",{src:e.imageSrc,alt:e.imageAlt,className:"object-cover object-center"})})})]},e.name)))},e.name)))})]})]})})})}const j=function(){const e=(0,i.useSelector)(h);return console.log("entities",e),(0,y.jsxs)("div",{children:[(0,y.jsx)("b",{children:"Quiz"}),(0,y.jsx)(b,{})]})},w=s.C(document.getElementById("root")),N=(0,n.configureStore)({reducer:{[o]:u},middleware:e=>e(),devTools:!1,enhancers:[]});w.render((0,y.jsx)(i.Provider,{store:N,children:(0,y.jsx)(t.StrictMode,{children:(0,y.jsx)(j,{})})}))},32:(e,a,r)=>{var t=r(408);a.C=t.createRoot,t.hydrateRoot},488:(e,a,r)=>{var t=r(136),s=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),n=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,a,r){var t,l={},c=null,d=null;for(t in void 0!==r&&(c=""+r),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(d=a.ref),a)i.call(a,t)&&!o.hasOwnProperty(t)&&(l[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===l[t]&&(l[t]=a[t]);return{$$typeof:s,type:e,key:c,ref:d,props:l,_owner:n.current}}a.jsx=l,a.jsxs=l},0:(e,a,r)=>{e.exports=r(488)}}]);
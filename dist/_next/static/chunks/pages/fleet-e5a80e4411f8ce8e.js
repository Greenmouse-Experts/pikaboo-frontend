(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{14:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fleet",function(){return s(48382)}])},95677:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{noSSR:function(){return i},default:function(){return n}});let l=s(38754),r=(s(67294),l._(s(8976)));function a(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}function n(e,t){let s=r.default,l={loading:e=>{let{error:t,isLoading:s,pastDelay:l}=e;return null}};e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l={...l,...e}),l={...l,...t};let n=l.loader;return(l.loadableGenerated&&(l={...l,...l.loadableGenerated},delete l.loadableGenerated),"boolean"!=typeof l.ssr||l.ssr)?s({...l,loader:()=>null!=n?n().then(a):Promise.resolve(a(()=>null))}):(delete l.webpack,delete l.modules,i(s,l))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},92254:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return a}});let l=s(38754),r=l._(s(67294)),a=r.default.createContext(null)},8976:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return p}});let l=s(38754),r=l._(s(67294)),a=s(92254),i=[],n=[],d=!1;function c(e){let t=e(),s={loading:!0,loaded:null,error:null};return s.promise=t.then(e=>(s.loading=!1,s.loaded=e,e)).catch(e=>{throw s.loading=!1,s.error=e,e}),s}class o{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let s=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),l=null;function i(){if(!l){let t=new o(e,s);l={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return l.promise()}if(!d){let e=s.webpack?s.webpack():s.modules;e&&n.push(t=>{for(let s of e)if(t.includes(s))return i()})}function c(e,t){!function(){i();let e=r.default.useContext(a.LoadableContext);e&&Array.isArray(s.modules)&&s.modules.forEach(t=>{e(t)})}();let n=r.default.useSyncExternalStore(l.subscribe,l.getCurrentValue,l.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:l.retry}),[]),r.default.useMemo(()=>{var t;return n.loading||n.error?r.default.createElement(s.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:l.retry}):n.loaded?r.default.createElement((t=n.loaded)&&t.default?t.default:t,e):null},[e,n])}return c.preload=()=>i(),c.displayName="LoadableComponent",r.default.forwardRef(c)}(c,e)}function h(e,t){let s=[];for(;e.length;){let l=e.pop();s.push(l(t))}return Promise.all(s).then(()=>{if(e.length)return h(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{h(i).then(e,t)}),u.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let s=()=>(d=!0,t());h(n,e).then(s,s)})),window.__NEXT_PRELOADREADY=u.preloadReady;let p=u},48382:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return p}});var l=s(85893);s(67294);var r=s(25675),a=s.n(r),i=s(41664),n=s.n(i),d=s(5152),c=s.n(d);let o=c()(()=>Promise.all([s.e(279),s.e(229)]).then(s.bind(s,47229)),{loadableGenerated:{webpack:()=>[47229]},ssr:!1});var u=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex justify-between items-center border-b pb-2",children:[(0,l.jsx)("p",{className:"fw-600 lg:fs-700 ",children:"Monthly Waste Disposals"}),(0,l.jsxs)("select",{className:"p-2 border border-gray-500 rounded-lg",children:[(0,l.jsx)("option",{children:"2023"}),(0,l.jsx)("option",{children:"2024"})]})]}),(0,l.jsx)("div",{className:"mt-8",children:(0,l.jsx)(o,{options:{colors:["#009a06","#FBBC0B","#0B1B2B"],legend:{show:!0},stroke:{width:1},dataLabels:{enabled:!1},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},plotOptions:{bar:{columnWidth:"60%"}}},series:[{name:"Residence",data:[50,2,15,11,6,40,15,11,5,20,15,11]}],type:"bar",width:"100%",height:"400px"})})]});let h=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6",children:[(0,l.jsxs)("div",{className:"dash-shade p-4 flex gap-x-4 items-center",children:[(0,l.jsx)(a(),{src:"https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46756_lvidiy.png",alt:"waste",width:100,height:100}),(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)("p",{className:"fw-600 text-xl",children:"12"}),(0,l.jsx)("p",{className:"fw-500 fs-500 text-gray-600",children:"Waste Manager"})]})]}),(0,l.jsxs)("div",{className:"dash-shade p-4 flex gap-x-4 items-center",children:[(0,l.jsx)(a(),{src:"https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46754_rum9nv.png",alt:"waste",width:100,height:100}),(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)("p",{className:"fw-600 text-xl",children:"22"}),(0,l.jsx)("p",{className:"fw-500 fs-500 text-gray-600",children:"Service Personnel"})]})]}),(0,l.jsxs)("div",{className:"dash-shade p-4 flex  gap-x-4 items-center",children:[(0,l.jsx)(a(),{src:"https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46757_t7u06l.png",alt:"waste",width:100,height:100}),(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)("p",{className:"fw-600 text-xl",children:"11"}),(0,l.jsx)("p",{className:"fw-500 fs-500 text-gray-600",children:"Gabbage Trucks"})]})]}),(0,l.jsxs)("div",{className:"dash-shade p-4 flex  gap-x-4 items-center",children:[(0,l.jsx)(a(),{src:"https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46758_pfi4y0.png",alt:"waste",width:100,height:100}),(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)("p",{className:"fw-600 text-xl",children:"40"}),(0,l.jsx)("p",{className:"fw-500 fs-500 text-gray-600",children:"Home Resisdence"})]})]})]}),(0,l.jsxs)("div",{className:"grid lg:grid-cols-2 gap-6 lg:gap-12 mt-10",children:[(0,l.jsxs)("div",{className:"bg-white p-4 dash-shade rounded-lg",children:[(0,l.jsxs)("div",{className:"flex gap-x-4 items-center",children:[(0,l.jsx)(a(),{src:"https://res.cloudinary.com/greenmouse-tech/image/upload/v1688401712/pikaboo/recylcle_vq84h0.png",alt:"recycle",width:200,height:200,className:"w-12"}),(0,l.jsx)("p",{className:"fw-600",children:"RECENT DISPOSAL ZONES"})]}),(0,l.jsxs)("div",{className:"my-6",children:[(0,l.jsxs)("div",{className:"flex justify-between border-b pb-2",children:[(0,l.jsx)("p",{children:"Ugbowo Central"}),(0,l.jsx)("p",{children:"12/16 Residence"}),(0,l.jsx)("p",{children:"29-Jul-2023"})]}),(0,l.jsxs)("div",{className:"flex justify-between mt-3 border-b pb-2",children:[(0,l.jsx)("p",{children:"Ugbowo Central"}),(0,l.jsx)("p",{children:"12/16 Residence"}),(0,l.jsx)("p",{children:"29-Jul-2023"})]}),(0,l.jsxs)("div",{className:"flex justify-between mt-3 border-b pb-2",children:[(0,l.jsx)("p",{children:"Ugbowo Central"}),(0,l.jsx)("p",{children:"12/16 Residence"}),(0,l.jsx)("p",{children:"29-Jul-2023"})]})]}),(0,l.jsx)("div",{className:"flex justify-end",children:(0,l.jsx)(n(),{href:"/",className:"text-primary fw-600",children:"See All"})})]}),(0,l.jsxs)("div",{className:"bg-white p-4 dash-shade rounded-lg",children:[(0,l.jsxs)("div",{className:"flex gap-x-4 items-center",children:[(0,l.jsx)(a(),{src:"https://res.cloudinary.com/greenmouse-tech/image/upload/v1688401712/pikaboo/recylcle_vq84h0.png",alt:"recycle",width:200,height:200,className:"w-12 hue-rotate-90"}),(0,l.jsx)("p",{className:"fw-600",children:"DISPOSAL ZONES"})]}),(0,l.jsxs)("div",{className:"my-6",children:[(0,l.jsxs)("div",{className:"flex justify-between border-b pb-2",children:[(0,l.jsx)("p",{children:"Ugbowo Central"}),(0,l.jsx)("p",{children:"12/16 Residence"}),(0,l.jsx)("p",{children:"29-Jul-2023"})]}),(0,l.jsxs)("div",{className:"flex justify-between mt-3 border-b pb-2",children:[(0,l.jsx)("p",{children:"Ugbowo Central"}),(0,l.jsx)("p",{children:"12/16 Residence"}),(0,l.jsx)("p",{children:"29-Jul-2023"})]}),(0,l.jsxs)("div",{className:"flex justify-between mt-3 border-b pb-2",children:[(0,l.jsx)("p",{children:"Ugbowo Central"}),(0,l.jsx)("p",{children:"12/16 Residence"}),(0,l.jsx)("p",{children:"29-Jul-2023"})]})]}),(0,l.jsx)("div",{className:"flex justify-end",children:(0,l.jsx)(n(),{href:"/",className:"text-primary fw-600",children:"See All"})})]})]}),(0,l.jsx)("div",{className:"mt-10 dash-shade lg:p-5",children:(0,l.jsx)(u,{})})]})});var p=h;h.Layout="Dashboard"},5152:function(e,t,s){e.exports=s(95677)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=14)}),_N_E=e.O()}]);
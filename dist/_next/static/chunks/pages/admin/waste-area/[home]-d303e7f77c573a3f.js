(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[805],{20505:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/waste-area/[home]",function(){return l(65738)}])},65738:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return g}});var r=l(85893),a=l(29562),t=l(79008),d=l(67294),n=l(71119),i=l(77656),c=l(41664),o=l.n(c),u=e=>{let{data:s}=e,l=(0,d.useMemo)(()=>[{Header:"S/N",accessor:(e,s)=>s+1},{Header:"Residence ID",accessor:"user.pikaboo_id",Cell:e=>(0,r.jsx)(o(),{href:"/admin/residents/details",className:"fw-500 text-primary",children:e.value})},{Header:"Address",accessor:"user.address"},{Header:"Name",accessor:"user.first_name",Cell:e=>"".concat(e.row.original.user.title," ").concat(e.value," ").concat(e.row.original.user.last_name)},{Header:"Phone Number",accessor:"user.phone"},{Header:"Email",accessor:"user.email"},{Header:"Status",accessor:"user.status",Cell:e=>i.T$[e.value]}],[]),a=(0,d.useMemo)(()=>s,[s]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"lg:p-4",children:(0,r.jsx)(n.ZP,{columns:l,data:a})})})},m=l(11163),x=l(5434);let h=()=>{var e,s,l,n;let i=(0,m.useRouter)(),c=i.query.sort,[o,h]=(0,d.useState)(!1),[g,p]=(0,d.useState)(),[v]=(0,a.bV)();return(0,d.useEffect)(()=>{c&&(h(!0),v(c).then(e=>{var s;(null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.success)&&(p(e.data),h(!1))}))},[c]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"h-40 bg-waste bg-cover bg-center flex items-center dash-shade rounded-xl",children:(0,r.jsxs)("div",{className:"pl-12 text-white",children:[(0,r.jsx)("p",{className:"text-2xl fw-600",children:(null==g?void 0:g.data)&&"".concat(null==g?void 0:null===(e=g.data)||void 0===e?void 0:e.name," Zone")}),(0,r.jsx)("p",{className:"fs-400 mt-2",children:"View the details of all home resisdents registered under this zone."})]})}),(0,r.jsxs)("div",{className:"p-5 dash-shade rounded-xl mt-8",children:[(0,r.jsxs)("div",{className:"flex kitems-center gap-x-2",children:[(0,r.jsx)(x.IwI,{className:"text-2xl text-primary"}),(0,r.jsx)("p",{className:"fw-500",children:"Home Residents"})]}),(0,r.jsxs)("div",{className:"mt-5",children:[o&&(0,r.jsx)("div",{className:"flex justify-center my-12 lg:mt-24",children:(0,r.jsx)(t.B0,{size:"140"})}),g&&!!(null==g?void 0:null===(s=g.data)||void 0===s?void 0:null===(l=s.residence)||void 0===l?void 0:l.length)&&(0,r.jsx)(u,{data:null==g?void 0:null===(n=g.data)||void 0===n?void 0:n.residence})]})]})]})})};var g=h;h.Layout="Dashboard"},71119:function(e,s,l){"use strict";l.d(s,{fD:function(){return i}});var r=l(85893),a=l(67294),t=l(89583);l(35666);var d=l(79521);let n=e=>{let{preGlobalFilteredRows:s,globalFilter:l,setGlobalFilter:t}=e,n=s.length,[i,c]=a.useState(l),o=(0,d.useAsyncDebounce)(e=>{t(e||void 0)},200);return(0,r.jsx)("div",{className:"border p-[6px] w-64 md:w-full lg:w-64 rounded border-gray-400",children:(0,r.jsx)("input",{value:i||"",onChange:e=>{c(e.target.value),o(e.target.value)},placeholder:"".concat(n," records..."),className:"outline-none"})})};function i(e){let{column:{filterValue:s,setFilter:l,preFilteredRows:t,id:d},name:n}=e,i=a.useMemo(()=>{let e=new Set;return t.forEach(s=>{e.add(s.values[d])}),[...e.values()]},[d,t]);return(0,r.jsxs)("select",{name:d,id:d,value:s,onChange:e=>{l(e.target.value||void 0)},className:"text-gray-700 outline-none font-light border border-gray-400 rounded-md p-2",children:[(0,r.jsxs)("option",{value:"",children:["Filter by ",n]}),i.map((e,s)=>(0,r.jsx)("option",{value:e,children:e},s))]})}s.ZP=e=>{let{columns:s,data:l}=e,{getTableProps:i,getTableBodyProps:c,headerGroups:o,prepareRow:u,state:m,preGlobalFilteredRows:x,setGlobalFilter:h,page:g,canPreviousPage:p,canNextPage:v,pageOptions:b,pageCount:j,gotoPage:f,nextPage:N,previousPage:w,setPageSize:y,exportData:_}=(0,d.useTable)({columns:s,data:l},d.useFilters,d.useGlobalFilter,d.usePagination);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"lg:flex items-center mb-5 relative z-10 w-6/12",children:[(0,r.jsx)(n,{preGlobalFilteredRows:x,globalFilter:m.globalFilter,setGlobalFilter:h}),(0,r.jsx)("div",{className:"flex justify-between relative -left-6 md:left-0 mt-3 lg:mt-0 lg:justify-end",children:o.map(e=>e.headers.map(e=>e.Filter?(0,r.jsx)("div",{className:"fs-500 px-3 py-2 ",children:e.render("Filter")},e.id):null))})]}),(0,r.jsx)("div",{className:"mt-2 flex flex-col",children:(0,r.jsx)("div",{className:"-my-2 overflow-x-auto ",children:(0,r.jsx)("div",{className:"py-2 align-middle inline-block min-w-full ",children:(0,r.jsx)("div",{className:"overflow-hidden  sm:rounded-lg",children:(0,r.jsxs)("table",{...i(),className:"items-center w-full bg-transparent border-collapse",children:[(0,r.jsx)("thead",{className:"thead-light bg-light",children:o.map((e,s)=>(0,a.createElement)("tr",{...e.getHeaderGroupProps(),key:s},e.headers.map((e,s)=>(0,r.jsx)("th",{scope:"col",className:"px-2 pl-3 text-black align-middle border-b border-solid border-gray-200 py-3 fs-500 whitespace-nowrap text-left",...e.getHeaderProps(),children:e.render("Header")}))))}),(0,r.jsx)("tbody",{className:"bg-white",...c(),children:g.map((e,s)=>{u(e);let{key:l,...a}=e.getRowProps();return(0,r.jsx)("tr",{...a,children:e.cells.map((e,s)=>{let{key:l,...a}=e.getCellProps();return(0,r.jsx)("td",{className:"border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 py-4 text-left",...a,children:e.render("Cell")},l)})},l)})})]})})})})}),(0,r.jsxs)("div",{className:"pagination mt-8 lg:flex justify-between items-center bg-light fs-500 px-3 py-2 lg:py-2 rounded-lg",children:[(0,r.jsxs)("div",{className:"flex items-center lg:w-6/12",children:[(0,r.jsx)("div",{className:"pr-5",children:(0,r.jsxs)("span",{children:["Page"," ",(0,r.jsxs)("strong",{children:[m.pageIndex+1," of ",b.length]})," "]})}),(0,r.jsx)("div",{className:"w-20",children:(0,r.jsx)("select",{value:m.pageSize,onChange:e=>{y(Number(e.target.value))},className:"bg-light border border-gray-400 rounded-md p-1",children:[5,10,20].map(e=>(0,r.jsxs)("option",{value:e,children:["Show ",e]},e))})})]}),(0,r.jsxs)("div",{className:"flex lg:mt-0 mt-4 justify-center gap-2",children:[(0,r.jsx)("button",{className:"border border-gray-400 w-7 h-7 grid place-content-center circle bg-primary text-white text-xl",onClick:()=>f(0),disabled:!p,children:(0,r.jsx)(t.dL9,{})})," ",(0,r.jsx)("button",{className:"border border-gray-400 w-7 h-7 grid place-content-center circle bg-primary text-white text-xl",onClick:()=>w(),disabled:!p,children:(0,r.jsx)(t._HU,{})})," ",(0,r.jsx)("button",{className:"border border-gray-400 w-7 h-7 grid place-content-center circle bg-primary text-white text-xl",onClick:()=>N(),disabled:!v,children:(0,r.jsx)(t.H_v,{})})," ",(0,r.jsx)("button",{className:"border border-gray-400 w-7 h-7 grid place-content-center circle bg-primary text-white text-xl",onClick:()=>f(j-1),disabled:!v,children:(0,r.jsx)(t.hPV,{})})]})]})]})}}},function(e){e.O(0,[865,774,888,179],function(){return e(e.s=20505)}),_N_E=e.O()}]);
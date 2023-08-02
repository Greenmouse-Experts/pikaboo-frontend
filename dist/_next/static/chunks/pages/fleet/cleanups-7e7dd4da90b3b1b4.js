(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{4851:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fleet/cleanups",function(){return s(55348)}])},55348:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return B}});var t=s(85893),l=s(67294),n=s(25675),i=s.n(n),r=s(47516),o=s(79352),d=e=>{let{postsPerPage:a,totalPosts:s,paginate:l,previousPage:n,nextPage:i,currentPage:r}=e,d=[];for(let e=1;e<=Math.ceil(s/a);e++)d.push(e);return(0,t.jsx)("div",{className:" mt-12 flex justify-center",children:(0,t.jsxs)("ul",{className:"pagination flex gap-x-2 lg:gap-x-6 justify-center items-center",children:[(0,t.jsxs)("li",{onClick:n,className:"cursor-pointer flex items-center gap-x-2 lg:gap-x-4 fw-500",children:[(0,t.jsx)(o.jW7,{}),"Prev"]}),(0,t.jsx)("li",{className:"border-2 rounded",children:(0,t.jsx)("ul",{className:"flex gap-x-1 w-auto max-w-[180px] md:w-auto md:max-w-[400px]  lg:max-w-[700px] overflow-x-auto scroll-pro fw-500",children:d.map(e=>(0,t.jsx)("li",{onClick:()=>l(e),className:e===r?"bg-light px-3 lg:px-5 py-2 rounded cursor-pointer":"px-3 lg:px-4 py-2 text-gray-400 cursor-pointer",children:e},e))})}),(0,t.jsxs)("li",{onClick:i,className:"flex gap-x-2 lg:gap-x-4 items-center fw-500 cursor-pointer",children:["Next",(0,t.jsx)(o.jfD,{})]})]})})},c=s(14057),u=s(5434),m=s(27484),p=s.n(m),x=s(77656),h=s(71119),g=s(39475),_=()=>{let e=(0,l.useMemo)(()=>[{Header:"S/N",accessor:(e,a)=>a+1},{Header:"Zone ID",accessor:"zone_id",Cell:e=>(0,t.jsx)("p",{className:"fw-500 text-primary",children:e.value})},{Header:"Zone Name",accessor:"name"},{Header:"Last Sanitation",accessor:"last_cleanup",Cell:e=>p()(e.value).format("DD-MMM-YYYY")},{Header:"Status",accessor:"status",Cell:e=>x.T$[e.value]}],[]),a=(0,l.useMemo)(()=>g.CU,[g.CU]);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"lg:p-4",children:(0,t.jsx)(h.ZP,{columns:e,data:a})})})},f=s(37294),j=s(79008),v=s(87536),N=s(29562),b=s(35636),w=s(22920),y=e=>{var a;let{close:s,refetch:n}=e,{data:i,isLoading:r}=(0,N.ew)(),[o,d]=(0,l.useState)(!1),[u]=(0,b.Fk)(),{control:m,handleSubmit:p,watch:x,formState:{errors:h,isValid:g}}=(0,v.cI)({mode:"onChange",defaultValues:{zone_id:"",schedule_date:""}}),_=async e=>{d(!0),await u(e).then(e=>{e.data.success?(w.Am.success(e.data.message),s(),n(),d(!1)):(w.Am.error(e.data.message),d(!1))}).catch(e=>{var a;w.Am.error(null==e?void 0:null===(a=e.error)||void 0===a?void 0:a.data.message),d(!1)})};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("form",{onSubmit:p(_),children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block mt-3 mb-1",children:"Select Zone"}),(0,t.jsx)(v.Qr,{name:"zone_id",control:m,rules:{required:{value:!0,message:"Please select an option"}},render:e=>{let{field:a}=e;return(0,t.jsxs)("select",{...a,className:"w-full border border-gray-400 rounded h-[42px]",children:[(0,t.jsx)("option",{value:"",disabled:!0,children:"Select Option"}),i&&i.data.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})}})]}),(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)("label",{className:"block mt-3 mb-1",children:"Scheduled Date"}),(0,t.jsx)(v.Qr,{name:"schedule_date",control:m,rules:{required:{value:!0,message:"Please enter a date"}},render:e=>{let{field:a}=e;return(0,t.jsx)("input",{type:"date",...a,className:"w-full p-2 border border-gray-400 rounded"})}}),(0,t.jsx)("p",{className:"text-red-600",children:null===(a=h.schedule_date)||void 0===a?void 0:a.message})]}),(0,t.jsx)("div",{className:"mt-8",children:(0,t.jsx)(c.Z,{title:o?(0,t.jsx)(j.Gh,{size:13,color:"white"}):"Create Schedule Request",disabled:!g})})]})})},P=s(41664),C=s.n(P);let z=()=>{let{data:e,isLoading:a,refetch:s}=(0,b.Uj)(),{data:n,isLoading:o}=(0,N.ew)(),{Modal:m,setShowModal:p}=(0,f.Z)(),[x,h]=(0,l.useState)(1),[g]=(0,l.useState)(8),[v,w]=(0,l.useState)(),P=x*g,z=P-g,B=null==v?void 0:v.slice(z,P);(0,l.useEffect)(()=>{w(null==e?void 0:e.data)},[e]);let k=a=>{if("all"===a.target.value)w(null==e?void 0:e.data),h(1);else{var s;let t=null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.filter(e=>e.status===a.target.value);w(t),h(1)}},q=a=>{if("all"===a.target.value)w(null==e?void 0:e.data),h(1);else{var s;let t=null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.filter(e=>e.zone.name===a.target.value);w(t),h(1)}},O={PENDING:"bg-gray-400",ONGOING:"bg-orange-800",COMPLETED:"bg-primary"};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex items-center gap-x-3 justify-between border-b pb-2",children:[(0,t.jsxs)("div",{className:"flex items-center gap-x-3",children:[(0,t.jsx)(i(),{src:"https://res.cloudinary.com/greenmouse-tech/image/upload/v1688401712/pikaboo/recylcle_vq84h0.png",alt:"recycle",width:200,height:200,className:"w-8"}),(0,t.jsx)("p",{className:"fw-600 lg:text-xl",children:"Waste Disposal Routine"})]}),(0,t.jsx)(c.Z,{title:"Add Cleanup Zone",altClassName:"py-2 fw-600 text-primary underline",onClick:()=>p(!0)})]}),(0,t.jsxs)("div",{className:"mt-12",children:[(0,t.jsxs)("div",{className:"flex justify-center mb-8 gap-x-4",children:[(0,t.jsxs)("select",{className:"w-3/12 border border-gray-500 py-2",onChange:e=>k(e),children:[(0,t.jsx)("option",{value:"",disabled:!0,children:"Filter by Status"}),(0,t.jsx)("option",{value:"all",children:"All"}),(0,t.jsx)("option",{value:"PENDING",children:"Pending"}),(0,t.jsx)("option",{value:"ONGOING",children:"Ongoing"}),(0,t.jsx)("option",{value:"COMPLETED",children:"Completed"})]}),(0,t.jsxs)("select",{className:"w-3/12 border border-gray-500 py-2",onChange:e=>q(e),children:[(0,t.jsx)("option",{value:"",disabled:!0,children:"Select Option"}),(0,t.jsx)("option",{value:"all",children:"All"}),n&&n.data.map(e=>(0,t.jsx)("option",{value:e.name,children:e.name},e.id))]})]}),a&&(0,t.jsx)("div",{className:"flex justify-center my-12",children:(0,t.jsx)(j.B0,{size:"70"})}),(0,t.jsx)("div",{className:"grid grid-cols-2 gap-10 w-11/12 mx-auto",children:v&&!!v.length&&B.map((e,a)=>(0,t.jsxs)("div",{className:"p-5 relative dash-shade text-white flex items-center gap-6 ".concat(O[e.status]),children:[(0,t.jsxs)("div",{className:"w-24 h-24 circle bg-white grid place-content-center text-black",children:[(0,t.jsxs)("p",{className:"text-3xl fw-600",children:[e.completed,(0,t.jsxs)("span",{children:["/",e.zone.no_of_residence]})]}),(0,t.jsx)("p",{className:"text-[10px] fw-500",children:"Residence"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"fw-600 text-xl",children:e.zone.name}),(0,t.jsx)("div",{className:"flex gap-x-2 itmes-center",children:(0,t.jsx)("p",{children:"Assigned Trucks:"})}),(0,t.jsxs)("div",{className:"flex gap-x-2 itmes-center",children:[(0,t.jsx)("p",{children:"Scheduled Date:"}),(0,t.jsx)("p",{className:"fw-600 fs-800",children:e.schedule_date})]})]}),(0,t.jsx)(C(),{className:"absolute top-2 right-2",href:{pathname:"/fleet/cleanups/zone",query:{id:e.id}},children:(0,t.jsx)(r.QpC,{className:"text-3xl duration-100 cursor-pointer hover:scale-110 hover:"})})]},a))}),(0,t.jsx)(d,{postsPerPage:g,totalPosts:null==v?void 0:v.length,paginate:e=>{h(e),window.scrollTo({top:10,behavior:"smooth"})},previousPage:()=>{1!==x&&h(x-1)},nextPage:()=>{x!==Math.ceil((null==v?void 0:v.length)/g)&&h(x+1)},currentPage:x})]}),(0,t.jsxs)("div",{className:"mt-12 dash-shade p-5",children:[(0,t.jsxs)("div",{className:"flex gap-x-2",children:[(0,t.jsx)(u.IwI,{className:"text-2xl"}),(0,t.jsx)("p",{className:"fw-600",children:"Due Zones for Disposal"})]}),(0,t.jsx)("div",{className:"mt-3",children:(0,t.jsx)(_,{})})]})]}),(0,t.jsx)(m,{title:"Create a Schedule Cleanup",children:(0,t.jsx)(y,{refetch:s,close:()=>p(!1)})})]})};var B=z;z.Layout="Dashboard"},39475:function(e,a,s){"use strict";s.d(a,{CU:function(){return l},ow:function(){return t}});let t=[{residence_id:"PBR-28293992",name_title:"Mrs",firstName:"Oliseh",lastName:"Promise",address:"54 off, ekhewan road, isiloko, benin central",building_type:"Bungalow",facility_type:"One room self-contained",phone:["08012345678","08098765432"],email:"olisehpro@gmail.com",zone:"benin central",status:"active",no_of_bin:"4",date_required:"20-July-2023",amount:"5000",request_status:"pending"},{residence_id:"PBR-27294399",name_title:"Mr",firstName:"Youth",lastName:"Hoamy",address:"54 ine junction, ugbowo",building_type:"Bungalow",facility_type:"One room self-contained",phone:["08011111111","08098765432"],email:"hoamy@gmail.com",zone:"Ugbowo",status:"active",no_of_bin:"2",date_required:"17-July-2023",amount:"3000",request_status:"accepted"},{residence_id:"PBR-94708399",name_title:"Dr",firstName:"Bassey",lastName:"Kolane",address:"9 tripod estate , ring road",building_type:"2-Floors",facility_type:"2-Bedroom",phone:["08010000000","09098765432"],email:"kolane@gmail.com",zone:"Ring road",status:"active",no_of_bin:"1",date_required:"17-July-2023",amount:"1500",request_status:"accepted"},{residence_id:"PBR-28293992",name_title:"Mrs",firstName:"Oliseh",lastName:"Promise",address:"54 off, ekhewan road, isiloko, benin central",building_type:"Bungalow",facility_type:"One room self-contained",phone:["08012345678","08098765432"],email:"olisehpro@gmail.com",zone:"benin central",status:"active",no_of_bin:"4",date_required:"20-July-2023",amount:"5000",request_status:"pending"},{residence_id:"PBR-27294399",name_title:"Mr",firstName:"Youth",lastName:"Hoamy",address:"54 ine junction, ugbowo",building_type:"Bungalow",facility_type:"One room self-contained",phone:["08011111111","08098765432"],email:"hoamy@gmail.com",zone:"Ugbowo",status:"inactive",no_of_bin:"4",date_required:"20-July-2023",amount:"5000",request_status:"pending"},{residence_id:"PBR-94708399",name_title:"Dr",firstName:"Bassey",lastName:"Kolane",address:"9 tripod estate , ring road",building_type:"2-Floors",facility_type:"2-Bedroom",phone:["08010000000","09098765432"],email:"kolane@gmail.com",zone:"Ring road",status:"banned",no_of_bin:"4",date_required:"20-July-2023",amount:"5000",request_status:"cleared"}],l=[{zone_id:"PKB-ZN-5678999",name:"Ugbowo Central",coordinates:"1550lat, 23899lon",no_of_residence:49,created_at:"20-jun-2023",status:"active",last_cleanup:"06-10-2023"},{zone_id:"PKB-ZN-5678999",name:"Ugbowo Central",coordinates:"1550lat, 23899lon",no_of_residence:49,created_at:"20-jun-2023",status:"active",last_cleanup:"06-06-2023"},{zone_id:"PKB-ZN-5678999",name:"Ugbowo Central",coordinates:"1550lat, 23899lon",no_of_residence:49,created_at:"20-jun-2023",status:"active",last_cleanup:"06-06-2023"},{zone_id:"PKB-ZN-5678999",name:"Ugbowo Central",coordinates:"1550lat, 23899lon",no_of_residence:49,created_at:"20-jun-2023",status:"active",last_cleanup:"06-03-2023"},{zone_id:"PKB-ZN-5678999",name:"Ugbowo Central",coordinates:"1550lat, 23899lon",no_of_residence:49,created_at:"20-jun-2023",status:"active",last_cleanup:"06-02-2023"},{zone_id:"PKB-ZN-5678999",name:"Ugbowo Central",coordinates:"1550lat, 23899lon",no_of_residence:49,created_at:"20-jun-2023",status:"active",last_cleanup:"06-02-2023"}]}},function(e){e.O(0,[874,536,865,485,774,888,179],function(){return e(e.s=4851)}),_N_E=e.O()}]);
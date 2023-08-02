(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[530],{15121:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/waste/trucks",function(){return r(37023)}])},37023:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return f}});var a=r(85893),l=r(67294),t=r(89583),i=r(88843),d=r(87536),c=r(14057),n=r(22920),o=r(79008),u=r(662),x=e=>{let{refetch:s}=e,[r,t]=(0,l.useState)(!1),[x]=(0,u.je)(),{control:m,handleSubmit:h,reset:p,setError:v,watch:j,formState:{errors:g,isValid:N}}=(0,d.cI)({mode:"onChange",defaultValues:{make:"",year:"",vin:"",model:"",color:"",fuel_type:"",date_purchase:"",condition:""}}),f=async e=>{t(!0),await x(e).then(e=>{e.data.success?(n.Am.success(e.data.message),s(),p(),t(!1)):(n.Am.error(e.data.message),t(!1))}).catch(e=>{var s;n.Am.error(null==e?void 0:null===(s=e.error)||void 0===s?void 0:s.data.message),t(!1)})};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("form",{onSubmit:h(f),children:[(0,a.jsxs)("div",{className:"grid lg:grid-cols-2 gap-6 lg:gap-12",children:[(0,a.jsx)("div",{children:(0,a.jsx)(d.Qr,{name:"make",control:m,rules:{required:{value:!0,message:"Please enter vehicle make"}},render:e=>{var s;let{field:r}=e;return(0,a.jsx)(i.Z,{label:"Vehicle Make",placeholder:"",error:null===(s=g.make)||void 0===s?void 0:s.message,type:i.n.text,...r})}})}),(0,a.jsx)("div",{children:(0,a.jsx)(d.Qr,{name:"year",control:m,rules:{required:{value:!0,message:"Please enter year"}},render:e=>{var s;let{field:r}=e;return(0,a.jsx)(i.Z,{label:"Production Year",placeholder:"",error:null===(s=g.year)||void 0===s?void 0:s.message,type:i.n.text,...r})}})})]}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-2 gap-6 lg:gap-12 mt-4",children:[(0,a.jsx)("div",{children:(0,a.jsx)(d.Qr,{name:"vin",control:m,rules:{required:{value:!0,message:"Please enter vin"}},render:e=>{var s;let{field:r}=e;return(0,a.jsx)(i.Z,{label:"Vehicle Identification Number",placeholder:"",error:null===(s=g.vin)||void 0===s?void 0:s.message,type:i.n.text,...r})}})}),(0,a.jsx)("div",{children:(0,a.jsx)(d.Qr,{name:"model",control:m,rules:{required:{value:!0,message:"Please select an option"}},render:e=>{var s;let{field:r}=e;return(0,a.jsx)(i.Z,{label:"Vehicle Model",placeholder:"",error:null===(s=g.model)||void 0===s?void 0:s.message,type:i.n.text,...r})}})})]}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-2 gap-6 lg:gap-12 mt-4",children:[(0,a.jsx)("div",{children:(0,a.jsx)(d.Qr,{name:"color",control:m,rules:{required:{value:!0,message:"Please enter vehicle color"}},render:e=>{var s;let{field:r}=e;return(0,a.jsx)(i.Z,{label:"Vehicle Color",placeholder:"",error:null===(s=g.color)||void 0===s?void 0:s.message,type:i.n.text,...r})}})}),(0,a.jsx)("div",{children:(0,a.jsx)(d.Qr,{name:"fuel_type",control:m,rules:{required:{value:!0,message:"Please input fuel type"}},render:e=>{var s;let{field:r}=e;return(0,a.jsx)(i.Z,{label:"Fuel Pump Type ",placeholder:"",error:null===(s=g.fuel_type)||void 0===s?void 0:s.message,type:i.n.text,...r})}})})]}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-2 gap-6 lg:gap-12 mt-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"mt-2 block",children:"Date of Purchase"}),(0,a.jsx)(d.Qr,{name:"date_purchase",control:m,rules:{required:{value:!0,message:"Please enter date of purchase"}},render:e=>{let{field:s}=e;return(0,a.jsx)("input",{type:"date",className:"w-full mt-2 p-2 rounded border border-gray-400",...s})}})]}),(0,a.jsx)("div",{children:(0,a.jsx)(d.Qr,{name:"condition",control:m,rules:{required:{value:!0,message:"Please input a condition"}},render:e=>{var s;let{field:r}=e;return(0,a.jsx)(i.Z,{label:"Vehicle Condition",placeholder:"",error:null===(s=g.condition)||void 0===s?void 0:s.message,type:i.n.text,...r})}})})]}),(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsx)("div",{className:"mt-8 lg:mt-16 lg:w-5/12",children:(0,a.jsx)(c.Z,{title:r?(0,a.jsx)(o.Gh,{size:13,color:"white"}):"Create Waste Manager",disabled:!N})})})]})})},m=r(71119),h=r(79537),p=r(63750),v=r(37294),j=e=>{let{data:s,refetch:r}=e,{Modal:t,setShowModal:i}=(0,v.Z)(),[d,c]=(0,l.useState)(),n=e=>{i(!0),c(e)},o=(0,l.useMemo)(()=>[{Header:"S/N",accessor:(e,s)=>s+1},{Header:"Vehicle Tag",accessor:"pikaboo_tag_id",Cell:e=>(0,a.jsx)("p",{className:"fw-500 text-primary",children:e.value})},{Header:"Vehicle Make",accessor:"make"},{Header:"Year",accessor:"year"},{Header:"VIN",accessor:"vin"},{Header:"Model",accessor:"model"},{Header:"Color",accessor:"color"},{Header:"Fuel Type",accessor:"fuel_type"},{Header:"Purchase Date",accessor:"date_purchase"},{Header:"Action",accessor:"id",Cell:e=>(0,a.jsx)("div",{children:(0,a.jsxs)(h.v2,{placement:"bottom-end",children:[(0,a.jsx)(h.Q,{children:(0,a.jsx)(h.zx,{className:"bg-transparent px-0 mx-0 hover:shadow-none text-md flex items-center font-normal shadow-none text-black capitalize",children:(0,a.jsx)(p.FQA,{className:"text-xl"})})}),(0,a.jsxs)(h.qy,{children:[(0,a.jsx)(h.sN,{onClick:()=>n(e.row.original),children:"Edit"}),(0,a.jsx)(h.sN,{className:"bg-red-600 text-white",children:"Delete"})]})]})})}],[]),u=(0,l.useMemo)(()=>s,[s]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"lg:p-4 dash-shade",children:(0,a.jsx)(m.ZP,{columns:o,data:u})}),(0,a.jsx)(t,{title:"Edit Truck Details"})]})},g=r(79794);let N=()=>{let[e,s]=(0,l.useState)(1),{data:r,refetch:i,isLoading:d}=(0,u.S9)(),c=null==r?void 0:r.data,n=e=>{s(e)},m={borderBottom:"6px solid black",color:"black",fontWeight:"600"};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"h-40 bg-waste1 flex items-center dash-shade rounded-xl",children:(0,a.jsxs)("div",{className:"pl-12 text-white",children:[(0,a.jsx)("p",{className:"text-2xl fw-600",children:"Waste Managers"}),(0,a.jsx)("p",{className:"fs-400 w-8/12 mt-2",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum architecto dolore voluptatum assumenda. Iste aliquam hic fuga perspiciatis voluptates necessitatibus ex volupta."})]})}),(0,a.jsxs)("div",{className:"mt-8 px-4",children:[(0,a.jsx)("div",{className:"border-b",children:(0,a.jsxs)("ul",{className:"flex items-center gap-x-6 text-gray-500",children:[(0,a.jsx)("li",{className:"cursor-pointer p-2  px-4",style:1===e?m:void 0,onClick:()=>n(1),children:(0,a.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,a.jsx)(t.c6$,{className:"text-2xl"}),(0,a.jsx)("p",{className:"fw-500",children:"My Trucks"})]})}),(0,a.jsx)("li",{className:"cursor-pointer  p-2  px-4",style:2===e?m:void 0,onClick:()=>n(2),children:(0,a.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,a.jsx)(t.sLu,{className:"text-2xl"}),(0,a.jsx)("p",{className:"fw-500",children:"Add New Truck"})]})})]})}),(0,a.jsxs)("div",{className:"",children:[d&&(0,a.jsx)("div",{className:"flex justify-center py-12",children:(0,a.jsx)(o.B0,{size:"100"})}),1===e?(0,a.jsxs)("div",{children:[c&&!c.length&&(0,a.jsx)("div",{className:"py-12",children:(0,a.jsx)(g.Z,{imageClass:"w-24 mx-auto",message:"No waste truck has been added to the system"})}),c&&!!c.length&&(0,a.jsx)(j,{data:c,refetch:i})]}):"",2===e?(0,a.jsxs)("div",{className:"p-5 lg:px-12 lg:py-12 dash-shade",children:[(0,a.jsx)(x,{refetch:i})," "]}):""]})]})]})})};var f=N;N.Layout="Dashboard"}},function(e){e.O(0,[536,865,844,774,888,179],function(){return e(e.s=15121)}),_N_E=e.O()}]);
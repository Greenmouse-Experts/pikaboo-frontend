(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{27484:function(e){var t,r,s,a,n,i,l,o,d,c,u,h,m,f,x,p,g,v,j,y,b;e.exports=(t="millisecond",r="second",s="minute",a="hour",n="week",i="month",l="quarter",o="year",d="date",c="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=function(e,t,r){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(r)+e},(x={})[f="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||"th")+"]"}},p=function(e){return e instanceof y},g=function e(t,r,s){var a;if(!t)return f;if("string"==typeof t){var n=t.toLowerCase();x[n]&&(a=n),r&&(x[n]=r,a=n);var i=t.split("-");if(!a&&i.length>1)return e(i[0])}else{var l=t.name;x[l]=t,a=l}return!s&&a&&(f=a),a||!s&&f},v=function(e,t){if(p(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new y(r)},(j={s:m,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+m(Math.floor(r/60),2,"0")+":"+m(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var s=12*(r.year()-t.year())+(r.month()-t.month()),a=t.clone().add(s,i),n=r-a<0,l=t.clone().add(s+(n?-1:1),i);return+(-(s+(r-a)/(n?a-l:l-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:i,y:o,w:n,d:"day",D:d,h:a,m:s,s:r,ms:t,Q:l})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=g,j.i=p,j.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},b=(y=function(){function e(e){this.$L=g(e.locale,null,!0),this.parse(e)}var m=e.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(j.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(u);if(s){var a=s[2]-1||0,n=(s[7]||"0").substring(0,3);return r?new Date(Date.UTC(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,n)):new Date(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,n)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return j},m.isValid=function(){return this.$d.toString()!==c},m.isSame=function(e,t){var r=v(e);return this.startOf(t)<=r&&r<=this.endOf(t)},m.isAfter=function(e,t){return v(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<v(e)},m.$g=function(e,t,r){return j.u(e)?this[t]:this.set(r,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var l=this,c=!!j.u(t)||t,u=j.p(e),h=function(e,t){var r=j.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return c?r:r.endOf("day")},m=function(e,t){return j.w(l.toDate()[e].apply(l.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},f=this.$W,x=this.$M,p=this.$D,g="set"+(this.$u?"UTC":"");switch(u){case o:return c?h(1,0):h(31,11);case i:return c?h(1,x):h(0,x+1);case n:var v=this.$locale().weekStart||0,y=(f<v?f+7:f)-v;return h(c?p-y:p+(6-y),x);case"day":case d:return m(g+"Hours",0);case a:return m(g+"Minutes",1);case s:return m(g+"Seconds",2);case r:return m(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,n){var l,c=j.p(e),u="set"+(this.$u?"UTC":""),h=((l={}).day=u+"Date",l[d]=u+"Date",l[i]=u+"Month",l[o]=u+"FullYear",l[a]=u+"Hours",l[s]=u+"Minutes",l[r]=u+"Seconds",l[t]=u+"Milliseconds",l)[c],m="day"===c?this.$D+(n-this.$W):n;if(c===i||c===o){var f=this.clone().set(d,1);f.$d[h](m),f.init(),this.$d=f.set(d,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[j.p(e)]()},m.add=function(e,t){var l,d=this;e=Number(e);var c=j.p(t),u=function(t){var r=v(d);return j.w(r.date(r.date()+Math.round(t*e)),d)};if(c===i)return this.set(i,this.$M+e);if(c===o)return this.set(o,this.$y+e);if("day"===c)return u(1);if(c===n)return u(7);var h=((l={})[s]=6e4,l[a]=36e5,l[r]=1e3,l)[c]||1,m=this.$d.getTime()+e*h;return j.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||c;var s=e||"YYYY-MM-DDTHH:mm:ssZ",a=j.z(this),n=this.$H,i=this.$m,l=this.$M,o=r.weekdays,d=r.months,u=function(e,r,a,n){return e&&(e[r]||e(t,s))||a[r].slice(0,n)},m=function(e){return j.s(n%12||12,e,"0")},f=r.meridiem||function(e,t,r){var s=e<12?"AM":"PM";return r?s.toLowerCase():s},x={YY:String(this.$y).slice(-2),YYYY:j.s(this.$y,4,"0"),M:l+1,MM:j.s(l+1,2,"0"),MMM:u(r.monthsShort,l,d,3),MMMM:u(d,l),D:this.$D,DD:j.s(this.$D,2,"0"),d:String(this.$W),dd:u(r.weekdaysMin,this.$W,o,2),ddd:u(r.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(n),HH:j.s(n,2,"0"),h:m(1),hh:m(2),a:f(n,i,!0),A:f(n,i,!1),m:String(i),mm:j.s(i,2,"0"),s:String(this.$s),ss:j.s(this.$s,2,"0"),SSS:j.s(this.$ms,3,"0"),Z:a};return s.replace(h,function(e,t){return t||x[e]||a.replace(":","")})},m.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},m.diff=function(e,t,d){var c,u=j.p(t),h=v(e),m=(h.utcOffset()-this.utcOffset())*6e4,f=this-h,x=j.m(this,h);return x=((c={})[o]=x/12,c[i]=x,c[l]=x/3,c[n]=(f-m)/6048e5,c.day=(f-m)/864e5,c[a]=f/36e5,c[s]=f/6e4,c[r]=f/1e3,c)[u]||f,d?x:j.a(x)},m.daysInMonth=function(){return this.endOf(i).$D},m.$locale=function(){return x[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),s=g(e,t,!0);return s&&(r.$L=s),r},m.clone=function(){return j.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},e}()).prototype,v.prototype=b,[["$ms",t],["$s",r],["$m",s],["$H",a],["$W","day"],["$M",i],["$y",o],["$D",d]].forEach(function(e){b[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),v.extend=function(e,t){return e.$i||(e(t,y,v),e.$i=!0),v},v.locale=g,v.isDayjs=p,v.unix=function(e){return v(1e3*e)},v.en=x[f],v.Ls=x,v.p={},v)},26079:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/field",function(){return r(20483)}])},20483:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var s=r(85893),a=r(67294),n=r(5434),i=r(63750),l=r(88843),o=r(87536),d=r(14057),c=r(7572),u=r(22920),h=r(79008),m=e=>{let{refetch:t}=e,[r,n]=(0,a.useState)(!1),[i]=(0,c.i1)(),{control:m,handleSubmit:f,setError:x,reset:p,watch:g,formState:{errors:v,isValid:j}}=(0,o.cI)({mode:"onChange",defaultValues:{first_name:"",last_name:"",email:"",gender:"",password:"",password_confirmation:""}}),y=async e=>{n(!0),await i(e).then(e=>{if(e.data.success)u.Am.success(e.data.message),t(),p(),n(!1);else{var r;Object.entries(null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.errors).forEach(e=>{let[t,r]=e;u.Am.error(r[0])}),n(!1)}}).catch(e=>{var t;u.Am.error(null==e?void 0:null===(t=e.error)||void 0===t?void 0:t.data.message),n(!1)})};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("form",{onSubmit:f(y),children:[(0,s.jsxs)("div",{className:"grid lg:grid-cols-2 gap-6 lg:gap-12",children:[(0,s.jsx)("div",{children:(0,s.jsx)(o.Qr,{name:"first_name",control:m,rules:{required:{value:!0,message:"Please enter First Name"}},render:e=>{var t;let{field:r}=e;return(0,s.jsx)(l.Z,{label:"First Name",placeholder:"",error:null===(t=v.first_name)||void 0===t?void 0:t.message,type:l.n.text,...r})}})}),(0,s.jsx)("div",{children:(0,s.jsx)(o.Qr,{name:"last_name",control:m,rules:{required:{value:!0,message:"Please enter Last Name"}},render:e=>{var t;let{field:r}=e;return(0,s.jsx)(l.Z,{label:"Last Name",placeholder:"",error:null===(t=v.last_name)||void 0===t?void 0:t.message,type:l.n.text,...r})}})})]}),(0,s.jsxs)("div",{className:"grid lg:grid-cols-2 gap-6 lg:gap-12 mt-4",children:[(0,s.jsx)("div",{children:(0,s.jsx)(o.Qr,{name:"email",control:m,rules:{required:{value:!0,message:"Please enter Email"}},render:e=>{var t;let{field:r}=e;return(0,s.jsx)(l.Z,{label:"Email",placeholder:"",error:null===(t=v.email)||void 0===t?void 0:t.message,type:l.n.email,...r})}})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block mt-3 mb-1",children:"Gender"}),(0,s.jsx)(o.Qr,{name:"gender",control:m,rules:{required:{value:!0,message:"Please select an option"}},render:e=>{let{field:t}=e;return(0,s.jsxs)("select",{...t,className:"w-full border border-gray-400 rounded p-2",children:[(0,s.jsx)("option",{value:"",disabled:!0,children:"Select Option"}),(0,s.jsx)("option",{value:"male",children:"Male"}),(0,s.jsx)("option",{value:"female",children:"Female"}),(0,s.jsx)("option",{value:"others",children:"Others"})]})}})]})]}),(0,s.jsxs)("div",{className:"grid lg:grid-cols-2 gap-6 lg:gap-12 mt-4",children:[(0,s.jsx)("div",{className:"",children:(0,s.jsx)(o.Qr,{name:"password",control:m,rules:{required:{value:!0,message:"Password is required"},minLength:{value:7,message:"Password is too short"}},render:e=>{var t;let{field:r}=e;return(0,s.jsx)(l.Z,{label:"Password",placeholder:"",error:null===(t=v.password)||void 0===t?void 0:t.message,type:l.n.password,...r})}})}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)(o.Qr,{name:"password_confirmation",control:m,rules:{required:{value:!0,message:"Please enter your password"},validate:e=>{if(g("password")!=e)return"Your passwords do no match"}},render:e=>{var t;let{field:r}=e;return(0,s.jsx)(l.Z,{label:"Password",placeholder:"",error:null===(t=v.password_confirmation)||void 0===t?void 0:t.message,type:l.n.password,...r})}})})]}),(0,s.jsx)("div",{className:"flex justify-end",children:(0,s.jsx)("div",{className:"mt-8 lg:mt-16 lg:w-5/12",children:(0,s.jsx)(d.Z,{title:r?(0,s.jsx)(h.Gh,{size:13,color:"white"}):"Create Field Operator",disabled:!j})})})]})})},f=r(71119),x=r(77656),p=r(27484),g=r.n(p),v=e=>{let{data:t}=e,r=(0,a.useMemo)(()=>[{Header:"S/N",accessor:(e,t)=>t+1},{Header:"Name",accessor:"first_name",Cell:e=>" ".concat(e.value," ").concat(e.row.original.last_name)},{Header:"Email",accessor:"email"},{Header:"Phone Number",accessor:"phone"},{Header:"Gender",accessor:"gender",Cell:e=>(0,s.jsx)("p",{className:"capitalize",children:e.value})},{Header:"Date Registered",accessor:"created_at",Cell:e=>g()(e.value).format("DD-MMM-YYYY")},{Header:"Status",accessor:"status",Cell:e=>x.T$[e.value]}],[]),n=(0,a.useMemo)(()=>t,[t]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"lg:p-4",children:(0,s.jsx)(f.ZP,{columns:r,data:n})})})},j=r(29562),y=r(79794);let b=()=>{var e;let[t,r]=(0,a.useState)(1),{data:l,refetch:o,isLoading:d}=(0,j.zQ)("Field Operator"),c=null==l?void 0:null===(e=l.data)||void 0===e?void 0:e.data.filter(e=>"Field Operator"===e.account_type),u=e=>{r(e)},f={backgroundColor:"#009a06",color:"white",transition:"0.6s"};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"h-40 bg-field flex items-center dash-shade rounded-xl",children:(0,s.jsxs)("div",{className:"pl-12 text-white",children:[(0,s.jsx)("p",{className:"text-2xl fw-600",children:"Field Operators"}),(0,s.jsx)("p",{className:"fs-400 w-8/12 mt-2",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum architecto dolore voluptatum assumenda. Iste aliquam hic fuga perspiciatis voluptates necessitatibus ex volupta."})]})}),(0,s.jsxs)("div",{className:"p-5 lg:p-9 dash-shade mt-5 lg:mt-10 rounded-lg",children:[(0,s.jsx)("div",{className:"border-b pb-2",children:(0,s.jsxs)("ul",{className:"flex items-center gap-x-6",children:[(0,s.jsx)("li",{className:"cursor-pointer p-2 rounded-xl px-4",style:1===t?f:void 0,onClick:()=>u(1),children:(0,s.jsxs)("div",{className:"flex kitems-center gap-x-2",children:[(0,s.jsx)(n.IwI,{className:"text-2xl"}),(0,s.jsx)("p",{className:"fw-500",children:"Field Operators Listing"})]})}),(0,s.jsx)("li",{className:"cursor-pointer  p-2 rounded-xl px-4",style:2===t?f:void 0,onClick:()=>u(2),children:(0,s.jsxs)("div",{className:"flex kitems-center gap-x-2",children:[(0,s.jsx)(i.IaE,{className:"text-2xl"}),(0,s.jsx)("p",{className:"fw-500",children:"Add New Field Operator"})]})})]})}),(0,s.jsxs)("div",{className:"mt-5",children:[d&&(0,s.jsx)("div",{className:"flex justify-center py-12",children:(0,s.jsx)(h.B0,{size:"100"})}),1===t?(0,s.jsxs)("div",{children:[c&&!c.length&&(0,s.jsx)(y.Z,{imageClass:"w-24 mx-auto",message:"No Field Operator Yet"}),c&&!!c.length&&(0,s.jsx)(v,{data:c})]}):"",2===t?(0,s.jsx)(m,{refetch:o}):""]})]})]})})};var w=b;b.Layout="Dashboard"},7572:function(e,t,r){"use strict";r.d(t,{$A:function(){return c},FB:function(){return u},Mn:function(){return l},QH:function(){return d},_Z:function(){return m},dM:function(){return h},i1:function(){return o},xe:function(){return f}});var s=r(94937),a=r(22103),n=r(25411);let i=s.g.injectEndpoints({endpoints:e=>({createField:e.query({query:e=>({url:"".concat(a.Sx),method:a.WU.POST,headers:{Authorization:(0,n.qL)()},body:e}),keepUnusedDataFor:a.Wm.DEFAULT}),createFleet:e.query({query:e=>({url:"".concat(a.bP),method:a.WU.POST,headers:{Authorization:(0,n.qL)()},body:e}),keepUnusedDataFor:a.Wm.DEFAULT}),adminCreateWaste:e.query({query:e=>({url:"".concat(a.Iu),method:a.WU.POST,headers:{Authorization:(0,n.qL)()},body:e}),keepUnusedDataFor:a.Wm.DEFAULT}),adminAssignZone:e.query({query:e=>({url:"".concat(a.gs),method:a.WU.POST,headers:{Authorization:(0,n.qL)()},body:e}),keepUnusedDataFor:a.Wm.DEFAULT}),createWaste:e.query({query:e=>({url:"".concat(a.RW),method:a.WU.POST,headers:{Authorization:(0,n.qL)()},body:e}),keepUnusedDataFor:a.Wm.DEFAULT}),assignZone:e.query({query:e=>({url:"".concat(a.ZJ),method:a.WU.POST,headers:{Authorization:(0,n.qL)()},body:e}),keepUnusedDataFor:a.Wm.DEFAULT}),createResidence:e.query({query:e=>({url:"".concat(a.ny),method:a.WU.POST,headers:{Authorization:(0,n.qL)()},body:e}),keepUnusedDataFor:a.Wm.DEFAULT}),createDriver:e.query({query:e=>({url:"".concat(a.Xt),method:a.WU.POST,headers:{Authorization:(0,n.qL)()},body:e}),keepUnusedDataFor:a.Wm.DEFAULT})}),overrideExisting:!0}),{useLazyCreateFleetQuery:l,useLazyCreateFieldQuery:o,useLazyCreateWasteQuery:d,useLazyAdminCreateWasteQuery:c,useLazyCreateResidenceQuery:u,useLazyAdminAssignZoneQuery:h,useLazyAssignZoneQuery:m,useLazyCreateDriverQuery:f}=i},79794:function(e,t,r){"use strict";var s=r(85893);r(67294);var a=r(25675),n=r.n(a);t.Z=e=>{let{message:t,imageClass:r}=e;return(0,s.jsx)("div",{className:"w-full grid place-content-center",children:(0,s.jsxs)("div",{children:[(0,s.jsx)(n(),{src:"https://res.cloudinary.com/greenmouse-tech/image/upload/v1689941389/pikaboo/garbage_empty-removebg-preview_o7ps5z.png",alt:"empty",width:400,height:400,className:r}),(0,s.jsx)("p",{className:"text-center mt-4 text-gray-500",children:t||"No Data Available"})]})})}},88843:function(e,t,r){"use strict";r.d(t,{n:function(){return a}});var s,a,n=r(85893),i=r(67294),l=r(89583),o=r(77656);(s=a||(a={})).email="email",s.password="password",s.radio="radio",s.tel="tel",s.text="text",s.textarea="textarea",s.number="number",s.checkbox="checkbox",s.search="search",t.Z=e=>{let{type:t,name:r,onChange:s,label:d,error:c,required:u=!1,className:h="w-full border-0  outline-none py-2 px-2 rounded",labelClassName:m,placeholder:f,disabled:x=!1,maxLength:p,autoFocus:g,fullWidth:v,inputRef:j,onKeyPress:y,onBlur:b,autoComplete:w,autoCapitalize:N,onFocus:$,onKeyUp:D,onKeyDown:S,min:F,max:M,customRightElement:_,altClassName:O,icon:C,readonly:k,...q}=e,[A,L]=(0,i.useState)(!1),[T,P]=(0,i.useState)(t),U=e=>{L(e),P(e?a.text:a.password)};return(0,n.jsxs)("div",{className:"mt-3",children:[(0,n.jsx)("div",{children:(0,n.jsx)(n.Fragment,{children:d&&(0,n.jsx)("label",{className:m||"",children:d})})}),(0,n.jsxs)("div",{className:(0,o.AK)(t===a.checkbox?"":c?"border-red-400 border":"border border-gray-400","flex items-center bg-input  mt-1 rounded"),children:[C&&C,(()=>{switch(t){case a.textarea:return(0,n.jsx)("textarea",{id:r,className:O||(0,o.AK)(v?"w-full p-2":"p-2 h-24",h),name:r,required:u,onChange:s,placeholder:f,disabled:x,maxLength:p,autoFocus:g,onFocus:$,autoComplete:w,autoCapitalize:N,ref:j,...q});case a.checkbox:return(0,n.jsx)("input",{type:"checkbox",className:O||(0,o.AK)(v?"":"p-2",h),name:r,required:u,onChange:s,placeholder:f,disabled:x,maxLength:p,autoFocus:g,onFocus:$,autoComplete:w,autoCapitalize:N,ref:j,...q});default:return(0,n.jsx)("input",{id:r,type:T,className:O||(0,o.AK)(v?"w-full":"",h),name:r,required:u,onChange:s,placeholder:f,disabled:x,maxLength:p,autoFocus:g,onFocus:$,autoComplete:w,autoCapitalize:N,onKeyDown:S,onKeyUp:D,ref:j,min:F,max:M,...q})}})(),_&&_,t===a.password&&(0,n.jsx)("div",{onClick:()=>U(!A),className:"px-3",children:A?(0,n.jsx)(l.z5B,{className:"text-xl"}):(0,n.jsx)(l.tjB,{className:"text-xl"})})]}),(0,n.jsx)(n.Fragment,{children:c&&(0,n.jsx)("span",{className:"fs-500 fw-500 text-red-500",children:c.toString()})})]})}},71119:function(e,t,r){"use strict";r.d(t,{fD:function(){return o}});var s=r(85893),a=r(67294),n=r(89583);r(35666);var i=r(79521);let l=e=>{let{preGlobalFilteredRows:t,globalFilter:r,setGlobalFilter:n}=e,l=t.length,[o,d]=a.useState(r),c=(0,i.useAsyncDebounce)(e=>{n(e||void 0)},200);return(0,s.jsx)("div",{className:"border p-[6px] w-64 md:w-full lg:w-64 rounded border-gray-400",children:(0,s.jsx)("input",{value:o||"",onChange:e=>{d(e.target.value),c(e.target.value)},placeholder:"".concat(l," records..."),className:"outline-none"})})};function o(e){let{column:{filterValue:t,setFilter:r,preFilteredRows:n,id:i},name:l}=e,o=a.useMemo(()=>{let e=new Set;return n.forEach(t=>{e.add(t.values[i])}),[...e.values()]},[i,n]);return(0,s.jsxs)("select",{name:i,id:i,value:t,onChange:e=>{r(e.target.value||void 0)},className:"text-gray-700 outline-none font-light border border-gray-400 rounded-md p-2",children:[(0,s.jsxs)("option",{value:"",children:["Filter by ",l]}),o.map((e,t)=>(0,s.jsx)("option",{value:e,children:e},t))]})}t.ZP=e=>{let{columns:t,data:r}=e,{getTableProps:o,getTableBodyProps:d,headerGroups:c,prepareRow:u,state:h,preGlobalFilteredRows:m,setGlobalFilter:f,page:x,canPreviousPage:p,canNextPage:g,pageOptions:v,pageCount:j,gotoPage:y,nextPage:b,previousPage:w,setPageSize:N,exportData:$}=(0,i.useTable)({columns:t,data:r},i.useFilters,i.useGlobalFilter,i.usePagination);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"lg:flex items-center mb-5 relative z-10 w-6/12",children:[(0,s.jsx)(l,{preGlobalFilteredRows:m,globalFilter:h.globalFilter,setGlobalFilter:f}),(0,s.jsx)("div",{className:"flex justify-between relative -left-6 md:left-0 mt-3 lg:mt-0 lg:justify-end",children:c.map(e=>e.headers.map(e=>e.Filter?(0,s.jsx)("div",{className:"fs-500 px-3 py-2 ",children:e.render("Filter")},e.id):null))})]}),(0,s.jsx)("div",{className:"mt-2 flex flex-col",children:(0,s.jsx)("div",{className:"-my-2 overflow-x-auto ",children:(0,s.jsx)("div",{className:"py-2 align-middle inline-block min-w-full ",children:(0,s.jsx)("div",{className:"overflow-hidden  sm:rounded-lg",children:(0,s.jsxs)("table",{...o(),className:"items-center w-full bg-transparent border-collapse",children:[(0,s.jsx)("thead",{className:"thead-light bg-light",children:c.map((e,t)=>(0,a.createElement)("tr",{...e.getHeaderGroupProps(),key:t},e.headers.map((e,t)=>(0,s.jsx)("th",{scope:"col",className:"px-2 pl-3 text-black align-middle border-b border-solid border-gray-200 py-3 fs-500 whitespace-nowrap text-left",...e.getHeaderProps(),children:e.render("Header")}))))}),(0,s.jsx)("tbody",{className:"bg-white",...d(),children:x.map((e,t)=>{u(e);let{key:r,...a}=e.getRowProps();return(0,s.jsx)("tr",{...a,children:e.cells.map((e,t)=>{let{key:r,...a}=e.getCellProps();return(0,s.jsx)("td",{className:"border-b border-gray-200 align-middle fs-500 whitespace-nowrap px-2 py-4 text-left",...a,children:e.render("Cell")},r)})},r)})})]})})})})}),(0,s.jsxs)("div",{className:"pagination mt-8 lg:flex justify-between items-center bg-light fs-500 px-3 py-2 lg:py-2 rounded-lg",children:[(0,s.jsxs)("div",{className:"flex items-center lg:w-6/12",children:[(0,s.jsx)("div",{className:"pr-5",children:(0,s.jsxs)("span",{children:["Page"," ",(0,s.jsxs)("strong",{children:[h.pageIndex+1," of ",v.length]})," "]})}),(0,s.jsx)("div",{className:"w-20",children:(0,s.jsx)("select",{value:h.pageSize,onChange:e=>{N(Number(e.target.value))},className:"bg-light border border-gray-400 rounded-md p-1",children:[5,10,20].map(e=>(0,s.jsxs)("option",{value:e,children:["Show ",e]},e))})})]}),(0,s.jsxs)("div",{className:"flex lg:mt-0 mt-4 justify-center gap-2",children:[(0,s.jsx)("button",{className:"border border-gray-400 w-7 h-7 grid place-content-center circle bg-primary text-white text-xl",onClick:()=>y(0),disabled:!p,children:(0,s.jsx)(n.dL9,{})})," ",(0,s.jsx)("button",{className:"border border-gray-400 w-7 h-7 grid place-content-center circle bg-primary text-white text-xl",onClick:()=>w(),disabled:!p,children:(0,s.jsx)(n._HU,{})})," ",(0,s.jsx)("button",{className:"border border-gray-400 w-7 h-7 grid place-content-center circle bg-primary text-white text-xl",onClick:()=>b(),disabled:!g,children:(0,s.jsx)(n.H_v,{})})," ",(0,s.jsx)("button",{className:"border border-gray-400 w-7 h-7 grid place-content-center circle bg-primary text-white text-xl",onClick:()=>y(j-1),disabled:!g,children:(0,s.jsx)(n.hPV,{})})]})]})]})}}},function(e){e.O(0,[536,865,774,888,179],function(){return e(e.s=26079)}),_N_E=e.O()}]);
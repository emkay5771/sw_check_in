var A=Object.defineProperty,T=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var z=(t,r,a)=>r in t?A(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,p=(t,r)=>{for(var a in r||(r={}))j.call(r,a)&&z(t,a,r[a]);if(k)for(var a of k(r))I.call(r,a)&&z(t,a,r[a]);return t},x=(t,r)=>T(t,D(r));import{j as e,B as c,a as n,H as m,L,I as W,u,b as l,c as B,d as M,M as P,S as O,e as Y,r as R,f as V,F as h,g as $,h as H,i as f,k as g,l as b,m as w,n as S,o as J,p as _,V as y,q,s as E,R as G,t as K,C as Q,v as U,w as Z,x as v}from"./vendor.5950e115.js";const X=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))d(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}};X();var ee="/assets/shoutwest.91930497.png",te="/assets/shoutwest_white.bf70070c.png";const N=()=>e(c,{maxW:"1000px",m:"auto",children:n(m,{h:"100px",justify:"space-between",align:"center",children:[e(L,{to:"/",children:e(c,{boxSize:"md",w:"225px",h:"41px",children:e(W,{src:u(ee,te),alt:"Dan Abramov"})})}),e(L,{to:"/about",children:e(l,{fontSize:"18px",color:u("#304BB3","white"),children:"About"})})]})}),C=()=>{const{colorMode:t,toggleColorMode:r}=B();return n(m,{position:"fixed",bottom:"0px",left:"0px",width:"100vw",height:"50px",bg:"#304BB3",justify:"space-between",px:"40px",opacity:"0.6",children:[e(l,{fontSize:"16px",color:"white",children:"Garrett Roell 2022"}),e(M,{onClick:r,variant:"outline",children:t==="light"?e(P,{w:4,h:4,p:"0",color:"white"}):e(O,{w:4,h:4,px:"0"})})]})};function re(){return"https://sw-server.garrettroell.com"}const oe=()=>{const t=Y(),r=R.exports.useRef();let a=V();function d(i){let o;return i||(o="This field is required"),o}return n(h,{children:[e(l,{mt:"75px",textAlign:"center",fontSize:"16px",children:"Add your Southwest trip details, and we'll automatically check you to your flights"}),e(m,{maxW:"350px",m:"auto",h:"15px",bg:"#C3322C",transform:"translateY(35px)",borderTopRadius:"15px",children:e(c,{h:"100%",w:"50%",bg:"#F5C14D",borderTopLeftRadius:"15px"})}),e(c,{maxW:"350px",m:"auto",mt:"20px",p:"20px",mb:"50px",borderWidth:"1px",borderRadius:"15px",children:e($,{initialValues:{firstName:"",lastName:"",confirmationNumber:""},onSubmit:(i,o)=>{r.current=t({title:"Getting data from Southwest",status:"info",isClosable:!0}),fetch(`${re()}/set-up`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p({},i))}).then(s=>{s.json().then(F=>{o.setSubmitting(!1),r.current&&t.close(r.current),console.log(F),a("/success",{state:x(p({},i),{flights:F})})})}).catch(s=>{console.log(s),o.setSubmitting(!1),r.current&&t.close(r.current),r.current=t({title:s,status:"info",isClosable:!0})})},children:i=>n(H,{children:[e(f,{h:"15px"}),e(g,{name:"firstName",validate:d,children:({field:o,form:s})=>n(b,{isInvalid:s.errors.firstName&&s.touched.firstName,children:[e(w,{htmlFor:"firstName",fontSize:"sm",mb:"0px",children:"First Name"}),e(S,x(p({},o),{id:"firstName",placeholder:"",px:"10px",h:"35px",minW:"100%",fontSize:"14px",_autofill:{textFillColor:u("rgb(26, 32, 44)","white"),boxShadow:"0 0 0px 1000px #00000000 inset",transition:"background-color 5000s ease-in-out 0s"}}))]})}),e(f,{h:"15px"}),e(g,{name:"lastName",validate:d,children:({field:o,form:s})=>n(b,{isInvalid:s.errors.lastName&&s.touched.lastName,children:[e(w,{htmlFor:"lastName",fontSize:"sm",mb:"0px",children:"Last Name"}),e(S,x(p({},o),{id:"lastName",placeholder:"",px:"10px",h:"35px",minW:"100%",fontSize:"14px",_autofill:{textFillColor:u("rgb(26, 32, 44)","white"),boxShadow:"0 0 0px 1000px #00000000 inset",transition:"background-color 5000s ease-in-out 0s"}}))]})}),e(f,{h:"15px"}),e(g,{name:"confirmationNumber",validate:d,children:({field:o,form:s})=>n(b,{isInvalid:s.errors.confirmationNumber&&s.touched.confirmationNumber,children:[e(w,{htmlFor:"confirmationNumber",fontSize:"sm",mb:"0px",children:"Confirmation Number"}),e(S,x(p({},o),{id:"confirmationNumber",placeholder:"",px:"10px",h:"35px",minW:"100%",fontSize:"14px",_autofill:{textFillColor:u("rgb(26, 32, 44)","white"),boxShadow:"0 0 0px 1000px #00000000 inset",transition:"background-color 5000s ease-in-out 0s"}}))]})}),e(f,{h:"30px"}),e(M,{type:"submit",bg:"#304BB3",color:"white",isLoading:i.isSubmitting,m:"auto",w:"100%",children:"Auto Check In"})]})})}),e(c,{h:"25px"})]})},ne=()=>{const{setColorMode:t}=B();return R.exports.useEffect(()=>{t("dark")},[]),n(h,{children:[n(c,{w:"100vw",h:"100vh",positon:"relative",px:"20px",children:[e(N,{}),e(oe,{})]}),e(C,{})]})},ie={initialColorMode:"dark"},ae=J({config:ie}),se=()=>e(h,{children:n(c,{w:"100vw",h:"100vh",positon:"relative",children:[e(N,{}),e(l,{textAlign:"center",children:"About Page"}),e(C,{})]})}),ce=()=>e(c,{transform:"rotateZ(90deg)",children:n("svg",{x:"0px",y:"0px",viewBox:"0 0 1000 1000",enableBackground:"new 0 0 1000 1000",fill:u("#C3322C","#F5C14D"),children:[e("metadata",{children:" Svg Vector Icons : http://www.onlinewebfonts.com/icon "}),e("g",{children:e("g",{transform:"translate(0.000000,511.000000) scale(0.100000,-0.100000)",children:e("path",{d:"M4892.6,4970.8c-212.8-132.7-398.2-531-529-1134.2l-52.7-244l-7.8-1044.4l-7.8-1044.4L2196.7,256.2L100-993.2v-349.4v-349.5l54.7,11.7c978,214.7,4134.7,884.4,4140.6,878.5c3.9-3.9,171.8-1731.6,236.2-2442.2c0-1.9-277.2-214.7-614.9-474.4l-614.9-470.5v-302.6c0-279.2,2-302.6,35.1-292.8c117.1,37.1,1622.3,382.6,1663.3,382.6c41,0,1546.1-345.5,1665.2-382.6c31.3-9.7,33.2,13.7,33.2,292.8v302.6l-579.8,443.1c-320.1,242.1-597.4,456.8-614.9,474.4c-31.2,29.3-27.3,97.6,80,1247.4c62.5,669.6,117.1,1220.1,121,1222.1c3.9,3.9,942.9-193.3,2086.9-439.2s2084.9-447.1,2094.7-447.1c7.8,0,13.7,156.2,13.7,347.5v347.5L7803.3,256.2L5704.7,1503.7l-7.8,1044.4l-7.8,1044.4l-50.8,240.1c-105.4,478.3-253.8,853.1-404.1,1024.9C5101.5,5007.9,5003.9,5041,4892.6,4970.8z"})})})]})});function le(t){const r=new Date(t);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][r.getMonth()]} ${r.getDate()}, ${r.getFullYear()}`}const de=({flightInfo:t})=>{console.log(t);const[r]=_("(min-width: 600px)");return e(y,{gap:r?"8px":"20px",children:t.flights.map((a,d)=>n(q,{direction:r?"row":"column",justify:"space-between",w:"100%",spacing:r?"0px":"12px",children:[n(m,{spacing:"30px",justify:"center",w:"100%",children:[e(l,{fontSize:"20px",children:a.fromCode}),e(c,{w:"30px",h:"30px",children:e(ce,{})}),e(l,{fontSize:"20px",children:a.toCode})]}),n(m,{justify:"center",w:"100%",children:[e(l,{fontSize:"16px",children:a.departureTime}),e(l,{fontSize:"16px",children:le(a.date)})]})]},d))})},he=({flightInfo:t})=>t?e(h,{children:n(y,{maxW:"800px",m:"auto",spacing:"16px",align:"left",children:[e(l,{mt:"80px",textAlign:"center",children:"Success"}),e(c,{h:"30px",w:"100px"}),n(y,{spacing:"0px",children:[e(m,{w:"100%",h:"15px",bg:"#C3322C",transform:"translateY(10px)",borderTopRadius:"15px",children:e(c,{h:"100%",w:"50%",bg:"#F5C14D",borderTopLeftRadius:"15px"})}),n(c,{w:"100%",py:"20px",borderWidth:"1px",borderRadius:"15px",children:[n(l,{fontSize:"16px",mt:"10px",mb:"20px",textAlign:"center",children:[t.firstName," ",t.lastName," (",t.confirmationNumber,")"]}),e(de,{flightInfo:t})]})]}),t.flights.length===1?n(l,{mt:"30px",fontSize:"16px",children:["You'll be checked in at ",t.flights[0].checkInTime]}):e(h,{}),t.flights.length===2?n(l,{mt:"30px",fontSize:"16px",children:["You'll be checked in at ",t.flights[0].checkInTime," You'll also be checked in at ",t.flights[1].checkInTime]}):e(h,{}),e(c,{h:"100px"})]})}):e(l,{fontSize:"24px",mt:"50px",textAlign:"center",children:"Loading Data..."}),pe=()=>{const{state:t}=E();return n(h,{children:[n(c,{w:"100vw",h:"100vh",positon:"relative",px:"20px",children:[e(N,{}),e(he,{flightInfo:t})]}),e(C,{})]})};G.render(e(K.StrictMode,{children:e(Q,{theme:ae,children:e(U,{children:n(Z,{children:[e(v,{path:"/",element:e(ne,{})}),e(v,{path:"/success",element:e(pe,{})}),e(v,{path:"/about",element:e(se,{})})]})})})}),document.getElementById("root"));
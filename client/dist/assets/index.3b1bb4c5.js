var I=Object.defineProperty,W=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var B=(r,t,i)=>t in r?I(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,f=(r,t)=>{for(var i in t||(t={}))_.call(t,i)&&B(r,i,t[i]);if(T)for(var i of T(t))Y.call(t,i)&&B(r,i,t[i]);return r},w=(r,t)=>W(r,P(t));import{j as e,B as o,a as n,H as u,L as j,I as H,u as g,b as s,c as $,d as R,e as k,F as E,M as J,S as V,f as G,r as O,g as U,h as x,i as q,k as K,l as p,m as v,n as y,o as F,p as N,A as Q,q as Z,s as X,t as ee,v as te,w as A,x as S,y as C,z as re,C as ne,D as ie,V as L,E as oe,R as ae,G as se,J as le,K as ce,N as de,O as z}from"./vendor.e1e80f01.js";const he=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))m(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&m(h)}).observe(document,{childList:!0,subtree:!0});function i(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function m(a){if(a.ep)return;a.ep=!0;const l=i(a);fetch(a.href,l)}};he();var pe="/assets/shoutless.522ece2c.png",ue="/assets/shoutless_white.4cb23334.png";const M=()=>e(o,{maxW:"1000px",m:"auto",children:n(u,{h:"100px",justify:"space-between",align:"center",children:[e(j,{to:"/",children:e(o,{boxSize:"md",w:"225px",h:"41px",children:e(H,{src:g(pe,ue),alt:"Dan Abramov"})})}),e(j,{to:"/about",children:e(s,{fontSize:"18px",color:g("#304BB3","white"),_hover:{color:"#F5C14D"},children:"About"})})]})}),D=()=>{const{colorMode:r,toggleColorMode:t}=$(),i=new Date().getFullYear();return n(u,{position:"fixed",bottom:"0px",left:"0px",width:"100vw",height:"50px",bg:"#304BB3",justify:"space-between",px:"40px",children:[e(s,{fontSize:"16px",color:"white",children:n(R,{href:"https://garrettroell.com",_hover:{color:"#F5C14D"},isExternal:!0,children:["Garrett Roell ",i]})}),n(u,{children:[e(R,{href:"https://github.com/garrettroell/sw_check_in",isExternal:!0,children:e(k,{variant:"outline",children:e(E,{color:"white"})})}),e(k,{onClick:t,variant:"outline",children:r==="light"?e(J,{w:4,h:4,p:"0",color:"white"}):e(V,{w:4,h:4,px:"0"})})]})]})};function xe(){return"https://sw-server.garrettroell.com"}const me=()=>{const r=G(),t=O.exports.useRef();let i=U();const[m,a]=O.exports.useState(!1);function l(h){let d;return h||(d="This field is required"),d}return n(x,{children:[e(s,{mt:"75px",textAlign:"center",fontSize:"16px",children:"Add your Southwest trip details, and we'll automatically check you to your flights"}),e(u,{maxW:"350px",m:"auto",h:"15px",bg:"#C3322C",transform:"translateY(35px)",borderTopRadius:"15px",children:e(o,{h:"100%",w:"50%",bg:"#F5C14D",borderTopLeftRadius:"15px"})}),e(o,{maxW:"350px",m:"auto",mt:"20px",p:"20px",mb:"50px",borderWidth:"1px",borderRadius:"15px",children:e(q,{initialValues:{firstName:"",lastName:"",confirmationNumber:""},onSubmit:(h,d)=>{a(!0),t.current=r({title:"Getting data from Southwest",status:"info",isClosable:!0}),fetch(`${xe()}/set-up`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f({},h))}).then(c=>{c.json().then(b=>{Object.keys(b).length>0?(console.log("flights",b,Object.keys(b).length),d.setSubmitting(!1),t.current&&r.close(t.current),console.log(b),i("/success",{state:w(f({},h),{flights:b})})):(console.log("flights not found"),d.setSubmitting(!1),t.current&&r.close(t.current),t.current=r({title:"Southwest reserveration was not found.",status:"error",isClosable:!0}))})}).catch(c=>{console.log(c),d.setSubmitting(!1),t.current&&r.close(t.current),t.current=r({title:c,status:"info",isClosable:!0})})},children:h=>n(K,{children:[e(p,{h:"15px"}),e(v,{name:"firstName",validate:l,children:({field:d,form:c})=>n(y,{isInvalid:c.errors.firstName&&c.touched.firstName,children:[e(F,{htmlFor:"firstName",fontSize:"sm",mb:"0px",children:"First Name"}),e(N,w(f({},d),{id:"firstName",placeholder:"",px:"10px",h:"35px",minW:"100%",fontSize:"14px",_autofill:{textFillColor:g("rgb(26, 32, 44)","white"),boxShadow:"0 0 0px 1000px #00000000 inset",transition:"background-color 5000s ease-in-out 0s"}}))]})}),e(p,{h:"15px"}),e(v,{name:"lastName",validate:l,children:({field:d,form:c})=>n(y,{isInvalid:c.errors.lastName&&c.touched.lastName,children:[e(F,{htmlFor:"lastName",fontSize:"sm",mb:"0px",children:"Last Name"}),e(N,w(f({},d),{id:"lastName",placeholder:"",px:"10px",h:"35px",minW:"100%",fontSize:"14px",_autofill:{textFillColor:g("rgb(26, 32, 44)","white"),boxShadow:"0 0 0px 1000px #00000000 inset",transition:"background-color 5000s ease-in-out 0s"}}))]})}),e(p,{h:"15px"}),e(v,{name:"confirmationNumber",validate:l,children:({field:d,form:c})=>n(y,{isInvalid:c.errors.confirmationNumber&&c.touched.confirmationNumber,children:[e(F,{htmlFor:"confirmationNumber",fontSize:"sm",mb:"0px",children:"Confirmation Number"}),e(N,w(f({},d),{id:"confirmationNumber",placeholder:"",px:"10px",h:"35px",minW:"100%",fontSize:"14px",_autofill:{textFillColor:g("rgb(26, 32, 44)","white"),boxShadow:"0 0 0px 1000px #00000000 inset",transition:"background-color 5000s ease-in-out 0s"}}))]})}),e(p,{h:"30px"}),e(k,{type:"submit",bg:"#304BB3",color:"white",isLoading:h.isSubmitting,m:"auto",w:"100%",children:"Auto Check In"})]})})}),m?n(Q,{status:"warning",maxW:"520px",margin:"auto",px:"10px",children:[e(Z,{}),e(X,{children:"Heads up!"}),e(ee,{children:"This site is still experimental, so there may be errors"})]}):e(x,{}),e(o,{h:"25px"})]})},fe=()=>n(x,{children:[n(o,{w:"100vw",h:"100vh",positon:"relative",px:"20px",children:[e(M,{}),e(me,{})]}),e(D,{})]}),ge={initialColorMode:"dark"},be=te({config:ge}),we=()=>{const[r]=A("(min-width: 1000px)"),[t]=A("(min-width: 550px)");return e(x,{children:n(o,{w:"100vw",h:"100vh",positon:"relative",children:[e(M,{}),e(s,{textAlign:"center",children:"How it works"}),n(S,{maxW:"1000px",w:"100%",m:"auto",direction:r?"row":"column",spacing:"10px",px:"20px",mt:"50px",children:[n(S,{direction:t?"row":"column",spacing:"0px",w:r?"67%":"100%",children:[n(o,{w:"100%",h:"200px",children:[e(s,{fontSize:"18px",textAlign:"center",children:"1. User Inputs Data"}),e(p,{h:"15px"}),e(C,{h:"140px",w:"140px",m:"auto",textAlign:"center",align:"center",justify:"center",children:e(re,{fontSize:"75px"})})]}),n(o,{w:"100%",h:"200px",children:[e(s,{fontSize:"18px",textAlign:"center",children:"2. Server schedules run"}),e(p,{h:"15px"}),e(C,{h:"140px",w:"140px",m:"auto",textAlign:"center",align:"center",justify:"center",children:e(ne,{fontSize:"75px"})})]})]}),n(S,{direction:t?"row":"column",spacing:"0px",w:r?"33%":"100%",children:[n(o,{w:"100%",h:"200px",children:[e(s,{fontSize:"18px",textAlign:"center",children:"3. Server executes check in"}),e(p,{h:"15px"}),e(C,{h:"140px",w:"140px",m:"auto",textAlign:"center",align:"center",justify:"center",children:e(ie,{fontSize:"75px"})})]}),t&&!r?e(o,{w:"100%",h:"200px"}):e(x,{})]})]}),e(D,{})]})})},Se=()=>e(o,{transform:"rotateZ(90deg)",children:n("svg",{x:"0px",y:"0px",viewBox:"0 0 1000 1000",enableBackground:"new 0 0 1000 1000",fill:g("#C3322C","#F5C14D"),children:[e("metadata",{children:" Svg Vector Icons : http://www.onlinewebfonts.com/icon "}),e("g",{children:e("g",{transform:"translate(0.000000,511.000000) scale(0.100000,-0.100000)",children:e("path",{d:"M4892.6,4970.8c-212.8-132.7-398.2-531-529-1134.2l-52.7-244l-7.8-1044.4l-7.8-1044.4L2196.7,256.2L100-993.2v-349.4v-349.5l54.7,11.7c978,214.7,4134.7,884.4,4140.6,878.5c3.9-3.9,171.8-1731.6,236.2-2442.2c0-1.9-277.2-214.7-614.9-474.4l-614.9-470.5v-302.6c0-279.2,2-302.6,35.1-292.8c117.1,37.1,1622.3,382.6,1663.3,382.6c41,0,1546.1-345.5,1665.2-382.6c31.3-9.7,33.2,13.7,33.2,292.8v302.6l-579.8,443.1c-320.1,242.1-597.4,456.8-614.9,474.4c-31.2,29.3-27.3,97.6,80,1247.4c62.5,669.6,117.1,1220.1,121,1222.1c3.9,3.9,942.9-193.3,2086.9-439.2s2084.9-447.1,2094.7-447.1c7.8,0,13.7,156.2,13.7,347.5v347.5L7803.3,256.2L5704.7,1503.7l-7.8,1044.4l-7.8,1044.4l-50.8,240.1c-105.4,478.3-253.8,853.1-404.1,1024.9C5101.5,5007.9,5003.9,5041,4892.6,4970.8z"})})})]})});function ve(r){const t=new Date(r);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`}const ye=({flightInfo:r})=>{console.log(r);const[t]=A("(min-width: 600px)");return e(L,{gap:t?"8px":"20px",children:r.flights.map((i,m)=>n(S,{direction:t?"row":"column",justify:"space-between",w:"100%",spacing:t?"0px":"12px",children:[n(u,{spacing:"30px",justify:"center",w:"100%",children:[e(s,{fontSize:"20px",children:i.fromCode}),e(o,{w:"30px",h:"30px",children:e(Se,{})}),e(s,{fontSize:"20px",children:i.toCode})]}),n(u,{justify:"center",w:"100%",children:[e(s,{fontSize:"16px",children:i.departureTime}),e(s,{fontSize:"16px",children:ve(i.date)})]})]},m))})},Fe=({flightInfo:r})=>(console.log(r),r?e(x,{children:n(L,{maxW:"800px",m:"auto",spacing:"16px",align:"left",children:[e(s,{mt:"80px",textAlign:"center",children:"Success"}),e(o,{h:"30px",w:"100px"}),n(L,{spacing:"0px",children:[e(u,{w:"100%",h:"15px",bg:"#C3322C",transform:"translateY(10px)",borderTopRadius:"15px",children:e(o,{h:"100%",w:"50%",bg:"#F5C14D",borderTopLeftRadius:"15px"})}),n(o,{w:"100%",py:"20px",borderWidth:"1px",borderRadius:"15px",children:[n(s,{fontSize:"16px",mt:"10px",mb:"20px",textAlign:"center",children:[r.firstName," ",r.lastName," (",r.confirmationNumber,")"]}),e(ye,{flightInfo:r})]})]}),r.flights.map(t=>parseFloat(t.daysUntilFlight)<0?n(s,{mt:"30px",fontSize:"16px",children:["Your flight on ",t.date," already happened."]},Math.random()):parseFloat(t.daysUntilFlight)<1?n(s,{mt:"30px",fontSize:"16px",children:["We're checking you into your flight on ",t.date," right now."]},Math.random()):n(s,{mt:"30px",fontSize:"16px",children:["You'll be checked in at ",t.checkInTime]},Math.random())),e(o,{h:"100px"})]})}):e(s,{fontSize:"24px",mt:"50px",textAlign:"center",children:"Loading Data..."})),Ne=()=>{const{state:r}=oe();return n(x,{children:[n(o,{w:"100vw",h:"100vh",positon:"relative",px:"20px",children:[e(M,{}),e(Fe,{flightInfo:r})]}),e(D,{})]})};ae.render(e(se.StrictMode,{children:e(le,{theme:be,children:e(ce,{children:n(de,{children:[e(z,{path:"/",element:e(fe,{})}),e(z,{path:"/success",element:e(Ne,{})}),e(z,{path:"/about",element:e(we,{})})]})})})}),document.getElementById("root"));

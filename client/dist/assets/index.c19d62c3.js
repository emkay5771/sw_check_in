var P=Object.defineProperty,_=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var R=(r,t,i)=>t in r?P(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,f=(r,t)=>{for(var i in t||(t={}))Y.call(t,i)&&R(r,i,t[i]);if(B)for(var i of B(t))$.call(t,i)&&R(r,i,t[i]);return r},b=(r,t)=>_(r,U(t));import{j as e,B as s,a as n,H as u,L as I,I as E,u as g,b as o,c as H,d as O,e as D,F as J,M as V,S as G,f as q,r as y,g as K,h as x,i as Q,k as Z,l as m,m as C,n as k,o as A,p as L,A as X,q as ee,s as te,t as re,v as ne,w as j,x as v,y as M,z as ie,C as oe,D as se,V as N,E as ae,R as ce,G as le,J as de,K as he,N as pe,O as S}from"./vendor.e1e80f01.js";const ue=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))p(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&p(h)}).observe(document,{childList:!0,subtree:!0});function i(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function p(a){if(a.ep)return;a.ep=!0;const c=i(a);fetch(a.href,c)}};ue();var xe="/assets/shoutless.522ece2c.png",me="/assets/shoutless_white.4cb23334.png";const F=()=>e(s,{maxW:"1000px",m:"auto",children:n(u,{h:"100px",justify:"space-between",align:"center",children:[e(I,{to:"/",children:e(s,{boxSize:"md",w:"225px",h:"41px",children:e(E,{src:g(xe,me),alt:"Dan Abramov"})})}),e(I,{to:"/about",children:e(o,{fontSize:"18px",color:g("#304BB3","white"),_hover:{color:"#F5C14D"},children:"About"})})]})}),z=()=>{const{colorMode:r,toggleColorMode:t}=H(),i=new Date().getFullYear();return n(u,{position:"fixed",bottom:"0px",left:"0px",width:"100vw",height:"50px",bg:"#304BB3",justify:"space-between",px:"40px",children:[e(o,{fontSize:"16px",color:"white",children:n(O,{href:"https://garrettroell.com",_hover:{color:"#F5C14D"},isExternal:!0,children:["Garrett Roell ",i]})}),n(u,{children:[e(O,{href:"https://github.com/garrettroell/sw_check_in",isExternal:!0,children:e(D,{variant:"outline",children:e(J,{color:"white"})})}),e(D,{onClick:t,variant:"outline",children:r==="light"?e(V,{w:4,h:4,p:"0",color:"white"}):e(G,{w:4,h:4,px:"0"})})]})]})};function W(){return"https://sw-server.garrettroell.com"}const fe=()=>{const r=q(),t=y.exports.useRef();let i=K();const[p,a]=y.exports.useState(!1);function c(h){let d;return h||(d="This field is required"),d}return n(x,{children:[e(o,{mt:"75px",textAlign:"center",fontSize:"16px",children:"Add your Southwest trip details, and this site will check you into your flight(s) seconds after the check in window opens."}),e(u,{maxW:"350px",m:"auto",h:"15px",bg:"#C3322C",transform:"translateY(35px)",borderTopRadius:"15px",children:e(s,{h:"100%",w:"50%",bg:"#F5C14D",borderTopLeftRadius:"15px"})}),e(s,{maxW:"350px",m:"auto",mt:"20px",p:"20px",mb:"50px",borderWidth:"1px",borderRadius:"15px",children:e(Q,{initialValues:{firstName:"",lastName:"",confirmationNumber:""},onSubmit:(h,d)=>{a(!0),t.current=r({title:"Getting data from Southwest",status:"info",isClosable:!0}),fetch(`${W()}/set-up`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f({},h))}).then(l=>{l.json().then(w=>{Object.keys(w).length>0?(console.log("flights",w,Object.keys(w).length),d.setSubmitting(!1),t.current&&r.close(t.current),console.log(w),i("/success",{state:b(f({},h),{flights:w})})):(console.log("flights not found"),d.setSubmitting(!1),t.current&&r.close(t.current),t.current=r({title:"Southwest reserveration was not found.",status:"error",isClosable:!0}))})}).catch(l=>{console.log(l),d.setSubmitting(!1),t.current&&r.close(t.current),t.current=r({title:l,status:"info",isClosable:!0})})},children:h=>n(Z,{children:[e(m,{h:"15px"}),e(C,{name:"firstName",validate:c,children:({field:d,form:l})=>n(k,{isInvalid:l.errors.firstName&&l.touched.firstName,children:[e(A,{htmlFor:"firstName",fontSize:"sm",mb:"0px",children:"First Name"}),e(L,b(f({},d),{id:"firstName",placeholder:"",px:"10px",h:"35px",minW:"100%",fontSize:"14px",_autofill:{textFillColor:g("rgb(26, 32, 44)","white"),boxShadow:"0 0 0px 1000px #00000000 inset",transition:"background-color 5000s ease-in-out 0s"}}))]})}),e(m,{h:"15px"}),e(C,{name:"lastName",validate:c,children:({field:d,form:l})=>n(k,{isInvalid:l.errors.lastName&&l.touched.lastName,children:[e(A,{htmlFor:"lastName",fontSize:"sm",mb:"0px",children:"Last Name"}),e(L,b(f({},d),{id:"lastName",placeholder:"",px:"10px",h:"35px",minW:"100%",fontSize:"14px",_autofill:{textFillColor:g("rgb(26, 32, 44)","white"),boxShadow:"0 0 0px 1000px #00000000 inset",transition:"background-color 5000s ease-in-out 0s"}}))]})}),e(m,{h:"15px"}),e(C,{name:"confirmationNumber",validate:c,children:({field:d,form:l})=>n(k,{isInvalid:l.errors.confirmationNumber&&l.touched.confirmationNumber,children:[e(A,{htmlFor:"confirmationNumber",fontSize:"sm",mb:"0px",children:"Confirmation Number"}),e(L,b(f({},d),{id:"confirmationNumber",placeholder:"",px:"10px",h:"35px",minW:"100%",fontSize:"14px",_autofill:{textFillColor:g("rgb(26, 32, 44)","white"),boxShadow:"0 0 0px 1000px #00000000 inset",transition:"background-color 5000s ease-in-out 0s"}}))]})}),e(m,{h:"30px"}),e(D,{type:"submit",bg:"#304BB3",color:"white",isLoading:h.isSubmitting,m:"auto",w:"100%",children:"Auto Check In"})]})})}),p?n(X,{status:"warning",maxW:"520px",margin:"auto",px:"10px",children:[e(ee,{}),e(te,{children:"Heads up!"}),e(re,{children:"This site is still experimental, so there may be errors"})]}):e(x,{}),e(s,{h:"25px"})]})},ge=()=>n(x,{children:[n(s,{w:"100vw",h:"100vh",positon:"relative",px:"20px",children:[e(F,{}),e(fe,{})]}),e(z,{})]}),we={initialColorMode:"dark",useSystemColorMode:!1},be=ne({config:we}),Se=()=>{const[r]=j("(min-width: 1000px)"),[t]=j("(min-width: 550px)");return e(x,{children:n(s,{w:"100vw",h:"100vh",positon:"relative",children:[e(F,{}),e(o,{textAlign:"center",children:"How it works"}),n(v,{maxW:"1000px",w:"100%",m:"auto",direction:r?"row":"column",spacing:"10px",px:"20px",mt:"50px",children:[n(v,{direction:t?"row":"column",spacing:"0px",w:r?"67%":"100%",children:[n(s,{w:"100%",h:"200px",children:[e(o,{fontSize:"18px",textAlign:"center",children:"1. User Inputs Data"}),e(m,{h:"15px"}),e(M,{h:"140px",w:"140px",m:"auto",textAlign:"center",align:"center",justify:"center",children:e(ie,{fontSize:"75px"})})]}),n(s,{w:"100%",h:"200px",children:[e(o,{fontSize:"18px",textAlign:"center",children:"2. Server schedules run"}),e(m,{h:"15px"}),e(M,{h:"140px",w:"140px",m:"auto",textAlign:"center",align:"center",justify:"center",children:e(oe,{fontSize:"75px"})})]})]}),n(v,{direction:t?"row":"column",spacing:"0px",w:r?"33%":"100%",children:[n(s,{w:"100%",h:"200px",children:[e(o,{fontSize:"18px",textAlign:"center",children:"3. Server executes check in"}),e(m,{h:"15px"}),e(M,{h:"140px",w:"140px",m:"auto",textAlign:"center",align:"center",justify:"center",children:e(se,{fontSize:"75px"})})]}),t&&!r?e(s,{w:"100%",h:"200px"}):e(x,{})]})]}),e(z,{})]})})},ve=()=>e(s,{transform:"rotateZ(90deg)",children:n("svg",{x:"0px",y:"0px",viewBox:"0 0 1000 1000",enableBackground:"new 0 0 1000 1000",fill:g("#C3322C","#F5C14D"),children:[e("metadata",{children:" Svg Vector Icons : http://www.onlinewebfonts.com/icon "}),e("g",{children:e("g",{transform:"translate(0.000000,511.000000) scale(0.100000,-0.100000)",children:e("path",{d:"M4892.6,4970.8c-212.8-132.7-398.2-531-529-1134.2l-52.7-244l-7.8-1044.4l-7.8-1044.4L2196.7,256.2L100-993.2v-349.4v-349.5l54.7,11.7c978,214.7,4134.7,884.4,4140.6,878.5c3.9-3.9,171.8-1731.6,236.2-2442.2c0-1.9-277.2-214.7-614.9-474.4l-614.9-470.5v-302.6c0-279.2,2-302.6,35.1-292.8c117.1,37.1,1622.3,382.6,1663.3,382.6c41,0,1546.1-345.5,1665.2-382.6c31.3-9.7,33.2,13.7,33.2,292.8v302.6l-579.8,443.1c-320.1,242.1-597.4,456.8-614.9,474.4c-31.2,29.3-27.3,97.6,80,1247.4c62.5,669.6,117.1,1220.1,121,1222.1c3.9,3.9,942.9-193.3,2086.9-439.2s2084.9-447.1,2094.7-447.1c7.8,0,13.7,156.2,13.7,347.5v347.5L7803.3,256.2L5704.7,1503.7l-7.8,1044.4l-7.8,1044.4l-50.8,240.1c-105.4,478.3-253.8,853.1-404.1,1024.9C5101.5,5007.9,5003.9,5041,4892.6,4970.8z"})})})]})});function ye(r){const t=new Date(r);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`}const Ne=({flightInfo:r})=>{console.log(r);const[t]=j("(min-width: 600px)");return e(N,{gap:t?"8px":"20px",children:r.flights.map((i,p)=>n(v,{direction:t?"row":"column",justify:"space-between",w:"100%",spacing:t?"0px":"12px",children:[n(u,{spacing:"30px",justify:"center",w:"100%",children:[e(o,{fontSize:"20px",children:i.fromCode}),e(s,{w:"30px",h:"30px",children:e(ve,{})}),e(o,{fontSize:"20px",children:i.toCode})]}),n(u,{justify:"center",w:"100%",children:[e(o,{fontSize:"16px",children:i.departureTime}),e(o,{fontSize:"16px",children:ye(i.date)})]})]},p))})},Fe=({flightInfo:r})=>(console.log(r),r?e(x,{children:n(N,{maxW:"800px",m:"auto",spacing:"16px",align:"left",children:[e(o,{mt:"80px",textAlign:"center",children:"Success"}),e(s,{h:"30px",w:"100px"}),n(N,{spacing:"0px",children:[e(u,{w:"100%",h:"15px",bg:"#C3322C",transform:"translateY(10px)",borderTopRadius:"15px",children:e(s,{h:"100%",w:"50%",bg:"#F5C14D",borderTopLeftRadius:"15px"})}),n(s,{w:"100%",py:"20px",borderWidth:"1px",borderRadius:"15px",children:[n(o,{fontSize:"16px",mt:"10px",mb:"20px",textAlign:"center",children:[r.firstName," ",r.lastName," (",r.confirmationNumber,")"]}),e(Ne,{flightInfo:r})]})]}),r.flights.map(t=>parseFloat(t.daysUntilFlight)<0?n(o,{mt:"30px",fontSize:"16px",children:["Your flight on ",t.date," already happened."]},Math.random()):parseFloat(t.daysUntilFlight)<1?n(o,{mt:"30px",fontSize:"16px",children:["We're checking you into your flight on ",t.date," right now."]},Math.random()):n(o,{mt:"30px",fontSize:"16px",children:["You'll be checked in at ",t.checkInTime]},Math.random())),e(s,{h:"100px"})]})}):e(o,{fontSize:"24px",mt:"50px",textAlign:"center",children:"Loading Data..."})),ze=()=>{const{state:r}=ae();return n(x,{children:[n(s,{w:"100vw",h:"100vh",positon:"relative",px:"20px",children:[e(F,{}),e(Fe,{flightInfo:r})]}),e(z,{})]})};function T(r){let t=r[0].toUpperCase();for(const i of r.substring(1))t+="*";return t}async function Ce(){return(await fetch(`${W()}/upcoming-flights`)).json()}const ke=()=>{const[r,t]=y.exports.useState([]);return y.exports.useEffect(async()=>{const i=await Ce();i&&t(i)},[]),e(x,{children:n(s,{w:"100vw",h:"100vh",positon:"relative",children:[e(F,{}),e(o,{textAlign:"center",children:"Upcoming Check Ins"}),e(N,{h:"60px",maxW:"500px",m:"auto",px:"10px",mt:"30px",children:r.map((i,p)=>(T(i.firstName),n(u,{h:"30px",w:"100%",children:[e(o,{fontSize:"sm",children:i.date}),e(o,{fontSize:"sm",children:i.departureTime}),e(o,{fontSize:"sm",children:i.departureTimezone}),e(o,{fontSize:"sm",children:T(i.firstName)}),e(o,{fontSize:"sm",children:T(i.lastName)}),e(o,{fontSize:"sm",children:i.confirmationNumber})]},p)))}),e(z,{})]})})};ce.render(e(le.StrictMode,{children:e(de,{theme:be,children:e(he,{children:n(pe,{children:[e(S,{path:"/",element:e(ge,{})}),e(S,{path:"/success",element:e(ze,{})}),e(S,{path:"/about",element:e(Se,{})}),e(S,{path:"/upcoming-flights",element:e(ke,{})})]})})})}),document.getElementById("root"));

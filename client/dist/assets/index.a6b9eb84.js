var J=Object.defineProperty,V=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var _=(r,t,i)=>t in r?J(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,x=(r,t)=>{for(var i in t||(t={}))G.call(t,i)&&_(r,i,t[i]);if(I)for(var i of I(t))Z.call(t,i)&&_(r,i,t[i]);return r},m=(r,t)=>V(r,q(t));import{j as e,B as l,a as n,H as g,L as P,I as K,u as f,b as o,c as Q,d as E,e as F,F as X,M as ee,S as te,f as $,r as S,g as re,h as b,i as U,k as H,l as p,m as y,n as v,o as B,p as z,A as ie,q as ne,s as oe,t as se,v as ae,w as O,x as A,y as R,z as le,C as ce,D as de,V as N,T as he,E as pe,R as ue,G as xe,J as me,K as fe,N as ge,O as C}from"./vendor.9545d94f.js";const be=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const h of s)if(h.type==="childList")for(const w of h.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&d(w)}).observe(document,{childList:!0,subtree:!0});function i(s){const h={};return s.integrity&&(h.integrity=s.integrity),s.referrerpolicy&&(h.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?h.credentials="include":s.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(s){if(s.ep)return;s.ep=!0;const h=i(s);fetch(s.href,h)}};be();var we="/assets/shoutless.522ece2c.png",Se="/assets/shoutless_white.4cb23334.png";const T=()=>e(l,{maxW:"1000px",m:"auto",px:"5px",children:n(g,{h:"100px",justify:"space-between",align:"center",children:[e(P,{to:"/",children:e(l,{boxSize:"md",w:"225px",h:"41px",children:e(K,{src:f(we,Se),alt:"Website logo"})})}),e(P,{to:"/about",children:e(o,{fontSize:"18px",color:f("#304BB3","white"),_hover:{color:"#F5C14D"},children:"About"})})]})}),M=()=>{const{colorMode:r,toggleColorMode:t}=Q(),i=new Date().getFullYear();return n(g,{position:"fixed",bottom:"0px",left:"0px",width:"100vw",height:"50px",bg:"#304BB3",justify:"space-between",px:"40px",children:[e(o,{fontSize:"16px",color:"white",children:n(E,{href:"https://garrettroell.com",_hover:{color:"#F5C14D"},isExternal:!0,children:["Garrett Roell ",i]})}),n(g,{children:[e(E,{href:"https://github.com/garrettroell/sw_check_in",isExternal:!0,children:e(F,{variant:"outline",children:e(X,{color:"white"})})}),e(F,{onClick:t,variant:"outline",children:r==="light"?e(ee,{w:4,h:4,p:"0",color:"white"}):e(te,{w:4,h:4,px:"0"})})]})]})};function D(){return"https://sw-server.garrettroell.com"}const ye=()=>{const r=$(),t=S.exports.useRef(),i=S.exports.useRef(null);let d=re();const[s,h]=S.exports.useState(!1),[w,L]=S.exports.useState(!1);function W(u){let a;return u||(a="This field is required"),a}function Y(u){let a;return u?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(u)||(a="Invalid email address"):a=null,a}return n(b,{children:[e(o,{mt:"75px",textAlign:"center",fontSize:"16px",children:"Add your Southwest trip details, and this site will check you in seconds after the check in window opens."}),e(g,{maxW:"350px",m:"auto",h:"15px",bg:"#C3322C",transform:"translateY(35px)",borderTopRadius:"15px",children:e(l,{h:"100%",w:"50%",bg:"#F5C14D",borderTopLeftRadius:"15px"})}),e(l,{maxW:"350px",m:"auto",mt:"20px",p:"20px",mb:"50px",borderWidth:"1px",borderRadius:"15px",children:e(U,{initialValues:{firstName:"",lastName:"",confirmationNumber:"",email:""},onSubmit:(u,a)=>{h(!0),t.current=r({title:"Getting data from Southwest",status:"info",isClosable:!0,duration:2e4}),fetch(`${D()}/set-up`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x({},u))}).then(c=>{c.json().then(k=>{Object.keys(k).length>0?(console.log("flights",k,Object.keys(k).length),a.setSubmitting(!1),t.current&&r.close(t.current),d("/success",{state:m(x({},u),{flights:k})})):(a.setSubmitting(!1),t.current&&r.close(t.current),t.current=r({title:"Southwest reserveration was not found.",status:"error",isClosable:!0}))})}).catch(c=>{console.log(c),a.setSubmitting(!1),t.current&&r.close(t.current),t.current=r({title:c,status:"info",isClosable:!0})})},children:u=>n(H,{onChange:a=>{a.target.id==="email"&&a.target.value!==""&&L(!0)},children:[e(p,{h:"15px"}),e(y,{name:"firstName",validate:W,children:({field:a,form:c})=>n(v,{isInvalid:c.errors.firstName&&c.touched.firstName,children:[e(B,{htmlFor:"firstName",fontSize:"sm",mb:"0px",children:"First Name"}),e(z,m(x({},a),{id:"firstName",placeholder:"",px:"10px",h:"35px",minW:"100%",fontSize:"14px",_autofill:{textFillColor:f("rgb(26, 32, 44)","white"),boxShadow:"0 0 0px 1000px #00000000 inset",transition:"background-color 5000s ease-in-out 0s"}}))]})}),e(p,{h:"15px"}),e(y,{name:"lastName",validate:W,children:({field:a,form:c})=>n(v,{isInvalid:c.errors.lastName&&c.touched.lastName,children:[e(B,{htmlFor:"lastName",fontSize:"sm",mb:"0px",children:"Last Name"}),e(z,m(x({},a),{id:"lastName",placeholder:"",px:"10px",h:"35px",minW:"100%",fontSize:"14px",_autofill:{textFillColor:f("rgb(26, 32, 44)","white"),boxShadow:"0 0 0px 1000px #00000000 inset",transition:"background-color 5000s ease-in-out 0s"}}))]})}),e(p,{h:"15px"}),e(y,{name:"confirmationNumber",validate:W,children:({field:a,form:c})=>n(v,{isInvalid:c.errors.confirmationNumber&&c.touched.confirmationNumber,children:[e(B,{htmlFor:"confirmationNumber",fontSize:"sm",mb:"0px",children:"Confirmation Number"}),e(z,m(x({},a),{id:"confirmationNumber",placeholder:"",px:"10px",h:"35px",minW:"100%",fontSize:"14px",_autofill:{textFillColor:f("rgb(26, 32, 44)","white"),boxShadow:"0 0 0px 1000px #00000000 inset",transition:"background-color 5000s ease-in-out 0s"}}))]})}),e(p,{h:"25px"}),e(y,{name:"email",validate:Y,children:({field:a,form:c})=>e(v,{isInvalid:c.errors.email&&c.touched.email,onBlur:()=>{c.values.email===""&&L(!1)},children:e(l,{h:w?"35px":"0px",children:e(z,m(x({},a),{id:"email",ref:i,placeholder:"",px:"10px",borderWidth:w?"1px":"0px",minW:"100%",maxH:"35px",fontSize:"14px",_autofill:{textFillColor:f("rgb(26, 32, 44)","white"),boxShadow:"0 0 0px 1000px #00000000 inset",transition:"background-color 5000s ease-in-out 0s"}}))})})}),e(F,{display:w?"none":"",variant:"ghost",m:"0px",h:"35px",w:"100%",borderWidth:"1px",fontSize:"14px",onClick:()=>{L(!0),i.current.focus()},children:"Optionally, add your email address"}),e(o,{fontSize:"11px",opacity:"0.8",mt:"6px",textAlign:"center",children:"We'll only use this to deliver your boarding pass"}),e(p,{h:"30px"}),e(F,{type:"submit",bg:"#304BB3",color:"white",isLoading:u.isSubmitting,m:"auto",w:"100%",children:"Set up automatic check in"})]})})}),s?n(ie,{status:"warning",maxW:"520px",margin:"auto",px:"10px",children:[e(ne,{}),e(oe,{children:"Heads up!"}),e(se,{children:"This site is still experimental, so there may be errors"})]}):e(b,{}),e(l,{h:"25px"})]})},ve=()=>n(b,{children:[n(l,{px:"20px",children:[e(T,{}),e(ye,{})]}),e(M,{})]}),Fe={initialColorMode:"dark",useSystemColorMode:!1},Ne=ae({config:Fe}),ke=()=>{const[r]=O("(min-width: 1000px)"),[t]=O("(min-width: 550px)");return e(b,{children:n(l,{w:"100vw",h:"100vh",positon:"relative",children:[e(T,{}),e(o,{textAlign:"center",children:"How it works"}),n(A,{maxW:"1000px",w:"100%",m:"auto",direction:r?"row":"column",spacing:"10px",px:"20px",mt:"50px",children:[n(A,{direction:t?"row":"column",spacing:"0px",w:r?"67%":"100%",children:[n(l,{w:"100%",h:"200px",children:[e(o,{fontSize:"18px",textAlign:"center",children:"1. User Inputs Data"}),e(p,{h:"15px"}),e(R,{h:"140px",w:"140px",m:"auto",textAlign:"center",align:"center",justify:"center",children:e(le,{fontSize:"75px"})})]}),n(l,{w:"100%",h:"200px",children:[e(o,{fontSize:"18px",textAlign:"center",children:"2. Server schedules run"}),e(p,{h:"15px"}),e(R,{h:"140px",w:"140px",m:"auto",textAlign:"center",align:"center",justify:"center",children:e(ce,{fontSize:"75px"})})]})]}),n(A,{direction:t?"row":"column",spacing:"0px",w:r?"33%":"100%",children:[n(l,{w:"100%",h:"200px",children:[e(o,{fontSize:"18px",textAlign:"center",children:"3. Server executes check in"}),e(p,{h:"15px"}),e(R,{h:"140px",w:"140px",m:"auto",textAlign:"center",align:"center",justify:"center",children:e(de,{fontSize:"75px"})})]}),t&&!r?e(l,{w:"100%",h:"200px"}):e(b,{})]})]}),e(M,{})]})})},ze=()=>e(l,{transform:"rotateZ(90deg)",children:n("svg",{x:"0px",y:"0px",viewBox:"0 0 1000 1000",enableBackground:"new 0 0 1000 1000",fill:f("#C3322C","#F5C14D"),children:[e("metadata",{children:" Svg Vector Icons : http://www.onlinewebfonts.com/icon "}),e("g",{children:e("g",{transform:"translate(0.000000,511.000000) scale(0.100000,-0.100000)",children:e("path",{d:"M4892.6,4970.8c-212.8-132.7-398.2-531-529-1134.2l-52.7-244l-7.8-1044.4l-7.8-1044.4L2196.7,256.2L100-993.2v-349.4v-349.5l54.7,11.7c978,214.7,4134.7,884.4,4140.6,878.5c3.9-3.9,171.8-1731.6,236.2-2442.2c0-1.9-277.2-214.7-614.9-474.4l-614.9-470.5v-302.6c0-279.2,2-302.6,35.1-292.8c117.1,37.1,1622.3,382.6,1663.3,382.6c41,0,1546.1-345.5,1665.2-382.6c31.3-9.7,33.2,13.7,33.2,292.8v302.6l-579.8,443.1c-320.1,242.1-597.4,456.8-614.9,474.4c-31.2,29.3-27.3,97.6,80,1247.4c62.5,669.6,117.1,1220.1,121,1222.1c3.9,3.9,942.9-193.3,2086.9-439.2s2084.9-447.1,2094.7-447.1c7.8,0,13.7,156.2,13.7,347.5v347.5L7803.3,256.2L5704.7,1503.7l-7.8,1044.4l-7.8,1044.4l-50.8,240.1c-105.4,478.3-253.8,853.1-404.1,1024.9C5101.5,5007.9,5003.9,5041,4892.6,4970.8z"})})})]})});function Ce(r){const t=new Date(r);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]} ${t.getDate()}, ${t.getFullYear()}`}const Ae=({flightInfo:r})=>{console.log(r);const[t]=O("(min-width: 600px)");return e(N,{gap:t?"8px":"20px",children:r.flights.map((i,d)=>n(A,{direction:t?"row":"column",justify:"space-between",w:"100%",spacing:t?"0px":"12px",children:[n(g,{spacing:"30px",justify:"center",w:"100%",children:[e(o,{fontSize:"20px",children:i.fromCode}),e(l,{w:"30px",h:"30px",children:e(ze,{})}),e(o,{fontSize:"20px",children:i.toCode})]}),n(g,{justify:"center",w:"100%",children:[e(o,{fontSize:"16px",children:i.departureTime}),e(o,{fontSize:"16px",children:Ce(i.date)})]})]},d))})},Te=({flightInfo:r})=>r?e(b,{children:n(N,{maxW:"800px",m:"auto",spacing:"16px",align:"left",children:[e(o,{mt:"80px",textAlign:"center",children:"Success"}),e(l,{h:"30px",w:"100px"}),n(N,{spacing:"0px",children:[e(g,{w:"100%",h:"15px",bg:"#C3322C",transform:"translateY(10px)",borderTopRadius:"15px",children:e(l,{h:"100%",w:"50%",bg:"#F5C14D",borderTopLeftRadius:"15px"})}),n(l,{w:"100%",py:"20px",borderWidth:"1px",borderRadius:"15px",children:[n(o,{fontSize:"16px",mt:"10px",mb:"20px",textAlign:"center",children:[r.firstName," ",r.lastName," (",r.confirmationNumber,")"]}),e(Ae,{flightInfo:r})]})]}),r.flights.map(t=>parseFloat(t.daysUntilFlight)<0?n(o,{mt:"30px",fontSize:"16px",children:["Your flight on ",t.date," already happened."]},Math.random()):parseFloat(t.daysUntilFlight)<1?n(o,{mt:"30px",fontSize:"16px",children:["We're checking you into your flight on ",t.date," right now."]},Math.random()):n(o,{mt:"30px",fontSize:"16px",children:["You'll be checked in at ",t.checkInTime]},Math.random()))]})}):e(o,{fontSize:"24px",mt:"50px",textAlign:"center",children:"Loading Data..."});function Me(r){let t;return r||(t="This field is required"),t}const Le=({flightInfo:r})=>{const t=$();return n(N,{maxW:"500px",w:"100%",m:"auto",spacing:"24px",align:"center",p:"25px",borderWidth:"1px",borderRadius:"15px",children:[e(o,{fontSize:"xl",children:"Feedback?"}),e(l,{w:"100%",children:e(U,{initialValues:{feedback:""},onSubmit:(i,d)=>{console.log(i.feedback),d.setSubmitting(!1),fetch(`${D()}/feedback`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m(x({},i),{firstName:r.firstName,lastName:r.lastName}))}).then(s=>{d.setSubmitting(!1),d.resetForm(),t({title:"Success: Thanks for the feedback",status:"success",isClosable:!0})}).catch(s=>{console.log(s),d.setSubmitting(!1),t({title:"Error: Message not sent",status:"error",isClosable:!0})})},children:i=>n(H,{children:[e(y,{name:"feedback",validate:Me,children:({field:d,form:s})=>e(v,{isInvalid:s.errors.feedback&&s.touched.feedback,children:e(he,m(x({},d),{id:"feedback",placeholder:"Message me about feature requests, bug reports, or a story about how you found this website.",px:"10px",h:"35px",w:"100%",fontSize:"14px",_autofill:{textFillColor:f("rgb(26, 32, 44)","white"),boxShadow:"0 0 0px 1000px #00000000 inset",transition:"background-color 5000s ease-in-out 0s"}}))})}),e(p,{h:"24px"}),e(l,{align:"center",children:e(F,{type:"submit",bg:"#304BB3",color:"white",isLoading:i.isSubmitting,m:"auto",w:"150px",children:"Send Feedback"})})]})})})]})},We=()=>{const{state:r}=pe(),t=r;return n(b,{children:[n(l,{px:"20px",position:"relative",children:[e(T,{}),e(Te,{flightInfo:t}),e(p,{h:"100px"}),e(Le,{flightInfo:t})]}),e(p,{h:"100px"}),e(M,{})]})};function j(r){let t=r[0].toUpperCase();for(const i of r.substring(1))t+="*";return t}async function Be(){return(await fetch(`${D()}/upcoming-flights`)).json()}const Re=()=>{const[r,t]=S.exports.useState([]);return S.exports.useEffect(async()=>{const i=await Be();i&&t(i)},[]),e(b,{children:n(l,{w:"100vw",h:"100vh",positon:"relative",children:[e(T,{}),e(o,{textAlign:"center",children:"Upcoming Flights"}),e(N,{h:"60px",maxW:"500px",m:"auto",px:"10px",mt:"30px",children:r.map((i,d)=>(j(i.firstName),n(g,{h:"30px",w:"100%",children:[e(o,{fontSize:"sm",children:i.date}),e(o,{fontSize:"sm",children:i.departureTime}),e(o,{fontSize:"sm",children:i.departureTimezone}),e(o,{fontSize:"sm",children:j(i.firstName)}),e(o,{fontSize:"sm",children:j(i.lastName)}),e(o,{fontSize:"sm",children:i.confirmationNumber})]},d)))}),e(M,{})]})})};ue.render(e(xe.StrictMode,{children:e(me,{theme:Ne,children:e(fe,{children:n(ge,{children:[e(C,{path:"/",element:e(ve,{})}),e(C,{path:"/success",element:e(We,{})}),e(C,{path:"/about",element:e(ke,{})}),e(C,{path:"/upcoming-flights",element:e(Re,{})})]})})})}),document.getElementById("root"));

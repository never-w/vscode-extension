var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,c=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&o(e,a,t[a]);if(n)for(var a of n(t))s.call(t,a)&&o(e,a,t[a]);return e},l=(e,n)=>t(e,a(n)),i=(e,t)=>{var a={};for(var o in e)r.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&n)for(var o of n(e))t.indexOf(o)<0&&s.call(e,o)&&(a[o]=e[o]);return a};import{r as m,u as d,g as p,R as u,C as y,T as E,a as _,b as f,c as h,S as v,I as g,d as b,e as x,m as w,f as N,h as k,i as O,j as S,B as C,M as I,P as R,k as T,D as j,l as B,_ as $,s as D,n as L,o as P}from"./vendor.08742712.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var q="_sidebar_18c3c_1",A="_main_18c3c_17",M="_operationItem_18c3c_23",K="_active_18c3c_34",z="_topBtn_18c3c_38",F="_show_18c3c_51",G="_operationList_18c3c_56",Q="_copyBtn_18c3c_59",U="_deprecated_18c3c_68",V="_warning_18c3c_71",W="_icon_color_18c3c_74",H="_search_18c3c_77",J="_collapse_active_18c3c_80",X="_collapse_box_18c3c_86",Y="_wrapper_search_18c3c_92";var Z=m.exports.memo((({keyword:e,activeItemKey:t,onKeywordChange:a,operations:n,onSelect:r,selectedOperationId:s,setActiveItemKey:o,onBtnClick:c})=>{const[l,i]=m.exports.useState(0),[N,k]=m.exports.useState(!1),O=d((e=>{i(e.nativeEvent.target.scrollTop)}),{wait:300}),S=m.exports.useMemo((()=>p(n)),[n]),[C,I]=m.exports.useState([""]);m.exports.useEffect((()=>{const e=[];Object.entries(S).some((([t,a])=>{a.some((e=>e.operationType+e.name===s))&&e.push(t)})),I(e),o(s)}),[s]);const R=m.exports.useMemo((()=>Object.entries(S).map((([a,n])=>{let s=n;const c=new RegExp(e,"i");return c.test(a)||e.trim()&&(s=n.filter((e=>c.test(e.name)||c.test(e.description||"")||e.args.some((e=>c.test(e.type.name)))||c.test(e.output.name)))),s.length?u.createElement(y.Panel,{key:a,header:a,className:C.includes(a)?J:""},u.createElement("div",{className:G},u.createElement(E,{title:"Copy GQL"},u.createElement(_,{id:a,"data-clipboard-text":f(a,s),className:Q,onClick:()=>{(e=>{const t=new x(e);t.on("success",(()=>{w.success("success"),t.destroy()})),t.on("error",(()=>{w.error("failed"),t.destroy()}))})(`#${a}`)}})),s.map(((e,a)=>{const n=e.deprecationReason;return u.createElement("div",{key:a,className:h(M,{[K]:e.operationType+e.name===t}),onClick:()=>{r(e),o(e.operationType+e.name)}},u.createElement("div",{className:h({[U]:!!n})},u.createElement(v,{direction:"vertical"},e.description||e.name,!!n&&u.createElement("span",{className:V},n))))})))):null}))),[S,e,r,t,C]);return u.createElement("div",{className:q},u.createElement("div",{className:Y},u.createElement(g,{className:H,onFocus:()=>{k(!0)},onBlur:()=>{k(!1)},suffix:u.createElement(b,{className:N?W:""}),size:"large",placeholder:"Search by group/desc/name/type",onChange:e=>{a(e.target.value)},value:e})),u.createElement("div",{className:A,id:"sideBar",onScroll:O.run},u.createElement(y,{className:X,bordered:!1,activeKey:C,onChange:e=>{Array.isArray(e)&&I(e)}},R)),u.createElement(E,{title:"reload doc"},u.createElement("div",{onClick:c,style:{bottom:150},className:h(z,F)},u.createElement("img",{src:"https://pic.imgdb.cn/item/63d72e6eface21e9ef36b62f.png",alt:"刷新文档"}))),u.createElement(E,{title:"Collapse all"},u.createElement("div",{style:{bottom:100},className:h(z,{[F]:C.length}),onClick:()=>{I([])}},u.createElement("img",{src:"https://pic.imgdb.cn/item/63d72e52face21e9ef367a25.png",alt:"全部收集图片"}))),u.createElement(E,{title:"Back to top"},u.createElement("div",{className:h(z,{[F]:l>700}),onClick:()=>{var e;null==(e=document.getElementById("sideBar"))||e.scrollTo(0,0)}},u.createElement("img",{src:"https://pic.imgdb.cn/item/63d72e7fface21e9ef36d8ed.png",alt:"返回顶部图片"}))))}));const ee="http://localhost:9400",te=N((e=>({port:9400,operations:[],IpAddress:"",isDisplaySidebar:!0,fetchOperations:()=>new Promise((t=>{fetch(`${ee}/operations`).then((e=>e.json())).then((a=>{e({operations:a}),t(!0)}))})),setState:e,fetchIp:()=>new Promise((t=>{fetch(`${ee}/ip`).then((e=>e.json())).then((a=>{e(a),t(!0)}))})),reloadOperations:()=>new Promise((t=>{fetch(`${ee}/operations`).then((e=>e.json())).then((a=>{e({operations:a}),t(!0)}))}))})));var ae="_operationDoc_1faqc_1",ne="_name_1faqc_26",re="_copyBtn_1faqc_38",se="_deprecated_1faqc_45",oe="_warning_1faqc_48",ce="_table_1faqc_51",le="_operationName_1faqc_54",ie="_text_1faqc_57",me="_divider_1faqc_60",de="_paramsText_1faqc_63";const pe=(e,t="")=>e.map((e=>{var a=e,{type:n}=a,r=i(a,["type"]);const s=`${t}${r.name}`;let o=[];switch(n.kind){case"Scalar":o=null;break;case"InputObject":o=pe(n.fields,s);break;case"Enum":o=n.values.map((e=>({key:s+e.value,name:e.name,type:"",defaultValue:e.value,description:e.description,deprecationReason:e.deprecationReason,children:null})))}return l(c({},r),{key:s,type:n.name,children:o})})),ue=(e,t="")=>e.map((e=>{var a=e,{output:n}=a,r=i(a,["output"]);const s=`${t}${r.name}`;let o=[];switch(n.kind){case"Scalar":o=[];break;case"Object":o=ue(n.fields,s);break;case"Enum":o=n.values.map((e=>({key:s+e.value,name:e.name,type:"",defaultValue:e.value,description:e.description,deprecationReason:e.deprecationReason,children:null})));break;case"Union":n.types.forEach((e=>{o=[...o||[],...ue(e.fields,s)]}))}return l(c({},r),{key:s,defaultValue:null,type:n.name,children:o.length>0?o:null})})),ye=e=>[{title:"Name",dataIndex:"name",width:"35%",render:(e,t)=>t.deprecationReason?u.createElement("span",{className:se},e):e},{title:"Description",dataIndex:"description",width:"25%",render(e,t){const a=t.deprecationReason;return a?u.createElement(u.Fragment,null,e,u.createElement("span",{className:oe},a)):e}},{title:"arguments"===e?"Required":"Nullable",dataIndex:"type",width:"20%",render(t){let a=!(null==t?void 0:t.endsWith("!"));return"arguments"===e&&(a=!!(null==t?void 0:t.endsWith("!"))),!0===a?u.createElement(O,{style:{borderRadius:4},color:"success"},"True"):u.createElement(O,{style:{borderRadius:4},color:"error"},"False")}},{title:"Type",dataIndex:"type",width:"20%",render:e=>(null==e?void 0:e.endsWith("!"))?e.slice(0,e.length-1):e}],Ee=({operation:e})=>{const{IpAddress:t,isDisplaySidebar:a,setState:n,port:r}=te((e=>e)),[s,{toggle:o}]=k("TABLE","EDITOR"),c=m.exports.useMemo((()=>pe(e.args)),[e.args]),l=m.exports.useMemo((()=>ye("arguments")),[e]),i=m.exports.useMemo((()=>ue([e])),[e]),d=m.exports.useMemo((()=>ye("return")),[e]),p=m.exports.useMemo((()=>S(e)),[e]);return u.createElement(v,{id:e.name,className:ae,direction:"vertical"},u.createElement("div",{className:ne},u.createElement(v,{size:40},u.createElement("span",null,"Operation name:",u.createElement("span",{className:le},` ${e.name}`)),u.createElement("span",null,"Operation type:",u.createElement("span",{className:le},` ${e.operationType}`))),u.createElement(v,{size:88},u.createElement(E,{title:"Hide Sidebar"},u.createElement(C,{type:"text",onClick:()=>{n({isDisplaySidebar:!a})}},u.createElement(v,{id:"sidebar","data-clipboard-text":p,className:re},u.createElement(I,null),u.createElement("span",{className:ie},"Hide Sidebar")))),u.createElement(E,{title:"Copy GQL"},u.createElement(v,{id:"copy","data-clipboard-text":p,className:re,onClick:()=>{(e=>{const t=new x(e);t.on("success",(()=>{w.success("success"),t.destroy()})),t.on("error",(()=>{w.error("failed"),t.destroy()}))})("#copy")}},u.createElement(_,null),u.createElement("span",{className:ie},"Copy GQL"))),u.createElement(E,{title:"Debug"},u.createElement("a",{target:"view_window",href:`http://${t}:${r}/playground?operationName=${encodeURIComponent(e.name)}&operationType=${encodeURIComponent(e.operationType)}`},u.createElement(v,{className:re},u.createElement(R,null),u.createElement("span",{className:ie},"Debug")))),u.createElement(T,{size:"default",checked:"EDITOR"===s,checkedChildren:"editor",unCheckedChildren:"table",onChange:()=>{o()}}))),!!c.length&&u.createElement(u.Fragment,null,u.createElement(j,{className:me}),u.createElement("div",{className:de},"Params: "),"TABLE"===s?u.createElement(B,{columns:l,defaultExpandAllRows:!0,className:ce,dataSource:c,pagination:!1,bordered:!0}):u.createElement($,{theme:"tomorrow",mode:"javascript",width:"100%",readOnly:!0,maxLines:1/0,value:D(e.argsExample)})),u.createElement("div",null,"Response: "),"TABLE"===s?u.createElement(B,{columns:d,defaultExpandAllRows:!0,className:ce,dataSource:i,pagination:!1,bordered:!0}):u.createElement($,{theme:"tomorrow",mode:"javascript",width:"100%",readOnly:!0,maxLines:1/0,value:D(e.outputExample),editorProps:{$blockScrolling:!1}}))};var _e=m.exports.memo((({operation:e})=>m.exports.useMemo((()=>e?u.createElement(Ee,{operation:e}):null),[e])));const fe=()=>{var e,t;const{operations:a,fetchOperations:n,reloadOperations:r,isDisplaySidebar:s,fetchIp:o}=te((e=>e)),[c,l]=m.exports.useState(null),[i,d]=m.exports.useState(""),[p,y]=m.exports.useState(!1),[E,_]=m.exports.useState(""),f=E||(null==(e=a[0])?void 0:e.operationType)+(null==(t=a[0])?void 0:t.name),h=m.exports.useCallback((e=>{l(e)}),[]);m.exports.useMemo((async()=>{y(!0),await n(),await o(),y(!1)}),[]),m.exports.useEffect((()=>{const e=a.find((e=>(null==e?void 0:e.operationType)+(null==e?void 0:e.name)===f));l(e)}),[a]);return u.createElement("div",null,u.createElement(L,{spinning:p},u.createElement("div",{style:{display:"flex",flexDirection:"row"}},u.createElement("div",{style:{display:s?"block":"none"}},u.createElement(Z,{onBtnClick:async()=>{y(!0),await r(),y(!1)},activeItemKey:E,setActiveItemKey:_,operations:a,keyword:i,selectedOperationId:f,onSelect:h,onKeywordChange:d})),u.createElement(_e,{key:f,operation:c}))))};P.render(u.createElement(fe,null),document.getElementById("root"));

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./axe-BOu-GoOy.js","./_commonjsHelpers-BosuxZz1.js"])))=>i.map(i=>d[i]);
import{_ as N}from"./iframe-MNgY_4AX.js";import"../sb-preview/runtime.js";const{global:d}=__STORYBOOK_MODULE_GLOBAL__,{addons:y}=__STORYBOOK_MODULE_PREVIEW_API__;var n="storybook/a11y",T=`${n}/result`,w=`${n}/request`,U=`${n}/running`,g=`${n}/error`,p=`${n}/manual`,a={RESULT:T,REQUEST:w,RUNNING:U,ERROR:g,MANUAL:p},{document:L,window:v}=d,r=y.getChannel(),o=!1,_,A=async t=>{let{manual:e}=await O(t);e||await l(t)},l=async t=>{_=t;try{let e=await O(t);if(!o){o=!0,r.emit(a.RUNNING);let i=(await N(async()=>{const{default:S}=await import("./axe-BOu-GoOy.js").then(f=>f.a);return{default:S}},__vite__mapDeps([0,1]),import.meta.url)).default,{element:R="#storybook-root",config:u,options:E={}}=e,s=L.querySelector(R);if(!s)return;i.reset(),u&&i.configure(u);let c=await i.run(s,E),m=JSON.parse(JSON.stringify(c));_===t?r.emit(a.RESULT,m):(o=!1,l(_))}}catch(e){r.emit(a.ERROR,e)}finally{o=!1}},O=async t=>{let{parameters:e}=await v.__STORYBOOK_STORY_STORE__.loadStory({storyId:t})||{};return e.a11y||{config:{},options:{}}};r.on(a.REQUEST,A);r.on(a.MANUAL,l);

import{j as k,a as s,c as fe}from"./index-Zi3BSDNR.js";import{r as S}from"./index-CBqU2yxZ.js";import{E as me}from"./icon-button-D1EnRjWI.js";function ke(t){const i=new Intl.Locale(t);return i.weekInfo?i.weekInfo.firstDay:0}function qe(t){const i=ke(t),u=new Intl.DateTimeFormat(t,{weekday:"short"}),c=new Date(2022,9,2+i),C=[...Array(7)].map(()=>{const _=u.format(c);return c.setDate(c.getDate()+1),_});return{firstDayOfWeek:i,weekdayLabels:C}}function Me(t){if(t)return/^\d\d\d\d-\d\d-\d\d$/g.test(t)?t:f(new Date(t))}function f(t){if(!isNaN(t.getTime()))return t.toISOString().slice(0,10)}function q(t){return new Date(t)}function G(t,i){const u=q(t);return u.setUTCDate(u.getUTCDate()+i),f(u)}function ye(t){return t||navigator.language}const Ce={ArrowRight:1,ArrowLeft:-1,ArrowDown:7,ArrowUp:-7},Re=({selected:t,numMonths:i=1,navigable:u,interactive:c,range:C,locale:_,disableBefore:p,disableAfter:g,disableWeekdays:J,disableList:Q,a11ySelectedText:pe="selected",a11yRangeStartText:ge="start of range",a11yInRangeText:be="in range",a11yRangeEndText:he="end of range",a11ySeparator:X="-",a11yTodayText:Te="today",a11yDisabledText:ve="inactive",getA11yShowMonthText:Z=I=>`Show ${I}`,linkBuilder:ee,onMonthChange:ne=()=>{},onFocus:De=()=>{},onSelect:Se=()=>{}})=>{const I=f(new Date),{firstDayOfWeek:Ie,weekdayLabels:we}=qe(ye(_)),te=S.useRef(null),[m,A]=S.useState(0),[ae,re]=S.useState(null),[b,O]=S.useState(I),U=S.useRef(I),h=e=>{const n=q(U.current);return new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth()+e))},T=()=>f(h(m)),v=()=>{const e=q(U.current);return f(new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth()+m+(i||1),0)))};S.useEffect(()=>{if(t){const e=Array.isArray(t)?t:[t],n=T(),a=v();e.find(d=>d>=n&&d<=a)===void 0&&(U.current=e[0],A(0))}},[t]);const _e=()=>{if(t&&C){let e,n;if(Array.isArray(t)?[e,n]=t:ae&&(e=t,n=ae),e&&n){const[a,r]=[e,n].sort();return{rangeStart:a,rangeEnd:r}}}return{rangeStart:null,rangeEnd:null}},V=e=>new Intl.DateTimeFormat(ye(_),{month:"long",year:"numeric"}).format(new Date(e.getUTCFullYear(),e.getUTCMonth())),$=e=>p&&e<p||g&&e>g||J&&J.includes(q(e).getUTCDay())||Q&&Q.includes(e),se=()=>{let e=T();const n=v();for(;e<=n&&$(e);)e=G(e,1);return e>n?null:e},le=()=>{let e=v();const n=T();for(;e>=n&&$(e);)e=G(e,-1);return e<n?null:e},w=e=>{O(e),setTimeout(()=>{var a;const n=(a=te.current)==null?void 0:a.querySelector(`[data-iso="${e}"]`);n==null||n.focus()})},F=e=>{if(p&&T()<=p)return!1;A(r=>r-1);let n=b;const a=le();return a&&a<b&&(n=a,O(a)),e&&w(n),ne({iso:f(h(m))}),!0},M=e=>{if(g&&v()>=g)return!1;A(r=>r+1);let n=b;const a=se();a&&a>b&&(n=a,O(a)),e&&w(n),ne({iso:f(h(m+(i||1)))})},Oe=e=>{const n=Ce[e.key];if(n){e.preventDefault();let a=7,r=b;do r=G(r,n);while(a-- >0&&$(r));if(a>0){const d=T(),D=v();r<d?u?F():r=d:r>D&&(u?M():r=D),w(r)}}else switch(e.key){case"PageUp":F(!0);break;case"PageDown":M(!0);break;case"Home":w(se());break;case"End":w(le());break}},Ve=(e,n)=>{Se(e,{iso:n})},ie=(e,n)=>{re(n),O(n),De(e,{iso:n})},oe=()=>{re(null)},{rangeStart:R,rangeEnd:N}=_e(),$e=e=>!(!R||!N||e<R||e>N),ue=[...Array(i)].map((e,n)=>h(m+n));return k("div",{className:"calendar",ref:te,children:[u&&s("div",{className:"calendar__header",children:k("div",{className:"calendar__header--inner",children:[s(me,{transparent:!0,size:"small",icon:"chevronLeft24",disabled:p&&T()<=p,"aria-label":Z(V(h(m-1))),onClick:()=>F()}),ue.map((e,n)=>s("h3",{children:V(e)},n)),s(me,{transparent:!0,size:"small",icon:"chevronRight24",disabled:g&&v()>=g,"aria-label":Z(V(h(m+i))),onClick:()=>M()})]})}),s("div",{className:"calendar__body",children:ue.map((e,n)=>{const a=(e.getUTCDay()-Ie+7)%7,r=e.getUTCFullYear(),d=e.getUTCMonth(),D=new Date(r,d+1,0).getDate(),Ee=[...Array(Math.ceil((a+D)/7))];return s("div",{className:"calendar__month",children:k("table",{onKeyDown:Oe,children:[s("caption",{children:V(e)}),s("thead",{children:s("tr",{children:we.map(L=>s("th",{scope:"col",children:L},L))})}),s("tbody",{children:Ee.map((L,Y)=>{let j=Y*7-a+1,W=j+6;const P=[];Y===0&&a!==0?(j=1,P.push(s("td",{colSpan:a},"pre-column"))):W>D&&(W=D);for(let y=j;y<=W;y++){const l=f(new Date(Date.UTC(r,d,y))),K=l===I,z=Array.isArray(t)?t.some(o=>o===l):t===l,B=l===R,ce=$e(l),H=l===N,E=$(l),x=["",z&&pe,B&&ge,!B&&!H&&ce&&be,H&&he,!c&&K&&Te,!c&&E&&ve].filter(o=>typeof o!="boolean"||o!==!1),de=!c&&!E&&ee&&ee(l),xe=de?"a":"span";P.push(s("td",{className:fe({"calendar__cell--selected":z,"calendar__range--start":B,calendar__range:ce,"calendar__range--end":H}),children:c?s("button",{disabled:E,"aria-label":x.length>1?`${y}${x.join(X)}`:void 0,tabIndex:b!==l?-1:void 0,"aria-current":K?"date":void 0,"aria-pressed":z?"true":void 0,onClick:o=>Ve(o,l),onFocus:o=>ie(o,l),onMouseOver:o=>ie(o,l),onMouseOut:o=>oe(),onBlur:()=>oe(),"data-iso":l,children:y}):k(xe,{className:fe({"calendar__cell--disabled":E,"calendar__cell--current":K}),href:de,children:[y,x.length>1&&s("span",{className:"clipped",children:x.join(X)})]})},y))}return s("tr",{children:P},Y)})})]})},n)})})]})};try{calendar.displayName="calendar",calendar.__docgenInfo={description:"",displayName:"calendar",props:{selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"`${number}-${number}-${number}` | `${number}-${number}-${number}`[]"}},numMonths:{defaultValue:{value:"1"},description:"",name:"numMonths",required:!1,type:{name:"number"}},navigable:{defaultValue:null,description:"",name:"navigable",required:!1,type:{name:"boolean"}},interactive:{defaultValue:null,description:"",name:"interactive",required:!1,type:{name:"boolean"}},range:{defaultValue:null,description:"",name:"range",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"string"}},disableBefore:{defaultValue:null,description:"",name:"disableBefore",required:!1,type:{name:"`${number}-${number}-${number}`"}},disableAfter:{defaultValue:null,description:"",name:"disableAfter",required:!1,type:{name:"`${number}-${number}-${number}`"}},disableWeekdays:{defaultValue:null,description:"",name:"disableWeekdays",required:!1,type:{name:"number[]"}},disableList:{defaultValue:null,description:"",name:"disableList",required:!1,type:{name:"`${number}-${number}-${number}`[]"}},getA11yShowMonthText:{defaultValue:{value:"(monthTitle) => `Show ${monthTitle}`"},description:"",name:"getA11yShowMonthText",required:!1,type:{name:"(monthTitle: string) => string"}},a11ySelectedText:{defaultValue:{value:"selected"},description:"",name:"a11ySelectedText",required:!1,type:{name:"string"}},a11yRangeStartText:{defaultValue:{value:"start of range"},description:"",name:"a11yRangeStartText",required:!1,type:{name:"string"}},a11yInRangeText:{defaultValue:{value:"in range"},description:"",name:"a11yInRangeText",required:!1,type:{name:"string"}},a11yRangeEndText:{defaultValue:{value:"end of range"},description:"",name:"a11yRangeEndText",required:!1,type:{name:"string"}},a11ySeparator:{defaultValue:{value:"-"},description:"",name:"a11ySeparator",required:!1,type:{name:"string"}},a11yTodayText:{defaultValue:{value:"today"},description:"",name:"a11yTodayText",required:!1,type:{name:"string"}},a11yDisabledText:{defaultValue:{value:"inactive"},description:"",name:"a11yDisabledText",required:!1,type:{name:"string"}},linkBuilder:{defaultValue:null,description:"",name:"linkBuilder",required:!1,type:{name:"(iso: `${number}-${number}-${number}`) => string"}},onMonthChange:{defaultValue:{value:"() => {}"},description:"",name:"onMonthChange",required:!1,type:{name:"({ iso }: { iso: `${number}-${number}-${number}`; }) => void"}},onFocus:{defaultValue:{value:"() => {}"},description:"",name:"onFocus",required:!1,type:{name:"(event: KeyboardEvent<Element> | MouseEvent<Element, MouseEvent> | FocusEvent<Element, Element>, { iso }: { ...; }) => void"}},onSelect:{defaultValue:{value:"() => {}"},description:"",name:"onSelect",required:!1,type:{name:"(event: MouseEvent<Element, MouseEvent>, { iso }: { iso: `${number}-${number}-${number}`; }) => void"}}}}}catch{}export{Re as E,Me as d,f as t};

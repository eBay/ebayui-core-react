import{j as X,c as fe,a as s,F as ge}from"./index-Zi3BSDNR.js";import{r as l}from"./index-CBqU2yxZ.js";import{s as E,u as ye}from"./dropdown-EYwX6TfS.js";import{d as L,E as be,t as Ee}from"./calendar-tp1pdlYp.js";import{E as H,b as ve,i as B}from"./textbox-BiAC2KDV.js";import{E as he}from"./button-Iud0aQF-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./index-_o4FI5ZO.js";import"./icon-button-19xYB39V.js";import"./icon-S_N4nbt1.js";import"./array.polyfill.flat-Bi5PA14F.js";import"./badge-Czki0tyX.js";import"./utils-nTRqQIe7.js";import"./hooks-CxrULycr.js";import"./progress-spinner-Bd9WKbVe.js";var P,w;const{default:xe=E}=(w=(P=E)==null?void 0:P.default)!=null&&w.__esModule?E.default:E,Se=600,Z=({className:p,inputPlaceholderText:d="YYYY-MM-DD",a11yOpenPopoverText:V="open calendar",range:r,value:C,rangeEnd:T,defaultValue:m,defaultRangeEnd:q,collapseOnSelect:ee,onChange:f=()=>{},onInputChange:ne=()=>{},onInputRangeEndChange:ae=()=>{},...te})=>{const I=l.useRef(),[re,i]=l.useState(m||""),[le,c]=l.useState(q||""),O=B(C)?C:re,_=B(T)?T:le,[o,g]=l.useState(()=>L(O)),[u,y]=l.useState(()=>L(_)),[R,$]=l.useState(!1),[se,oe]=l.useState(1),{overlayStyles:ue,refs:M}=ye({open:R}),b=M.host,de=()=>{$(!0)},ie=()=>{$(!1)};l.useEffect(()=>{if(!b.current)return;I.current=new xe(b.current,{hostSelector:".ebay-date-textbox--main > .icon-btn",contentSelector:".date-textbox__popover",expandOnClick:!0,autoCollapse:!0}),b.current.addEventListener("expander-expand",de),b.current.addEventListener("expander-collapse",ie);const e=()=>{oe(document.documentElement.clientWidth<Se?1:2)};return e(),window.addEventListener("resize",e),()=>{var n;(n=I.current)==null||n.destroy(),window.removeEventListener("resize",e)}},[]);const D=(e,n)=>{const t=new Date(e.target.value),a=isNaN(t.getTime())?null:Ee(t);n===0?(g(a),i(a||"")):(y(a),c(a||"")),r?f(e,{rangeStart:n===0?a:o,rangeEnd:n===1?a:u}):f(e,{selected:a})},ce=(e,{iso:n})=>{if(g(n),i(n),r){const t=o||u,a={rangeStart:n,rangeEnd:t};o&&u?(c(""),y(null),a.rangeEnd=null):t&&(t<n?(g(t),i(t),c(n),y(n),a.rangeStart=t,a.rangeEnd=n):(g(n),i(n),c(t),y(t),a.rangeStart=n,a.rangeEnd=t)),f(e,a)}else f(e,{selected:n});ee&&(I.current.expanded=!1)},N=(e,n)=>{n===0?(i(e.target.value),ne(e)):(c(e.target.value),ae(e))},[pe,me]=Array.isArray(d)?d:[d,d];return X("span",{className:fe("date-textbox",p),ref:M.setHost,children:[r&&s(H,{value:O,placeholder:pe,onInputChange:e=>N(e,0),onBlur:e=>D(e,0)}),s(H,{className:"ebay-date-textbox--main",placeholder:me,value:r?_:O,onInputChange:e=>N(e,r?1:0),onBlur:e=>D(e,r?1:0),children:s(ve,{name:"calendar24",buttonAriaLabel:V})}),s("div",{hidden:!R,ref:M.setOverlay,style:ue,className:"date-textbox__popover",children:s(be,{...te,range:r,interactive:!0,navigable:!0,numMonths:se,selected:o&&u?[o,u]:o||u||void 0,onSelect:ce})})]})};try{datetextbox.displayName="datetextbox",datetextbox.__docgenInfo={description:"",displayName:"datetextbox",props:{onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: KeyboardEvent<Element> | MouseEvent<Element, MouseEvent> | FocusEvent<Element, Element>, { iso }: { ...; }) => void"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(event: MouseEvent<Element, MouseEvent>, { iso }: { iso: `${number}-${number}-${number}`; }) => void"}},range:{defaultValue:null,description:"",name:"range",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"string"}},disableBefore:{defaultValue:null,description:"",name:"disableBefore",required:!1,type:{name:"`${number}-${number}-${number}`"}},disableAfter:{defaultValue:null,description:"",name:"disableAfter",required:!1,type:{name:"`${number}-${number}-${number}`"}},disableWeekdays:{defaultValue:null,description:"",name:"disableWeekdays",required:!1,type:{name:"number[]"}},disableList:{defaultValue:null,description:"",name:"disableList",required:!1,type:{name:"`${number}-${number}-${number}`[]"}},getA11yShowMonthText:{defaultValue:null,description:"",name:"getA11yShowMonthText",required:!1,type:{name:"(monthTitle: string) => string"}},a11ySelectedText:{defaultValue:null,description:"",name:"a11ySelectedText",required:!1,type:{name:"string"}},a11yRangeStartText:{defaultValue:null,description:"",name:"a11yRangeStartText",required:!1,type:{name:"string"}},a11yInRangeText:{defaultValue:null,description:"",name:"a11yInRangeText",required:!1,type:{name:"string"}},a11yRangeEndText:{defaultValue:null,description:"",name:"a11yRangeEndText",required:!1,type:{name:"string"}},a11ySeparator:{defaultValue:null,description:"",name:"a11ySeparator",required:!1,type:{name:"string"}},a11yTodayText:{defaultValue:null,description:"",name:"a11yTodayText",required:!1,type:{name:"string"}},a11yDisabledText:{defaultValue:null,description:"",name:"a11yDisabledText",required:!1,type:{name:"string"}},linkBuilder:{defaultValue:null,description:"",name:"linkBuilder",required:!1,type:{name:"(iso: `${number}-${number}-${number}`) => string"}},onMonthChange:{defaultValue:null,description:"",name:"onMonthChange",required:!1,type:{name:"({ iso }: { iso: `${number}-${number}-${number}`; }) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},rangeEnd:{defaultValue:null,description:"",name:"rangeEnd",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},defaultRangeEnd:{defaultValue:null,description:"",name:"defaultRangeEnd",required:!1,type:{name:"string"}},collapseOnSelect:{defaultValue:null,description:"",name:"collapseOnSelect",required:!1,type:{name:"boolean"}},inputPlaceholderText:{defaultValue:{value:"YYYY-MM-DD"},description:"",name:"inputPlaceholderText",required:!1,type:{name:"string | string[]"}},a11yOpenPopoverText:{defaultValue:{value:"open calendar"},description:"",name:"a11yOpenPopoverText",required:!1,type:{name:"string"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"EbayChangeEventHandler<HTMLInputElement, EventData> & EbayMouseEventHandler<HTMLInputElement, EventData> & EbayFocusEventHandler<...>"}},onInputChange:{defaultValue:{value:"() => {}"},description:"",name:"onInputChange",required:!1,type:{name:"EbayChangeEventHandler<HTMLInputElement, Record<string, any>>"}},onInputRangeEndChange:{defaultValue:{value:"() => {}"},description:"",name:"onInputRangeEndChange",required:!1,type:{name:"EbayChangeEventHandler<HTMLInputElement, Record<string, any>>"}}}}}catch{}const we={component:Z,title:"form input/ebay-date-textbox"},v={},h={args:{range:!0}},x={args:{collapseOnSelect:!0}},S=p=>s(()=>{const[V,r]=l.useState("");return X(ge,{children:[s(Z,{value:V,onChange:(m,{selected:q})=>{r(q||"")},onInputChange:m=>{r(m.target.value)},...p}),s("div",{style:{marginTop:16},children:s(he,{onClick:()=>r("2024-01-03"),children:"Set to 2024-01-03"})})]})},{});var A,F,Y;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(Y=(F=v.parameters)==null?void 0:F.docs)==null?void 0:Y.source}}};var k,W,j;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    range: true
  }
}`,...(j=(W=h.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var z,K,U;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    collapseOnSelect: true
  }
}`,...(U=(K=x.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var G,J,Q;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const Component = () => {
    const [value, setValue] = useState('');
    const handleOnChange = (event, {
      selected
    }) => {
      setValue(selected || '');
    };
    const handleOnInputChange = event => {
      setValue(event.target.value);
    };
    return <>
                <EbayDateTextbox value={value} onChange={handleOnChange} onInputChange={handleOnInputChange} {...args} />
                <div style={{
        marginTop: 16
      }}>
                    <EbayButton onClick={() => setValue('2024-01-03')}>Set to 2024-01-03</EbayButton>
                </div>
            </>;
  };
  return <Component />;
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Ae=["Default","Range","CollpaseOnSelect","ControlledValues"];export{x as CollpaseOnSelect,S as ControlledValues,v as Default,h as Range,Ae as __namedExportsOrder,we as default};

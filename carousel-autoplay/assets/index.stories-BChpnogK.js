import{j as te,c as xe,a as u,F as ge}from"./index-Zi3BSDNR.js";import{r as l}from"./index-CBqU2yxZ.js";import{d as A,E as Le,t as ye}from"./calendar-B-BHg-HG.js";import{E as H,b as Ce,i as $}from"./textbox-B_RmNoL_.js";import"./hooks-Dbuzk741.js";import{u as _e}from"./dropdown-zFdEgwiO.js";import{E as Oe}from"./button-CGm5CddV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-button-DeZU4N35.js";import"./icon-Uz9PhjYg.js";import"./array.polyfill.flat-BmqK6--B.js";import"./badge-OaR5SFvt.js";import"./utils-D-SRVgju.js";import"./index-BtM5VmRH.js";import"./progress-spinner-DtXuvVH2.js";const M={},Se="nid",ke=Fe(3);function W(t){return Math.floor(Math.random()*t)}function Fe(t){const e="abcdefghijklmnopqrstuvwxyz",s=e+"0123456789";let d=e[W(25)];for(let c=1;c<t;c++)d+=s[W(35)];return d}function ne(t,e=Se){const s=`${e}${e===""?"":"-"}${ke}`;return M[s]=M[s]||0,t.id||t.setAttribute("id",`${s}-${M[s]++}`),t.id}const R={};function se(t,e,a){t.dispatchEvent(new CustomEvent("focusExit",{detail:{fromElement:e,toElement:a},bubbles:!1}))}function Te(t){const e=t.target;this.el.contains(e)===!0?this.currentFocusElement=e:(window.removeEventListener("blur",this.onWindowBlurListener),document.removeEventListener("focusin",this.onDocumentFocusInListener),se(this.el,this.currentFocusElement,e),this.currentFocusElement=null)}function Me(){se(this.el,this.currentFocusElement,void 0)}function we(){document.addEventListener("focusin",this.onDocumentFocusInListener),window.addEventListener("blur",this.onWindowBlurListener)}class De{constructor(e){this.el=e,this.currentFocusElement=null,this.onWidgetFocusInListener=we.bind(this),this.onDocumentFocusInListener=Te.bind(this),this.onWindowBlurListener=Me.bind(this),this.el.addEventListener("focusin",this.onWidgetFocusInListener)}removeEventListeners(){window.removeEventListener("blur",this.onWindowBlurListener),document.removeEventListener("focusin",this.onDocumentFocusInListener),this.el.removeEventListener("focusin",this.onWidgetFocusInListener)}}function Ie(t){let e=null;return ne(t),R[t.id]||(e=new De(t),R[t.id]=e),e}const Ve=["a[href]","area[href]","button:not([disabled])","embed","iframe","input:not([disabled])","object","select:not([disabled])","textarea:not([disabled])","*[tabindex]","*[contenteditable]"],qe=Ve.join();function B(t,e=!1,a){return Ae(t,e)}function Ae(t,e=!1){let a=Array.prototype.slice.call(t.querySelectorAll(qe));return a=a.filter(function(s){return window.getComputedStyle(s).display!=="none"}),e===!0&&(a=a.filter(function(s){return s.getAttribute("tabindex")!=="-1"})),a}const He={alwaysDoFocusManagement:!1,ariaControls:!0,autoCollapse:!1,collapseOnFocusOut:!1,collapseOnMouseOut:!1,collapseOnClickOut:!1,contentSelector:".expander__content",expandedClass:null,expandOnClick:!1,expandOnFocus:!1,expandOnHover:!1,focusManagement:null,hostSelector:".expander__host",simulateSpacebarClick:!1};function $e(t){(t.keyCode===13||t.keyCode===32)&&(this._keyboardClickFlag=!0),t.keyCode===32&&this.options.simulateSpacebarClick===!0&&this.hostEl.click()}function We(){this._mouseClickFlag=!0}function Re(){this._expandWasKeyboardClickActivated=this._keyboardClickFlag,this._expandWasMouseClickActivated=this._mouseClickFlag,this.expanded=!this.expanded}function Be(){this._expandWasFocusActivated=!0,this.expanded=!0}function Ne(){clearTimeout(this._mouseLeft),this._expandWasHoverActivated=!0,this.expanded=!0}function Pe(){this.expanded=!1}function Ke(){clearTimeout(this._mouseLeft),this._mouseLeft=setTimeout(()=>{this.expanded=!1},300)}function Ye(t){this.el.contains(t.target)===!1&&(this.expanded=!1)}function je(){this.documentClick=!0}function ze(){this.documentClick=!1}function Ue(t){this.documentClick===!0&&(this.documentClick=!1,this.el.contains(t.target)===!1&&(this.expanded=!1))}function Ge(t,e){if(t==="content")e.setAttribute("tabindex","-1"),e.focus();else if(t==="focusable")B(e)[0].focus();else if(t==="interactive")B(e,!0)[0].focus();else if(t!==null){const a=e.querySelector(`#${t}`);a&&a.focus()}}class m{constructor(e,a){this.options=Object.assign({},He,a),this.el=e,this.hostEl=e.querySelector(this.options.hostSelector),this.contentEl=e.querySelector(this.options.contentSelector),Ie(this.el),this._hostKeyDownListener=$e.bind(this),this._hostMouseDownListener=We.bind(this),this._documentClickListener=Ye.bind(this),this._documentTouchStartListener=je.bind(this),this._documentTouchMoveListener=ze.bind(this),this._documentTouchEndListener=Ue.bind(this),this._hostClickListener=Re.bind(this),this._hostFocusListener=Be.bind(this),this._hostHoverListener=Ne.bind(this),this._focusExitListener=Pe.bind(this),this._mouseLeaveListener=Ke.bind(this),this.hostEl.getAttribute("aria-expanded")===null&&this.hostEl.setAttribute("aria-expanded","false"),this.options.ariaControls===!0&&(ne(this.el,"expander"),this.contentEl.id=this.contentEl.id||`${this.el.id}-content`,this.hostEl.setAttribute("aria-controls",this.contentEl.id)),this.expandOnClick=this.options.expandOnClick,this.expandOnFocus=this.options.expandOnFocus,this.expandOnHover=this.options.expandOnHover,this.options.autoCollapse===!1&&(this.collapseOnClickOut=this.options.collapseOnClickOut,this.collapseOnFocusOut=this.options.collapseOnFocusOut,this.collapseOnMouseOut=this.options.collapseOnMouseOut)}set expandOnClick(e){e===!0?(this.hostEl.addEventListener("keydown",this._hostKeyDownListener),this.hostEl.addEventListener("mousedown",this._hostMouseDownListener),this.hostEl.addEventListener("click",this._hostClickListener),this.options.autoCollapse===!0&&(this.collapseOnClickOut=!0,this.collapseOnFocusOut=!0)):(this.hostEl.removeEventListener("click",this._hostClickListener),this.hostEl.removeEventListener("mousedown",this._hostMouseDownListener),this.hostEl.removeEventListener("keydown",this._hostKeyDownListener))}set expandOnFocus(e){e===!0?(this.hostEl.addEventListener("focus",this._hostFocusListener),this.options.autoCollapse===!0&&(this.collapseOnClickOut=!0,this.collapseOnFocusOut=!0)):this.hostEl.removeEventListener("focus",this._hostFocusListener)}set expandOnHover(e){e===!0?(this.hostEl.addEventListener("mouseenter",this._hostHoverListener),this.contentEl.addEventListener("mouseenter",this._hostHoverListener),this.options.autoCollapse===!0&&(this.collapseOnMouseOut=!0)):(this.hostEl.removeEventListener("mouseenter",this._hostHoverListener),this.contentEl.removeEventListener("mouseenter",this._hostHoverListener))}set collapseOnClickOut(e){e===!0?(document.addEventListener("click",this._documentClickListener),document.addEventListener("touchstart",this._documentTouchStartListener),document.addEventListener("touchmove",this._documentTouchMoveListener),document.addEventListener("touchend",this._documentTouchEndListener)):(document.removeEventListener("click",this._documentClickListener),document.removeEventListener("touchstart",this._documentTouchStartListener),document.removeEventListener("touchmove",this._documentTouchMoveListener),document.removeEventListener("touchend",this._documentTouchEndListener))}set collapseOnFocusOut(e){e===!0?this.el.addEventListener("focusExit",this._focusExitListener):this.el.removeEventListener("focusExit",this._focusExitListener)}set collapseOnMouseOut(e){e===!0?(this.el.addEventListener("mouseleave",this._mouseLeaveListener),this.contentEl.addEventListener("mouseleave",this._mouseLeaveListener)):(this.el.removeEventListener("mouseleave",this._mouseLeaveListener),this.contentEl.removeEventListener("mouseleave",this._mouseLeaveListener))}get expanded(){return this.hostEl.getAttribute("aria-expanded")==="true"}set expanded(e){e===!0&&this.expanded===!1&&(this.hostEl.setAttribute("aria-expanded","true"),this.options.expandedClass&&this.el.classList.add(this.options.expandedClass),(this._expandWasKeyboardClickActivated||this._expandWasMouseClickActivated&&this.options.alwaysDoFocusManagement)&&Ge(this.options.focusManagement,this.contentEl),this.el.dispatchEvent(new CustomEvent("expander-expand",{bubbles:!0,detail:this.contentEl}))),e===!1&&this.expanded===!0&&(this.hostEl.setAttribute("aria-expanded","false"),this.options.expandedClass&&this.el.classList.remove(this.options.expandedClass),this.el.dispatchEvent(new CustomEvent("expander-collapse",{bubbles:!0,detail:this.contentEl}))),this._expandWasKeyboardClickActivated=!1,this._expandWasMouseClickActivated=!1,this._expandWasFocusActivated=!1,this._expandWasHoverActivated=!1,this._keyboardClickFlag=!1,this._mouseClickFlag=!1}sleep(){this._destroyed!==!0&&(this.expandOnClick=!1,this.expandOnFocus=!1,this.expandOnHover=!1,this.collapseOnClickOut=!1,this.collapseOnFocusOut=!1,this.collapseOnMouseOut=!1)}destroy(){this.sleep(),this._destroyed=!0,this._hostKeyDownListener=null,this._hostMouseDownListener=null,this._documentClickListener=null,this._documentTouchStartListener=null,this._documentTouchMoveListener=null,this._documentTouchEndListener=null,this._hostClickListener=null,this._hostFocusListener=null,this._hostHoverListener=null,this._focusExitListener=null,this._mouseLeaveListener=null}}var N;const{default:Je=m}=(N=m==null?void 0:m.default)!=null&&N.__esModule?m.default:m,Qe=600,ae=({className:t,inputPlaceholderText:e="YYYY-MM-DD",a11yOpenPopoverText:a="open calendar",range:s,value:d,rangeEnd:c,defaultValue:E,defaultRangeEnd:S,collapseOnSelect:oe,onChange:b=()=>{},onInputChange:ie=()=>{},onInputRangeEndChange:re=()=>{},...le})=>{const k=l.useRef(),[ue,f]=l.useState(E||""),[de,v]=l.useState(S||""),F=$(d)?d:ue,w=$(c)?c:de,[h,x]=l.useState(()=>A(F)),[p,g]=l.useState(()=>A(w)),[D,I]=l.useState(!1),[ce,he]=l.useState(1),{overlayStyles:pe,refs:T}=_e({open:D}),L=T.host,me=()=>{I(!0)},fe=()=>{I(!1)};l.useEffect(()=>{if(!L.current)return;k.current=new Je(L.current,{hostSelector:".ebay-date-textbox--main > .icon-btn",contentSelector:".date-textbox__popover",expandOnClick:!0,autoCollapse:!0}),L.current.addEventListener("expander-expand",me),L.current.addEventListener("expander-collapse",fe);const n=()=>{he(document.documentElement.clientWidth<Qe?1:2)};return n(),window.addEventListener("resize",n),()=>{var o;(o=k.current)==null||o.destroy(),window.removeEventListener("resize",n)}},[]);const V=(n,o)=>{const r=new Date(n.target.value),i=isNaN(r.getTime())?null:ye(r);o===0?(x(i),f(i||"")):(g(i),v(i||"")),s?b(n,{rangeStart:o===0?i:h,rangeEnd:o===1?i:p}):b(n,{selected:i})},ve=(n,{iso:o})=>{if(x(o),f(o),s){const r=h||p,i={rangeStart:o,rangeEnd:r};h&&p?(v(""),g(null),i.rangeEnd=null):r&&(r<o?(x(r),f(r),v(o),g(o),i.rangeStart=r,i.rangeEnd=o):(x(o),f(o),v(r),g(r),i.rangeStart=o,i.rangeEnd=r)),b(n,i)}else b(n,{selected:o});oe&&(k.current.expanded=!1)},q=(n,o)=>{o===0?(f(n.target.value),ie(n)):(v(n.target.value),re(n))},[Ee,be]=Array.isArray(e)?e:[e,e];return te("span",{className:xe("date-textbox",t),ref:T.setHost,children:[s&&u(H,{value:F,placeholder:Ee,onInputChange:n=>q(n,0),onBlur:n=>V(n,0)}),u(H,{className:"ebay-date-textbox--main",placeholder:be,value:s?w:F,onInputChange:n=>q(n,s?1:0),onBlur:n=>V(n,s?1:0),children:u(Ce,{name:"calendar24",buttonAriaLabel:a})}),u("div",{hidden:!D,ref:T.setOverlay,style:pe,className:"date-textbox__popover",children:u(Le,{...le,range:s,interactive:!0,navigable:!0,numMonths:ce,selected:h&&p?[h,p]:h||p||void 0,onSelect:ve})})]})};try{datetextbox.displayName="datetextbox",datetextbox.__docgenInfo={description:"",displayName:"datetextbox",props:{onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element> | FocusEvent<Element, Element>, { iso }: { ...; }) => void"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(event: MouseEvent<Element, MouseEvent>, { iso }: { iso: `${number}-${number}-${number}`; }) => void"}},range:{defaultValue:null,description:"",name:"range",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"string"}},disableBefore:{defaultValue:null,description:"",name:"disableBefore",required:!1,type:{name:"`${number}-${number}-${number}`"}},disableAfter:{defaultValue:null,description:"",name:"disableAfter",required:!1,type:{name:"`${number}-${number}-${number}`"}},disableWeekdays:{defaultValue:null,description:"",name:"disableWeekdays",required:!1,type:{name:"number[]"}},disableList:{defaultValue:null,description:"",name:"disableList",required:!1,type:{name:"`${number}-${number}-${number}`[]"}},getA11yShowMonthText:{defaultValue:null,description:"",name:"getA11yShowMonthText",required:!1,type:{name:"(monthTitle: string) => string"}},a11ySelectedText:{defaultValue:null,description:"",name:"a11ySelectedText",required:!1,type:{name:"string"}},a11yRangeStartText:{defaultValue:null,description:"",name:"a11yRangeStartText",required:!1,type:{name:"string"}},a11yInRangeText:{defaultValue:null,description:"",name:"a11yInRangeText",required:!1,type:{name:"string"}},a11yRangeEndText:{defaultValue:null,description:"",name:"a11yRangeEndText",required:!1,type:{name:"string"}},a11ySeparator:{defaultValue:null,description:"",name:"a11ySeparator",required:!1,type:{name:"string"}},a11yTodayText:{defaultValue:null,description:"",name:"a11yTodayText",required:!1,type:{name:"string"}},a11yDisabledText:{defaultValue:null,description:"",name:"a11yDisabledText",required:!1,type:{name:"string"}},linkBuilder:{defaultValue:null,description:"",name:"linkBuilder",required:!1,type:{name:"(iso: `${number}-${number}-${number}`) => string"}},onMonthChange:{defaultValue:null,description:"",name:"onMonthChange",required:!1,type:{name:"({ iso }: { iso: `${number}-${number}-${number}`; }) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},rangeEnd:{defaultValue:null,description:"",name:"rangeEnd",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},defaultRangeEnd:{defaultValue:null,description:"",name:"defaultRangeEnd",required:!1,type:{name:"string"}},collapseOnSelect:{defaultValue:null,description:"",name:"collapseOnSelect",required:!1,type:{name:"boolean"}},inputPlaceholderText:{defaultValue:{value:"YYYY-MM-DD"},description:"",name:"inputPlaceholderText",required:!1,type:{name:"string | string[]"}},a11yOpenPopoverText:{defaultValue:{value:"open calendar"},description:"",name:"a11yOpenPopoverText",required:!1,type:{name:"string"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"EbayChangeEventHandler<HTMLInputElement, EventData> & EbayMouseEventHandler<HTMLInputElement, EventData> & EbayFocusEventHandler<...>"}},onInputChange:{defaultValue:{value:"() => {}"},description:"",name:"onInputChange",required:!1,type:{name:"EbayChangeEventHandler<HTMLInputElement, Record<string, any>>"}},onInputRangeEndChange:{defaultValue:{value:"() => {}"},description:"",name:"onInputRangeEndChange",required:!1,type:{name:"EbayChangeEventHandler<HTMLInputElement, Record<string, any>>"}}}}}catch{}const pt={component:ae,title:"form input/ebay-date-textbox"},y={},C={args:{range:!0}},_={args:{collapseOnSelect:!0}},O=t=>u(()=>{const[a,s]=l.useState("");return te(ge,{children:[u(ae,{value:a,onChange:(E,{selected:S})=>{s(S||"")},onInputChange:E=>{s(E.target.value)},...t}),u("div",{style:{marginTop:16},children:u(Oe,{onClick:()=>s("2024-01-03"),children:"Set to 2024-01-03"})})]})},{});var P,K,Y;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:"{}",...(Y=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var j,z,U;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    range: true
  }
}`,...(U=(z=C.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var G,J,Q;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    collapseOnSelect: true
  }
}`,...(Q=(J=_.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;O.parameters={...O.parameters,docs:{...(X=O.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
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
}`,...(ee=(Z=O.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const mt=["Default","Range","CollpaseOnSelect","ControlledValues"];export{_ as CollpaseOnSelect,O as ControlledValues,y as Default,C as Range,mt as __namedExportsOrder,pt as default};

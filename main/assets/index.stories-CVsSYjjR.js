import{j as Z,c as Ee,a as u,F as be}from"./index-Zi3BSDNR.js";import{r as l}from"./index-CBqU2yxZ.js";import{d as q,E as xe,t as ge}from"./calendar-LMoBV69p.js";import{E as A,b as Le,i as H}from"./textbox-BW5PZitB.js";import"./hooks-Dbuzk741.js";import{u as ye}from"./dropdown-zFdEgwiO.js";import{E as Ce}from"./button-Dtbufc5i.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-button-iARmpjDV.js";import"./icon-D3TA1mFJ.js";import"./array.polyfill.flat-DvPNgYOj.js";import"./badge-OaR5SFvt.js";import"./utils-BtBQuWIK.js";import"./index-BtM5VmRH.js";import"./progress-spinner-DPB0bZIF.js";const T={},_e="nid",Oe=Se(3);function $(t){return Math.floor(Math.random()*t)}function Se(t){const e="abcdefghijklmnopqrstuvwxyz",s=e+"0123456789";let d=e[$(25)];for(let c=1;c<t;c++)d+=s[$(35)];return d}function ee(t,e=_e){const s=`${e}${e===""?"":"-"}${Oe}`;return T[s]=T[s]||0,t.id||t.setAttribute("id",`${s}-${T[s]++}`),t.id}const W={};function te(t,e,a){t.dispatchEvent(new CustomEvent("focusExit",{detail:{fromElement:e,toElement:a},bubbles:!1}))}function ke(t){const e=t.target;this.el.contains(e)===!0?this.currentFocusElement=e:(window.removeEventListener("blur",this.onWindowBlurListener),document.removeEventListener("focusin",this.onDocumentFocusInListener),te(this.el,this.currentFocusElement,e),this.currentFocusElement=null)}function Fe(){te(this.el,this.currentFocusElement,void 0)}function Te(){document.addEventListener("focusin",this.onDocumentFocusInListener),window.addEventListener("blur",this.onWindowBlurListener)}class we{constructor(e){this.el=e,this.currentFocusElement=null,this.onWidgetFocusInListener=Te.bind(this),this.onDocumentFocusInListener=ke.bind(this),this.onWindowBlurListener=Fe.bind(this),this.el.addEventListener("focusin",this.onWidgetFocusInListener)}removeEventListeners(){window.removeEventListener("blur",this.onWindowBlurListener),document.removeEventListener("focusin",this.onDocumentFocusInListener),this.el.removeEventListener("focusin",this.onWidgetFocusInListener)}}function Me(t){let e=null;return ee(t),W[t.id]||(e=new we(t),W[t.id]=e),e}const De=["a[href]","area[href]","button:not([disabled])","embed","iframe","input:not([disabled])","object","select:not([disabled])","textarea:not([disabled])","*[tabindex]","*[contenteditable]"],Ie=De.join();function R(t,e=!1,a){return Ve(t,e)}function Ve(t,e=!1){let a=Array.prototype.slice.call(t.querySelectorAll(Ie));return a=a.filter(function(s){return window.getComputedStyle(s).display!=="none"}),e===!0&&(a=a.filter(function(s){return s.getAttribute("tabindex")!=="-1"})),a}const qe={alwaysDoFocusManagement:!1,ariaControls:!0,autoCollapse:!1,collapseOnFocusOut:!1,collapseOnMouseOut:!1,collapseOnClickOut:!1,contentSelector:".expander__content",expandedClass:null,expandOnClick:!1,expandOnFocus:!1,expandOnHover:!1,focusManagement:null,hostSelector:".expander__host",simulateSpacebarClick:!1};function Ae(t){(t.keyCode===13||t.keyCode===32)&&(this._keyboardClickFlag=!0),t.keyCode===32&&this.options.simulateSpacebarClick===!0&&this.hostEl.click()}function He(){this._mouseClickFlag=!0}function $e(){this._expandWasKeyboardClickActivated=this._keyboardClickFlag,this._expandWasMouseClickActivated=this._mouseClickFlag,this.expanded=!this.expanded}function We(){this._expandWasFocusActivated=!0,this.expanded=!0}function Re(){clearTimeout(this._mouseLeft),this._expandWasHoverActivated=!0,this.expanded=!0}function Be(){this.expanded=!1}function Ne(){clearTimeout(this._mouseLeft),this._mouseLeft=setTimeout(()=>{this.expanded=!1},300)}function Pe(t){this.el.contains(t.target)===!1&&(this.expanded=!1)}function Ke(){this.documentClick=!0}function Ye(){this.documentClick=!1}function je(t){this.documentClick===!0&&(this.documentClick=!1,this.el.contains(t.target)===!1&&(this.expanded=!1))}function ze(t,e){if(t==="content")e.setAttribute("tabindex","-1"),e.focus();else if(t==="focusable")R(e)[0].focus();else if(t==="interactive")R(e,!0)[0].focus();else if(t!==null){const a=e.querySelector(`#${t}`);a&&a.focus()}}class Ue{constructor(e,a){this.options=Object.assign({},qe,a),this.el=e,this.hostEl=e.querySelector(this.options.hostSelector),this.contentEl=e.querySelector(this.options.contentSelector),Me(this.el),this._hostKeyDownListener=Ae.bind(this),this._hostMouseDownListener=He.bind(this),this._documentClickListener=Pe.bind(this),this._documentTouchStartListener=Ke.bind(this),this._documentTouchMoveListener=Ye.bind(this),this._documentTouchEndListener=je.bind(this),this._hostClickListener=$e.bind(this),this._hostFocusListener=We.bind(this),this._hostHoverListener=Re.bind(this),this._focusExitListener=Be.bind(this),this._mouseLeaveListener=Ne.bind(this),this.hostEl.getAttribute("aria-expanded")===null&&this.hostEl.setAttribute("aria-expanded","false"),this.options.ariaControls===!0&&(ee(this.el,"expander"),this.contentEl.id=this.contentEl.id||`${this.el.id}-content`,this.hostEl.setAttribute("aria-controls",this.contentEl.id)),this.expandOnClick=this.options.expandOnClick,this.expandOnFocus=this.options.expandOnFocus,this.expandOnHover=this.options.expandOnHover,this.options.autoCollapse===!1&&(this.collapseOnClickOut=this.options.collapseOnClickOut,this.collapseOnFocusOut=this.options.collapseOnFocusOut,this.collapseOnMouseOut=this.options.collapseOnMouseOut)}set expandOnClick(e){e===!0?(this.hostEl.addEventListener("keydown",this._hostKeyDownListener),this.hostEl.addEventListener("mousedown",this._hostMouseDownListener),this.hostEl.addEventListener("click",this._hostClickListener),this.options.autoCollapse===!0&&(this.collapseOnClickOut=!0,this.collapseOnFocusOut=!0)):(this.hostEl.removeEventListener("click",this._hostClickListener),this.hostEl.removeEventListener("mousedown",this._hostMouseDownListener),this.hostEl.removeEventListener("keydown",this._hostKeyDownListener))}set expandOnFocus(e){e===!0?(this.hostEl.addEventListener("focus",this._hostFocusListener),this.options.autoCollapse===!0&&(this.collapseOnClickOut=!0,this.collapseOnFocusOut=!0)):this.hostEl.removeEventListener("focus",this._hostFocusListener)}set expandOnHover(e){e===!0?(this.hostEl.addEventListener("mouseenter",this._hostHoverListener),this.contentEl.addEventListener("mouseenter",this._hostHoverListener),this.options.autoCollapse===!0&&(this.collapseOnMouseOut=!0)):(this.hostEl.removeEventListener("mouseenter",this._hostHoverListener),this.contentEl.removeEventListener("mouseenter",this._hostHoverListener))}set collapseOnClickOut(e){e===!0?(document.addEventListener("click",this._documentClickListener),document.addEventListener("touchstart",this._documentTouchStartListener),document.addEventListener("touchmove",this._documentTouchMoveListener),document.addEventListener("touchend",this._documentTouchEndListener)):(document.removeEventListener("click",this._documentClickListener),document.removeEventListener("touchstart",this._documentTouchStartListener),document.removeEventListener("touchmove",this._documentTouchMoveListener),document.removeEventListener("touchend",this._documentTouchEndListener))}set collapseOnFocusOut(e){e===!0?this.el.addEventListener("focusExit",this._focusExitListener):this.el.removeEventListener("focusExit",this._focusExitListener)}set collapseOnMouseOut(e){e===!0?(this.el.addEventListener("mouseleave",this._mouseLeaveListener),this.contentEl.addEventListener("mouseleave",this._mouseLeaveListener)):(this.el.removeEventListener("mouseleave",this._mouseLeaveListener),this.contentEl.removeEventListener("mouseleave",this._mouseLeaveListener))}get expanded(){return this.hostEl.getAttribute("aria-expanded")==="true"}set expanded(e){e===!0&&this.expanded===!1&&(this.hostEl.setAttribute("aria-expanded","true"),this.options.expandedClass&&this.el.classList.add(this.options.expandedClass),(this._expandWasKeyboardClickActivated||this._expandWasMouseClickActivated&&this.options.alwaysDoFocusManagement)&&ze(this.options.focusManagement,this.contentEl),this.el.dispatchEvent(new CustomEvent("expander-expand",{bubbles:!0,detail:this.contentEl}))),e===!1&&this.expanded===!0&&(this.hostEl.setAttribute("aria-expanded","false"),this.options.expandedClass&&this.el.classList.remove(this.options.expandedClass),this.el.dispatchEvent(new CustomEvent("expander-collapse",{bubbles:!0,detail:this.contentEl}))),this._expandWasKeyboardClickActivated=!1,this._expandWasMouseClickActivated=!1,this._expandWasFocusActivated=!1,this._expandWasHoverActivated=!1,this._keyboardClickFlag=!1,this._mouseClickFlag=!1}sleep(){this._destroyed!==!0&&(this.expandOnClick=!1,this.expandOnFocus=!1,this.expandOnHover=!1,this.collapseOnClickOut=!1,this.collapseOnFocusOut=!1,this.collapseOnMouseOut=!1)}destroy(){this.sleep(),this._destroyed=!0,this._hostKeyDownListener=null,this._hostMouseDownListener=null,this._documentClickListener=null,this._documentTouchStartListener=null,this._documentTouchMoveListener=null,this._documentTouchEndListener=null,this._hostClickListener=null,this._hostFocusListener=null,this._hostHoverListener=null,this._focusExitListener=null,this._mouseLeaveListener=null}}const Ge=600,ne=({className:t,inputPlaceholderText:e="YYYY-MM-DD",a11yOpenPopoverText:a="open calendar",range:s,value:d,rangeEnd:c,defaultValue:v,defaultRangeEnd:O,collapseOnSelect:se,onChange:E=()=>{},onInputChange:ae=()=>{},onInputRangeEndChange:oe=()=>{},...ie})=>{const S=l.useRef(),[re,m]=l.useState(v||""),[le,f]=l.useState(O||""),k=H(d)?d:re,w=H(c)?c:le,[h,b]=l.useState(()=>q(k)),[p,x]=l.useState(()=>q(w)),[M,D]=l.useState(!1),[ue,de]=l.useState(1),{overlayStyles:ce,refs:F}=ye({open:M}),g=F.host,he=()=>{D(!0)},pe=()=>{D(!1)};l.useEffect(()=>{if(!g.current)return;S.current=new Ue(g.current,{hostSelector:".ebay-date-textbox--main > .icon-btn",contentSelector:".date-textbox__popover",expandOnClick:!0,autoCollapse:!0}),g.current.addEventListener("expander-expand",he),g.current.addEventListener("expander-collapse",pe);const n=()=>{de(document.documentElement.clientWidth<Ge?1:2)};return n(),window.addEventListener("resize",n),()=>{var o;(o=S.current)==null||o.destroy(),window.removeEventListener("resize",n)}},[]);const I=(n,o)=>{const r=new Date(n.target.value),i=isNaN(r.getTime())?null:ge(r);o===0?(b(i),m(i||"")):(x(i),f(i||"")),s?E(n,{rangeStart:o===0?i:h,rangeEnd:o===1?i:p}):E(n,{selected:i})},me=(n,{iso:o})=>{if(b(o),m(o),s){const r=h||p,i={rangeStart:o,rangeEnd:r};h&&p?(f(""),x(null),i.rangeEnd=null):r&&(r<o?(b(r),m(r),f(o),x(o),i.rangeStart=r,i.rangeEnd=o):(b(o),m(o),f(r),x(r),i.rangeStart=o,i.rangeEnd=r)),E(n,i)}else E(n,{selected:o});se&&(S.current.expanded=!1)},V=(n,o)=>{o===0?(m(n.target.value),ae(n)):(f(n.target.value),oe(n))},[fe,ve]=Array.isArray(e)?e:[e,e];return Z("span",{className:Ee("date-textbox",t),ref:F.setHost,children:[s&&u(A,{value:k,placeholder:fe,onInputChange:n=>V(n,0),onBlur:n=>I(n,0)}),u(A,{className:"ebay-date-textbox--main",placeholder:ve,value:s?w:k,onInputChange:n=>V(n,s?1:0),onBlur:n=>I(n,s?1:0),children:u(Le,{name:"calendar24",buttonAriaLabel:a})}),u("div",{hidden:!M,ref:F.setOverlay,style:ce,className:"date-textbox__popover",children:u(xe,{...ie,range:s,interactive:!0,navigable:!0,numMonths:ue,selected:h&&p?[h,p]:h||p||void 0,onSelect:me})})]})};try{datetextbox.displayName="datetextbox",datetextbox.__docgenInfo={description:"",displayName:"datetextbox",props:{onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: KeyboardEvent<Element> | MouseEvent<Element, MouseEvent> | FocusEvent<Element, Element>, { iso }: { ...; }) => void"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(event: MouseEvent<Element, MouseEvent>, { iso }: { iso: `${number}-${number}-${number}`; }) => void"}},range:{defaultValue:null,description:"",name:"range",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"string"}},disableBefore:{defaultValue:null,description:"",name:"disableBefore",required:!1,type:{name:"`${number}-${number}-${number}`"}},disableAfter:{defaultValue:null,description:"",name:"disableAfter",required:!1,type:{name:"`${number}-${number}-${number}`"}},disableWeekdays:{defaultValue:null,description:"",name:"disableWeekdays",required:!1,type:{name:"number[]"}},disableList:{defaultValue:null,description:"",name:"disableList",required:!1,type:{name:"`${number}-${number}-${number}`[]"}},getA11yShowMonthText:{defaultValue:null,description:"",name:"getA11yShowMonthText",required:!1,type:{name:"(monthTitle: string) => string"}},a11ySelectedText:{defaultValue:null,description:"",name:"a11ySelectedText",required:!1,type:{name:"string"}},a11yRangeStartText:{defaultValue:null,description:"",name:"a11yRangeStartText",required:!1,type:{name:"string"}},a11yInRangeText:{defaultValue:null,description:"",name:"a11yInRangeText",required:!1,type:{name:"string"}},a11yRangeEndText:{defaultValue:null,description:"",name:"a11yRangeEndText",required:!1,type:{name:"string"}},a11ySeparator:{defaultValue:null,description:"",name:"a11ySeparator",required:!1,type:{name:"string"}},a11yTodayText:{defaultValue:null,description:"",name:"a11yTodayText",required:!1,type:{name:"string"}},a11yDisabledText:{defaultValue:null,description:"",name:"a11yDisabledText",required:!1,type:{name:"string"}},linkBuilder:{defaultValue:null,description:"",name:"linkBuilder",required:!1,type:{name:"(iso: `${number}-${number}-${number}`) => string"}},onMonthChange:{defaultValue:null,description:"",name:"onMonthChange",required:!1,type:{name:"({ iso }: { iso: `${number}-${number}-${number}`; }) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},rangeEnd:{defaultValue:null,description:"",name:"rangeEnd",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},defaultRangeEnd:{defaultValue:null,description:"",name:"defaultRangeEnd",required:!1,type:{name:"string"}},collapseOnSelect:{defaultValue:null,description:"",name:"collapseOnSelect",required:!1,type:{name:"boolean"}},inputPlaceholderText:{defaultValue:{value:"YYYY-MM-DD"},description:"",name:"inputPlaceholderText",required:!1,type:{name:"string | string[]"}},a11yOpenPopoverText:{defaultValue:{value:"open calendar"},description:"",name:"a11yOpenPopoverText",required:!1,type:{name:"string"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"EbayChangeEventHandler<HTMLInputElement, EventData> & EbayMouseEventHandler<HTMLInputElement, EventData> & EbayFocusEventHandler<...>"}},onInputChange:{defaultValue:{value:"() => {}"},description:"",name:"onInputChange",required:!1,type:{name:"EbayChangeEventHandler<HTMLInputElement, Record<string, any>>"}},onInputRangeEndChange:{defaultValue:{value:"() => {}"},description:"",name:"onInputRangeEndChange",required:!1,type:{name:"EbayChangeEventHandler<HTMLInputElement, Record<string, any>>"}}}}}catch{}const ct={component:ne,title:"form input/ebay-date-textbox"},L={},y={args:{range:!0}},C={args:{collapseOnSelect:!0}},_=t=>u(()=>{const[a,s]=l.useState("");return Z(be,{children:[u(ne,{value:a,onChange:(v,{selected:O})=>{s(O||"")},onInputChange:v=>{s(v.target.value)},...t}),u("div",{style:{marginTop:16},children:u(Ce,{onClick:()=>s("2024-01-03"),children:"Set to 2024-01-03"})})]})},{});var B,N,P;L.parameters={...L.parameters,docs:{...(B=L.parameters)==null?void 0:B.docs,source:{originalSource:"{}",...(P=(N=L.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var K,Y,j;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    range: true
  }
}`,...(j=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var z,U,G;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    collapseOnSelect: true
  }
}`,...(G=(U=C.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,Q,X;_.parameters={..._.parameters,docs:{...(J=_.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
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
}`,...(X=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ht=["Default","Range","CollpaseOnSelect","ControlledValues"];export{C as CollpaseOnSelect,_ as ControlledValues,L as Default,y as Range,ht as __namedExportsOrder,ct as default};

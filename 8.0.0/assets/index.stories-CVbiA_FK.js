import{j as Q,c as fe,a as u,F as ve}from"./index-Zi3BSDNR.js";import{r as l}from"./index-CBqU2yxZ.js";import{d as D,E as Ee,t as be}from"./calendar-B3ZQXC67.js";import{E as V,b as xe,i as q}from"./textbox-BPQwN0nC.js";import"./hooks-Dbuzk741.js";import{E as ge}from"./button-C1UFA6cE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-button-C28cU3tM.js";import"./icon-Db4mbNWJ.js";import"./array.polyfill.flat-G3GcW6cJ.js";import"./badge-OaR5SFvt.js";import"./utils-CTD7SXRu.js";import"./progress-spinner-wBxz2cTv.js";const F={},Le="nid",ye=Ce(3);function A(t){return Math.floor(Math.random()*t)}function Ce(t){const e="abcdefghijklmnopqrstuvwxyz",s=e+"0123456789";let d=e[A(25)];for(let c=1;c<t;c++)d+=s[A(35)];return d}function X(t,e=Le){const s=`${e}${e===""?"":"-"}${ye}`;return F[s]=F[s]||0,t.id||t.setAttribute("id",`${s}-${F[s]++}`),t.id}const H={};function Z(t,e,a){t.dispatchEvent(new CustomEvent("focusExit",{detail:{fromElement:e,toElement:a},bubbles:!1}))}function _e(t){const e=t.target;this.el.contains(e)===!0?this.currentFocusElement=e:(window.removeEventListener("blur",this.onWindowBlurListener),document.removeEventListener("focusin",this.onDocumentFocusInListener),Z(this.el,this.currentFocusElement,e),this.currentFocusElement=null)}function Oe(){Z(this.el,this.currentFocusElement,void 0)}function ke(){document.addEventListener("focusin",this.onDocumentFocusInListener),window.addEventListener("blur",this.onWindowBlurListener)}class Se{constructor(e){this.el=e,this.currentFocusElement=null,this.onWidgetFocusInListener=ke.bind(this),this.onDocumentFocusInListener=_e.bind(this),this.onWindowBlurListener=Oe.bind(this),this.el.addEventListener("focusin",this.onWidgetFocusInListener)}removeEventListeners(){window.removeEventListener("blur",this.onWindowBlurListener),document.removeEventListener("focusin",this.onDocumentFocusInListener),this.el.removeEventListener("focusin",this.onWidgetFocusInListener)}}function Fe(t){let e=null;return X(t),H[t.id]||(e=new Se(t),H[t.id]=e),e}const Te=["a[href]","area[href]","button:not([disabled])","embed","iframe","input:not([disabled])","object","select:not([disabled])","textarea:not([disabled])","*[tabindex]","*[contenteditable]"],Me=Te.join();function $(t,e=!1,a){return we(t,e)}function we(t,e=!1){let a=Array.prototype.slice.call(t.querySelectorAll(Me));return a=a.filter(function(s){return window.getComputedStyle(s).display!=="none"}),e===!0&&(a=a.filter(function(s){return s.getAttribute("tabindex")!=="-1"})),a}const Ie={alwaysDoFocusManagement:!1,ariaControls:!0,autoCollapse:!1,collapseOnFocusOut:!1,collapseOnMouseOut:!1,collapseOnClickOut:!1,contentSelector:".expander__content",expandedClass:null,expandOnClick:!1,expandOnFocus:!1,expandOnHover:!1,focusManagement:null,hostSelector:".expander__host",simulateSpacebarClick:!1};function De(t){(t.keyCode===13||t.keyCode===32)&&(this._keyboardClickFlag=!0),t.keyCode===32&&this.options.simulateSpacebarClick===!0&&this.hostEl.click()}function Ve(){this._mouseClickFlag=!0}function qe(){this._expandWasKeyboardClickActivated=this._keyboardClickFlag,this._expandWasMouseClickActivated=this._mouseClickFlag,this.expanded=!this.expanded}function Ae(){this._expandWasFocusActivated=!0,this.expanded=!0}function He(){clearTimeout(this._mouseLeft),this._expandWasHoverActivated=!0,this.expanded=!0}function $e(){this.expanded=!1}function We(){clearTimeout(this._mouseLeft),this._mouseLeft=setTimeout(()=>{this.expanded=!1},300)}function Re(t){this.el.contains(t.target)===!1&&(this.expanded=!1)}function Be(){this.documentClick=!0}function Ne(){this.documentClick=!1}function Pe(t){this.documentClick===!0&&(this.documentClick=!1,this.el.contains(t.target)===!1&&(this.expanded=!1))}function Ke(t,e){if(t==="content")e.setAttribute("tabindex","-1"),e.focus();else if(t==="focusable")$(e)[0].focus();else if(t==="interactive")$(e,!0)[0].focus();else if(t!==null){const a=e.querySelector(`#${t}`);a&&a.focus()}}class Ye{constructor(e,a){this.options=Object.assign({},Ie,a),this.el=e,this.hostEl=e.querySelector(this.options.hostSelector),this.contentEl=e.querySelector(this.options.contentSelector),Fe(this.el),this._hostKeyDownListener=De.bind(this),this._hostMouseDownListener=Ve.bind(this),this._documentClickListener=Re.bind(this),this._documentTouchStartListener=Be.bind(this),this._documentTouchMoveListener=Ne.bind(this),this._documentTouchEndListener=Pe.bind(this),this._hostClickListener=qe.bind(this),this._hostFocusListener=Ae.bind(this),this._hostHoverListener=He.bind(this),this._focusExitListener=$e.bind(this),this._mouseLeaveListener=We.bind(this),this.hostEl.getAttribute("aria-expanded")===null&&this.hostEl.setAttribute("aria-expanded","false"),this.options.ariaControls===!0&&(X(this.el,"expander"),this.contentEl.id=this.contentEl.id||`${this.el.id}-content`,this.hostEl.setAttribute("aria-controls",this.contentEl.id)),this.expandOnClick=this.options.expandOnClick,this.expandOnFocus=this.options.expandOnFocus,this.expandOnHover=this.options.expandOnHover,this.options.autoCollapse===!1&&(this.collapseOnClickOut=this.options.collapseOnClickOut,this.collapseOnFocusOut=this.options.collapseOnFocusOut,this.collapseOnMouseOut=this.options.collapseOnMouseOut)}set expandOnClick(e){e===!0?(this.hostEl.addEventListener("keydown",this._hostKeyDownListener),this.hostEl.addEventListener("mousedown",this._hostMouseDownListener),this.hostEl.addEventListener("click",this._hostClickListener),this.options.autoCollapse===!0&&(this.collapseOnClickOut=!0,this.collapseOnFocusOut=!0)):(this.hostEl.removeEventListener("click",this._hostClickListener),this.hostEl.removeEventListener("mousedown",this._hostMouseDownListener),this.hostEl.removeEventListener("keydown",this._hostKeyDownListener))}set expandOnFocus(e){e===!0?(this.hostEl.addEventListener("focus",this._hostFocusListener),this.options.autoCollapse===!0&&(this.collapseOnClickOut=!0,this.collapseOnFocusOut=!0)):this.hostEl.removeEventListener("focus",this._hostFocusListener)}set expandOnHover(e){e===!0?(this.hostEl.addEventListener("mouseenter",this._hostHoverListener),this.contentEl.addEventListener("mouseenter",this._hostHoverListener),this.options.autoCollapse===!0&&(this.collapseOnMouseOut=!0)):(this.hostEl.removeEventListener("mouseenter",this._hostHoverListener),this.contentEl.removeEventListener("mouseenter",this._hostHoverListener))}set collapseOnClickOut(e){e===!0?(document.addEventListener("click",this._documentClickListener),document.addEventListener("touchstart",this._documentTouchStartListener),document.addEventListener("touchmove",this._documentTouchMoveListener),document.addEventListener("touchend",this._documentTouchEndListener)):(document.removeEventListener("click",this._documentClickListener),document.removeEventListener("touchstart",this._documentTouchStartListener),document.removeEventListener("touchmove",this._documentTouchMoveListener),document.removeEventListener("touchend",this._documentTouchEndListener))}set collapseOnFocusOut(e){e===!0?this.el.addEventListener("focusExit",this._focusExitListener):this.el.removeEventListener("focusExit",this._focusExitListener)}set collapseOnMouseOut(e){e===!0?(this.el.addEventListener("mouseleave",this._mouseLeaveListener),this.contentEl.addEventListener("mouseleave",this._mouseLeaveListener)):(this.el.removeEventListener("mouseleave",this._mouseLeaveListener),this.contentEl.removeEventListener("mouseleave",this._mouseLeaveListener))}get expanded(){return this.hostEl.getAttribute("aria-expanded")==="true"}set expanded(e){e===!0&&this.expanded===!1&&(this.hostEl.setAttribute("aria-expanded","true"),this.options.expandedClass&&this.el.classList.add(this.options.expandedClass),(this._expandWasKeyboardClickActivated||this._expandWasMouseClickActivated&&this.options.alwaysDoFocusManagement)&&Ke(this.options.focusManagement,this.contentEl),this.el.dispatchEvent(new CustomEvent("expander-expand",{bubbles:!0,detail:this.contentEl}))),e===!1&&this.expanded===!0&&(this.hostEl.setAttribute("aria-expanded","false"),this.options.expandedClass&&this.el.classList.remove(this.options.expandedClass),this.el.dispatchEvent(new CustomEvent("expander-collapse",{bubbles:!0,detail:this.contentEl}))),this._expandWasKeyboardClickActivated=!1,this._expandWasMouseClickActivated=!1,this._expandWasFocusActivated=!1,this._expandWasHoverActivated=!1,this._keyboardClickFlag=!1,this._mouseClickFlag=!1}sleep(){this._destroyed!==!0&&(this.expandOnClick=!1,this.expandOnFocus=!1,this.expandOnHover=!1,this.collapseOnClickOut=!1,this.collapseOnFocusOut=!1,this.collapseOnMouseOut=!1)}destroy(){this.sleep(),this._destroyed=!0,this._hostKeyDownListener=null,this._hostMouseDownListener=null,this._documentClickListener=null,this._documentTouchStartListener=null,this._documentTouchMoveListener=null,this._documentTouchEndListener=null,this._hostClickListener=null,this._hostFocusListener=null,this._hostHoverListener=null,this._focusExitListener=null,this._mouseLeaveListener=null}}const je=600,ee=({className:t,inputPlaceholderText:e="YYYY-MM-DD",a11yOpenPopoverText:a="open calendar",range:s,value:d,rangeEnd:c,defaultValue:E,defaultRangeEnd:O,collapseOnSelect:te,onChange:b=()=>{},onInputChange:ne=()=>{},onInputRangeEndChange:se=()=>{},...ae})=>{const k=l.useRef(),m=l.useRef(null),[oe,f]=l.useState(E||""),[ie,v]=l.useState(O||""),S=q(d)?d:oe,T=q(c)?c:ie,[h,x]=l.useState(()=>D(S)),[p,g]=l.useState(()=>D(T)),[re,M]=l.useState(!1),[le,ue]=l.useState(1),de=()=>{M(!0)},ce=()=>{M(!1)};l.useEffect(()=>{if(!m.current)return;k.current=new Ye(m.current,{hostSelector:".ebay-date-textbox--main > .icon-btn",contentSelector:".date-textbox__popover",expandOnClick:!0,autoCollapse:!0}),m.current.addEventListener("expander-expand",de),m.current.addEventListener("expander-collapse",ce);const n=()=>{ue(document.documentElement.clientWidth<je?1:2)};return n(),window.addEventListener("resize",n),()=>{var o;(o=k.current)==null||o.destroy(),window.removeEventListener("resize",n)}},[]);const w=(n,o)=>{const r=new Date(n.target.value),i=isNaN(r.getTime())?null:be(r);o===0?(x(i),f(i||"")):(g(i),v(i||"")),s?b(n,{rangeStart:o===0?i:h,rangeEnd:o===1?i:p}):b(n,{selected:i})},he=(n,{iso:o})=>{if(x(o),f(o),s){const r=h||p,i={rangeStart:o,rangeEnd:r};h&&p?(v(""),g(null),i.rangeEnd=null):r&&(r<o?(x(r),f(r),v(o),g(o),i.rangeStart=r,i.rangeEnd=o):(x(o),f(o),v(r),g(r),i.rangeStart=o,i.rangeEnd=r)),b(n,i)}else b(n,{selected:o});te&&(k.current.expanded=!1)},I=(n,o)=>{o===0?(f(n.target.value),ne(n)):(v(n.target.value),se(n))},[pe,me]=Array.isArray(e)?e:[e,e];return Q("span",{className:fe("date-textbox",t),ref:m,children:[s&&u(V,{value:S,placeholder:pe,onInputChange:n=>I(n,0),onBlur:n=>w(n,0)}),u(V,{className:"ebay-date-textbox--main",placeholder:me,value:s?T:S,onInputChange:n=>I(n,s?1:0),onBlur:n=>w(n,s?1:0),children:u(xe,{name:"calendar24",buttonAriaLabel:a})}),u("div",{hidden:!re,className:"date-textbox__popover",children:u(Ee,{...ae,range:s,interactive:!0,navigable:!0,numMonths:le,selected:h&&p?[h,p]:h||p||void 0,onSelect:he})})]})};try{datetextbox.displayName="datetextbox",datetextbox.__docgenInfo={description:"",displayName:"datetextbox",props:{onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element> | FocusEvent<Element, Element>, { iso }: { ...; }) => void"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(event: MouseEvent<Element, MouseEvent>, { iso }: { iso: `${number}-${number}-${number}`; }) => void"}},range:{defaultValue:null,description:"",name:"range",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"string"}},disableBefore:{defaultValue:null,description:"",name:"disableBefore",required:!1,type:{name:"`${number}-${number}-${number}`"}},disableAfter:{defaultValue:null,description:"",name:"disableAfter",required:!1,type:{name:"`${number}-${number}-${number}`"}},disableWeekdays:{defaultValue:null,description:"",name:"disableWeekdays",required:!1,type:{name:"number[]"}},disableList:{defaultValue:null,description:"",name:"disableList",required:!1,type:{name:"`${number}-${number}-${number}`[]"}},getA11yShowMonthText:{defaultValue:null,description:"",name:"getA11yShowMonthText",required:!1,type:{name:"(monthTitle: string) => string"}},a11ySelectedText:{defaultValue:null,description:"",name:"a11ySelectedText",required:!1,type:{name:"string"}},a11yRangeStartText:{defaultValue:null,description:"",name:"a11yRangeStartText",required:!1,type:{name:"string"}},a11yInRangeText:{defaultValue:null,description:"",name:"a11yInRangeText",required:!1,type:{name:"string"}},a11yRangeEndText:{defaultValue:null,description:"",name:"a11yRangeEndText",required:!1,type:{name:"string"}},a11ySeparator:{defaultValue:null,description:"",name:"a11ySeparator",required:!1,type:{name:"string"}},a11yTodayText:{defaultValue:null,description:"",name:"a11yTodayText",required:!1,type:{name:"string"}},a11yDisabledText:{defaultValue:null,description:"",name:"a11yDisabledText",required:!1,type:{name:"string"}},linkBuilder:{defaultValue:null,description:"",name:"linkBuilder",required:!1,type:{name:"(iso: `${number}-${number}-${number}`) => string"}},onMonthChange:{defaultValue:null,description:"",name:"onMonthChange",required:!1,type:{name:"({ iso }: { iso: `${number}-${number}-${number}`; }) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},rangeEnd:{defaultValue:null,description:"",name:"rangeEnd",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},defaultRangeEnd:{defaultValue:null,description:"",name:"defaultRangeEnd",required:!1,type:{name:"string"}},collapseOnSelect:{defaultValue:null,description:"",name:"collapseOnSelect",required:!1,type:{name:"boolean"}},inputPlaceholderText:{defaultValue:{value:"YYYY-MM-DD"},description:"",name:"inputPlaceholderText",required:!1,type:{name:"string | string[]"}},a11yOpenPopoverText:{defaultValue:{value:"open calendar"},description:"",name:"a11yOpenPopoverText",required:!1,type:{name:"string"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"EbayChangeEventHandler<HTMLInputElement, EventData> & EbayMouseEventHandler<HTMLInputElement, EventData> & EbayFocusEventHandler<...>"}},onInputChange:{defaultValue:{value:"() => {}"},description:"",name:"onInputChange",required:!1,type:{name:"EbayChangeEventHandler<HTMLInputElement, Record<string, any>>"}},onInputRangeEndChange:{defaultValue:{value:"() => {}"},description:"",name:"onInputRangeEndChange",required:!1,type:{name:"EbayChangeEventHandler<HTMLInputElement, Record<string, any>>"}}}}}catch{}const it={component:ee,title:"form input/ebay-date-textbox"},L={},y={args:{range:!0}},C={args:{collapseOnSelect:!0}},_=t=>u(()=>{const[a,s]=l.useState("");return Q(ve,{children:[u(ee,{value:a,onChange:(E,{selected:O})=>{s(O||"")},onInputChange:E=>{s(E.target.value)},...t}),u("div",{style:{marginTop:16},children:u(ge,{onClick:()=>s("2024-01-03"),children:"Set to 2024-01-03"})})]})},{});var W,R,B;L.parameters={...L.parameters,docs:{...(W=L.parameters)==null?void 0:W.docs,source:{originalSource:"{}",...(B=(R=L.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var N,P,K;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    range: true
  }
}`,...(K=(P=y.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};var Y,j,z;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    collapseOnSelect: true
  }
}`,...(z=(j=C.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var U,G,J;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
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
}`,...(J=(G=_.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const rt=["Default","Range","CollpaseOnSelect","ControlledValues"];export{C as CollpaseOnSelect,_ as ControlledValues,L as Default,y as Range,rt as __namedExportsOrder,it as default};

import{a as t,c as q,j}from"./index-Zi3BSDNR.js";import{r as u}from"./index-CBqU2yxZ.js";import"./array.polyfill.flat-gqYBHZeE.js";import{a as C}from"./utils-CFgkpqen.js";import{T as r}from"./toggle-button-xPDgibtU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-CCFri3GY.js";const b=({a11yText:a,a11yLabelId:y,layoutType:h="minimal",variant:m="checkbox",children:f,columnsMin:B,columnsXS:T,columnsSM:w,columnsMD:x,columnsXL:E,onChange:i,className:I,...S})=>{const c=C(f,r),k=()=>c.reduce((n,e,o)=>(n[o]=e.props.pressed||!1,n),{}),[L,M]=u.useState(k),P=u.useCallback((n,e)=>{M(o=>{let s={};switch(m){case"checkbox":s={...o},s[e]=!o[e];break;case"radio-toggle":s[e]=!o[e];break;case"radio":s[e]=!0;break}return i&&i(n,{pressedButtonsIndex:s}),s})},[m,i]);return t("div",{className:q(I,"toggle-button-group"),"data-columns-min":B,"data-columns-xs":T,"data-columns-sm":w,"data-columns-md":x,"data-columns-xl":E,...S,children:t("ul",{"aria-label":a,"aria-labelledby":y,children:c.map((n,e)=>t("li",{children:u.cloneElement(n,{layoutType:h,pressed:L[e],onToggle:o=>{P(o,e)}})},e))})})},H={title:"Buttons/ebay-toggle-button-group",component:b,argTypes:{a11yText:{control:{type:"text"},table:{type:{summary:"string"}},description:"Accessibility text for the group. Cannot be used together with `a11yLabelId`"},a11yLabelId:{control:{type:"text"},table:{type:{summary:"string"}},description:"Id of the element that labels the group. Required for a11y compliance. Cannot be used together with `a11yText`"},variant:{options:["checkbox","radio","radio-toggle"],control:{type:"select"},table:{defaultValue:{summary:"checkbox"},type:{summary:"string"}},description:'Selection type for the buttons in the group. May be "checkbox" (default), "radio", or "radio-toggle" (same as radio but with the option to deselect)'},layoutType:{options:["minimal","list","gallery"],control:{type:"select"},table:{defaultValue:{summary:"minimal"},type:{summary:["minimal","list","gallery"]}},description:"Enforced layout type of all buttons. May be `minimal` (default), `list`, or `gallery`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may not be used when there is an icon or an image"},onChange:{action:"changed",table:{category:"Events",defaultValue:{summary:"originalEvent,  pressedButtons"}},description:"Triggered when the pressed state changes"},columnsMin:{control:{type:"number"},type:{name:"number",required:!1},name:"columnsMin",table:{type:{summary:"number"}},description:"Preferred minimum number of columns for smallest container/screen (1-3). If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsXS:{control:{type:"number"},type:{name:"number",required:!1},name:"columnsXS",table:{type:{summary:"number"}},description:"Preferred minimum number of columns within extra small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsSM:{control:{type:"number"},type:{name:"number",required:!1},name:"columnsSM",table:{type:{summary:"number"}},description:"Preferred minimum number of columns within small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsMD:{control:{type:"number"},type:{name:"number",required:!1},name:"columnsMD",table:{type:{summary:"number"}},description:"Preferred minimum number of columns within medium containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsXL:{control:{type:"number"},type:{name:"number",required:!1},name:"columnsXL",table:{type:{summary:"number"}},description:"Preferred minimum number of columns within extra large containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."}},decorators:[a=>t("div",{style:{padding:"3rem"},children:t(a,{})})],parameters:{layout:"left",controls:{expanded:!0},options:{storySort:{order:["buttons","dialogs","form input","graphics & icons","media","navigation & disclosure","notices & tips","progress","building blocks"]}}}},l={render:a=>j(b,{...a,children:[t(r,{pressed:!0,title:"Button1"}),t(r,{children:"Child Button"}),t(r,{title:"Button2",subtitle:"subtitle"}),t(r,{icon:"settings24",title:"Button3",subtitle:"subtitle"}),t(r,{title:"Button4",subtitle:"subtitle",img:{src:"https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",alt:"image alt"}})]})};var d,p,g;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    return <EbayToggleButtonGroup {...args}>
                <EbayToggleButton pressed title="Button1" />
                <EbayToggleButton>Child Button</EbayToggleButton>
                <EbayToggleButton title="Button2" subtitle={'subtitle'} />
                <EbayToggleButton icon="settings24" title="Button3" subtitle="subtitle"></EbayToggleButton>
                <EbayToggleButton title="Button4" subtitle="subtitle" img={{
        src: 'https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg',
        alt: 'image alt'
      }}></EbayToggleButton>
            </EbayToggleButtonGroup>;
  }
}`,...(g=(p=l.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const N=["Default"];export{l as Default,N as __namedExportsOrder,H as default};

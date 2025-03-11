import{a,j as y}from"./index-Zi3BSDNR.js";import{F as f,L as E}from"./description-CSXh5-Hx.js";import{E as t}from"./tri-state-checkbox-DCO58V3q.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-C255J9-O.js";import"./array.polyfill.flat-BbWyepmC.js";const w={component:t,title:"form input/ebay-tri-state-checkbox",argTypes:{checked:{options:["false","mixed","true"],control:{type:"select"},description:'Either "true", "false" or "mixed". Changes the checkbox state to the given one depdending on the checked state.'},skipMixed:{type:"boolean",control:{type:"boolean"},description:"If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none."},size:{options:["default","large"],control:{type:"select"},description:'Either "large" or "default". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)',table:{defaultValue:{summary:"default"}}},onChange:{action:"onChange",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"originalEvent, { value, checked }"}}},onFocus:{action:"onFocus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"originalEvent, { value, checked }"}}},onKeyDown:{action:"onKeydown",description:"Triggered on key down",table:{category:"Events",defaultValue:{summary:"originalEvent, { value, checked }"}}}}},r=e=>a(t,{...e,value:"123",id:"checkbox-11"}),o=e=>a(t,{...e,checked:"mixed",value:"123",id:"checkbox-11"});o.argTypes={checked:{table:{disable:!0}}};const c=e=>y(f,{children:[a(t,{...e,value:"123",id:"checkbox-11"}),a(E,{className:"field__label field__label--end",htmlFor:"checkbox-11",children:"Label"})]}),s=e=>y(f,{children:[a(t,{...e,value:"123",disabled:!0,id:"checkbox-11"}),a(E,{className:"field__label--disabled",style:{marginLeft:"8px"},htmlFor:"checkbox-11",children:"Label"})]});var l,i,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:'args => <EbayTriStateCheckbox {...args} value="123" id="checkbox-11" />',...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var n,b,h;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:'args => <EbayTriStateCheckbox {...args} checked="mixed" value="123" id="checkbox-11" />',...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var m,u,p;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`args => <EbayField>
        <EbayTriStateCheckbox {...args} value="123" id="checkbox-11" />
        <EbayLabel className="field__label field__label--end" htmlFor="checkbox-11">Label</EbayLabel>
    </EbayField>`,...(p=(u=c.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,x,k;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => <EbayField>
        <EbayTriStateCheckbox {...args} value="123" disabled id="checkbox-11" />
        <EbayLabel className="field__label--disabled" style={{
    marginLeft: "8px"
  }} htmlFor="checkbox-11">Label</EbayLabel>
    </EbayField>`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const D=["Default","MixedCheckbox","WithLabel","Disabled"];export{r as Default,s as Disabled,o as MixedCheckbox,c as WithLabel,D as __namedExportsOrder,w as default};

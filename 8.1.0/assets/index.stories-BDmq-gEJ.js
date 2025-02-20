import{a as e}from"./index-Zi3BSDNR.js";import{r as L}from"./index-CBqU2yxZ.js";import{a as l}from"./chunk-AY7I2SME-DUSEA8To.js";import{T as t}from"./toggle-button-BMLYKNPm.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-SayoFab4.js";import"./array.polyfill.flat-CRkN-9z9.js";const D={title:"Buttons/ebay-toggle-button",component:t,argTypes:{title:{control:{type:"text"},description:"Title attribute for the button",table:{type:{summary:"string"}}},subtitle:{control:{type:"text"},description:"Subtitle attribute for the button",table:{type:{summary:"string"}}},pressed:{control:{type:"boolean"},description:"Pressed state of the button",type:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Pressed state of the button",type:"boolean",table:{type:{summary:"boolean"}}},layoutType:{options:["minimal","list","gallery"],control:{type:"select"},table:{defaultValue:{summary:"minimal"}},description:"Enforced layout type of all buttons. May be `minimal` (default), `list`, or `gallery`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may not be used when there is an icon or an image"},icon:{description:"Name of EbayIcon for the component",table:{type:{summary:"EbayIcon"}}},img:{description:"Image for the component",table:{type:{summary:"ToggleButtonImge = {src: string; alt: string; fillPlacement?: string}"}}}}},o={render:x=>{const[i,I]=L.useState(!1);return e(t,{pressed:i,onToggle:()=>I(!i),title:"Button 1",subtitle:"subtitle",...x})}},s=()=>e(t,{pressed:!1,onToggle:l("togle"),children:e("p",{children:"Button 1"})}),n=()=>e(t,{pressed:!1,title:"Button 1",subtitle:"Some context here",onToggle:l("togle"),icon:"settings24"}),a=()=>e(t,{pressed:!1,title:"Button 1",subtitle:"Some context here",onToggle:l("togle"),img:{src:"https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",alt:"image alt"}}),r=()=>e(t,{pressed:!1,title:"Button 1",subtitle:"Some context here",onToggle:l("togle"),layoutType:"gallery",img:{src:"https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",alt:"image alt",fillPlacement:"top"}});var g,u,c;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [isPressed, setIsPressed] = useState(false);
    return <EbayToggleButton pressed={isPressed} onToggle={() => setIsPressed(!isPressed)} title={'Button 1'} subtitle={'subtitle'} {...args}></EbayToggleButton>;
  }
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,p,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => <EbayToggleButton pressed={false} onToggle={action('togle')}>
        <p>Button 1</p>
    </EbayToggleButton>`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var y,b,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`() => <EbayToggleButton pressed={false} title={'Button 1'} subtitle={'Some context here'} onToggle={action('togle')} icon="settings24"></EbayToggleButton>`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var B,h,T;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`() => <EbayToggleButton pressed={false} title={'Button 1'} subtitle={'Some context here'} onToggle={action('togle')} img={{
  src: 'https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg',
  alt: 'image alt'
}}></EbayToggleButton>`,...(T=(h=a.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var S,E,P;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`() => <EbayToggleButton pressed={false} title={'Button 1'} subtitle={'Some context here'} onToggle={action('togle')} layoutType="gallery" img={{
  src: 'https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg',
  alt: 'image alt',
  fillPlacement: 'top'
}}></EbayToggleButton>`,...(P=(E=r.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};const V=["Default","WithChildren","IconButton","ImageButton","ImageButtonWithPlacement"];export{o as Default,n as IconButton,a as ImageButton,r as ImageButtonWithPlacement,s as WithChildren,V as __namedExportsOrder,D as default};

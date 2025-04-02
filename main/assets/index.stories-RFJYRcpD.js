import{j as n,F as i,a as e}from"./index-Zi3BSDNR.js";import{r as K}from"./index-CBqU2yxZ.js";import{a as y}from"./chunk-AY7I2SME-DUSEA8To.js";import{L as r,F as g}from"./description-CsOth_nc.js";import{E as U}from"./button-RS10xsIW.js";import{E as a}from"./radio-CHyHaPva.js";import"./_commonjsHelpers-BosuxZz1.js";import"./array.polyfill.flat-Dy-SzZg6.js";import"./icon-CvveAkDH.js";import"./progress-spinner-BFy5XL72.js";const ee={title:"form input/ebay-radio"},s=()=>n(i,{children:[e("p",{children:e(a,{value:"123",id:"radio-1",children:e(r,{children:"Default"})})}),e("p",{children:e(a,{value:"123",id:"radio-11",size:"large",children:e(r,{children:"Large"})})})]}),c={render:()=>n(i,{children:[n("p",{children:[e(a,{value:"123",id:"radio-1"}),e("label",{className:"field__label field__label--end",htmlFor:"radio-1",children:"Default"})]}),n("p",{children:[e(a,{value:"123",id:"radio-11",size:"large"}),e("label",{className:"field__label field__label--end",htmlFor:"radio-11",children:"Large"})]})]}),name:"Using custom label html"},u={render:()=>e(i,{children:e(a,{checked:!0,id:"radio-2",children:e(r,{children:"Selected"})})}),name:"Selected radio-button"},m={render:()=>e(i,{children:e(a,{disabled:!0,id:"radio-20",children:e(r,{children:"Disabled"})})}),name:"Disabled radio-button"},p={render:()=>{const d={onChange:(t,o)=>y("onChange")(t,o),onFocus:(t,o)=>y("onFocus")(t,o),onKeyDown:(t,o)=>y("onKeyDown")(t,o)};return n("fieldset",{children:[e("legend",{children:"Choose an Option"}),e(g,{children:e(a,{id:"group-radio-1",value:"1",defaultChecked:!0,name:"radio-group",...d,children:e(r,{children:"Option 1"})})}),e(g,{children:e(a,{id:"group-radio-2",value:"2",defaultChecked:!1,name:"radio-group",...d,children:e(r,{children:"Option 2"})})}),e(g,{children:e(a,{id:"group-radio-3",value:"3",defaultChecked:!1,name:"radio-group",...d,children:e(r,{children:"Option 3"})})})]})},name:"Grouped radio-buttons"},b={render:()=>n(i,{children:[e("style",{dangerouslySetInnerHTML:{__html:`
                .custom ~ label,
                .custom .radio__icon svg { color: green !important }
                `}}),e(a,{className:"custom","aria-label":"custom color radio example",id:"radio-30",children:e(r,{children:"Custom style"})})]}),name:"Styled radio-button"},h={render:()=>{const d=["Regular","Express","Local Pickup"];return e(i,{children:e(()=>{const[o,f]=K.useState(d[0]),I=(l,...E)=>{y("radio-change")(l,...E),f(l.target.value)};return n("div",{children:[n("fieldset",{children:[e("legend",{children:"Choose your delivery"}),d.map((l,E)=>e(g,{children:e(a,{id:`delivery-${E}`,checked:o===l,value:l,name:"delivery-method",onChange:I,children:e(r,{children:l})})},`delivery-${l}`))]}),n("div",{style:{display:"flex",alignItems:"center",marginTop:"2rem"},children:[n("div",{style:{marginRight:"1rem"},children:["Current selected: ",e("strong",{children:o})]}),e(U,{onClick:()=>f(d[1]),children:"Reset to default (Express)"})]})]})},{})})},name:"Controlled component"};var v,C,R;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => <>
        <p>
            <EbayRadio value="123" id="radio-1">
                <EbayLabel>Default</EbayLabel>
            </EbayRadio>
        </p>
        <p>
            <EbayRadio value="123" id="radio-11" size="large">
                <EbayLabel>Large</EbayLabel>
            </EbayRadio>
        </p>
    </>`,...(R=(C=s.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var L,_,S;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <>
            <p>
                <EbayRadio value="123" id="radio-1" />
                <label className="field__label field__label--end" htmlFor="radio-1">
                    Default
                </label>
            </p>
            <p>
                <EbayRadio value="123" id="radio-11" size="large" />
                <label className="field__label field__label--end" htmlFor="radio-11">
                    Large
                </label>
            </p>
        </>,
  name: 'Using custom label html'
}`,...(S=(_=c.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var F,x,D;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <>
            <EbayRadio checked id="radio-2">
                <EbayLabel>Selected</EbayLabel>
            </EbayRadio>
        </>,
  name: 'Selected radio-button'
}`,...(D=(x=u.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var k,B,O;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <>
            <EbayRadio disabled id="radio-20">
                <EbayLabel>Disabled</EbayLabel>
            </EbayRadio>
        </>,
  name: 'Disabled radio-button'
}`,...(O=(B=m.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var T,V,M;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const defaultProps = {
      onChange: (e, props) => action('onChange')(e, props),
      onFocus: (e, props) => action('onFocus')(e, props),
      onKeyDown: (e, props) => action('onKeyDown')(e, props)
    };
    return <fieldset>
                <legend>Choose an Option</legend>
                <EbayField>
                    <EbayRadio id="group-radio-1" value="1" defaultChecked name="radio-group" {...defaultProps}>
                        <EbayLabel>Option 1</EbayLabel>
                    </EbayRadio>
                </EbayField>
                <EbayField>
                    <EbayRadio id="group-radio-2" value="2" defaultChecked={false} name="radio-group" {...defaultProps}>
                        <EbayLabel>Option 2</EbayLabel>
                    </EbayRadio>
                </EbayField>
                <EbayField>
                    <EbayRadio id="group-radio-3" value="3" defaultChecked={false} name="radio-group" {...defaultProps}>
                        <EbayLabel>Option 3</EbayLabel>
                    </EbayRadio>
                </EbayField>
            </fieldset>;
  },
  name: 'Grouped radio-buttons'
}`,...(M=(V=p.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var P,N,w;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <>
            <style dangerouslySetInnerHTML={{
      __html: \`
                .custom ~ label,
                .custom .radio__icon svg { color: green !important }
                \`
    }} />
            <EbayRadio className="custom" aria-label="custom color radio example" id="radio-30">
                <EbayLabel>Custom style</EbayLabel>
            </EbayRadio>
        </>,
  name: 'Styled radio-button'
}`,...(w=(N=b.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var z,G,H;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const deliveryMethods = ['Regular', 'Express', 'Local Pickup'];
    const TestControlledComponent = () => {
      const [selectedValue, setSelectedValue] = useState(deliveryMethods[0]);
      const handleChange = (e, ...rest) => {
        action('radio-change')(e, ...rest);
        setSelectedValue(e.target.value);
      };
      return <div>
                    <fieldset>
                        <legend>Choose your delivery</legend>
                        {deliveryMethods.map((item, index) => <EbayField key={\`delivery-\${item}\`}>
                                <EbayRadio id={\`delivery-\${index}\`} checked={selectedValue === item} value={item} name="delivery-method" onChange={handleChange}>
                                    <EbayLabel>{item}</EbayLabel>
                                </EbayRadio>
                            </EbayField>)}
                    </fieldset>

                    <div style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '2rem'
        }}>
                        <div style={{
            marginRight: '1rem'
          }}>
                            Current selected: <strong>{selectedValue}</strong>
                        </div>

                        <EbayButton onClick={() => setSelectedValue(deliveryMethods[1])}>
                            Reset to default (Express)
                        </EbayButton>
                    </div>
                </div>;
    };
    return <>
                <TestControlledComponent />
            </>;
  },
  name: 'Controlled component'
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const ae=["Default","UsingCustomLabelHtml","SelectedRadioButton","DisabledRadioButton","GroupedRadioButtons","StyledRadioButton","ControlledComponent"];export{h as ControlledComponent,s as Default,m as DisabledRadioButton,p as GroupedRadioButtons,u as SelectedRadioButton,b as StyledRadioButton,c as UsingCustomLabelHtml,ae as __namedExportsOrder,ee as default};

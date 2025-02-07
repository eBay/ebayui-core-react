import{j as l,a as e,F as I}from"./index-Zi3BSDNR.js";import{E as n}from"./textbox-C0cCMqAO.js";import"./hooks-Dbuzk741.js";import{E as q}from"./ebay-switch-DMiJINBt.js";import{E as B}from"./checkbox-D1Gt79TA.js";import{F as a,L as r,D as d}from"./description-CsOth_nc.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./array.polyfill.flat-B2zLxK2S.js";import"./utils-TtUCv-3a.js";import"./icon-BNquVzbE.js";import"./icon-button-BSVWIz2w.js";import"./badge-OaR5SFvt.js";const P={title:"form input/ebay-field"},i={render:()=>l("div",{children:[l(a,{children:[e(r,{children:"Label for textbox"}),e(n,{placeholder:"placeholder text"})]}),l(a,{children:[e(r,{children:"Label for switch"}),e(q,{value:"123",id:"switch-1"})]}),l(a,{children:[e(r,{children:"Label for checkbox"}),e(B,{defaultChecked:!0,id:"checkbox-2"})]})]}),name:"Default - inline"},o=()=>l("div",{children:[l(a,{layout:"block",children:[e(r,{stacked:!0,children:"Label 1"}),e(n,{placeholder:"placeholder text"})]}),l(a,{layout:"block",children:[e(r,{stacked:!0,children:"Label 1"}),e(n,{placeholder:"placeholder text"})]}),l(a,{layout:"block",children:[e(r,{stacked:!0,children:"Label 1"}),e(n,{placeholder:"placeholder text"})]})]}),t={render:()=>l("div",{children:[l(a,{children:[e(r,{children:"Label 1"}),e(n,{placeholder:"placeholder text"})]}),l(a,{children:[e(r,{children:"Label 2"}),e(n,{placeholder:"placeholder text"})]}),l(a,{layout:"block",children:[e(r,{children:"Label 3"}),e(n,{placeholder:"placeholder text"})]}),l(a,{children:[e(r,{children:"Label 4"}),e(n,{placeholder:"placeholder text"})]}),l(a,{children:[e(r,{children:"Label 5"}),e(n,{placeholder:"placeholder text"})]})]}),name:"Block and inline combination"},c={render:()=>l("div",{children:[l(a,{children:[e(r,{required:!0,children:"Label 1"}),e(n,{placeholder:"placeholder text"})]}),l(a,{children:[e(r,{children:"Label 1"}),e(n,{placeholder:"placeholder text"})]}),l(a,{children:[e(r,{children:"Label 1"}),e(n,{placeholder:"placeholder text"})]})]}),name:"required"},b={render:()=>l("div",{children:[l(a,{layout:"block",children:[e(r,{stacked:!0,htmlFor:"field1",children:"Label 1"}),e(n,{placeholder:"placeholder text",id:"field1"}),e(d,{children:"Some description Text"})]}),l(a,{layout:"block",children:[e(r,{stacked:!0,children:"Label 2"}),e(n,{placeholder:"placeholder text"}),e(d,{type:"confirmation",children:"Some description Text"})]}),l(a,{layout:"block",children:[e(r,{stacked:!0,children:"Label 3"}),e(n,{placeholder:"placeholder text",invalid:!0}),e(d,{type:"attention",children:"Some description Text"})]}),l(a,{layout:"block",children:[e(r,{stacked:!0,htmlFor:"field4",children:"Label 4"}),e(n,{placeholder:"placeholder text",id:"field4"}),e(d,{type:"confirmation",position:"below",children:"Some description Text"})]})]}),name:"with description"},h={render:()=>l(I,{children:[e("p",{children:l(a,{children:[e(n,{placeholder:"placeholder text"}),e(r,{position:"end",children:"Label 1"})]})}),e("p",{children:l(a,{children:[e(q,{value:"123",id:"switch-1"}),e(r,{position:"end",children:"Label 1"})]})}),e("p",{children:l(a,{children:[e(B,{defaultChecked:!0,id:"checkbox-2"}),e(r,{position:"end",children:"Label 1"})]})})]}),name:"Labels on the right"};var p,y,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div>
            <EbayField>
                <EbayLabel>Label for textbox</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label for switch</EbayLabel>
                <EbaySwitch value="123" id="switch-1" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label for checkbox</EbayLabel>
                <EbayCheckbox defaultChecked id="checkbox-2" />
            </EbayField>
        </div>,
  name: 'Default - inline'
}`,...(s=(y=i.parameters)==null?void 0:y.docs)==null?void 0:s.source}}};var E,x,L;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`() => <div>
        <EbayField layout="block">
            <EbayLabel stacked>Label 1</EbayLabel>
            <EbayTextbox placeholder="placeholder text" />
        </EbayField>
        <EbayField layout="block">
            <EbayLabel stacked>Label 1</EbayLabel>
            <EbayTextbox placeholder="placeholder text" />
        </EbayField>
        <EbayField layout="block">
            <EbayLabel stacked>Label 1</EbayLabel>
            <EbayTextbox placeholder="placeholder text" />
        </EbayField>
    </div>`,...(L=(x=o.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var m,u,F;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div>
            <EbayField>
                <EbayLabel>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label 2</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField layout="block">
                <EbayLabel>Label 3</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label 4</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label 5</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
        </div>,
  name: 'Block and inline combination'
}`,...(F=(u=t.parameters)==null?void 0:u.docs)==null?void 0:F.source}}};var k,f,T;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div>
            <EbayField>
                <EbayLabel required>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
        </div>,
  name: 'required'
}`,...(T=(f=c.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var v,S,D;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div>
            <EbayField layout="block">
                <EbayLabel stacked htmlFor="field1">
                    Label 1
                </EbayLabel>
                <EbayTextbox placeholder="placeholder text" id="field1" />
                <EbayFieldDescription>Some description Text</EbayFieldDescription>
            </EbayField>
            <EbayField layout="block">
                <EbayLabel stacked>Label 2</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
                <EbayFieldDescription type="confirmation">Some description Text</EbayFieldDescription>
            </EbayField>
            <EbayField layout="block">
                <EbayLabel stacked>Label 3</EbayLabel>
                <EbayTextbox placeholder="placeholder text" invalid />
                <EbayFieldDescription type="attention">Some description Text</EbayFieldDescription>
            </EbayField>
            <EbayField layout="block">
                <EbayLabel stacked htmlFor="field4">
                    Label 4
                </EbayLabel>
                <EbayTextbox placeholder="placeholder text" id="field4" />
                <EbayFieldDescription type="confirmation" position="below">
                    Some description Text
                </EbayFieldDescription>
            </EbayField>
        </div>,
  name: 'with description'
}`,...(D=(S=b.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var w,g,C;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <>
            <p>
                <EbayField>
                    <EbayTextbox placeholder="placeholder text" />
                    <EbayLabel position="end">Label 1</EbayLabel>
                </EbayField>
            </p>
            <p>
                <EbayField>
                    <EbaySwitch value="123" id="switch-1" />
                    <EbayLabel position="end">Label 1</EbayLabel>
                </EbayField>
            </p>
            <p>
                <EbayField>
                    <EbayCheckbox defaultChecked id="checkbox-2" />
                    <EbayLabel position="end">Label 1</EbayLabel>
                </EbayField>
            </p>
        </>,
  name: 'Labels on the right'
}`,...(C=(g=h.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const Q=["DefaultInline","Block","BlockAndInlineCombination","Required","WithDescription","LabelsOnTheRight"];export{o as Block,t as BlockAndInlineCombination,i as DefaultInline,h as LabelsOnTheRight,c as Required,b as WithDescription,Q as __namedExportsOrder,P as default};

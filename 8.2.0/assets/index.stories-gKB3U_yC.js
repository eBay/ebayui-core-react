import{a as e,F as a,j as t}from"./index-Zi3BSDNR.js";import{r as X}from"./index-CBqU2yxZ.js";import{a as l}from"./chunk-AY7I2SME-DUSEA8To.js";import{E as Y}from"./button-BqEFNO2p.js";import{E as o,a as n}from"./ebay-select-1YZ7O4Za.js";import"./_commonjsHelpers-BosuxZz1.js";import"./array.polyfill.flat-BPyFd8oc.js";import"./icon-oMeKLN1n.js";import"./progress-spinner-DWLE2DNw.js";import"./utils-DGOqOJvM.js";import"./hooks-CxrULycr.js";const de={title:"form input/ebay-select"},c=()=>e(a,{children:t(o,{name:"formSelect",onChange:(h,r)=>l("onChange")(h,r),children:[e(n,{value:"1",children:"Option 1"}),e(n,{value:"2",children:"Option 2"}),e(n,{value:"3",children:"Option 3"})]})}),i={render:()=>e(a,{children:t(o,{name:"formSelect",value:"3","aria-invalid":"true",onChange:l("select-change"),"aria-label":"Please select a option",children:[e(n,{value:"1",children:"Option 1"}),e(n,{value:"2",children:"Option 2"}),e(n,{value:"3",children:"Option 3"})]})}),name:"Invalid select"},p={render:()=>e(a,{children:t(o,{name:"formSelect",onChange:l("select-change"),children:[e(n,{value:"pre",children:"Option PRE"}),e(n,{optgroup:"Group 1",value:"1",children:"Option 1[Group 1]"}),e(n,{optgroup:"Group 1",value:"2",children:"Option 2[Group 1]"}),e(n,{optgroup:"Group 1",value:"3",children:"Option 3[Group 1]"}),e(n,{value:"mid",children:"Option MID"}),e(n,{optgroup:"Group 2",value:"4",children:"Option 4[Group 2]"}),e(n,{optgroup:"Group 2",value:"5",children:"Option 5[Group 2]"}),e(n,{optgroup:"Group 2",value:"6",children:"Option 6[Group 2]"}),e(n,{optgroup:"Group 3",value:"7",children:"Option 7[Group 3]"}),e(n,{optgroup:"Group 3",value:"8",children:"Option 8[Group 3]"}),e(n,{optgroup:"Group 3",value:"9",children:"Option 9[Group 3]"}),e(n,{value:"post",children:"Option POST"})]})}),name:"Grouped options"},s={render:()=>e(a,{children:t(o,{borderless:!0,defaultValue:"4",name:"formSelect",onChange:l("select-change"),children:[e(n,{value:"1",children:"Option 1"}),e(n,{value:"2",children:"Option 2"}),e(n,{value:"3",children:"Option 3"})]})}),name:"Borderless select"},u={render:()=>e(a,{children:t(o,{className:"customclass",disabled:!0,name:"formSelect",children:[e(n,{value:"1",children:"Option 1"}),e(n,{value:"2",children:"Option 2"})]})}),name:"Disabled select"},d={render:()=>e(a,{children:t(o,{name:"formSelect",defaultValue:"3",onChange:l("select-change"),children:[e(n,{value:"1",children:"Option 1"}),e(n,{value:"2",children:"Option 2"}),e(n,{value:"3",children:"Option 3"})]})}),name:"Uncontrolled component with defaultValue"},S={render:()=>e(a,{children:e(()=>{const[r,E]=X.useState("UK");return e("div",{style:{width:"500px"},children:t("div",{style:{display:"flex",alignItems:"center"},children:[t(o,{name:"selectCountry",value:r,onChange:($,{index:ee,selected:Q})=>{E(Q[0])},children:[e(n,{value:"DE",children:"DE"}),e(n,{value:"US",children:"US"}),e(n,{value:"UK",children:"UK"}),e(n,{value:"AU",children:"AU"})]}),t("div",{style:{margin:"0 2rem"},children:["Current selected: ",e("strong",{children:r})]}),e(Y,{onClick:()=>E("US"),children:"Set selected to US"})]})})},{})}),name:"Controlled component"},O={render:()=>e(a,{children:t(o,{name:"formSelect",onChange:l("select-change"),floatingLabel:"Label",children:[e(n,{value:"",children:"Choose an option"}),e(n,{value:"1",children:"Option 1"}),e(n,{value:"2",children:"Option 2"}),e(n,{value:"3",children:"Option 3"})]})}),name:"Floating label"},b={render:()=>e(a,{children:t(o,{name:"formSelect",value:"3","aria-invalid":"true",onChange:l("select-change"),floatingLabel:"Invalid label","aria-label":"Please select a option",children:[e(n,{value:"1",children:"Option 1"}),e(n,{value:"2",children:"Option 2"}),e(n,{value:"3",children:"Option 3"})]})}),name:"Invalid floating label select"},m=()=>e(a,{children:t(o,{name:"formSelect",onChange:l("select-change"),floatingLabel:"Label",inputSize:"large",children:[e(n,{value:"",children:"Choose an option"}),e(n,{value:"1",children:"Option 1"}),e(n,{value:"2",children:"Option 2"}),e(n,{value:"3",children:"Option 3"})]})});var y,v,g;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`() => <>
        <EbaySelect name="formSelect" onChange={(e: ChangeEvent, props: ChangeEventProps) => action('onChange')(e, props)}>
            <EbaySelectOption value="1">Option 1</EbaySelectOption>
            <EbaySelectOption value="2">Option 2</EbaySelectOption>
            <EbaySelectOption value="3">Option 3</EbaySelectOption>
        </EbaySelect>
    </>`,...(g=(v=c.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var C,f,G;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <>
            <EbaySelect name="formSelect" value="3" aria-invalid="true" onChange={action('select-change')} aria-label="Please select a option">
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: 'Invalid select'
}`,...(G=(f=i.parameters)==null?void 0:f.docs)==null?void 0:G.source}}};var U,L,V;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <>
            <EbaySelect name="formSelect" onChange={action('select-change')}>
                <EbaySelectOption value="pre">Option PRE</EbaySelectOption>
                <EbaySelectOption optgroup="Group 1" value="1">
                    Option 1[Group 1]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 1" value="2">
                    Option 2[Group 1]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 1" value="3">
                    Option 3[Group 1]
                </EbaySelectOption>
                <EbaySelectOption value="mid">Option MID</EbaySelectOption>
                <EbaySelectOption optgroup="Group 2" value="4">
                    Option 4[Group 2]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 2" value="5">
                    Option 5[Group 2]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 2" value="6">
                    Option 6[Group 2]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 3" value="7">
                    Option 7[Group 3]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 3" value="8">
                    Option 8[Group 3]
                </EbaySelectOption>
                <EbaySelectOption optgroup="Group 3" value="9">
                    Option 9[Group 3]
                </EbaySelectOption>
                <EbaySelectOption value="post">Option POST</EbaySelectOption>
            </EbaySelect>
        </>,
  name: 'Grouped options'
}`,...(V=(L=p.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var I,x,D;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <>
            <EbaySelect borderless defaultValue="4" name="formSelect" onChange={action('select-change')}>
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: 'Borderless select'
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var B,P,F;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <>
            <EbaySelect className="customclass" disabled name="formSelect">
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
            </EbaySelect>
        </>,
  name: 'Disabled select'
}`,...(F=(P=u.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var T,K,w;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <>
            <EbaySelect name="formSelect" defaultValue="3" onChange={action('select-change')}>
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: 'Uncontrolled component with defaultValue'
}`,...(w=(K=d.parameters)==null?void 0:K.docs)==null?void 0:w.source}}};var A,j,M;S.parameters={...S.parameters,docs:{...(A=S.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const TestControlledComponent = () => {
      const [selectedValue, setSelectedValue] = useState('UK');
      const handleChange = (e: ChangeEvent<HTMLSelectElement>, {
        index,
        selected
      }: {
        index: number;
        selected: string[];
      }) => {
        setSelectedValue(selected[0]);
      };
      return <div style={{
        width: '500px'
      }}>
                    <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
                        <EbaySelect name="selectCountry" value={selectedValue} onChange={handleChange}>
                            <EbaySelectOption value="DE">DE</EbaySelectOption>
                            <EbaySelectOption value="US">US</EbaySelectOption>
                            <EbaySelectOption value="UK">UK</EbaySelectOption>
                            <EbaySelectOption value="AU">AU</EbaySelectOption>
                        </EbaySelect>

                        <div style={{
            margin: '0 2rem'
          }}>
                            Current selected: <strong>{selectedValue}</strong>
                        </div>
                        <EbayButton onClick={() => setSelectedValue('US')}>Set selected to US</EbayButton>
                    </div>
                </div>;
    };
    return <>
                <TestControlledComponent />
            </>;
  },
  name: 'Controlled component'
}`,...(M=(j=S.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var _,k,z;O.parameters={...O.parameters,docs:{...(_=O.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <>
            <EbaySelect name="formSelect" onChange={action('select-change')} floatingLabel="Label">
                <EbaySelectOption value="">Choose an option</EbaySelectOption>
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: 'Floating label'
}`,...(z=(k=O.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var N,R,W;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <>
            <EbaySelect name="formSelect" value="3" aria-invalid="true" onChange={action('select-change')} floatingLabel="Invalid label" aria-label="Please select a option">
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        </>,
  name: 'Invalid floating label select'
}`,...(W=(R=b.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var H,q,J;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`() => <>
        <EbaySelect name="formSelect" onChange={action('select-change')} floatingLabel="Label" inputSize="large">
            <EbaySelectOption value="">Choose an option</EbaySelectOption>
            <EbaySelectOption value="1">Option 1</EbaySelectOption>
            <EbaySelectOption value="2">Option 2</EbaySelectOption>
            <EbaySelectOption value="3">Option 3</EbaySelectOption>
        </EbaySelect>
    </>`,...(J=(q=m.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};const Se=["Basic","InvalidSelect","GroupedOptions","BorderlessSelect","DisabledSelect","UncontrolledComponentWithDefaultValue","ControlledComponent","FloatingLabel","InvalidFloatingLabelSelect","LargeSelect"];export{c as Basic,s as BorderlessSelect,S as ControlledComponent,u as DisabledSelect,O as FloatingLabel,p as GroupedOptions,b as InvalidFloatingLabelSelect,i as InvalidSelect,m as LargeSelect,d as UncontrolledComponentWithDefaultValue,Se as __namedExportsOrder,de as default};

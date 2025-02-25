import{a as e,F as r,j as i}from"./index-Zi3BSDNR.js";import{R as nn,r as K}from"./index-CBqU2yxZ.js";import{a as t}from"./chunk-AY7I2SME-DUSEA8To.js";import{E as D}from"./button-D-JQsDlM.js";import{E as n,a as O,b as R,c as an,d as on}from"./textbox-hMkdE5Pa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./array.polyfill.flat-CxADX4yX.js";import"./icon-DNBNq_jz.js";import"./progress-spinner-CzG5ZNgr.js";import"./utils-17YnJg7s.js";import"./icon-button-iJOAJmnk.js";import"./badge-Czki0tyX.js";import"./hooks-BL8TaGmf.js";const fn={title:"form input/ebay-textbox"},p={render:()=>e(n,{defaultValue:"EbayTextbox"}),name:"Default textbox"},b={render:()=>e(r,{children:e(()=>{const s=nn.useRef(null),[l,u]=K.useState(""),A=(o,a)=>{t("onInputChange")(o,a),u(a.value)},c=(o,a)=>{t("onButtonClick")(o,a),u("")};return i("form",{ref:s,children:[e("p",{children:e(n,{value:l,onChange:(o,a)=>t("onChange")(o,a),onInputChange:(o,a)=>A(o,a),onFocus:(o,a)=>t("onFocus")(o,a),onBlur:(o,a)=>t("onBlur")(o,a),onKeyPress:(o,a)=>t("onKeyPress")(o,a),onKeyUp:(o,a)=>t("onKeyUp")(o,a),onKeyDown:(o,a)=>t("onKeyDown")(o,a),onInvalid:(o,a)=>t("onInvalid")(o,a),onButtonClick:(o,a)=>c(o,a),required:!0,children:e(R,{name:"clear16",buttonAriaLabel:"Clear",style:{opacity:l.length?"1":"0"}})})}),e("p",{children:e(D,{onClick:o=>{var a;o.preventDefault(),(a=s.current)==null||a.reportValidity()},children:"Check value presence"})})]})},{})}),name:"Testing callbacks"},x={render:()=>e(r,{children:e(n,{disabled:!0})}),name:"Disabled textbox"},m={render:()=>e(r,{children:e(n,{placeholder:"placeholder text"})}),name:"Placeholder textbox"},h={render:()=>e(r,{children:e(n,{invalid:!0})}),name:"Invalid textbox"},g={render:()=>e(r,{children:e(n,{fluid:!0})}),name:"Fluid textbox"},f={render:()=>e(r,{children:e(n,{type:"password"})}),name:"Password textbox"},C={render:()=>e(r,{children:e(n,{multiline:!0,defaultValue:`some default value
next line`})}),name:"Multiline textbox"},T={render:()=>e(r,{children:e(n,{multiline:!0,invalid:!0,defaultValue:"some default value"})}),name:"Multiline invalid textbox"},y={render:()=>e(r,{children:e(n,{autoFocus:!0,placeholder:"Should focus here"})}),name:"Autofocused textbox"},F={render:()=>e(r,{children:e(n,{placeholder:"placeholder text",inputSize:"large"})}),name:"Large textbox"},E={render:()=>i("div",{children:[e("p",{children:e(n,{placeholder:"email",children:e(O,{name:"mail16"})})}),e("p",{children:e(n,{placeholder:"username",children:e(R,{name:"profile20"})})}),e("p",{children:i(n,{placeholder:"search",onButtonClick:t("Clear!"),children:[e(O,{name:"search16"}),e(R,{name:"clear16",buttonAriaLabel:"Clear"})]})})]}),name:"With icon"},v={render:()=>i("div",{children:[e("p",{children:e(n,{placeholder:"0.00",children:e(an,{id:"prefix",children:"$"})})}),e("p",{children:e(n,{placeholder:"0",children:e(on,{id:"postfix",children:"in."})})})]}),name:"With Pre/Post fix text"},L={render:()=>e(r,{children:e(()=>{const[s,l]=K.useState("");return e(n,{onInputChange:(A,c)=>{l(c.value.substring(0,10))},value:s,placeholder:"Max 10 chars"})},{})}),name:"Control value from outside"},I={render:()=>{const d=nn.createRef();return e(r,{children:e(n,{forwardedRef:d})})},name:"Ref forwarding"},P={render:()=>e(n,{floatingLabel:"Floating label",onChange:t("onChange"),onInputChange:t("onInputChange"),onFloatingLabelInit:()=>t("onFloatingLabelInit")()}),name:"Floating label"},S={render:()=>e(n,{type:"date",floatingLabel:"Floating label",onChange:t("onChange"),onInputChange:t("onInputChange"),onFloatingLabelInit:()=>t("onFloatingLabelInit")()}),name:"Floating label type date"},w={render:()=>e(n,{onChange:t("textbox-changed"),floatingLabel:"Floating label",defaultValue:"Default value"}),name:"Floating label with value"},V={render:()=>e(n,{invalid:!0,onChange:t("textbox-changed"),floatingLabel:"Invalid Floating label"}),name:"Floating label invalid"},k={render:()=>i(r,{children:[e("p",{children:e(n,{floatingLabel:"Regular field"})}),e("p",{children:e(n,{floatingLabel:"Autofocused field",autoFocus:!0,onFocus:t("onFocus")})})]}),name:"Floating label with autofocus"},B={render:()=>e(r,{children:e(()=>{const[s,l]=K.useState("");return i(r,{children:[e("p",{children:e(n,{floatingLabel:"Will convert to lowercase",placeholder:"Enter some UPPERCASE",onChange:(A,{value:c})=>{l(c.toLowerCase())},value:s,size:30})}),e("p",{children:e(D,{onClick:()=>{l("changed text")},children:"Change text"})}),e("p",{children:e(D,{onClick:()=>{l("")},children:"Clear"})})]})},{})}),name:"Floating label with placeholder, controlled"},W={render:()=>e(n,{onChange:t("textbox-changed"),floatingLabel:"Floating label",multiline:!0}),name:"Floating label with multiline"},M={render:()=>e(n,{onChange:t("textbox-changed"),floatingLabel:"Floating label",multiline:!0,opaqueLabel:!0}),name:"Floating label with multiline and opaque label"};var q,U,z;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <EbayTextbox defaultValue="EbayTextbox" />,
  name: 'Default textbox'
}`,...(z=(U=p.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var H,j,_;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const TestComponent: FC = () => {
      const ref = React.useRef(null);
      const [value, setValue] = useState('');
      const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement & HTMLInputElement>, props: {
        value: string;
      }) => {
        action('onInputChange')(e, props);
        setValue(props.value);
      };
      const handleButtonClick = (e: KeyboardEvent & MouseEvent<HTMLTextAreaElement & HTMLInputElement>, props: {
        value: string;
      }) => {
        action('onButtonClick')(e, props);
        setValue('');
      };
      return <form ref={ref}>
                    <p>
                        <EbayTextbox value={value} onChange={(e, props) => action('onChange')(e, props)} onInputChange={(e, props) => handleInputChange(e, props)} onFocus={(e, props) => action('onFocus')(e, props)} onBlur={(e, props) => action('onBlur')(e, props)} onKeyPress={(e, props) => action('onKeyPress')(e, props)} onKeyUp={(e, props) => action('onKeyUp')(e, props)} onKeyDown={(e, props) => action('onKeyDown')(e, props)} onInvalid={(e, props) => action('onInvalid')(e, props)} onButtonClick={(e, props) => handleButtonClick(e, props)} required>
                            <EbayTextboxPostfixIcon name="clear16" buttonAriaLabel="Clear" style={{
              opacity: value.length ? '1' : '0'
            }} />
                        </EbayTextbox>
                    </p>
                    <p>
                        <EbayButton onClick={e => {
            e.preventDefault();
            ref.current?.reportValidity();
          }}>
                            Check value presence
                        </EbayButton>
                    </p>
                </form>;
    };
    return <>
                <TestComponent />
            </>;
  },
  name: 'Testing callbacks'
}`,...(_=(j=b.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var $,G,J;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <>
            <EbayTextbox disabled />
        </>,
  name: 'Disabled textbox'
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var N,Q,X;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <>
            <EbayTextbox placeholder="placeholder text" />
        </>,
  name: 'Placeholder textbox'
}`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <>
            <EbayTextbox invalid />
        </>,
  name: 'Invalid textbox'
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,ae,oe;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <>
            <EbayTextbox fluid />
        </>,
  name: 'Fluid textbox'
}`,...(oe=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var te,re,le;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <>
            <EbayTextbox type="password" />
        </>,
  name: 'Password textbox'
}`,...(le=(re=f.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,ie,ce;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <>
            <EbayTextbox multiline defaultValue={'some default value\\nnext line'} />
        </>,
  name: 'Multiline textbox'
}`,...(ce=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ue,pe;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <>
            <EbayTextbox multiline invalid defaultValue="some default value" />
        </>,
  name: 'Multiline invalid textbox'
}`,...(pe=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var be,xe,me;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <>
            <EbayTextbox autoFocus placeholder="Should focus here" />
        </>,
  name: 'Autofocused textbox'
}`,...(me=(xe=y.parameters)==null?void 0:xe.docs)==null?void 0:me.source}}};var he,ge,fe;F.parameters={...F.parameters,docs:{...(he=F.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <>
            <EbayTextbox placeholder="placeholder text" inputSize="large" />
        </>,
  name: 'Large textbox'
}`,...(fe=(ge=F.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var Ce,Te,ye;E.parameters={...E.parameters,docs:{...(Ce=E.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <div>
            <p>
                <EbayTextbox placeholder="email">
                    <EbayTextboxPrefixIcon name="mail16" />
                </EbayTextbox>
            </p>
            <p>
                <EbayTextbox placeholder="username">
                    <EbayTextboxPostfixIcon name="profile20" />
                </EbayTextbox>
            </p>
            <p>
                <EbayTextbox placeholder="search" onButtonClick={action('Clear!')}>
                    <EbayTextboxPrefixIcon name="search16" />
                    <EbayTextboxPostfixIcon name="clear16" buttonAriaLabel="Clear" />
                </EbayTextbox>
            </p>
        </div>,
  name: 'With icon'
}`,...(ye=(Te=E.parameters)==null?void 0:Te.docs)==null?void 0:ye.source}}};var Fe,Ee,ve;v.parameters={...v.parameters,docs:{...(Fe=v.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => <div>
            <p>
                <EbayTextbox placeholder="0.00">
                    <EbayTextboxPrefixText id="prefix">$</EbayTextboxPrefixText>
                </EbayTextbox>
            </p>
            <p>
                <EbayTextbox placeholder="0">
                    <EbayTextboxPostfixText id="postfix">in.</EbayTextboxPostfixText>
                </EbayTextbox>
            </p>
        </div>,
  name: 'With Pre/Post fix text'
}`,...(ve=(Ee=v.parameters)==null?void 0:Ee.docs)==null?void 0:ve.source}}};var Le,Ie,Pe;L.parameters={...L.parameters,docs:{...(Le=L.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [value, setValue] = useState('');
      const handleOnChange = (e, props) => {
        setValue(props.value.substring(0, 10));
      };
      return <EbayTextbox onInputChange={handleOnChange} value={value} placeholder="Max 10 chars" />;
    };
    return <>
                <Component />
            </>;
  },
  name: 'Control value from outside'
}`,...(Pe=(Ie=L.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var Se,we,Ve;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => {
    const ref = (React.createRef() as any);
    return <>
                <EbayTextbox forwardedRef={ref} />
            </>;
  },
  name: 'Ref forwarding'
}`,...(Ve=(we=I.parameters)==null?void 0:we.docs)==null?void 0:Ve.source}}};var ke,Be,We;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <EbayTextbox floatingLabel="Floating label" onChange={action('onChange')} onInputChange={action('onInputChange')} onFloatingLabelInit={() => action('onFloatingLabelInit')()} />,
  name: 'Floating label'
}`,...(We=(Be=P.parameters)==null?void 0:Be.docs)==null?void 0:We.source}}};var Me,Ae,De;S.parameters={...S.parameters,docs:{...(Me=S.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => <EbayTextbox type="date" floatingLabel="Floating label" onChange={action('onChange')} onInputChange={action('onInputChange')} onFloatingLabelInit={() => action('onFloatingLabelInit')()} />,
  name: 'Floating label type date'
}`,...(De=(Ae=S.parameters)==null?void 0:Ae.docs)==null?void 0:De.source}}};var Re,Ke,Oe;w.parameters={...w.parameters,docs:{...(Re=w.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <EbayTextbox onChange={action('textbox-changed')} floatingLabel="Floating label" defaultValue="Default value" />,
  name: 'Floating label with value'
}`,...(Oe=(Ke=w.parameters)==null?void 0:Ke.docs)==null?void 0:Oe.source}}};var qe,Ue,ze;V.parameters={...V.parameters,docs:{...(qe=V.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => <EbayTextbox invalid onChange={action('textbox-changed')} floatingLabel="Invalid Floating label" />,
  name: 'Floating label invalid'
}`,...(ze=(Ue=V.parameters)==null?void 0:Ue.docs)==null?void 0:ze.source}}};var He,je,_e;k.parameters={...k.parameters,docs:{...(He=k.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => <>
            <p>
                <EbayTextbox floatingLabel="Regular field" />
            </p>
            <p>
                <EbayTextbox floatingLabel="Autofocused field" autoFocus onFocus={action('onFocus')} />
            </p>
        </>,
  name: 'Floating label with autofocus'
}`,...(_e=(je=k.parameters)==null?void 0:je.docs)==null?void 0:_e.source}}};var $e,Ge,Je;B.parameters={...B.parameters,docs:{...($e=B.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [value, setValue] = useState('');
      const handleOnChange = (e, {
        value: newValue
      }) => {
        setValue(newValue.toLowerCase());
      };
      return <>
                    <p>
                        <EbayTextbox floatingLabel="Will convert to lowercase" placeholder="Enter some UPPERCASE" onChange={handleOnChange} value={value} size={30} />
                    </p>
                    <p>
                        <EbayButton onClick={() => {
            setValue('changed text');
          }}>
                            Change text
                        </EbayButton>
                    </p>
                    <p>
                        <EbayButton onClick={() => {
            setValue('');
          }}>
                            Clear
                        </EbayButton>
                    </p>
                </>;
    };
    return <>
                <Component />
            </>;
  },
  name: 'Floating label with placeholder, controlled'
}`,...(Je=(Ge=B.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Ne,Qe,Xe;W.parameters={...W.parameters,docs:{...(Ne=W.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <EbayTextbox onChange={action('textbox-changed')} floatingLabel="Floating label" multiline />,
  name: 'Floating label with multiline'
}`,...(Xe=(Qe=W.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ye,Ze,en;M.parameters={...M.parameters,docs:{...(Ye=M.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => <EbayTextbox onChange={action('textbox-changed')} floatingLabel="Floating label" multiline opaqueLabel />,
  name: 'Floating label with multiline and opaque label'
}`,...(en=(Ze=M.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};const Cn=["DefaultTextbox","TestingCallbacks","DisabledTextbox","PlaceholderTextbox","InvalidTextbox","FluidTextbox","PasswordTextbox","MultilineTextbox","MultilineInvalidTextbox","AutofocusedTextbox","LargeTextbox","WithIcon","WithPrePostfixText","ControlValueFromOutside","RefForwarding","FloatingLabel","FloatingLabelTypeDate","FloatingLabelWithValue","FloatingLabelInvalid","FloatingLabelWithAutofocus","FloatingLabelWithPlaceholderControlled","FloatingLabelWithMultiline","FloatingLabelWithMultilineAndOpaqueLabel"];export{y as AutofocusedTextbox,L as ControlValueFromOutside,p as DefaultTextbox,x as DisabledTextbox,P as FloatingLabel,V as FloatingLabelInvalid,S as FloatingLabelTypeDate,k as FloatingLabelWithAutofocus,W as FloatingLabelWithMultiline,M as FloatingLabelWithMultilineAndOpaqueLabel,B as FloatingLabelWithPlaceholderControlled,w as FloatingLabelWithValue,g as FluidTextbox,h as InvalidTextbox,F as LargeTextbox,T as MultilineInvalidTextbox,C as MultilineTextbox,f as PasswordTextbox,m as PlaceholderTextbox,I as RefForwarding,b as TestingCallbacks,E as WithIcon,v as WithPrePostfixText,Cn as __namedExportsOrder,fn as default};

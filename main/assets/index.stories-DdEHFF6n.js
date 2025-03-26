import{a as e,F as r,j as s}from"./index-Zi3BSDNR.js";import{R as rn,r as O}from"./index-CBqU2yxZ.js";import{a as o}from"./chunk-AY7I2SME-DUSEA8To.js";import{E as R}from"./button-CITjBv-r.js";import{E as n,a as q,b as K,c as ln,d as sn}from"./textbox-D7h47hTv.js";import"./_commonjsHelpers-BosuxZz1.js";import"./array.polyfill.flat-CyIvB88r.js";import"./icon-Dq2u35M_.js";import"./progress-spinner-BtwRow5I.js";import"./utils-CbpzklXS.js";import"./icon-button-DtR2l5p3.js";import"./badge-CSa2V1Bl.js";import"./hooks-CxrULycr.js";const yn={title:"form input/ebay-textbox"},p={render:()=>e(n,{defaultValue:"EbayTextbox"}),name:"Default textbox"},b={render:()=>e(r,{children:e(()=>{const i=rn.useRef(null),[l,d]=O.useState(""),D=(t,a)=>{o("onInputChange")(t,a),d(a.value)},c=(t,a)=>{o("onButtonClick")(t,a),d("")};return s("form",{ref:i,children:[e("p",{children:e(n,{value:l,onChange:(t,a)=>o("onChange")(t,a),onInputChange:(t,a)=>D(t,a),onFocus:(t,a)=>o("onFocus")(t,a),onBlur:(t,a)=>o("onBlur")(t,a),onKeyPress:(t,a)=>o("onKeyPress")(t,a),onKeyUp:(t,a)=>o("onKeyUp")(t,a),onKeyDown:(t,a)=>o("onKeyDown")(t,a),onInvalid:(t,a)=>o("onInvalid")(t,a),onButtonClick:(t,a)=>c(t,a),required:!0,children:e(K,{name:"clear16",buttonAriaLabel:"Clear",style:{opacity:l.length?"1":"0"}})})}),e("p",{children:e(R,{onClick:t=>{var a;t.preventDefault(),(a=i.current)==null||a.reportValidity()},children:"Check value presence"})})]})},{})}),name:"Testing callbacks"},x={render:()=>e(r,{children:e(n,{disabled:!0})}),name:"Disabled textbox"},m={render:()=>e(r,{children:e(n,{placeholder:"placeholder text"})}),name:"Placeholder textbox"},g={render:()=>e(r,{children:e(n,{invalid:!0})}),name:"Invalid textbox"},h={render:()=>e(r,{children:e(n,{fluid:!0})}),name:"Fluid textbox"},f={render:()=>e(r,{children:e(n,{type:"password"})}),name:"Password textbox"},C={render:()=>e(r,{children:e(n,{multiline:!0,defaultValue:`some default value
next line`})}),name:"Multiline textbox"},T={render:()=>e(r,{children:e(n,{multiline:!0,invalid:!0,defaultValue:"some default value"})}),name:"Multiline invalid textbox"},F={render:()=>e(r,{children:e(n,{autoFocus:!0,placeholder:"Should focus here"})}),name:"Autofocused textbox"},y={render:()=>e(r,{children:e(n,{placeholder:"placeholder text",inputSize:"large"})}),name:"Large textbox"},E={render:()=>s("div",{children:[e("p",{children:e(n,{placeholder:"email",children:e(q,{name:"mail16"})})}),e("p",{children:e(n,{placeholder:"username",children:e(K,{name:"profile20"})})}),e("p",{children:s(n,{placeholder:"search",onButtonClick:o("Clear!"),children:[e(q,{name:"search16"}),e(K,{name:"clear16",buttonAriaLabel:"Clear"})]})})]}),name:"With icon"},v={render:()=>s("div",{children:[e("p",{children:e(n,{placeholder:"0.00",children:e(ln,{id:"prefix",children:"$"})})}),e("p",{children:e(n,{placeholder:"0",children:e(sn,{id:"postfix",children:"in."})})})]}),name:"With Pre/Post fix text"},L={render:()=>e(r,{children:e(()=>{const[i,l]=O.useState("");return e(n,{onInputChange:(D,c)=>{l(c.value.substring(0,10))},value:i,placeholder:"Max 10 chars"})},{})}),name:"Control value from outside"},I={render:()=>{const u=rn.createRef();return e(r,{children:e(n,{forwardedRef:u})})},name:"Ref forwarding"},P={render:()=>e(n,{floatingLabel:"Floating label",onChange:o("onChange"),onInputChange:o("onInputChange"),onFloatingLabelInit:()=>o("onFloatingLabelInit")()}),name:"Floating label"},S={render:()=>e(n,{fluid:!0,floatingLabel:"Floating label",onChange:o("onChange"),onInputChange:o("onInputChange"),onFloatingLabelInit:()=>o("onFloatingLabelInit")()}),name:"Floating label fluid"},w={render:()=>e(n,{type:"date",floatingLabel:"Floating label",onChange:o("onChange"),onInputChange:o("onInputChange"),onFloatingLabelInit:()=>o("onFloatingLabelInit")()}),name:"Floating label type date"},V={render:()=>e(n,{onChange:o("textbox-changed"),floatingLabel:"Floating label",defaultValue:"Default value"}),name:"Floating label with value"},k={render:()=>e(n,{invalid:!0,onChange:o("textbox-changed"),floatingLabel:"Invalid Floating label"}),name:"Floating label invalid"},B={render:()=>s(r,{children:[e("p",{children:e(n,{floatingLabel:"Regular field"})}),e("p",{children:e(n,{floatingLabel:"Autofocused field",autoFocus:!0,onFocus:o("onFocus")})})]}),name:"Floating label with autofocus"},W={render:()=>e(r,{children:e(()=>{const[i,l]=O.useState("");return s(r,{children:[e("p",{children:e(n,{floatingLabel:"Will convert to lowercase",placeholder:"Enter some UPPERCASE",onChange:(D,{value:c})=>{l(c.toLowerCase())},value:i,size:30})}),e("p",{children:e(R,{onClick:()=>{l("changed text")},children:"Change text"})}),e("p",{children:e(R,{onClick:()=>{l("")},children:"Clear"})})]})},{})}),name:"Floating label with placeholder, controlled"},M={render:()=>e(n,{onChange:o("textbox-changed"),floatingLabel:"Floating label",multiline:!0}),name:"Floating label with multiline"},A={render:()=>e(n,{onChange:o("textbox-changed"),floatingLabel:"Floating label",multiline:!0,opaqueLabel:!0}),name:"Floating label with multiline and opaque label"};var U,z,H;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <EbayTextbox defaultValue="EbayTextbox" />,
  name: 'Default textbox'
}`,...(H=(z=p.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var j,_,$;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...($=(_=b.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var G,J,N;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <>
            <EbayTextbox disabled />
        </>,
  name: 'Disabled textbox'
}`,...(N=(J=x.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var Q,X,Y;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <>
            <EbayTextbox placeholder="placeholder text" />
        </>,
  name: 'Placeholder textbox'
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <>
            <EbayTextbox invalid />
        </>,
  name: 'Invalid textbox'
}`,...(ne=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,oe,te;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <>
            <EbayTextbox fluid />
        </>,
  name: 'Fluid textbox'
}`,...(te=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var re,le,ie;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <>
            <EbayTextbox type="password" />
        </>,
  name: 'Password textbox'
}`,...(ie=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var se,ce,ue;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <>
            <EbayTextbox multiline defaultValue={'some default value\\nnext line'} />
        </>,
  name: 'Multiline textbox'
}`,...(ue=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,be;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <>
            <EbayTextbox multiline invalid defaultValue="some default value" />
        </>,
  name: 'Multiline invalid textbox'
}`,...(be=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var xe,me,ge;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <>
            <EbayTextbox autoFocus placeholder="Should focus here" />
        </>,
  name: 'Autofocused textbox'
}`,...(ge=(me=F.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,fe,Ce;y.parameters={...y.parameters,docs:{...(he=y.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <>
            <EbayTextbox placeholder="placeholder text" inputSize="large" />
        </>,
  name: 'Large textbox'
}`,...(Ce=(fe=y.parameters)==null?void 0:fe.docs)==null?void 0:Ce.source}}};var Te,Fe,ye;E.parameters={...E.parameters,docs:{...(Te=E.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(ye=(Fe=E.parameters)==null?void 0:Fe.docs)==null?void 0:ye.source}}};var Ee,ve,Le;v.parameters={...v.parameters,docs:{...(Ee=v.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Le=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:Le.source}}};var Ie,Pe,Se;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Se=(Pe=L.parameters)==null?void 0:Pe.docs)==null?void 0:Se.source}}};var we,Ve,ke;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => {
    const ref = (React.createRef() as any);
    return <>
                <EbayTextbox forwardedRef={ref} />
            </>;
  },
  name: 'Ref forwarding'
}`,...(ke=(Ve=I.parameters)==null?void 0:Ve.docs)==null?void 0:ke.source}}};var Be,We,Me;P.parameters={...P.parameters,docs:{...(Be=P.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <EbayTextbox floatingLabel="Floating label" onChange={action('onChange')} onInputChange={action('onInputChange')} onFloatingLabelInit={() => action('onFloatingLabelInit')()} />,
  name: 'Floating label'
}`,...(Me=(We=P.parameters)==null?void 0:We.docs)==null?void 0:Me.source}}};var Ae,De,Re;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <EbayTextbox fluid floatingLabel="Floating label" onChange={action('onChange')} onInputChange={action('onInputChange')} onFloatingLabelInit={() => action('onFloatingLabelInit')()} />,
  name: 'Floating label fluid'
}`,...(Re=(De=S.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Ke,Oe,qe;w.parameters={...w.parameters,docs:{...(Ke=w.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => <EbayTextbox type="date" floatingLabel="Floating label" onChange={action('onChange')} onInputChange={action('onInputChange')} onFloatingLabelInit={() => action('onFloatingLabelInit')()} />,
  name: 'Floating label type date'
}`,...(qe=(Oe=w.parameters)==null?void 0:Oe.docs)==null?void 0:qe.source}}};var Ue,ze,He;V.parameters={...V.parameters,docs:{...(Ue=V.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => <EbayTextbox onChange={action('textbox-changed')} floatingLabel="Floating label" defaultValue="Default value" />,
  name: 'Floating label with value'
}`,...(He=(ze=V.parameters)==null?void 0:ze.docs)==null?void 0:He.source}}};var je,_e,$e;k.parameters={...k.parameters,docs:{...(je=k.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <EbayTextbox invalid onChange={action('textbox-changed')} floatingLabel="Invalid Floating label" />,
  name: 'Floating label invalid'
}`,...($e=(_e=k.parameters)==null?void 0:_e.docs)==null?void 0:$e.source}}};var Ge,Je,Ne;B.parameters={...B.parameters,docs:{...(Ge=B.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <>
            <p>
                <EbayTextbox floatingLabel="Regular field" />
            </p>
            <p>
                <EbayTextbox floatingLabel="Autofocused field" autoFocus onFocus={action('onFocus')} />
            </p>
        </>,
  name: 'Floating label with autofocus'
}`,...(Ne=(Je=B.parameters)==null?void 0:Je.docs)==null?void 0:Ne.source}}};var Qe,Xe,Ye;W.parameters={...W.parameters,docs:{...(Qe=W.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ye=(Xe=W.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,en,nn;M.parameters={...M.parameters,docs:{...(Ze=M.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => <EbayTextbox onChange={action('textbox-changed')} floatingLabel="Floating label" multiline />,
  name: 'Floating label with multiline'
}`,...(nn=(en=M.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var an,on,tn;A.parameters={...A.parameters,docs:{...(an=A.parameters)==null?void 0:an.docs,source:{originalSource:`{
  render: () => <EbayTextbox onChange={action('textbox-changed')} floatingLabel="Floating label" multiline opaqueLabel />,
  name: 'Floating label with multiline and opaque label'
}`,...(tn=(on=A.parameters)==null?void 0:on.docs)==null?void 0:tn.source}}};const En=["DefaultTextbox","TestingCallbacks","DisabledTextbox","PlaceholderTextbox","InvalidTextbox","FluidTextbox","PasswordTextbox","MultilineTextbox","MultilineInvalidTextbox","AutofocusedTextbox","LargeTextbox","WithIcon","WithPrePostfixText","ControlValueFromOutside","RefForwarding","FloatingLabel","FloatingLabelFluid","FloatingLabelTypeDate","FloatingLabelWithValue","FloatingLabelInvalid","FloatingLabelWithAutofocus","FloatingLabelWithPlaceholderControlled","FloatingLabelWithMultiline","FloatingLabelWithMultilineAndOpaqueLabel"];export{F as AutofocusedTextbox,L as ControlValueFromOutside,p as DefaultTextbox,x as DisabledTextbox,P as FloatingLabel,S as FloatingLabelFluid,k as FloatingLabelInvalid,w as FloatingLabelTypeDate,B as FloatingLabelWithAutofocus,M as FloatingLabelWithMultiline,A as FloatingLabelWithMultilineAndOpaqueLabel,W as FloatingLabelWithPlaceholderControlled,V as FloatingLabelWithValue,h as FluidTextbox,g as InvalidTextbox,y as LargeTextbox,T as MultilineInvalidTextbox,C as MultilineTextbox,f as PasswordTextbox,m as PlaceholderTextbox,I as RefForwarding,b as TestingCallbacks,E as WithIcon,v as WithPrePostfixText,En as __namedExportsOrder,yn as default};

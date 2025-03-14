import{j as s,F as u,a as e}from"./index-Zi3BSDNR.js";import{r as k}from"./index-CBqU2yxZ.js";import{a as r}from"./chunk-AY7I2SME-DUSEA8To.js";import{L as a}from"./description-CsOth_nc.js";import{E as c}from"./checkbox-CqqnCqhQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-DKL8bt9D.js";import"./array.polyfill.flat-C6I9b5W7.js";import"./utils-BnKBXy8I.js";const X={component:c,title:"form input/ebay-checkbox"},l=()=>s(u,{children:[e("p",{children:e(c,{value:"123",id:"checkbox-11",onChange:(o,n)=>r("onChange")(o,n),onFocus:(o,n)=>r("onFocus")(o,n),onKeyDown:(o,n)=>r("onKeyDown")(o,n),children:e(a,{children:"Default"})})}),e("p",{children:e(c,{value:"123",id:"checkbox-12",size:"large",children:e(a,{children:"Large"})})})]}),t=()=>s(u,{children:[e("p",{children:e(c,{checked:!0,value:"123",id:"checkbox-21",children:e(a,{children:"Default"})})}),e("p",{children:e(c,{checked:!0,value:"123",id:"checkbox-22",size:"large",children:e(a,{children:"Large"})})})]}),b=()=>s(u,{children:[e("p",{children:e(c,{disabled:!0,value:"123",id:"checkbox-31",children:e(a,{children:"Default disabled"})})}),e("p",{children:e(c,{disabled:!0,value:"123",id:"checkbox-32",size:"large",children:e(a,{children:"Large disabled"})})})]}),h=()=>s("fieldset",{children:[e("legend",{children:"Choose an Option"}),e("span",{className:"field",children:e(c,{id:"group-checkbox-1",value:"1",onChange:r("checkbox-change"),name:"checkbox-group",children:e(a,{children:"Option 1"})})}),e("span",{className:"field",children:e(c,{id:"group-checkbox-2",value:"2",onChange:r("checkbox-change"),name:"checkbox-group",children:e(a,{children:"Option 2"})})}),e("span",{className:"field",children:e(c,{id:"group-checkbox-3",value:"3",onChange:r("checkbox-change"),name:"checkbox-group",children:e(a,{children:"Option 3"})})})]}),i=()=>s("span",{className:"checkbox",children:[e("style",{dangerouslySetInnerHTML:{__html:`
                .custom ~ label { color: green; }
                .custom ~ .checkbox__icon svg { color: green !important; }
            `}}),e(c,{className:"custom","aria-label":"custom color checkbox example",id:"checkbox-30",children:e(a,{children:"Custom style"})})]}),d=()=>e(u,{children:e(()=>{const[n,K]=k.useState(!0),[m,j]=k.useState(!1),p=k.useRef(0);return e(c,{className:"custom",onChange:(M,{value:T,checked:H})=>{p.current<4?K(H):j(!0),p.current++},checked:n,"aria-label":"custom color checkbox example",id:"checkbox-30",disabled:m,children:m?e(a,{children:"Disabled"}):s(a,{children:["Gets disabled after ",5-p.current," clicks"]})})},{})});var x,g,C;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`() => <>
        <p>
            <EbayCheckbox value="123" id="checkbox-11" onChange={(e, props) => action('onChange')(e, props)} onFocus={(e, props) => action('onFocus')(e, props)} onKeyDown={(e, props) => action('onKeyDown')(e, props)}>
                <EbayLabel>Default</EbayLabel>
            </EbayCheckbox>
        </p>
        <p>
            <EbayCheckbox value="123" id="checkbox-12" size="large">
                <EbayLabel>Large</EbayLabel>
            </EbayCheckbox>
        </p>
    </>`,...(C=(g=l.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var y,E,L;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`() => <>
        <p>
            <EbayCheckbox checked value="123" id="checkbox-21">
                <EbayLabel>Default</EbayLabel>
            </EbayCheckbox>
        </p>
        <p>
            <EbayCheckbox checked value="123" id="checkbox-22" size="large">
                <EbayLabel>Large</EbayLabel>
            </EbayCheckbox>
        </p>
    </>`,...(L=(E=t.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var f,v,D;b.parameters={...b.parameters,docs:{...(f=b.parameters)==null?void 0:f.docs,source:{originalSource:`() => <>
        <p>
            <EbayCheckbox disabled value="123" id="checkbox-31">
                <EbayLabel>Default disabled</EbayLabel>
            </EbayCheckbox>
        </p>
        <p>
            <EbayCheckbox disabled value="123" id="checkbox-32" size="large">
                <EbayLabel>Large disabled</EbayLabel>
            </EbayCheckbox>
        </p>
    </>`,...(D=(v=b.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var S,O,N;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`() => <fieldset>
        <legend>Choose an Option</legend>
        <span className="field">
            <EbayCheckbox id="group-checkbox-1" value="1" onChange={action('checkbox-change')} name="checkbox-group">
                <EbayLabel>Option 1</EbayLabel>
            </EbayCheckbox>
        </span>
        <span className="field">
            <EbayCheckbox id="group-checkbox-2" value="2" onChange={action('checkbox-change')} name="checkbox-group">
                <EbayLabel>Option 2</EbayLabel>
            </EbayCheckbox>
        </span>
        <span className="field">
            <EbayCheckbox id="group-checkbox-3" value="3" onChange={action('checkbox-change')} name="checkbox-group">
                <EbayLabel>Option 3</EbayLabel>
            </EbayCheckbox>
        </span>
    </fieldset>`,...(N=(O=h.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var B,_,F;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`() => <span className="checkbox">
        <style dangerouslySetInnerHTML={{
    __html: \`
                .custom ~ label { color: green; }
                .custom ~ .checkbox__icon svg { color: green !important; }
            \`
  }} />
        <EbayCheckbox className="custom" aria-label="custom color checkbox example" id="checkbox-30">
            <EbayLabel>Custom style</EbayLabel>
        </EbayCheckbox>
    </span>`,...(F=(_=i.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var z,w,G;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const Controller = () => {
    const [isChecked, setChecked] = useState(true);
    const [isDisabled, setDisabled] = useState(false);
    const counter = useRef(0);
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>, {
      value,
      checked
    }: {
      value: string | number;
      checked: boolean;
    }) => {
      if (counter.current < 4) {
        setChecked(checked);
      } else {
        setDisabled(true);
      }
      counter.current++;
    };
    return <EbayCheckbox className="custom" onChange={handleOnChange} checked={isChecked} aria-label="custom color checkbox example" id="checkbox-30" disabled={isDisabled}>
                {isDisabled ? <EbayLabel>Disabled</EbayLabel> : <EbayLabel>Gets disabled after {5 - counter.current} clicks</EbayLabel>}
            </EbayCheckbox>;
  };
  return <>
            <Controller />
        </>;
}`,...(G=(w=d.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};const Y=["DefaultCheckboxButton","SelectedCheckboxButton","DisabledCheckboxButton","GroupedCheckboxButtons","StyledCheckboxButton","ControlValueFromOutside"];export{d as ControlValueFromOutside,l as DefaultCheckboxButton,b as DisabledCheckboxButton,h as GroupedCheckboxButtons,t as SelectedCheckboxButton,i as StyledCheckboxButton,Y as __namedExportsOrder,X as default};

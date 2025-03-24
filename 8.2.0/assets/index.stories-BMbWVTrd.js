import{j as h,c as V,a as t,F}from"./index-Zi3BSDNR.js";import{r as x,R as K}from"./index-CBqU2yxZ.js";import{E as Y,a as r}from"./combobox-BtC3SsRb.js";import"./array.polyfill.flat-DsXqREK2.js";import{a as $}from"./utils-DiQQ_nfq.js";import{E as H}from"./chip-Fa_sVd8L.js";import{E as q}from"./button-Y4kSTMfk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./hooks-CxrULycr.js";import"./dropdown-HjWnN08T.js";import"./index-BtM5VmRH.js";import"./index-BQcbYkqw.js";import"./index-DVEpxHKN.js";import"./icon-DpqV1fQN.js";import"./progress-spinner-Caq2oi-V.js";const C=({className:c,fluid:u,error:l,disabled:p,selected:d,defaultSelected:i,a11yDeleteButtonText:B="Remove",onChange:n,children:R,...T})=>{const A=$(R,r),[I,y]=x.useState(i||[]),a=d||I,[k,f]=x.useState(""),E=K.useRef(null),S=(e,o)=>{const s=[...a,o];y(s),n==null||n(e,{selected:[...s]}),f("")},N=(e,o)=>{const s=a.filter((z,j)=>j!==o);y(s),n==null||n(e,{selected:[...s]})},U=e=>{if(e.key==="Enter"){const o=e.target.value;e.preventDefault(),o&&!a.includes(o)&&S(e,o)}},W=(e,o)=>{f(o.currentInputValue)};if(d&&i)throw new Error('EbayChipsCombobox: You cannot use "selected" and "defaultSelected" at the same time.');if(d&&!n)throw new Error('EbayChipsCombobox: You must provide an "onChange" prop when using the "selected" prop.');return h("span",{ref:E,className:V(c,"chips-combobox",{"chips-combobox--fluid":u,"chips-combobox--error":l}),"aria-disabled":p?"true":void 0,children:[a.length?t("ul",{className:"chips-combobox__items",children:a.map((e,o)=>t("li",{children:t(H,{a11yDeleteButtonText:`${B} ${e}`,onDelete:s=>N(s,o),disabled:p,children:e})},o))}):null,t(Y,{...T,className:"chips-combobox__combobox",disabled:p,dropdownRef:E,value:k,autocomplete:"list",onSelect:(e,o)=>S(e,o.selectedOption.text),onInputChange:W,onKeyDown:U,children:A.filter(e=>!a.includes(e.props.text))})]})},ae={component:C,title:"form input/ebay-chips-combobox",argTypes:{expanded:{control:"boolean",description:"Whether the combobox is expanded"},fluid:{control:"boolean",description:"Whether the combobox should take full width"},error:{control:"boolean",description:"Whether the combobox is in an error state"},listSelection:{control:"select",options:["manual","automatic"],description:"Selection mode for the list"},defaultSelected:{control:"array",description:"Initial selected options. Use it for uncontrolled components"},selected:{control:"array",description:"Currently selected option. Use it for controlled components"},disabled:{control:"boolean",description:"Whether the combobox is disabled"},a11yDeleteButtonText:{control:"text",description:"Accessibility text for the delete button"},onExpand:{action:"onExpand"},onCollapse:{action:"onCollapse"},onChange:{action:"onChange"}}},b=c=>h(C,{placeholder:"Add item",...c,children:[t(r,{text:"Chip 1"}),t(r,{text:"Chip 2"}),t(r,{text:"Chip 3"})]}),m=c=>{const[u,l]=x.useState([]);return h(F,{children:[h(C,{placeholder:"Add item",...c,selected:u,onChange:(d,i)=>{l((i==null?void 0:i.selected)||[])},children:[t(r,{text:"Chip 1"}),t(r,{text:"Chip 2"}),t(r,{text:"Chip 3"})]}),t("div",{style:{marginTop:16},children:t(q,{onClick:()=>l(["Chip 2"]),children:"Update with Chip 2"})})]})};var g,w,O;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`args => <EbayChipsCombobox placeholder="Add item" {...args}>
        <EbayComboboxOption text="Chip 1" />
        <EbayComboboxOption text="Chip 2" />
        <EbayComboboxOption text="Chip 3" />
    </EbayChipsCombobox>`,...(O=(w=b.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var v,D,_;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState<string[]>([]);
  const handleChange: ChipsComboboxChangeHandler = (event, data) => {
    setSelected(data?.selected || []);
  };
  return <>
            <EbayChipsCombobox placeholder="Add item" {...args} selected={selected} onChange={handleChange}>
                <EbayComboboxOption text="Chip 1" />
                <EbayComboboxOption text="Chip 2" />
                <EbayComboboxOption text="Chip 3" />
            </EbayChipsCombobox>

            <div style={{
      marginTop: 16
    }}>
                <EbayButton onClick={() => setSelected(['Chip 2'])}>Update with Chip 2</EbayButton>
            </div>
        </>;
}`,...(_=(D=m.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const ce=["Default","ControlledCombobox"];export{m as ControlledCombobox,b as Default,ce as __namedExportsOrder,ae as default};

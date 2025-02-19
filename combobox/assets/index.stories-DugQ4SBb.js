import{a as e,F as a,j as n}from"./index-Zi3BSDNR.js";import{r as P}from"./index-CBqU2yxZ.js";import{a as o}from"./chunk-AY7I2SME-DUSEA8To.js";import{E as Le}from"./icon-MPeqy14U.js";import{E as r,a as L,b as F}from"./menu-button-label-DddPiZtk.js";import{E as t}from"./menu-item-separator-BjgxmK7-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./array.polyfill.flat-B3WuOdLl.js";import"./utils-BPDrGPOr.js";import"./button-BSo4-xX0.js";import"./progress-spinner-DLHyVLZn.js";import"./icon-button-C4Nzd3OA.js";import"./badge-Czki0tyX.js";import"./index-Bq9rzhGn.js";import"./dropdown-EYwX6TfS.js";import"./index-BtM5VmRH.js";import"./index-_o4FI5ZO.js";const Je={title:"buttons/ebay-menu-button"},p=()=>e(a,{children:n(r,{text:"eBay Menu",onKeyDown:o("key down"),onClick:o("click button"),onSelect:(i,{index:m,checked:u})=>o("select")(i,{index:m,checked:u}),onExpand:o("expand"),onCollapse:o("collapse"),children:[e(t,{children:"item 1 that has very long text"}),e(t,{children:"item 2"}),e(t,{children:"item 3"})]})}),I=()=>e(a,{children:n(r,{expanded:!0,text:"eBay Menu",children:[e(t,{children:"item 1 that has very long text"}),e(t,{children:"item 2"}),e(t,{children:"item 3"})]})}),x=()=>e(a,{children:n(r,{text:"eBay Menu",disabled:!0,children:[e(t,{children:"item 1 that has very long text"}),e(t,{children:"item 2"}),e(t,{children:"item 3"})]})}),y={render:()=>e(a,{children:n(r,{text:"Settings",children:[e(Le,{name:"settings16"}),e(t,{children:"item 1 that has very long text"}),e(t,{children:"item 2"}),e(t,{children:"item 3"})]})}),name:"With icon"},b={render:()=>e(a,{children:n(r,{noToggleIcon:!0,text:"Menu",children:[e(t,{children:"item 1 that has very long text"}),e(t,{children:"item 2"}),e(t,{children:"item 3"})]})}),name:"Without toggle icon"},M=()=>n(a,{children:[e("h3",{children:"Button"}),n(r,{variant:"button",text:"Button",a11yText:"Menu inside the form",children:[e(t,{children:"item 1"}),e(t,{children:"item 2"}),e(t,{children:"item 3"})]}),e("h3",{children:"Form"}),n(r,{variant:"form",text:"Form",a11yText:"Menu inside the form",children:[e(t,{children:"item 1"}),e(t,{children:"item 2"}),e(t,{children:"item 3"})]}),e("h3",{children:"Overflow"}),n(r,{variant:"overflow",a11yText:"Menu",children:[e(t,{children:"item 1"}),e(t,{children:"item 2"}),e(t,{children:"item 3"})]})]}),g=()=>n(a,{children:[n(r,{priority:"primary",text:"Primary","a11y-text":"Menu",children:[e(t,{children:"item 1"}),e(t,{children:"item 2"}),e(t,{children:"item 3"})]}),n(r,{priority:"tertiary",text:"Tertiary","a11y-text":"Menu",children:[e(t,{children:"item 1"}),e(t,{children:"item 2"}),e(t,{children:"item 3"})]})]}),S=()=>e(a,{children:n(r,{text:"eBay Menu without borders!",borderless:!0,children:[e(t,{children:"item 1"}),e(t,{children:"item 2"}),e(t,{children:"item 3"})]})}),B=()=>n(a,{children:[e("h2",{children:"Custom style label"}),n(r,{children:[n(L,{children:[e("span",{style:{background:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='15' viewBox='0 0 5 3'%3E%3Cpath d='M0 0h5v3H0z'/%3E%3Cpath fill='%23D00' d='M0 1h5v2H0z'/%3E%3Cpath fill='%23FFCE00' d='M0 2h5v1H0z'/%3E%3C/svg%3E") no-repeat 50% 50%`,display:"inline-block",height:"20px",marginRight:"8px",verticalAlign:"middle",width:"26px"}}),"Fun with flags!"]}),e(t,{children:"item 1"}),e(t,{children:"item 2"}),e(t,{children:"item 3"})]}),e("br",{}),e("br",{}),e("h2",{id:"external-label",children:"External label"}),n(r,{prefixId:"external-label",children:[e(L,{children:"Using external label for a11y"}),e(t,{children:"item 1"}),e(t,{children:"item 2"}),e(t,{children:"item 3"})]}),e("br",{}),e("br",{}),e("h2",{children:"Prefix Label"}),n(r,{prefixLabel:"Prefix:",children:[e(L,{children:"Label"}),e(t,{children:"item 1"}),e(t,{children:"item 2"}),e(t,{children:"item 3"})]}),e("br",{}),e("br",{}),e("h2",{children:"No Label"}),n(r,{split:"end",children:[e(t,{children:"item 1"}),e(t,{children:"item 2"}),e(t,{children:"item 3"})]})]}),E=i=>e(a,{children:n(r,{...i,text:"Complex menu",onExpand:o("Menu expanded!"),onCollapse:o("Menu collapsed!"),children:[e(t,{children:"item 1"}),e(t,{children:"item 2"}),e(F,{}),e(t,{children:"item 3"}),e(t,{children:"item 4"}),e(t,{children:"item 5"}),e(F,{}),e(t,{onClick:o("Open login popup!"),children:"Log in"})]})}),f={render:i=>e(a,{children:n(r,{...i,text:"Sort order",type:"radio",children:[e(t,{children:"Date"}),e(t,{checked:!0,children:"Price"}),e(t,{children:"Relevance"})]})}),name:"Single-Select Menu Button (item.checked)"},k={render:()=>{const m=["Date","Price","Relevance"],[u,h]=P.useState(1);return e(r,{prefixLabel:"Sort order:",text:m[u],type:"radio",collapseOnSelect:!0,checked:1,onChange:(l,{index:s})=>h(s),children:m.map((l,s)=>e(t,{children:l},s))})},name:"Single-Select Menu Button (collapse on click)"},v={render:i=>{const h=["Date","Price","Relevance"],l=["Cars","Phones","Computers"],[s,Ce]=P.useState(2),[we,Te]=P.useState(1);return n(a,{children:[e(r,{...i,prefixLabel:"Topic:",text:l[we],type:"radio",checked:1,onChange:(d,{index:c})=>Te(c),children:l.map((d,c)=>e(t,{children:d},c))})," ",e(r,{prefixLabel:"Sort order:",text:h[s],type:"radio",checked:2,onChange:(d,{index:c})=>Ce(c),children:h.map((d,c)=>e(t,{children:d},c))})]})},name:"Single-Select Menu Button (menu.checked)"},C={render:i=>e(a,{children:n(r,{...i,text:"Filter",type:"checkbox",children:[e(t,{checked:!0,children:"Snickers"}),e(t,{children:"T-Shirts"}),e(t,{checked:!0,children:"Pants"})]})}),name:"Multi-Select Menu Button"},w=i=>e(a,{children:n(r,{...i,text:"Menu has a button width",fixWidth:!0,children:[e(t,{children:"item 1 that has very long text"}),e(t,{children:"item 2"}),e(t,{children:"item 3"})]})}),T={render:i=>e("div",{style:{marginLeft:"100px"},children:n(r,{...i,text:"Menu grows to the left",reverse:!0,children:[e(t,{children:"item 1 that has very very long text"}),e(t,{children:"item 2"}),e(t,{children:"item 3"})]})}),name:"Reverse (Menu grows to the left)"};var W,D,R;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => <>
        <EbayMenuButton text="eBay Menu" onKeyDown={action('key down')} onClick={action('click button')} onSelect={(e, {
    index,
    checked
  }) => action('select')(e, {
    index,
    checked
  })} onExpand={action('expand')} onCollapse={action('collapse')}>
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var O,z,H;I.parameters={...I.parameters,docs:{...(O=I.parameters)==null?void 0:O.docs,source:{originalSource:`() => <>
        <EbayMenuButton expanded text="eBay Menu">
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,...(H=(z=I.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var j,_,A;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`() => <>
        <EbayMenuButton text="eBay Menu" disabled>
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,...(A=(_=x.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var G,K,N;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <>
            <EbayMenuButton text="Settings">
                <EbayIcon name="settings16" />
                <Item>item 1 that has very long text</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
            </EbayMenuButton>
        </>,
  name: 'With icon'
}`,...(N=(K=y.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var U,V,q;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <>
            <EbayMenuButton noToggleIcon text="Menu">
                <Item>item 1 that has very long text</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
            </EbayMenuButton>
        </>,
  name: 'Without toggle icon'
}`,...(q=(V=b.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var J,Q,X;M.parameters={...M.parameters,docs:{...(J=M.parameters)==null?void 0:J.docs,source:{originalSource:`() => <>
        <h3>Button</h3>
        <EbayMenuButton variant="button" text="Button" a11yText="Menu inside the form">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>

        <h3>Form</h3>
        <EbayMenuButton variant="form" text="Form" a11yText="Menu inside the form">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>

        <h3>Overflow</h3>
        <EbayMenuButton variant="overflow" a11yText="Menu">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,...(X=(Q=M.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`() => <>
        <EbayMenuButton priority="primary" text="Primary" a11y-text="Menu">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
        <EbayMenuButton priority="tertiary" text="Tertiary" a11y-text="Menu">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ne;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`() => <>
        <EbayMenuButton text="eBay Menu without borders!" borderless>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,...(ne=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,ie,ae;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`() => <>
        <h2>Custom style label</h2>
        <EbayMenuButton>
            <EbayMenuButtonLabel>
                <span style={{
        background: "url(\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='15' viewBox='0 0 5 3'%3E%3Cpath d='M0 0h5v3H0z'/%3E%3Cpath fill='%23D00' d='M0 1h5v2H0z'/%3E%3Cpath fill='%23FFCE00' d='M0 2h5v1H0z'/%3E%3C/svg%3E\\") no-repeat 50% 50%",
        display: 'inline-block',
        height: '20px',
        marginRight: '8px',
        verticalAlign: 'middle',
        width: '26px'
      }} />
                Fun with flags!
            </EbayMenuButtonLabel>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>

        <br />
        <br />

        <h2 id="external-label">External label</h2>
        <EbayMenuButton prefixId="external-label">
            <EbayMenuButtonLabel>Using external label for a11y</EbayMenuButtonLabel>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>

        <br />
        <br />

        <h2>Prefix Label</h2>
        <EbayMenuButton prefixLabel="Prefix:">
            <EbayMenuButtonLabel>Label</EbayMenuButtonLabel>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>

        <br />
        <br />

        <h2>No Label</h2>
        <EbayMenuButton split="end">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,...(ae=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var oe,ce,me;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`args => <>
        <EbayMenuButton {...args} text="Complex menu" onExpand={action('Menu expanded!')} onCollapse={action('Menu collapsed!')}>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Separator />
            <Item>item 3</Item>
            <Item>item 4</Item>
            <Item>item 5</Item>
            <Separator />
            <Item onClick={action('Open login popup!')}>Log in</Item>
        </EbayMenuButton>
    </>`,...(me=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var le,se,de;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => <>
            <EbayMenuButton {...args} text="Sort order" type="radio">
                <Item>Date</Item>
                <Item checked>Price</Item>
                <Item>Relevance</Item>
            </EbayMenuButton>
        </>,
  name: 'Single-Select Menu Button (item.checked)'
}`,...(de=(se=f.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ue,he,pe;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const defaultSortIndex = 1;
    const sortItems = ['Date', 'Price', 'Relevance'];
    const [checkedSort, setCheckedSort] = useState(defaultSortIndex);
    return <EbayMenuButton prefixLabel="Sort order:" text={sortItems[checkedSort]} type="radio" collapseOnSelect checked={defaultSortIndex} onChange={(e, {
      index
    }) => setCheckedSort(index)}>
                {sortItems.map((item, i) => <Item key={i}>{item}</Item>)}
            </EbayMenuButton>;
  },
  name: 'Single-Select Menu Button (collapse on click)'
}`,...(pe=(he=k.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var Ie,xe,ye;v.parameters={...v.parameters,docs:{...(Ie=v.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: args => {
    const defaultSortIndex = 2;
    const defaultTopicIndex = 1;
    const sortItems = ['Date', 'Price', 'Relevance'];
    const topicItems = ['Cars', 'Phones', 'Computers'];
    const [checkedSort, setCheckedSort] = useState(defaultSortIndex);
    const [checkedTopic, setCheckedTopic] = useState(defaultTopicIndex);
    return <>
                <EbayMenuButton {...args} prefixLabel="Topic:" text={topicItems[checkedTopic]} type="radio" checked={defaultTopicIndex} onChange={(e, {
        index
      }) => setCheckedTopic(index)}>
                    {topicItems.map((item, i) => <Item key={i}>{item}</Item>)}
                </EbayMenuButton>
        &nbsp;
                <EbayMenuButton prefixLabel="Sort order:" text={sortItems[checkedSort]} type="radio" checked={defaultSortIndex} onChange={(e, {
        index
      }) => setCheckedSort(index)}>
                    {sortItems.map((item, i) => <Item key={i}>{item}</Item>)}
                </EbayMenuButton>
            </>;
  },
  name: 'Single-Select Menu Button (menu.checked)'
}`,...(ye=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var be,Me,ge;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: args => <>
            <EbayMenuButton {...args} text="Filter" type="checkbox">
                <Item checked>Snickers</Item>
                <Item>T-Shirts</Item>
                <Item checked>Pants</Item>
            </EbayMenuButton>
        </>,
  name: 'Multi-Select Menu Button'
}`,...(ge=(Me=C.parameters)==null?void 0:Me.docs)==null?void 0:ge.source}}};var Se,Be,Ee;w.parameters={...w.parameters,docs:{...(Se=w.parameters)==null?void 0:Se.docs,source:{originalSource:`args => <>
        <EbayMenuButton {...args} text="Menu has a button width" fixWidth>
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>`,...(Ee=(Be=w.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var fe,ke,ve;T.parameters={...T.parameters,docs:{...(fe=T.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: args => <div style={{
    marginLeft: '100px'
  }}>
            <EbayMenuButton {...args} text="Menu grows to the left" reverse>
                <Item>item 1 that has very very long text</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
            </EbayMenuButton>
        </div>,
  name: 'Reverse (Menu grows to the left)'
}`,...(ve=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:ve.source}}};const Qe=["Default","Expanded","Disabled","WithIcon","WithoutToggleIcon","Variants","Priorities","Borderless","WithCustomLabel","WithSeparator","SingleSelectMenuButtonItemChecked","SingleSelectMenuButtonCollapseOnClick","SingleSelectMenuButtonMenuChecked","MultiSelectMenuButton","FixedWidth","ReverseMenuGrowsToTheLeft"];export{S as Borderless,p as Default,x as Disabled,I as Expanded,w as FixedWidth,C as MultiSelectMenuButton,g as Priorities,T as ReverseMenuGrowsToTheLeft,k as SingleSelectMenuButtonCollapseOnClick,f as SingleSelectMenuButtonItemChecked,v as SingleSelectMenuButtonMenuChecked,M as Variants,B as WithCustomLabel,y as WithIcon,E as WithSeparator,b as WithoutToggleIcon,Qe as __namedExportsOrder,Je as default};

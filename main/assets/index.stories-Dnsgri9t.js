import{a as e,F as c,j as a}from"./index-Zi3BSDNR.js";import{a as t}from"./chunk-AY7I2SME-DUSEA8To.js";import{E as p}from"./icon-BIa4SRWW.js";import{T as G,a as g,b as k}from"./tabs-CoF5V8H0.js";import{a as r,E as n,b as H}from"./menu-item-separator-CrHSGsjV.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./array.polyfill.flat-D6OR4DGz.js";import"./index-Bq9rzhGn.js";import"./utils-mxNQOUDT.js";import"./badge-OaR5SFvt.js";const ae={component:r,title:"building blocks/ebay-menu"},m=()=>e(c,{children:a(r,{onClick:t("click"),onKeyDown:t("key down"),children:[e(n,{children:"Item 1 that has very long text"}),e(n,{children:"Item 2"}),e(n,{children:"Item 3"})]})}),i=()=>e(c,{children:a(G,{children:[e(g,{children:"Menu.checked"}),e(k,{children:a(r,{type:"radio",checked:1,onKeyDown:t("key down"),onChange:(y,{index:b,checked:u})=>t("change")(y,{index:b,checked:u}),onSelect:(y,{index:b,checked:u})=>t("select")(y,{index:b,checked:u}),children:[e(n,{children:"item 0"}),e(n,{children:"Prechecked on menu level"}),e(n,{children:"item 2"})]})}),e(g,{children:"Item.checked"}),e(k,{children:a(r,{type:"radio",onKeyDown:t("key down"),onChange:t("change"),onSelect:t("select"),children:[e(n,{checked:!0,children:"Prechecked on item level"}),e(n,{children:"item 1"}),e(n,{children:"item 2"})]})}),e(g,{children:"Menu.checked+Item.checked"}),e(k,{children:a(r,{type:"radio",checked:1,onKeyDown:t("key down"),onChange:t("change"),onSelect:t("select"),children:[e(n,{checked:!0,children:"Prechecked on item level"}),e(n,{children:"Prechecked on menu level"}),e(n,{children:"item 2"})]})})]})}),o=()=>e(c,{children:a(r,{type:"checkbox",onKeyDown:t("key down"),onChange:t("change"),onSelect:t("select"),children:[e(n,{value:"item 1",checked:!0,children:"item 1"}),e(n,{value:"item 2",children:"item 2"}),e(n,{value:"item 3",checked:!0,children:"item 3"})]})}),d=()=>e(c,{children:a(r,{children:[e(n,{children:"item 1 that has very long text"}),e(n,{children:"Item 2"}),e(H,{}),e(n,{children:"Item 3"}),e(n,{children:"Item 4"}),e(n,{children:"Item 5"})]})}),l=()=>e(c,{children:a(r,{children:[e(n,{children:"item 1 that has very long text"}),e(n,{disabled:!0,children:"Item 2"}),e(n,{children:"Item 3"})]})}),s=()=>e(c,{children:a(r,{children:[e(n,{badgeNumber:5,badgeAriaLabel:"item 1 (5 unread items)",children:"item 1"}),e(n,{badgeNumber:23,"aria-label":"item 2 (23 unread items)",children:"item 2"}),e(n,{children:"item 3"})]})}),h=()=>e(c,{children:a(r,{children:[a(n,{children:[e(p,{name:"confirmation16",style:{marginRight:"8px"}})," Confirmed"]}),a(n,{value:"item 2",children:[e(p,{name:"attention16",style:{marginRight:"8px"}})," Not yet confirmed"]}),a(n,{value:"item 3",children:[e(p,{name:"attention16",style:{marginRight:"8px"}})," Not yet confirmed"]})]})}),I={render:()=>e(c,{children:a(r,{baseEl:"div",children:[e(n,{children:"Item 1 that has very long text"}),e(n,{children:"Item 2"}),e(n,{children:"Item 3"})]})}),name:"Div container"};var E,v,M;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`() => <>
        <EbayMenu onClick={action('click')} onKeyDown={action('key down')}>
            <Item>Item 1 that has very long text</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
        </EbayMenu>
    </>`,...(M=(v=m.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var x,S,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => <>
        <EbayTabs>
            <EbayTab>Menu.checked</EbayTab>
            <EbayTabPanel>
                <EbayMenu type="radio" checked={1} onKeyDown={action('key down')}
      // Test TS complier errors here:
      onChange={(e, {
        index,
        checked
      }) => action('change')(e, {
        index,
        checked
      })} onSelect={(e, {
        index,
        checked
      }) => action('select')(e, {
        index,
        checked
      })}>
                    <Item>item 0</Item>
                    <Item>Prechecked on menu level</Item>
                    <Item>item 2</Item>
                </EbayMenu>
            </EbayTabPanel>

            <EbayTab>Item.checked</EbayTab>
            <EbayTabPanel>
                <EbayMenu type="radio" onKeyDown={action('key down')} onChange={action('change')} onSelect={action('select')}>
                    <Item checked>Prechecked on item level</Item>
                    <Item>item 1</Item>
                    <Item>item 2</Item>
                </EbayMenu>
            </EbayTabPanel>

            <EbayTab>Menu.checked+Item.checked</EbayTab>
            <EbayTabPanel>
                <EbayMenu type="radio" checked={1} onKeyDown={action('key down')} onChange={action('change')} onSelect={action('select')}>
                    <Item checked>Prechecked on item level</Item>
                    <Item>Prechecked on menu level</Item>
                    <Item>item 2</Item>
                </EbayMenu>
            </EbayTabPanel>
        </EbayTabs>
    </>`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var T,D,f;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`() => <>
        <EbayMenu type="checkbox" onKeyDown={action('key down')} onChange={action('change')} onSelect={action('select')}>
            <Item value="item 1" checked>
                item 1
            </Item>
            <Item value="item 2">item 2</Item>
            <Item value="item 3" checked>
                item 3
            </Item>
        </EbayMenu>
    </>`,...(f=(D=o.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var C,P,K;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => <>
        <EbayMenu>
            <Item>item 1 that has very long text</Item>
            <Item>Item 2</Item>
            <Separator />
            <Item>Item 3</Item>
            <Item>Item 4</Item>
            <Item>Item 5</Item>
        </EbayMenu>
    </>`,...(K=(P=d.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};var N,R,W;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`() => <>
        <EbayMenu>
            <Item>item 1 that has very long text</Item>
            <Item disabled>Item 2</Item>
            <Item>Item 3</Item>
        </EbayMenu>
    </>`,...(W=(R=l.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var j,A,B;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`() => <>
        <EbayMenu>
            <Item badgeNumber={5} badgeAriaLabel="item 1 (5 unread items)">
                item 1
            </Item>
            <Item badgeNumber={23} aria-label="item 2 (23 unread items)">
                item 2
            </Item>
            <Item>item 3</Item>
        </EbayMenu>
    </>`,...(B=(A=s.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var F,L,_;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`() => <>
        <EbayMenu>
            <Item>
                <EbayIcon name="confirmation16" style={{
        marginRight: '8px'
      }} /> Confirmed
            </Item>
            <Item value="item 2">
                <EbayIcon name="attention16" style={{
        marginRight: '8px'
      }} /> Not yet confirmed
            </Item>
            <Item value="item 3">
                <EbayIcon name="attention16" style={{
        marginRight: '8px'
      }} /> Not yet confirmed
            </Item>
        </EbayMenu>
    </>`,...(_=(L=h.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var O,q,z;I.parameters={...I.parameters,docs:{...(O=I.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <>
            <EbayMenu baseEl="div">
                <Item>Item 1 that has very long text</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </EbayMenu>
        </>,
  name: 'Div container'
}`,...(z=(q=I.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const re=["Default","Radio","Checkbox","WithSeparator","WithDisabledItem","WithBadges","WithIcons","DivContainer"];export{o as Checkbox,m as Default,I as DivContainer,i as Radio,s as WithBadges,l as WithDisabledItem,h as WithIcons,d as WithSeparator,re as __namedExportsOrder,ae as default};

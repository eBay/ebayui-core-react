import{a as e,F as c,j as i}from"./index-Zi3BSDNR.js";import{a as r}from"./chunk-AY7I2SME-DUSEA8To.js";import{E as a,a as t,b as N}from"./menu-item-separator-BF8TVxpn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./array.polyfill.flat-BmqK6--B.js";import"./icon-Uz9PhjYg.js";import"./badge-OaR5SFvt.js";const q={component:a,title:"building blocks/ebay-fake-menu"},o=()=>e(c,{children:i(a,{onClick:n=>{r("click")("MENU click event prevented"),n.preventDefault()},onKeyDown:(n,u)=>r("onKeyDown")(n,u),onSelect:(n,u)=>{r("onSelect")(n,u),n.preventDefault()},children:[e(t,{href:"#",onClick:n=>{r("click")("ITEM click event prevented"),n.preventDefault()},children:"Item 1 that has very long text"}),e(t,{href:"#",current:!0,children:"Current page"}),e(t,{href:"#",children:"Item 3"})]})}),m=()=>e(c,{children:i(a,{itemMatchesUrl:!1,onClick:n=>{r("click")("MENU click event prevented"),n.preventDefault()},onKeyDown:r("key down"),onSelect:n=>{r("select")("event prevented"),n.preventDefault()},children:[e(t,{href:"#",onClick:n=>{r("click")("ITEM click event prevented"),n.preventDefault()},children:"Item 1 that has very long text"}),e(t,{href:"#",current:!0,children:"Current page"}),e(t,{href:"#",children:"Item 3"})]})}),l=()=>e(c,{children:i(a,{children:[e(t,{href:"#",children:"item 1 that has very long text"}),e(t,{href:"#",children:"Item 2"}),e(N,{}),e(t,{href:"#",children:"Item 3"}),e(t,{href:"#",children:"Item 4"}),e(t,{href:"#",children:"Item 5"})]})}),s=()=>e(c,{children:i(a,{children:[e(t,{href:"#",children:"item 1 that has very long text"}),e(t,{children:"Item without href"}),e(t,{disabled:!0,children:"Disabled Item"}),e(t,{href:"#",children:"Item 3"})]})}),h=()=>e(c,{children:i(a,{children:[e(t,{href:"#",children:"Link 1"}),e(t,{type:"button",children:"Button"}),e(t,{href:"#",children:"Link 2"}),e(t,{type:"button",disabled:!0,children:"Disabled Button"})]})}),d=()=>e(c,{children:i(a,{children:[e(t,{href:"",badgeNumber:5,badgeAriaLabel:"item 1 (5 unread items)",children:"item 1"}),e(t,{href:"",badgeNumber:23,"aria-label":"item 2 (23 unread items)",children:"item 2"}),e(t,{href:"",children:"item 3"})]})});var p,I,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => <>
        <EbayFakeMenu onClick={event => {
    action('click')('MENU click event prevented');
    event.preventDefault();
  }} onKeyDown={(event, props) => action('onKeyDown')(event, props)} onSelect={(event, props) => {
    action('onSelect')(event, props);
    event.preventDefault();
  }}>
            <Item href="#" onClick={event => {
      action('click')('ITEM click event prevented');
      event.preventDefault();
    }}>
                Item 1 that has very long text
            </Item>
            <Item href="#" current>
                Current page
            </Item>
            <Item href="#">Item 3</Item>
        </EbayFakeMenu>
    </>`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var v,b,k;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`() => <>
        <EbayFakeMenu itemMatchesUrl={false} onClick={event => {
    action('click')('MENU click event prevented');
    event.preventDefault();
  }} onKeyDown={action('key down')} onSelect={event => {
    action('select')('event prevented');
    event.preventDefault();
  }}>
            <Item href="#" onClick={event => {
      action('click')('ITEM click event prevented');
      event.preventDefault();
    }}>
                Item 1 that has very long text
            </Item>
            <Item href="#" current>
                Current page
            </Item>
            <Item href="#">Item 3</Item>
        </EbayFakeMenu>
    </>`,...(k=(b=m.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var y,g,M;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`() => <>
        <EbayFakeMenu>
            <Item href="#">item 1 that has very long text</Item>
            <Item href="#">Item 2</Item>
            <Separator />
            <Item href="#">Item 3</Item>
            <Item href="#">Item 4</Item>
            <Item href="#">Item 5</Item>
        </EbayFakeMenu>
    </>`,...(M=(g=l.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};var D,E,S;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`() => <>
        <EbayFakeMenu>
            <Item href="#">item 1 that has very long text</Item>
            <Item>Item without href</Item>
            <Item disabled>Disabled Item</Item>
            <Item href="#">Item 3</Item>
        </EbayFakeMenu>
    </>`,...(S=(E=s.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var F,x,C;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`() => <>
        <EbayFakeMenu>
            <Item href="#">Link 1</Item>
            <Item type="button">Button</Item>
            <Item href="#">Link 2</Item>
            <Item type="button" disabled>
                Disabled Button
            </Item>
        </EbayFakeMenu>
    </>`,...(C=(x=h.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var w,W,B;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`() => <>
        <EbayFakeMenu>
            <Item href="" badgeNumber={5} badgeAriaLabel="item 1 (5 unread items)">
                item 1
            </Item>
            <Item href="" badgeNumber={23} aria-label="item 2 (23 unread items)">
                item 2
            </Item>
            <Item href="">item 3</Item>
        </EbayFakeMenu>
    </>`,...(B=(W=d.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};const z=["Default","WithoutTickIcon","WithSeparator","WithDisabledItem","MixedWithButtons","WithBadges"];export{o as Default,h as MixedWithButtons,d as WithBadges,s as WithDisabledItem,l as WithSeparator,m as WithoutTickIcon,z as __namedExportsOrder,q as default};

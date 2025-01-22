import{a as e,j as n}from"./index-Zi3BSDNR.js";import{E as t,a as i,b as a,c as J}from"./ebay-infotip-content-Cbi4R-Oo.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./array.polyfill.flat-BXkfvVgt.js";import"./utils-BsWHUBpV.js";import"./use-tooltip-C-MOVFXy.js";import"./icon-CT13wuBf.js";import"./drawer-C2ZB-aQL.js";import"./dialog-previous-button-D-PYa_Oq.js";import"./icon-button-4cWiY38y.js";import"./badge-OaR5SFvt.js";const V=["top","top-left","top-right","right","right-bottom","right-top","bottom","bottom-left","bottom-right","left","left-bottom","left-top"],le={title:"buttons/ebay-infotip"},r=()=>e("div",{style:{display:"flex",margin:200},children:n(t,{a11yCloseText:"Close","aria-label":"Infotip",children:[e(i,{children:"Title"}),e(a,{children:e("p",{children:"Content"})})]})}),s={render:()=>e("div",{style:{width:"100%",margin:200},children:e(t,{icon:"settings16","aria-label":"Infotip",a11yCloseText:"Close",children:n(a,{children:[e(i,{children:"Title"}),e("p",{children:"Content"})]})})}),name:"Custom icon"},l=()=>e("div",{style:{display:"flex",margin:200},children:n(t,{disabled:!0,a11yCloseText:"Close","aria-label":"Infotip",children:[e(i,{children:"Title"}),e(a,{children:e("p",{children:"Content"})})]})}),p={render:()=>n("div",{style:{width:"100%",margin:100},children:[e("em",{children:"NOTE: No block elements can be nested in p elements, like div, h1-6, or other p elements. Any content with that will break"}),n("p",{children:["Some paragraph content"," ",n(t,{a11yCloseText:"Dismiss infotip","aria-label":"Important information",children:[e(i,{children:"Important"}),e(a,{children:e("span",{children:"This is some important info"})})]})," ","More paragraph content"]})]}),name:"In paragraph"},d=o=>e("div",{style:{width:"100%",margin:100},children:n(t,{variant:"modal",a11yCloseText:"Close","aria-label":"Infotip",a11yMaximizeText:"Maximize Text Label",a11yMinimizeText:"Minimize Text Label",...o,children:[e(i,{children:"Title"}),e(a,{children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]})}),c={render:o=>e("div",{style:{width:"100%",marginLeft:300},children:V.map((h,Q)=>n("div",{style:{margin:"100px 0"},children:[h," ",n(t,{pointer:h,a11yCloseText:"Close","aria-label":"Infotip",...o,children:[e(i,{children:"Title"}),e(a,{children:e("p",{children:"Use Access Key 'S' to display settings."})})]})]},Q))}),name:"Pointer direction"},m={render:()=>e("div",{style:{width:"100%",margin:200},children:n(t,{pointer:"top-left",overlayStyle:{top:40,left:-16},a11yCloseText:"Close","aria-label":"Infotip",children:[e(i,{children:"Title"}),e(a,{children:e("p",{children:"Use Access Key 'S' to display settings."})})]})}),name:"Pointer with custom location"},y={render:()=>e("div",{style:{width:"100%",margin:200},children:n(t,{pointer:"top-left",a11yCloseText:"Close",children:[e(J,{children:"Click for infotip"}),e(i,{children:"Title"}),e(a,{children:e("p",{children:"Use Access Key 'S' to display settings."})})]})}),name:"Text instead of icon"},f={render:()=>e("div",{style:{width:"100%",margin:200},children:n(t,{pointer:"top-left",a11yCloseText:"Close","aria-label":"Wrong aria-label, should be overwritten",children:[e(J,{"aria-label":"Click to open infotip",style:{height:"auto",width:"auto"},children:({icon:o})=>n("span",{style:{display:"inline-flex",alignItems:"center"},children:[o,e("span",{style:{marginLeft:5},children:"Click me"})]})}),n(a,{children:[e(i,{children:"Title"}),e("p",{children:"Use Access Key 'S' to display settings."})]})]})}),name:"Custom button content (With render prop)"},b={render:()=>e("div",{style:{width:"100%",margin:200},children:n(t,{pointer:"top-left",initialExpanded:!0,a11yCloseText:"Close","aria-label":"Infotip",children:[e(i,{children:"Title"}),e(a,{children:e("p",{children:"Use Access Key 'S' to display settings."})})]})}),name:"Expanded by default"};var I,g,C;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  margin: 200
}}>
        <EbayInfotip a11yCloseText="Close" aria-label="Infotip">
            <EbayInfotipHeading>Title</EbayInfotipHeading>
            <EbayInfotipContent>
                <p>Content</p>
            </EbayInfotipContent>
        </EbayInfotip>
    </div>`,...(C=(g=r.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var E,u,x;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    margin: 200
  }}>
            <EbayInfotip icon="settings16" aria-label="Infotip" a11yCloseText="Close">
                <EbayInfotipContent>
                    <EbayInfotipHeading>Title</EbayInfotipHeading>
                    <p>Content</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>,
  name: 'Custom icon'
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var T,v,w;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  margin: 200
}}>
        <EbayInfotip disabled a11yCloseText="Close" aria-label="Infotip">
            <EbayInfotipHeading>Title</EbayInfotipHeading>
            <EbayInfotipContent>
                <p>Content</p>
            </EbayInfotipContent>
        </EbayInfotip>
    </div>`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var H,S,P;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    margin: 100
  }}>
            <em>
                NOTE: No block elements can be nested in p elements, like div, h1-6, or other p elements.
                Any content with that will break
            </em>
            <p>
                Some paragraph content{' '}
                <EbayInfotip a11yCloseText="Dismiss infotip" aria-label="Important information">
                    <EbayInfotipHeading>Important</EbayInfotipHeading>
                    <EbayInfotipContent>
                        <span>This is some important info</span>
                    </EbayInfotipContent>
                </EbayInfotip>{' '}
                More paragraph content
            </p>
        </div>,
  name: 'In paragraph'
}`,...(P=(S=p.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var k,A,L;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`args => <div style={{
  width: '100%',
  margin: 100
}}>
        <EbayInfotip variant="modal" a11yCloseText="Close" aria-label="Infotip" a11yMaximizeText="Maximize Text Label" a11yMinimizeText="Minimize Text Label" {...args}>
            <EbayInfotipHeading>Title</EbayInfotipHeading>
            <EbayInfotipContent>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                </p>
            </EbayInfotipContent>
        </EbayInfotip>
    </div>`,...(L=(A=d.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var M,D,K;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '100%',
    marginLeft: 300
  }}>
            {allPointers.map((pointerType, index) => <div key={index} style={{
      margin: '100px 0'
    }}>
                    {pointerType}{' '}
                    <EbayInfotip pointer={pointerType} a11yCloseText="Close" aria-label="Infotip" {...args}>
                        <EbayInfotipHeading>Title</EbayInfotipHeading>
                        <EbayInfotipContent>
                            <p>Use Access Key &apos;S&apos; to display settings.</p>
                        </EbayInfotipContent>
                    </EbayInfotip>
                </div>)}
        </div>,
  name: 'Pointer direction'
}`,...(K=(D=c.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var U,z,W;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    margin: 200
  }}>
            <EbayInfotip pointer="top-left" overlayStyle={{
      top: 40,
      left: -16
    }} a11yCloseText="Close" aria-label="Infotip">
                <EbayInfotipHeading>Title</EbayInfotipHeading>
                <EbayInfotipContent>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>,
  name: 'Pointer with custom location'
}`,...(W=(z=m.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var O,_,B;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    margin: 200
  }}>
            <EbayInfotip pointer="top-left" a11yCloseText="Close">
                <EbayInfotipHost>Click for infotip</EbayInfotipHost>
                <EbayInfotipHeading>Title</EbayInfotipHeading>
                <EbayInfotipContent>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>,
  name: 'Text instead of icon'
}`,...(B=(_=y.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var N,j,q;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    margin: 200
  }}>
            <EbayInfotip pointer="top-left" a11yCloseText="Close" aria-label="Wrong aria-label, should be overwritten">
                <EbayInfotipHost aria-label="Click to open infotip" style={{
        height: 'auto',
        width: 'auto'
      }}>
                    {({
          icon
        }: any) => <span style={{
          display: 'inline-flex',
          alignItems: 'center'
        }}>
                            {icon}
                            <span style={{
            marginLeft: 5
          }}>Click me</span>
                        </span>}
                </EbayInfotipHost>
                <EbayInfotipContent>
                    <EbayInfotipHeading>Title</EbayInfotipHeading>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>,
  name: 'Custom button content (With render prop)'
}`,...(q=(j=f.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var R,F,G;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    margin: 200
  }}>
            <EbayInfotip pointer="top-left" initialExpanded a11yCloseText="Close" aria-label="Infotip">
                <EbayInfotipHeading>Title</EbayInfotipHeading>
                <EbayInfotipContent>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>,
  name: 'Expanded by default'
}`,...(G=(F=b.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const pe=["Default","CustomIcon","Disabled","InParagraph","Modal","_PointerDirection","PointerWithCustomLocation","TextInsteadOfIcon","CustomButtonContentWithRenderProp","ExpandedByDefault"];export{f as CustomButtonContentWithRenderProp,s as CustomIcon,r as Default,l as Disabled,b as ExpandedByDefault,p as InParagraph,d as Modal,m as PointerWithCustomLocation,y as TextInsteadOfIcon,c as _PointerDirection,pe as __namedExportsOrder,le as default};

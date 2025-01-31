import{a as e,j as n}from"./index-Zi3BSDNR.js";import{E as t,a as i,b as a,c as J}from"./ebay-infotip-content-jvvbeqQJ.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./array.polyfill.flat-BmqK6--B.js";import"./utils-D-SRVgju.js";import"./use-tooltip-h2qxkECS.js";import"./icon-BPP4ANCb.js";import"./dialog-previous-button-Y_-OFT0F.js";import"./icon-button-CeJ06O00.js";import"./badge-OaR5SFvt.js";import"./lightbox-dialog-DmNe7lTA.js";const V=["top","top-left","top-right","right","right-bottom","right-top","bottom","bottom-left","bottom-right","left","left-bottom","left-top"],le={title:"buttons/ebay-infotip"},r=()=>e("div",{style:{display:"flex",margin:200},children:n(t,{a11yCloseText:"Close","aria-label":"Infotip",children:[e(i,{children:"Title"}),e(a,{children:e("p",{children:"Content"})})]})}),s={render:()=>e("div",{style:{width:"100%",margin:200},children:e(t,{icon:"settings16","aria-label":"Infotip",a11yCloseText:"Close",children:n(a,{children:[e(i,{children:"Title"}),e("p",{children:"Content"})]})})}),name:"Custom icon"},l=()=>e("div",{style:{display:"flex",margin:200},children:n(t,{disabled:!0,a11yCloseText:"Close","aria-label":"Infotip",children:[e(i,{children:"Title"}),e(a,{children:e("p",{children:"Content"})})]})}),p={render:()=>n("div",{style:{width:"100%",margin:100},children:[e("em",{children:"NOTE: No block elements can be nested in p elements, like div, h1-6, or other p elements. Any content with that will break"}),n("p",{children:["Some paragraph content"," ",n(t,{a11yCloseText:"Dismiss infotip","aria-label":"Important information",children:[e(i,{children:"Important"}),e(a,{children:e("span",{children:"This is some important info"})})]})," ","More paragraph content"]})]}),name:"In paragraph"},d=o=>e("div",{style:{width:"100%",margin:100},children:n(t,{variant:"modal",a11yCloseText:"Close","aria-label":"Infotip",...o,children:[e(i,{children:"Title"}),e(a,{children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]})}),c={render:o=>e("div",{style:{width:"100%",marginLeft:300},children:V.map((h,Q)=>n("div",{style:{margin:"100px 0"},children:[h," ",n(t,{pointer:h,a11yCloseText:"Close","aria-label":"Infotip",...o,children:[e(i,{children:"Title"}),e(a,{children:e("p",{children:"Use Access Key 'S' to display settings."})})]})]},Q))}),name:"Pointer direction"},y={render:()=>e("div",{style:{width:"100%",margin:200},children:n(t,{pointer:"top-left",overlayStyle:{top:40,left:-16},a11yCloseText:"Close","aria-label":"Infotip",children:[e(i,{children:"Title"}),e(a,{children:e("p",{children:"Use Access Key 'S' to display settings."})})]})}),name:"Pointer with custom location"},m={render:()=>e("div",{style:{width:"100%",margin:200},children:n(t,{pointer:"top-left",a11yCloseText:"Close",children:[e(J,{children:"Click for infotip"}),e(i,{children:"Title"}),e(a,{children:e("p",{children:"Use Access Key 'S' to display settings."})})]})}),name:"Text instead of icon"},f={render:()=>e("div",{style:{width:"100%",margin:200},children:n(t,{pointer:"top-left",a11yCloseText:"Close","aria-label":"Wrong aria-label, should be overwritten",children:[e(J,{"aria-label":"Click to open infotip",style:{height:"auto",width:"auto"},children:({icon:o})=>n("span",{style:{display:"inline-flex",alignItems:"center"},children:[o,e("span",{style:{marginLeft:5},children:"Click me"})]})}),n(a,{children:[e(i,{children:"Title"}),e("p",{children:"Use Access Key 'S' to display settings."})]})]})}),name:"Custom button content (With render prop)"},b={render:()=>e("div",{style:{width:"100%",margin:200},children:n(t,{pointer:"top-left",initialExpanded:!0,a11yCloseText:"Close","aria-label":"Infotip",children:[e(i,{children:"Title"}),e(a,{children:e("p",{children:"Use Access Key 'S' to display settings."})})]})}),name:"Expanded by default"};var I,g,C;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  margin: 200
}}>
        <EbayInfotip a11yCloseText="Close" aria-label="Infotip">
            <EbayInfotipHeading>Title</EbayInfotipHeading>
            <EbayInfotipContent>
                <p>Content</p>
            </EbayInfotipContent>
        </EbayInfotip>
    </div>`,...(C=(g=r.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var E,u,T;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=(u=s.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var x,v,w;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`() => <div style={{
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
}`,...(P=(S=p.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var k,A,D;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`args => <div style={{
  width: '100%',
  margin: 100
}}>
        <EbayInfotip variant="modal" a11yCloseText="Close" aria-label="Infotip" {...args}>
            <EbayInfotipHeading>Title</EbayInfotipHeading>
            <EbayInfotipContent>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                </p>
            </EbayInfotipContent>
        </EbayInfotip>
    </div>`,...(D=(A=d.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var K,U,L;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(L=(U=c.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var W,O,_;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(_=(O=y.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var B,M,N;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(N=(M=m.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var j,q,R;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(R=(q=f.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var z,F,G;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(G=(F=b.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const pe=["Default","CustomIcon","Disabled","InParagraph","Modal","_PointerDirection","PointerWithCustomLocation","TextInsteadOfIcon","CustomButtonContentWithRenderProp","ExpandedByDefault"];export{f as CustomButtonContentWithRenderProp,s as CustomIcon,r as Default,l as Disabled,b as ExpandedByDefault,p as InParagraph,d as Modal,y as PointerWithCustomLocation,m as TextInsteadOfIcon,c as _PointerDirection,pe as __namedExportsOrder,le as default};

import{j as n,a as e,F as t}from"./jsx-runtime-CjohWU4o.js";import{r as D}from"./index-CBqU2yxZ.js";import{a as F}from"./chunk-AY7I2SME-DUSEA8To.js";import{E as P}from"./button-Yk8pxgdg.js";import{c as H}from"./index-Bl6ORisp.js";import{N as U,E as r}from"./notice-content-BDwg0Un2.js";import"./array.polyfill.flat--BFOj5KS.js";import{f as $}from"./utils-C7zmhd11.js";import{E as B}from"./icon-DvI5HAVZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./progress-spinner-D30Bypnl.js";const i=({className:a,status:o="general",children:G,hidden:p=!1,"aria-label":k,onNoticeShow:v=()=>{},...j})=>{if(D.useEffect(()=>{p||v()},[p]),p)return null;const g=$(G,r);if(!g)throw new Error("EbayInlineNotice: Please use a EbayNoticeContent that defines the content of the notice");const f=o==="general";return n("div",{...j,className:H(a,"inline-notice",{[`inline-notice--${o}`]:!f}),children:[f?null:e("span",{className:"inline-notice__header",children:e(B,{name:`${o}Filled16`,a11yText:k,a11yVariant:"label"})}),e(U,{...g.props,type:"inline"})]})};try{inlinenotice.displayName="inlinenotice",inlinenotice.__docgenInfo={description:"",displayName:"inlinenotice",props:{}}}catch{}const Z={title:"notices & tips/ebay-inline-notice"},c=()=>e(t,{children:e(i,{"aria-label":"General",children:e(r,{children:e("p",{children:"text message"})})})}),s={render:()=>e(t,{children:e(i,{status:"confirmation","aria-label":"Confirmation",children:n(r,{children:[e("p",{children:"Delivered on May 1, 2017"}),n("p",{children:["Tracking number: ",e("a",{href:"http://www.ebay.com",children:"93878473859376898908657567"})]})]})})}),name:"Confirmation message"},l={render:()=>e(t,{children:e(i,{status:"information","aria-label":"Information",children:e(r,{children:e("p",{children:"Global Shipping Program transaction."})})})}),name:"Information message"},m={render:()=>e(t,{children:e(i,{status:"attention","aria-label":"Attention",children:e(r,{children:e("p",{children:"Update your credit card."})})})}),name:"Attention message"},d={render:()=>e(t,{children:e(O,{})}),name:"Notice toggle"};function O(){const[a,o]=D.useState(!1);return n(t,{children:[n(P,{onClick:()=>o(!a),children:[a?"Show":"Hide"," Notice"]}),e(i,{status:"confirmation",hidden:a,onNoticeShow:F("Showing"),"aria-label":"Toggle notice",children:n(r,{children:[e("p",{children:"Delivered on May 1, 2017"}),n("p",{children:["Tracking number: ",e("a",{href:"http://www.ebay.com",children:"93878473859376898908657567"})]})]})})]})}var h,b,y;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`() => <>
        <EbayInlineNotice aria-label="General">
            <EbayNoticeContent>
                <p>text message</p>
            </EbayNoticeContent>
        </EbayInlineNotice>
    </>`,...(y=(b=c.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var u,N,E;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <>
            <EbayInlineNotice status="confirmation" aria-label="Confirmation">
                <EbayNoticeContent>
                    <p>Delivered on May 1, 2017</p>
                    <p>
                        Tracking number: <a href="http://www.ebay.com">93878473859376898908657567</a>
                    </p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>,
  name: 'Confirmation message'
}`,...(E=(N=s.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var C,I,w;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <>
            <EbayInlineNotice status="information" aria-label="Information">
                <EbayNoticeContent>
                    <p>Global Shipping Program transaction.</p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>,
  name: 'Information message'
}`,...(w=(I=l.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var S,_,x;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <>
            <EbayInlineNotice status="attention" aria-label="Attention">
                <EbayNoticeContent>
                    <p>Update your credit card.</p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>,
  name: 'Attention message'
}`,...(x=(_=m.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var M,T,A;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <>
            <NoticeToggleStory />
        </>,
  name: 'Notice toggle'
}`,...(A=(T=d.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};const ee=["Default","ConfirmationMessage","InformationMessage","AttentionMessage","NoticeToggle"];export{m as AttentionMessage,s as ConfirmationMessage,c as Default,l as InformationMessage,d as NoticeToggle,ee as __namedExportsOrder,Z as default};

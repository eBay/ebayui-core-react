import{j as o,a as e}from"./index-Zi3BSDNR.js";import{r as p}from"./index-CBqU2yxZ.js";import{a as c}from"./chunk-AY7I2SME-DUSEA8To.js";import{E as s,a as S,b as g}from"./dialog-previous-button-BnYM3ZzH.js";import{E as d}from"./button-MSUoMGsh.js";import{E as he}from"./checkbox-CTgKr7n7.js";import{L as ue}from"./description-CsOth_nc.js";import{E as l}from"./lightbox-dialog-hVQxqmDI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-SayoFab4.js";import"./array.polyfill.flat-CRkN-9z9.js";import"./icon-button-XlrC3Myo.js";import"./badge-OaR5SFvt.js";import"./progress-spinner-DFWexP6u.js";import"./utils-DQoW5oVN.js";const Te={title:"dialogs/ebay-lightbox-dialog",component:l,argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open."},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog opens (defaults to close button)."},a11yCloseText:{control:{type:"text"},description:"A11y text for close button and mask."},bannerImgSrc:{control:{type:"text"},description:"Image source for the expressive variant"},bannerImgPosition:{control:{type:"text"},description:"Position of the image within the given bounds using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)"},size:{options:["regular","wide","narrow","large"],description:"The size of the dialog",table:{defaultValue:{summary:"regular"}},type:{category:"Options"}},onOpen:{action:"onOpen",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"onClose",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}}}},n=e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),b=a=>{const[i,r]=p.useState(!1),t=()=>r(!1);return o("div",{children:[e("button",{className:"btn btn--secondary",onClick:()=>r(!i),children:"Open Dialog"}),e("p",{children:"Some outside content..."}),o(l,{...a,open:i,onOpen:()=>c("onOpen")(),onClose:()=>{c("onClose")(),t()},a11yCloseText:"Close",children:[e(s,{children:"Heading"}),n,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})}),o(S,{children:[e(d,{priority:"primary",onClick:t,children:"OK"}),e(d,{onClick:t,children:"Cancel"})]})]})]})},h=a=>o("div",{children:[e("p",{children:"Some outside content..."}),o(l,{...a,open:!0,a11yCloseText:"Close dialog",children:[e(s,{children:"Heading"}),n,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})})]})]}),u=a=>o("div",{children:[e("p",{children:"Some outside content..."}),o(l,{...a,open:!0,a11yCloseText:"Close",children:[e(s,{children:"Heading"}),n,n,n,n,n,n,n,n,n,n,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})})]})]}),m=a=>o("div",{children:[e("p",{children:"Some outside content..."}),o(l,{...a,mode:"mini",open:!0,a11yCloseText:"Close",children:[e(s,{}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),y=a=>{const[i,r]=p.useState(!1),[t,be]=p.useState(!0),H=()=>{t&&r(!1)};return o("div",{children:[e(d,{onClick:()=>r(!i),children:"Show Dialog"}),o(l,{...a,open:i,onClose:H,a11yCloseText:"Close",children:[e(s,{children:"Heading"}),e("p",{children:"Unselect the following checkbox to prevent user to close the dialog"}),e(he,{id:"checkbox-closeable",checked:t,onChange:()=>be(!t),children:e(ue,{children:"Enable closing dialog"})}),o("p",{children:["Normally, the dialog can be closed by either:",o("ul",{children:[e("li",{children:"clicking [X] icon on top of the dialog"}),e("li",{children:"clicking OK button"}),e("li",{children:"clicking the overlay or area outside the dialog"}),e("li",{children:"Press Esc key on keyboard"})]})]}),e(S,{children:e(d,{onClick:H,children:"OK"})})]})]})},w=a=>{const[i,r]=p.useState(!1),t=()=>r(!1);return o("div",{children:[e("button",{className:"btn btn--secondary",onClick:()=>r(!i),children:"Open Dialog"}),e("p",{children:"Some outside content..."}),o(l,{...a,open:i,onClose:t,animated:!0,a11yCloseText:"Close",children:[e(s,{children:"Heading"}),n,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})}),o(S,{children:[e(d,{priority:"primary",onClick:t,children:"OK"}),e(d,{onClick:t,children:"Cancel"})]})]})]})},C=a=>{const[i,r]=p.useState(!1),t=()=>r(!1);return o("div",{children:[e("button",{className:"btn btn--secondary",onClick:()=>r(!i),children:"Open Dialog"}),e("p",{children:"Some outside content..."}),o(l,{...a,open:i,onClose:t,buttonPosition:"hidden",a11yCloseText:"Close",children:[e(s,{children:"Heading"}),n,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})}),o(S,{children:[e(d,{priority:"primary",onClick:t,children:"OK"}),e(d,{onClick:t,children:"Cancel"})]})]})]})},E=a=>o("div",{children:[e("p",{children:"Some outside content..."}),o(l,{...a,open:!0,a11yCloseText:"Close dialog",children:[e(g,{"aria-label":"Previous",onClick:c("previous button click")}),e(s,{children:"Heading"}),n,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})})]})]}),D=a=>o("div",{children:[e("p",{children:"Some outside content..."}),o(l,{...a,open:!0,a11yCloseText:"Close dialog",size:"wide",children:[e(g,{"aria-label":"Previous",onClick:c("previous button click")}),e(s,{children:"Heading"}),n,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})})]})]}),x=a=>o("div",{children:[e("p",{children:"Some outside content..."}),o(l,{...a,open:!0,a11yCloseText:"Close dialog",size:"narrow",children:[e(g,{"aria-label":"Previous",onClick:c("previous button click")}),e(s,{children:"Heading"}),n,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})})]})]}),v=a=>o("div",{children:[e("p",{children:"Some outside content..."}),o(l,{...a,open:!0,a11yCloseText:"Close dialog",size:"fullscreen",children:[e(g,{"aria-label":"Previous",onClick:c("previous button click")}),e(s,{children:"Heading"}),n,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})})]})]}),f=a=>o("div",{children:[e("p",{children:"Some outside content..."}),o(l,{...a,open:!0,a11yCloseText:"Close dialog",size:"large",children:[e(g,{"aria-label":"Previous",onClick:c("previous button click")}),e(s,{children:"Heading"}),n,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})})]})]}),k=a=>{const[i,r]=p.useState(!1);return o("div",{children:[e("button",{className:"btn btn--secondary",onClick:()=>r(!i),children:"Open Dialog"}),o(l,{...a,bannerImgSrc:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg",bannerImgPosition:"top",open:i,onOpen:()=>c("onOpen")(),onClose:()=>{c("onClose")(),r(!1)},a11yCloseText:"Close",children:[e(s,{children:"Heading Text"}),n,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})})]})]})};var O,P,L;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayLightboxDialog {...args} open={open} onOpen={() => action('onOpen')()} onClose={() => {
      action('onClose')();
      close();
    }} a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
                <EbayDialogFooter>
                    <EbayButton priority="primary" onClick={close}>
                        OK
                    </EbayButton>
                    <EbayButton onClick={close}>Cancel</EbayButton>
                </EbayDialogFooter>
            </EbayLightboxDialog>
        </div>;
}`,...(L=(P=b.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var T,B,z;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog">
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...(z=(B=h.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var W,N,F;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close">
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...(F=(N=u.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var K,q,I;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} mode="mini" open a11yCloseText="Close">
            <EbayDialogHeader />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
            </p>
        </EbayLightboxDialog>
    </div>`,...(I=(q=m.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var A,j,U;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogCloseable, setDialogCloseable] = useState(true);
  const closeDialog = () => {
    if (dialogCloseable) {
      setShowDialog(false);
    }
  };
  return <div>
            <EbayButton onClick={() => setShowDialog(!showDialog)}>Show Dialog</EbayButton>

            <EbayLightboxDialog {...args} open={showDialog} onClose={closeDialog} a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>

                <p>Unselect the following checkbox to prevent user to close the dialog</p>
                <EbayCheckbox id="checkbox-closeable" checked={dialogCloseable} onChange={() => setDialogCloseable(!dialogCloseable)}>
                    <EbayLabel>Enable closing dialog</EbayLabel>
                </EbayCheckbox>

                <p>
                    Normally, the dialog can be closed by either:
                    <ul>
                        <li>clicking [X] icon on top of the dialog</li>
                        <li>clicking OK button</li>
                        <li>clicking the overlay or area outside the dialog</li>
                        <li>Press Esc key on keyboard</li>
                    </ul>
                </p>

                <EbayDialogFooter>
                    <EbayButton onClick={closeDialog}>OK</EbayButton>
                </EbayDialogFooter>
            </EbayLightboxDialog>
        </div>;
}`,...(U=(j=y.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var V,M,X;w.parameters={...w.parameters,docs:{...(V=w.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayLightboxDialog {...args} open={open} onClose={close} animated a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
                <EbayDialogFooter>
                    <EbayButton priority="primary" onClick={close}>
                        OK
                    </EbayButton>
                    <EbayButton onClick={close}>Cancel</EbayButton>
                </EbayDialogFooter>
            </EbayLightboxDialog>
        </div>;
}`,...(X=(M=w.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var _,G,J;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayLightboxDialog {...args} open={open} onClose={close} buttonPosition="hidden" a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
                <EbayDialogFooter>
                    <EbayButton priority="primary" onClick={close}>
                        OK
                    </EbayButton>
                    <EbayButton onClick={close}>Cancel</EbayButton>
                </EbayDialogFooter>
            </EbayLightboxDialog>
        </div>;
}`,...(J=(G=C.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,R,Y;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action('previous button click')} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...(Y=(R=E.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var Z,$,ee;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="wide">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action('previous button click')} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...(ee=($=D.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var oe,ae,ne;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="narrow">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action('previous button click')} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...(ne=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,ie,re;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="fullscreen">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action('previous button click')} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...(re=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var le,se,ce;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`args => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog {...args} open a11yCloseText="Close dialog" size="large">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action('previous button click')} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...(ce=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var de,pe,ge;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <EbayLightboxDialog {...args} bannerImgSrc="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg" bannerImgPosition="top" open={open} onOpen={() => action('onOpen')()} onClose={() => {
      action('onClose')();
      setOpen(false);
    }} a11yCloseText="Close">
                <EbayDialogHeader>Heading Text</EbayDialogHeader>
                {textParagraph}
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayLightboxDialog>
        </div>;
}`,...(ge=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const Be=["Default","AlwaysOpened","ScrollingContent","MiniDialog","DisableDialogClose","WithAnimation","WithNoBackgroundClick","WithPreviousButton","WithWideSize","WithNarrowSize","WithFullscreenSize","WithLargeSize","Expressive"];export{h as AlwaysOpened,b as Default,y as DisableDialogClose,k as Expressive,m as MiniDialog,u as ScrollingContent,w as WithAnimation,v as WithFullscreenSize,f as WithLargeSize,x as WithNarrowSize,C as WithNoBackgroundClick,E as WithPreviousButton,D as WithWideSize,Be as __namedExportsOrder,Te as default};

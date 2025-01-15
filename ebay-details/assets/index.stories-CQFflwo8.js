import{j as o,a as e}from"./index-Zi3BSDNR.js";import{r as d}from"./index-CBqU2yxZ.js";import{E as r,a as k,b as p}from"./dialog-previous-button-Ct2iTLyE.js";import{E as c}from"./button-BdkPxRcr.js";import{E as se}from"./checkbox-5sSBB7aB.js";import{L as de}from"./description-CsOth_nc.js";import{E as i}from"./lightbox-dialog-Fx84OAqi.js";import{a as s}from"./chunk-AY7I2SME-DUSEA8To.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-Db4mbNWJ.js";import"./array.polyfill.flat-G3GcW6cJ.js";import"./icon-button-C28cU3tM.js";import"./badge-OaR5SFvt.js";import"./progress-spinner-wBxz2cTv.js";import"./utils-CTD7SXRu.js";const Se={component:i,title:"dialogs/ebay-lightbox-dialog"},a=e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),b=()=>{const[l,t]=d.useState(!1),n=()=>t(!1);return o("div",{children:[e("button",{className:"btn btn--secondary",onClick:()=>t(!l),children:"Open Dialog"}),e("p",{children:"Some outside content..."}),o(i,{open:l,onOpen:()=>s("onOpen")(),onClose:()=>{s("onClose")(),t(!1)},a11yCloseText:"Close",children:[e(r,{children:"Heading"}),a,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})}),o(k,{children:[e(c,{priority:"primary",onClick:n,children:"OK"}),e(c,{onClick:n,children:"Cancel"})]})]})]})},h=()=>o("div",{children:[e("p",{children:"Some outside content..."}),o(i,{open:!0,a11yCloseText:"Close dialog",children:[e(r,{children:"Heading"}),a,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})})]})]}),g=()=>o("div",{children:[e("p",{children:"Some outside content..."}),o(i,{open:!0,a11yCloseText:"Close",children:[e(r,{children:"Heading"}),a,a,a,a,a,a,a,a,a,a,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})})]})]}),u=()=>o("div",{children:[e("p",{children:"Some outside content..."}),o(i,{mode:"mini",open:!0,a11yCloseText:"Close",children:[e(r,{}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),m=()=>{const[l,t]=d.useState(!1),[n,ce]=d.useState(!0),f=()=>{n&&t(!1)};return o("div",{children:[e(c,{onClick:()=>t(!l),children:"Show Dialog"}),o(i,{open:l,onClose:f,a11yCloseText:"Close",children:[e(r,{children:"Heading"}),e("p",{children:"Unselect the following checkbox to prevent user to close the dialog"}),e(se,{id:"checkbox-closeable",checked:n,onChange:()=>ce(!n),children:e(de,{children:"Enable closing dialog"})}),o("p",{children:["Normally, the dialog can be closed by either:",o("ul",{children:[e("li",{children:"clicking [X] icon on top of the dialog"}),e("li",{children:"clicking OK button"}),e("li",{children:"clicking the overlay or area outside the dialog"}),e("li",{children:"Press Esc key on keyboard"})]})]}),e(k,{children:e(c,{onClick:f,children:"OK"})})]})]})},y=()=>{const[l,t]=d.useState(!1),n=()=>t(!1);return o("div",{children:[e("button",{className:"btn btn--secondary",onClick:()=>t(!l),children:"Open Dialog"}),e("p",{children:"Some outside content..."}),o(i,{open:l,onClose:n,animated:!0,a11yCloseText:"Close",children:[e(r,{children:"Heading"}),a,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})}),o(k,{children:[e(c,{priority:"primary",onClick:n,children:"OK"}),e(c,{onClick:n,children:"Cancel"})]})]})]})},w=()=>{const[l,t]=d.useState(!1),n=()=>t(!1);return o("div",{children:[e("button",{className:"btn btn--secondary",onClick:()=>t(!l),children:"Open Dialog"}),e("p",{children:"Some outside content..."}),o(i,{open:l,onClose:n,buttonPosition:"hidden",a11yCloseText:"Close",children:[e(r,{children:"Heading"}),a,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})}),o(k,{children:[e(c,{priority:"primary",onClick:n,children:"OK"}),e(c,{onClick:n,children:"Cancel"})]})]})]})},C=()=>o("div",{children:[e("p",{children:"Some outside content..."}),o(i,{open:!0,a11yCloseText:"Close dialog",children:[e(p,{"aria-label":"Previous",onClick:s("previous button click")}),e(r,{children:"Heading"}),a,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})})]})]}),E=()=>o("div",{children:[e("p",{children:"Some outside content..."}),o(i,{open:!0,a11yCloseText:"Close dialog",size:"wide",children:[e(p,{"aria-label":"Previous",onClick:s("previous button click")}),e(r,{children:"Heading"}),a,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})})]})]}),D=()=>o("div",{children:[e("p",{children:"Some outside content..."}),o(i,{open:!0,a11yCloseText:"Close dialog",size:"narrow",children:[e(p,{"aria-label":"Previous",onClick:s("previous button click")}),e(r,{children:"Heading"}),a,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})})]})]}),x=()=>o("div",{children:[e("p",{children:"Some outside content..."}),o(i,{open:!0,a11yCloseText:"Close dialog",size:"fullscreen",children:[e(p,{"aria-label":"Previous",onClick:s("previous button click")}),e(r,{children:"Heading"}),a,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})})]})]}),v=()=>o("div",{children:[e("p",{children:"Some outside content..."}),o(i,{open:!0,a11yCloseText:"Close dialog",size:"large",children:[e(p,{"aria-label":"Previous",onClick:s("previous button click")}),e(r,{children:"Heading"}),a,e("p",{children:e("a",{href:"http://www.ebay.com",children:"www.ebay.com"})})]})]});var S,H,P;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayLightboxDialog open={open} onOpen={() => action('onOpen')()} onClose={() => {
      action('onClose')();
      setOpen(false);
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
}`,...(P=(H=b.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var O,L,B;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`() => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog open a11yCloseText="Close dialog">
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...(B=(L=h.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var _,T,z;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`() => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog open a11yCloseText="Close">
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
    </div>`,...(z=(T=g.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var W,N,F;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`() => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog mode="mini" open a11yCloseText="Close">
            <EbayDialogHeader />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
            </p>
        </EbayLightboxDialog>
    </div>`,...(F=(N=u.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var K,q,A;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogCloseable, setDialogCloseable] = useState(true);
  const closeDialog = () => {
    if (dialogCloseable) {
      setShowDialog(false);
    }
  };
  return <div>
            <EbayButton onClick={() => setShowDialog(!showDialog)}>Show Dialog</EbayButton>

            <EbayLightboxDialog open={showDialog} onClose={closeDialog} a11yCloseText="Close">
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
}`,...(A=(q=m.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var j,U,M;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayLightboxDialog open={open} onClose={close} animated a11yCloseText="Close">
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
}`,...(M=(U=y.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var X,G,I;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayLightboxDialog open={open} onClose={close} buttonPosition="hidden" a11yCloseText="Close">
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
}`,...(I=(G=w.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var J,Q,R;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`() => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog open a11yCloseText="Close dialog">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action('previous button click')} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...(R=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var V,Y,Z;E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:`() => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog open a11yCloseText="Close dialog" size="wide">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action('previous button click')} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...(Z=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,oe;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`() => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog open a11yCloseText="Close dialog" size="narrow">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action('previous button click')} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...(oe=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var ae,ne,ie;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`() => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog open a11yCloseText="Close dialog" size="fullscreen">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action('previous button click')} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...(ie=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var te,re,le;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`() => <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog open a11yCloseText="Close dialog" size="large">
            <EbayDialogPreviousButton aria-label="Previous" onClick={action('previous button click')} />
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayLightboxDialog>
    </div>`,...(le=(re=v.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};const He=["_Default","_AlwaysOpened","_ScrollingContent","_MiniDialog","_DisableDialogClose","_WithAnimation","_WithNoBackgroundClick","_WithPreviousButton","_WithWideSize","_WithNarrowSize","_WithFullscreenSize","_WithLargeSize"];export{h as _AlwaysOpened,b as _Default,m as _DisableDialogClose,u as _MiniDialog,g as _ScrollingContent,y as _WithAnimation,x as _WithFullscreenSize,v as _WithLargeSize,D as _WithNarrowSize,w as _WithNoBackgroundClick,C as _WithPreviousButton,E as _WithWideSize,He as __namedExportsOrder,Se as default};

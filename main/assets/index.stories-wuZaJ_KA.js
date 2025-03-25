import{a as e,c as $,j as t,F as z}from"./index-Zi3BSDNR.js";import{r as m}from"./index-CBqU2yxZ.js";import{E as C}from"./button-CBvSebTQ.js";import{E as K}from"./icon-DpqV1fQN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./array.polyfill.flat-DsXqREK2.js";import"./progress-spinner-Caq2oi-V.js";const u=({direction:n="row",defaultState:a="active",children:c,className:d,...i})=>{const l=m.Children.toArray(c),S=Q(l,a);return e("div",{...i,className:$(d,"progress-stepper",{"progress-stepper--vertical":n==="column"}),children:e("div",{role:"list",className:"progress-stepper__items",children:l.map((p,o)=>t(m.Fragment,{children:[o>0&&e("hr",{className:"progress-stepper__separator",role:"presentation"}),m.cloneElement(p,{state:R(o,S),...p.props,current:S===o})]},o))})})};function Q(n,a){const c=n.findIndex(d=>d.props.current);if(c===-1)switch(a){case"complete":return n.length-1;case"upcoming":return 0}return c}function R(n,a){if(n<=a)return"complete";if(n>a)return"upcoming"}try{ebayprogressstepper.displayName="ebayprogressstepper",ebayprogressstepper.__docgenInfo={description:"",displayName:"ebayprogressstepper",props:{direction:{defaultValue:{value:"row"},description:"",name:"direction",required:!1,type:{name:"StepperDirection"}},defaultState:{defaultValue:{value:"active"},description:"",name:"defaultState",required:!1,type:{name:"StepState"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Y={complete:"stepperConfirmation24",attention:"stepperAttention24",upcoming:"stepperUpcoming24",active:"stepperConfirmation24"},r=({current:n,state:a="complete",children:c,className:d,...i})=>{const l=m.Children.toArray(c),S=l.find(T=>T.type===s),p=l.filter(T=>T.type!==s),o=$(d,"progress-stepper__item",{"progress-stepper__item--attention":a==="attention"}),_=Y[a];return t("div",{...i,className:o,role:"listitem","aria-current":n?"step":void 0,children:[e("div",{className:"progress-stepper__icon",children:_&&e(K,{name:_,"aria-label":n?"current":a})}),t("div",{className:"progress-stepper__text",children:[S,p]})]})};try{ebayprogressstep.displayName="ebayprogressstep",ebayprogressstep.__docgenInfo={description:"",displayName:"ebayprogressstep",props:{state:{defaultValue:{value:"complete"},description:"",name:"state",required:!1,type:{name:"StepState"}},current:{defaultValue:null,description:"",name:"current",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const s=({as:n="h4",children:a})=>m.createElement(n,{},a);try{ebayprogresstitle.displayName="ebayprogresstitle",ebayprogresstitle.__docgenInfo={description:"",displayName:"ebayprogresstitle",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"string"}}}}}catch{}const pe={title:"progress/ebay-progress-stepper"},h=()=>e("div",{style:{padding:50},children:t(u,{children:[e(r,{children:"Started"}),e(r,{children:"Shipped"}),e(r,{current:!0,children:"Transit"}),e(r,{children:"Delivered"})]})}),y={render:()=>e("div",{style:{padding:50},children:t(u,{defaultState:"upcoming",children:[t(r,{children:[e(s,{children:"Paid"}),"July 3rd"]}),t(r,{children:[e(s,{children:"Shipped"}),"July 4th"]}),t(r,{children:[e(s,{children:"Transit"}),"July 5th"]}),t(r,{children:[e(s,{children:"Delivered"}),"July 6th"]})]})}),name:"Default state: upcoming"},g={render:()=>e("div",{style:{padding:50},children:t(u,{defaultState:"complete",children:[e(r,{children:"Started"}),e(r,{children:"Shipped"}),e(r,{children:"Transit"}),e(r,{children:"Delivered"})]})}),name:"Default state: complete"},f=()=>e("div",{style:{padding:50},children:t(u,{children:[e(r,{children:"Started"}),e(r,{children:"Shipped"}),e(r,{state:"attention",current:!0,children:"Blocked"}),e(r,{children:"Delivered"})]})}),b=()=>e("div",{style:{padding:50},children:t(u,{children:[e(r,{children:e(s,{as:"h1",children:"H1"})}),e(r,{current:!0,children:e(s,{as:"small",children:"Small"})}),e(r,{children:e(s,{as:"h2",children:"H2"})})]})}),v={render:()=>e("div",{style:{padding:50},children:t(u,{direction:"column",children:[t(r,{children:[e(s,{children:"Order placed"}),e("p",{children:"New Mens Addidas Ultra Boost"}),e("p",{children:"Order total $220"})]}),t(r,{current:!0,children:[e(s,{children:"Preparing for shipment"}),e("p",{children:"We will notify you once it ships."})]}),t(r,{children:[e(s,{children:"Delivered"}),e("p",{children:"Guaranteed Wednesday, October 09."})]})]})}),name:"Vertical (column)"},N=()=>e(z,{children:e(()=>{const d=(p,o=0)=>Array.from(Array(p-o+1)).map((_,E)=>o+E),[i,l]=m.useState(2);return t("div",{style:{padding:50},children:[e(u,{defaultState:i<1?"upcoming":(i>4,"complete"),children:d(4,1).map(p=>t(r,{current:i===p,children:["Step ",p]},p))}),t("p",{children:[e(C,{onClick:()=>{l(Math.max(1,i-1))},children:"Back"})," ",e(C,{onClick:()=>{l(Math.min(4,i+1))},children:"Forward"})]})]})},{})});var D,M,P;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`() => <div style={{
  padding: 50
}}>
        <EbayProgressStepper>
            <Step>Started</Step>
            <Step>Shipped</Step>
            <Step current>Transit</Step>
            <Step>Delivered</Step>
        </EbayProgressStepper>
    </div>`,...(P=(M=h.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var A,I,B;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 50
  }}>
            <EbayProgressStepper defaultState="upcoming">
                <Step>
                    <Title>Paid</Title>
                    July 3rd
                </Step>
                <Step>
                    <Title>Shipped</Title>
                    July 4th
                </Step>
                <Step>
                    <Title>Transit</Title>
                    July 5th
                </Step>
                <Step>
                    <Title>Delivered</Title>
                    July 6th
                </Step>
            </EbayProgressStepper>
        </div>,
  name: 'Default state: upcoming'
}`,...(B=(I=y.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var k,V,w;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 50
  }}>
            <EbayProgressStepper defaultState="complete">
                <Step>Started</Step>
                <Step>Shipped</Step>
                <Step>Transit</Step>
                <Step>Delivered</Step>
            </EbayProgressStepper>
        </div>,
  name: 'Default state: complete'
}`,...(w=(V=g.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var x,J,X;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`() => <div style={{
  padding: 50
}}>
        <EbayProgressStepper>
            <Step>Started</Step>
            <Step>Shipped</Step>
            <Step state="attention" current>
                Blocked
            </Step>
            <Step>Delivered</Step>
        </EbayProgressStepper>
    </div>`,...(X=(J=f.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var q,O,F;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`() => <div style={{
  padding: 50
}}>
        <EbayProgressStepper>
            <Step>
                <Title as="h1">H1</Title>
            </Step>
            <Step current>
                <Title as="small">Small</Title>
            </Step>
            <Step>
                <Title as="h2">H2</Title>
            </Step>
        </EbayProgressStepper>
    </div>`,...(F=(O=b.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var U,H,W;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 50
  }}>
            <EbayProgressStepper direction="column">
                <Step>
                    <Title>Order placed</Title>
                    <p>New Mens Addidas Ultra Boost</p>
                    <p>Order total $220</p>
                </Step>
                <Step current>
                    <Title>Preparing for shipment</Title>
                    <p>We will notify you once it ships.</p>
                </Step>
                <Step>
                    <Title>Delivered</Title>
                    <p>Guaranteed Wednesday, October 09.</p>
                </Step>
            </EbayProgressStepper>
        </div>,
  name: 'Vertical (column)'
}`,...(W=(H=v.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var j,G,L;N.parameters={...N.parameters,docs:{...(j=N.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const TestingComponent: FC = () => {
    const MIN = 1;
    const MAX = 4;
    const range = (to: number, from = 0): number[] => Array.from(Array(to - from + 1)).map((v, k) => from + k);
    const [currentNumber, setCurrentNumber] = useState<number>(2);
    const defaultState = (): StepState => {
      if (currentNumber < MIN) return 'upcoming';
      if (currentNumber > MAX) return 'complete';
      return 'complete';
    };
    return <div style={{
      padding: 50
    }}>
                <EbayProgressStepper defaultState={defaultState()}>
                    {range(MAX, MIN).map(n => <Step current={currentNumber === n} key={n}>
                            Step {n}
                        </Step>)}
                </EbayProgressStepper>
                <p>
                    <EbayButton onClick={() => {
          setCurrentNumber(Math.max(MIN, currentNumber - 1));
        }}>
                        Back
                    </EbayButton>
          &nbsp;
                    <EbayButton onClick={() => {
          setCurrentNumber(Math.min(MAX, currentNumber + 1));
        }}>
                        Forward
                    </EbayButton>
                </p>
            </div>;
  };
  return <>
            <TestingComponent />
        </>;
}`,...(L=(G=N.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};const ie=["Default","DefaultStateUpcoming","DefaultStateComplete","Blocked","CustomTitles","VerticalColumn","Controlled"];export{f as Blocked,N as Controlled,b as CustomTitles,h as Default,g as DefaultStateComplete,y as DefaultStateUpcoming,v as VerticalColumn,ie as __namedExportsOrder,pe as default};

import{c as N,j as i,a,F as c}from"./index-Zi3BSDNR.js";import{E as o}from"./icon-BH46pq6W.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./array.polyfill.flat-CZ4MSbD7.js";const F={"A+++":["D","E","G"],"A++":["E","G"],"A+":["F","G"],A:["G"]},V=m=>{const{max:r,min:t,rating:l}=m,E=F[r];if(!(E&&E.indexOf(t)>-1))return null;let e=r,A=1;for(;e!==l;){if(A++,t===e)return null;e.length>1?e=e.slice(0,e.length-1):e=String.fromCharCode(e.charCodeAt(0)+1)}return A>7?7:A},n=({min:m="",max:r="",rating:t,a11yText:l,className:E})=>{const e=V({rating:t,min:m,max:r}),A=N(E,"eek",{[`eek--rating-${e}`]:!!e}),_=`Energy Rating: ${t}. Range: ${r} - ${m}.`;return i("div",{className:A,role:"figure","aria-label":l||_,children:[i("div",{className:"eek__container","aria-hidden":!0,children:[i("span",{className:"eek__rating-range",children:[a("span",{"aria-hidden":"true",children:r}),a(o,{name:"eekRangeArrow"}),a("span",{"aria-hidden":"true",children:m})]}),a("span",{className:"eek__rating","aria-hidden":"true",children:t})]}),a(o,{name:"eekArrow"})]})};try{eekrating.displayName="eekrating",eekrating.__docgenInfo={description:"",displayName:"eekrating",props:{rating:{defaultValue:null,description:"",name:"rating",required:!0,type:{name:"string"}},max:{defaultValue:{value:""},description:"",name:"max",required:!1,type:{name:"string"}},min:{defaultValue:{value:""},description:"",name:"min",required:!1,type:{name:"string"}},a11yText:{defaultValue:null,description:"",name:"a11yText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const j={component:n,title:"graphics & icons/ebay-eek"},g=()=>a(c,{children:i("div",{children:[a(n,{max:"A",min:"G",rating:"A"}),a(n,{max:"A",min:"G",rating:"B"}),a(n,{max:"A",min:"G",rating:"C"}),a(n,{max:"A",min:"G",rating:"D"}),a(n,{max:"A",min:"G",rating:"E"}),a(n,{max:"A",min:"G",rating:"F"}),a(n,{max:"A",min:"G",rating:"G"})]})}),x={render:()=>i(c,{children:[i("div",{children:[a(n,{max:"A++",min:"E",rating:"A++"}),a(n,{max:"A++",min:"E",rating:"A+"}),a(n,{max:"A++",min:"E",rating:"A"}),a(n,{max:"A++",min:"E",rating:"B"}),a(n,{max:"A++",min:"E",rating:"C"}),a(n,{max:"A++",min:"E",rating:"D"}),a(n,{max:"A++",min:"E",rating:"E"})]}),i("div",{children:[a(n,{max:"A++",min:"G",rating:"A++"}),a(n,{max:"A++",min:"G",rating:"A+"}),a(n,{max:"A++",min:"G",rating:"A"}),a(n,{max:"A++",min:"G",rating:"B"}),a(n,{max:"A++",min:"G",rating:"C"}),a(n,{max:"A++",min:"G",rating:"D"}),a(n,{max:"A++",min:"G",rating:"E"}),a(n,{max:"A++",min:"G",rating:"F"}),a(n,{max:"A++",min:"G",rating:"G"})]})]}),name:"A++"},s={render:()=>i(c,{children:[i("div",{children:[a(n,{max:"A+++",min:"D",rating:"A+++"}),a(n,{max:"A+++",min:"D",rating:"A++"}),a(n,{max:"A+++",min:"D",rating:"A+"}),a(n,{max:"A+++",min:"D",rating:"A"}),a(n,{max:"A+++",min:"D",rating:"B"}),a(n,{max:"A+++",min:"D",rating:"C"}),a(n,{max:"A+++",min:"D",rating:"D"})]}),i("div",{children:[a(n,{max:"A+++",min:"E",rating:"A+++"}),a(n,{max:"A+++",min:"E",rating:"A++"}),a(n,{max:"A+++",min:"E",rating:"A+"}),a(n,{max:"A+++",min:"E",rating:"A"}),a(n,{max:"A+++",min:"E",rating:"B"}),a(n,{max:"A+++",min:"E",rating:"C"}),a(n,{max:"A+++",min:"E",rating:"D"}),a(n,{max:"A+++",min:"E",rating:"E"})]}),i("div",{children:[a(n,{max:"A+++",min:"G",rating:"A+++"}),a(n,{max:"A+++",min:"G",rating:"A++"}),a(n,{max:"A+++",min:"G",rating:"A+"}),a(n,{max:"A+++",min:"G",rating:"A"}),a(n,{max:"A+++",min:"G",rating:"B"}),a(n,{max:"A+++",min:"G",rating:"C"}),a(n,{max:"A+++",min:"G",rating:"D"}),a(n,{max:"A+++",min:"G",rating:"E"}),a(n,{max:"A+++",min:"G",rating:"F"}),a(n,{max:"A+++",min:"G",rating:"G"})]})]}),name:"Valid A+++"},d=()=>i(c,{children:[a(n,{max:"B",min:"G",rating:"D"}),a(n,{max:"A",min:"G",rating:"A+++"}),a(n,{max:"A++",min:"B",rating:"A++"}),a(n,{max:"A+",min:"B",rating:"A++"})]});var y,k,G;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`() => <>
        <div>
            <EbayEek max="A" min="G" rating="A" />
            <EbayEek max="A" min="G" rating="B" />
            <EbayEek max="A" min="G" rating="C" />
            <EbayEek max="A" min="G" rating="D" />
            <EbayEek max="A" min="G" rating="E" />
            <EbayEek max="A" min="G" rating="F" />
            <EbayEek max="A" min="G" rating="G" />
        </div>
    </>`,...(G=(k=g.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var b,u,p;x.parameters={...x.parameters,docs:{...(b=x.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <>
            <div>
                <EbayEek max="A++" min="E" rating="A++" />
                <EbayEek max="A++" min="E" rating="A+" />
                <EbayEek max="A++" min="E" rating="A" />
                <EbayEek max="A++" min="E" rating="B" />
                <EbayEek max="A++" min="E" rating="C" />
                <EbayEek max="A++" min="E" rating="D" />
                <EbayEek max="A++" min="E" rating="E" />
            </div>
            <div>
                <EbayEek max="A++" min="G" rating="A++" />
                <EbayEek max="A++" min="G" rating="A+" />
                <EbayEek max="A++" min="G" rating="A" />
                <EbayEek max="A++" min="G" rating="B" />
                <EbayEek max="A++" min="G" rating="C" />
                <EbayEek max="A++" min="G" rating="D" />
                <EbayEek max="A++" min="G" rating="E" />
                <EbayEek max="A++" min="G" rating="F" />
                <EbayEek max="A++" min="G" rating="G" />
            </div>
        </>,
  name: 'A++'
}`,...(p=(u=x.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var D,h,v;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <>
            <div>
                <EbayEek max="A+++" min="D" rating="A+++" />
                <EbayEek max="A+++" min="D" rating="A++" />
                <EbayEek max="A+++" min="D" rating="A+" />
                <EbayEek max="A+++" min="D" rating="A" />
                <EbayEek max="A+++" min="D" rating="B" />
                <EbayEek max="A+++" min="D" rating="C" />
                <EbayEek max="A+++" min="D" rating="D" />
            </div>
            <div>
                <EbayEek max="A+++" min="E" rating="A+++" />
                <EbayEek max="A+++" min="E" rating="A++" />
                <EbayEek max="A+++" min="E" rating="A+" />
                <EbayEek max="A+++" min="E" rating="A" />
                <EbayEek max="A+++" min="E" rating="B" />
                <EbayEek max="A+++" min="E" rating="C" />
                <EbayEek max="A+++" min="E" rating="D" />
                <EbayEek max="A+++" min="E" rating="E" />
            </div>
            <div>
                <EbayEek max="A+++" min="G" rating="A+++" />
                <EbayEek max="A+++" min="G" rating="A++" />
                <EbayEek max="A+++" min="G" rating="A+" />
                <EbayEek max="A+++" min="G" rating="A" />
                <EbayEek max="A+++" min="G" rating="B" />
                <EbayEek max="A+++" min="G" rating="C" />
                <EbayEek max="A+++" min="G" rating="D" />
                <EbayEek max="A+++" min="G" rating="E" />
                <EbayEek max="A+++" min="G" rating="F" />
                <EbayEek max="A+++" min="G" rating="G" />
            </div>
        </>,
  name: 'Valid A+++'
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,B,C;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`() => <>
        <EbayEek max="B" min="G" rating="D" />
        <EbayEek max="A" min="G" rating="A+++" />
        <EbayEek max="A++" min="B" rating="A++" />
        <EbayEek max="A+" min="B" rating="A++" />
    </>`,...(C=(B=d.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const w=["RegularA","A","ValidA","InvalidCombinations"];export{x as A,d as InvalidCombinations,g as RegularA,s as ValidA,w as __namedExportsOrder,j as default};

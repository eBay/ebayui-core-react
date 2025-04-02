import{j as s,c as V,a as e}from"./index-Zi3BSDNR.js";import{r as M}from"./index-CBqU2yxZ.js";import{a as w,u as O}from"./dropdown-HjWnN08T.js";import{E as W}from"./icon-CvveAkDH.js";import{E as Z,a as d,m as J,b as z}from"./index.stories-BKlDUh3o.js";import"./array.polyfill.flat-Dy-SzZg6.js";import{a as Y}from"./utils-MbgWZL_V.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./index-BQcbYkqw.js";import"./index-DVEpxHKN.js";import"./checkbox-DKNjEd55.js";import"./description-CsOth_nc.js";import"./radio-CHyHaPva.js";import"./button-RS10xsIW.js";import"./progress-spinner-BFy5XL72.js";const u=({className:a,text:t,"aria-label":h,onExpand:o,onCollapse:R,onChange:S,children:y,...c})=>{const p=M.useRef(null),v=Y(y,d),[H,L]=M.useState(()=>v.some(m=>m.props.checked)),{isExpanded:K,collapse:b}=w({ref:p,options:{hostSelector:".filter-menu-button__button",contentSelector:".filter-menu-button__menu",focusManagement:"interactive",expandOnClick:!0,autoCollapse:!0,alwaysDoFocusManagement:!0},onExpand:o,onCollapse:R}),{overlayStyles:D,refs:C}=O({open:K}),f=m=>{var n;(n=c.onKeyDown)==null||n.call(c,m),m.key==="Escape"&&b()},k=(...m)=>{var n;(n=c.onFormSubmit)==null||n.call(c,...m),b()},P=(...m)=>{var n;(n=c.onFooterClick)==null||n.call(c,...m),b()},U=(m,n)=>{var F;S==null||S(m,n),L(((F=n.checked)==null?void 0:F.length)>0)};return s("span",{ref:p,className:V("filter-menu-button",a),children:[e("button",{type:"button",className:"filter-menu-button__button",ref:C.setHost,"aria-expanded":"false","aria-haspopup":"true","aria-label":h,"aria-pressed":H,children:s("span",{className:"filter-menu-button__button-cell",children:[e("span",{className:"filter-menu-button__button-text",children:t}),e(W,{name:"chevronDown12"})]})}),e(Z,{...c,onChange:U,classPrefix:"filter-menu-button",onKeyDown:f,onFooterClick:P,onFormSubmit:k,ref:C.setOverlay,style:D,children:y})]})},_=[{name:"Afghanistan",code:"AF"},{name:"ÅlandIslands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"AmericanSamoa",code:"AS"},{name:"AndorrA",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antiguaand Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosniaand Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"BouvetIsland",code:"BV"},{name:"Brazil",code:"BR"},{name:"BritishIndian Ocean Territory",code:"IO"},{name:"BruneiDarussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"BurkinaFaso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"CapeVerde",code:"CV"},{name:"CaymanIslands",code:"KY"},{name:"CentralAfrican Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"ChristmasIsland",code:"CX"},{name:"Cocos(Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo The Democratic Republic of the",code:"CD"},{name:"CookIslands",code:"CK"},{name:"CostaRica",code:"CR"},{name:"CoteD'Ivoire",code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"CzechRepublic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"DominicanRepublic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"ElSalvador",code:"SV"},{name:"EquatorialGuinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"FalklandIslands (Malvinas)",code:"FK"},{name:"FaroeIslands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"FrenchGuiana",code:"GF"},{name:"FrenchPolynesia",code:"PF"},{name:"FrenchSouthern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"GuineaBissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"HeardIsland and Mcdonald Islands",code:"HM"},{name:"HolySee (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"HongKong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isleof Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea Democratic People'S Republic of",code:"KP"},{name:"Korea Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"LaoPeopleS Democratic Republic",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"LibyanArab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"MarshallIslands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia Federated States of",code:"FM"},{name:"Moldova Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"NetherlandsAntilles",code:"AN"},{name:"NewCaledonia",code:"NC"},{name:"NewZealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"NorfolkIsland",code:"NF"},{name:"NorthernMariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"PalestinianTerritory Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"PapuaNew Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"PuertoRico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"RussianFederation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"SaintHelena",code:"SH"},{name:"SaintKitts and Nevis",code:"KN"},{name:"SaintLucia",code:"LC"},{name:"SaintPierre and Miquelon",code:"PM"},{name:"SaintVincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"SanMarino",code:"SM"},{name:"SaoTome and Principe",code:"ST"},{name:"SaudiArabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbiaand Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"SierraLeone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"SolomonIslands",code:"SB"},{name:"Somalia",code:"SO"},{name:"SouthAfrica",code:"ZA"},{name:"SouthGeorgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"SriLanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbardand Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"SyrianArab Republic",code:"SY"},{name:"Taiwan Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"TimorLeste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidadand Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turksand Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"UnitedArab Emirates",code:"AE"},{name:"UnitedKingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"VietNam",code:"VN"},{name:"VirginIslands British",code:"VG"},{name:"VirginIslands U.S.",code:"VI"},{name:"Wallisand Futuna",code:"WF"},{name:"WesternSahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}],se={component:u,title:"buttons/ebay-filter-menu-button",argTypes:{...J.argTypes,text:{control:"text",description:"Button text"},onExpand:{action:"onExpand"},onCollapse:{action:"onCollapse"}}},r=a=>s(u,{...a,text:a.text||"Filter Menu Button",children:[e(d,{value:"item 1",children:"item 1"}),e(d,{value:"item 2",children:"item 2"}),e(d,{value:"item 3",children:"item 3"})]}),i=a=>s(u,{...a,text:a.text||"Country",children:[e(d,{value:"item 1",children:"item 1"}),e(d,{value:"item 2",children:"item 2"}),e(d,{value:"item 3",children:"item 3"}),e(z,{children:"Apply"})]}),l=a=>{const[t,h]=M.useState("");return e(u,{...a,text:a.text||"Country",searchHeaderPlaceholderText:a.searchHeaderPlaceholderText||"Search",a11ySearchHeaderClearText:a.a11ySearchHeaderClearText||"Clear",onSearchChange:o=>h(o.target.value),searchHeaderValue:t,children:_.filter(o=>o.name.toLowerCase().includes(t)).map(o=>e(d,{value:o.code,checked:o.code===t,children:o.name},o.code))})};var T,I,E;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`args => <EbayFilterMenuButton {...args} text={args.text || "Filter Menu Button"}>
        <EbayFilterMenuItem value="item 1">item 1</EbayFilterMenuItem>
        <EbayFilterMenuItem value="item 2">item 2</EbayFilterMenuItem>
        <EbayFilterMenuItem value="item 3">item 3</EbayFilterMenuItem>
    </EbayFilterMenuButton>`,...(E=(I=r.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var B,g,A;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`args => <EbayFilterMenuButton {...args} text={args.text || "Country"}>
        <EbayFilterMenuItem value="item 1">item 1</EbayFilterMenuItem>
        <EbayFilterMenuItem value="item 2">item 2</EbayFilterMenuItem>
        <EbayFilterMenuItem value="item 3">item 3</EbayFilterMenuItem>
        <EbayFilterMenuFooterButton>Apply</EbayFilterMenuFooterButton>
    </EbayFilterMenuButton>`,...(A=(g=i.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var G,N,x;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const [searchTerm, setSearchTerm] = useState('');
  return <EbayFilterMenuButton {...args} text={args.text || "Country"} searchHeaderPlaceholderText={args.searchHeaderPlaceholderText || "Search"} a11ySearchHeaderClearText={args.a11ySearchHeaderClearText || "Clear"} onSearchChange={e => setSearchTerm(e.target.value)} searchHeaderValue={searchTerm}>
            {data.filter(item => item.name.toLowerCase().includes(searchTerm)).map(item => <EbayFilterMenuItem key={item.code} value={item.code} checked={item.code === searchTerm}>
                    {item.name}
                </EbayFilterMenuItem>)}
        </EbayFilterMenuButton>;
}`,...(x=(N=l.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};const ue=["Default","WithFooter","WithSearch"];export{r as Default,i as WithFooter,l as WithSearch,ue as __namedExportsOrder,se as default};

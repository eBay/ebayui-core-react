import{a as r,c as i}from"./index-Zi3BSDNR.js";const o=({number:n,type:a="img",className:t,...l})=>{const e=Math.round(parseInt(String(n),10));return e<=0?null:r("span",{...l,className:i("badge",t),role:a==="img"?"img":void 0,"aria-hidden":a!=="img",children:e>99?"99+":e})};try{badge.displayName="badge",badge.__docgenInfo={description:"",displayName:"badge",props:{ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<HTMLSpanElement>"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | readonly string[]"}},suppressContentEditableWarning:{defaultValue:null,description:"",name:"suppressContentEditableWarning",required:!1,type:{name:"boolean"}},suppressHydrationWarning:{defaultValue:null,description:"",name:"suppressHydrationWarning",required:!1,type:{name:"boolean"}},accessKey:{defaultValue:null,description:"",name:"accessKey",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},contentEditable:{defaultValue:null,description:"",name:"contentEditable",required:!1,type:{name:'"inherit" | Booleanish | "plaintext-only"'}},contextMenu:{defaultValue:null,description:"",name:"contextMenu",required:!1,type:{name:"string"}},dir:{defaultValue:null,description:"",name:"dir",required:!1,type:{name:"string"}},draggable:{defaultValue:null,description:"",name:"draggable",required:!1,type:{name:"Booleanish"}},hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"",name:"lang",required:!1,type:{name:"string"}},nonce:{defaultValue:null,description:"",name:"nonce",required:!1,type:{name:"string"}},slot:{defaultValue:null,description:"",name:"slot",required:!1,type:{name:"string"}},spellCheck:{defaultValue:null,description:"",name:"spellCheck",required:!1,type:{name:"Booleanish"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},translate:{defaultValue:null,description:"",name:"translate",required:!1,type:{name:'"no" | "yes"'}},radioGroup:{defaultValue:null,description:"",name:"radioGroup",required:!1,type:{name:"string"}},role:{defaultValue:null,description:"",name:"role",required:!1,type:{name:"AriaRole"}},about:{defaultValue:null,description:"",name:"about",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"string"}},datatype:{defaultValue:null,description:"",name:"datatype",required:!1,type:{name:"string"}},inlist:{defaultValue:null,description:"",name:"inlist",required:!1,type:{name:"any"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},property:{defaultValue:null,description:"",name:"property",required:!1,type:{name:"string"}},rel:{defaultValue:null,description:"",name:"rel",required:!1,type:{name:"string"}},resource:{defaultValue:null,description:"",name:"resource",required:!1,type:{name:"string"}},rev:{defaultValue:null,description:"",name:"rev",required:!1,type:{name:"string"}},typeof:{defaultValue:null,description:"",name:"typeof",required:!1,type:{name:"string"}},vocab:{defaultValue:null,description:"",name:"vocab",required:!1,type:{name:"string"}},autoCapitalize:{defaultValue:null,description:"",name:"autoCapitalize",required:!1,type:{name:"string"}},autoCorrect:{defaultValue:null,description:"",name:"autoCorrect",required:!1,type:{name:"string"}},autoSave:{defaultValue:null,description:"",name:"autoSave",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},itemProp:{defaultValue:null,description:"",name:"itemProp",required:!1,type:{name:"string"}},itemScope:{defaultValue:null,description:"",name:"itemScope",required:!1,type:{name:"boolean"}},itemType:{defaultValue:null,description:"",name:"itemType",required:!1,type:{name:"string"}},itemID:{defaultValue:null,description:"",name:"itemID",required:!1,type:{name:"string"}},itemRef:{defaultValue:null,description:"",name:"itemRef",required:!1,type:{name:"string"}},results:{defaultValue:null,description:"",name:"results",required:!1,type:{name:"number"}},security:{defaultValue:null,description:"",name:"security",required:!1,type:{name:"string"}},unselectable:{defaultValue:null,description:"",name:"unselectable",required:!1,type:{name:'"off" | "on"'}},inputMode:{defaultValue:null,description:`Hints at the type of data that might be entered by the user while editing the element or its contents
@see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute}`,name:"inputMode",required:!1,type:{name:'"none" | "search" | "text" | "tel" | "url" | "email" | "numeric" | "decimal"'}},is:{defaultValue:null,description:`Specify that a standard HTML element should behave like a defined custom built-in element
@see {@link https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is}`,name:"is",required:!1,type:{name:"string"}},"aria-activedescendant":{defaultValue:null,description:"Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.",name:"aria-activedescendant",required:!1,type:{name:"string"}},"aria-atomic":{defaultValue:null,description:"Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.",name:"aria-atomic",required:!1,type:{name:"Booleanish"}},"aria-autocomplete":{defaultValue:null,description:`Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
presented if they are made.`,name:"aria-autocomplete",required:!1,type:{name:'"list" | "none" | "inline" | "both"'}},"aria-braillelabel":{defaultValue:null,description:`Defines a string value that labels the current element, which is intended to be converted into Braille.
@see aria-label.`,name:"aria-braillelabel",required:!1,type:{name:"string"}},"aria-brailleroledescription":{defaultValue:null,description:`Defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille.
@see aria-roledescription.`,name:"aria-brailleroledescription",required:!1,type:{name:"string"}},"aria-busy":{defaultValue:null,description:"",name:"aria-busy",required:!1,type:{name:"Booleanish"}},"aria-checked":{defaultValue:null,description:`Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
@see aria-pressed
@see aria-selected.`,name:"aria-checked",required:!1,type:{name:'boolean | "true" | "false" | "mixed"'}},"aria-colcount":{defaultValue:null,description:`Defines the total number of columns in a table, grid, or treegrid.
@see aria-colindex.`,name:"aria-colcount",required:!1,type:{name:"number"}},"aria-colindex":{defaultValue:null,description:`Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
@see aria-colcount
@see aria-colspan.`,name:"aria-colindex",required:!1,type:{name:"number"}},"aria-colindextext":{defaultValue:null,description:`Defines a human readable text alternative of aria-colindex.
@see aria-rowindextext.`,name:"aria-colindextext",required:!1,type:{name:"string"}},"aria-colspan":{defaultValue:null,description:`Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
@see aria-colindex
@see aria-rowspan.`,name:"aria-colspan",required:!1,type:{name:"number"}},"aria-controls":{defaultValue:null,description:`Identifies the element (or elements) whose contents or presence are controlled by the current element.
@see aria-owns.`,name:"aria-controls",required:!1,type:{name:"string"}},"aria-current":{defaultValue:null,description:"Indicates the element that represents the current item within a container or set of related elements.",name:"aria-current",required:!1,type:{name:'boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time"'}},"aria-describedby":{defaultValue:null,description:`Identifies the element (or elements) that describes the object.
@see aria-labelledby`,name:"aria-describedby",required:!1,type:{name:"string"}},"aria-description":{defaultValue:null,description:`Defines a string value that describes or annotates the current element.
@see related aria-describedby.`,name:"aria-description",required:!1,type:{name:"string"}},"aria-details":{defaultValue:null,description:`Identifies the element that provides a detailed, extended description for the object.
@see aria-describedby.`,name:"aria-details",required:!1,type:{name:"string"}},"aria-disabled":{defaultValue:null,description:`Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
@see aria-hidden
@see aria-readonly.`,name:"aria-disabled",required:!1,type:{name:"Booleanish"}},"aria-dropeffect":{defaultValue:null,description:`Indicates what functions can be performed when a dragged object is released on the drop target.
@deprecated in ARIA 1.1`,name:"aria-dropeffect",required:!1,type:{name:'"link" | "none" | "copy" | "execute" | "move" | "popup"'}},"aria-errormessage":{defaultValue:null,description:`Identifies the element that provides an error message for the object.
@see aria-invalid
@see aria-describedby.`,name:"aria-errormessage",required:!1,type:{name:"string"}},"aria-expanded":{defaultValue:null,description:"Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.",name:"aria-expanded",required:!1,type:{name:"Booleanish"}},"aria-flowto":{defaultValue:null,description:`Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
allows assistive technology to override the general default of reading in document source order.`,name:"aria-flowto",required:!1,type:{name:"string"}},"aria-grabbed":{defaultValue:null,description:`Indicates an element's "grabbed" state in a drag-and-drop operation.
@deprecated in ARIA 1.1`,name:"aria-grabbed",required:!1,type:{name:"Booleanish"}},"aria-haspopup":{defaultValue:null,description:"Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.",name:"aria-haspopup",required:!1,type:{name:'boolean | "dialog" | "grid" | "listbox" | "menu" | "tree" | "true" | "false"'}},"aria-hidden":{defaultValue:null,description:`Indicates whether the element is exposed to an accessibility API.
@see aria-disabled.`,name:"aria-hidden",required:!1,type:{name:"Booleanish"}},"aria-invalid":{defaultValue:null,description:`Indicates the entered value does not conform to the format expected by the application.
@see aria-errormessage.`,name:"aria-invalid",required:!1,type:{name:'boolean | "true" | "false" | "grammar" | "spelling"'}},"aria-keyshortcuts":{defaultValue:null,description:"Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.",name:"aria-keyshortcuts",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:`Defines a string value that labels the current element.
@see aria-labelledby.`,name:"aria-label",required:!1,type:{name:"string"}},"aria-labelledby":{defaultValue:null,description:`Identifies the element (or elements) that labels the current element.
@see aria-describedby.`,name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-level":{defaultValue:null,description:"Defines the hierarchical level of an element within a structure.",name:"aria-level",required:!1,type:{name:"number"}},"aria-live":{defaultValue:null,description:"Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.",name:"aria-live",required:!1,type:{name:'"off" | "assertive" | "polite"'}},"aria-modal":{defaultValue:null,description:"Indicates whether an element is modal when displayed.",name:"aria-modal",required:!1,type:{name:"Booleanish"}},"aria-multiline":{defaultValue:null,description:"Indicates whether a text box accepts multiple lines of input or only a single line.",name:"aria-multiline",required:!1,type:{name:"Booleanish"}},"aria-multiselectable":{defaultValue:null,description:"Indicates that the user may select more than one item from the current selectable descendants.",name:"aria-multiselectable",required:!1,type:{name:"Booleanish"}},"aria-orientation":{defaultValue:null,description:"Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",name:"aria-orientation",required:!1,type:{name:'"horizontal" | "vertical"'}},"aria-owns":{defaultValue:null,description:`Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
@see aria-controls.`,name:"aria-owns",required:!1,type:{name:"string"}},"aria-placeholder":{defaultValue:null,description:`Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
A hint could be a sample value or a brief description of the expected format.`,name:"aria-placeholder",required:!1,type:{name:"string"}},"aria-posinset":{defaultValue:null,description:`Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
@see aria-setsize.`,name:"aria-posinset",required:!1,type:{name:"number"}},"aria-pressed":{defaultValue:null,description:`Indicates the current "pressed" state of toggle buttons.
@see aria-checked
@see aria-selected.`,name:"aria-pressed",required:!1,type:{name:'boolean | "true" | "false" | "mixed"'}},"aria-readonly":{defaultValue:null,description:`Indicates that the element is not editable, but is otherwise operable.
@see aria-disabled.`,name:"aria-readonly",required:!1,type:{name:"Booleanish"}},"aria-relevant":{defaultValue:null,description:`Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
@see aria-atomic.`,name:"aria-relevant",required:!1,type:{name:'"additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals"'}},"aria-required":{defaultValue:null,description:"Indicates that user input is required on the element before a form may be submitted.",name:"aria-required",required:!1,type:{name:"Booleanish"}},"aria-roledescription":{defaultValue:null,description:"Defines a human-readable, author-localized description for the role of an element.",name:"aria-roledescription",required:!1,type:{name:"string"}},"aria-rowcount":{defaultValue:null,description:`Defines the total number of rows in a table, grid, or treegrid.
@see aria-rowindex.`,name:"aria-rowcount",required:!1,type:{name:"number"}},"aria-rowindex":{defaultValue:null,description:`Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
@see aria-rowcount
@see aria-rowspan.`,name:"aria-rowindex",required:!1,type:{name:"number"}},"aria-rowindextext":{defaultValue:null,description:`Defines a human readable text alternative of aria-rowindex.
@see aria-colindextext.`,name:"aria-rowindextext",required:!1,type:{name:"string"}},"aria-rowspan":{defaultValue:null,description:`Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
@see aria-rowindex
@see aria-colspan.`,name:"aria-rowspan",required:!1,type:{name:"number"}},"aria-selected":{defaultValue:null,description:`Indicates the current "selected" state of various widgets.
@see aria-checked
@see aria-pressed.`,name:"aria-selected",required:!1,type:{name:"Booleanish"}},"aria-setsize":{defaultValue:null,description:`Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
@see aria-posinset.`,name:"aria-setsize",required:!1,type:{name:"number"}},"aria-sort":{defaultValue:null,description:"Indicates if items in a table or grid are sorted in ascending or descending order.",name:"aria-sort",required:!1,type:{name:'"none" | "ascending" | "descending" | "other"'}},"aria-valuemax":{defaultValue:null,description:"Defines the maximum allowed value for a range widget.",name:"aria-valuemax",required:!1,type:{name:"number"}},"aria-valuemin":{defaultValue:null,description:"Defines the minimum allowed value for a range widget.",name:"aria-valuemin",required:!1,type:{name:"number"}},"aria-valuenow":{defaultValue:null,description:`Defines the current value for a range widget.
@see aria-valuetext.`,name:"aria-valuenow",required:!1,type:{name:"number"}},"aria-valuetext":{defaultValue:null,description:"Defines the human readable text alternative of aria-valuenow for a range widget.",name:"aria-valuetext",required:!1,type:{name:"string"}},dangerouslySetInnerHTML:{defaultValue:null,description:"",name:"dangerouslySetInnerHTML",required:!1,type:{name:"{ __html: string | TrustedHTML; }"}},onCopy:{defaultValue:null,description:"",name:"onCopy",required:!1,type:{name:"ClipboardEventHandler<HTMLSpanElement>"}},onCopyCapture:{defaultValue:null,description:"",name:"onCopyCapture",required:!1,type:{name:"ClipboardEventHandler<HTMLSpanElement>"}},onCut:{defaultValue:null,description:"",name:"onCut",required:!1,type:{name:"ClipboardEventHandler<HTMLSpanElement>"}},onCutCapture:{defaultValue:null,description:"",name:"onCutCapture",required:!1,type:{name:"ClipboardEventHandler<HTMLSpanElement>"}},onPaste:{defaultValue:null,description:"",name:"onPaste",required:!1,type:{name:"ClipboardEventHandler<HTMLSpanElement>"}},onPasteCapture:{defaultValue:null,description:"",name:"onPasteCapture",required:!1,type:{name:"ClipboardEventHandler<HTMLSpanElement>"}},onCompositionEnd:{defaultValue:null,description:"",name:"onCompositionEnd",required:!1,type:{name:"CompositionEventHandler<HTMLSpanElement>"}},onCompositionEndCapture:{defaultValue:null,description:"",name:"onCompositionEndCapture",required:!1,type:{name:"CompositionEventHandler<HTMLSpanElement>"}},onCompositionStart:{defaultValue:null,description:"",name:"onCompositionStart",required:!1,type:{name:"CompositionEventHandler<HTMLSpanElement>"}},onCompositionStartCapture:{defaultValue:null,description:"",name:"onCompositionStartCapture",required:!1,type:{name:"CompositionEventHandler<HTMLSpanElement>"}},onCompositionUpdate:{defaultValue:null,description:"",name:"onCompositionUpdate",required:!1,type:{name:"CompositionEventHandler<HTMLSpanElement>"}},onCompositionUpdateCapture:{defaultValue:null,description:"",name:"onCompositionUpdateCapture",required:!1,type:{name:"CompositionEventHandler<HTMLSpanElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLSpanElement>"}},onFocusCapture:{defaultValue:null,description:"",name:"onFocusCapture",required:!1,type:{name:"FocusEventHandler<HTMLSpanElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLSpanElement>"}},onBlurCapture:{defaultValue:null,description:"",name:"onBlurCapture",required:!1,type:{name:"FocusEventHandler<HTMLSpanElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"FormEventHandler<HTMLSpanElement>"}},onChangeCapture:{defaultValue:null,description:"",name:"onChangeCapture",required:!1,type:{name:"FormEventHandler<HTMLSpanElement>"}},onBeforeInput:{defaultValue:null,description:"",name:"onBeforeInput",required:!1,type:{name:"FormEventHandler<HTMLSpanElement>"}},onBeforeInputCapture:{defaultValue:null,description:"",name:"onBeforeInputCapture",required:!1,type:{name:"FormEventHandler<HTMLSpanElement>"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"FormEventHandler<HTMLSpanElement>"}},onInputCapture:{defaultValue:null,description:"",name:"onInputCapture",required:!1,type:{name:"FormEventHandler<HTMLSpanElement>"}},onReset:{defaultValue:null,description:"",name:"onReset",required:!1,type:{name:"FormEventHandler<HTMLSpanElement>"}},onResetCapture:{defaultValue:null,description:"",name:"onResetCapture",required:!1,type:{name:"FormEventHandler<HTMLSpanElement>"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"FormEventHandler<HTMLSpanElement>"}},onSubmitCapture:{defaultValue:null,description:"",name:"onSubmitCapture",required:!1,type:{name:"FormEventHandler<HTMLSpanElement>"}},onInvalid:{defaultValue:null,description:"",name:"onInvalid",required:!1,type:{name:"FormEventHandler<HTMLSpanElement>"}},onInvalidCapture:{defaultValue:null,description:"",name:"onInvalidCapture",required:!1,type:{name:"FormEventHandler<HTMLSpanElement>"}},onLoad:{defaultValue:null,description:"",name:"onLoad",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onLoadCapture:{defaultValue:null,description:"",name:"onLoadCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onErrorCapture:{defaultValue:null,description:"",name:"onErrorCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLSpanElement>"}},onKeyDownCapture:{defaultValue:null,description:"",name:"onKeyDownCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLSpanElement>"}},onKeyPress:{defaultValue:null,description:"@deprecated",name:"onKeyPress",required:!1,type:{name:"KeyboardEventHandler<HTMLSpanElement>"}},onKeyPressCapture:{defaultValue:null,description:"@deprecated",name:"onKeyPressCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLSpanElement>"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLSpanElement>"}},onKeyUpCapture:{defaultValue:null,description:"",name:"onKeyUpCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLSpanElement>"}},onAbort:{defaultValue:null,description:"",name:"onAbort",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onAbortCapture:{defaultValue:null,description:"",name:"onAbortCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onCanPlay:{defaultValue:null,description:"",name:"onCanPlay",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onCanPlayCapture:{defaultValue:null,description:"",name:"onCanPlayCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onCanPlayThrough:{defaultValue:null,description:"",name:"onCanPlayThrough",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onCanPlayThroughCapture:{defaultValue:null,description:"",name:"onCanPlayThroughCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onDurationChange:{defaultValue:null,description:"",name:"onDurationChange",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onDurationChangeCapture:{defaultValue:null,description:"",name:"onDurationChangeCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onEmptied:{defaultValue:null,description:"",name:"onEmptied",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onEmptiedCapture:{defaultValue:null,description:"",name:"onEmptiedCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onEncrypted:{defaultValue:null,description:"",name:"onEncrypted",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onEncryptedCapture:{defaultValue:null,description:"",name:"onEncryptedCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onEnded:{defaultValue:null,description:"",name:"onEnded",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onEndedCapture:{defaultValue:null,description:"",name:"onEndedCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onLoadedData:{defaultValue:null,description:"",name:"onLoadedData",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onLoadedDataCapture:{defaultValue:null,description:"",name:"onLoadedDataCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onLoadedMetadata:{defaultValue:null,description:"",name:"onLoadedMetadata",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onLoadedMetadataCapture:{defaultValue:null,description:"",name:"onLoadedMetadataCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onLoadStart:{defaultValue:null,description:"",name:"onLoadStart",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onLoadStartCapture:{defaultValue:null,description:"",name:"onLoadStartCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onPause:{defaultValue:null,description:"",name:"onPause",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onPauseCapture:{defaultValue:null,description:"",name:"onPauseCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onPlay:{defaultValue:null,description:"",name:"onPlay",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onPlayCapture:{defaultValue:null,description:"",name:"onPlayCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onPlaying:{defaultValue:null,description:"",name:"onPlaying",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onPlayingCapture:{defaultValue:null,description:"",name:"onPlayingCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onProgress:{defaultValue:null,description:"",name:"onProgress",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onProgressCapture:{defaultValue:null,description:"",name:"onProgressCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onRateChange:{defaultValue:null,description:"",name:"onRateChange",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onRateChangeCapture:{defaultValue:null,description:"",name:"onRateChangeCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onResize:{defaultValue:null,description:"",name:"onResize",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onResizeCapture:{defaultValue:null,description:"",name:"onResizeCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onSeeked:{defaultValue:null,description:"",name:"onSeeked",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onSeekedCapture:{defaultValue:null,description:"",name:"onSeekedCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onSeeking:{defaultValue:null,description:"",name:"onSeeking",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onSeekingCapture:{defaultValue:null,description:"",name:"onSeekingCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onStalled:{defaultValue:null,description:"",name:"onStalled",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onStalledCapture:{defaultValue:null,description:"",name:"onStalledCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onSuspend:{defaultValue:null,description:"",name:"onSuspend",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onSuspendCapture:{defaultValue:null,description:"",name:"onSuspendCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onTimeUpdate:{defaultValue:null,description:"",name:"onTimeUpdate",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onTimeUpdateCapture:{defaultValue:null,description:"",name:"onTimeUpdateCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onVolumeChange:{defaultValue:null,description:"",name:"onVolumeChange",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onVolumeChangeCapture:{defaultValue:null,description:"",name:"onVolumeChangeCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onWaiting:{defaultValue:null,description:"",name:"onWaiting",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onWaitingCapture:{defaultValue:null,description:"",name:"onWaitingCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onAuxClick:{defaultValue:null,description:"",name:"onAuxClick",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onAuxClickCapture:{defaultValue:null,description:"",name:"onAuxClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onClickCapture:{defaultValue:null,description:"",name:"onClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onContextMenuCapture:{defaultValue:null,description:"",name:"onContextMenuCapture",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onDoubleClickCapture:{defaultValue:null,description:"",name:"onDoubleClickCapture",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onDrag:{defaultValue:null,description:"",name:"onDrag",required:!1,type:{name:"DragEventHandler<HTMLSpanElement>"}},onDragCapture:{defaultValue:null,description:"",name:"onDragCapture",required:!1,type:{name:"DragEventHandler<HTMLSpanElement>"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"DragEventHandler<HTMLSpanElement>"}},onDragEndCapture:{defaultValue:null,description:"",name:"onDragEndCapture",required:!1,type:{name:"DragEventHandler<HTMLSpanElement>"}},onDragEnter:{defaultValue:null,description:"",name:"onDragEnter",required:!1,type:{name:"DragEventHandler<HTMLSpanElement>"}},onDragEnterCapture:{defaultValue:null,description:"",name:"onDragEnterCapture",required:!1,type:{name:"DragEventHandler<HTMLSpanElement>"}},onDragExit:{defaultValue:null,description:"",name:"onDragExit",required:!1,type:{name:"DragEventHandler<HTMLSpanElement>"}},onDragExitCapture:{defaultValue:null,description:"",name:"onDragExitCapture",required:!1,type:{name:"DragEventHandler<HTMLSpanElement>"}},onDragLeave:{defaultValue:null,description:"",name:"onDragLeave",required:!1,type:{name:"DragEventHandler<HTMLSpanElement>"}},onDragLeaveCapture:{defaultValue:null,description:"",name:"onDragLeaveCapture",required:!1,type:{name:"DragEventHandler<HTMLSpanElement>"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"DragEventHandler<HTMLSpanElement>"}},onDragOverCapture:{defaultValue:null,description:"",name:"onDragOverCapture",required:!1,type:{name:"DragEventHandler<HTMLSpanElement>"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"DragEventHandler<HTMLSpanElement>"}},onDragStartCapture:{defaultValue:null,description:"",name:"onDragStartCapture",required:!1,type:{name:"DragEventHandler<HTMLSpanElement>"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"DragEventHandler<HTMLSpanElement>"}},onDropCapture:{defaultValue:null,description:"",name:"onDropCapture",required:!1,type:{name:"DragEventHandler<HTMLSpanElement>"}},onMouseDown:{defaultValue:null,description:"",name:"onMouseDown",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onMouseDownCapture:{defaultValue:null,description:"",name:"onMouseDownCapture",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onMouseLeave:{defaultValue:null,description:"",name:"onMouseLeave",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onMouseMove:{defaultValue:null,description:"",name:"onMouseMove",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onMouseMoveCapture:{defaultValue:null,description:"",name:"onMouseMoveCapture",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onMouseOut:{defaultValue:null,description:"",name:"onMouseOut",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onMouseOutCapture:{defaultValue:null,description:"",name:"onMouseOutCapture",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onMouseOver:{defaultValue:null,description:"",name:"onMouseOver",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onMouseOverCapture:{defaultValue:null,description:"",name:"onMouseOverCapture",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onMouseUpCapture:{defaultValue:null,description:"",name:"onMouseUpCapture",required:!1,type:{name:"MouseEventHandler<HTMLSpanElement>"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onSelectCapture:{defaultValue:null,description:"",name:"onSelectCapture",required:!1,type:{name:"ReactEventHandler<HTMLSpanElement>"}},onTouchCancel:{defaultValue:null,description:"",name:"onTouchCancel",required:!1,type:{name:"TouchEventHandler<HTMLSpanElement>"}},onTouchCancelCapture:{defaultValue:null,description:"",name:"onTouchCancelCapture",required:!1,type:{name:"TouchEventHandler<HTMLSpanElement>"}},onTouchEnd:{defaultValue:null,description:"",name:"onTouchEnd",required:!1,type:{name:"TouchEventHandler<HTMLSpanElement>"}},onTouchEndCapture:{defaultValue:null,description:"",name:"onTouchEndCapture",required:!1,type:{name:"TouchEventHandler<HTMLSpanElement>"}},onTouchMove:{defaultValue:null,description:"",name:"onTouchMove",required:!1,type:{name:"TouchEventHandler<HTMLSpanElement>"}},onTouchMoveCapture:{defaultValue:null,description:"",name:"onTouchMoveCapture",required:!1,type:{name:"TouchEventHandler<HTMLSpanElement>"}},onTouchStart:{defaultValue:null,description:"",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLSpanElement>"}},onTouchStartCapture:{defaultValue:null,description:"",name:"onTouchStartCapture",required:!1,type:{name:"TouchEventHandler<HTMLSpanElement>"}},onPointerDown:{defaultValue:null,description:"",name:"onPointerDown",required:!1,type:{name:"PointerEventHandler<HTMLSpanElement>"}},onPointerDownCapture:{defaultValue:null,description:"",name:"onPointerDownCapture",required:!1,type:{name:"PointerEventHandler<HTMLSpanElement>"}},onPointerMove:{defaultValue:null,description:"",name:"onPointerMove",required:!1,type:{name:"PointerEventHandler<HTMLSpanElement>"}},onPointerMoveCapture:{defaultValue:null,description:"",name:"onPointerMoveCapture",required:!1,type:{name:"PointerEventHandler<HTMLSpanElement>"}},onPointerUp:{defaultValue:null,description:"",name:"onPointerUp",required:!1,type:{name:"PointerEventHandler<HTMLSpanElement>"}},onPointerUpCapture:{defaultValue:null,description:"",name:"onPointerUpCapture",required:!1,type:{name:"PointerEventHandler<HTMLSpanElement>"}},onPointerCancel:{defaultValue:null,description:"",name:"onPointerCancel",required:!1,type:{name:"PointerEventHandler<HTMLSpanElement>"}},onPointerCancelCapture:{defaultValue:null,description:"",name:"onPointerCancelCapture",required:!1,type:{name:"PointerEventHandler<HTMLSpanElement>"}},onPointerEnter:{defaultValue:null,description:"",name:"onPointerEnter",required:!1,type:{name:"PointerEventHandler<HTMLSpanElement>"}},onPointerLeave:{defaultValue:null,description:"",name:"onPointerLeave",required:!1,type:{name:"PointerEventHandler<HTMLSpanElement>"}},onPointerOver:{defaultValue:null,description:"",name:"onPointerOver",required:!1,type:{name:"PointerEventHandler<HTMLSpanElement>"}},onPointerOverCapture:{defaultValue:null,description:"",name:"onPointerOverCapture",required:!1,type:{name:"PointerEventHandler<HTMLSpanElement>"}},onPointerOut:{defaultValue:null,description:"",name:"onPointerOut",required:!1,type:{name:"PointerEventHandler<HTMLSpanElement>"}},onPointerOutCapture:{defaultValue:null,description:"",name:"onPointerOutCapture",required:!1,type:{name:"PointerEventHandler<HTMLSpanElement>"}},onGotPointerCapture:{defaultValue:null,description:"",name:"onGotPointerCapture",required:!1,type:{name:"PointerEventHandler<HTMLSpanElement>"}},onGotPointerCaptureCapture:{defaultValue:null,description:"",name:"onGotPointerCaptureCapture",required:!1,type:{name:"PointerEventHandler<HTMLSpanElement>"}},onLostPointerCapture:{defaultValue:null,description:"",name:"onLostPointerCapture",required:!1,type:{name:"PointerEventHandler<HTMLSpanElement>"}},onLostPointerCaptureCapture:{defaultValue:null,description:"",name:"onLostPointerCaptureCapture",required:!1,type:{name:"PointerEventHandler<HTMLSpanElement>"}},onScroll:{defaultValue:null,description:"",name:"onScroll",required:!1,type:{name:"UIEventHandler<HTMLSpanElement>"}},onScrollCapture:{defaultValue:null,description:"",name:"onScrollCapture",required:!1,type:{name:"UIEventHandler<HTMLSpanElement>"}},onWheel:{defaultValue:null,description:"",name:"onWheel",required:!1,type:{name:"WheelEventHandler<HTMLSpanElement>"}},onWheelCapture:{defaultValue:null,description:"",name:"onWheelCapture",required:!1,type:{name:"WheelEventHandler<HTMLSpanElement>"}},onAnimationStart:{defaultValue:null,description:"",name:"onAnimationStart",required:!1,type:{name:"AnimationEventHandler<HTMLSpanElement>"}},onAnimationStartCapture:{defaultValue:null,description:"",name:"onAnimationStartCapture",required:!1,type:{name:"AnimationEventHandler<HTMLSpanElement>"}},onAnimationEnd:{defaultValue:null,description:"",name:"onAnimationEnd",required:!1,type:{name:"AnimationEventHandler<HTMLSpanElement>"}},onAnimationEndCapture:{defaultValue:null,description:"",name:"onAnimationEndCapture",required:!1,type:{name:"AnimationEventHandler<HTMLSpanElement>"}},onAnimationIteration:{defaultValue:null,description:"",name:"onAnimationIteration",required:!1,type:{name:"AnimationEventHandler<HTMLSpanElement>"}},onAnimationIterationCapture:{defaultValue:null,description:"",name:"onAnimationIterationCapture",required:!1,type:{name:"AnimationEventHandler<HTMLSpanElement>"}},onTransitionEnd:{defaultValue:null,description:"",name:"onTransitionEnd",required:!1,type:{name:"TransitionEventHandler<HTMLSpanElement>"}},onTransitionEndCapture:{defaultValue:null,description:"",name:"onTransitionEndCapture",required:!1,type:{name:"TransitionEventHandler<HTMLSpanElement>"}},type:{defaultValue:{value:"img"},description:"",name:"type",required:!1,type:{name:"EbayBadgeType"}},number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"string | number"}}}}}catch{}export{o as E};

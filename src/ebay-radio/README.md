# ebay-radio

## Demo
[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/ebay-radio--default-radio-button)

## Install
```
yarn add @ebay/ebayui-core-react
```

## Usage

### Import JS
```jsx harmony
import { EbayRadio } from '@ebay/ebayui-core-react/ebay-radio'
```

### Import LESS from SKIN
```jsx harmony
import "@ebay/skin/radio"
```

### or SCSS/CSS
```jsx harmony
import '@ebay/skin/dist/radio/ds6/radio.css'
```

## EbayRadio with EbayLabel
```jsx harmony
import { EbayLabel } from '@ebay/ebayui-core-react/ebay-field';

<EbayRadio value="1" id="radio-1">
    <Ebaylabel>Choice 1</Ebaylabel>
</EbayRadio>
```

## Icons
This component uses SVG icons, so you need to add the `<EbaySvg/>` component at the end of your html.

## Attributes

Name | Type | Description
--- | --- | --- | ---
`disabled` | Boolean | Disabled when true
`value` | string | The value of radio button component. For the radio checked/unchecked state, please use `checked` props.
`checked` | boolean | Set the radio button state to checked/unchecked. Use this for **controlled component**.
`defaultChecked` | boolean | Set the radio button initial state to checked/unchecked. Use this for **uncontrolled component**.
`size` | String | No | No | Either `large` or `regular` (default). Sets the radio icon size. For mweb this should be set to `large`. (Note: The dimensions of the radio will not change, but only the icon)
`onChange` | Function | Callback fired when selected is changed, with param `{ originalEvent, value }`
`onFocus` | Function | Callback fired when button is focused, with param `{ originalEvent, value }`

Note: For this component, `className`/`style` are applied to the container, while all other HTML attributes are applied to the input.

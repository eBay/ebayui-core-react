# ebay-checkbox

## Demo
[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/ebay-checkbox--default-checkbox-button)

## Usage
```
yarn add @ebay/ebayui-core-react
```
### Import JS
```jsx harmony
import { EbayCheckbox } from '@ebay/ebayui-core-react/ebay-checkbox'
```

## Import following styles from Skin
```jsx harmony
import '@ebay/skin/checkbox'
```

## ...or using SCSS/CSS
```jsx harmony
import '@ebay/skin/dist/checkbox/ds6/checkbox.css'
```

```jsx
import { EbayLabel } from '@ebay/ebayui-core-react/ebay-field';

<EbayCheckbox id="checkbox-1">
    <EbayLabel>Remember me!</EbayLabel>
</EbayCheckbox>
```

## Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`size` | String | No | No | Either `large` or `regular` (default). Sets the checkbox icon size. For mweb this should be set to `large`. (Note: The dimensions of the radio will not change, but only the icon)
`disabled` | Boolean | No |
`checked` | Boolean | No | No | indicates the checked value of the input element, required for a controlled component.
`defaultChecked` | Boolean | No | No | indicates the default checked input element value. Use when the component is not controlled.
`onChange` | Function | Callback fired when `checked` is changed, with param `{ originalEvent, value }`
`onFocus` | Function | Callback fired when button is focused, with param `{ originalEvent, value }`

It supports all the events supported by an input element (e.g. `onChange`)
Note: For this component, `className`/`style` are applied to the root tag, while all other HTML attributes are applied to the `input` tag.


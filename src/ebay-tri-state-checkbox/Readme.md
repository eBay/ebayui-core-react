# EbayCheckbox

## Demo

## Usage
```
yarn add @ebay/ui-core-react
```
### Import JS
```jsx harmony
import { EbayTristateCheckbox } from '@ebay/ui-core-react/ebay-tri-state-checkbox'
```

## Import following styles from Skin
```jsx harmony
import '@ebay/skin/checkbox'
```

## ...or using SCSS/CSS
```jsx harmony
import '@ebay/skin/checkbox.css'
```

## Import EbaySvg

After you render the EbayCheckbox component in your application, if you do not see the checkbox svg, you should add import and render EbaySvg component once at the root level of your application (usually layout file).

```jsx
import { EbaySvg } from "@ebay/ui-core-react/ebay-svg";

// Render this in your layout or root level component.
<EbaySvg /> 
```


```jsx
import { EbayLabel } from '@ebay/ui-core-react/ebay-field';

<EbayTristateCheckbox id="checkbox-1">
    <EbayLabel>Remember me!</EbayLabel>
</EbayTristateCheckbox>
```

## Attributes

| Name             | Type     | Stateful | Description                                                                                                                                                                        | Data                                                          |
|------------------|----------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| `size`           | String   | No       | Either `large` or `regular` (default). Sets the checkbox icon size. For mweb this should be set to `large`. (Note: The dimensions of the radio will not change, but only the icon) |
| `disabled`       | Boolean  | No       |                                                                                                                                                                                    |
| `checked`        | CheckboxState  | No       | indicates the checked value of the input element, which can be either "true", "false" or "mixed"                                                                                            |                                                                                       |
| `onChange`       | Function | -        | Callback fired on change                                                                                                                                                           | `(event: ChangeEvent, { value: string, checked: CheckboxState })`   |                                                                                                                                                                                    |
| `onFocus`        | Function | -        | Callback fired when button is focused                                                                                                                                              | `(event: FocusEvent, { value: string, checked: CheckboxState })`    |                                                                                                                                                                                    |
| `onKeyDown`      | Function | -        | Callback fired when key is pressed                                                                                                                                                 | `(event: KeyboardEvent, { value: string, checked: CheckboxState })` |                                                                                                                                                                                    |

It supports all the events supported by an input element (e.g. `onClick`)
Note: For this component, `className`/`style` are applied to the root tag, while all other HTML attributes are applied to the `input` tag.


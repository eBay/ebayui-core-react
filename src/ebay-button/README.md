# EbayButton

## Demo
[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/ebay-button--default)

## Usage

### Import JS
```jsx harmony
import { EbayButton } from '@ebay/ui-core-react/ebay-button'
```
### Import following styles from SKIN
```jsx harmony
import "@ebay/skin/button"
```
### Or import styles using SCSS/CSS
```jsx harmony
import '@ebay/skin/button.css'
```

### Big button
```jsx harmony
<EbayButton size="large">I'm a big button!</EbayButton>
```

### Icon button
```jsx
<EbayButton aria-label="Menu button">
    <EbayIcon name="MENU" />
</EbayButton>
```

### Complex button
```jsx
<EbayButton priority="primary" fluid>
    <EbayButtonCell style={{ justifyContent: 'space-between' }}>
        <span>Label</span>
        <span>Filter</span>
    </EbayButtonCell>
</EbayButton>
```

## Attributes

Name | Type | Stateful | Required | Description | Data
--- | --- | --- | --- | --- | ---
`priority` | String | No | No | `primary`, `secondary` (default), `tertiary`, `none`
`variant` | String | Yes | No | `standard` (default), `destructive`, `form`
`size` | String | No | No | `regular` (default), `large`
`bodyState` | String | No | No | `loading`, `expand`
`href` | String | No | No | for link that looks like a button
`fluid` | Boolean | No | No | takes the whole width of the parent element
`disabled` | Boolean | Yes | No
`partiallyDisabled` | Boolean | No | No | sets `aria-disabled` but not `disabled` prop
`transparent` | Boolean | Yes | No | transparent background color (overrides `priority` prop)
`truncate` | Boolean | No | No | will truncate the text of the button onto a single line, and adds an ellipsis, when the button's text overflows
`borderless` | Boolean | No | No | shows button without border
`fixedHeight` | Boolean | No | No | fixes the height based on `size`
`onClick` | Function | - | No | click or action key pressed (`Space` / `Enter`)
`onEscape` | Function | - | No | `Esc`-key pressed
`onFocus` | Function | - | No | triggered on focus
`onBlur` | Function | - | No | triggered on blur

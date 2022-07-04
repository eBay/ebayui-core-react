# EbayButton

## Demo
[Storybook](https://opensource.ebay.com/ebayui-core-react/master/?path=/story/ebay-button--default)

## Usage

### Import JS
```jsx harmony
import { EbayButton } from '@ebay/ebayui-core-react/ebay-button'
```
### Import following styles from SKIN
```jsx harmony
import "@ebay/skin/button"
```
### Or import styles using SCSS/CSS
```jsx harmony
import '@ebay/skin/dist/button/ds6/button.css'
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
`priority` | String | No | No | `primary`, `secondary` (default), `tertiary`, `delete`, `none`
`size` | String | No | No | `default` (default), `large`
`bodyState` | String | No | No | `loading`
`href` | String | No | No | for link that looks like a button
`fluid` | Boolean | No | No | takes the whole width of the parent element
`disabled` | Boolean | Yes | No
`partiallyDisabled` | Boolean | No | No | sets aria disabled but not disabled attribute
`transparent` | Boolean | Yes | No | for transparent background
`truncate` | Boolean | No | No | will truncate the text of the button onto a single line, and adds an ellipsis, when the button's text overflows
`onClick` | Function | - | No | click or action key pressed (`Space` / `Enter`)
`onEscape` | Function | - | No | `Esc`-key pressed

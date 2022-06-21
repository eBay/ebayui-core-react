# EbayCtaButton

## Demo
[Storybook](https://pages.github.com/eBay/ebayui-core-react/master/?path=/story/ebay-cta-button--default)

## Usage

### Import JS
```jsx harmony
import { EbayCtaButton } from '@ebay/ebayui-core-react/ebay-cta-button'
```

### Import following styles from SKIN
```jsx harmony
import "@ebay/skin/cta-button"
```

### Or import styles using SCSS/CSS
```jsx harmony
import '@ebay/skin/dist/cta-button/ds6/cta-button.css'
```

### Big button
```jsx harmony
<EbayCtaButton size="large">I'm a big CTA button!</EbayCtaButton>
```

## Attributes
Name | Type | Stateful | Required | Description | Data
--- | --- | --- | --- | --- | ---
`size` | String | No | No | can be only `large` or just omit it for default appearance
`href` | String | No | No | URL
`fluid` | Boolean | No | No | takes the whole width of the parent element
`truncate` | Boolean | No | No | will truncate the text of the button onto a single line, and adds an ellipsis, when the button's text overflows

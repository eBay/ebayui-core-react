# EbayProgressSpinner

## Demo
[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/ebay-progress-spinner--default-large)

## Usage

### Import JS
```jsx harmony
import { EbayProgressSpinner } from '@ebay/ebayui-core-react/ebay-progress-spinner'
```

### Import styles from Skin
```jsx
import '@ebay/skin/progress-spinner'
```

### or if using CSS/SCSS
```jsx
import '@ebay/skin/progress-spinner.css';
```

### Big spinner
```jsx harmony
<EbayProgressSpinner size="large">
```

## Attributes

Name | Type | Stateful | Required | Description | Data
--- | --- | --- | --- | --- | ---
`size` | String | No | No | `small` (default), `large`
`aria-label` | String | No | No | custom aria label instead of `Busy`

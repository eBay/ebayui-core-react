# ebay-badge

## Demo
[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/ebay-badge--default)

## Usage
```
yarn add @ebay/ebayui-core-react
```

### Import JS
```jsx harmony
import { EbayBadge } from '@ebay/ebayui-core-react/ebay-badge'
```

## Import following styles from Skin
```jsx harmony
import '@ebay/skin/badge'
```

## ...or using SCSS/CSS
```jsx harmony
import '@ebay/skin/dist/badge/ds6/badge.css'
```

```jsx harmony
<EbayBadge aria-label="1 unread item">1</EbayBadge>
```

## Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`type` | String | No | Yes | (default) `img`, `menu`, `icon`
`number` | Number | No | Yes | Used as the number to be placed in the badge
`aria-label` | String | No | Yes | Required only when not a part of a menu or a button. A descriptive label of what the badge represents (e.g. "5 unread items")

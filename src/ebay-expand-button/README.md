# ebay-expand-button

## Demo
[Storybook](https://pages.github.com/eBay/ebayui-core-react/master/?path=/story/ebay-expand-button--default)

## Install
```
yarn add @ebay/ebayui-core-react
```

## Usage

### Import following styles from SKIN
```jsx harmony
import "@ebay/skin/expand-button"
```

### Or import styles using SCSS/CSS
```jsx harmony
import '@ebay/skin/dist/expand-button/ds6/expand-button.css'

```

### Expand button
```jsx
<EbayExpandButton>Expand!</EbayExpandButton>
```

## EbayExpandButton Attributes

Name | Type | Required | Description
--- | --- | --- | ---
`icon` | String | No | Replacement for the standard expand icon
`borderless` | Boolean | No | Whether button has borders
`onExpand` | Function | No | Expand callback
`onCollapse` | Function | No | Collapse callback

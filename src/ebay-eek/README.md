# EbayEek
This component displays the current European Union Energy (EEK) rating of certain items that consume energy.

## Demo
[Storybook](https://pages.github.com/eBay/ebayui-core-react/master/?path=/story/ebay-eek--standard)

## Usage

### Import JS
```jsx harmony
import { EbayEek } from '@ebay/ebayui-core-react/ebay-eek'
```

### Import styles from Skin
```jsx
import '@ebay/skin/eek'
```

### or if using CSS/SCSS
```jsx
import '@ebay/skin/eek.css';
```

```jsx harmony
<EbayEek max="A+++" min="E" rating="C" />
```

## Props

Name | Type | Stateful | Required | Description | Data
--- | --- | --- | --- | --- | ---
`rating` | String | No | Yes | The energy rating
`max` | String | No | Yes | The maximum range
`min` | String | No | Yes | The minimum range

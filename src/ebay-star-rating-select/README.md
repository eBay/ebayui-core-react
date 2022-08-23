# ebay-star-rating-select
use (rating from 0-5)
## Demo
[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/ebay-star-rating-select)

## Usage
```
yarn add @ebay/ui-core-react
```

### Import JS
```jsx harmony
import { EbayStarRatingSelect } from '@ebay/ui-core-react/ebay-star-rating-select'
```

## Import following styles from Skin
```jsx harmony
import '@ebay/skin/star-rating-select'
```

## ...or using SCSS/CSS
```jsx harmony
import '@ebay/skin/star-rating.css'
```

```jsx harmony
<EbayStarRatingSelect value={1}>
```

## Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
| `a11yStarText`       | array  | No       | Yes      | array of strings for star inputs              |
| `a11yText`       | String  | No       | Yes      | container aria-label               |
| `value`           | String  | No       | Yes      | For `<ebay-star-rating-select/>` only, assigns the amount of stars to be filled|
| `disabled` | Boolean | No | Rating stars are disabled or not
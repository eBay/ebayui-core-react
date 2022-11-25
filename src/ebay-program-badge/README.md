# ebay-program-badge
The component will include the actual SVG markup in the HTML and then reference the chosen icon.

## Usage
```jsx
import { EbayProgramBadge } from '@ebay/ui-core-react/ebay-program-badge'
import '@ebay/skin/program-badge'

<EbayProgramBadge name="ebayPlus" />
```

### Notes
Make sure you use `<EbaySvg />` in your code (ideally on server side only), so that actual SVG icons exist inside HTML.

## Attributes
Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`name` | String | No | Yes | name of the icon from [Skin](./types.ts)
`noSkinClasses` | Boolean | No | No | Used for special cases where `program-badge*` classes from Skin should not be applied
`a11yText` | String | No | Yes | text for non-decorative inline icon; icon is assumed to be decorative if this is not passed

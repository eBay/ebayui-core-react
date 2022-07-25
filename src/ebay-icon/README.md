# ebay-icon
The component will include the actual SVG markup in the HTML and then reference the chosen icon.

## Usage
```jsx
import { EbayIcon } from '@ebay/ui-core-react/ebay-icon'
import '@ebay/skin/icon'

<EbayIcon name="arrowLeft" />
```

### Notes
Make sure you use `<EbaySvg />` in your code (ideally on server side only), so that actual SVG icons exist inside HTML.

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`name` | String | No | Yes | name of the icon from [Skin](./icon.tsx), transparent versions of colored icons has `-transparent` suffix
`noSkinClasses` | Boolean | No | No | Used for special cases where `icon` classes from Skin should not be applied
`a11yText` | String | No | Yes | text for non-decorative inline icon; icon is assumed to be decorative if this is not passed

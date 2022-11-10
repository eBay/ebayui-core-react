# ebay-menu-button

## Demo
[Storybook](https://pages.github.corp.ebay.com/React/ebayui-core-react/master/?path=/story/ebay-menu-button--default)

## Install
```
yarn add ebayui-core-react
```

## Usage
```jsx harmony
import { EbayMenuButton, EbayMenuButtonItem, EbayMenuButtonSeparator, EbayMenuButtonLabel } from 'ebayui-core-react/ebay-menu-button';
import '@ebay/skin/menu-button';
<EbayMenuButton text="Menu">
    <EbayMenuButtonItem href="https://ebay.com">Home</EbayMenuButtonItem>
    <EbayMenuButtonItem href="https://ebay.com/my">My eBay</EbayMenuButtonItem>
    <EbayMenuButtonItem href="https://ebay.com/categories">Categories</EbayMenuButtonItem>
    <EbayMenuButtonSeparator />
    <EbayMenuButtonItem>Log in</EbayMenuButtonItem>
</EbayMenuButton>
// With a complext label
<EbayMenuButton a11y-text="Navigation menu">
    <EbayMenuButtonLabel><img src="menu-logo.svg" /></EbayMenuButtonLabel>
    <EbayMenuButtonItem href="https://ebay.com">Home</EbayMenuButtonItem>
    <EbayMenuButtonItem href="https://ebay.com/my">My eBay</EbayMenuButtonItem>
</EbayMenuButton>
```

## EbayMenuButton Attributes

Name | Type | Required | Description
--- | --- | --- | ---
`text` | String | No | Button label text
`icon` | String | No | Name of an <EbayIcon> to show to the left of the text
`a11y-text` | String | Only without a text label | A11y text for the button
`type` | String | No | Not yet implemented
`priority` | String | No | Can be `priorities.PRIMARY` or `priorities.SECONDARY` (default)
`borderless` | Boolean | No | Whether button has borders
`checked` (radio) | Number | No | Not yet implemented
`onExpand` | Function | No | Not yet implemented
`onCollapse` | Function | No | Not yet implemented
`onChange` | Function | No | Not yet implemented
`onSelect` | Function | No | Not yet implemented

## EbayMenuButtonItem Attributes

Name | Type | Required | Description
--- | --- | --- | ---
`href` | String | No | Creates a menu-item with a link
`current` | Boolean | No | Whether or not the href is the current href of the page
`type` | String | No | Type of a (non-link) menu-item, default: `button`
`value` (radio or checkbox) | String | No | Not yet implemented
`checked` (radio or checkbox) | Boolean | No | Not yet implemented
`badge-number` | Number | No | Not yet implemented
`badge-aria-label` | String | Yes (if `badge-number` provided) | Not yet implemented
`onClick` | Function | No | For a non-link menu item, with param `{ originalEvent }`
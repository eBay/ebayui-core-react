# ebay-fake-menu-button

## Demo
[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/ebay-fake-menu-button--default)


## Install
```
yarn add @ebay/ui-core-react
```

## Usage
```jsx harmony
import {
    EbayFakeMenuButton,
    EbayFakeMenuButtonItem as Item,
    EbayFakeMenuButtonSeparator as Separator,
    EbayFakeMenuButtonLabel as Label
} from '@ebay/ui-core-react/ebay-fake-menu-button';
import '@ebay/skin/menu-button';
<EbayFakeMenuButton text="Menu">
    <Item href="https://ebay.com">Home</Item>
    <Item href="https://ebay.com/my">My eBay</Item>
    <Item href="https://ebay.com/categories">Categories</Item>
    <Separator />
    <Item>Log in</Item>
</EbayFakeMenuButton>

// With a complex label

<EbayFakeMenuButton a11y-text="Navigation menu">
    <Label><img src="menu-logo.svg" /></Label>
    <Item href="https://ebay.com">Home</Item>
    <Item href="https://ebay.com/my" current>My eBay</Item>
</EbayFakeMenuButton>
```

## EbayFakeMenuButton Attributes

Name | Type | Required | Description
--- | --- | --- | ---
`text` | String | No | Button label text
`icon` | String | No | Name of an <EbayIcon> to show to the left of the text (Not yet implemented)
`a11y-text` | String | Only without a text label | A11y text for the button
`type` | String | No | Not yet implemented
`priority` | String | No | Can be `PRIMARY` or `SECONDARY` (default) (Not yet implemented)
`borderless` | Boolean | No | Whether button has borders
`checked` (radio) | Number | No | Not yet implemented
`onExpand` | Function | No | Triggered on menu expand
`onCollapse` | Function | No | Triggered on menu collapse
`onChange` | Function | No | Not yet implemented
`onSelect` | Function | No | Not yet implemented

## EbayFakeMenuButtonItem Attributes

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

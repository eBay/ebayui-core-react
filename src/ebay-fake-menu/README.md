# ebay-fake-menu

## Demo
[Storybook](https://pages.github.corp.ebay.com/React/ebayui-core-react/master/?path=/story/ebay-fake-menu--default)

## Install
```
yarn add ebayui-core-react
```

## Usage
```jsx harmony
import { EbayFakeMenu, EbayFakeMenuItem as Item } from 'ebayui-core-react/ebay-fake-menu';
import '@ebay/skin/menu';
<EbayFakeMenu>
    <Item href="http://ebay.com">eBay US</Item>
    <Item href="http://ebay.de">eBay DE</Item>
    <Item href="http://ebay.co.uk">eBay UK</Item>
</EbayFakeMenu>
```

## EbayFakeMenu Props

Name | Type | Required | Description
--- | --- | --- | ---
`checked` | Number | No | Mark the current page with a checkbox
`onKeydown` | Function | No | Arguments: (index: number, checked: boolean)
`onSelect` | Function | No | For using with keyboard navigation, arguments: (index: number, checked: boolean)

## EbayFakeMenuItem Props

Name | Type | Required | Description
--- | --- | --- | ---
`href` | String | No | Redirection link on click. If set to `null`/`undefined` will disable the item.
`checked` | Boolean | No | Whether or not the link is the current page

## EbayFakeMenuSeparator
Example:

```jsx
import { EbayFakeMenu, EbayFakeMenuItem as Item, EbayFakeMenuSeparator as Separator } from 'ebayui-core-react/ebay-fake-menu';
<EbayMenu>
    <Item>item 1</Item>
    <Item>item 2</Item>
    <Separator />
    <Item>item 3</Item>
</EbayMenu>
```
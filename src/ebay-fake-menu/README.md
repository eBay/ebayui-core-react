# ebay-fake-menu

## Demo
[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/ebay-fake-menu--default)

## Install
```
yarn add @ebay/ui-core-react
```

## Usage
```jsx harmony
import { EbayFakeMenu, EbayFakeMenuItem as Item } from '@ebay/ui-core-react/ebay-fake-menu';
import '@ebay/skin/menu';
<EbayFakeMenu>
    <Item href="http://ebay.com">eBay US</Item>
    <Item href="http://ebay.de">eBay DE</Item>
    <Item href="http://ebay.co.uk">eBay UK</Item>
</EbayFakeMenu>
```

## EbayFakeMenu Props

| Name           | Type     | Required | Description                                                                                                                                                            | Data    |
|----------------|----------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| itemMatchesUrl | Boolean  | No       | used in conjunction with `current` -- This determines whether aria-current will be `page` or `true` -- Defaults to `true` which gives `aria-current` a value of `page` |         |
| `onKeydown`    | Function | No       | triggered on key down                                                                                                                                                  | `({ })` |
| `onSelect`     | Function | No       | For using with keyboard navigation, arguments: (index: number, checked: boolean)                                                                                       |         |

## EbayFakeMenuItem Props

Name | Type | Required | Description
--- | --- | --- | ---
`href` | String | No | Redirection link on click
`current` | Boolean | No | Whether or not the href is the current href of the page

## EbayFakeMenuSeparator
Example:

```jsx
import { EbayFakeMenu, EbayFakeMenuItem as Item, EbayFakeMenuSeparator as Separator } from '@ebay/ui-core-react/ebay-fake-menu';
<EbayMenu>
    <Item>item 1</Item>
    <Item current>item 2</Item>
    <Separator />
    <Item>item 3</Item>
</EbayMenu>
```

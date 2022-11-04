# ebay-fake-menu

## Demo
[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/ebay-fake-menu--default)

## Import JS
```jsx harmony
import {
    EbayFakeMenu,
    EbayFakeMenuItem as Item,
    EbayFakeMenuSeparator as Separator
} from '@ebay/ui-core-react/ebay-fake-menu'
```

## Import following styles from SKIN
```jsx harmony
import '@ebay/skin/menu'
```

### or if using SCSS/CSS
```jsx harmony
import '@ebay/skin/menu.css'
```

## Usage
```
yarn add @ebay/ui-core-react
```
```jsx harmony
<EbayFakeMenu>
    <Item href="http://ebay.com">eBay US</Item>
    <Item href="http://ebay.de">eBay DE</Item>
    <Item href="http://ebay.co.uk">eBay UK</Item>
    <Separator />
    <Item href="http://ebay.com/myebay">My eBay</Item>
</EbayFakeMenu>
```

## EbayFakeMenu Props

| Name       | Type     | Required | Description                                                                      |
|------------|----------|----------|----------------------------------------------------------------------------------|
| `checked`  | Number   | No       | Mark the current page with a checkbox                                            |
| `onSelect` | Function | No       | For using with keyboard navigation, arguments: (index: number, checked: boolean) |

## EbayFakeMenuItem Props

| Name      | Type    | Required | Description                                                                    |
|-----------|---------|----------|--------------------------------------------------------------------------------|
| `href`    | String  | No       | Redirection link on click. If set to `null`/`undefined` will disable the item. |
| `checked` | Boolean | No       | Whether or not the link is the current page                                    |

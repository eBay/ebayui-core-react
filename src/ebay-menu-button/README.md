# ebay-menu-button

## Demo
[Storybook](https://pages.github.corp.ebay.com/React/ebayui-core-react/master/?path=/story/ebay-menu-button--default)

## Install
```
yarn add ebayui-core-react
```

## Usage
```jsx harmony
import {
    EbayMenuButton,
    EbayMenuButtonItem as Item,
    EbayMenuButtonSeparator as Separator,
    EbayMenuButtonLabel as Label
} from 'ebayui-core-react/ebay-menu-button';
import '@ebay/skin/menu-button';
<EbayMenuButton text="Menu">
    <Item>Item 1</Item>
    <Item>Item 2</Item>
    <Item>Item 3</Item>
    <Separator />
    <Item>Log in</Item>
</EbayMenuButton>
// With a complext label
<EbayMenuButton a11yText="Menu">
    <Label><img src="menu-logo.svg" /></Label>
    <Item>Item 1</Item>
    <Item>Item 2</Item>
</EbayMenuButton>
```

## EbayMenuButton Attributes

Name | Type | Required | Description
--- | --- | --- | ---
`text` | String | No | Button label text
`a11yText` | String | Only without a text label | A11y text for the button
`borderless` | Boolean | No | Whether button has borders
`fixWidth` | Boolean | No | Constrain items container width to button width
`onExpand` | Function | No | Called when content is expanded
`onCollapse` | Function | No | Called when content is collapsed
`onKeydown` | Function | No | Arguments: (index: number, checked: boolean)
`onChange` | Function | No | Arguments: (index: number, checked: boolean) for type `radio`/`checkbox`
`onSelect` | Function | No | Arguments: (index: number, checked: boolean), not for use with type `radio`/`checkbox`

## EbayMenuButtonItem Attributes

Name | Type | Required | Description
--- | --- | --- | ---
`value` | String | No | for type `radio`, `checkbox`: the value to use with callbacks for `checked[]`
`checked` | Boolean | No | for type `radio`, `checkbox`: whether or not the item is checked
`disabled` | Boolean | No | makes the menu item disabled
`badgeNumber` | Number | No | used as the number to be placed in the badge
`onClick` | Function | No | For a non-link menu item, with param `{ originalEvent }`
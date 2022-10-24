# ebay-tab

## Demo
[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/ebay-tabs--default)

## Import JS
```jsx harmony
import { EbayTabs, EbayTab, EbayTabPanel } from '@ebay/ui-core-react/ebay-tabs'
```
## Import following styles from SKIN
```jsx harmony
import '@ebay/skin/tabs';
```

## Usage
```jsx harmony
<EbayTabs>
    <EbayTab>Tab 1</EbayTab>
    <EbayTab>Tab 2</EbayTab>
    <EbayTab>Tab 3</EbayTab>
    <EbayTabPanel>Panel 1</EbayTabPanel>
    <EbayTabPanel>Panel 2</EbayTabPanel>
    <EbayTabPanel>Panel 3</EbayTabPanel>
</EbayTabs>
```

## Props

Name | Type | Stateful | Description
--- | --- | --- | ---
`index` |Number | Yes | 0-based index of selected tab heading and panel
`activation` | Enum | Yes | whether to use automatic or manual activation when navigating by keyboard, can be `auto` (default) or `manual`
`size` | Enum | No | Whether to opt into larger font-size for tab headings, can be `medium` (default) or `large`

## Callbacks

Event | Data | Description
--- | --- | ---
`onTabSelect` | `{ index }` |

## EbayTab

```jsx harmony
<EbayTab>Tab 1</EbayTab>
```

### EbayTab Props

Name | Type | Stateful | Description
--- | --- | --- | ---
`href` | String | No | For use with `fake` tab component (links instead of real tabs)

## EbayTabPanel
```jsx harmony
<EbayTabPanel>Panel 1</EbayTabPanel>
```

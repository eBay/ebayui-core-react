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
`index` |Number | Yes | Deprecated, use `selectedIndex` instead. 0-based index of selected tab heading and panel
`selectedIndex` |Number | Yes | 0-based index of selected tab heading and panel
`activation` | Enum | Yes | whether to use automatic or manual activation when navigating by keyboard, can be `auto` (default) or `manual`
`size` | Enum | No | Whether to opt into larger font-size for tab headings, can be `medium` (default) or `large`

## Callbacks

| Event         | Data                                      | Description                                                                                             |
|---------------|-------------------------------------------|---------------------------------------------------------------------------------------------------------|
| `onTabSelect` | `({ index: number })`                     | Triggered on tab selected. Deprecated, use onSelect instead. Will be removed in the next major release. |
| `onSelect`    | `(ChangeEvent, { selectedIndex:number })` | Triggered on tab selected.                                                                              |

## EbayTab

```jsx harmony
<EbayTab>Tab 1</EbayTab>
```

## EbayTabPanel
```jsx harmony
<EbayTabPanel>Panel 1</EbayTabPanel>
```

# ebay-tab

## Demo
[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/ebay-tabs--default)

## Import JS
```jsx harmony
import { EbayTab, EbayTabHeading, EbayTabPanel } from '@ebay/ebayui-core-react/ebay-tabs'
```
## Import following styles from SKIN
```jsx harmony
import '@ebay/skin/tabs.css';
```

## Usage
```jsx harmony
<EbayTabs>
    <EbayTabHeading>Tab 1</EbayTabHeading>
    <EbayTabHeading>Tab 2</EbayTabHeading>
    <EbayTabHeading>Tab 3</EbayTabHeading>
    <EbayTabPanel>Panel 1</EbayTabPanel>
    <EbayTabPanel>Panel 2</EbayTabPanel>
    <EbayTabPanel>Panel 3</EbayTabPanel>
</EbayTabs>
```

## Props

Name | Type | Stateful | Description
--- | --- | --- | ---
`index` |Number | Yes | 0-based index of selected tab heading and panel
`fake` | Boolean | No | Whether to use link behavior for tab headings (DEPRECATED, works automatically)
`activation` | Enum | Yes | whether to use automatic or manual activation when navigating by keyboard, can be `auto` (default) or `manual`
`size` | Enum | No | Whether to opt into larger font-size for tab headings, can be `medium` (default) or `large`

## Callbacks

Event | Data | Description
--- | --- | ---
`onTabSelect` | `{ index }` |

## EbayTabHeading

### EbayTabHeading Usage

```jsx harmony
<EbayTabHeading>Tab 1</EbayTabHeading>
```

## EbayTabHeading Attributes

Name | Type | Stateful | Description
--- | --- | --- | ---
`href` | String | No | For use with `fake` tab component (links instead of real tabs)

## EbayTabPanel usage
```jsx harmony
<EbayTabPanel>Panel 1</EbayTabPanel>
```

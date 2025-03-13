# EbayFilterMenu

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/building-blocks-ebay-filter-menu--docs)

## Usage

### Import JS

```jsx harmony
import { EbayFilterMenu, EbayFilterMenuItem, EbayFilterMenuFooterButton } from "@ebay/ui-core-react/ebay-filter-menu";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/filter-menu";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```jsx harmony
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/filter-menu.css";
```

```jsx harmony
<EbayFilterMenu>
    <EbayFilterMenuItem value="item1">Item 1</EbayFilterMenuItem>
    <EbayFilterMenuItem value="item2">Item 2</EbayFilterMenuItem>
    <EbayFilterMenuFooterButton>Submit</EbayFilterMenuFooterButton>
</EbayFilterMenu>
```

## Attributes

| Name              | Type     | Required | Description                                                                 | Data                                      |
| ----------------- | -------- | -------- | --------------------------------------------------------------------------- | ----------------------------------------- |
| `variant`         | String   | No       | Variant of the filter menu, `form` or `default`                             |                                           |
| `type`            | String   | No       | Type of the filter menu, `checkbox` or `radio`                              |                                           |
| `onFormSubmit`    | Function | No       | Triggered on form submit                                                    | `(event: Event, { checked, checkedIndex })` |
| `onFooterClick`   | Function | No       | Triggered on footer button click                                            | `(event: Event, { checked, checkedIndex })` |
| `onChange`        | Function | No       | Triggered on item change                                                    | `(event: Event, { checked, checkedIndex })` |
| `onSearchChange`  | Function | No       | Triggered on search input change                                            | `(event: Event, { searchTerm })`            |

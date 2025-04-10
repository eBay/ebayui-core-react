# EbayFilter

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/building-blocks-ebay-filter--default)

## Usage

### Import JS

```jsx harmony
import { EbayFilter } from "@ebay/ui-core-react/ebay-filter";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/filter";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```jsx harmony
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/filter.css";
```

```jsx harmony
<EbayFilter>Text</EbayFilter>
```

## Attributes

| Name               | Type     | Required | Description                                                                       | Data                           |
| ------------------ | -------- | -------- | --------------------------------------------------------------------------------- | ------------------------------ |
| `href`             | String   | No       | For link that looks like a button                                                 |                                |
| `disabled`         | Boolean  | No       | Whether the filter is disabled or not                                             |                                |
| `selected`         | Boolean  | No       | Whether the filter is selected or not (use this for controlled component)         |                                |
| `defaultSelected`  | Boolean  | No       | Whether the filter is first selected or not (use this for uncontrolled component) |                                |
| `useAriaPressed`   | Boolean  | No       | defaults to `true`                                                                |                                |
| `a11ySelectedText` | String   | No       | defaults to `"Selected"`, but should be changed based on L10N or I18N             |                                |
| `onClick`          | Function | No       | Triggered on item clicked                                                         | `(event: Event, { selected })` |

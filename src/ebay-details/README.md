# EbayButton

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/navigation-disclosure-ebay-details--default)

## Usage

### Import JS

```jsx harmony
import { EbayDetails } from "@ebay/ui-core-react/ebay-details";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/details";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```jsx harmony
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/details.css";
```

```jsx harmony
<EbayDetails text="details">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</EbayDetails>
```

## Attributes

| Name        | Type              | Required | Description                                        | Data                       |
| ----------- | ----------------- | -------- | -------------------------------------------------- | -------------------------- |
| `alignment` | String            | No       | The position of the details, `regular` or `center` |                            |
| `size`      | String            | No       | Size of the details, `regular` or `small`          |                            |
| `open`      | String            | No       | Whether details is open                            |                            |
| `text`      | String            | Yes      | Text for the summary                               |                            |
| `as`        | React.ElementType | No       | Element type for the summary, default is `div`     |                            |
| `onToggle`  | Function          | No       | Triggered on toggle                                | `(event: Event, { open })` |

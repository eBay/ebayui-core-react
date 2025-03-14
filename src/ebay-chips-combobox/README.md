# EbayChipsCombobox

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/form-ebay-chips-combobox--default)

## Usage

### Import JS

```jsx harmony
import { EbayChipsCombobox, EbayComboboxOption } from "@ebay/ui-core-react/ebay-chips-combobox";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/combobox";
import "@ebay/skin/chip";
import "@ebay/skin/chips-combobox";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```jsx harmony
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/combobox.css";
import "@ebay/skin/chip.css";
import "@ebay/skin/chips-combobox.css";
```

```jsx harmony
<EbayChipsCombobox onChange={handleChange}>
    <EbayComboboxOption value="option1">Option 1</EbayComboboxOption>
    <EbayComboboxOption value="option2">Option 2</EbayComboboxOption>
    <EbayComboboxOption value="option3">Option 3</EbayComboboxOption>
</EbayChipsCombobox>
```

## Attributes

The `EbayChipsCombobox` supports the same attributes as the [EbayCombobox](../ebay-combobox/README.md), with additional attributes specific to the chips functionality:

| Name                   | Type     | Required | Description                              | Data                                     |
| ---------------------- | -------- | -------- | ---------------------------------------- | ---------------------------------------- |
| `a11yDeleteButtonText` | String   | No       | Accessibility text for the delete button |                                          |
| `onChange`             | Function | No       | Triggered when the selection changes     | `(event: Event, { selected: string[] })` |

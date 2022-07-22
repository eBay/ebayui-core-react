# [DEPRECATED] ebay-legacy-floating-label

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/ebay-legacy-floating-label--default-floating-label)

## Import JS

```jsx harmony
import { EbayLegacyFloatingLabel } from '@ebay/ui-core-react/ebay-legacy-floating-label'
```

## Import following styles from SKIN

```jsx harmony
import "@ebay/skin/legacy-textbox";
```

## or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/legacy-textbox.css";
```

## Usage

```
yarn add @ebay/ui-core-react
```

```jsx harmony
<EbayLegacyFloatingLabel label="Search" value="Search for anything" />
```

## Attributes

| Name       | Type     | Stateful | Required | Description                                                                |
| ---------- | -------- | -------- | -------- | -------------------------------------------------------------------------- |
| `id`       | String   | No       | Yes      | ID for the input element, necessary for accessibility                      |
| `label`    | String   | No       | No       | Text of the label                                                          |
| `disabled` | Boolean  | No       | No       | indicates the field is disabled if true                                    |
| `invalid`  | Boolean  | No       | No       | indicates a field-level error with red border if true                      |
| `value`    | String   | No       | No       | Value of the input                                                         |
| `onFocus`  | Function | No       | No       | called when input gets focus, parameters passed: `originalEvent`, `value`  |
| `onBlur`   | Function | No       | No       | called when input loses focus, parameters passed: `originalEvent`, `value` |

It supports all the events supported by an input element (e.g. `onChange`, `onInput`, `onKeyDown`, `onKeyUp`)

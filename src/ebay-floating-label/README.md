# ebay-floating-label [DEPRECATED]

Use `EbayTextbox` or `EbaySelect` with the `floatingLabel` attribute instead

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/ebay-floating-label--default-floating-label)

## Import JS

```jsx harmony
import { EbayFloatingLabel } from '@ebay/ebayui-core-react/ebay-floating-label'
```

## Import following styles from SKIN

```jsx harmony
import "@ebay/skin/floating-label";
```

## or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/dist/floating-label/ds6/floating-label.css";
```

## Usage

```
yarn add @ebay/ebayui-core-react
```

```jsx harmony
<EbayFloatingLabel label="Search" value="Search for anything" />
```

## Attributes

| Name        | Type     | Stateful | Required | Description                                                                |
| ----------- | -------- | -------- | -------- | -------------------------------------------------------------------------- |
| `id`        | String   | No       | Yes      | ID for the input element, necessary for accessibility                      |
| `label`     | String   | No       | No       | Text of the label                                                          |
| `disabled`  | Boolean  | No       | No       | indicates the field is disabled if true                                    |
| `invalid`   | Boolean  | No       | No       | indicates a field-level error with red border if true                      |
| `value`     | String   | No       | No       | Value of the input                                                         |
| `inputSize` | String   | No       | No       | `default` (default), `large`                                               |
| `elementType` | String   | No       | No       | `textbox` (default), `select`                                               |
| `onFocus`   | Function | No       | No       | called when input gets focus, parameters passed: `originalEvent`, `value`  |
| `onBlur`    | Function | No       | No       | called when input loses focus, parameters passed: `originalEvent`, `value` |

It supports all the events supported by an input element (e.g. `onChange`, `onInput`, `onKeyDown`, `onKeyUp`)

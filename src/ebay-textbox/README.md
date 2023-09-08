# ebay-textbox

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/ebay-textbox--default)

## Usage

```
yarn add @ebay/ui-core-react
```

### Import JS

```jsx harmony
import { EbayTextbox } from '@ebay/ui-core-react/ebay-textbox'
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/textbox";
```

### or if using CSS/SCSS

```jsx
import "@ebay/skin/textbox.css";
```

```jsx harmony
<EbayTextbox value="Search for anything" />
```

## Props

| Name            | Type     | Stateful | Required | Description                                                                                                                                               |
| --------------- | -------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fluid`         | Boolean  | No       | No       | Takes the full width of the container
| `multiline`     | Boolean  | No       | No       | Renders a multi-line textbox if true                                                                                                                      |
| `opaqueLabel`   | Boolean  | No       | No       | Only works with floating label. If set, then background is obscured of the floating label. Used with textarea to prevent label overlap                                                                                                                      |
| `invalid`       | Boolean  | No       | No       | Indicates a field-level error with red border if true                                                                                                     |
| `type`          | String   | No       | No       | Default: `text`, can be `password` if needed                                                                                                              |
| `value`         | String   | No       | No       | Indicates the value of the input element, required for a controlled component.                                                                            |
| `defaultValue`  | String   | No       | No       | Indicates the default input element value. Use when the component is not controlled.                                                                      |
| `inputSize`     | String   | No       | No       | `default` (default), `large`                                                                                                                              |
| `floatingLabel`  | String   | No       | No       | Indicates that the input is a floating label type and renders it as a label                                                                      |
| `onFocus`       | Function | No       | No       | Called when input gets focus, parameters passed: `originalEvent`, `value`                                                                                 |
| `onBlur`        | Function | No       | No       | Called when input loses focus, parameters passed: `originalEvent`, `value`                                                                                |
| `onChange`      | Function | No       | No       | Called when input changes value, parameters passed: `originalEvent`, `value`                                                                              |
| `onButtonClick` | Function | No       | No       | Triggers when clicking on postfix-icon-button. Requires `buttonAriaLabel` to be present in order to attach correctly                                                                              |

It supports all the events supported by an input element (e.g. `onInput`, `onKeyDown`, `onKeyUp`)

## EbayTextboxPrefixIcon
| Name            | Type     | Required | Description                                                                                                                                               |
| --------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`         | String  | No       | Name of the icon to show

## EbayTextboxPostfixIcon
| Name            | Type     | Required | Description                                                                                                                                               |
| --------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`         | String  | No       | Name of the icon to show
| `buttonAriaLabel`| String   | No    | Aria-label for postfix icon/button. Required in order to render postfix button                                                                                                                               |

### EbayTextboxPrefixIcon example
```jsx
import { EbayTextbox, EbayTextboxPrefixIcon } from '@ebay/ui-core-react/ebay-textbox'

<EbayTextbox placeholder="email">
    <EbayTextboxPrefixIcon name="messages" />
</EbayTextbox>
```

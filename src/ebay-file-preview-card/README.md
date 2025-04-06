# EbayFilePreviewCard

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/media-ebay-file-preview-card--docs)

## Usage

### Import JS

```jsx harmony
import { EbayFilePreviewCard } from '@ebay/ui-core-react/ebay-file-preview-card'
```

### Import following styles from SKIN

```jsx harmony
import '@ebay/skin/file-preview-card'
```

### Or import styles using SCSS/CSS

```jsx harmony
import '@ebay/skin/file-preview-card.css'
```

```jsx harmony
<EbayFilePreviewCard
    status="uploading"
    a11yCancelUploadText="Cancel Uploard"
    onCancel={(e) => action('onCancel')(e)}
/>
```

## Attributes

| Name                   | Type                                                         | Required | Description                                                     | Data |
| ---------------------- | ------------------------------------------------------------ | -------- | --------------------------------------------------------------- | ---- |
| `a11yCancelUploadText` | `String`                                                     | No       | a11y text for cancel upload button.                             |      |
| `deleteText`           | `String`                                                     | No       | Text for delete button.                                         |      |
| `status`               | `'uploading'`                                                | No       | Status of the file, can be `"uploading"` or `undefined`.        |      |
| `labelText`            | `String`                                                     | No       | Text to display in the label.                                   |      |
| `footerTitle`          | `String`                                                     | No       | Title to display beneath the file, usually the filename.        |      |
| `footerSubtitle`       | `String`                                                     | No       | Subtitle to display beneath the file title.                     |      |
| `file`                 | `File` or `{name: string, type?: File[type], src?: string }` | No       | If true, combobox will span the entire width of it's container. |      |

## Events

| Name           | Type                         | Required | Description                                         | Data |
| -------------- | ---------------------------- | -------- | --------------------------------------------------- | ---- |
| `onMenuAction` | `EbayMenuSelectEventHandler` | No       | Triggered when an action is selected from the menu. |      |
| `onSeeMore`    | `EbayEventHandler`           | No       | Triggered when the see more button is clicked.      |      |
| `onDelete`     | `EbayEventHandler`           | No       | Triggered when the delete button is clicked.        |      |
| `onCancel`     | `EbayEventHandler`           | No       | Triggered when the cancel button is clicked.        |      |

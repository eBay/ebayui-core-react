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

### Import icons

Add the below icons to the `EbaySvg` component.

Note: Make sure that `EbaySvg` is only rendered on the server so it does not affect the client bundle size.

```tsx
<EbaySvg icons={['close16', 'delete16', 'vertical16', 'play16', 'file24']} />
```

```jsx harmony
<EbayFilePreviewCard
    status="uploading"
    a11yCancelUploadText="Cancel Uploard"
    onCancel={(e) => action('onCancel')(e)}
/>
```

## Attributes

| Name                   | Type                                                         | Required | Description                                                                                                  | Data |
| ---------------------- | ------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------ | ---- |
| `a11yCancelUploadText` | `String`                                                     | No       | a11y text for cancel upload button.                                                                          |      |
| `as`                   | `React.ElementType`                                          | No       | Element type for the preview card, default is `div`                                                          |      |
| `deleteText`           | `String`                                                     | No       | Text for delete button.                                                                                      |      |
| `status`               | `String`                                                     | No       | Status of the file, can be `"uploading"`                                                                     |      |
| `labelText`            | `String`                                                     | No       | Text to display in the label.                                                                                |      |
| `footerTitle`          | `String`                                                     | No       | Title to display beneath the file, usually the filename.                                                     |      |
| `footerSubtitle`       | `String`                                                     | No       | Subtitle to display beneath the file title.                                                                  |      |
| `infoText`             | `String`                                                     | No       | Text to display info in file if not image.                                                                   |      |
| `file`                 | `File` or `{name: string, type?: File[type], src?: string }` | No       | File object, can be raw platform `File` or an object containing `name`, `type`, and a `src` for the preview. |      |
| `menuActions`          | `{event: string, label: string }[]`                          | No       | Array of menu actions, containing event and label.                                                           |      |
| `seeMore`              | `Number`                                                     | No       | Passing a number here will convert the card to a "see more" card.                                            |      |
| `a11ySeeMoreText`      | `String`                                                     | No       | a11y text for see more button.                                                                               |

## Events

| Name           | Type                         | Required | Description                                         | Data                                                            |
| -------------- | ---------------------------- | -------- | --------------------------------------------------- | --------------------------------------------------------------- |
| `onMenuAction` | `EbayMenuSelectEventHandler` | No       | Triggered when an action is selected from the menu. | `event, {index: number, checked: number[], eventName?: string}` |
| `onSeeMore`    | `EbayEventHandler`           | No       | Triggered when the see more button is clicked.      | `event`                                                         |
| `onDelete`     | `EbayEventHandler`           | No       | Triggered when the delete button is clicked.        | `event`                                                         |
| `onCancel`     | `EbayEventHandler`           | No       | Triggered when the cancel button is clicked.        | `event`                                                         |

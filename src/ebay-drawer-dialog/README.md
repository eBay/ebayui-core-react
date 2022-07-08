# EbayDrawerDialog

## Usage

### Import JS
```jsx harmony
import { EbayDrawerDialog } from '@ebay/ebayui-core-react/ebay-drawer-dialog'
```
### Import following styles from SKIN
```jsx harmony
import "@ebay/skin/drawer-dialog"
```
### Or import styles using SCSS/CSS
```jsx harmony
import '@ebay/skin/drawer-dialog.css'
```
### Simple opened dialog
```jsx
<EbayDrawerDialog open a11yClosetext="Close Drawer">
    Hello World
</EbayDrawerDialog>
```

## Props

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`expanded` | Boolean | No | No | Whether the drawer is expanded to full height or max 50%
`open` | Boolean | Yes | No | Whether drawer is open.
`noHandle` | Boolean | Yes | No | Whether handle will be shown or not.
`focus` | String | No | No | An id for an element which will receive focus when the drawer opens (defaults to close button).
`a11yCloseText` | String | No | Yes | A11y text for close button and mask.
`a11yMinimizeText` | String | No | Yes | A11y text for draggable handle when drawer is maximized and clicking handle will minimize the drawer.
`a11yMaximizeText` | String | No | Yes | A11y text for draggable handle when drawer is minimized and clicking handle will maximize the drawer.
`animated` | Boolean | Yes | No | Renders the dialog with an animation. Note that the dialog will always be present in the DOM

## Events

Event | Data | Description
--- | --- | ---
`onShow` |  | drawer opened
`onClose` |  | drawer closed. Triggered also when user drags down on handle (touch only) when dialog is not expanded
`onExpanded` |  | drawer expanded to full page height. Event is triggered on drag up of handle (touch only), clicks, or when user scrolls in content when dialog is not expanded
`onCollapsed` |  | drawer collapsed back to max 50%. Event is triggered on drags do

## Child components

### EbayDialogHeader
Will render a header content for the dialog. Will always render the header element even if this is not present

### EbayDialogFooter
Will render the footer content for the dialog. If not present then will not have any footer.

```jsx
<EbayDrawerDialog>
    <EbayDialogHeader>Title</EbayDialogHeader>
    Some text
    <EbayDialogFooter>(c)2021 eBay Inc.</EbayDialogFooter>
</EbayDrawerDialog>
```

# EbayConfirmDialog

## Usage

```react
<EbayConfirmDialog open a11yClosetext="Close">
    <EbayDialogHeader>Heading</EbayDialogHeader>
    <p>Body content</p>
</EbayConfirmDialog>
```

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`open` | Boolean | Yes | No | Whether dialog is open.
`focus` | String | No | No | An id for an element which will receive focus when the drawer opens (defaults to close button).
`a11yCloseText` | String | No | Yes | A11y text for close button and mask.
`confirmText` | String  | No       | Yes      | Text for confirm button |
`rejectText`  | String  | No       | Yes      | Text for reject button  |
`animated` | Boolean | Yes | No | Renders the dialog with an animation. Note that the dialog will always be present in the DOM

## Callbacks
Event | Arguments | Description
--- |-----------| ---
`onOpen` | (Event)   | Triggered when dialog is opened
`onConfirm` | (Event)   | Triggered when confirm button is clicked
`onReject` | (Event)   | Trigered when reject button is clicked

## EbayDialogHeader
Will render a header content for the dialog. Will always render the header element even if this is not present

## EbayDialogFooter
Will render the footer content for the dialog. If not present then will not have any footer.

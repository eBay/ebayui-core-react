# EbayLightboxDialog

## Usage

```react
<EbayLightboxDialog open a11yClosetext="Close">
    <EbayDialogHeader>Heading</EbayDialogHeader>
    <p>Body content</p>
    <EbayDialogFooter>Footer</EbayDialogFooter>
</EbayLightboxDialog>
```

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`open` | Boolean | Yes | No | Whether dialog is open.
`mode` | String | No | No | Can be `default`, `mini`.
`focus` | String | No | No | An id for an element which will receive focus when the drawer opens (defaults to close button).
`a11yCloseText` | String | No | Yes | A11y text for close button and mask.
`animated` | Boolean | Yes | No | Renders the dialog with an animation. Note that the dialog will always be present in the DOM

## Events

Event | Data | Description
--- | --- | ---
`onOpen` |  | Trigggered when dialog is opened
`onClose` |  | Triggered when dialog is closed

## EbayDialogHeader
Will render a header content for the dialog. Will always render the header element even if this is not present

## EbayDialogFooter
Will render the footer content for the dialog. If not present then will not have any footer.

## EbayDialogPreviousButton
Will render the previous icon button. The icon can be overwritten with the `icon` attribute

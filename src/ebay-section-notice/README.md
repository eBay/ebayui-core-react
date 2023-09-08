# ebay-section-notice

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/ebay-section-notice--default-message-with-no-action)

## Import JS

```jsx harmony
import {
    EbaySectionNotice,
    EbayNoticeContent,
    EbaySectionNoticeTitle,
    EbaySectionNoticeFooter,
} from '@ebay/ui-core-react/ebay-section-notice'
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/section-notice";
```

## Use

```jsx harmony
<EbaySectionNotice status="confirmation" aria-label="Confirmation">
    <EbayNoticeContent>
        <EbaySectionNoticeTitle>Congratulations</EbaySectionNoticeTitle>
        <p>
            This successfully finished <a href="http://www.ebay.com">next page</a>
        </p>
    </EbayNoticeContent>
    <EbaySectionNoticeFooter>
        <EbayButton>Action</EbayButton>
    </EbaySectionNoticeFooter>
</EbaySectionNotice>
```

## Attributes

| Name                   | Type                                                                 | Stateful | Description                                                                                                                                 | Default    |
| ---------------------- | -------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `status`               | String (`"general", "attention"`, `"confirmation"`, or `"information"`) | No       | Determines the style and type of notice to be displayed                                                                                     | `"general"`   |
| `aria-label`           | String                                                               | No       | The description of the notice itself for screen readers. Check out [this issue](https://github.com/eBay/skin/issues/1001) for more context. | -          |
| `aria-roledescription` | String                                                               | No       | Adds role description attribute to the section notice                                                                                       | `"Notice"` |
| `children`             | React Node                                                           | No       | The content to be displayed within the notice. **Must have the EbayNoticeContent within the children!**                                     | -          |

## Callbacks
| Name | Required             | Description       | Arguments |
|------|----------------------|-------------------|-----------|
| `onDismiss` | No | Triggered on notice dismiss | (Event)  |

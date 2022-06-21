# ebay-page-notice

## Demo

[Storybook](https://pages.github.com/eBay/ebayui-core-react/master/?path=/story/ebay-page-notice--confirmation-message)

## Import JS

```jsx harmony
import {
    EbayPageNotice,
    EbayNoticeContent,
    EbayPageNoticeTitle,
    EbayPageNoticeFooter,
} from '@ebay/ebayui-core-react/ebay-page-notice'
```

### Import following styles from SKIN

#### Less files

```less
@import "~@ebay/skin/src/less/page-notice/ds6/page-notice.less";
```

#### JavaScript files

```jsx harmony
import "@ebay/skin/page-notice";
```

## Use

```jsx harmony
<EbayPageNotice status="attention">
    <EbayNoticeContent>
        <EbayPageNoticeTitle>Your order's in!</EbayPageNoticeTitle>
        <p>
            <strong>Error.</strong> Please take another look at the following:
            <br />
            <a href="#">Card number</a>, <a href="#">Expiration date</a> &amp; <a href="#">Security code</a>.
        </p>
    </EbayNoticeContent>
    <EbaySectionNoticeFooter>
        <EbayButton>Action</EbayButton>
    </EbaySectionNoticeFooter>
</EbayPageNotice>
```

## Attributes

| Name         | Type                                                                          | Stateful | Description                                                                                                                                 | Default       |
| ------------ | ----------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `status`     | String ( `"general"`,`"attention"`, `"confirmation"`, or `"information"`) | No       | Determines the style and type of notice to be displayed                                                                                     | `"general"` |
| `aria-label` | String                                                                        | No       | The description of the notice itself for screen readers. Check out [this issue](https://github.com/eBay/skin/issues/1001) for more context. | -             |
| `children`   | React Node                                                                    | No       | The content to be displayed within the notice                                                                                               | -             |

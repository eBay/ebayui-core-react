import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import { EbayButton, EbayInlineNotice, EbayNoticeContent } from '../../index'

storiesOf(`ebay-inline-notice`, module)

    .add(`Default`, () => (<>
        <EbayInlineNotice aria-label="General">
            <EbayNoticeContent><p>text message</p></EbayNoticeContent>
        </EbayInlineNotice>
    </>))

    .add(`Confirmation message`, () => (<>
        <EbayInlineNotice status="confirmation" aria-label="Confirmation">
            <EbayNoticeContent>
                <p>Delivered on May 1, 2017</p>
                <p>Tracking number: <a href="http://www.ebay.com">93878473859376898908657567</a></p>
            </EbayNoticeContent>
        </EbayInlineNotice>
    </>))

    .add(`Information message`, () => (<>
        <EbayInlineNotice status="information" aria-label="Information">
            <EbayNoticeContent>
                <p>Global Shipping Program transaction.</p>
            </EbayNoticeContent>
        </EbayInlineNotice>
    </>))

    .add(`Attention message`, () => (<>
        <EbayInlineNotice status="attention" aria-label="Attention">
            <EbayNoticeContent>
                <p>Update your credit card.</p>
            </EbayNoticeContent>
        </EbayInlineNotice>
    </>))

    .add(`Notice toggle`, () => (<>
        <NoticeToggleStory />
    </>))


function NoticeToggleStory() {
    const [hidden, setHidden] = useState(false)
    return (
        <>
            <EbayButton onClick={() => setHidden(!hidden)}>{hidden ? 'Show' : 'Hide'} Notice</EbayButton>
            <EbayInlineNotice
                status="confirmation"
                hidden={hidden}
                onNoticeShow={action(`Showing`)}
                aria-label="Toggle notice"
            >
                <EbayNoticeContent>
                    <p>Delivered on May 1, 2017</p>
                    <p>Tracking number: <a href="http://www.ebay.com">93878473859376898908657567</a></p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>
    )
}

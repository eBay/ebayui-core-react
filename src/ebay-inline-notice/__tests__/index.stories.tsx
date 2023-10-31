import React, { useState } from 'react'
import { action } from '../../../.storybook/action'
import { EbayButton } from '../../ebay-button'
import { EbayInlineNotice, EbayNoticeContent } from '../index'

export default {
    title: 'ebay-inline-notice'
}

export const Default = () => (
    <>
        <EbayInlineNotice aria-label="General">
            <EbayNoticeContent>
                <p>text message</p>
            </EbayNoticeContent>
        </EbayInlineNotice>
    </>
)

export const ConfirmationMessage = () => (
    <>
        <EbayInlineNotice status="confirmation" aria-label="Confirmation">
            <EbayNoticeContent>
                <p>Delivered on May 1, 2017</p>
                <p>
                    Tracking number: <a href="http://www.ebay.com">93878473859376898908657567</a>
                </p>
            </EbayNoticeContent>
        </EbayInlineNotice>
    </>
)

ConfirmationMessage.story = {
    name: 'Confirmation message'
}

export const InformationMessage = () => (
    <>
        <EbayInlineNotice status="information" aria-label="Information">
            <EbayNoticeContent>
                <p>Global Shipping Program transaction.</p>
            </EbayNoticeContent>
        </EbayInlineNotice>
    </>
)

InformationMessage.story = {
    name: 'Information message'
}

export const AttentionMessage = () => (
    <>
        <EbayInlineNotice status="attention" aria-label="Attention">
            <EbayNoticeContent>
                <p>Update your credit card.</p>
            </EbayNoticeContent>
        </EbayInlineNotice>
    </>
)

AttentionMessage.story = {
    name: 'Attention message'
}

export const NoticeToggle = () => (
    <>
        <NoticeToggleStory />
    </>
)

NoticeToggle.story = {
    name: 'Notice toggle'
}

function NoticeToggleStory() {
    const [hidden, setHidden] = useState(false)
    return (
        <>
            <EbayButton onClick={() => setHidden(!hidden)}>{hidden ? 'Show' : 'Hide'} Notice</EbayButton>
            <EbayInlineNotice
                status="confirmation"
                hidden={hidden}
                onNoticeShow={action('Showing')}
                aria-label="Toggle notice"
            >
                <EbayNoticeContent>
                    <p>Delivered on May 1, 2017</p>
                    <p>
                        Tracking number: <a href="http://www.ebay.com">93878473859376898908657567</a>
                    </p>
                </EbayNoticeContent>
            </EbayInlineNotice>
        </>
    )
}

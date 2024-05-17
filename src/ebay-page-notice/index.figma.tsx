import figma from '@figma/code-connect'

import React from 'react'
import { EbayPageNotice, EbayNoticeContent, EbayPageNoticeTitle, EbayPageNoticeFooter } from '.'
import { EbayButton } from '@ebay/ui-core-react/ebay-button'

figma.connect(
    EbayPageNotice,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=64873-99272&m=dev',
    {
        props: {
            Body: figma.string('Body')
        },
        example: ({ Body }) => (
            <EbayPageNotice status="attention">
                <EbayNoticeContent>
                    <EbayPageNoticeTitle>Notification title</EbayPageNoticeTitle>
                    <p>{Body}</p>
                </EbayNoticeContent>
                <EbayPageNoticeFooter>
                    <EbayButton>Action</EbayButton>
                </EbayPageNoticeFooter>
            </EbayPageNotice>
        )
    }
)

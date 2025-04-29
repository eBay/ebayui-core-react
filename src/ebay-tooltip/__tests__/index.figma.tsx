import figma from '@figma/code-connect'

import React from 'react'
import { EbayTooltip, EbayTooltipHost, EbayTooltipContent } from '..'
/* @ts-ignore: this is only to help code connect */
import { EbayButton } from '@ebay/ui-core-react/ebay-button'

figma.connect(
    EbayTooltip,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=54797-91005',
    {
        props: {
            Description: figma.string('Description')
        },
        example: ({ Description }) => (
            <EbayTooltip pointer="bottom-left">
                <EbayTooltipHost>
                    <EbayButton>Info</EbayButton>
                </EbayTooltipHost>
                <EbayTooltipContent>
                    <span>{Description}</span>
                </EbayTooltipContent>
            </EbayTooltip>
        )
    }
)

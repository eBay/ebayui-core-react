import figma from '@figma/code-connect'

import React from 'react'
import { EbayRadio } from '.'
/* @ts-ignore: this is only to help code connect */
import { EbayLabel } from '@ebay/ui-core-react/ebay-field'

// selection field
figma.connect(
    EbayRadio,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=13789-23765',
    {
        variant: { 'control type': 'radio' },
        example: () => (
            <EbayRadio id="radio-1">
                <EbayLabel>Remember me</EbayLabel>
            </EbayRadio>
        )
    }
)

// radio only
figma.connect(
    EbayRadio,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=10385-1',
    {
        example: () => (
            <EbayRadio id="radio-1" />
        )
    }
)

import figma from '@figma/code-connect'

import React from 'react'
import { EbayRadio } from '.'
import { EbayLabel } from '@ebay/ui-core-react/ebay-field'

// selection field
figma.connect(
    EbayRadio,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=13789-23765&m=dev',
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
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=10385-1&m=dev',
    {
        example: () => (
            <EbayRadio id="radio-1" />
        )
    }
)

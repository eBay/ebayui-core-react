import figma from '@figma/code-connect'

import React from 'react'
import { EbaySwitch } from '.'
import { EbayLabel } from '@ebay/ui-core-react/ebay-field'

// selection field
figma.connect(
    EbaySwitch,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=13789-23765&m=dev',
    {
        variant: { 'control type': 'switch' },
        example: () => (
            <EbaySwitch id="switch-1">
                <EbayLabel>Remember me</EbayLabel>
            </EbaySwitch>
        )
    }
)

// switch only
figma.connect(
    EbaySwitch,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=10385-3&m=dev',
    {
        example: () => (
            <EbaySwitch id="switch-1" />
        )
    }
)

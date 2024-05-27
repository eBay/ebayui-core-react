import figma from '@figma/code-connect'

import React from 'react'
import { EbayCheckbox } from '.'
/* @ts-ignore: this is only to help code connect */
import { EbayLabel } from '@ebay/ui-core-react/ebay-field'

// selection field
figma.connect(
    EbayCheckbox,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=13789-23765&m=dev',
    {
        variant: { 'control type': 'checkbox' },
        example: () => (
            <EbayCheckbox id="checkbox-1">
                <EbayLabel>Remember me</EbayLabel>
            </EbayCheckbox>
        )
    }
)

// checkbox only
figma.connect(
    EbayCheckbox,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=10407-293&m=dev',
    {
        example: () => (
            <EbayCheckbox id="checkbox-2" />
        )
    }
)

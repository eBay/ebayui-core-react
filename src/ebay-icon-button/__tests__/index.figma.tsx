import figma from '@figma/code-connect'

import React from 'react'
import { EbayIconButton } from '.'

// button
figma.connect(
    EbayIconButton,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=65935-91936',
    {
        example: () => (
            <EbayIconButton icon="settings16" aria-label="settings" />
        )
    }
)

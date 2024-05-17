import figma from '@figma/code-connect'

import React from 'react'
import { EbayButton } from '.'

figma.connect(
    EbayButton,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=65849-91206&m=dev',
    {
        props: {
            size: figma.enum('size', {
                regular: 'regular',
                small: 'small',
                large: 'large'
            })
        },
        example: ({ size }) => (
            <EbayButton size={size}>
                Buy It Now
            </EbayButton>
        )
    }
)

import figma from '@figma/code-connect'

import React from 'react'
import { EbaySignal } from '.'

figma.connect(
    EbaySignal,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=10051-5',
    {
        props: {
            type: figma.string('Type')
        },
        example: ({ type }) => (
            <EbaySignal status="trustworthy">{type}</EbaySignal>
        )
    }
)

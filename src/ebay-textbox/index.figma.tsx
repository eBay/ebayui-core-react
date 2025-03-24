import figma from '@figma/code-connect'

import React from 'react'
import { EbayTextbox } from '.'

figma.connect(
    EbayTextbox,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=25465-6418',
    {
        props: {
            Value: figma.string('Input text')
        },
        example: ({ Value }) => (
            <EbayTextbox value={Value} />
        )
    }
)

figma.connect(
    EbayTextbox,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=25465-5522',
    {
        example: () => (
            <EbayTextbox multiline />
        )
    }
)

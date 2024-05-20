import figma from '@figma/code-connect'

import React from 'react'
import { EbayTextbox } from '.'

figma.connect(
    EbayTextbox,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=25465-6418&m=dev',
    {
        props: {
            Value: figma.string('Value')
        },
        example: ({ Value }) => (
            <EbayTextbox value={Value} />
        )
    }
)

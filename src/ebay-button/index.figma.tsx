import figma from '@figma/code-connect'

import React from 'react'
import { EbayButton } from '.'

figma.connect(
    EbayButton,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=65849-91206&m=dev',
    {
        props: {
            state: figma.enum('state', {
                disabled: true,
                enabled: false
            }),
            title: figma.string('Title'),
            size: figma.enum('size', {
                medium: 'regular',
                small: 'small',
                large: 'large'
            })
        },
        example: ({ state, size, title }) => (
            <EbayButton disabled={state} size={size}>
                {title}
            </EbayButton>
        )
    }
)

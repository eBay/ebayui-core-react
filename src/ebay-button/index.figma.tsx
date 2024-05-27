import figma from '@figma/code-connect'

import React from 'react'
import { EbayButton } from '.'

// button
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
            <EbayButton disabled={state} size={size} variant="standard">
                {title}
            </EbayButton>
        )
    }
)

// button destructive
figma.connect(
    EbayButton,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=129298-738861&m=dev',
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
            <EbayButton disabled={state} size={size} variant="destructive">
                {title}
            </EbayButton>
        )
    }
)

// button branded
figma.connect(
    EbayButton,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=129776-224141&m=dev',
    {
        props: {
            title: figma.string('Title'),
            size: figma.enum('size', {
                medium: 'regular',
                small: 'small',
                large: 'large'
            })
        },
        example: ({ size, title }) => (
            <EbayButton size={size}>
                {title}
            </EbayButton>
        )
    }
)

// button link (borderless)
figma.connect(
    EbayButton,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=109500-131885&m=dev',
    {
        props: {
            title: figma.string('Title'),
            size: figma.enum('size', {
                medium: 'regular',
                small: 'small',
                large: 'large'
            })
        },
        example: ({ size, title }) => (
            <EbayButton size={size} borderless>
                {title}
            </EbayButton>
        )
    }
)

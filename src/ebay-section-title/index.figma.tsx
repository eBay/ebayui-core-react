import figma from '@figma/code-connect'

import React from 'react'
import {
    EbaySectionTitle,
    EbaySectionTitleTitle as Title,
    EbaySectionTitleSubtitle as Subtitle
} from '.'

// has both button and subtitle set
figma.connect(
    EbaySectionTitle,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=78903-90028&m=dev',
    {
        props: {
            titleText: figma.string('Title')
        },
        example: ({ titleText }) => (
            <EbaySectionTitle href="https://www.ebay.com" ctaText="See All">
                <Title>{titleText}</Title>
            </EbaySectionTitle>
        )
    }
)

// only subtitle set
figma.connect(
    EbaySectionTitle,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=78903-90028&m=dev',
    {
        props: {
            titleText: figma.string('Title'),
            subTitleText: figma.string('Subtitle')
        },
        example: ({ titleText, subTitleText }) => (
            <EbaySectionTitle>
                <Title>{titleText}</Title>
                <Subtitle>{subTitleText}</Subtitle>
            </EbaySectionTitle>
        )
    }
)

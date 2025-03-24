import figma from '@figma/code-connect'

import React from 'react'
import {
    EbaySectionTitle,
    EbaySectionTitleTitle,
    EbaySectionTitleSubtitle
} from '.'

// has both button and subtitle set
figma.connect(
    EbaySectionTitle,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=78903-90028',
    {
        props: {
            titleText: figma.string('Title')
        },
        example: ({ titleText }) => (
            <EbaySectionTitle href="https://www.ebay.com" ctaText="See All">
                <EbaySectionTitleTitle>{titleText}</EbaySectionTitleTitle>
            </EbaySectionTitle>
        )
    }
)

// only subtitle set
figma.connect(
    EbaySectionTitle,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=78903-90028',
    {
        props: {
            titleText: figma.string('Title'),
            subTitleText: figma.string('Subtitle')
        },
        example: ({ titleText, subTitleText }) => (
            <EbaySectionTitle>
                <EbaySectionTitleTitle>{titleText}</EbaySectionTitleTitle>
                <EbaySectionTitleSubtitle>{subTitleText}</EbaySectionTitleSubtitle>
            </EbaySectionTitle>
        )
    }
)

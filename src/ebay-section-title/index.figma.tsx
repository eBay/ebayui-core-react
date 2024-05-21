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
        variant: { 'button?': true, 'subtitle?': true },
        props: {
            titleText: figma.string('Title')
        },
        example: ({ titleText }) => (
            <EbaySectionTitle href="https://www.ebay.com" ctaText="See All">
                <Title>{titleText}</Title>
                <Subtitle>Lorem ipsum dolor sit amet</Subtitle>
            </EbaySectionTitle>
        )
    }
)

// only subtitle set
figma.connect(
    EbaySectionTitle,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=78903-90028&m=dev',
    {
        variant: { 'button?': false, 'subtitle?': true },
        props: {
            titleText: figma.string('Title')
        },
        example: ({ titleText }) => (
            <EbaySectionTitle>
                <Title>{titleText}</Title>
                <Subtitle>Lorem ipsum dolor sit amet</Subtitle>
            </EbaySectionTitle>
        )
    }
)

// only button set
figma.connect(
    EbaySectionTitle,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=78903-90028&m=dev',
    {
        variant: { 'button?': true, 'subtitle?': false },
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

// just title set
figma.connect(
    EbaySectionTitle,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=78903-90028&m=dev',
    {
        variant: { 'button?': false, 'subtitle?': false },
        props: {
            titleText: figma.string('Title')
        },
        example: ({ titleText }) => (
            <EbaySectionTitle>
                <Title>{titleText}</Title>
            </EbaySectionTitle>
        )
    }
)

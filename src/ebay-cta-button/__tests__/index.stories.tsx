import React from 'react'
import { storiesOf } from '@storybook/react'
import { EbayCtaButton } from '../../index'

storiesOf(`ebay-cta-button`, module)
    .add(`Default`, () => (
        <>
            <p><EbayCtaButton href="https://ebay.com">Take Action Now!</EbayCtaButton></p>
        </>
    ))
    .add(`Large`, () => (
        <>
            <p><EbayCtaButton href="https://ebay.com" size="large">Large Button</EbayCtaButton></p>
        </>
    ))
    .add(`Fluid`, () => (
        <>
            <p><EbayCtaButton href="https://ebay.com" fluid>100%</EbayCtaButton></p>
            <p><EbayCtaButton href="https://ebay.com" size="large" fluid>Large!</EbayCtaButton></p>
        </>
    ))
    .add(`Truncated`, () => (
        <div style={{ maxWidth: '200px' }}>
            <p><EbayCtaButton href="https://ebay.com" truncate>Wide Long Call To Action!</EbayCtaButton></p>
            <p><EbayCtaButton href="https://ebay.com" size="large" truncate>Go Big with Call To Action!</EbayCtaButton></p>
        </div>
    ))

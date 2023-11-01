import React from 'react'
import { EbayCtaButton } from '../index'

export default {
    title: 'ebay-cta-button'
}

export const Default = () => (
    <>
        <p>
            <EbayCtaButton href="https://ebay.com">Take Action Now!</EbayCtaButton>
        </p>
    </>
)

export const Large = () => (
    <>
        <p>
            <EbayCtaButton href="https://ebay.com" size="large">
                Large Button
            </EbayCtaButton>
        </p>
    </>
)

export const Fluid = () => (
    <>
        <p>
            <EbayCtaButton href="https://ebay.com" fluid>
                100%
            </EbayCtaButton>
        </p>
        <p>
            <EbayCtaButton href="https://ebay.com" size="large" fluid>
                Large!
            </EbayCtaButton>
        </p>
    </>
)

export const Truncated = () => (
    <div style={{ maxWidth: '200px' }}>
        <p>
            <EbayCtaButton href="https://ebay.com" truncate>
                Wide Long Call To Action!
            </EbayCtaButton>
        </p>
        <p>
            <EbayCtaButton href="https://ebay.com" size="large" truncate>
                Go Big with Call To Action!
            </EbayCtaButton>
        </p>
    </div>
)

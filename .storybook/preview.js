import React from 'react'
import { jsxDecorator as withJsx } from 'storybook-addon-jsx'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { EbaySvg } from '../src'

import "@ebay/skin"
import "@ebay/skin/tokens"

export const decorators = [
    withA11y,
    withJsx,
    withKnobs,
    Story => (
        <>
            <EbaySvg/>
            <Story />
        </>
    )
]

import React from 'react'
import { jsxDecorator as withJsx } from 'storybook-addon-jsx'
import { withA11y } from '@storybook/addon-a11y'
import { EbaySvg } from '../src/ebay-svg'

import "@ebay/skin"
import "@ebay/skin/tokens"
import "@ebay/skin/marketsans"

export const decorators = [
    withA11y,
    withJsx,
    Story => (
        <>
            <EbaySvg/>
            <Story />
        </>
    )
]

export const parameters = {
    layout: "centered",
    controls: { expanded: true },
    options: {
        storySort: {
            order: [
                "buttons",
                "dialogs",
                "form input",
                "graphics & icons",
                "media",
                "navigation & disclosure",
                "notices & tips",
                "progress",
                "building blocks",
            ],
        },
    },
};

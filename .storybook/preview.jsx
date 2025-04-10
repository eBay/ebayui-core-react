import React, {StrictMode} from 'react'
import { EbaySvg } from '../src/ebay-svg'

import "@ebay/skin"
import "@ebay/skin/tokens"
import "@ebay/skin/marketsans"

export default {
    decorators: [
        Story => (
            <StrictMode>
                <EbaySvg/>
                <Story/>
            </StrictMode>
        )
    ],
    parameters: {
        controls: { expanded: true },
        options: {
            storySort: {
                order: [
                    "buttons",
                    "data display",
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
    }
}

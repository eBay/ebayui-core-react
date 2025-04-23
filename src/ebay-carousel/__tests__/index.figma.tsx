import figma from '@figma/code-connect'

import React from 'react'
import {
    EbayCarousel, EbayCarouselItem
} from '.'

figma.connect(
    EbayCarousel,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=85201-94388',
    {
        example: () => (
            <EbayCarousel>
                <EbayCarouselItem>
                    Item 1
                </EbayCarouselItem>
                <EbayCarouselItem>
                    Item 2
                </EbayCarouselItem>
                <EbayCarouselItem>
                    Item 3
                </EbayCarouselItem>
            </EbayCarousel>
        )
    }
)

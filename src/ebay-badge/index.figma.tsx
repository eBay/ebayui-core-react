import figma from '@figma/code-connect'

import React from 'react'
import { EbayBadge } from '.'

figma.connect(
    EbayBadge,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=38612-44629&m=dev',
    {
        example: () => <EbayBadge number={22} />
    }
)

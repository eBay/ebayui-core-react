import figma from '@figma/code-connect'

import React from 'react'
import { EbayCalendar } from '.'

// single month
figma.connect(
    EbayCalendar,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=68524-79110&m=dev',
    {
        example: () => (
            <EbayCalendar />
        )
    }
)

// multi-month
figma.connect(
    EbayCalendar,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=68524-79119&m=dev',
    {
        example: () => (
            <EbayCalendar numMonths={2} />
        )
    }
)

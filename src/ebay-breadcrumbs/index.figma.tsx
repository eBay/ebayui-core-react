import figma from '@figma/code-connect'

import React from 'react'
import { EbayBreadcrumbs, EbayBreadcrumbItem } from '.'

figma.connect(
    EbayBreadcrumbs,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=67603-81724&m=dev',
    {
        example: () => (
            <EbayBreadcrumbs a11yHeadingText="Page navigation">
                <EbayBreadcrumbItem href="https://ebay.com">eBay</EbayBreadcrumbItem>
                <EbayBreadcrumbItem href="https://ebay.com/cars">Auto Parts and Vehicles</EbayBreadcrumbItem>
                <EbayBreadcrumbItem>Motors Parts and Accessories</EbayBreadcrumbItem>
            </EbayBreadcrumbs>
        )
    }
)

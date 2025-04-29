import figma from '@figma/code-connect'

import React from 'react'
import { EbayPagination, EbayPaginationItem } from '..'

figma.connect(
    EbayPagination,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=30164-31155',
    {
        example: () => (
            <EbayPagination
                a11yPreviousText="Previous page"
                a11yNextText="Next page"
                a11yCurrentText="Results Pagination - Page 1"
            >
                <EbayPaginationItem href="#" type="previous" disabled />
                <EbayPaginationItem href="#" current>item 1</EbayPaginationItem>
                <EbayPaginationItem href="#">item 2</EbayPaginationItem>
                <EbayPaginationItem href="#">item 3</EbayPaginationItem>
                <EbayPaginationItem href="#" type="next" />
            </EbayPagination>
        )
    }
)

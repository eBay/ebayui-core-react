import figma from '@figma/code-connect'

import React from 'react'
import { EbaySelect, EbaySelectOption } from '.'

figma.connect(
    EbaySelect,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=137211-228217&m=dev',
    {
        example: () => (
            <EbaySelect name="formSelect">
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        )
    }
)

figma.connect(
    EbaySelect,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=10031-217&m=dev',
    {
        example: () => (
            <EbaySelect name="formSelect">
                <EbaySelectOption value="1">Option 1</EbaySelectOption>
                <EbaySelectOption value="2">Option 2</EbaySelectOption>
                <EbaySelectOption value="3">Option 3</EbaySelectOption>
            </EbaySelect>
        )
    }
)

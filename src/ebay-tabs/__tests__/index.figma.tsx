import figma from '@figma/code-connect'

import React from 'react'
import { EbayTabs, EbayTab, EbayTabPanel } from '.'

figma.connect(
    EbayTabs,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=30493-33853',
    {
        example: () => (
            <EbayTabs>
                <EbayTab>Tab 1</EbayTab>
                <EbayTab>Tab 2</EbayTab>
                <EbayTab>Tab 3</EbayTab>
                <EbayTabPanel>Panel 1</EbayTabPanel>
                <EbayTabPanel>Panel 2</EbayTabPanel>
                <EbayTabPanel>Panel 3</EbayTabPanel>
            </EbayTabs>
        )
    }
)

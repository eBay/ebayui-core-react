import figma from '@figma/code-connect'

import React from 'react'
import { EbayProgressStepper, EbayProgressStep as Step } from '.'

figma.connect(
    EbayProgressStepper,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=72990-81100&m=dev',
    {
        example: () => (
            <EbayProgressStepper>
                <Step>Started</Step>
                <Step>Shipped</Step>
                <Step current>Transit</Step>
                <Step>Delivered</Step>
            </EbayProgressStepper>
        )
    }
)

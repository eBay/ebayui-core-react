import figma from '@figma/code-connect'

import React from 'react'
import {
    EbayTourtip,
    EbayTourtipContent,
    EbayTourtipFooter,
    EbayTourtipHeading,
    EbayTourtipHost
} from '.'
/* @ts-ignore: this is only to help code connect */
import { EbayButton } from '@ebay/ui-core-react/ebay-button'

figma.connect(
    EbayTourtip,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=54797-91102',
    {
        example: () => (
            <EbayTourtip a11yCloseText="close" pointer="bottom">
                <EbayTourtipHost>
                    <EbayButton>Info</EbayButton>
                </EbayTourtipHost>
                <EbayTourtipHeading type="tourtip">Title</EbayTourtipHeading>
                <EbayTourtipContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </EbayTourtipContent>
                <EbayTourtipFooter index="1 / 3">
                    <button className="fake-link">Back</button>
                    <button className="btn btn--primary">Next</button>
                </EbayTourtipFooter>
            </EbayTourtip>
        )
    }
)

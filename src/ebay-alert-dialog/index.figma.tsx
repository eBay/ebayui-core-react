import figma from '@figma/code-connect'

import React from 'react'
import { EbayAlertDialog } from '.'
/* @ts-ignore: this is only to help code connect */
import { EbayDialogHeader } from '@ebay/ui-core-react/ebay-dialog-base'

figma.connect(
    EbayAlertDialog,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=16420-100',
    {
        props: {
            Title: figma.string('Title'),
            Body: figma.string('Body')
        },
        example: ({ Body, Title }) => (
            <EbayAlertDialog open a11yCloseText="Close" confirmText="Confirm">
                <EbayDialogHeader>{Title}</EbayDialogHeader>
                <p>{Body}</p>
            </EbayAlertDialog>
        )
    }
)

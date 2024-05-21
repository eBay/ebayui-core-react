import figma from '@figma/code-connect'

import React from 'react'
import { EbaySnackbarDialog, EbaySnackbarDialogAction } from '.'

// no action needed
figma.connect(
    EbaySnackbarDialog,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=15902-21578&m=dev',
    {
        variant: { 'action': 'none' },
        props: {
            Body: figma.string('Body')
        },
        example: ({ Body }) => (
            <EbaySnackbarDialog open>
                <p>{Body}</p>
            </EbaySnackbarDialog>
        )
    }
)


// has action set
figma.connect(
    EbaySnackbarDialog,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Design-System?node-id=15902-21578&m=dev',
    {
        props: {
            Body: figma.string('Body'),
            ButtonTitle: figma.string('Button title')
        },
        example: ({ Body, ButtonTitle }) => (
            <EbaySnackbarDialog open>
                <p>{Body}</p>
                <EbaySnackbarDialogAction accessKey="U" aria-label="Undo - Access Key: U">
                    {ButtonTitle}
                </EbaySnackbarDialogAction>
            </EbaySnackbarDialog>
        )
    }
)

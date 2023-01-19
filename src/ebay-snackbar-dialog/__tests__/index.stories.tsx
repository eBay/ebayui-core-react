import React, { useState } from 'react'
import { EbayButton } from '../../ebay-button'
import { EbaySnackbarDialog, EbaySnackbarDialogAction } from '../index'
import { storiesOf } from '@storybook/react'

storiesOf('ebay-snackbar-dialog', module)
    .add('Default', () => {
        const TestComponent = () => {
            const [open, setOpen] = useState(false)

            return (
                <>
                    <EbayButton onClick={() => setOpen(!open)}>Open Snackbar</EbayButton>
                    <EbaySnackbarDialog open={open} onClose={() => setOpen(false)}>
                        <p>1 item deleted from watch list.</p>
                    </EbaySnackbarDialog>
                </>
            )
        }

        return <><TestComponent /></>
    })
    .add('With action', () => {
        const TestComponent = () => {
            const [open, setOpen] = useState(false)

            return (
                <>
                    <EbayButton onClick={() => setOpen(!open)}>Open Snackbar</EbayButton>
                    <EbaySnackbarDialog open={open} onClose={() => setOpen(false)}>
                        <p>1 item deleted from watch list.</p>
                        <EbaySnackbarDialogAction accessKey="U">Undo</EbaySnackbarDialogAction>
                    </EbaySnackbarDialog>
                </>
            )
        }

        return <><TestComponent /></>
    })
    .add('With column layout', () => {
        const TestComponent = () => {
            const [open, setOpen] = useState(false)

            return (
                <>
                    <EbayButton onClick={() => setOpen(!open)}>Open Snackbar</EbayButton>
                    <EbaySnackbarDialog open={open} onClose={() => setOpen(false)} layout="column">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <EbaySnackbarDialogAction accessKey="U">Undo</EbaySnackbarDialogAction>
                    </EbaySnackbarDialog>
                </>
            )
        }

        return <><TestComponent /></>
    })

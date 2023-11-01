import React, { useState } from 'react'
import { EbayButton } from '../../ebay-button'
import { EbaySnackbarDialog, EbaySnackbarDialogAction } from '../index'

export default {
    title: 'ebay-snackbar-dialog'
}

export const Default = () => {
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

    return (
        <>
            <TestComponent />
        </>
    )
}

export const WithAction = () => {
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

    return (
        <>
            <TestComponent />
        </>
    )
}

WithAction.story = {
    name: 'With action'
}

export const WithColumnLayout = () => {
    const TestComponent = () => {
        const [open, setOpen] = useState(false)

        return (
            <>
                <EbayButton onClick={() => setOpen(!open)}>Open Snackbar</EbayButton>
                <EbaySnackbarDialog open={open} onClose={() => setOpen(false)} layout="column">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                    <EbaySnackbarDialogAction accessKey="U">Undo</EbaySnackbarDialogAction>
                </EbaySnackbarDialog>
            </>
        )
    }

    return (
        <>
            <TestComponent />
        </>
    )
}

WithColumnLayout.story = {
    name: 'With column layout'
}

import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import { EbayAlertDialog } from '../index';
import { EbayDialogHeader } from '../../ebay-dialog-base'
import { action } from '../../../.storybook/action'

const story = {
    component: EbayAlertDialog,
    title: 'dialogs/ebay-alert-dialog'
} satisfies Meta<typeof EbayAlertDialog>;

const textParagraph = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.</p>

export const _Default: Story<typeof EbayAlertDialog> = () => {
    const [open, setOpen] = useState(true);
    const close = () => setOpen(false);
    return (
        <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayAlertDialog
                open={open}
                onOpen={() => action('onOpen')()}
                onConfirm={() => {
                    action('onConfirm')()
                    close()
                }}
                confirmText="Confirm"
                a11yCloseText="Close"
            >
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p><a href="http://www.ebay.com">www.ebay.com</a></p>
             </EbayAlertDialog>
        </div>
    );
};

export const _WithAnimation: Story<typeof EbayAlertDialog> = () => {
    const [open, setOpen] = useState(false)
    const close = () => setOpen(false)
    return (
        <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayAlertDialog open={open} onConfirm={close} confirmText="Confirm" animated a11yCloseText="Close">
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            </EbayAlertDialog>
        </div>
    )
};


export default story

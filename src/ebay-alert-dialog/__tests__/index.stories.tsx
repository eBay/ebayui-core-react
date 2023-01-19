import React, { useState } from 'react'
import { EbayAlertDialog } from '../index';
import { EbayDialogHeader } from '../../ebay-dialog-base'

const story: any = {
    component: EbayAlertDialog,
    title: 'ebay-alert-dialog'
};

const textParagraph = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.</p>

export const _Default = () => {
    const [open, setOpen] = useState(true);
    const close = () => setOpen(false);
    return (
        <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayAlertDialog open={open} onConfirm={close} confirmText="Confirm">
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p><a href="http://www.ebay.com">www.ebay.com</a></p>
             </EbayAlertDialog>
        </div>
    );
};

export const _WithAnimation= () => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    return (
        <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayAlertDialog open={open} onConfirm={close} confirmText="Confirm" animated>
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p><a href="http://www.ebay.com">www.ebay.com</a></p>
             </EbayAlertDialog>
        </div>
    );
};


export default story;

import React, { useState } from 'react'
import { EbayConfirmDialog } from '../index';
import { EbayDialogHeader } from '../../ebay-dialog-base'

const story: any = {
    component: EbayConfirmDialog,
    title: 'ebay-confirm-dialog'
};


export const _Default = () => {
    const [open, setOpen] = useState(true);
const close = () => setOpen(false);
    return (
        <div>
        <button className="btn btn--secondary" onClick={() => setOpen(!open)} >
            Open Dialog
        </button>
        <p>Some outside content...</p>
        <EbayConfirmDialog
            open={open}
            onConfirm={close}
            onReject={close}
            confirmText="Cancel"
            rejectText="Delete"
        >
            <EbayDialogHeader>Delete Address?</EbayDialogHeader>
            <p>You will permanently lose this address.</p>
        </EbayConfirmDialog>
    </div>
)};

export const _WithAnimation = () => {
    const [open, setOpen] = useState(false);
const close = () => setOpen(false);
    return (
        <div>
        <button className="btn btn--secondary" onClick={() => setOpen(!open)} >
            Open Dialog
        </button>
        <p>Some outside content...</p>
        <EbayConfirmDialog open={open} onConfirm={close} onReject={close} confirmText="Cancel"  rejectText="Delete" animated>
            <EbayDialogHeader>Delete Address?</EbayDialogHeader>
            <p>You will permanently lose this address.</p>
        </EbayConfirmDialog>
    </div>
)};

export default story;

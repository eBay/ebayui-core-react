import React, { useState } from 'react'
import { EbayDialogHeader, EbayDialogFooter, EbayLightboxDialog, EbayButton, EbayCheckbox, EbayLabel } from '../..'

const story: any = {
    component: EbayLightboxDialog,
    title: 'ebay-lightbox-dialog'
};

const textParagraph = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.</p>

export const _Default = () => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    return (
        <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayLightboxDialog open={open} onClose={close}>
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p><a href="http://www.ebay.com">www.ebay.com</a></p>
                <EbayDialogFooter>
                    <EbayButton priority="primary" onClick={close}>OK</EbayButton>
                    <EbayButton onClick={close}>Cancel</EbayButton>
                </EbayDialogFooter></EbayLightboxDialog>
        </div>
    );
};

export const _AlwaysOpened = () => (
    <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog open>
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </EbayLightboxDialog>
    </div>
);

export const _ScrollingContent = () => (
    <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog open>
            <EbayDialogHeader>Heading</EbayDialogHeader>
            {textParagraph}{textParagraph}{textParagraph}{textParagraph}{textParagraph}
            {textParagraph}{textParagraph}{textParagraph}{textParagraph}{textParagraph}
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </EbayLightboxDialog>
    </div>
);

export const _MiniDialog = () => (
    <div>
        <p>Some outside content...</p>
        <EbayLightboxDialog mode="mini" open>
            <EbayDialogHeader/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </EbayLightboxDialog>
    </div>
);

export const _DisableDialogClose = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [dialogCloseable, setDialogCloseable] = useState(true);
    const closeDialog = () => {
        if (dialogCloseable) {
            setShowDialog(false);
        }
    }

    return (
        <div>
            <EbayButton onClick={() => setShowDialog(!showDialog)}>Show Dialog</EbayButton>

            <EbayLightboxDialog open={showDialog} onClose={closeDialog}>
                <EbayDialogHeader>Heading</EbayDialogHeader>

                <p>Unselect the following checkbox to prevent user to close the dialog</p>
                <EbayCheckbox id="checkbox-closeable" checked={dialogCloseable} onChange={() => setDialogCloseable(!dialogCloseable)}>
                    <EbayLabel>Enable closing dialog</EbayLabel>
                </EbayCheckbox>

                <p>
                    Normally, the dialog can be closed by either:
                    <ul>
                        <li>clicking [X] icon on top of the dialog</li>
                        <li>clicking OK button</li>
                        <li>clicking the overlay or area outside the dialog</li>
                        <li>Press Esc key on keyboard</li>
                    </ul>
                </p>

                <EbayDialogFooter>
                    <EbayButton onClick={closeDialog}>OK</EbayButton>
                </EbayDialogFooter></EbayLightboxDialog>
        </div>
    );
};

export const _WithAnimation = () => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    return (
        <div>
            <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
                Open Dialog
            </button>
            <p>Some outside content...</p>
            <EbayLightboxDialog open={open} onClose={close} animated>
                <EbayDialogHeader>Heading</EbayDialogHeader>
                {textParagraph}
                <p><a href="http://www.ebay.com">www.ebay.com</a></p>
                <EbayDialogFooter>
                    <EbayButton priority="primary" onClick={close}>OK</EbayButton>
                    <EbayButton onClick={close}>Cancel</EbayButton>
                </EbayDialogFooter></EbayLightboxDialog>
        </div>
    );
};

export default story;

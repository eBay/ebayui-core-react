import React, { useState } from 'react'
import { EbayFullscreenDialog } from '../index'
import { EbayDialogFooter, EbayDialogHeader } from '../../ebay-dialog-base'

const story: any = {
  component: EbayFullscreenDialog,
  title:'ebay-fullscreen-dialog'
};

export const _Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
        Open Dialog
      </button>
        <p>Some outside content...</p>
      <EbayFullscreenDialog open={open} onClose={() => setOpen(false)}>
        <EbayDialogHeader>Heading</EbayDialogHeader>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
      </EbayFullscreenDialog>
    </div>
  );
};

export const _AlwaysOpened = () => (
    <div>
        <p>Some outside content...</p>
        <EbayFullscreenDialog open={true} a11yCloseText="Close dialog">
            <EbayDialogHeader>Heading</EbayDialogHeader>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <EbayDialogFooter>©2021 eBay</EbayDialogFooter>
        </EbayFullscreenDialog>
    </div>
);

export const _WithAnimation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button className="btn btn--secondary" onClick={() => setOpen(!open)}>
        Open Dialog
      </button>
        <p>Some outside content...</p>
      <EbayFullscreenDialog open={open} onClose={() => setOpen(false)} animated>
        <EbayDialogHeader>Heading</EbayDialogHeader>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
      </EbayFullscreenDialog>
    </div>
  );
};


export default story;

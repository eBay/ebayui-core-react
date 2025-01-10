import React, { createRef, useState } from 'react'
import { EbayButton } from '../../ebay-button'
import { action } from '@storybook/addon-actions'
import { EbayDialogFooter, EbayDialogHeader } from '../../ebay-dialog-base'
import { EbayDrawerDialog } from '../index'
import { StoryFn, Meta } from '@storybook/react'

const story: Meta<typeof EbayDrawerDialog> = {
    component: EbayDrawerDialog,
    title: 'dialogs/ebay-drawer-dialog'
}

const numbers = Array(100)
    .fill(1)
    .map((x, i) => <p key={i}>{i + 1}</p>)

export const _Default: StoryFn<typeof EbayDrawerDialog> = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            <EbayDrawerDialog
                open={open}
                onOpen={action('onOpen')}
                onClose={() => {
                    action('onClose')()
                    setOpen(false)
                }}
                onExpanded={action('onExpanded')}
                onCollapsed={action('onCollapsed')}
                a11yCloseText="Close"
                a11yMaximizeText="Maximize"
                a11yMinimizeText="Minimize"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </p>
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayDrawerDialog>
        </>
    )
}

export const _Opened: StoryFn<typeof EbayDrawerDialog> = () => (
    <>
        <EbayDrawerDialog
            open
            onClose={action('Close button clicked.')}
            a11yCloseText="Close drawer"
            a11yMaximizeText="Maximize"
            a11yMinimizeText="Minimize"
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
                <a href="http://www.ebay.com">www.ebay.com</a>
            </p>
        </EbayDrawerDialog>
    </>
)

export const _WithoutHandle: StoryFn<typeof EbayDrawerDialog> = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            <EbayDrawerDialog
                noHandle
                open={open}
                onClose={() => setOpen(false)}
                a11yMaximizeText="Maximize"
                a11yMinimizeText="Minimize"
                a11yCloseText="Close"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </p>
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayDrawerDialog>
        </>
    )
}

export const _WithoutHandleAndCloseButton: StoryFn<typeof EbayDrawerDialog> = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            <EbayDrawerDialog noHandle buttonPosition="hidden" open={open} onClose={() => setOpen(false)}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </p>
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayDrawerDialog>
        </>
    )
}

export const _LotsOfContent: StoryFn<typeof EbayDrawerDialog> = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            {numbers}
            <EbayDrawerDialog
                open={open}
                onClose={() => setOpen(false)}
                a11yMaximizeText="Maximize"
                a11yMinimizeText="Minimize"
                a11yCloseText="Close"
            >
                <EbayDialogHeader>Scrollable content</EbayDialogHeader>
                {numbers}
                <EbayDialogFooter>
                    <EbayButton onClick={() => setOpen(false)}>Close</EbayButton>
                </EbayDialogFooter>
            </EbayDrawerDialog>
        </>
    )
}

export const _CustomFocus: StoryFn<typeof EbayDrawerDialog> = () => {
    const [open, setOpen] = useState(false)
    const focusRef = createRef() as any

    return (
        <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            <EbayDrawerDialog
                open={open}
                focus={focusRef}
                onClose={() => setOpen(false)}
                a11yMaximizeText="Maximize"
                a11yMinimizeText="Minimize"
                a11yCloseText="Close"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </p>
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
                <EbayDialogFooter>
                    <EbayButton ref={focusRef} onClick={() => setOpen(false)}>
                        Close
                    </EbayButton>
                </EbayDialogFooter>
            </EbayDrawerDialog>
        </>
    )
}

export const _WithoutAnimation: StoryFn<typeof EbayDrawerDialog> = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            <EbayDrawerDialog
                open={open}
                onClose={() => setOpen(false)}
                animated={false}
                a11yMaximizeText="Maximize"
                a11yMinimizeText="Minimize"
                a11yCloseText="Close"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </p>
                <p>
                    <a href="http://www.ebay.com">www.ebay.com</a>
                </p>
            </EbayDrawerDialog>
        </>
    )
}

export const _TriggerExpanded: StoryFn<typeof EbayDrawerDialog> = () => {
    const [open, setOpen] = useState(false)
    const [expanded, setExpanded] = useState(false)

    return (
        <>
            <EbayButton onClick={() => setOpen(!open)}>Open Drawer</EbayButton>
            <EbayDrawerDialog
                open={open}
                onClose={() => setOpen(false)}
                expanded={expanded}
                a11yMaximizeText="Maximize"
                a11yMinimizeText="Minimize"
                a11yCloseText="Close"
            >
                <p>Trigger Dialog Expanded programmatically.</p>

                <EbayButton onClick={() => setExpanded(!expanded)} priority="secondary">
                    {expanded ? 'Collapse Drawer' : 'Expand Drawer'}
                </EbayButton>
            </EbayDrawerDialog>
        </>
    )
}

export default story

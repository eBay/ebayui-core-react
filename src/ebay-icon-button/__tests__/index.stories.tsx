import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import { EbayIconButton } from '../index'

storiesOf(`ebay-icon-button`, module)
    .add(`Default`, () => (
        <>
            <p>
                <EbayIconButton
                    onClick={(e: React.MouseEvent) => action(`onClick`)(e)}
                    onFocus={(e: React.FocusEvent) => action(`onFocus`)(e)}
                    onBlur={(e: React.FocusEvent) => action(`onBlur`)(e)}
                    onEscape={(e: React.KeyboardEvent) => action(`onEscape`)(e)}
                    icon="menu20"
                    aria-label="Menu"
                />
            </p>
            <p><EbayIconButton href="https://ebay.com" icon="settings16" aria-label="Settings" /></p>
        </>
    ))
    .add(`With Badges`, () => (
        <>
            <p>
                <EbayIconButton
                    icon="menu20"
                    aria-label="Menu"
                    badgeNumber={1}
                    badgeAriaLabel="new feature available"
                />
            </p>
            <p>
                <EbayIconButton
                    href="https://ebay.com"
                    icon="cart16"
                    badgeNumber={3}
                    badgeAriaLabel="3 items in your cart"
                aria-label="Cart"
            /></p>
            <p>
                <EbayIconButton
                    href="https://ebay.com"
                    icon="chat16"
                    badgeNumber={99}
                    badgeAriaLabel="99 unread messages"
                aria-label="Chat"
            /></p>
        </>
    ))
    .add(`Transparent`, () => (
        <>
            <p><EbayIconButton onClick={action(`clicked`)} icon="menu20" transparent aria-label="Menu" /></p>
        </>
    ))

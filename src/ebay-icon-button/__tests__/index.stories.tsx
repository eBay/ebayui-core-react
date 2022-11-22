import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import { EbayIconButton } from '../../index'

storiesOf(`ebay-icon-button`, module)
    .add(`Default`, () => (
        <>
            <p><EbayIconButton onClick={action(`clicked`)} icon="menu" aria-label="menu" /></p>
            <p><EbayIconButton href="https://ebay.com" icon="settings" aria-label="settings" /></p>
        </>
    ))
    .add(`With Badges`, () => (
        <>
            <p>
                <EbayIconButton
                    icon="menu"
                    aria-label="menu"
                    badgeNumber={1}
                    badgeAriaLabel="new feature available"
                />
            </p>
            <p>
                <EbayIconButton
                    href="https://ebay.com"
                    icon="cart"
                    aria-label="cart"
                    badgeNumber={3}
                    badgeAriaLabel="3 items in your cart"
                />
            </p>
            <p>
                <EbayIconButton
                    href="https://ebay.com"
                    icon="chatLarge"
                    aria-label="chat"
                    badgeNumber={99}
                    badgeAriaLabel="99 unread messages"
                />
            </p>
        </>
    ))
    .add(`Transparent`, () => (
        <>
            <p><EbayIconButton onClick={action(`clicked`)} icon="menu" transparent aria-label="menu" /></p>
        </>
    ))

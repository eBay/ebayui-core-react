import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import { EbayIconButton } from '../../index'

storiesOf(`ebay-icon-button`, module)
    .add(`Default`, () => (
        <>
            <p><EbayIconButton onClick={action(`clicked`)} icon="menu" /></p>
            <p><EbayIconButton href="https://ebay.com" icon="settings" /></p>
        </>
    ))
    .add(`With Badges`, () => (
        <>
            <p><EbayIconButton icon="menu" badgeNumber={1} badgeAriaLabel="new feature available"/></p>
            <p><EbayIconButton href="https://ebay.com" icon="cart" badgeNumber={3} badgeAriaLabel="3 items in your cart"/></p>
            <p><EbayIconButton href="https://ebay.com" icon="chatLarge" badgeNumber={99} badgeAriaLabel="99 unread messages"/></p>
        </>
    ))
    .add(`Transparent`, () => (
        <>
            <p><EbayIconButton onClick={action(`clicked`)} icon="menu" transparent /></p>
        </>
    ))

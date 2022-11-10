import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import {
    EbayFakeMenuButton,
    EbayFakeMenuButtonItem as Item,
    EbayFakeMenuButtonSeparator as Separator,
    EbayFakeMenuButtonLabel
} from '..'

storiesOf('ebay-fake-menu-button', module)
    .add('Default', () => (<>
        <EbayFakeMenuButton text="eBay Menu">
            <Item href="http://ebay.com">eBay US</Item>
            <Item href="http://ebay.de">eBay DE</Item>
            <Item href="http://ebay.co.uk">eBay UK</Item>
        </EbayFakeMenuButton>
    </>))
    .add('With Separator', () => (<>
        <EbayFakeMenuButton
            text="Complex menu"
            onExpand={action('Menu expanded!')}
            onCollapse={action('Menu collapsed!')}
        >
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Separator/>
            <Item>item 3 (disabled)</Item>
            <Item href="http://ebay.com">item 4</Item>
            <Item href="http://ebay.com">item 5</Item>
            <Separator/>
            <Item href="http://ebay.com" onClick={action('Open login popup!')}>Log in</Item>
        </EbayFakeMenuButton>
    </>))
    .add('Without Text', () => (<>
        <EbayFakeMenuButton a11yText="eBay Menu without text">
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>))
    .add('Borderless', () => (<>
        <EbayFakeMenuButton text="eBay Menu without borders!" borderless>
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>))
    .add('With Custom Label', () => (<>
        <EbayFakeMenuButton>
            <EbayFakeMenuButtonLabel>
                <span style={{
                    background: 'url(https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png)',
                    display: 'inline-block',
                    height: '20px',
                    marginRight: '8px',
                    verticalAlign: 'middle',
                    width: '26px'
                }} /> Fun with flags!
            </EbayFakeMenuButtonLabel>
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>))
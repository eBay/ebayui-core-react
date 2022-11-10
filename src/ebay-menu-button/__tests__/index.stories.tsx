import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import {
    EbayMenuButton,
    EbayMenuButtonItem as Item,
    EbayMenuButtonSeparator as Separator,
    EbayMenuButtonLabel
} from '..'

storiesOf('ebay-menu-button', module)
    .add('Default', () => (<>
        <EbayMenuButton text="eBay Menu">
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>))
    .add('With Separator', () => (<>
        <EbayMenuButton
            text="Complex menu"
            onExpand={action('Menu expanded!')}
            onCollapse={action('Menu collapsed!')}
        >
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Separator/>
            <Item>item 3</Item>
            <Item>item 4</Item>
            <Item>item 5</Item>
            <Separator/>
            <Item onClick={action('Open login popup!')}>Log in</Item>
        </EbayMenuButton>
    </>))
    .add('Without Text', () => (<>
        <EbayMenuButton a11yText="eBay Menu without text">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>))
    .add('Borderless', () => (<>
        <EbayMenuButton text="eBay Menu without borders!" borderless>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>))
    .add('With Custom Label', () => (<>
        <EbayMenuButton>
            <EbayMenuButtonLabel>
                <span style={{
                    background: 'url(https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png)',
                    display: 'inline-block',
                    height: '20px',
                    marginRight: '8px',
                    verticalAlign: 'middle',
                    width: '26px'
                }} /> Fun with flags!
            </EbayMenuButtonLabel>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>))
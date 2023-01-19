import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import {
    EbayFakeMenuButton,
    EbayFakeMenuButtonItem as Item,
    EbayFakeMenuButtonSeparator as Separator,
    EbayFakeMenuButtonLabel,
    EbayIcon
} from '../../index'

storiesOf('ebay-fake-menu-button', module)
    .add('Default', () => (<>
        <EbayFakeMenuButton text="eBay Menu">
            <Item href="http://ebay.com">eBay US</Item>
            <Item href="http://ebay.de">eBay DE</Item>
            <Item href="http://ebay.co.uk">eBay UK</Item>
        </EbayFakeMenuButton>
    </>))
    .add('Expanded', () => (<>
        <EbayFakeMenuButton expanded text="eBay Menu">
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>))
    .add('Disabled', () => (<>
        <EbayFakeMenuButton text="eBay Menu" disabled>
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>))
    //
    // Custom button stories
    //
    .add('With icon', () => (<>
        <EbayFakeMenuButton text="Settings">
            <EbayIcon name="settings" />
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>))
    .add('Without toggle icon', () => (<>
        <EbayFakeMenuButton noToggleIcon text="Menu">
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>))
    .add('Variants', () => (<>
        <h3>Button</h3>
        <EbayFakeMenuButton variant="button" text="Button" a11yText="Menu inside the form">
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>

        <h3>Form</h3>
        <EbayFakeMenuButton variant="form" text="Form" a11yText="Menu inside the form">
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>

        <h3>Overflow</h3>
        <EbayFakeMenuButton variant="overflow" a11yText="Menu">
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>))
    .add('Priorities', () => (<>
        <EbayFakeMenuButton variant="button" priority="primary" text="Primary" a11yText="Menu">
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
        <EbayFakeMenuButton variant="button" priority="tertiary" text="Tertiary" a11yText="Menu">
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
    //
    // Custom menu stories
    //
    .add('With Separator', () => (<>
        <EbayFakeMenuButton
            text="Complex menu"
            onExpand={action('Menu expanded!')}
            onCollapse={action('Menu collapsed!')}
        >
            <Item href="http://ebay.com">Link 1</Item>
            <Item href="http://ebay.com" current>Current link</Item>
            <Separator/>
            <Item disabled>Link 3 (disabled)</Item>
            <Item href="http://ebay.com">Link 4</Item>
            <Item href="http://ebay.com">Link 5</Item>
            <Separator/>
            <Item href="http://ebay.com" onClick={action('Open login popup!')}>Log in</Item>
        </EbayFakeMenuButton>
    </>))
    .add('Fixed Width', () => (<>
        <EbayFakeMenuButton text="Menu has a button width" fixWidth>
            <Item href="http://ebay.com">item 1 that has very very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>))
    .add('Reverse (Menu grows to the left)', () => (<div style={{ marginLeft: '100px' }}>
        <EbayFakeMenuButton text="Menu grows to the left" reverse>
            <Item href="http://ebay.com">item 1 that has very very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </div>))

import React from 'react'
import { Meta, Story } from '@storybook/react'
import { action } from '../../../.storybook/action'
import { EbayIcon } from '../../ebay-icon'
import {
    EbayFakeMenuButton,
    EbayFakeMenuButtonItem as Item,
    EbayFakeMenuButtonSeparator as Separator,
    EbayFakeMenuButtonLabel
} from '../index'

const meta: Meta<typeof EbayFakeMenuButton> = {
    component: EbayFakeMenuButton,
    title: 'buttons/ebay-fake-menu-button'
}

export default meta

export const Default: Story<typeof EbayFakeMenuButton> = () => (
    <>
        <EbayFakeMenuButton
            text="eBay Menu"
            onExpand={() => action('onExpand')()}
            onCollapse={() => action('onCollapse')()}
            onKeyDown={(e) => action('onKeyDown')(e)}
            onMouseDown={(e, props) => action('onMouseDown')(e, props)}
            onSelect={(e, props) => action('onSelect')(e, props)}
        >
            <Item href="http://ebay.com" onClick={(e) => e.preventDefault()}>
                eBay US
            </Item>
            <Item href="http://ebay.de" onClick={(e) => e.preventDefault()}>
                eBay DE
            </Item>
            <Item href="http://ebay.co.uk" onClick={(e) => e.preventDefault()}>
                eBay UK
            </Item>
        </EbayFakeMenuButton>
    </>
)

export const Expanded: Story<typeof EbayFakeMenuButton> = () => (
    <>
        <EbayFakeMenuButton expanded text="eBay Menu">
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>
)

export const Disabled: Story<typeof EbayFakeMenuButton> = () => (
    <>
        <EbayFakeMenuButton text="eBay Menu" disabled>
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>
)

export const WithIcon: Story<typeof EbayFakeMenuButton> = () => (
    <>
        <EbayFakeMenuButton text="Settings">
            <EbayIcon name="settings16" />
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>
)

export const WithoutToggleIcon: Story<typeof EbayFakeMenuButton> = () => (
    <>
        <EbayFakeMenuButton noToggleIcon text="Menu">
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>
)

export const Variants: Story<typeof EbayFakeMenuButton> = () => (
    <>
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
    </>
)

export const Priorities: Story<typeof EbayFakeMenuButton> = () => (
    <>
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
    </>
)

export const Borderless: Story<typeof EbayFakeMenuButton> = () => (
    <>
        <EbayFakeMenuButton text="eBay Menu without borders!" borderless>
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>
)

export const WithCustomLabel: Story<typeof EbayFakeMenuButton> = () => (
    <>
        <EbayFakeMenuButton>
            <EbayFakeMenuButtonLabel>
                <span
                    style={{
                        background: 'url(https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png)',
                        display: 'inline-block',
                        height: '20px',
                        marginRight: '8px',
                        verticalAlign: 'middle',
                        width: '26px'
                    }}
                />{' '}
                Fun with flags!
            </EbayFakeMenuButtonLabel>
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>
)

export const WithSeparator: Story<typeof EbayFakeMenuButton> = () => (
    <>
        <EbayFakeMenuButton
            text="Complex menu"
            onExpand={action('Menu expanded!')}
            onCollapse={action('Menu collapsed!')}
        >
            <Item href="http://ebay.com">Link 1</Item>
            <Item href="http://ebay.com" current>
                Current link
            </Item>
            <Separator />
            <Item disabled>Link 3 (disabled)</Item>
            <Item href="http://ebay.com">Link 4</Item>
            <Item href="http://ebay.com">Link 5</Item>
            <Separator />
            <Item href="http://ebay.com" onClick={action('Open login popup!')}>
                Log in
            </Item>
        </EbayFakeMenuButton>
    </>
)

export const FixedWidth: Story<typeof EbayFakeMenuButton> = () => (
    <>
        <EbayFakeMenuButton text="Menu has a button width" fixWidth>
            <Item href="http://ebay.com">item 1 that has very very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>
)

export const ReverseMenuGrowsToTheLeft: Story<typeof EbayFakeMenuButton> = () => (
    <div style={{ marginLeft: '100px' }}>
        <EbayFakeMenuButton text="Menu grows to the left" reverse>
            <Item href="http://ebay.com">item 1 that has very very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </div>
)

ReverseMenuGrowsToTheLeft.story = {
    name: 'Reverse (Menu grows to the left)'
}

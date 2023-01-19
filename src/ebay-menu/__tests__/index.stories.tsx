import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '../../../.storybook/action'
import { EbayMenu, EbayMenuItem as Item, EbayMenuSeparator as Separator } from '../index'
import { EbayIcon } from '../..'

storiesOf('ebay-menu', module)
    .add('Default', () => (<>
        <EbayMenu
            onClick={action('click')}
            onKeyDown={action('key down')}
        >
            <Item>Item 1 that has very long text</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
        </EbayMenu>
    </>))
    .add('Radio', () => (<>
        <h3>EbayMenu.checked=1</h3>
        <EbayMenu
            type="radio"
            checked={1}
            onKeyDown={action('key down')}
            onChange={action('change')}
            onSelect={action('select')}
        >
            <Item>item 0</Item>
            <Item>item 1</Item>
            <Item>item 2</Item>
        </EbayMenu>

        <h3>EbayMenuItem[0].checked=true</h3>
        <EbayMenu
            type="radio"
            onKeyDown={action('key down')}
            onChange={action('change')}
            onSelect={action('select')}
        >
            <Item checked>item 0</Item>
            <Item>item 1</Item>
            <Item>item 2</Item>
        </EbayMenu>


        <h3>EbayMenu.checked=1, EbayMenuItem[0].checked=true</h3>
        <EbayMenu
            type="radio"
            checked={1}
            onKeyDown={action('key down')}
            onChange={action('change')}
            onSelect={action('select')}
        >
            <Item checked>item 0</Item>
            <Item>item 1</Item>
            <Item>item 2</Item>
        </EbayMenu>
    </>))
    .add('Checkbox', () => (<>
        <EbayMenu
            type="checkbox"
            onKeyDown={action('key down')}
            onChange={action('change')}
            onSelect={action('select')}
        >
            <Item value="item 1" checked>item 1</Item>
            <Item value="item 2">item 2</Item>
            <Item value="item 3" checked>item 3</Item>
        </EbayMenu>
    </>))
    .add('With Separator', () => (<>
        <EbayMenu>
            <Item>item 1 that has very long text</Item>
            <Item>Item 2</Item>
            <Separator />
            <Item>Item 3</Item>
            <Item>Item 4</Item>
            <Item>Item 5</Item>
        </EbayMenu>
    </>))
    .add('With Disabled Item', () => (<>
        <EbayMenu>
            <Item>item 1 that has very long text</Item>
            <Item disabled>Item 2</Item>
            <Item>Item 3</Item>
        </EbayMenu>
    </>))
    .add('With Badges', () => (<>
        <EbayMenu>
            <Item badgeNumber={5} badgeAriaLabel="item 1 (5 unread items)">item 1</Item>
            <Item badgeNumber={23} aria-label="item 2 (23 unread items)">item 2</Item>
            <Item>item 3</Item>
        </EbayMenu>
    </>))
    .add('With Icons', () => (<>
        <EbayMenu>
            <Item>
                <EbayIcon name="confirmation" style={{ marginRight: '8px' }} /> Confirmed
            </Item>
            <Item value="item 2">
                <EbayIcon name="attention" style={{ marginRight: '8px' }} /> Not yet confirmed
            </Item>
            <Item value="item 3">
                <EbayIcon name="attention" style={{ marginRight: '8px' }} /> Not yet confirmed
            </Item>
        </EbayMenu>
    </>))

import React from 'react'
import { action } from '../../../.storybook/action'
import {
    EbayFakeMenu,
    EbayFakeMenuItem as Item,
    EbayFakeMenuSeparator as Separator
} from '../index'
import { EbayMenu } from '../../ebay-menu'

export default {
    title: 'ebay-fake-menu'
}

export const Default = () => (
    <>
        <EbayFakeMenu
            onClick={(event) => {
                action('click')('MENU click event prevented')
                event.preventDefault()
            }}
            onKeyDown={(event, props) => action('onKeyDown')(event, props)}
            onSelect={(event, props) => {
                action('onSelect')(event, props)
                event.preventDefault()
            }}
        >
            <Item
                href="#"
                onClick={(event) => {
                    action('click')('ITEM click event prevented')
                    event.preventDefault()
                }}
            >
                Item 1 that has very long text
            </Item>
            <Item href="#" current>
                Current page
            </Item>
            <Item href="#">Item 3</Item>
        </EbayFakeMenu>
    </>
)

export const WithoutTickIcon = () => (
    <>
        <EbayFakeMenu
            itemMatchesUrl={false}
            onClick={(event) => {
                action('click')('MENU click event prevented')
                event.preventDefault()
            }}
            onKeyDown={action('key down')}
            onSelect={(event) => {
                action('select')('event prevented')
                event.preventDefault()
            }}
        >
            <Item
                href="#"
                onClick={(event) => {
                    action('click')('ITEM click event prevented')
                    event.preventDefault()
                }}
            >
                Item 1 that has very long text
            </Item>
            <Item href="#" current>
                Current page
            </Item>
            <Item href="#">Item 3</Item>
        </EbayFakeMenu>
    </>
)

WithoutTickIcon.story = {
    name: 'Without tick icon'
}

export const WithSeparator = () => (
    <>
        <EbayFakeMenu>
            <Item href="#">item 1 that has very long text</Item>
            <Item href="#">Item 2</Item>
            <Separator />
            <Item href="#">Item 3</Item>
            <Item href="#">Item 4</Item>
            <Item href="#">Item 5</Item>
        </EbayFakeMenu>
    </>
)

export const WithDisabledItem = () => (
    <>
        <EbayFakeMenu>
            <Item href="#">item 1 that has very long text</Item>
            <Item>Item without href</Item>
            <Item disabled>Disabled Item</Item>
            <Item href="#">Item 3</Item>
        </EbayFakeMenu>
    </>
)

export const MixedWithButtons = () => (
    <>
        <EbayFakeMenu>
            <Item href="#">Link 1</Item>
            <Item type="button">Button</Item>
            <Item href="#">Link 2</Item>
            <Item type="button" disabled>Disabled Button</Item>
        </EbayFakeMenu>
    </>
)

export const WithBadges = () => (
    <>
        <EbayFakeMenu>
            <Item href="" badgeNumber={5} badgeAriaLabel="item 1 (5 unread items)">
                item 1
            </Item>
            <Item href="" badgeNumber={23} aria-label="item 2 (23 unread items)">
                item 2
            </Item>
            <Item href="">item 3</Item>
        </EbayFakeMenu>
    </>
)

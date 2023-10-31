import React from 'react'
import { action } from '../../../.storybook/action'
import {
    EbayFakeMenu,
    EbayFakeMenuItem as Item,
    EbayFakeMenuSeparator as Separator
} from '../index'

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
            <Item disabled>Item 2</Item>
            <Item href="#">Item 3</Item>
        </EbayFakeMenu>
    </>
)

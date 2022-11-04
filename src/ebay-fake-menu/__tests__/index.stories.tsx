import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '../../../.storybook/action'
import { EbayFakeMenu, EbayFakeMenuItem as Item, EbayFakeMenuSeparator as Separator } from '../index'

storiesOf('ebay-fake-menu', module)
    .add('Default', () => (<>
        <EbayFakeMenu
            onClick={(event) => {
                action('click')('MENU click event prevented')
                event.preventDefault()
            }}
            onSelect={(event) => {
                action('select')('event prevented')
                event.preventDefault()
            }}
        >
            <Item href="#" onClick={(event) => {
                action('click')('ITEM click event prevented')
                event.preventDefault()
            }}>Item 1 that has very long text</Item>
            <Item href="#">Item 2</Item>
            <Item href="#">Item 3</Item>
        </EbayFakeMenu>
    </>))
    .add('With Checkbox set via boolean', () => (<>
        <EbayFakeMenu
            onSelect={(event) => {
                action('select')('event prevented')
                event.preventDefault()
            }}
        >
            <Item href="#" checked>Current page</Item>
            <Item href="#">page 2</Item>
            <Item href="#">page 3</Item>
        </EbayFakeMenu>
    </>))
    .add('With Checkbox set via number', () => (<>
        <EbayFakeMenu
            checked={1}
            onSelect={(event) => {
                action('select')('event prevented')
                event.preventDefault()
            }}
        >
            <Item href="#">page 1</Item>
            <Item href="#">Current page</Item>
            <Item href="#">page 3</Item>
        </EbayFakeMenu>
    </>))
    .add('With Separator', () => (<>
        <EbayFakeMenu>
            <Item href="#">item 1 that has very long text</Item>
            <Item href="#">Item 2</Item>
            <Separator />
            <Item href="#">Item 3</Item>
            <Item href="#">Item 4</Item>
            <Item href="#">Item 5</Item>
        </EbayFakeMenu>
    </>))
    .add('With Disabled Item', () => (<>
        <EbayFakeMenu>
            <Item href="#">item 1 that has very long text</Item>
            <Item>Item 2</Item>
            <Item href="#">Item 3</Item>
        </EbayFakeMenu>
    </>))

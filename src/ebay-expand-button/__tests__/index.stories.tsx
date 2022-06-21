import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import { EbayExpandButton } from '../../index'

storiesOf(`ebay-expand-button`, module)
    .add(`Default`, () => (<>
        <EbayExpandButton>Expand!</EbayExpandButton>
    </>))
    .add(`Html Label`, () => (<>
        <EbayExpandButton><h3>Header</h3></EbayExpandButton>
    </>))
    .add(`No text`, () => (
        <>
            <p>
                <EbayExpandButton aria-label="Menu" />
            </p>
            <p>
                <EbayExpandButton
                    aria-label="Menu"
                    icon="menu"
                    onExpand={action('Hamburger Menu expanded!')}
                    onCollapse={action('Hamburger Menu collapsed!')}
                />
            </p>
            <p>
                <EbayExpandButton
                    aria-label="Menu"
                    icon="overflow"
                    borderless
                    onExpand={action('Overflow Menu expanded!')}
                    onCollapse={action('Overflow Menu collapsed!')}
                />
            </p>
        </>
    ))
    // Borderles button doesn't work without a menu/listbox wrapper
    .add(`Borderless`, () => (
        <span className="listbox-button">
            <EbayExpandButton borderless>Borderless Button</EbayExpandButton>
        </span>
    ))
    .add(`Disabled`, () => (<>
        <EbayExpandButton disabled>Can not touch</EbayExpandButton>
    </>))

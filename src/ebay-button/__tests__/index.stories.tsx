import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import { EbayButton, EbayButtonCell } from '../../index'
import EbayIcon from '../../ebay-icon/icon';

storiesOf(`ebay-button`, module)
    .add(`Default`, () => (
        <>
            <p><EbayButton
                onClick={action(`clicked`)}
                onEscape={action('escape pressed')}
            >Hello, I am a button!</EbayButton></p>
            <p><EbayButton href="https://ebay.com">Hello, I am a link!</EbayButton></p>
        </>
    ))
    .add(`Size`, () => (
        <>
            <p><EbayButton size="large">Large Button</EbayButton></p>
            <p><EbayButton href="https://ebay.com" size="large">Large Link</EbayButton></p>
            <p><EbayButton size="default">Default Size Button</EbayButton></p>
            <p><EbayButton size="default" href="https://ebay.com">Default Size Link</EbayButton></p>
        </>
    ))
    .add(`Priority`, () => (
        <>
            <p><EbayButton priority="primary">Primary Button</EbayButton></p>
            <p><EbayButton priority="primary" href="https://ebay.com">Primary Link</EbayButton></p>
            <p><EbayButton priority="secondary">Secondary Button</EbayButton></p>
            <p><EbayButton priority="secondary" href="https://ebay.com">Secondary Link</EbayButton></p>
            <p><EbayButton>Secondary Button (Default)</EbayButton></p>
            <p><EbayButton href="https://ebay.com">Secondary Link (Default)</EbayButton></p>
            <p><EbayButton priority="tertiary">Tertiary Button</EbayButton></p>
            <p><EbayButton priority="tertiary" href="https://ebay.com">Tertiary Link</EbayButton></p>
            <p><EbayButton priority="delete">Delete Button</EbayButton></p>
            <p><EbayButton priority="none">Base Button</EbayButton></p>
        </>
    ))
    .add(`Fluid`, () => (
        <>
            <p><EbayButton priority="primary" fluid>Primary Button</EbayButton></p>
            <p><EbayButton fluid>Secondary Button</EbayButton></p>
            <p><EbayButton fluid href="https://www.ebay.com">Link</EbayButton></p>
        </>
    ))
    .add(`Icon Button`, () => (
        <>
            <p><EbayButton priority="primary" aria-label="Menu button">
                <EbayIcon name="menu" />
            </EbayButton></p>
            <p><EbayButton aria-label="Settings button">
                <EbayIcon name="settings" />
            </EbayButton></p>
            <p><EbayButton href="#" aria-label="Settings link">
                <EbayIcon name="settings" />
            </EbayButton></p>
            <p><EbayButton priority="delete" aria-label="Delete button">
                <EbayIcon name="delete" />
            </EbayButton></p>
            </>
    ))
    .add(`Transparent`, () => (
        <div style={{ background: 'rgba(66, 214, 205, 0.5)' }}>
            <p><EbayButton>Default Button</EbayButton></p>
            <p><EbayButton transparent>Transparent Button</EbayButton></p>
            <p><EbayButton transparent priority="delete">Transparent Delete Button</EbayButton></p>
            <p><EbayButton href="https://ebay.com" transparent>Transparent Link</EbayButton></p>
        </div>
    ))
    .add(`Disabled`, () => (
        <>
            <p><EbayButton priority="primary" disabled>Primary Button</EbayButton></p>
            <p><EbayButton disabled>Secondary Button</EbayButton></p>
            <p><EbayButton href="https://ebay.com" disabled>Link</EbayButton></p>
        </>
    ))
    .add(`Partially disabled Button`, () => (
        <EbayButton priority="primary" partiallyDisabled>Hello, I am a button!</EbayButton>
    ))
    .add(`Truncated`, () => (
        <div style={{ maxWidth: '200px' }}>
            <p><EbayButton truncate>Hello, I am a button! this is a long text</EbayButton></p>
            <p><EbayButton href="https://ebay.com" truncate>Hello, I am a link! this is a long text</EbayButton></p>
        </div>
    ))
    .add(`Flexible Button`, () => (
        <EbayButton priority="primary" fluid>
            <EbayButtonCell style={{ justifyContent: 'space-between' }}>
                <span>Select</span>
                <span style={{ display: 'inline-flex' }}>
                    <span>Any</span>
                    <EbayIcon name="chevronDown" />
                </span>
            </EbayButtonCell>
        </EbayButton>
    ))
    .add(`Loading button`, () => (
        <>
            <p><EbayButton priority="primary" bodyState="loading">Primary Button</EbayButton></p>
        </>
    ))
    .add(`Open in new tab/window`, () => (
        <EbayButton>
            <EbayButtonCell>
                <span>Open in new tab</span>
                <EbayIcon name="window" />
            </EbayButtonCell>
        </EbayButton>
    ))

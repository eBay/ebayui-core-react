import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import { EbayButton, EbayButtonCell } from '../index'
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
            <p><EbayButton priority="none">Base Button</EbayButton></p>
        </>
    ))
    .add(`Destructive variant`, () => (
        <>
            <p><EbayButton priority="primary" variant="destructive">Primary Button</EbayButton></p>
            <p><EbayButton priority="primary" variant="destructive" href="https://ebay.com">Primary Link</EbayButton></p>
            <p><EbayButton priority="secondary" variant="destructive">Secondary Button</EbayButton></p>
            <p><EbayButton priority="secondary" variant="destructive" href="https://ebay.com">Secondary Link</EbayButton></p>
            <p><EbayButton priority="tertiary" variant="destructive">Tertiary Button</EbayButton></p>
            <p><EbayButton priority="tertiary" variant="destructive" href="https://ebay.com">Tertiary Link</EbayButton></p>
        </>
    ))
    .add(`Fluid`, () => (
        <>
            <p><EbayButton priority="primary" fluid>Primary Button</EbayButton></p>
            <p><EbayButton fluid>Secondary Button</EbayButton></p>
            <p><EbayButton fluid href="https://www.ebay.com">Link</EbayButton></p>
        </>
    ))
    .add(`With icon`, () => (
        <>
            <p>Form button:<br/><EbayButton aria-label="Menu button">
                <EbayIcon name="menu" />
                <span>Button with icon</span>
            </EbayButton></p>
            <p>Form fake-button (link):<br/><EbayButton href="#" variant="form" aria-label="Settings link">
                <EbayIcon name="settings" />
                <span>Button with icon</span>
            </EbayButton></p>
            <p>Delete button:<br/><EbayButton variant="destructive" aria-label="Destructive button">
                <EbayIcon name="delete" />
                <span>Button with icon</span>
            </EbayButton></p>
            <p>Expand button:<br/><EbayButton bodyState="expand" aria-label="Destructive button">
                <EbayIcon name="settings" />
                <span>Expand button</span>
            </EbayButton></p>
            </>
    ))
    .add(`Icon Only`, () => (
        <>
            <p>Form button:<br/><EbayButton variant="form" aria-label="Menu button">
                <EbayIcon name="menu" />
            </EbayButton></p>
            <p>Form fake-button (link):<br/><EbayButton href="#" variant="form" aria-label="Settings link">
                <EbayIcon name="settings" />
            </EbayButton></p>
            <p>Delete button:<br/><EbayButton variant="destructive" aria-label="Destructive button">
                <EbayIcon name="delete" />
            </EbayButton></p>
            </>
    ))
    .add(`Transparent`, () => (
        <div style={{ background: 'rgba(66, 214, 205, 0.5)' }}>
            <p><EbayButton>Default Button</EbayButton></p>
            <p><EbayButton transparent>Transparent Button</EbayButton></p>
            <p><EbayButton transparent priority="secondary" variant="destructive">Transparent Destructive Button</EbayButton></p>
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
        <div>
            <p><EbayButton truncate style={{ maxWidth: '200px' }}>Hello, I am a button! this is a long text</EbayButton></p>
            <p><EbayButton size="large" truncate style={{ maxWidth: '200px' }}>Hello, I am a BIG button! this is a long text</EbayButton></p>
            <p><EbayButton href="https://ebay.com" truncate style={{ maxWidth: '200px' }}>Hello, I am a link! this is a long text</EbayButton></p>
        </div>
    ))
    .add(`Flex Button`, () => (
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
            <p><EbayButton bodyState="loading" /></p>
            <p><EbayButton priority="primary" bodyState="loading" /></p>
            <p><EbayButton priority="tertiary" bodyState="loading" /></p>
            <p><EbayButton variant="form" bodyState="loading" /></p>
            <p><EbayButton variant="destructive" bodyState="loading" /></p>
        </>
    ))
    .add(`Expand button`, () => (
        <>
            <p>
                <EbayButton priority="primary" bodyState="expand">Primary expand button</EbayButton>
                {' '}
                <EbayButton priority="primary" bodyState="expand" aria-expanded="true">Expanded button</EbayButton>
            </p>
            <p><EbayButton bodyState="expand">Expand button</EbayButton></p>
            <p><EbayButton priority="tertiary" bodyState="expand">Tertiary expand button</EbayButton></p>
            <p>
                <EbayButton variant="form" bodyState="expand">Form expand button</EbayButton>
                {' '}
                <EbayButton variant="form" bodyState="expand" />
                {' '}
                <EbayButton variant="form" bodyState="expand" aria-expanded={true}/>
            </p>
            <p><EbayButton priority="primary" bodyState="expand" borderless>Borderless expand button</EbayButton></p>
        </>
    ))
    .add(`Split button`, () => (
        <>
            <p>
                <EbayButton priority="primary" split="start">Primary split start button</EbayButton>
                <EbayButton priority="primary" split="end">Primary split end button</EbayButton>
            </p>
            <p>
                <EbayButton split="start">Split start button</EbayButton>
                <EbayButton split="end">Split end button</EbayButton>
            </p>
            <p>
                <EbayButton priority="tertiary" split="start">Tertiary split start button</EbayButton>
                <EbayButton priority="tertiary" split="end">Tertiary split end button</EbayButton>
            </p>
            <p>
                <EbayButton priority="primary" split="start">Primary Split button</EbayButton>
                <EbayButton priority="primary" bodyState="expand" split="end" />
            </p>
            <p>
                <EbayButton split="start">Split button</EbayButton>
                <EbayButton bodyState="expand" split="end" />
            </p>
            <p>
                <EbayButton priority="tertiary" split="start">Tertiary split button</EbayButton>
                <EbayButton priority="tertiary" bodyState="expand" split="end" />
            </p>        </>
    ))
    .add(`Form button`, () => (
        <>
            <p><EbayButton variant="form">Form button</EbayButton></p>
        </>
    ))
    .add(`Borderless button`, () => (
        <>
            <p><EbayButton borderless>Borderless button</EbayButton></p>
        </>
    ))
    .add(`Fixed height`, () => (
        <>
            <p><EbayButton fixedHeight>Fixed height button</EbayButton></p>
            <p><EbayButton fixedHeight size="large">Fixed height large button</EbayButton></p>
        </>
    ))

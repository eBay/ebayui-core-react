import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import { EbaySwitch } from '../index'

storiesOf(`ebay-switch`, module)
    .add(`Default switch-button`, () => (
        <span className="field">
            <EbaySwitch value="123" id="switch-1" />
            <label className="field__label field__label--end" htmlFor="switch-1">Default</label>
        </span>
    ))
    .add(`Selected switch-button`, () => (
        <span className="field">
            <EbaySwitch checked value="123" id="switch-2" onChange={action('switch-change')} />
            <label className="field__label field__label--end" htmlFor="switch-2">Checked</label>
        </span>
    ))
    .add(`Disabled switch-button`, () => (
        <span className="field">
            <EbaySwitch disabled id="switch-20" />
            <label className="field__label field__label--end" htmlFor="switch-20">Disabled</label>
        </span>
    ))


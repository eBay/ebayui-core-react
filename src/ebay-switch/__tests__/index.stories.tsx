import React from 'react'
import { action } from '../../../.storybook/action'
import { EbaySwitch } from '../index'

export default {
    title: 'ebay-switch'
}

export const DefaultSwitchButton = () => (
    <span className="field">
        <EbaySwitch value="123" id="switch-1" onChange={(e, props) => action('onChange')(e, props)} />
        <label className="field__label field__label--end" htmlFor="switch-1">
            Default
        </label>
    </span>
)

DefaultSwitchButton.story = {
    name: 'Default switch-button'
}

export const SelectedSwitchButton = () => (
    <span className="field">
        <EbaySwitch checked value="123" id="switch-2" onChange={action('switch-change')} />
        <label className="field__label field__label--end" htmlFor="switch-2">
            Checked
        </label>
    </span>
)

SelectedSwitchButton.story = {
    name: 'Selected switch-button'
}

export const DisabledSwitchButton = () => (
    <span className="field">
        <EbaySwitch disabled id="switch-20" />
        <label className="field__label field__label--end" htmlFor="switch-20">
            Disabled
        </label>
    </span>
)

DisabledSwitchButton.story = {
    name: 'Disabled switch-button'
}

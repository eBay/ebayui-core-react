import React, { useState, useRef, ChangeEvent } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { EbayLabel } from '../../ebay-field'
import { EbayTristateCheckbox } from '../index'

const meta: Meta<typeof EbayTristateCheckbox> = {
    component: EbayTristateCheckbox,
    title: 'form input/ebay-tristate-checkbox'
}

export default meta

export const DefaultCheckboxButton: StoryFn<typeof EbayTristateCheckbox> = () => (
    <>
        <p>
            <EbayTristateCheckbox
                value="123"
                size="large"
                checked="mixed"
                id="checkbox-11"
                onChange={(e, props) => action('onChange')(e, props)}
                onFocus={(e, props) => action('onFocus')(e, props)}
                onKeyDown={(e, props) => action('onKeyDown')(e, props)}
            >
                <EbayLabel>Default</EbayLabel>
            </EbayTristateCheckbox>
        </p>
        <p>
            <EbayTristateCheckbox value="123" id="checkbox-12" size="large">
                <EbayLabel>Large</EbayLabel>
            </EbayTristateCheckbox>
        </p>
    </>
)


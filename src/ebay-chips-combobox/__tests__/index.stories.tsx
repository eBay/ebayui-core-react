import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import EbayChipsCombobox, { EbayChipsComboboxProps } from '../chips-combobox'
import { EbayComboboxOption } from '../../ebay-combobox'

const meta: Meta<typeof EbayChipsCombobox> = {
    component: EbayChipsCombobox,
    title: 'form input/ebay-chips-combobox',
    argTypes: {
        expanded: {
            control: 'boolean',
            description: 'Whether the combobox is expanded'
        },
        fluid: {
            control: 'boolean',
            description: 'Whether the combobox should take full width'
        },
        error: {
            control: 'boolean',
            description: 'Whether the combobox is in an error state'
        },
        listSelection: {
            control: 'select',
            options: ['manual', 'automatic'],
            description: 'Selection mode for the list'
        },
        selected: {
            control: 'array',
            description: 'Currently selected options'
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the combobox is disabled'
        },
        a11yDeleteButtonText: {
            control: 'text',
            description: 'Accessibility text for the delete button'
        },
        onExpand: { action: 'onExpand' },
        onCollapse: { action: 'onCollapse' },
        onChange: { action: 'onChange' }
    },
}

export default meta

export const Default: StoryFn<EbayChipsComboboxProps> = (args) => (
    <EbayChipsCombobox placeholder="Add item" {...args}>
        <EbayComboboxOption text="Chip 1" />
        <EbayComboboxOption text="Chip 2" />
        <EbayComboboxOption text="Chip 3" />
    </EbayChipsCombobox>
)

Default.args = {
    expanded: false,
    fluid: false,
    error: false,
    listSelection: 'manual',
    selected: [],
    disabled: false,
    a11yDeleteButtonText: 'Remove'
}

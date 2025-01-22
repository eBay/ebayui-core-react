import React, { ChangeEvent } from 'react'
import { action } from '@storybook/addon-actions'

import { EbayListbox, EbayListboxOption, EbayListboxOptionDescription } from '../index'

export default {
    title: 'building blocks/ebay-listbox'
}

export const Default = () => (
    <EbayListbox>
        <EbayListboxOption value="AA" text="Option 1"/>
        <EbayListboxOption value="BB" text="Option 2" />
        <EbayListboxOption value="CC" text="Option 3" />
    </EbayListbox>
)

export const WithDescription = () => (
    <EbayListbox>
        <EbayListboxOption value="AA" text="Option 1">
            <EbayListboxOptionDescription>Option 1 extra info</EbayListboxOptionDescription>
        </EbayListboxOption>
        <EbayListboxOption value="BB" text="Option 2">
            <EbayListboxOptionDescription>Option 2 extra info</EbayListboxOptionDescription>
        </EbayListboxOption>
        <EbayListboxOption value="CC" text="Option 3">
            <EbayListboxOptionDescription>Option 3 extra info</EbayListboxOptionDescription>
        </EbayListboxOption>
    </EbayListbox>
)

export const withDisabled = () => (
    <EbayListbox>
        <EbayListboxOption value="AA" text="Option 1"/>
        <EbayListboxOption value="BB" text="Option 2" disabled />
        <EbayListboxOption value="CC" text="Option 3" />
    </EbayListbox>
)

export const withManyOptions = () => (
    <EbayListbox name="formFieldName">
        {Array.from({ length: 20 }, (_, i) => (
            <EbayListboxOption key={i} value={i.toString()} text={`Option ${i + 1}`} />
        ))}
    </EbayListbox>
)

export const withActions = () => (
    <EbayListbox name="formFieldName" onChange={action('onChange')} onEscape={action('onEscape')}>
        <EbayListboxOption value="AA" text="Option 1"/>
        <EbayListboxOption value="BB" text="Option 2" />
        <EbayListboxOption value="CC" text="Option 3" />
    </EbayListbox>
)

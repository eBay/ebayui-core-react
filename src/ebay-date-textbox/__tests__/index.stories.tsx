import React, {useState} from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import { EbayDateTextbox } from '../index'
import {EbayButton} from '../../ebay-button'

const story: ComponentMeta<typeof EbayDateTextbox> = {
  component: EbayDateTextbox,
  title:'ebay-date-textbox',
}

export const Default = () => {
    return (
        <EbayDateTextbox />
    )
}

export const Range = () => {
    return (
        <EbayDateTextbox range />
    )
}

export const CollpaseOnSelect = () => {
    return (
        <EbayDateTextbox collapseOnSelect />
    )
}

export const ControlledValues = () => {
    const Component = () => {
        const [value, setValue] = useState('')

        const handleOnChange = (event, { selected }) => {
            setValue(selected || '')
        }

        const handleOnInputChange = (event) => {
            setValue(event.target.value)
        }

        return (
            <>
                <EbayDateTextbox
                    value={value}
                    onChange={handleOnChange}
                    onInputChange={handleOnInputChange} />
                <div style={{ marginTop: 16 }}>
                    <EbayButton onClick={() => setValue('2024-01-03')}>Set to 2024-01-03</EbayButton>
                </div>
            </>
        )
    }

    return <Component />
}

export default story;

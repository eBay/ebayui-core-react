import React, {useState} from 'react'
import { Meta, Story, StoryObj } from '@storybook/react'
import { EbayDateTextbox, EbayDateTextboxProps } from '../index'
import {EbayButton} from '../../ebay-button'

const story: Meta<typeof EbayDateTextbox> = {
  component: EbayDateTextbox,
  title: 'form input/ebay-date-textbox',
}

export const Default: StoryObj<EbayDateTextboxProps> = {}

export const Range: StoryObj<EbayDateTextboxProps> = {
    args: {
        range: true
    }
}

export const CollpaseOnSelect: StoryObj<EbayDateTextboxProps> = {
    args: {
        collapseOnSelect: true
    }
}

export const ControlledValues: Story<EbayDateTextboxProps> = () => {
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

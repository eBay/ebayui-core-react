import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import { EbaySelect, EbaySelectOption, EbayButton } from '../../index'

storiesOf(`ebay-select`, module)
    .add(`Basic`, () => (<>
        <EbaySelect
            name="formSelect"
            onChange={action(`select-change`)}
        >
            <EbaySelectOption value="1">Option 1</EbaySelectOption>
            <EbaySelectOption value="2">Option 2</EbaySelectOption>
            <EbaySelectOption value="3">Option 3</EbaySelectOption>
        </EbaySelect>
    </>))
    .add(`Options class`, () => (<>
        <EbaySelect
            name="formSelect"
            onChange={action(`select-change`)}
        >
            <EbaySelectOption value="1" className="typography-large-2">Option 1</EbaySelectOption>
            <EbaySelectOption value="2" className="typography-large-2">Option 2</EbaySelectOption>
            <EbaySelectOption value="3" className="typography-large-2">Option 3</EbaySelectOption>
        </EbaySelect>
    </>))
    .add(`Invalid select`, () => (<>
        <EbaySelect
            name="formSelect"
            value="3"
            aria-invalid="true"
            onChange={action(`select-change`)}
            aria-label="Please select a option"
        >
            <EbaySelectOption value="1">Option 1</EbaySelectOption>
            <EbaySelectOption value="2">Option 2</EbaySelectOption>
            <EbaySelectOption value="3">Option 3</EbaySelectOption>
        </EbaySelect>
    </>))
    .add(`Grouped options`, () => (<>
        <EbaySelect
            name="formSelect"
            onChange={action(`select-change`)}
        >
            <EbaySelectOption value="pre">Option PRE</EbaySelectOption>
            <EbaySelectOption optgroup="Group 1" value="1">Option 1[Group 1]</EbaySelectOption>
            <EbaySelectOption optgroup="Group 1" value="2">Option 2[Group 1]</EbaySelectOption>
            <EbaySelectOption optgroup="Group 1" value="3">Option 3[Group 1]</EbaySelectOption>
            <EbaySelectOption value="mid">Option MID</EbaySelectOption>
            <EbaySelectOption optgroup="Group 2" value="4">Option 4[Group 2]</EbaySelectOption>
            <EbaySelectOption optgroup="Group 2" value="5">Option 5[Group 2]</EbaySelectOption>
            <EbaySelectOption optgroup="Group 2" value="6">Option 6[Group 2]</EbaySelectOption>
            <EbaySelectOption optgroup="Group 3" value="7">Option 7[Group 3]</EbaySelectOption>
            <EbaySelectOption optgroup="Group 3" value="8">Option 8[Group 3]</EbaySelectOption>
            <EbaySelectOption optgroup="Group 3" value="9">Option 9[Group 3]</EbaySelectOption>
            <EbaySelectOption value="post">Option POST</EbaySelectOption>
        </EbaySelect>
    </>))
    .add(`Borderless select`, () => (<>
        <EbaySelect
            borderless
            defaultValue="4"
            name="formSelect"
            onChange={action(`select-change`)}
        >
            <EbaySelectOption value="1">Option 1</EbaySelectOption>
            <EbaySelectOption value="2">Option 2</EbaySelectOption>
            <EbaySelectOption value="3">Option 3</EbaySelectOption>
        </EbaySelect>
    </>))
    .add(`Disabled select`, () => (<>
        <EbaySelect
            className="customclass"
            disabled
            name="formSelect"
        >
            <EbaySelectOption value="1">Option 1</EbaySelectOption>
            <EbaySelectOption value="2">Option 2</EbaySelectOption>
        </EbaySelect>
    </>))
    .add(`Uncontrolled component with defaultValue`, () => (<>
        <EbaySelect
            name="formSelect"
            defaultValue="3"
            onChange={action(`select-change`)}
        >
            <EbaySelectOption value="1">Option 1</EbaySelectOption>
            <EbaySelectOption value="2">Option 2</EbaySelectOption>
            <EbaySelectOption value="3">Option 3</EbaySelectOption>
        </EbaySelect>
    </>))
    .add(`Controlled component`, () => {
        const TestControlledComponent = () => {
            const [selectedValue, setSelectedValue] = useState('UK')
            const handleChange = (e) => setSelectedValue(e.target.value)

            return (
                <div style={{ width: `500px` }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <EbaySelect name="selectCountry" value={selectedValue} onChange={handleChange}>
                            <EbaySelectOption value="DE">DE</EbaySelectOption>
                            <EbaySelectOption value="US">US</EbaySelectOption>
                            <EbaySelectOption value="UK">UK</EbaySelectOption>
                            <EbaySelectOption value="AU">AU</EbaySelectOption>
                        </EbaySelect>

                        <div style={{ margin: '0 2rem' }}>
                            Current selected: <strong>{selectedValue}</strong>
                        </div>
                        <EbayButton onClick={() => setSelectedValue('US')}>
                            Set selected to US
                        </EbayButton>
                    </div>
                </div>
            )
        }

        return <><TestControlledComponent /></>
    })
    .add(`Floating label`, () => (<>
        <EbaySelect
            name="formSelect"
            onChange={action(`select-change`)}
            floatingLabel="Label"
        >
            <EbaySelectOption value="">Choose an option</EbaySelectOption>
            <EbaySelectOption value="1">Option 1</EbaySelectOption>
            <EbaySelectOption value="2">Option 2</EbaySelectOption>
            <EbaySelectOption value="3">Option 3</EbaySelectOption>
        </EbaySelect>
    </>))
    .add(`Invalid floating label select`, () => (<>
        <EbaySelect
            name="formSelect"
            value="3"
            aria-invalid="true"
            onChange={action(`select-change`)}
            floatingLabel="Invalid label"
            aria-label="Please select a option"
        >
            <EbaySelectOption value="1">Option 1</EbaySelectOption>
            <EbaySelectOption value="2">Option 2</EbaySelectOption>
            <EbaySelectOption value="3">Option 3</EbaySelectOption>
        </EbaySelect>
    </>))
    .add(`Large Select`, () => (<>
        <EbaySelect
            name="formSelect"
            onChange={action(`select-change`)}
            floatingLabel="Label"
            inputSize="large"
        >
            <EbaySelectOption value="">Choose an option</EbaySelectOption>
            <EbaySelectOption value="1">Option 1</EbaySelectOption>
            <EbaySelectOption value="2">Option 2</EbaySelectOption>
            <EbaySelectOption value="3">Option 3</EbaySelectOption>
        </EbaySelect>
    </>))

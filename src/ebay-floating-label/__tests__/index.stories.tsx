import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import { EbayButton, EbayFloatingLabel } from '../../index'
import {EbaySelectOption} from '../../ebay-select'

storiesOf(`ebay-floating-label`, module)
    .add(`Default floating label`, () => (
        <form>
            <p>
                <EbayFloatingLabel
                    id="input-1"
                    label="Email address"
                    type="email"
                    onChange={action('floating-label-changed')}
                />
            </p>
            <p>
                <EbayButton type="submit">Submit</EbayButton>
            </p>
        </form>
    ))
    .add(`Floating label with value`, () => (<>
        <EbayFloatingLabel id="input-2" label="Email address" defaultValue="test"/>
    </>))
    .add(`Floating label with controlled value`, () => (<>
        <EbayFloatingLabel id="input-21" label="Email address" value="can't change"/>
    </>))
    .add(`Floating label with placeholder`, () => (<>
        <EbayFloatingLabel
            id="input-3"
            label="Email address"
            placeholder="placeholder text"/>
    </>))
    .add(`Floating label disabled`, () => (<>
        <EbayFloatingLabel id="input-4" label="Email address" disabled/>
    </>))
    .add(`Floating label invalid`, () => (<>
        <EbayFloatingLabel id="input-5" label="Email address" invalid/>
    </>))
    .add(`Autofocus test`, () => (
        <div>
            <EbayFloatingLabel label="Autofocused field" autoFocus/><br/>
            <EbayFloatingLabel label="Regular field"/>
        </div>
    ))
    .add(`Large Floating label`, () => (<>
        <EbayFloatingLabel id="input-2" label="Email address" defaultValue="test" inputSize="large" />
    </>))
    .add(`Control value from outside`, () => {
        const Component = () => {
            const [value, setValue] = useState('')

            const handleOnChange = e => {
                const newValue = e.target.value
                setValue(newValue.toLowerCase())
            }

            return (
                <>
                    <p>
                        <EbayFloatingLabel
                            onChange={handleOnChange}
                            value={value}
                            label="Will convert to lowercase"
                            placeholder="Enter some UPPERCASE"
                            size={30}
                        />
                    </p>
                    <p>
                        <EbayButton onClick={() => { setValue('changed text') }}>Change text</EbayButton>
                    </p>
                    <p>
                        <EbayButton onClick={() => { setValue('') }}>Clear</EbayButton>
                    </p>
                </>
            )
        }

        return <><Component/></>
    })
    .add(`Select Floating label`, () => (<>
        <EbayFloatingLabel id="input-2" label="State" defaultValue="test" elementType="select">
            <EbaySelectOption value="">Choose an option</EbaySelectOption>
            <EbaySelectOption value="CA">California</EbaySelectOption>
            <EbaySelectOption value="NY">New York</EbaySelectOption>
        </EbayFloatingLabel>
    </>))

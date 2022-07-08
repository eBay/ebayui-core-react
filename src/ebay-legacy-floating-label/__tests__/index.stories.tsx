import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import { EbayButton, EbayLegacyFloatingLabel } from '../../index'
import '@ebay/skin/legacy-textbox'

storiesOf(`ebay-legacy-floating-label`, module)
    .add(`Default floating label`, () => (
        <form>
            <p>
                <EbayLegacyFloatingLabel
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
        <EbayLegacyFloatingLabel id="input-2" label="Email address" defaultValue="test"/>
    </>))
    .add(`Floating label with controlled value`, () => (<>
        <EbayLegacyFloatingLabel id="input-21" label="Email address" value="can't change"/>
    </>))
    .add(`Floating label with placeholder`, () => (<>
        <EbayLegacyFloatingLabel
            id="input-3"
            label="Email address"
            placeholder="placeholder text"/>
    </>))
    .add(`Floating label disabled`, () => (<>
        <EbayLegacyFloatingLabel id="input-4" label="Email address" disabled/>
    </>))
    .add(`Floating label invalid`, () => (<>
        <EbayLegacyFloatingLabel id="input-5" label="Email address" invalid/>
    </>))
    .add(`Autofocus test`, () => (
        <div>
            <EbayLegacyFloatingLabel label="Autofocused field" autoFocus/><br/>
            <EbayLegacyFloatingLabel label="Regular field"/>
        </div>
    ))
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
                        <EbayLegacyFloatingLabel onChange={handleOnChange} value={value} label="Will convert to lowercase"/>
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

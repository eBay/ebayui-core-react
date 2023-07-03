import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import { EbayField, EbayLabel } from '../../ebay-field'
import { EbayButton } from '../../ebay-button'
import { EbayRadio } from '../index'

storiesOf(`ebay-radio`, module)
    .add(`Default`, () => (
        <>
            <p>
                <EbayRadio value="123" id="radio-1">
                    <EbayLabel>Default</EbayLabel>
                </EbayRadio>
            </p>
            <p>
                <EbayRadio value="123" id="radio-11" size="large">
                    <EbayLabel>Large</EbayLabel>
                </EbayRadio>
            </p>
        </>
    ))
    .add(`Using custom label html`, () => (
        <>
            <p>
                <EbayRadio value="123" id="radio-1"/>
                <label className="field__label field__label--end" htmlFor="radio-1">Default</label>
            </p>
            <p>
                <EbayRadio value="123" id="radio-11" size="large"/>
                <label className="field__label field__label--end" htmlFor="radio-11">Large</label>
            </p>
        </>
    ))
    .add(`Selected radio-button`, () => (<>
        <EbayRadio checked id="radio-2">
            <EbayLabel>Selected</EbayLabel>
        </EbayRadio>
    </>))
    .add(`Disabled radio-button`, () => (<>
        <EbayRadio disabled id="radio-20">
            <EbayLabel>Disabled</EbayLabel>
        </EbayRadio>
    </>))
    .add(`Grouped radio-buttons`, () => {
        const defaultProps = {
            onChange: (e, props) => action('onChange')(e, props),
            onFocus: (e, props) => action('onFocus')(e, props),
            onKeyDown: (e, props) => action('onKeyDown')(e, props)
        }

        return (
            <fieldset>
                <legend>Choose an Option</legend>
                <EbayField>
                    <EbayRadio
                        id="group-radio-1"
                        value="1"
                        defaultChecked
                        name="radio-group"
                        {...defaultProps}
                    >
                        <EbayLabel>Option 1</EbayLabel>
                    </EbayRadio>
                </EbayField>
                <EbayField>
                    <EbayRadio
                        id="group-radio-2"
                        value="2"
                        defaultChecked={false}
                        name="radio-group"
                        {...defaultProps}
                    >
                        <EbayLabel>Option 2</EbayLabel>
                    </EbayRadio>
                </EbayField>
                <EbayField>
                    <EbayRadio
                        id="group-radio-3"
                        value="3"
                        defaultChecked={false}
                        name="radio-group"
                        {...defaultProps}
                    >
                        <EbayLabel>Option 3</EbayLabel>
                    </EbayRadio>
                </EbayField>
            </fieldset>
        )
    })
    .add(`Styled radio-button`, () => (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
            .custom ~ label,
            .custom .radio__icon svg { color: green !important }
            `
            }}/>
            <EbayRadio className="custom" aria-label="custom color radio example" id="radio-30">
                <EbayLabel>Custom style</EbayLabel>
            </EbayRadio>
        </>
    ))
    .add(`Controlled component`, () => {
        const deliveryMethods = ['Regular', 'Express', 'Local Pickup']

        const TestControlledComponent = () => {
            const [selectedValue, setSelectedValue] = useState(deliveryMethods[0])
            const handleChange = (e, ...rest) => {
                action('radio-change')(e, ...rest)
                setSelectedValue(e.target.value)
            }

            return (
                <div>
                    <fieldset>
                        <legend>Choose your delivery</legend>
                        {deliveryMethods.map((item, index) => (
                            <EbayField key={`delivery-${item}`}>
                                <EbayRadio
                                    id={`delivery-${index}`}
                                    checked={selectedValue === item}
                                    value={item}
                                    name="delivery-method"
                                    onChange={handleChange}
                                >
                                    <EbayLabel>{item}</EbayLabel>
                                </EbayRadio>
                            </EbayField>
                        ))}
                    </fieldset>

                    <div style={{display: 'flex', alignItems: 'center', marginTop: '2rem'}}>
                        <div style={{marginRight: '1rem'}}>
                            Current selected: <strong>{selectedValue}</strong>
                        </div>

                        <EbayButton onClick={() => setSelectedValue(deliveryMethods[1])}>
                            Reset to default (Express)
                        </EbayButton>
                    </div>
                </div>
            )
        }

        return <><TestControlledComponent/></>
    })

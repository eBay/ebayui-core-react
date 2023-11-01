import React, { useState, useRef, ChangeEvent } from 'react'
import { action } from '../../../.storybook/action'
import { EbayLabel } from '../../ebay-field'
import { EbayCheckbox } from '../index'

export default {
    title: 'ebay-checkbox'
}

export const DefaultCheckboxButton = () => (
    <>
        <p>
            <EbayCheckbox
                value="123"
                id="checkbox-11"
                onChange={(e, props) => action('onChange')(e, props)}
                onFocus={(e, props) => action('onFocus')(e, props)}
                onKeyDown={(e, props) => action('onKeyDown')(e, props)}
            >
                <EbayLabel>Default</EbayLabel>
            </EbayCheckbox>
        </p>
        <p>
            <EbayCheckbox value="123" id="checkbox-12" size="large">
                <EbayLabel>Large</EbayLabel>
            </EbayCheckbox>
        </p>
    </>
)

DefaultCheckboxButton.story = {
    name: 'Default checkbox-button'
}

export const SelectedCheckboxButton = () => (
    <>
        <p>
            <EbayCheckbox checked value="123" id="checkbox-21">
                <EbayLabel>Default</EbayLabel>
            </EbayCheckbox>
        </p>
        <p>
            <EbayCheckbox checked value="123" id="checkbox-22" size="large">
                <EbayLabel>Large</EbayLabel>
            </EbayCheckbox>
        </p>
    </>
)

SelectedCheckboxButton.story = {
    name: 'Selected checkbox-button'
}

export const DisabledCheckboxButton = () => (
    <>
        <p>
            <EbayCheckbox disabled value="123" id="checkbox-31">
                <EbayLabel>Default disabled</EbayLabel>
            </EbayCheckbox>
        </p>
        <p>
            <EbayCheckbox disabled value="123" id="checkbox-32" size="large">
                <EbayLabel>Large disabled</EbayLabel>
            </EbayCheckbox>
        </p>
    </>
)

DisabledCheckboxButton.story = {
    name: 'Disabled checkbox-button'
}

export const GroupedCheckboxButtons = () => (
    <fieldset>
        <legend>Choose an Option</legend>
        <span className="field">
            <EbayCheckbox
                id="group-checkbox-1"
                value="1"
                onChange={action('checkbox-change')}
                name="checkbox-group"
            >
                <EbayLabel>Option 1</EbayLabel>
            </EbayCheckbox>
        </span>
        <span className="field">
            <EbayCheckbox
                id="group-checkbox-2"
                value="2"
                onChange={action('checkbox-change')}
                name="checkbox-group"
            >
                <EbayLabel>Option 2</EbayLabel>
            </EbayCheckbox>
        </span>
        <span className="field">
            <EbayCheckbox
                id="group-checkbox-3"
                value="3"
                onChange={action('checkbox-change')}
                name="checkbox-group"
            >
                <EbayLabel>Option 3</EbayLabel>
            </EbayCheckbox>
        </span>
    </fieldset>
)

GroupedCheckboxButtons.story = {
    name: 'Grouped checkbox-buttons'
}

export const StyledCheckboxButton = () => (
    <span className="checkbox">
        <style
            dangerouslySetInnerHTML={{
                __html: `
                .custom ~ label { color: green; }
                .custom ~ .checkbox__icon svg { color: green !important; }
            `
            }}
        />
        <EbayCheckbox className="custom" aria-label="custom color checkbox example" id="checkbox-30">
            <EbayLabel>Custom style</EbayLabel>
        </EbayCheckbox>
    </span>
)

StyledCheckboxButton.story = {
    name: 'Styled checkbox-button'
}

export const ControlValueFromOutside = () => {
    const Controller = () => {
        const [isChecked, setChecked] = useState(true)
        const [isDisabled, setDisabled] = useState(false)
        const counter = useRef(0)
        const handleOnChange = (
            e: ChangeEvent<HTMLInputElement>,
            value: string | number,
            checked: boolean
        ) => {
            if (counter.current < 4) {
                setChecked(checked)
            } else {
                setDisabled(true)
            }
            counter.current++
        }

        return (
            <EbayCheckbox
                className="custom"
                onChange={handleOnChange}
                checked={isChecked}
                aria-label="custom color checkbox example"
                id="checkbox-30"
                disabled={isDisabled}
            >
                {isDisabled ? (
                    <EbayLabel>Disabled</EbayLabel>
                ) : (
                    <EbayLabel>Gets disabled after {5 - counter.current} clicks</EbayLabel>
                )}
            </EbayCheckbox>
        )
    }
    return (
        <>
            <Controller />
        </>
    )
}

ControlValueFromOutside.story = {
    name: 'Control value from outside'
}

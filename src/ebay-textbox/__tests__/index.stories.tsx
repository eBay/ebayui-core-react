import React, { ChangeEvent, FC, useEffect, useState, KeyboardEvent, MouseEvent } from 'react'
import { action } from '../../../.storybook/action'
import { EbayButton } from '../../ebay-button'
import { EbayTextbox, EbayTextboxPostfixIcon, EbayTextboxPrefixIcon } from '../index'

export default {
    title: 'ebay-textbox'
}

export const DefaultTextbox = () => <EbayTextbox defaultValue="EbayTextbox" />

DefaultTextbox.story = {
    name: 'Default textbox'
}

export const TestingCallbacks = () => {
    const TestComponent: FC = () => {
        const ref = React.useRef(null)
        const [value, setValue] = useState('')

        const handleInputChange = (
            e: ChangeEvent<HTMLTextAreaElement & HTMLInputElement>,
            props: { value: string }
        ) => {
            action('onInputChange')(e, props)
            setValue(props.value)
        }
        const handleButtonClick = (
            e: KeyboardEvent & MouseEvent<HTMLTextAreaElement & HTMLInputElement>,
            props: { value: string }
        ) => {
            action('onButtonClick')(e, props)
            setValue('')
        }

        return (
            <form ref={ref}>
                <p>
                    <EbayTextbox
                        value={value}
                        onChange={(e, props) => action('onChange')(e, props)}
                        onInputChange={(e, props) => handleInputChange(e, props)}
                        onFocus={(e, props) => action('onFocus')(e, props)}
                        onBlur={(e, props) => action('onBlur')(e, props)}
                        onKeyPress={(e, props) => action('onKeyPress')(e, props)}
                        onKeyUp={(e, props) => action('onKeyUp')(e, props)}
                        onKeyDown={(e, props) => action('onKeyDown')(e, props)}
                        onInvalid={(e, props) => action('onInvalid')(e, props)}
                        onButtonClick={(e, props) => handleButtonClick(e, props)}
                        required
                    >
                        <EbayTextboxPostfixIcon
                            name="clear16"
                            buttonAriaLabel="Clear"
                            style={{ opacity: value.length ? '1' : '0' }}
                        />
                    </EbayTextbox>
                </p>
                <p>
                    <EbayButton
                        onClick={(e) => {
                            e.preventDefault()
                            ref.current?.reportValidity()
                        }}
                    >
                        Check value presence
                    </EbayButton>
                </p>
            </form>
        )
    }
    return (
        <>
            <TestComponent />
        </>
    )
}

TestingCallbacks.story = {
    name: 'Testing callbacks'
}

export const DisabledTextbox = () => (
    <>
        <EbayTextbox disabled />
    </>
)

DisabledTextbox.story = {
    name: 'Disabled textbox'
}

export const PlaceholderTextbox = () => (
    <>
        <EbayTextbox placeholder="placeholder text" />
    </>
)

PlaceholderTextbox.story = {
    name: 'Placeholder textbox'
}

export const InvalidTextbox = () => (
    <>
        <EbayTextbox invalid />
    </>
)

InvalidTextbox.story = {
    name: 'Invalid textbox'
}

export const FluidTextbox = () => (
    <>
        <EbayTextbox fluid />
    </>
)

FluidTextbox.story = {
    name: 'Fluid textbox'
}

export const PasswordTextbox = () => (
    <>
        <EbayTextbox type="password" />
    </>
)

PasswordTextbox.story = {
    name: 'Password textbox'
}

export const MultilineTextbox = () => (
    <>
        <EbayTextbox multiline defaultValue={'some default value\nnext line'} />
    </>
)

MultilineTextbox.story = {
    name: 'Multiline textbox'
}

export const MultilineInvalidTextbox = () => (
    <>
        <EbayTextbox multiline invalid defaultValue="some default value" />
    </>
)

MultilineInvalidTextbox.story = {
    name: 'Multiline invalid textbox'
}

export const AutofocusedTextbox = () => (
    <>
        <EbayTextbox autoFocus placeholder="Should focus here" />
    </>
)

AutofocusedTextbox.story = {
    name: 'Autofocused textbox'
}

export const LargeTextbox = () => (
    <>
        <EbayTextbox placeholder="placeholder text" inputSize="large" />
    </>
)

LargeTextbox.story = {
    name: 'Large textbox'
}

export const WithIcon = () => (
    <div>
        <p>
            <EbayTextbox placeholder="email">
                <EbayTextboxPrefixIcon name="mail16" />
            </EbayTextbox>
        </p>
        <p>
            <EbayTextbox placeholder="username">
                <EbayTextboxPostfixIcon name="profile20" />
            </EbayTextbox>
        </p>
        <p>
            <EbayTextbox placeholder="search" onButtonClick={action('Clear!')}>
                <EbayTextboxPrefixIcon name="search16" />
                <EbayTextboxPostfixIcon name="clear16" buttonAriaLabel="Clear" />
            </EbayTextbox>
        </p>
    </div>
)

WithIcon.story = {
    name: 'With icon'
}

export const ControlValueFromOutside = () => {
    const Component = () => {
        const [value, setValue] = useState('')

        const handleOnChange = (e, props) => {
            setValue(props.value.substring(0, 10))
        }

        return <EbayTextbox onInputChange={handleOnChange} value={value} placeholder="Max 10 chars" />
    }

    return (
        <>
            <Component />
        </>
    )
}

ControlValueFromOutside.story = {
    name: 'Control value from outside'
}

export const RefForwarding = () => {
    const ref = React.createRef() as any

    return (
        <>
            <EbayTextbox forwardedRef={ref} />
        </>
    )
}

RefForwarding.story = {
    name: 'Ref forwarding'
}

export const FloatingLabel = () => (
    <EbayTextbox
        floatingLabel="Floating label"
        onChange={action('onChange')}
        onInputChange={action('onInputChange')}
        onFloatingLabelInit={() => action('onFloatingLabelInit')()}
    />
)

FloatingLabel.story = {
    name: 'Floating label'
}

export const FloatingLabelTypeDate = () => (
    <EbayTextbox
        type="date"
        floatingLabel="Floating label"
        onChange={action('onChange')}
        onInputChange={action('onInputChange')}
        onFloatingLabelInit={() => action('onFloatingLabelInit')()}
    />
)

FloatingLabelTypeDate.story = {
    name: 'Floating label type date'
}

export const FloatingLabelWithValue = () => (
    <EbayTextbox
        onChange={action('textbox-changed')}
        floatingLabel="Floating label"
        defaultValue="Default value"
    />
)

FloatingLabelWithValue.story = {
    name: 'Floating label with value'
}

export const FloatingLabelInvalid = () => (
    <EbayTextbox
        invalid
        onChange={action('textbox-changed')}
        floatingLabel="Invalid Floating label"
    />
)

FloatingLabelInvalid.story = {
    name: 'Floating label invalid'
}

export const FloatingLabelWithAutofocus = () => (
    <>
        <p>
            <EbayTextbox floatingLabel="Regular field" />
        </p>
        <p>
            <EbayTextbox floatingLabel="Autofocused field" autoFocus onFocus={action('onFocus')} />
        </p>
    </>
)

FloatingLabelWithAutofocus.story = {
    name: 'Floating label with autofocus'
}

export const FloatingLabelWithPlaceholderControlled = () => {
    const Component = () => {
        const [value, setValue] = useState('')

        const handleOnChange = (e, { value: newValue }) => {
            setValue(newValue.toLowerCase())
        }

        return (
            <>
                <p>
                    <EbayTextbox
                        floatingLabel="Will convert to lowercase"
                        placeholder="Enter some UPPERCASE"
                        onChange={handleOnChange}
                        value={value}
                        size={30}
                    />
                </p>
                <p>
                    <EbayButton
                        onClick={() => {
                            setValue('changed text')
                        }}
                    >
                        Change text
                    </EbayButton>
                </p>
                <p>
                    <EbayButton
                        onClick={() => {
                            setValue('')
                        }}
                    >
                        Clear
                    </EbayButton>
                </p>
            </>
        )
    }

    return (
        <>
            <Component />
        </>
    )
}

FloatingLabelWithPlaceholderControlled.story = {
    name: 'Floating label with placeholder, controlled'
}

export const FloatingLabelWithMultiline = () => (
    <EbayTextbox onChange={action('textbox-changed')} floatingLabel="Floating label" multiline />
)

FloatingLabelWithMultiline.story = {
    name: 'Floating label with multiline'
}

export const FloatingLabelWithMultilineAndOpaqueLabel = () => (
    <EbayTextbox
        onChange={action('textbox-changed')}
        floatingLabel="Floating label"
        multiline
        opaqueLabel
    />
)

FloatingLabelWithMultilineAndOpaqueLabel.story = {
    name: 'Floating label with multiline and opaque label'
}

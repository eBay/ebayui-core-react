import React, { ChangeEvent, FC, useEffect, useState, KeyboardEvent, MouseEvent } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import { EbayButton } from '../../ebay-button'
import { EbayTextbox, EbayTextboxPostfixIcon, EbayTextboxPrefixIcon } from '../index';

storiesOf('ebay-textbox', module)
    .add('Default textbox', () => <EbayTextbox defaultValue="EbayTextbox" />)
    .add('Testing callbacks', () => {
        const TestComponent: FC = () => {
            const ref = React.useRef(null)
            const [ value, setValue ] = useState('')

            const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement & HTMLInputElement>, props: { value: string }) => {
                action('onInputChange')(e, props)
                setValue(props.value)
            }
            const handleButtonClick = (e: KeyboardEvent & MouseEvent<HTMLTextAreaElement & HTMLInputElement>, props: { value: string }) => {
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
                            {<EbayTextboxPostfixIcon
                                name="clear16"
                                buttonAriaLabel="Clear"
                                style={{ opacity: value.length ? '1' : '0'}}
                            />}
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
        return <><TestComponent /></>
    })
    .add('Disabled textbox', () => (<>
        <EbayTextbox disabled />
    </>))
    .add('Placeholder textbox', () => (<>
        <EbayTextbox placeholder="placeholder text" />
    </>))
    .add('Invalid textbox', () => (<>
        <EbayTextbox invalid />
    </>))
    .add('Fluid textbox', () => (<>
        <EbayTextbox fluid />
    </>))
    .add('Password textbox', () => (<>
        <EbayTextbox type="password" />
    </>))
    .add('Multiline textbox', () => (<>
        <EbayTextbox
            multiline
            defaultValue={'some default value\nnext line'}
        />
    </>))
    .add('Multiline invalid textbox', () => (<>
        <EbayTextbox multiline invalid defaultValue="some default value" />
    </>))
    .add('Autofocused textbox', () => (<>
        <EbayTextbox autoFocus placeholder="Should focus here" />
    </>))
    .add('Large textbox', () => (<>
        <EbayTextbox placeholder="placeholder text" inputSize="large" />
    </>))
    .add('With icon', () => (<div>
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
                <EbayTextboxPostfixIcon name="clear16" buttonAriaLabel="Clear"/>
            </EbayTextbox>
        </p>
    </div>))
    .add('Control value from outside', () => {
        const Component = () => {
            const [value, setValue] = useState('')

            const handleOnChange = (e, props) => {
                setValue(props.value.substring(0, 10))
            }

            return <EbayTextbox onInputChange={handleOnChange} value={value} placeholder="Max 10 chars" />
        }

        return <><Component /></>
    })
    .add('Ref forwarding', () => {
        const ref = React.createRef() as any

        return (<>
            <EbayTextbox forwardedRef={ref} />
        </>);
    })
    .add('Floating label', () => (
        <EbayTextbox
            floatingLabel="Floating label"
            onChange={action('onChange')}
            onInputChange={action('onInputChange')}
            onFloatingLabelInit={() => action('onFloatingLabelInit')()}
        />
    ))
    .add('Floating label type date', () => (
        <EbayTextbox
            type="date"
            floatingLabel="Floating label"
            onChange={action('onChange')}
            onInputChange={action('onInputChange')}
            onFloatingLabelInit={() => action('onFloatingLabelInit')()}
        />
    ))
    .add('Floating label with value', () => (
        <EbayTextbox
            onChange={action('textbox-changed')}
            floatingLabel="Floating label"
            defaultValue="Default value"
        />
    ))
    .add('Floating label invalid', () => (
        <EbayTextbox
            invalid
            onChange={action('textbox-changed')}
            floatingLabel="Invalid Floating label"
        />
    ))
    .add('Floating label with autofocus', () => (<>
        <p>
            <EbayTextbox floatingLabel="Regular field" />
        </p>
        <p>
            <EbayTextbox floatingLabel="Autofocused field" autoFocus onFocus={action('onFocus')} />
        </p>
    </>))
    .add('Floating label with placeholder, controlled', () => {
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
    .add('Floating label with multiline', () => (
        <EbayTextbox
            onChange={action('textbox-changed')}
            floatingLabel="Floating label"
            multiline
        />
    ))
    .add('Floating label with multiline and opaque label', () => (
        <EbayTextbox
            onChange={action('textbox-changed')}
            floatingLabel="Floating label"
            multiline
            opaqueLabel
        />
    ))

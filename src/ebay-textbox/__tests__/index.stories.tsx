import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import { EbayTextbox, EbayTextboxPostfixIcon, EbayTextboxPrefixIcon } from '../../index'

storiesOf('ebay-textbox', module)
    .add('Default textbox', () => (<>
        <EbayTextbox
            defaultValue="EbayTextbox"
            onChange={action('textbox-changed')}
        />
    </>))
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
    .add('Underline textbox', () => (<>
        <EbayTextbox underline placeholder="Email address" />
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
                <EbayTextboxPrefixIcon name="messages" />
            </EbayTextbox>
        </p>
        <p>
            <EbayTextbox placeholder="username">
                <EbayTextboxPostfixIcon name="userProfile" />
            </EbayTextbox>
        </p>
        <p>
            <EbayTextbox placeholder="search" onButtonClick={action('Clear!')}>
                <EbayTextboxPrefixIcon name="search" />
                <EbayTextboxPostfixIcon name="clear" buttonAriaLabel="Clear"/>
            </EbayTextbox>
        </p>
    </div>))
    .add('Control value from outside', () => {
        const Component = () => {
            const [value, setValue] = useState('')

            const handleOnChange = e => {
                const newValue = e.target.value
                setValue(newValue.substring(0, 10))
            }

            return <EbayTextbox onChange={handleOnChange} value={value} placeholder="Max 10 chars" />
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
            onChange={action('textbox-changed')}
            floatingLabel="Floating label"
        />
    ))
    .add('Floating label invalid', () => (
        <EbayTextbox
            invalid
            onChange={action('textbox-changed')}
            floatingLabel="Invalid Floating label"
        />
    ))

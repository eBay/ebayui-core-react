import React, {
    cloneElement, ComponentProps, FC, Ref,
    ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent, SyntheticEvent,
    useEffect, useState
} from 'react'
import classNames from 'classnames'
import { findComponent, withForwardRef } from '../common/component-utils'
import { EbayTextboxPostfixIcon, EbayTextboxPrefixIcon, Size } from './index'
import { useFloatingLabel } from '../common/floating-label-utils/hooks'
import {
    EbayChangeEventHandler,
    EbayEventHandler,
    EbayFocusEventHandler,
    EbayKeyboardEventHandler, EbayMouseEventHandler
} from '../common/event-utils/types'

const isControlled = value => typeof value !== 'undefined'

type TextInputProps = ComponentProps<'input'> & ComponentProps<'textarea'>

export type TextboxEventProps = { value: string }
export type EbayTextboxProps = {
    fluid?: boolean;
    invalid?: boolean;
    multiline?: boolean;
    defaultValue?: string;
    inputSize?: Size;
    floatingLabel?: string;
    onChange?: EbayChangeEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>;
    onInputChange?: EbayChangeEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>;
    onFocus?: EbayFocusEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>;
    onBlur?: EbayFocusEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>;
    onKeyPress?: EbayKeyboardEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>;
    onKeyUp?: EbayKeyboardEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>;
    onKeyDown?: EbayKeyboardEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>;
    onInvalid?: EbayEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>;
    onFloatingLabelInit?: () => void;
    onButtonClick?: EbayKeyboardEventHandler<HTMLInputElement, TextboxEventProps> &
        EbayMouseEventHandler<HTMLInputElement, TextboxEventProps>;
    forwardedRef?: Ref<HTMLTextAreaElement | HTMLInputElement>;
    opaqueLabel?: boolean;
} & Omit<TextInputProps, 'onFocus' | 'onBlur' | 'onChange' | 'onKeyPress' | 'onKeyUp' | 'onKeyDown' | 'onInvalid'>;

const EbayTextbox: FC<EbayTextboxProps> = ({
    type = 'text',
    invalid,
    fluid,
    multiline,
    onChange = () => {},
    onInputChange = () => {},
    onFocus = () => {},
    onBlur = () => {},
    onKeyPress = () => {},
    onKeyUp = () => {},
    onKeyDown = () => {},
    onInvalid = () => {},
    onFloatingLabelInit = () => {},
    onButtonClick = () => {},
    autoFocus,
    defaultValue = '',
    value: controlledValue,
    forwardedRef,
    inputSize = 'default',
    floatingLabel,
    children,
    placeholder,
    opaqueLabel,
    ...rest
}) => {
    const [value, setValue] = useState(defaultValue)
    const [inputValue, setInputValue] = useState(defaultValue)
    const {
        label,
        Container,
        onBlur: onFloatingLabelBlur,
        onFocus: onFloatingLabelFocus,
        ref,
        placeholder: floatingLabelPlaceholder
    } = useFloatingLabel({
        ref: forwardedRef,
        inputId: rest.id,
        className: rest.className,
        disabled: rest.disabled,
        label: floatingLabel,
        inputSize,
        inputValue: controlledValue || inputValue,
        placeholder,
        invalid,
        type,
        opaqueLabel,
        onMount: onFloatingLabelInit
    })

    const handleFocus = (event?: FocusEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        onFocus(event, { value: event?.target?.value || defaultValue })
        onFloatingLabelFocus()
    }

    const handleBlur = (event: FocusEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        const newValue = event.target?.value
        onBlur(event, { value: newValue })
        if (newValue !== value) {
            onChange(event, { value: newValue })
            setValue(newValue)
        }
        onFloatingLabelBlur()
    }

    const handleKeyPress = (event?: KeyboardEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        const textbox = event.target as any
        onKeyPress(event, { value: textbox?.value })
    }
    const handleKeyUp = (event?: KeyboardEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        const textbox = event.target as any
        onKeyUp(event, { value: textbox?.value })
    }
    const handleKeyDown = (event?: KeyboardEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        const textbox = event.target as any
        onKeyDown(event, { value: textbox?.value })
    }

    const handleInvalid = (event?: SyntheticEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        const textbox = event.target as any
        onInvalid(event, { value: textbox?.value })
    }

    const handleButtonClick = (event?: KeyboardEvent<HTMLInputElement> & MouseEvent<HTMLInputElement>) => {
        onButtonClick(event, { value })
    }

    useEffect(() => {
        if (autoFocus) {
            handleFocus()
        }
    }, [])

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement & HTMLInputElement>) => {
        const newValue = e.target?.value

        if (!isControlled(controlledValue)) {
            setInputValue(newValue)
        }

        onInputChange(e, { value: newValue })
    }

    const Input = multiline ? 'textarea' : 'input'
    const Wrapper = fluid ? 'div' : 'span'

    const prefixIcon = findComponent(children, EbayTextboxPrefixIcon)
    const postfixIcon = findComponent(children, EbayTextboxPostfixIcon)

    const inputClassName = classNames('textbox__control', {
        'textbox__control--fluid': fluid,
        'textbox__control--large': inputSize === 'large'
    })
    const wrapperClassName = classNames('textbox', {
        'textbox--icon-end': postfixIcon
    })

    return (
        <Container>
            {label}
            <Wrapper className={wrapperClassName}>
                {prefixIcon}
                <Input
                    {...rest}
                    className={inputClassName}
                    type={type}
                    aria-invalid={invalid}
                    value={isControlled(controlledValue) ? controlledValue : inputValue}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    onKeyPress={handleKeyPress}
                    onKeyUp={handleKeyUp}
                    onKeyDown={handleKeyDown}
                    onInvalid={handleInvalid}
                    autoFocus={autoFocus}
                    ref={ref}
                    placeholder={floatingLabelPlaceholder}
                />
                {postfixIcon && cloneElement(postfixIcon, {
                    ...postfixIcon.props,
                    onClick: (e) => {
                        const { onClick: iconClick = () => {} } = postfixIcon.props
                        iconClick(e)
                        handleButtonClick(e)
                    }
                })}
            </Wrapper>
        </Container>
    )
}

export default withForwardRef<EbayTextboxProps>(EbayTextbox)

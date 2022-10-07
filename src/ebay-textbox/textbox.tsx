import React, { ChangeEvent, cloneElement, ComponentProps, FC, FocusEvent, Ref, useEffect, useState } from 'react'
import classNames from 'classnames'
import { findComponent, withForwardRef } from '../common/component-utils'
import { EbayTextboxPostfixIcon, EbayTextboxPrefixIcon, Size } from './index'
import { useFloatingLabel } from '../common/floating-label-utils/hooks'

const isControlled = value => typeof value !== 'undefined'

type TextInputProps = ComponentProps<'input'> & ComponentProps<'textarea'>

export type EbayTextboxProps = {
    fluid?: boolean;
    invalid?: boolean;
    multiline?: boolean;
    defaultValue?: string;
    inputSize?: Size;
    onFocus?: (e?: FocusEvent<HTMLTextAreaElement & HTMLInputElement>, value?: string) => void;
    onBlur?: (e?: FocusEvent<HTMLTextAreaElement & HTMLInputElement>, value?: string) => void;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement & HTMLInputElement>, value: string) => void;
    onButtonClick?: (e: MouseEvent, value: string) => void;
    floatingLabel?: string;
    forwardedRef?: Ref<HTMLTextAreaElement | HTMLInputElement>;
} & Omit<TextInputProps, 'onFocus' | 'onBlur'>;

const EbayTextbox: FC<EbayTextboxProps> = ({
    type = 'text',
    invalid,
    fluid,
    multiline,
    onChange = () => {},
    onFocus = () => {},
    onBlur = () => {},
    onButtonClick = () => {},
    autoFocus,
    defaultValue = '',
    value: controlledValue,
    forwardedRef,
    inputSize = 'default',
    floatingLabel,
    children,
    placeholder,
    ...rest
}) => {
    const [value, setValue] = useState(defaultValue)
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
        inputValue: controlledValue,
        placeholder,
        invalid
    })

    const handleFocus = (event?: FocusEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        onFocus(event)
        onFloatingLabelFocus()
    }

    const handleBlur = (event: FocusEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        onBlur(event)
        onFloatingLabelBlur()
    }

    useEffect(() => {
        if (autoFocus) {
            handleFocus()
        }
    }, [])

    const onChangeHandler = e => {
        const newValue = e.target.value
        if (!isControlled(controlledValue)) {
            setValue(newValue)
        }

        onChange(e, newValue)
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
                    value={isControlled(controlledValue) ? controlledValue : value}
                    onChange={onChangeHandler}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    autoFocus={autoFocus}
                    ref={ref}
                    placeholder={floatingLabelPlaceholder}
                />
                {postfixIcon && cloneElement(postfixIcon, {
                    onClick: onButtonClick,
                    ...postfixIcon.props
                })}
            </Wrapper>
        </Container>
    )
}

export default withForwardRef<EbayTextboxProps>(EbayTextbox)

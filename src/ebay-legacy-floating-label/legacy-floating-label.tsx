import React, { FC, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { EbayTextbox, EbayTextboxProps } from '../ebay-textbox'
import { withForwardRef } from '../common/component-utils/forwardRef'

const textboxElementBackgroundRGB = 'rgb(255, 255, 255)'

const hasValue = (input: HTMLInputElement) => input?.value?.length > 0

// check for computed background color because of Chrome autofill bug
// https://stackoverflow.com/questions/35049555/chrome-autofill-autocomplete-no-value-for-password/35783761#35783761
const isAutofilled = input => getComputedStyle(input).backgroundColor !== textboxElementBackgroundRGB

type Props = EbayTextboxProps & {
    label: string;
};

const EbayLegacyFloatingLabel: FC<Props> = ({
    defaultValue,
    id,
    disabled,
    label,
    onBlur,
    onFocus,
    forwardedRef,
    ...rest
}) => {
    const _internalInputRef = useRef(null)
    const inputRef = (): any => forwardedRef || _internalInputRef
    const [isFloating, setFloating] = useState(true)
    const [shouldAnimate, setAnimate] = useState(false)
    const [isFocused, setFocused] = useState(false)

    const onBlurHandler = (e, value) => {
        if (!hasValue(e.target)) {
            setAnimate(true)
            setFloating(false)
        }

        if (onBlur) {
            onBlur(e, value)
        }
        setFocused(false)
    }

    const onFocusHandler = (e, value) => {
        setAnimate(true)
        setFloating(true)
        if (onFocus) {
            onFocus(e, value)
        }
        setFocused(true)
    }

    useEffect(() => {
        setFloating(isFocused || hasValue(inputRef().current) || isAutofilled(inputRef().current))
    }, [isFocused, rest.value])

    const labelClassName = classNames(
        'legacy-floating-label__label',
        disabled && 'legacy-floating-label__label--disabled',
        shouldAnimate && 'legacy-floating-label__label--animate',
        !isFloating && 'legacy-floating-label__label--inline'
    )

    const inputAttributes = {
        ...rest,
        defaultValue: defaultValue ? String(defaultValue) : undefined,
        id,
        disabled,
        ref: inputRef(),
        onFocus: onFocusHandler,
        onBlur: onBlurHandler
    }

    return (
        <span className="legacy-floating-label">
            <label
                htmlFor={id}
                className={labelClassName}>
                {label}
            </label>

            <EbayTextbox {...inputAttributes} underline />
        </span>
    )
}

export default withForwardRef(EbayLegacyFloatingLabel)

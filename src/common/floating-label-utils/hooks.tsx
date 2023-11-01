import React, { useRef, useState, useEffect, FC, RefObject, useCallback, ReactNode, ComponentProps } from 'react'
import classNames from 'classnames'

type InputRef = RefObject<HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement> | any
type FloatingLabelHookProps = {
    type?: string;
    inputId?: string;
    ref?: InputRef;
    disabled?: boolean;
    label?: string;
    inputSize?: 'default' | 'large';
    inputValue?: ComponentProps<'input'>['value'];
    className?: string;
    placeholder?: string;
    invalid?: boolean;
    opaqueLabel?: boolean;
    onMount?: () => void;
}

type FloatingLabelHookReturn = {
    label: ReactNode;
    onBlur: () => void;
    onFocus: () => void;
    Container: FC<{ children?: ReactNode }>;
    ref: InputRef;
    placeholder: string;
}

const classPrefix = 'floating-label__label'

// input background in Skin 12, used for autofill detection
const textboxElementBackgroundRGB = [
    'rgb(245, 245, 245)', // DEPRECATED
    'rgb(247, 247, 247)' // From skin version 12.6.0
]

// check for computed background color because of Chrome autofill bug
// https://stackoverflow.com/questions/35049555/chrome-autofill-autocomplete-no-value-for-password/35783761#35783761
const isAutofilled = (input: HTMLElement) =>
    input && !textboxElementBackgroundRGB.includes(getComputedStyle(input).backgroundColor)

const hasValue = (input: HTMLInputElement | HTMLOptionElement) => input?.value?.length > 0

const isSelect = (element: HTMLInputElement | HTMLSelectElement) => element?.tagName === `SELECT`

const setPlaceholder = (element: HTMLInputElement, value: string) => {
    // For select elements we need to temporary remove the text of the first option
    // when the element is not focused, so only the label is shown. We still need to
    // maintain the width of the input so we manually change the "min-width"
    // Inspired by the marko implementation: https://github.com/makeup/makeup-js/blob/master/packages/makeup-floating-label/src/index.js
    if (isSelect(element) && !hasValue(element.querySelector(`option`))) {
        element.style['min-width'] = ''
        const beforeWidth = element.offsetWidth

        element.querySelector(`option`).text = value

        if (!value && beforeWidth > element.offsetWidth) {
            element.style['min-width'] = `${beforeWidth}px`
        }
    }
}

const getPlaceholder = (element: HTMLInputElement) => {
    if (isSelect(element)) {
        return element.querySelector(`option`).text
    }

    return element?.placeholder
}

export function useFloatingLabel({
    ref,
    inputId,
    className,
    disabled,
    label,
    inputSize,
    inputValue,
    placeholder,
    invalid,
    opaqueLabel,
    type,
    onMount = () => {}
} : FloatingLabelHookProps): FloatingLabelHookReturn {
    const _internalInputRef = useRef(null)
    const inputRef = () => ref || _internalInputRef
    const [isFloating, setFloating] = useState(Boolean(inputValue))
    const [shouldAnimate, setAnimate] = useState(false)
    const [isFocused, setFocused] = useState(false)
    const selectFirstOptionText = useRef(``)

    const onBlur = () => {
        setAnimate(true)
        setFloating(hasValue(inputRef()?.current))
        setFocused(false)
        setPlaceholder(inputRef().current, ``)
    }

    const onFocus = () => {
        setAnimate(true)
        setFloating(true)
        setFocused(true)
        setPlaceholder(inputRef()?.current, selectFirstOptionText.current)
    }

    useEffect(() => {
        if (!label) {
            return
        }
        selectFirstOptionText.current = getPlaceholder(inputRef()?.current)
        setPlaceholder(inputRef()?.current, ``)
        onMount()
    }, [])

    useEffect(() => {
        if (!label) {
            return
        }
        setFloating(isFocused || hasValue(inputRef()?.current) || isAutofilled(inputRef()?.current))
    }, [isFocused, inputValue])

    const labelClassName = classNames(className, classPrefix, {
        [`${classPrefix}--disabled`]: disabled,
        [`${classPrefix}--animate`]: shouldAnimate,
        [`${classPrefix}--inline`]: !isFloating && type !== 'date',
        [`${classPrefix}--invalid`]: invalid
    })

    const floatingLabelClassName = classNames(`floating-label`, {
        'floating-label--large': inputSize === `large`,
        'floating-label--opaque': opaqueLabel
    })

    const FragmentContainer = useCallback(({ children }) => <>{children}</>, [])
    const FloatingLabelContainer: FC<{ children?: ReactNode }> = useCallback(
        ({ children }) => <span className={floatingLabelClassName}>{children}</span>,
        [floatingLabelClassName]
    )

    if (!label) {
        return {
            label: null,
            Container: FragmentContainer,
            onBlur: () => {},
            onFocus: () => {},
            ref: inputRef(),
            placeholder
        }
    }

    const labelElement = <label htmlFor={inputId} className={labelClassName}>{label}</label>

    return {
        label: labelElement,
        Container: FloatingLabelContainer,
        onBlur,
        onFocus,
        ref: inputRef(),
        placeholder: !isFloating ? null : placeholder
    }
}

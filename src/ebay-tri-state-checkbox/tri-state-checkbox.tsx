import React, { ChangeEvent, cloneElement, ComponentProps, FC, FocusEvent, KeyboardEvent, useState } from 'react'
import classNames from 'classnames'
import { EbayIcon } from '../ebay-icon'
import { EbayLabel, EbayLabelProps } from '../ebay-field'
import { findComponent } from '../common/component-utils'
import { EbayChangeEventHandler, EbayFocusEventHandler, EbayKeyboardEventHandler } from '../common/event-utils/types'

type Size = 'default' | 'large'
type CheckboxState = 'true' | 'false' | 'mixed'
type InputProps = Omit<ComponentProps<'input'>, 'size' | 'onChange' | 'onFocus' | 'onKeyDown'>
type EbayTriStateCheckboxProps = {
    checked?: CheckboxState,
    skipMixed?: boolean,
    size?: Size;
    onChange?: EbayChangeEventHandler<HTMLInputElement, { value: string | number, checked: CheckboxState }>;
    onFocus?: EbayFocusEventHandler<HTMLInputElement, { value: string | number, checked: CheckboxState }>;
    onKeyDown?: EbayKeyboardEventHandler<HTMLInputElement, { value: string | number, checked: CheckboxState }>;
    inputRef?: React.LegacyRef<HTMLInputElement>;
}

const EbayTriStateCheckbox: FC<InputProps & EbayTriStateCheckboxProps> = ({
    id,
    size = 'default',
    className,
    style,
    checked,
    skipMixed = false,
    onChange = () => {},
    onFocus = () => {},
    onKeyDown = () => {},
    children,
    inputRef,
    ...rest
}) => {
    const [checkboxState, setCheckboxState] = useState<CheckboxState>(checked || 'false')
    const onTriggerChange = () => {
        if (checkboxState === 'true') {
            setCheckboxState('false')
        } else if (checkboxState === 'false' && !skipMixed) {
            setCheckboxState('mixed')
        } else {
            setCheckboxState('true')
        }
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target as EventTarget & HTMLInputElement
        onTriggerChange()
        onChange(e, { value: input?.value, checked: checkboxState })
    }
    const handleFocus = (e: FocusEvent<HTMLInputElement>) =>
        onFocus(e, { value: e.target?.value, checked: checkboxState })

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        const input = e.target as EventTarget & HTMLInputElement
        onKeyDown(e, { value: input.value, checked: checkboxState })
    }

    const containerClass = classNames('checkbox', className, { 'checkbox--large': size === 'large' })

    let iconChecked = <EbayIcon name="checkboxChecked18" className="checkbox__checked" />
    let iconUnchecked = <EbayIcon name="checkboxUnchecked18" className="checkbox__unchecked" />
    let iconMixed = <EbayIcon name="checkboxMixed18" />
    if (size === 'large') {
        iconChecked = <EbayIcon name="checkboxChecked24" className="checkbox__checked" />
        iconUnchecked = <EbayIcon name="checkboxUnchecked24" className="checkbox__unchecked" />
        iconMixed = <EbayIcon name="checkboxMixed24" />
    }
    const ebayLabel = findComponent(children, EbayLabel)

    const renderCheckboxIcon = () => {
        if (checkboxState === 'true') {
            return iconChecked
        } else if (checkboxState === 'mixed') {
            return iconMixed
        }
        return iconUnchecked
    }
    return (
        <>
            <span className={containerClass} style={{ ...style, alignItems: 'center' }}>
                <input
                    {...rest}
                    aria-checked={checkboxState}
                    id={id}
                    className="checkbox__control"
                    type="checkbox"
                    checked={checkboxState === 'true'}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                />
                <span className="checkbox__icon" hidden>
                    {renderCheckboxIcon()}
                </span>
            </span>
            {ebayLabel ?
                cloneElement<EbayLabelProps>(ebayLabel, {
                    ...ebayLabel.props,
                    position: 'end',
                    htmlFor: id
                }) :
                children
            }
        </>
    )
}

export default EbayTriStateCheckbox

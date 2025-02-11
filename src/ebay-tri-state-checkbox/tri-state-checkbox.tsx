import React, { ChangeEvent, cloneElement, ComponentProps, FC, FocusEvent, KeyboardEvent, useState } from 'react'
import classNames from 'classnames'
import { EbayIcon } from '../ebay-icon'
import { EbayLabel, EbayLabelProps } from '../ebay-field'
import { findComponent } from '../common/component-utils'
import { EbayChangeEventHandler, EbayFocusEventHandler, EbayKeyboardEventHandler } from '../common/event-utils/types'

type Size = 'default' | 'large'
type CheckboxState = 'true' | 'false' | 'mixed'
type InputProps = Omit<ComponentProps<'input'>, 'size' | 'onChange' | 'onFocus' | 'onKeyDown'>
type EbayTristateCheckboxProps = {
    checked?: CheckboxState,
    indeterminate?: boolean,
    skipMixed?: boolean,
    size?: Size;
    onChange?: EbayChangeEventHandler<HTMLInputElement, { value: string | number, checked: CheckboxState }>;
    onFocus?: EbayFocusEventHandler<HTMLInputElement, { value: string | number, checked: CheckboxState }>;
    onKeyDown?: EbayKeyboardEventHandler<HTMLInputElement, { value: string | number, checked: CheckboxState }>;
    inputRef?: React.LegacyRef<HTMLInputElement>;
}

const EbayTristateCheckbox: FC<InputProps & EbayTristateCheckboxProps> = ({
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
    const [isChecked, setChecked] = useState<CheckboxState>(checked || 'false')
    const onTriggerChange = () => {
        if (isChecked === 'true') {
            setChecked('false')
        } else if (isChecked === 'false' && !skipMixed) {
            setChecked('mixed')
        } else {
            setChecked('true')
        }
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target as EventTarget & HTMLInputElement
        onTriggerChange()
        onChange(e, { value: input?.value, checked: isChecked })
    }
    const handleFocus = (e: FocusEvent<HTMLInputElement>) =>
        onFocus(e, { value: e.target?.value, checked: isChecked })

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        const input = e.target as EventTarget & HTMLInputElement
        onKeyDown(e, { value: input.value, checked: isChecked })
    }

    const containerClass = classNames('checkbox', className, { 'checkbox--large': size === 'large' })

    const iconChecked = size === 'large' ?
        <EbayIcon name="checkboxChecked24" className="checkbox__checked" /> :
        <EbayIcon name="checkboxChecked18" className="checkbox__checked" />
    const iconUnChecked = size === 'large' ?
        <EbayIcon name="checkboxUnchecked24" className="checkbox__unchecked" /> :
        <EbayIcon name="checkboxUnchecked18" className="checkbox__unchecked" />
    const iconMixed = size === 'large' ?
        <EbayIcon name="checkboxMixed24" /> :
        <EbayIcon name="checkboxMixed18" />
    const ebayLabel = findComponent(children, EbayLabel)

    const renderCheckboxIcon = () => {
        if (isChecked === 'true') {
            return iconChecked
        } else if (isChecked === 'mixed') {
            return iconMixed
        }
        return iconUnChecked
    }
    return (
        <>
            <span className={containerClass} style={{ ...style, alignItems: 'center' }}>
                <input
                    {...rest}
                    aria-checked={isChecked}
                    id={id}
                    className="checkbox__control"
                    type="checkbox"
                    checked={isChecked === 'true'}
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

export default EbayTristateCheckbox

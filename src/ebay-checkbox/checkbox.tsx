import React, {
    ChangeEvent, cloneElement, ComponentProps, FC, FocusEvent, isValidElement, KeyboardEvent, useState
} from 'react'
import classNames from 'classnames'
import { EbayIcon } from '../ebay-icon'
import { EbayLabel, EbayLabelProps } from '../ebay-field'
import { findComponent } from '../common/component-utils'
import { EbayChangeEventHandler, EbayFocusEventHandler, EbayKeyboardEventHandler } from '../common/event-utils/types'

type Size = 'default' | 'large'
type InputProps = Omit<ComponentProps<'input'>, 'size' | 'onChange' | 'onFocus' | 'onKeyDown'>
type EbayCheckboxProps = {
    size?: Size;
    onChange?: EbayChangeEventHandler<HTMLInputElement, { value: string | number, checked: boolean }>;
    onFocus?: EbayFocusEventHandler<HTMLInputElement, { value: string | number, checked: boolean }>;
    onKeyDown?: EbayKeyboardEventHandler<HTMLInputElement, { value: string | number, checked: boolean }>;
    inputRef?: React.LegacyRef<HTMLInputElement>;
}

const isControlled = checked => typeof checked !== 'undefined'

const EbayCheckbox: FC<InputProps & EbayCheckboxProps> = ({
    id,
    size = 'default',
    className,
    style,
    checked,
    defaultChecked = false,
    onChange = () => {},
    onFocus = () => {},
    onKeyDown = () => {},
    children,
    inputRef,
    ...rest
}) => {
    const [isChecked, setChecked] = useState(defaultChecked)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target
        onChange(e, { value: input?.value, checked: Boolean(input?.checked) })
        setChecked(input?.checked)
    }
    const handleFocus = (e: FocusEvent<HTMLInputElement>) =>
        onFocus(e, { value: e.target?.value, checked: Boolean(e.target?.checked) })

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        const input = e.target as EventTarget & HTMLInputElement
        onKeyDown(e, { value: input.value, checked: Boolean(input.checked) })
    }

    const containerClass = classNames('checkbox', className, { 'checkbox--large': size === 'large' })

    const iconChecked = size === 'large' ?
        <EbayIcon name="checkboxChecked24" className="checkbox__checked" /> :
        <EbayIcon name="checkboxChecked18" className="checkbox__checked" />
    const iconUnChecked = size === 'large' ?
        <EbayIcon name="checkboxUnchecked24" className="checkbox__unchecked" /> :
        <EbayIcon name="checkboxUnchecked18" className="checkbox__unchecked" />

    const ebayLabel = findComponent(children, EbayLabel)

    return (
        <>
            <span className={containerClass} style={{ ...style, alignItems: 'center' }}>
                <input
                    {...rest}
                    id={id}
                    className="checkbox__control"
                    type="checkbox"
                    checked={isControlled(checked) ? checked : isChecked}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                />
                <span className="checkbox__icon" hidden>
                    {iconChecked}{iconUnChecked}
                </span>
            </span>
            {ebayLabel ?
                isValidElement(ebayLabel) && cloneElement<EbayLabelProps>(ebayLabel, {
                    ...ebayLabel.props,
                    position: 'end',
                    htmlFor: id
                }) :
                children
            }
        </>
    )
}

export default EbayCheckbox

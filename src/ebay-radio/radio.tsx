import React, {
    ChangeEvent, FocusEvent, KeyboardEvent,
    Children, cloneElement,
    ComponentProps, FC, ReactElement
} from 'react'
import classNames from 'classnames'
import { EbayIcon } from '../ebay-icon'
import { EbayLabel, EbayLabelProps } from '../ebay-field'
import { EbayChangeEventHandler, EbayFocusEventHandler, EbayKeyboardEventHandler } from '../common/event-utils/types'

type Size = 'default' | 'large'

type EbayRadioProps = {
    size?: Size;
    onChange?: EbayChangeEventHandler<HTMLInputElement, { value: string | number }>;
    onFocus?: EbayFocusEventHandler<HTMLInputElement, { value: string | number }>;
    onKeyDown?: EbayKeyboardEventHandler<HTMLInputElement, { value: string | number }>;
}
type InputProps = Omit<ComponentProps<'input'>, 'size' | 'onChange' | 'onFocus' | 'onKeyDown'>

const EbayRadio: FC<InputProps & EbayRadioProps> = ({
    size = 'default',
    checked,
    defaultChecked,
    className,
    style,
    id,
    onChange = () => {},
    onFocus = () => {},
    onKeyDown = () => {},
    children,
    ...rest
}: InputProps & EbayRadioProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        onChange(e, { value: e.target?.value })

    const handleFocus = (e: FocusEvent<HTMLInputElement>) =>
        onFocus(e, { value: e.target?.value })

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        const radioButton = e.target as any
        return onKeyDown(e, { value: radioButton?.value })
    }

    const containerClass = classNames('radio', className, { 'radio--large': size === 'large' })

    const iconChecked = size === 'large' ?
        <EbayIcon name="radioChecked24" className="radio__checked" /> :
        <EbayIcon name="radioChecked18" className="radio__checked" />
    const iconUnChecked = size === 'large' ?
        <EbayIcon name="radioUnchecked24" className="radio__unchecked" /> :
        <EbayIcon name="radioUnchecked18" className="radio__unchecked" />

    const childrenArray = Children.toArray(children) as ReactElement[]
    const ebayLabel = childrenArray.find(child => child.type === EbayLabel)

    return (
        <>
            <span className={containerClass} style={{ ...style, alignItems: 'center' }}>
                <input
                    {...rest}
                    id={id}
                    className="radio__control"
                    type="radio"
                    defaultChecked={defaultChecked}
                    checked={checked}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onKeyDown={handleKeyDown}
                />
                <span className="radio__icon" hidden>{iconChecked}{iconUnChecked}</span>
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

export default EbayRadio

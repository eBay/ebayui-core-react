import React, { ChangeEvent, Children, cloneElement, ComponentProps, FC, ReactElement } from 'react'
import classNames from 'classnames'
import { EbayIcon } from '../ebay-icon'
import { EbayLabel, EbayLabelProps } from '../ebay-field'

type Size = 'default' | 'large'

type EbayRadioProps = {
    size?: Size;
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: string | number) => void;
}
type InputProps = Omit<ComponentProps<'input'>, 'size'>

const EbayRadio: FC<InputProps & EbayRadioProps> = ({
    size = 'default',
    checked,
    defaultChecked,
    className,
    style,
    id,
    onChange = () => {},
    children,
    ...rest
}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target

        onChange(e, input?.value)
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

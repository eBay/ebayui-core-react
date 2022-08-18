import React, { ChangeEvent, ComponentProps, FC, MouseEvent, useEffect, useState } from 'react'
import classNames from 'classnames'
import { EbayIcon } from '../ebay-icon'
import { range } from '../common/range'
import { randomId } from '../common/random-id'

type Props = ComponentProps<'div'> & {
    a11yText?: string;
    value?: string;
    a11yStarText?: string[]
    disabled?: boolean;
    name?: string;
    onKeyDown?: (e: MouseEvent, value: number) => void;
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: string | number) => void;
    onFocus?: (event: ChangeEvent<HTMLInputElement>, value: string | number) => void;
}
const getValue = (val) => {
    let value = parseInt(val, 0) || 0
    if (value > 5) {
        value = 0
    }
    return value
}
const EbayStarRatingSelect: FC<Props> = ({
    value = 0,
    a11yText,
    className,
    a11yStarText = [],
    disabled,
    onChange,
    onFocus,
    onKeyDown,
    name = `star-rating-${randomId()}`,
    ...rest
}) => {
    const [checkedValue, setChecked] = useState(getValue(value))
    useEffect(() => {
        setChecked(getValue(value))
    }, [value])
    const handleKeyDown = (i:number) => (e) => {
        if (!disabled && onKeyDown) {
            setChecked(getValue(i))
            onKeyDown(e, i)
        }
    }
    const handleClick = (i:number) => (e) => {
        if (!disabled && onChange) {
            setChecked(getValue(i))
            onChange(e, i)
        }
    }
    const handleFocus = (i:number) => (e) => {
        if (!disabled && onFocus) {
            setChecked(getValue(i))
            onFocus(e, i)
        }
    }
    return (
        <div
            role={a11yText && 'radiogroup'}
            aria-label={a11yText}
            className={classNames('star-rating-select', className)}
            {...rest}
        >
            {range(1, 5).map((i) => (
                <span className="star-rating-select__radio" key={i}>
                    <input
                        aria-label={a11yStarText && a11yStarText[i - 1]}
                        className={classNames(
                            'star-rating-select__control',
                            { 'star-rating-select__control--filled': i <= checkedValue })
                        }
                        type="radio"
                        name={name}
                        value={i}
                        disabled={disabled}
                        defaultChecked={checkedValue === i}
                        onClick={handleClick(i)}
                        onFocus={handleFocus(i)}
                        onKeyDown={handleKeyDown(i)} />
                    <span className="star-rating-select__radio-icon">
                        <EbayIcon className="star-rating__icon" name="starDynamic" />
                    </span>
                </span>
            ))}
        </div>
    )
}

export default EbayStarRatingSelect

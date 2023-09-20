import React, { useState, useEffect, FC, ChangeEvent, ComponentProps } from 'react'
import classNames from 'classnames'
import { EbayChangeEventHandler } from '../common/event-utils/types'

type Props = Omit<ComponentProps<'input'>, 'onChange'> & {
    onChange?: EbayChangeEventHandler<HTMLInputElement, { value: string | number, checked: boolean }>;
}

const EbaySwitch: FC<Props> = ({
    id,
    value,
    name,
    className,
    checked,
    onChange = () => {},
    ...rest
}) => {
    const [isChecked, setChecked] = useState(!!checked)

    useEffect(() => {
        setChecked(!!checked)
    }, [checked])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value: inputValue = '', checked: inputChecked = false } = e.target || {}

        onChange(e, {
            value: inputValue,
            checked: inputChecked
        })
        setChecked(inputChecked)
    }

    return (
        <span className="switch">
            <input
                {...rest}
                className={classNames('switch__control', className)}
                id={id}
                role="switch"
                type="checkbox"
                value={value}
                aria-checked={isChecked}
                checked={isChecked}
                name={name}
                onChange={handleChange}
            />
            <span className="switch__button" />
        </span>
    )
}

export default EbaySwitch

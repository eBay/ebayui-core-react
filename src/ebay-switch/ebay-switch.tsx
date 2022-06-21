import React, { useState, useEffect, FC, ChangeEvent, ComponentProps } from 'react'
import classNames from 'classnames'

type Props = ComponentProps<'input'> & {
    onChange?: (e: ChangeEvent<HTMLInputElement>, value: string | number, checked: boolean) => void;
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

    const handleChange = (e) => {
        const input = e.target || {}

        onChange(e, input.value, input.checked)
        setChecked(input.checked)
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

import React, { ReactElement, cloneElement, useState, useCallback } from 'react'
import cx from 'classnames'
import { filterByType } from '../common/component-utils'
import {
    ToggleButtonEvent,
    ToggleButtonProps
} from '../ebay-toggle-button/types'

import { EbayToggleButton } from '../ebay-toggle-button'
import { ToggleButtonGroupProps } from './types'

const EbayToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
    a11yText,
    a11yLabelId,
    layoutType = 'minimal',
    variant = 'checkbox',
    children,
    columnsMin,
    columnsXS,
    columnsSM,
    columnsMD,
    columnsXL,
    onChange,
    className,
    ...rest
}) => {
    const buttons = filterByType(children, EbayToggleButton)
    const getInitialPressedButtons = () =>
        buttons.reduce((acc: Record<number, boolean>, button, i) => {
            acc[i] = button.props.pressed || false
            return acc
        }, {})

    const [pressedButtons, setPressedButtons] = useState<
        Record<number, boolean>
    >(getInitialPressedButtons)

    const handleToggle = useCallback(
        (toggleEvent: ToggleButtonEvent, index: number) => {
            setPressedButtons((prevState: Record<number, boolean>) => {
                let newState: Record<number, boolean> = {}

                switch (variant) {
                    case 'checkbox':
                        newState = { ...prevState }
                        newState[index] = !prevState[index]
                        break
                    case 'radio-toggle':
                        newState[index] = !prevState[index]
                        break
                    case 'radio':
                        newState[index] = true
                        break
                    default:
                        break
                }
                if (onChange) {
                    onChange(toggleEvent, newState)
                }
                return newState
            })
        },
        [variant, onChange]
    )

    return (
        <div
            className={cx(className, 'toggle-button-group')}
            data-columns-min={columnsMin}
            data-columns-xs={columnsXS}
            data-columns-sm={columnsSM}
            data-columns-md={columnsMD}
            data-columns-xl={columnsXL}
            {...rest}
        >
            <ul aria-label={a11yText} aria-labelledby={a11yLabelId}>
                {buttons.map((button: ReactElement, i: number) => {
                    const { ...buttonRest }: ToggleButtonProps = button.props

                    return (
                        <li key={i}>
                            {cloneElement(button, {
                                layoutType,
                                ...buttonRest,
                                pressed: pressedButtons[i],
                                onClick: (e: ToggleButtonEvent) =>
                                    handleToggle(e, i)
                            } as ToggleButtonProps)}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default EbayToggleButtonGroup

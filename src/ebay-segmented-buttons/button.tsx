import React, { FC } from 'react'
import classNames from 'classnames'
import { excludeComponent, findComponent } from '../common/component-utils'
import { EbayIcon } from '../ebay-icon'
import { SegmentedButtonProps } from './types'

const SegmentedButton: FC<SegmentedButtonProps> = ({
    selected,
    children,
    onClick
}) => {
    const icon = findComponent(children, EbayIcon)

    const iconWithText = () => {
        const text = excludeComponent(children, EbayIcon)

        return (
            <span className="segmented-buttons__button-cell">
                {icon}
                <span>{text}</span>
            </span>
        )
    }

    return (
        <li>
            <button
                className={classNames('segmented-buttons__button')}
                aria-current={selected || undefined}
                onClick={onClick}
            >
                {icon ? iconWithText() : children}
            </button>
        </li>
    )
}

export default SegmentedButton

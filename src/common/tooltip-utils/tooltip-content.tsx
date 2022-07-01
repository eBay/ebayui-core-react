import React, { FC, CSSProperties, ReactNode } from 'react'
import { EbayIcon } from '../../ebay-icon'
import { findComponent } from '../component-utils'
import { PointerDirection, TooltipType } from './types'
import { DEFAULT_POINTER_DIRECTION, POINTER_STYLES } from './constants'
import TooltipCloseButton from './tooltip-close-button'

type TooltipContentProps = {
    id?: string;
    type?: TooltipType;
    style?: CSSProperties;
    pointer?: PointerDirection;
    showCloseButton?: boolean;
    a11yCloseText?: string;
    onClose?: () => void;
    children?: ReactNode;
}

const TooltipContent: FC<TooltipContentProps> = ({
    id,
    style,
    pointer = DEFAULT_POINTER_DIRECTION,
    children,
    type = 'tooltip',
    showCloseButton,
    a11yCloseText,
    onClose
}) => {
    const closeButton = findComponent(children, TooltipCloseButton)

    return (
        <span
            className={`${type}__overlay`}
            id={id}
            role="tooltip"
            style={{ ...POINTER_STYLES[pointer], ...style }}>
            <span className={`${type}__pointer ${type}__pointer--${pointer}`} />
            <span className={`${type}__mask`}>
                <span className={`${type}__cell`}>
                    <span className={`${type}__content`}>{children}</span>
                    {showCloseButton ? (
                        <button
                            {...closeButton?.props}
                            className={`icon-btn icon-btn--transparent ${type}__close`}
                            type="button"
                            aria-label={a11yCloseText}
                            onClick={onClose}
                        >
                            <EbayIcon name="close" />
                        </button>
                    ) : null}
                </span>
            </span>
        </span>
    )
}

export default TooltipContent

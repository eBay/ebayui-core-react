import React, { cloneElement, ComponentProps, FC, isValidElement, RefObject } from 'react'
import classNames from 'classnames'
import { withForwardRef } from '../component-utils/forwardRef'
import { findComponent, excludeComponent, elementProps } from '../component-utils'
import { TooltipType } from './types'
import TooltipHost from './tooltip-host'

export type TooltipProps = ComponentProps<'span'> & {
    type?: TooltipType;
    isExpanded?: boolean;
    forwardedRef?: RefObject<HTMLSpanElement>;
}

const Tooltip: FC<TooltipProps> = ({
    className,
    type,
    isExpanded,
    children,
    forwardedRef,
    ...rest
}) => {
    const originalHostComponent = findComponent(children, TooltipHost)
    const content = excludeComponent(children, TooltipHost)[0]

    if (!originalHostComponent) {
        throw new Error(`Tooltip: Please use a TooltipHost that defines the host of the tooltip`)
    }

    const host =
        isValidElement(originalHostComponent) &&
        cloneElement(originalHostComponent, {
            className: `${type}__host`,
            'aria-expanded': isExpanded,
            'aria-describedby': elementProps(content).id,
            ...originalHostComponent.props
        })

    return (
        <span
            {...rest}
            ref={forwardedRef}
            className={classNames(className, type, {
                [`${type}--expanded`]: isExpanded
            })}
        >
            {host}
            {content}
        </span>
    )
}

export default withForwardRef(Tooltip)

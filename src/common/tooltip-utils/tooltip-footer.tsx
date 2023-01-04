import React, { ComponentProps, FC } from 'react'
import classNames from 'classnames'

type TooltipFooterProps = ComponentProps<'div'> & {
    type?: string;
    displayPagination?: boolean;
    footerIndex?: string;
}

const TooltipFooter: FC<TooltipFooterProps> = (
    {
        displayPagination = false,
        children,
        className,
        footerIndex,
        type = 'tourtip'
    }) => {
    const shouldDisplayPagination = displayPagination && footerIndex !== undefined
    return (
        <div className={classNames(`${type}__footer`, className)}>
            {
                shouldDisplayPagination &&
                    (
                        <span className={`${type}__index`}>
                            {footerIndex}
                        </span>
                    )
            }
            {children}
        </div>
    )
}
export default TooltipFooter

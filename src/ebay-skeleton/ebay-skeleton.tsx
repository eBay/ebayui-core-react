import React, { ComponentProps, FC } from 'react'
import classNames from 'classnames'

export type EbaySkeletonProps = ComponentProps<'div'> & {
    color?: 'purple' | 'green' | 'blue'
}

const EbaySkeleton: FC<EbaySkeletonProps> = ({
    children,
    className,
    'aria-label': ariaLabel = 'Loading...',
    color,
    ...rest
}) => (
    <div
        role="img"
        className={classNames('skeleton', color && `skeleton--${color}`, className)}
        aria-label={ariaLabel}
        {...rest}
    >
        {children}
    </div>
)

export default EbaySkeleton

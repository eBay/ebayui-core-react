import React, { ComponentProps, FC } from 'react'
import classNames from 'classnames'

export type Props = ComponentProps<'div'> & {
    a11yText?: string;
}

const EbaySkeleton: FC<Props> = ({
    children,
    a11yText = 'Loading...',
    className,
    ...rest
}) => (
    <div
        role="img"
        aria-label={a11yText}
        className={classNames('skeleton', className)}
        {...rest}
    >
        {children}
    </div>
)

export default EbaySkeleton

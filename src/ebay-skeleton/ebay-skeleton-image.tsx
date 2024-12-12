import React, { ComponentProps, FC } from 'react'
import classNames from 'classnames'

export type Props = ComponentProps<'div'> & {
    a11yText?: string;
}

const EbaySkeletonImage: FC<Props> = ({
    className,
    ...rest
}) => (
    <div
        className={classNames('skeleton__image', className)}
        {...rest}
    />
)

export default EbaySkeletonImage

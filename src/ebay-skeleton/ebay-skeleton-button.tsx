import React, { ComponentProps, FC } from 'react'
import classNames from 'classnames'

export type Props = ComponentProps<'div'> & {
    size?: 'small' | 'large';
}

const EbaySkeletonButton: FC<Props> = ({
    size,
    className,
    ...rest
}) => (
    <div
        className={classNames(
            'skeleton__button',
            size ? `skeleton__button--${size}` : '',
            className)}
        {...rest}
    />
)

export default EbaySkeletonButton

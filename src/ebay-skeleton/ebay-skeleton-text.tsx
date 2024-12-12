import React, { ComponentProps, FC } from 'react'
import classNames from 'classnames'

export type Props = ComponentProps<'div'> & {
    size?: 'small' | 'large';
    multiline?: boolean;
}

const EbaySkeletonText: FC<Props> = ({
    className,
    size,
    multiline,
    ...rest
}) => (
    <div
        className={classNames(
            'skeleton__text',
            multiline && 'skeleton__text--multiline',
            size === 'large' && `skeleton__text--large`,
            className
        )}
        {...rest}
    />
)

export default EbaySkeletonText

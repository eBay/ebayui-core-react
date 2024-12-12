import React, { ComponentProps, FC } from 'react'
import classNames from 'classnames'

export type Props = ComponentProps<'div'>

const EbaySkeletonText: FC<Props> = ({
    className,
    ...rest
}) => (
    <div
        className={classNames('skeleton__textbox', className)}
        {...rest}
    />
)

export default EbaySkeletonText

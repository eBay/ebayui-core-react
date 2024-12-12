import React, { ComponentProps, FC } from 'react'
import classNames from 'classnames'
import { NativeTags } from './nativeTags'

export type Props = {
    as?: NativeTags,
    className?: string
}

const EbaySkeletonAvatar: FC<Props> = ({
    as = 'div',
    className,
    ...rest
}) => {
    const NativeTag = as
    return (
        <NativeTag className={classNames('skeleton__avatar', className)} {...rest} />
    )
}

export default EbaySkeletonAvatar

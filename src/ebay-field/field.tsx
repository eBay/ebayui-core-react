import React, { FC } from 'react'
import classNames from 'classnames'
import { FieldLayoutType } from './types'

type FieldProps = {
    className?: string;
    layout?: FieldLayoutType;
};

const Field: FC<FieldProps> = ({
    className,
    layout = 'inline',
    children
}) => {
    const WrapperElement = layout === 'block' ? 'div' : 'span'
    return (
        <WrapperElement className={classNames('field', className)}>
            {children}
        </WrapperElement>
    )
}

export default Field

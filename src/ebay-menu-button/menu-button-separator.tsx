import React, { ComponentProps, FC } from 'react'
import classNames from 'classnames'

export type EbayMenuButtonSeparatorProps = ComponentProps<'hr'>

const EbayMenuButtonSeparator: FC<EbayMenuButtonSeparatorProps> = ({
    className,
    ...rest
}) => (
    <hr
        {...rest}
        className={classNames(className, 'menu-button__separator')}
        role="separator"
    />
)

export default EbayMenuButtonSeparator

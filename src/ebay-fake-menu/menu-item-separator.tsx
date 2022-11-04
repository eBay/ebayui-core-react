import React, { ComponentProps, FC } from 'react'
import classNames from 'classnames'

type Props = ComponentProps<'hr'>

const EbayMenuItemSeparator: FC<Props> = ({
    className,
    ...rest
}) => (
    <hr
        {...rest}
        className={classNames(className, 'fake-menu__separator')}
        role="separator"
    />
)

export default EbayMenuItemSeparator

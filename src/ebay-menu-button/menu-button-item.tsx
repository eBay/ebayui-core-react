import React, { FC } from 'react'
import classNames from 'classnames'
import { EbayMenuItem, MenuItemProps } from '../ebay-menu'

const EbayMenuButtonItem: FC<MenuItemProps> = ({
    className,
    ...rest
}) => (
    <EbayMenuItem
        {...rest}
        className={classNames(className, 'menu-button__item')}
    />
)

export default EbayMenuButtonItem

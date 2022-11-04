import React, { ComponentProps, FC } from 'react'
import classNames from 'classnames'
import { EbayIcon } from '../index'

export type EbayFakeMenuItemProps = Omit<ComponentProps<'a'>, 'onKeyDown'> & {
    checked?: boolean;
}

const EbayMenuItem: FC<EbayFakeMenuItemProps> = ({
    className,
    checked,
    children,
    ...rest
}) => (
    <a
        {...rest}
        className={classNames(className, 'fake-menu__item')}
        aria-current={checked ? 'page' : undefined}
    >
        <span>
            {children}
        </span>
        <EbayIcon name="tickSmall" />
    </a>
)

export default EbayMenuItem

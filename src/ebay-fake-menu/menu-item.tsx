import React, { ComponentProps, FC } from 'react'
import classNames from 'classnames'
import { EbayIcon } from '../index'

export type EbayFakeMenuItemProps = Omit<ComponentProps<'a'>, 'onKeyDown'> & {
    current?: boolean;
    disabled?: boolean;
}

const EbayMenuItem: FC<EbayFakeMenuItemProps> = ({
    className,
    current,
    disabled,
    children,
    ...rest
}) => (
    <a
        {...rest}
        className={classNames(className, 'fake-menu__item')}
        aria-disabled={disabled ? 'true' : undefined}
    >
        <span>
            {children}
        </span>
        <EbayIcon name="tickSmall" />
    </a>
)

export default EbayMenuItem

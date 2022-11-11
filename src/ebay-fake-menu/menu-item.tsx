import React, { ComponentProps, FC, useEffect } from 'react'
import classNames from 'classnames'
import { EbayIcon } from '../index'

export type EbayFakeMenuItemProps = Omit<ComponentProps<'a'>, 'onKeyDown'> & {
    current?: boolean;
    disabled?: boolean;
    itemRef?: any;
}

const EbayMenuItem: FC<EbayFakeMenuItemProps> = ({
    className,
    current,
    disabled,
    itemRef,
    children,
    ...rest
}) => {
    useEffect(() => {
        if (itemRef) {
            itemRef.current?.focus()
        }
    })

    return (
        <a
            {...rest}
            ref={itemRef}
            className={classNames(className, 'fake-menu__item')}
            aria-disabled={disabled ? 'true' : undefined}
        >
            <span>
                {children}
            </span>
            <EbayIcon name="tickSmall" />
        </a>
    )
}

export default EbayMenuItem

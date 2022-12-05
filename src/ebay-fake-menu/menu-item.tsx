import React, { ComponentProps, FC, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { EbayIcon } from '../index'

export type EbayFakeMenuItemProps = Omit<ComponentProps<'a'>, 'onKeyDown'> & {
    current?: boolean;
    disabled?: boolean;
    autoFocus?: boolean;
    showTickSmall?: boolean;
    onClick?: (e: Event) => void;
}

const EbayMenuItem: FC<EbayFakeMenuItemProps> = ({
    className,
    current,
    disabled,
    autoFocus,
    children,
    showTickSmall = true,
    ...rest
}) => {
    const ref = useRef<HTMLAnchorElement>()

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus()
        }
    })

    return (
        <a
            {...rest}
            ref={ref}
            className={classNames(className, 'fake-menu__item')}
            aria-disabled={disabled ? 'true' : undefined}
        >
            <span>
                {children}
            </span>
            {showTickSmall && <EbayIcon name="tickSmall" />}
        </a>
    )
}

export default EbayMenuItem

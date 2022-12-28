import React, { ComponentProps, FC, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { EbayBadge } from '../ebay-badge'
import { EbayIcon } from '../ebay-icon'

export type MenuItemProps = ComponentProps<'div'> & {
    focused?: boolean;
    tabIndex?: number;
    checked?: boolean;
    value?: string;
    disabled?: boolean;
    badgeNumber?: number;
}

const EbayMenuItem: FC<MenuItemProps> = ({
    className,
    checked,
    focused = false,
    tabIndex,
    disabled,
    badgeNumber,
    children,
    ...rest
}) => {
    const ref = useRef(null)
    const hasBadge = badgeNumber !== undefined

    useEffect(() => {
        if (ref.current && focused) {
            ref.current.focus()
        }
    }, [ref, focused])

    return (
        <div
            {...rest}
            ref={ref}
            className={classNames(className, 'menu__item', hasBadge && 'menu__item--badged')}
            role="menuitem"
            aria-checked={checked}
            aria-disabled={disabled}
            aria-hidden={hasBadge}
            tabIndex={focused ? 0 : tabIndex}
        >
            <span>
                {children}
                {hasBadge && <EbayBadge type="menu" number={badgeNumber} />}
            </span>
            <EbayIcon name="tickSmall" />
        </div>
    )
}

export default EbayMenuItem

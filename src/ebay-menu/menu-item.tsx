import React, { ComponentProps, FC, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { EbayBadge } from '../ebay-badge'
import { EbayIcon } from '../ebay-icon'

export type MenuItemProps = Omit<ComponentProps<'div'>, 'onKeyDown'> & {
    focused?: boolean;
    tabIndex?: number;
    checked?: boolean;
    value?: string;
    disabled?: boolean;
    badgeNumber?: number;
    badgeAriaLabel?: string;
}

const EbayMenuItem: FC<MenuItemProps> = ({
    className,
    checked,
    focused = false,
    tabIndex,
    disabled,
    badgeNumber,
    badgeAriaLabel,
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
            aria-label={badgeAriaLabel}
            {...rest}
            ref={ref}
            className={classNames(className, 'menu__item', hasBadge && 'menu__item--badged')}
            role="menuitem"
            aria-checked={checked || undefined}
            aria-disabled={disabled}
            tabIndex={focused ? 0 : tabIndex}
        >
            <span aria-hidden={hasBadge}>
                {children}
                {hasBadge && <EbayBadge type="menu" number={badgeNumber} />}
            </span>
            <EbayIcon name="tickSmall" />
        </div>
    )
}

export default EbayMenuItem

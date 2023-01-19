import React, { ComponentProps, FC, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { EbayBadge } from '../ebay-badge'
import { EbayIcon } from '../ebay-icon'
import { EbayMenuType } from './types'

export type MenuItemProps = Omit<ComponentProps<'div'>, 'onKeyDown'> & {
    type?: EbayMenuType;
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
    type,
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

    const checkable: EbayMenuType[] = ['radio', 'checkbox']

    return (
        <div
            aria-label={badgeAriaLabel}
            {...rest}
            ref={ref}
            className={classNames(className, 'menu__item', hasBadge && 'menu__item--badged')}
            role={roleFromType(type)}
            aria-checked={checkable.includes(type) ? checked : undefined}
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

function roleFromType(type: EbayMenuType) {
    const roles: Record<EbayMenuType, string> = {
        radio: 'menuitemradio',
        checkbox: 'menuitemcheckbox'
    }
    return roles[type] || 'menuitem'
}

export default EbayMenuItem

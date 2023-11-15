import React, { ComponentProps, FC, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { EbayIcon } from '../ebay-icon'
import { EbayBadge } from '../ebay-badge'

export type EbayMenuItemType = 'button'
export type EbayFakeMenuItemProps =
    Omit<ComponentProps<'a'>, 'onKeyDown' | 'onMouseDown'> &
    Omit<ComponentProps<'button'>, 'onKeyDown' | 'onMouseDown'> &
    {
        current?: boolean;
        disabled?: boolean;
        autoFocus?: boolean;
        type?: EbayMenuItemType;
        badgeNumber?: number;
        badgeAriaLabel?: string;
    }

const EbayMenuItem: FC<EbayFakeMenuItemProps> = ({
    className,
    current,
    disabled,
    autoFocus,
    type,
    badgeNumber,
    badgeAriaLabel,
    children,
    ...rest
}) => {
    const ref = useRef<HTMLAnchorElement & HTMLButtonElement>()
    const hasBadge = badgeNumber !== undefined

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus()
        }
    })

    const itemProps = {
        ...rest,
        ref,
        className: classNames(
            className,
            'fake-menu__item',
            hasBadge && 'menu__item--badged'),
        'aria-label': badgeAriaLabel
    }

    const tick = <EbayIcon name="tick16" />
    const badgeStyleFix = {
        marginLeft: 'var(--spacing-100)',
        marginRight: 'var(--spacing-100)'
    }
    const badge = hasBadge && <EbayBadge type="menu" number={badgeNumber} style={badgeStyleFix} />

    return type === 'button' ? (
        <button
            {...itemProps}
            type="button"
            disabled={disabled}

        >
            <span>
                {children}
                {badge}
            </span>
            {tick}
        </button>
    ) : (
        <a
            {...itemProps}
            aria-disabled={disabled ? 'true' : undefined}
        >
            <span>
                {children}
                {badge}
            </span>
            {tick}
        </a>
    )
}

export default EbayMenuItem

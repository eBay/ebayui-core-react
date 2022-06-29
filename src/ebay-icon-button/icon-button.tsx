import React, { ComponentProps, FC } from 'react'
import classNames from 'classnames'
import { EbayIcon, Icon } from '../ebay-icon'
import { EbayBadge } from '../ebay-badge'

export type EbayIconButtonProps = {
    href?: string;
    icon: Icon;
    badgeNumber?: number;
    badgeAriaLabel?: string;
    transparent?: boolean;
}

type HTMLButtonProps = ComponentProps<'button'>;
type HTMLAnchorProps = ComponentProps<'a'>;
type Props = EbayIconButtonProps & HTMLButtonProps & HTMLAnchorProps;

const EbayIconButton:FC<Props> = ({
    href,
    icon,
    badgeNumber,
    badgeAriaLabel,
    transparent,
    className: extraClasses,
    ...rest
}) => {
    const classPrefix = href ? 'icon-link' : 'icon-btn'
    const className = classNames(
        extraClasses,
        classPrefix,
        {
            [`${classPrefix}--badged`]: badgeNumber,
            [`${classPrefix}--transparent`]: transparent
        }
    )
    const children = (
        <>
            <EbayIcon name={icon} />
            {badgeNumber && <EbayBadge type="icon" number={badgeNumber} aria-label={badgeAriaLabel} />}
        </>
    )

    return href ? (
        <a
            className={className}
            href={href}
            {...rest}
        >
            {children}
        </a>
    ) : (
        <button
            type="button"
            className={className}
            {...rest}
        >
            {children}
        </button>
    )
}

export default EbayIconButton

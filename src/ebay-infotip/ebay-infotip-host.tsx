import React, { ComponentProps, FC, RefObject } from 'react'
import classNames from 'classnames/dedupe'
import { EbayIcon, Icon } from '../ebay-icon'
import { withForwardRef } from '../common/component-utils/forwardRef'
import { Variant } from './types'

type InfotipHostProps = ComponentProps<'button'> & {
    icon?: Icon;
    forwardedRef?: RefObject<HTMLAnchorElement & HTMLButtonElement>;
    variant?: Variant;
}

const EbayInfotipHost: FC<InfotipHostProps> = ({
    icon,
    className,
    children,
    forwardedRef,
    variant,
    ...rest
}) => {
    const classPrefix = variant === 'modal' ? 'dialog--mini' : 'infotip'
    const buttonIcon = <EbayIcon name={icon} />
    const buttonContent = typeof children === 'function' ? children({ icon: buttonIcon }) : children

    return (
        <button
            {...rest}
            className={classNames('icon-btn icon-btn--transparent', className, `${classPrefix}__host`)}
            type="button"
            ref={forwardedRef}>
            {buttonContent || buttonIcon}
        </button>
    )
}

export default withForwardRef(EbayInfotipHost)

import React, { ComponentProps, FC, RefObject, ReactNode } from 'react'
import classNames from 'classnames/dedupe'
import { EbayIcon, Icon } from '../ebay-icon'
import { withForwardRef } from '../common/component-utils/forwardRef'
import { Variant } from './types'

export type InfotipHostProps = ComponentProps<'button'> & {
    icon?: Icon;
    forwardedRef?: RefObject<HTMLAnchorElement & HTMLButtonElement>;
    variant?: Variant;
    children?: (({ icon }) => ReactNode) | ReactNode
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
    let buttonContent = children

    if (children instanceof Function) {
        buttonContent = children({ icon: buttonIcon })
    }

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

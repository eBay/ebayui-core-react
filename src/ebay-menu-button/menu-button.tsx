import React, { cloneElement, FC, useEffect, useState } from 'react'
import classnames from 'classnames'
import { filterByType, findComponent } from '../common/component-utils'
import { randomId } from '../common/random-id'
import { EbayMenuButtonItem, EbayMenuButtonLabel, EbayMenuButtonSeparator } from '.'
import {
    EbayButton,
    EbayButtonProps,
    EbayIconButton,
    EbayMenu,
    EbayMenuType,
    Icon
} from '..'

export type EbayMenuButtonVariant = 'overflow' | 'default'
export type EbayMenuButtonProps = {
    a11yText?: string;
    className?: string;
    fixWidth?: boolean;
    icon?: Icon;
    onCollapse?: () => void;
    onExpand?: () => void;
    reverse?: boolean;
    text?: string;
    type?: EbayMenuType;
    variant?: EbayMenuButtonVariant;
}

const EbayMenuButton: FC<Omit<EbayButtonProps, 'type'> & EbayMenuButtonProps> = ({
    type,
    variant = 'default',
    className,
    text = '',
    icon = 'overflow',
    borderless,
    fixWidth,
    reverse,
    a11yText,
    onExpand = () => {},
    onCollapse = () => {},
    children,
    ...rest
}) => {
    const [expanded, setExpanded] = useState(false)
    const [menuId, setMenuId] = useState<string|undefined>()

    const label = findComponent(children, EbayMenuButtonLabel) || text
    const menuItems = filterByType(children, [EbayMenuButtonItem, EbayMenuButtonSeparator])
    const wrapperClasses = classnames('menu-button', className)
    const menuClasses = classnames('menu-button__menu', {
        'menu-button__menu--fix-width': fixWidth,
        'menu-button__menu--reverse': reverse
    })

    useEffect(() => {
        if (expanded === true) onExpand()
        if (expanded === false) onCollapse()
    }, [ expanded ])

    useEffect(() => {
        setMenuId(randomId())
    }, [])

    const buttonProps = {
        className: 'menu-button__button',
        'aria-expanded': !!expanded,
        'aria-haspopup': true,
        'aria-label': a11yText,
        'aria-controls': menuId,
        borderless: borderless,
        onClick: () => setExpanded(!expanded)
    }
    return (
        <span {...rest} className={wrapperClasses}>
            {variant === 'overflow' ?
                <EbayIconButton icon={icon} {...buttonProps}>
                    {label || text || null}
                </EbayIconButton> :
                <EbayButton bodyState="expand" {...buttonProps}>
                    {label || text || null}
                </EbayButton>
            }
            <EbayMenu type={type} className={menuClasses} id={menuId}>
                {menuItems.map((item, i) =>
                    cloneElement(item, {
                        ...item.props,
                        className: classnames(item.props.className, 'menu-button__item'),
                        key: i
                    })
                )}
            </EbayMenu>
        </span>
    )
}

export default EbayMenuButton

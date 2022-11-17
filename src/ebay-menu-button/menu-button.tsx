import React, { cloneElement, FC, useEffect, useState } from 'react'
import classnames from 'classnames'
import { filterByType, findComponent } from '../common/component-utils'
import { randomId } from '../common/random-id'
import { EbayMenuButtonIcon, EbayMenuButtonItem, EbayMenuButtonLabel, EbayMenuButtonSeparator } from '.'
import {
    EbayButton,
    EbayButtonProps,
    EbayIconButton,
    EbayMenu,
    EbayMenuType
} from '..'

export type EbayMenuButtonVariant = 'overflow' | 'form' | 'button'
export type EbayMenuButtonProps = {
    a11yText?: string;
    className?: string;
    fixWidth?: boolean;
    onCollapse?: () => void;
    onExpand?: () => void;
    reverse?: boolean;
    text?: string;
    type?: EbayMenuType;
    variant?: EbayMenuButtonVariant;
}

const EbayMenuButton: FC<Omit<EbayButtonProps, 'type' | 'variant'> & EbayMenuButtonProps> = ({
    type,
    variant = 'button',
    className,
    text = '',
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

    const label = findComponent(children, EbayMenuButtonLabel) || <span>{text}</span> || null
    const icon = findComponent(children, EbayMenuButtonIcon)
    const menuItems = filterByType(children, [EbayMenuButtonItem, EbayMenuButtonSeparator])
    const wrapperClasses = classnames('menu-button', className)
    const menuClasses = classnames('menu-button__menu', {
        'menu-button__menu--fix-width': fixWidth,
        'menu-button__menu--reverse': reverse
    })

    useEffect(() => {
        if (expanded === true) onExpand()
        if (expanded === false) onCollapse()
    }, [expanded])

    useEffect(() => {
        setMenuId(randomId())
    }, [])

    const buttonProps = {
        className: 'menu-button__button',
        'aria-expanded': !!expanded,
        'aria-haspopup': true,
        'aria-label': a11yText,
        'aria-controls': menuId,
        onClick: () => setExpanded(!expanded),
        ...rest
    }

    return (
        <span className={wrapperClasses}>
            {variant === 'overflow' ?
                <EbayIconButton icon="overflow" {...buttonProps} /> :
                <EbayButton bodyState="expand" {...buttonProps}>{icon}{label}</EbayButton>
            }
            {expanded &&
                <EbayMenu type={type} className={menuClasses} id={menuId}>
                    {menuItems.map((item, i) =>
                        cloneElement(item, {
                            ...item.props,
                            className: classnames(item.props.className, 'menu-button__item'),
                            key: i
                        })
                    )}
                </EbayMenu>
            }
        </span>
    )
}

export default EbayMenuButton

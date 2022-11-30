import React, { cloneElement, ComponentProps, FC, useEffect, useRef, useState } from 'react'
import classnames from 'classnames'

import { filterByType, findComponent } from '../common/component-utils'
import { handleEscapeKeydown } from '../common/event-utils'
import { randomId } from '../common/random-id'
import { EbayButton, EbayButtonProps, EbayFakeMenu, EbayFakeMenuItemProps, EbayIcon, EbayIconButton } from '..'
import { EbayFakeMenuButtonItem, EbayFakeMenuButtonLabel, EbayFakeMenuButtonSeparator } from '.'

export type EbayFakeMenuButtonVariant = 'overflow' | 'form' | 'button'

export type EbayFakeMenuButtonProps = {
    a11yText?: string;
    noToggleIcon?: boolean;
    expanded?: boolean;
    fixWidth?: boolean;
    reverse?: boolean;
    variant?: EbayFakeMenuButtonVariant;
    className?: string;
    onCollapse?: () => void;
    onExpand?: () => void;
    text?: string;
    // todo: implement the following props
    type?: 'radio' | 'checkbox';
}

type ButtonProps = Omit<EbayButtonProps, 'variant'> &
    Omit<ComponentProps<'button'>, 'type'> &
    ComponentProps<'a'>
type Props = ButtonProps & EbayFakeMenuButtonProps

const EbayMenuButton: FC<Props> = ({
    a11yText,
    noToggleIcon,
    fixWidth,
    reverse,
    variant,
    expanded: defaultExpanded = false,
    className,
    onCollapse = () => {},
    onExpand = () => {},
    text = '',
    children,
    ...rest
}) => {
    const [expanded, setExpanded] = useState(defaultExpanded)
    const [menuId, setMenuId] = useState<string|undefined>()
    const ref = useRef<HTMLButtonElement>()

    const icon = findComponent(children, EbayIcon)
    const label = findComponent(children, EbayFakeMenuButtonLabel) || (icon ? <span>{text}</span> : text)
    const menuItems = filterByType(children, [EbayFakeMenuButtonItem, EbayFakeMenuButtonSeparator])

    useEffect(() => {
        const handleBackgroundClick = (e: React.MouseEvent) => {
            if (ref.current && !ref.current.contains(e.currentTarget)) {
                setExpanded(false)
            }
        }

        if (expanded) {
            onExpand()
            // On React 18 useEffect hooks runs synchronous instead of asynchronous as React 17 or prior
            // causing the event listener to be attached to the document at the same time that the dialog
            // opens. Adding a timeout so the event is attached after the click event that opened the modal
            // is finished.
            setTimeout(() => {
                document.addEventListener('click', handleBackgroundClick as any, false)
            })
        } else if (expanded === false) {
            onCollapse()
        }
        return () => document.removeEventListener('click', handleBackgroundClick as any, false)
    }, [expanded])

    useEffect(() => {
        setMenuId(randomId())
    }, [])

    const handleMenuKeydown = e => {
        handleEscapeKeydown(e, () => {
            setExpanded(false)
            ref.current?.focus()
        })
    }

    const menuClasses = classnames('fake-menu-button__menu', {
        'menu-button__menu--fix-width': fixWidth,
        'menu-button__menu--reverse': reverse
    })

    const buttonProps: Omit<ButtonProps, 'type' | 'ref'> = {
        ref: ref as any,
        className: 'fake-menu-button__button',
        'aria-expanded': !!expanded,
        'aria-haspopup': true,
        'aria-label': a11yText,
        'aria-controls': menuId,
        onClick: () => setExpanded(!expanded),
        ...rest
    }

    return (
        <span className={classnames('fake-menu-button', className)}>
            {variant === 'overflow' ?
                <EbayIconButton icon="overflow" {...buttonProps} /> :
                <EbayButton
                    variant={variant === 'form' ? 'form' : undefined}
                    bodyState={noToggleIcon ? undefined : 'expand'}
                    {...buttonProps}
                >
                    {icon}{label}
                </EbayButton>
            }
            {expanded &&
                <EbayFakeMenu
                    className={menuClasses}
                    id={menuId}
                    tabIndex={-1}
                    onKeyDown={handleMenuKeydown}
                >
                    {menuItems.map((item, i) =>
                        cloneElement<EbayFakeMenuItemProps>(item, {
                            ...item.props,
                            className: classnames(item.props.className, 'fake-menu-button__item'),
                            key: i,
                            autoFocus: i === 0
                        })
                    )}
                </EbayFakeMenu>
            }
        </span>
    )
}

export default EbayMenuButton

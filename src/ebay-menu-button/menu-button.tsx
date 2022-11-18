import React, { cloneElement, ComponentProps, FC, useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import { filterByType, findComponent } from '../common/component-utils'
import { handleEscapeKeydown } from '../common/event-utils'
import { randomId } from '../common/random-id'

import {
    EbayMenuButtonIcon,
    EbayMenuButtonItem,
    EbayMenuButtonLabel,
    EbayMenuButtonSeparator,
    EbayMenuButtonVariant
} from '.'
import { EbayButton, EbayButtonProps, EbayIconButton, EbayMenu, EbayMenuType } from '..'

export type EbayMenuButtonProps = {
    a11yText?: string;
    className?: string;
    fixWidth?: boolean;
    reverse?: boolean;
    text?: string;
    type?: EbayMenuType;
    variant?: EbayMenuButtonVariant;
    onCollapse?: () => void;
    onExpand?: () => void;
    onChange?: (i: number, indexes: boolean | boolean[]) => void;
    onSelect?: () => void;
    expanded?: boolean;
    noToggleIcon?: boolean;
    checked?: number;
    collapseOnSelect?: boolean;
    // todo: implement the following props
    prefixId?: string;
    prefixLabel?: string;
}

type Props = Omit<EbayButtonProps, 'type' | 'variant'> &
    Omit<ComponentProps<'button'>, 'type'> &
    ComponentProps<'a'> &
    EbayMenuButtonProps

const EbayMenuButton: FC<Props> = ({
    type,
    variant = 'button',
    className,
    text = '',
    fixWidth,
    reverse,
    expanded: defaultExpanded = false,
    noToggleIcon,
    checked,
    collapseOnSelect,
    a11yText,
    onExpand = () => {},
    onCollapse = () => {},
    onChange = () => {},
    onSelect = () => {},
    children,
    ...rest
}) => {
    const [expanded, setExpanded] = useState(defaultExpanded)
    const [menuId, setMenuId] = useState<string | undefined>()
    const buttonRef = useRef(null)
    const menuRef = useRef()

    const menuItems = filterByType(children, [EbayMenuButtonItem, EbayMenuButtonSeparator])
    const [checkedIndexes, setCheckedIndexes] = useState<boolean[]>(menuItems.map(() => false))

    const label = findComponent(children, EbayMenuButtonLabel) || <span>{text}</span> || null
    const icon = findComponent(children, EbayMenuButtonIcon)
    const wrapperClasses = classnames('menu-button', className)
    const menuClasses = classnames('menu-button__menu', {
        'menu-button__menu--fix-width': fixWidth,
        'menu-button__menu--reverse': reverse
    })

    useEffect(() => {
        const handleBackgroundClick = (e: React.MouseEvent) => {
            const menuEl = menuRef.current as HTMLDivElement
            const menuClicked = menuEl && menuEl.contains(e.target as Node)
            if (collapseOnSelect || !menuClicked) {
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

    const handleMenuKeydown = (_, __, e) => {
        handleEscapeKeydown(e, () => {
            setExpanded(false)
            buttonRef.current?.focus()
        })
    }

    const buttonProps = {
        ref: buttonRef as any,
        className: 'menu-button__button',
        'aria-expanded': !!expanded,
        'aria-haspopup': true,
        'aria-label': a11yText,
        'aria-controls': menuId,
        onClick: () => setExpanded(!expanded),
        ...rest
    }

    const handleOnChange = (i: number, indexes: boolean[] | boolean) => {
        if (type === 'radio') {
            const newCheckedIndexes = checkedIndexes.map((checkedIndex, ii) => ii === i)
            setCheckedIndexes(newCheckedIndexes)
        }
        onChange(i, indexes)
    }

    const checkedIndex = () => {
        const index = checkedIndexes.findIndex(Boolean)
        return index > -1 ? index : checked
    }

    return (
        <span className={wrapperClasses}>
            {variant === 'overflow' ?
                <EbayIconButton icon="overflow" {...buttonProps} /> :
                <EbayButton
                    bodyState={noToggleIcon ? undefined : 'expand'}
                    {...buttonProps}
                >
                    {icon}{label}
                </EbayButton>
            }
            {expanded &&
                <EbayMenu
                    ref={menuRef}
                    type={type}
                    className={menuClasses}
                    id={menuId}
                    autofocus
                    checked={checkedIndex()}
                    onKeyDown={handleMenuKeydown}
                    onChange={handleOnChange}
                    onSelect={onSelect}
                >
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

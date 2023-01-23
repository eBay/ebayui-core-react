import React, { cloneElement, ComponentProps, FC, useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import { filterByType, findComponent } from '../common/component-utils'
import { handleEscapeKeydown } from '../common/event-utils'
import { randomId } from '../common/random-id'

import { EbayMenu, EbayMenuChangeEventHandler, EbayMenuSelectEventHandler, EbayMenuType } from '../ebay-menu'
import { EbayButton, EbayButtonProps } from '../ebay-button'
import { EbayIconButton } from '../ebay-icon-button'
import { EbayIcon } from '../ebay-icon'
import { EbayMenuButtonItem, EbayMenuButtonLabel, EbayMenuButtonSeparator, EbayMenuButtonVariant } from './index'

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
    onChange?: EbayMenuChangeEventHandler;
    onSelect?: EbayMenuSelectEventHandler;
    expanded?: boolean;
    noToggleIcon?: boolean;
    checked?: number;
    collapseOnSelect?: boolean;
    // todo: implement the following props
    prefixId?: string;
    prefixLabel?: string;
}

type Props = Omit<EbayButtonProps, 'type' | 'variant'> &
    Omit<ComponentProps<'button'>, 'type' | 'onChange'> &
    Omit<ComponentProps<'a'>, 'onChange'> &
    EbayMenuButtonProps

const EbayMenuButton: FC<Props> = ({
    type,
    variant = 'button',
    className,
    text = '',
    fixWidth,
    reverse,
    expanded: defaultExpanded,
    noToggleIcon,
    checked,
    collapseOnSelect,
    a11yText,
    onClick = () => {},
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
    const defaultIndexes = menuItems.map((item) => Boolean(item.props.checked))
    const [checkedIndexes, setCheckedIndexes] = useState<boolean[]>(defaultIndexes)

    const menuButtonLabel = findComponent(children, EbayMenuButtonLabel)
    const icon = findComponent(children, EbayIcon)
    const textLabel = text ? <span>{text}</span> : null
    const label = labelWithIcon(menuButtonLabel || textLabel, icon)

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

    const handleMenuKeydown = (e) => {
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
        onClick: e => {
            setExpanded(!expanded)
            onClick(e)
        },
        ...rest
    }

    const handleOnChange: EbayMenuChangeEventHandler = (e, eventProps) => {
        if (type === 'radio' || type === 'checkbox') {
            const newCheckedIndexes = checkedIndexes.map((_, i) => eventProps.indexes.includes(i))
            setCheckedIndexes(newCheckedIndexes)
        }
        onChange(e, eventProps)
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
                    variant={variant === 'form' ? 'form' : undefined}
                    bodyState={noToggleIcon ? undefined : 'expand'}
                    {...buttonProps}
                >
                    {label}
                </EbayButton>
            }
            {expanded &&
                <EbayMenu
                    ref={menuRef}
                    type={type}
                    className={menuClasses}
                    tabIndex={-1}
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
                            key: i,
                            checked: checkedIndexes[i]
                        })
                    )}
                </EbayMenu>
            }
        </span>
    )
}

function labelWithIcon(label, icon) {
    if (!icon) {
        return label
    }
    if (!label) {
        return icon
    }

    return <>{icon}{label}</>
}

export default EbayMenuButton

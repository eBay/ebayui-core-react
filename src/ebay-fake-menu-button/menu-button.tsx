import React, { cloneElement, FC, useEffect, useRef, useState } from 'react'
import classnames from 'classnames'

import { filterByType, findComponent } from '../common/component-utils'
import { randomId } from '../common/random-id'
import { EbayButton, EbayButtonProps, EbayFakeMenu, EbayFakeMenuItemProps } from '..'
import { EbayFakeMenuButtonItem, EbayFakeMenuButtonLabel, EbayFakeMenuButtonSeparator } from '.'
import { handleEscapeKeydown } from '../common/event-utils'

export type MenuButtonProps = {
    a11yText?: string;
    className?: string;
    onCollapse?: () => void;
    onExpand?: () => void;
    text?: string;
}

const EbayMenuButton: FC<EbayButtonProps & MenuButtonProps> = ({
    a11yText,
    borderless,
    children,
    className,
    onCollapse = () => {},
    onExpand = () => {},
    text = '',
    ...rest
}) => {
    const [expanded, setExpanded] = useState<boolean|undefined>()
    const [menuId, setMenuId] = useState<string|undefined>()
    const ref = useRef<HTMLButtonElement>()

    const label = findComponent(children, EbayFakeMenuButtonLabel) || text
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

    return (
        <span {...rest} className={classnames('fake-menu-button', className)}>
            <EbayButton
                ref={ref as any}
                aria-controls={menuId}
                aria-expanded={!!expanded}
                aria-haspopup
                aria-label={a11yText}
                bodyState="expand"
                borderless={borderless}
                className="fake-menu-button__button"
                onClick={() => setExpanded(!expanded)}
                {...rest}
            >
                {label || text || null}
            </EbayButton>

            <EbayFakeMenu
                className="fake-menu-button__menu"
                id={menuId}
                tabIndex={-1}
                onKeyDown={handleMenuKeydown}
            >
                {menuItems.map((item, i) =>
                    cloneElement<EbayFakeMenuItemProps>(item, {
                        ...item.props,
                        key: i,
                        autoFocus: i === 0
                    })
                )}
            </EbayFakeMenu>
        </span>
    )
}

export default EbayMenuButton

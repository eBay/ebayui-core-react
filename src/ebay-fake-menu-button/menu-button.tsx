import React, { cloneElement, FC, useEffect, useState } from 'react'
import classnames from 'classnames'
import { filterByType, findComponent } from '../common/component-utils'
import { randomId } from '../common/random-id'
import { EbayButton, EbayMenu, EbayButtonProps } from '..'
import { EbayFakeMenuButtonItem, EbayFakeMenuButtonLabel, EbayFakeMenuButtonSeparator } from '.'

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
    const [expanded, setExpanded] = useState(false)
    const [menuId, setMenuId] = useState<string|undefined>()

    const label = findComponent(children, EbayFakeMenuButtonLabel) || text
    const menuItems = filterByType(children, [EbayFakeMenuButtonItem, EbayFakeMenuButtonSeparator])
    const wrapperClasses = classnames('fake-menu-button', className)

    useEffect(() => {
        if (expanded === true) onExpand()
        if (expanded === false) onCollapse()
    }, [expanded])

    useEffect(() => {
        setMenuId(randomId())
    }, [])

    return (
        <span {...rest} className={wrapperClasses}>
            <EbayButton
                aria-controls={menuId}
                aria-expanded={!!expanded}
                aria-haspopup
                aria-label={a11yText}
                bodyState="expand"
                borderless={borderless}
                className="fake-menu-button__button"
                onClick={() => setExpanded(!expanded)}
            >
                {label || text || null}
            </EbayButton>

            <span className="fake-menu-button__menu" id={menuId}>
                <EbayMenu>
                    {menuItems.map((item, i) =>
                        cloneElement(item, {
                            ...item.props,
                            key: i
                        })
                    )}
                </EbayMenu>
            </span>
        </span>
    )
}

export default EbayMenuButton

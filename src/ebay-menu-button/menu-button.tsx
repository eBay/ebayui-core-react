import React, { cloneElement, FC, useEffect, useState } from 'react'
import classnames from 'classnames'
import { filterByType, findComponent } from '../common/component-utils'
import { EbayButton, EbayMenu, EbayButtonProps } from '..'
import { EbayMenuButtonItem, EbayMenuButtonLabel, EbayMenuButtonSeparator } from '.'
import { randomId } from '../common/random-id'

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
    const [ expanded, setExpanded ] = useState(false)
    const [menuId, setMenuId] = useState<string|undefined>()

    const label = findComponent(children, EbayMenuButtonLabel) || text
    const menuItems = filterByType(children, [EbayMenuButtonItem, EbayMenuButtonSeparator])
    const wrapperClasses = classnames('menu-button', className)

    useEffect(() => {
        if (expanded === true) onExpand()
        if (expanded === false) onCollapse()
    }, [ expanded ])

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
                className="menu-button__button"
                onClick={() => setExpanded(!expanded)}
            >
                {label || text || null}
            </EbayButton>

            <span className="menu-button__menu" id={menuId}>
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

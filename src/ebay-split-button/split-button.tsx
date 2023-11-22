import React, { FC } from 'react'
import { excludeComponent, filterByType } from '../common/component-utils'
import { EbayButton } from '../ebay-button'
import { EbayMenuButton, EbayMenuButtonItem, EbayMenuButtonSeparator } from '../ebay-menu-button'
import { Props } from './types'

const EbaySplitButton: FC<Props> = ({
    a11yMenuText,
    children,
    type,
    bodyState,
    a11yButtonLoadingText,
    onCollapse,
    onExpand,
    onSelect = () => {},
    onChange = () => {},
    ref,
    ...rest
}) => {
    const menuItemComponents = [EbayMenuButtonItem, EbayMenuButtonSeparator]
    const buttonLabel = excludeComponent(children, menuItemComponents)[0]
    const menuItems = filterByType(children, menuItemComponents)

    return (
        <span className="split-button">
            <EbayButton
                aria-label={bodyState === 'loading' ? a11yButtonLoadingText : undefined}
                {...rest}
                split="start"
                bodyState={bodyState === 'expand' ? undefined : bodyState}
            >
                {buttonLabel}
            </EbayButton>
            <EbayMenuButton
                priority={rest.priority}
                disabled={rest.disabled}
                transparent={rest.transparent}
                size={rest.size}
                type={type}
                split="end"
                reverse
                a11yText={a11yMenuText}
                onCollapse={onCollapse}
                onExpand={onExpand}
                onSelect={onSelect}
                onChange={onChange}
            >
                {menuItems}
            </EbayMenuButton>
        </span>
    )
}

export default EbaySplitButton

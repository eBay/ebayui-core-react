import React, { ComponentProps, FC } from 'react'
import { filterBy, filterByType } from '../common/component-utils'
import { EbayButton, EbayButtonProps } from '../ebay-button'
import { EbayMenuButton, EbayMenuButtonItem, EbayMenuButtonSeparator } from '../ebay-menu-button'
import { EbayMenuProps } from '../ebay-menu'

export type EbaySplitButtonProps = {
    a11yMenuText?: string;
    a11yButtonLoadingText?: string;
}

type Props =
    EbaySplitButtonProps &
    Omit<EbayButtonProps, 'ref'> &
    Omit<ComponentProps<'button'>, 'type'> &
    ComponentProps<'a'> &
    EbayMenuProps;

const EbaySplitButton: FC<Props> = ({
    a11yMenuText,
    children,
    type,
    bodyState,
    a11yButtonLoadingText,
    ref,
    ...rest
}) => {
    const menuItemComponents: FC[] = [EbayMenuButtonItem, EbayMenuButtonSeparator]
    const buttonLabel = filterBy(children, el => !menuItemComponents.includes(el.type as any))
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
                a11yText={a11yMenuText}
            >
                {menuItems}
            </EbayMenuButton>
        </span>
    )
}

export default EbaySplitButton

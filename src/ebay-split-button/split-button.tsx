import React, { ComponentProps, FC } from 'react'
import { EbayButton, EbayButtonProps } from '../ebay-button'
import { EbayMenuButton, EbayMenuButtonItem } from '../ebay-menu-button'

export type EbaySplitButtonProps = {
    a11yMenuText?: string;
}

type Props =
    EbaySplitButtonProps &
    Omit<EbayButtonProps, 'ref'> &
    ComponentProps<'button'> &
    ComponentProps<'a'>;

const EbaySplitButton: FC<Props> = ({
    a11yMenuText,
    children,
    ref,
    ...rest
}) => (
    <span className="split-button">
        <EbayButton {...rest} split="start">
            {children}
        </EbayButton>
        <EbayMenuButton
            priority={rest.priority}
            disabled={rest.disabled}
            transparent={rest.transparent}
            size={rest.size}
            split="end"
            a11yText={a11yMenuText}
        >
            <EbayMenuButtonItem>Item 1</EbayMenuButtonItem>
        </EbayMenuButton>
    </span>
)

export default EbaySplitButton

import { ComponentProps } from 'react'
import { EbayButtonProps } from '../ebay-button'
import { MenuProps } from '../ebay-menu'
import { EbayMenuButtonProps } from '../ebay-menu-button'

export type EbaySplitButtonProps = {
    a11yMenuText?: string;
    a11yButtonLoadingText?: string;
    onCollapse?: () => void;
    onExpand?: () => void;
}

type MenuEvents = 'onSelect' | 'onChange'

export type Props =
    EbaySplitButtonProps &
    Omit<EbayButtonProps, 'ref'> &
    Omit<ComponentProps<'button'>, 'type' | MenuEvents> &
    Omit<ComponentProps<'a'>, MenuEvents> &
    Omit<MenuProps, 'priority'> &
    EbayMenuButtonProps;

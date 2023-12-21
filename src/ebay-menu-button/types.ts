import { EbayMenuChangeEventHandler, EbayMenuSelectEventHandler, EbayMenuType } from '../ebay-menu'
import { EbayButtonProps } from '../ebay-button'
import { ComponentProps, ReactNode } from 'react'

export type EbayMenuButtonVariant = 'overflow' | 'form' | 'button'

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
  prefixId?: string;
  prefixLabel?: string;
}

type MenuEvents = 'onSelect' | 'onChange'
export type MenuButtonProps = Omit<EbayButtonProps, 'type' | 'variant' | 'onKeyDown'> &
  Omit<ComponentProps<'button'>, 'type' | MenuEvents> &
  Omit<ComponentProps<'a'>, MenuEvents> &
  EbayMenuButtonProps

export type LabelProps = {
  text?: string;
  prefixId?: string;
  prefixLabel?: string;
  menuButtonLabel?: ReactNode;
  icon?: ReactNode;
}

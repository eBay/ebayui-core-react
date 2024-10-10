import { ComponentProps } from 'react'
import { EbayMouseEventHandler } from '../common/event-utils/types'

export interface SegmentedButtonProps extends Omit<ComponentProps<'button'>, 'onClick'> {
    value?: string;
    selected?: boolean;
    onClick?: EbayMouseEventHandler<HTMLButtonElement>;
}

export interface SegmentedButtonsProps extends Omit<ComponentProps<'div'>, 'onChange'> {
    buttons?: SegmentedButtonProps[];
    size?: 'large' | 'regular';
    onChange?: EbayMouseEventHandler<HTMLButtonElement, { index: number, value?: string }>;
}

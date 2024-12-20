import { ComponentProps } from 'react'
import {
    EbayChangeEventHandler,
    EbayMouseEventHandler
} from '../common/event-utils/types'
import { Icon } from '../ebay-icon/types'

export type SegmentedButtonProps = Omit<ComponentProps<'button'>, 'onClick'> & {
    value?: string
    selected?: boolean
    onClick?: EbayMouseEventHandler<HTMLButtonElement>
}

export type SegmentedButtonSize = 'large' | 'regular'

export type SegmentedButtonsProps = Omit<ComponentProps<'div'>, 'onChange'> & {
    size?: SegmentedButtonSize
    onChange?: EbayChangeEventHandler<
        HTMLButtonElement,
        { index: number; value?: string }
    >
}

export type ToggleButtonEvent = {
    originalEvent: React.MouseEvent
    pressed: boolean
}

export type ToggleButtonImge = {
    src: string
    alt: string
    fillPlacement?: string
}

export type ToggleButtonProps = Omit<ComponentProps<'button'>, 'onClick'> & {
    pressed?: boolean
    title?: string
    subtitle?: string | string[]
    layoutType?: 'minimal' | 'list' | 'gallery'
    icon?: Icon
    img?: ToggleButtonImge
    onToggle?: (event: ToggleButtonEvent) => void
}

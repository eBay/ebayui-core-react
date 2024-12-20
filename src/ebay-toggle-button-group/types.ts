import { ComponentProps } from 'react'
// import { Icon } from '../ebay-icon/types'
import { ToggleButtonEvent } from '../ebay-toggle-button/types'
import {
    EbayChangeEventHandler,
    EbayMouseEventHandler
} from '../common/event-utils/types'

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

export type ToggleButtonGroupProps = Omit<ComponentProps<'div'>, 'onChange'> & {
    a11yText?: string
    a11yLabelId?: string
    variant?: 'checkbox' | 'radio' | 'radio-toggle'
    layoutType?: 'minimal' | 'list' | 'gallery'
    columnsMin?: number
    columnsXS?: number
    columnsSM?: number
    columnsMD?: number
    columnsXL?: number
    onChange?: (
        event: ToggleButtonEvent,
        pressed: Record<number, boolean>
    ) => void
}

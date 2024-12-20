import { ComponentProps } from 'react'
import { ToggleButtonEvent } from '../ebay-toggle-button/types'

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

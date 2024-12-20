import { ComponentProps } from 'react'
import { Icon } from '../ebay-icon/types'

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
    pressed: boolean
    title?: string
    subtitle?: string | string[]
    layoutType?: 'minimal' | 'list' | 'gallery'
    icon?: Icon
    img?: ToggleButtonImge
    onToggle?: (event: ToggleButtonEvent) => void
}

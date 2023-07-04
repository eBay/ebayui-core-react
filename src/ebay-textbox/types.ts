import { ComponentProps, KeyboardEvent, MouseEvent } from 'react'
import type { Icon } from '../ebay-icon'

export type Size = 'default' | 'large'

export type EbayTextboxIconProps = ComponentProps<'button'> & ComponentProps<'a'> & {
    name: Icon
    buttonAriaLabel?: string
    onClick?: (e: KeyboardEvent | MouseEvent) => void
}

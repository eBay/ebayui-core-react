import { PointerDirection, TooltipType } from './types'

/**
 * @deprecated Use TooltipType union type instead
 */
export const TOOLTIP_TYPES: TooltipType[] = [`tooltip`, `infotip`, `tourtip`]

/**
 * @deprecated Use PointerDirection union type instead
 */
export const POINTER_TYPES: PointerDirection[] = [
    `top`, `top-left`, `top-right`,
    `right`, `right-bottom`, `right-top`,
    `bottom`, `bottom-left`, `bottom-right`,
    `left`, `left-bottom`, `left-top`
]

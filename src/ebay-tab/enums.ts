import { Activation, Size } from '../ebay-tabs'

/**
 * @deprecated Use Activation union type instead
 */
export const activations: { [key: string]: Activation } = {
    AUTO: `auto`,
    MANUAL: `manual`
}

/**
 * @deprecated Use Size union type instead
 */
export const sizes: { [key: string]: Size } = {
    MEDIUM: `medium`,
    LARGE: `large`
}

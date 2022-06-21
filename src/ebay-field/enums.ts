import { FieldDescriptionPosition, FieldDescriptionType, FieldLayoutType } from './types'

/**
 * @deprecated Use FieldLayoutType union type instead
 */
export const fieldLayoutType: { [key: string]: FieldLayoutType } = {
    INLINE: `inline`,
    BLOCK: `block`
}

/**
 * @deprecated Use FieldDescriptionType union type instead
 */
export const fieldDescriptionType: { [key: string]: FieldDescriptionType } = {
    DEFAULT: `default`,
    CONFIRMATION: `confirmation`,
    INFORMATION: `information`,
    ATTENTION: `attention`
}

/**
 * @deprecated Use FieldDescriptionPosition union type instead
 */
export const fieldDescriptionPosition: { [key: string]: FieldDescriptionPosition } = {
    INLINE: `inline`,
    BELOW_FIELD: `below`,
    ABOVE_FIELD: `above`
}

import React, { FC } from 'react'
import { EbayTextboxIconProps } from './types'
import { EbayIcon } from '../ebay-icon'
import { EbayIconButton } from '../ebay-icon-button'

const EbayTextboxPostfixIcon: FC<EbayTextboxIconProps> = ({
    name,
    buttonAriaLabel,
    onClick = () => {}
}) => buttonAriaLabel ?
    <EbayIconButton
        aria-label={buttonAriaLabel}
        icon={name}
        transparent
        onClick={onClick}
    /> :
    <EbayIcon name={name} />

export default EbayTextboxPostfixIcon

import React, { FC } from 'react'
import { EbayIcon } from '../ebay-icon'
import { EbayTextboxIconProps } from './types'

const EbayTextboxPrefixIcon: FC<EbayTextboxIconProps> = ({
    name
}) => (
    <EbayIcon name={name} />
)

export default EbayTextboxPrefixIcon

import React, { FC } from 'react'
import { EbayIcon } from '../ebay-icon'
import { EbayTextboxIconProps } from './types'

const EbayTextboxPrefixIcon: FC<EbayTextboxIconProps> = ({
    name,
    ...rest
}: EbayTextboxIconProps) => (
    <EbayIcon name={name} {...rest as any} />
)

export default EbayTextboxPrefixIcon

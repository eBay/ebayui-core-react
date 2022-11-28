import React, { FC } from 'react'
import EbayButtonCell from './button-cell'
import EbayButtonText from './button-text'
import { EbayIcon } from '../ebay-icon'

const EbayButtonExpand: FC<any> = ({ children }) =>
    children ? (
        <EbayButtonCell>
            <EbayButtonText>
                {children}
            </EbayButtonText>
            <EbayIcon name="dropdown" />
        </EbayButtonCell>
    ) : (
        <EbayIcon name="dropdown" />
    )

export default EbayButtonExpand

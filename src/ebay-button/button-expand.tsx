import React, { FC } from 'react'
import EbayButtonCell from './button-cell'
import EbayButtonText from './button-text'
import { EbayIcon } from '../ebay-icon'

const EbayButtonExpand: FC = ({ children }) =>
    children ? (
        <EbayButtonCell>
            <EbayButtonText>
                {children}
            </EbayButtonText>
            <EbayIcon name="chevronDown24" />
        </EbayButtonCell>
    ) : (
        <EbayIcon name="chevronDown24" />
    )

export default EbayButtonExpand

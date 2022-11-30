import React, { FC, ReactNode } from 'react'
import EbayButtonCell from './button-cell'
import EbayButtonText from './button-text'
import { EbayIcon } from '../ebay-icon'

const EbayButtonExpand: FC = ({ children, showDropdown = true } : { children: ReactNode, showDropdown: boolean }) =>
    children ? (
        <EbayButtonCell>
            <EbayButtonText>
                {children}
            </EbayButtonText>
            {showDropdown && <EbayIcon name="dropdown" />}
        </EbayButtonCell>
    ) : (
        <EbayIcon name="dropdown" />
    )

export default EbayButtonExpand

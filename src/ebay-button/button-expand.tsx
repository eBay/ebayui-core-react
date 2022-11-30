import React, { FC, ReactNode } from 'react'
import EbayButtonCell from './button-cell'
import EbayButtonText from './button-text'
import { EbayIcon } from '../ebay-icon'

type Props = {
    children: ReactNode;
    showDropdown?: boolean;
}

const EbayButtonExpand: FC<Props> = ({ children, showDropdown }) =>
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

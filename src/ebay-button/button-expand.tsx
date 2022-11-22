import React, { FC, ReactNode } from 'react'
import EbayButtonCell from './button-cell'
import EbayButtonText from './button-text'
import { EbayIcon } from '../ebay-icon'

type Props = {
    className?: string;
    children: ReactNode;
    showDropdown?: boolean;
}

const EbayButtonExpand: FC<Props> = ({ children, ...rest }) => (
    <EbayButtonCell>
        <EbayButtonText>
            {children}
        </EbayButtonText>
        {rest?.showDropdown && <EbayIcon name="dropdown" />}
    </EbayButtonCell>
)

export default EbayButtonExpand

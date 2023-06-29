import React, { FC } from 'react'
import { EbayIcon } from '../ebay-icon'

export const ReportButton: FC = ({ children }) => (
    <button className="video-player__report-button">
        <EbayIcon name="flag24" />{children}
    </button>
)

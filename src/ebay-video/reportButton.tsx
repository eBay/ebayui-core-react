import { EbayIcon } from '../ebay-icon'
import React, { FC } from 'react'

type Props = {
    onReport: () => void;
}

export const ReportButton: FC<Props> = ({ onReport, children }) => (
    <button className="video-player__report-button" onClick={onReport}>
        <EbayIcon name="reportFlag" />{children}
    </button>
)

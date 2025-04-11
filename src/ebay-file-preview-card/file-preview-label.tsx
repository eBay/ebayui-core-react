import React, { FC } from 'react'
import { EbayIcon } from '../ebay-icon'
import { FilePreviewType } from './types'

export type EbayFilePreviewLabelProps = {
    file?: FilePreviewType
    infoText?: string
}

const EbayFilePreviewLabel: FC<EbayFilePreviewLabelProps> = ({
    file,
    infoText
}) => {
    if (file && file.type !== 'image') {
        return (
            <div className="file-preview-card__info">
                {file.type === 'video' && (
                    <EbayIcon
                        name="play16"
                        className="file-preview-card__video-icon"
                    />
                )}
                {infoText ||
                    file.name
                        .substring(file.name.lastIndexOf('.') + 1)
                        .toUpperCase()}
            </div>
        )
    }
    return <></>
}

export default EbayFilePreviewLabel

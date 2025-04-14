import React, { FC } from 'react'
import cx from 'classnames'
import { EbayProgressSpinner } from '../ebay-progress-spinner'
import { EbayIcon } from '../ebay-icon'
import { FilePreviewType } from './types'

export type EbayFilePreviewContentProps = {
    file?: FilePreviewType
    status?: 'uploading'
    seeMore?: number
}

const EbayFilePreviewContent: FC<EbayFilePreviewContentProps> = ({
    file,
    status,
    seeMore
}) => {
    if (status === 'uploading') {
        return <EbayProgressSpinner className="file-preview-card__asset" />
    }

    switch (file?.type) {
        case 'video':
            return <video className="file-preview-card__asset" src={file.src} />
        case 'image':
            // in marko implementation, file-preview-card__asset--fade class
            // is added only for image, not for videos or files
            return (
                <img
                    className={cx('file-preview-card__asset', {
                        'file-preview-card__asset--fade': seeMore && seeMore > 0
                    })}
                    src={file?.src}
                    alt={file?.name}
                />
            )
        default:
            return (
                <EbayIcon name="file24" className="file-preview-card__asset" />
            )
    }
}

export default EbayFilePreviewContent

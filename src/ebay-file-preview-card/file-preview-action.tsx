import React, { FC } from 'react'
import { EbayEventHandler } from '../common/event-utils/types'
import { EbayIconButton } from '../ebay-icon-button'
import { EbayMenuButton, EbayMenuButtonItem } from '../ebay-menu-button'
import {
    FilePreviewCardMenuAction,
    FilePreviewCardMenuActionHandler
} from './types'

export type EbayFilePreviewActionProps = {
    menuActions?: FilePreviewCardMenuAction[]
    handleMenuSelect: FilePreviewCardMenuActionHandler
    deleteText?: string
    status?: 'uploading'
    a11yCancelUploadText?: string
    onCancel?: EbayEventHandler
    onDelete?: EbayEventHandler
}

const EbayFilePreviewAction: FC<EbayFilePreviewActionProps> = ({
    status,
    menuActions,
    handleMenuSelect,
    deleteText,
    onCancel,
    onDelete,
    a11yCancelUploadText
}) => {
    if (status === 'uploading') {
        return (
            <EbayIconButton
                aria-label={a11yCancelUploadText}
                onClick={onCancel}
                className="file-preview-card__action"
                icon="close16"
            />
        )
    }
    if (menuActions?.length) {
        return (
            <>
                <EbayMenuButton
                    variant="overflow"
                    className="file-preview-card__action"
                    onSelect={handleMenuSelect}
                >
                    {menuActions.map((action) => (
                        <EbayMenuButtonItem
                            value={action.event}
                            key={action.label}
                        >
                            {action.label}
                        </EbayMenuButtonItem>
                    ))}

                    <EbayMenuButtonItem key="delete" value="delete">
                        {deleteText}
                    </EbayMenuButtonItem>
                </EbayMenuButton>
            </>
        )
    }
    return (
        <EbayIconButton
            aria-label={deleteText}
            className="file-preview-card__action"
            icon="delete16"
            onClick={onDelete}
        />
    )
}

export default EbayFilePreviewAction

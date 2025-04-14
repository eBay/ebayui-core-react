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
    deleteText?: string
    status?: 'uploading'
    a11yCancelUploadText?: string
    onMenuAction?: FilePreviewCardMenuActionHandler
    onCancel?: EbayEventHandler
    onDelete?: EbayEventHandler
}

const EbayFilePreviewAction: FC<EbayFilePreviewActionProps> = ({
    status,
    menuActions,
    onMenuAction,
    deleteText,
    onCancel,
    onDelete,
    a11yCancelUploadText
}) => {
    const handleMenuSelect: FilePreviewCardMenuActionHandler = (
        e,
        selectedProps
    ) => {
        if (selectedProps) {
            const index = selectedProps.checked?.[0]
            const eventName =
                menuActions && index !== undefined && index in menuActions
                    ? menuActions[index].event
                    : null

            if (eventName && onMenuAction) {
                onMenuAction(e, { ...selectedProps, eventName })
            } else if (onDelete) {
                // on multiple action menu click, the Delete click will trigger onDelete, not onMenuAction.
                // This is the current behavior on marko's ebay-ui
                onDelete(e)
            }
        }
    }

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

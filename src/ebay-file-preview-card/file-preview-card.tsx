import React, { FC, useMemo, ComponentProps, ElementType } from 'react'
import cx from 'classnames'
import { EbayEventHandler } from '../common/event-utils/types'
import { EbayProgressSpinner } from '../ebay-progress-spinner'
import { EbayIconButton } from '../ebay-icon-button'
import { EbayIcon } from '../ebay-icon'
import { EbayMenuButton, EbayMenuButtonItem } from '../ebay-menu-button'
import {
    FilePreviewCardMenuAction,
    FilePreviewCardMenuActionHandler
} from './types'

export type EbayFilePreviewCardProps = ComponentProps<'div'> & {
    a11yCancelUploadText?: string
    as?: ElementType
    deleteText?: string
    file?:
        | File
        | {
              name: string
              type?: File['type']
              src?: string
          }
    status?: 'uploading'
    infoText?: string
    menuActions?: FilePreviewCardMenuAction[]
    seeMore?: number
    a11ySeeMoreText?: string
    footerTitle?: string
    footerSubtitle?: string
    onMenuAction?: FilePreviewCardMenuActionHandler
    onSeeMore?: EbayEventHandler
    onDelete?: EbayEventHandler
    onCancel?: EbayEventHandler
}

const EbayFileInput: FC<EbayFilePreviewCardProps> = ({
    a11yCancelUploadText,
    status,
    as: CardEl = 'div',
    file: rawFile,
    seeMore,
    deleteText,
    footerTitle,
    footerSubtitle,
    a11ySeeMoreText,
    menuActions,
    infoText,
    onCancel,
    onDelete,
    onMenuAction,
    onSeeMore,
    ...rest
}) => {
    const previewFile = useMemo(() => {
        if (!rawFile) return undefined
        let file = rawFile as Exclude<typeof rawFile, File | undefined>
        let type
        if (rawFile?.type?.startsWith('image')) {
            type = 'image'
        } else if (rawFile?.type?.startsWith('video')) {
            type = 'video'
        }
        if (rawFile instanceof File) {
            file = {
                name: rawFile.name,
                type,
                src: type ? URL.createObjectURL(rawFile) : undefined
            }
        }
        file.type = type
        return file
    }, [rawFile])

    const handleMenuSelect: FilePreviewCardMenuActionHandler = (e, selectedProps) => {
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

    const getActionIcon = () => {
        if (seeMore) {
            return (
                <button
                    type="button"
                    className="file-preview-card__see-more"
                    onClick={onSeeMore}
                    aria-label={a11ySeeMoreText}
                >
                    <span>+{seeMore}</span>
                </button>
            )
        }

        let fileLabel
        if (previewFile && previewFile?.type !== 'image') {
            fileLabel = (
                <div className="file-preview-card__info">
                    {previewFile.type === 'video' && (
                        <EbayIcon
                            name="play16"
                            className="file-preview-card__video-icon"
                        />
                    )}
                    {infoText ||
                        previewFile.name
                            .substring(previewFile.name.lastIndexOf('.') + 1)
                            .toUpperCase()}
                </div>
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
                    {fileLabel}
                </>
            )
        }
        return (
            <>
                <EbayIconButton
                    aria-label={deleteText}
                    className="file-preview-card__action"
                    icon="delete16"
                    onClick={onDelete}
                />
                {fileLabel}
            </>
        )
    }

    let previewCardBody
    if (status === 'uploading') {
        previewCardBody = (
            <>
                <EbayProgressSpinner className="file-preview-card__asset" />
                <EbayIconButton
                    aria-label={a11yCancelUploadText}
                    onClick={onCancel}
                    className="file-preview-card__action"
                    icon="close16"
                />
            </>
        )
    } else if (previewFile?.type === 'image') {
        previewCardBody = (
            <>
                <img
                    className={cx('file-preview-card__asset', {
                        'file-preview-card__asset--fade': seeMore !== undefined
                    })}
                    src={previewFile?.src}
                    alt={previewFile?.name}
                />
                {getActionIcon()}
            </>
        )
    } else if (previewFile?.type === 'video') {
        previewCardBody = (
            <>
                <video
                    className="file-preview-card__asset"
                    src={previewFile.src}
                />
                {getActionIcon()}
            </>
        )
    } else {
        previewCardBody = (
            <>
                <EbayIcon name="file24" className="file-preview-card__asset" />
                {getActionIcon()}
            </>
        )
    }
    return (
        <CardEl className="file-preview-card" {...rest}>
            <div className="file-preview-card__body">{previewCardBody}</div>

            {footerTitle && (
                <div className="file-preview-card__footer">
                    <span>{footerTitle}</span>
                    {footerSubtitle && <span>{footerSubtitle}</span>}
                </div>
            )}
        </CardEl>
    )
}

export default EbayFileInput

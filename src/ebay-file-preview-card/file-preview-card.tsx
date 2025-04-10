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

    const getSeeMore = () => {
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
    }

    const getFileLabel = () => {
        if (previewFile && previewFile.type !== 'image') {
            return (
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
    }

    const getPreviewCardAction = () => {
        // in the marko implementation, when there is seeMore prop, there is no menu action button or delete button
        if (seeMore) {
            return getSeeMore()
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
            <>
                <EbayIconButton
                    aria-label={deleteText}
                    className="file-preview-card__action"
                    icon="delete16"
                    onClick={onDelete}
                />
            </>
        )
    }

    let previewCardContent
    if (status === 'uploading') {
        previewCardContent = (
            <>
                <EbayProgressSpinner className="file-preview-card__asset" />
                <EbayIconButton
                    aria-label={a11yCancelUploadText}
                    onClick={onCancel}
                    className="file-preview-card__action"
                    icon="close16"
                />
                {getSeeMore()}
            </>
        )
    } else if (previewFile?.type === 'image') {
        previewCardContent = (
            <>
                <img
                    className={cx('file-preview-card__asset', {
                        'file-preview-card__asset--fade': seeMore && seeMore > 0
                    })}
                    src={previewFile?.src}
                    alt={previewFile?.name}
                />
                {getPreviewCardAction()}
                {getFileLabel()}
            </>
        )
    } else if (previewFile?.type === 'video') {
        // in marko implementation, file-preview-card__asset--fade class
        // is added only for image, not for videos or files
        previewCardContent = (
            <>
                <video
                    className="file-preview-card__asset"
                    src={previewFile.src}
                />
                {getPreviewCardAction()}
                {getFileLabel()}
            </>
        )
    } else {
        previewCardContent = (
            <>
                <EbayIcon name="file24" className="file-preview-card__asset" />
                {getPreviewCardAction()}
                {getFileLabel()}
            </>
        )
    }
    return (
        <CardEl className="file-preview-card" {...rest}>
            <div className="file-preview-card__body">{previewCardContent}</div>
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

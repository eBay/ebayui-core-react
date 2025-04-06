import { ComponentProps } from 'react'
import { EbayEventHandler } from '../common/event-utils/types'

export type FilePreviewCardMenuAction = {
    event: string
    label: string
}

export type FilePreviewCardEvent = {
    file: File
    menuAction: FilePreviewCardMenuAction
    originalEvent: Event
}

export type FilePreviewCardInput = ComponentProps<'div'> & {
    a11yCancelUploadText?: string
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
    onMenuAction?: EbayMenuSelectEventHandler
    onSeeMore?: EbayEventHandler
    onDelete?: EbayEventHandler
    onCancel?: EbayEventHandler
}

type SelectProps = {
    index: number
    checked: number[]
    eventName?: string
}

export type EbayMenuSelectEventHandler = EbayEventHandler<
    HTMLElement,
    SelectProps
>

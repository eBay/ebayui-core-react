import { EbayEventHandler } from '../common/event-utils/types'

export type FilePreviewCardMenuAction = {
    event: string
    label: string
}

type MenuActionEventData = {
    index: number
    checked: number[]
    eventName?: string
}

export type FilePreviewCardMenuActionHandler = EbayEventHandler<
    HTMLElement,
    MenuActionEventData
>

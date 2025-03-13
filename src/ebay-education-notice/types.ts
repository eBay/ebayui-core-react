import { KeyboardEvent, SyntheticEvent } from 'react'

import { EbayMouseEventHandler } from '../events'

export type EducationNoticeDismissEventArgs =
    | SyntheticEvent<HTMLElement>
    | KeyboardEvent<HTMLInputElement>

export type ComboboxSelectHandler = (
    event: EducationNoticeDismissEventArgs
) => void

export type EducationDismissHandler = EbayMouseEventHandler<HTMLElement>

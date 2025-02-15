import { KeyboardEvent, SyntheticEvent } from 'react'
import {
    EbayChangeEventHandler,
    EbayFocusEventHandler,
    EbayMouseEventHandler
} from '../events'

export type Autocomplete = 'list' | 'none'
export type ListSelection = 'automatic' | 'manual'
export type EventData = {
    currentInputValue: string;
    selectedOption?: {
        text?: string;
        value?: string;
    };
}

export type OnSelectEventArgs =
    | SyntheticEvent<HTMLElement>
    | KeyboardEvent<HTMLInputElement>

export type OnSelectHandler= (event: OnSelectEventArgs, data: EventData) => void

export type OnFocusHandler= EbayFocusEventHandler<HTMLInputElement, EventData>
export type OnClickHandler= EbayMouseEventHandler<HTMLInputElement, EventData>
export type OnInputChangeHandler = EbayChangeEventHandler<HTMLInputElement, EventData>
export type OnChangeHandler= EbayChangeEventHandler<HTMLInputElement, EventData>


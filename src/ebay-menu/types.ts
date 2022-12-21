import { ComponentProps, Ref } from 'react'
import { EbayEventHandler, EbayKeyboardEventHandler } from '../common/event-utils/types'

export type EbayMenuType = 'radio' | 'checkbox'
export type EbayMenuPriority = 'primary' | 'secondary' | 'none'

type SpanProps = Omit<ComponentProps<'span'>, 'onKeyDown' | 'onChange'>
type SelectProps = {
    index: number;
    checked: number[];
}
type ChangeProps = SelectProps & {
    indexes: number[];
    checkedValues: string[];
}
export type EbayMenuKeyDownEventHandler = EbayKeyboardEventHandler<HTMLElement, SelectProps | ChangeProps>
export type EbayMenuChangeEventHandler = EbayEventHandler<HTMLElement, ChangeProps>
export type EbayMenuSelectEventHandler = EbayEventHandler<HTMLElement, SelectProps>
export type EbayMenuProps = SpanProps & {
    type?: EbayMenuType;
    priority?: EbayMenuPriority;
    checked?: number;
    autofocus?: boolean;
    onKeyDown?: EbayMenuKeyDownEventHandler;
    onChange?: EbayMenuChangeEventHandler;
    onSelect?: EbayMenuSelectEventHandler;
    forwardedRef?: Ref<HTMLDivElement>;
}

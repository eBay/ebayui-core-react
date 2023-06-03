import { ComponentProps } from 'react'

export type EbayMenuType = 'radio' | 'checkbox'
export type EbayMenuPriority = 'primary' | 'secondary' | 'none'

type ContainerDivProps = Omit<ComponentProps<'div'>, 'onKeyDown' | 'onChange' | 'onSelect'>
type ContainerSpanProps = Omit<ComponentProps<'span'>, 'onKeyDown' | 'onChange' | 'onSelect'>

export type SelectCallback = (i: number, checked: boolean) => void
export type ChangeCallback = (i: number, checked: boolean) => void
export type KeyDownCallback = (i: number, checked: boolean) => void

export type MenuProps = ContainerDivProps & ContainerSpanProps & {
    autofocus?: boolean;
    baseEl?: 'div' | 'span',
    checked?: number;
    className?: string;
    priority?: EbayMenuPriority;
    type?: EbayMenuType;
    onKeyDown?: KeyDownCallback;
    onSelect?: SelectCallback;
    onChange?: ChangeCallback;
}

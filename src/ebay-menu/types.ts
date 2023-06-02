import { ComponentProps } from 'react'

export type EbayMenuType = 'radio' | 'checkbox'
export type EbayMenuPriority = 'primary' | 'secondary' | 'none'

type ContainerDivProps = Omit<ComponentProps<'div'>, 'onKeyDown' | 'onChange' >
type ContainerSpanProps = Omit<ComponentProps<'span'>, 'onKeyDown' | 'onChange'>

export type SelectCallback = (i: number) => void
export type ChangeCallback = (i: number, checked: boolean) => void

export type MenuProps = ContainerDivProps & ContainerSpanProps & {
    autofocus?: boolean;
    baseEl?: 'div' | 'span',
    checked?: number;
    className?: string;
    priority?: EbayMenuPriority;
    type?: EbayMenuType;
    onKeyDown?: () => void;
    onSelect?: SelectCallback;
    onChange?: ChangeCallback;
}

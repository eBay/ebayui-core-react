import { KeyboardEvent, SyntheticEvent, MouseEvent } from 'react'

export type DialogCloseEvent =
  | SyntheticEvent<HTMLElement>
  | KeyboardEvent<HTMLElement>
  | MouseEvent<Element>

export type DialogCloseEventHandler = (event: DialogCloseEvent) => void

export type ClassPrefix =
    | 'fullscreen-dialog'
    | 'lightbox-dialog'
    | 'panel-dialog'
    | 'drawer-dialog'
    | 'toast-dialog'
    | 'alert-dialog'
    | 'confirm-dialog'
    | 'snackbar-dialog';

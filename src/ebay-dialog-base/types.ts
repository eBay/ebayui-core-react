import { KeyboardEvent, SyntheticEvent } from 'react'

export type DialogCloseEvent =
  | SyntheticEvent<HTMLElement>
  | KeyboardEvent<HTMLInputElement>

export type DialogCloseEventHandler = (event: DialogCloseEvent) => void

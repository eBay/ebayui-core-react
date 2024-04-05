import { EventType } from '@testing-library/react'

export type eventtype = Lowercase<EventType>
export const eventOfType = (type: eventtype) => expect.objectContaining({ type })

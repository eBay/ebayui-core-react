import { Children, FC, ReactElement, ReactNode } from 'react'
import './array.polyfill.flat' // for Mobile Safari 11

export function findComponent(nodes: ReactNode = [], componentType: FC): ReactElement | undefined {
    const elements = Children.toArray(nodes) as ReactElement[]
    return elements.find(({ type }) => type === componentType) || null
}

export function excludeComponent(nodes: ReactNode = [], componentType: FC): ReactElement[] {
    const elements = Children.toArray(nodes) as ReactElement[]
    return elements.filter(({ type }) => type !== componentType)
}

export function filterByType(nodes: ReactNode = [], componentType: FC | FC[]): ReactElement[] {
    const elements = Children.toArray(nodes) as ReactElement[]
    const types = [componentType].flat()
    return elements.filter(({ type }) => types.includes(type as any))
}

export function filterBy(nodes: ReactNode = [], predicate: (el: ReactElement) => boolean): ReactElement[] {
    const elements = Children.toArray(nodes) as ReactElement[]
    return elements.filter(predicate)
}

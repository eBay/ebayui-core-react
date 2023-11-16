import { Children, FC, isValidElement, JSXElementConstructor, ReactNode } from 'react'
import './array.polyfill.flat' // for Mobile Safari 11

export const findComponent = (nodes: ReactNode = [], componentType: FC<any>): ReactNode | undefined =>
    Children.toArray(nodes).find(child =>
        isValidElement(child) && child.type === componentType) || null

export const excludeComponent = (nodes: ReactNode = [], componentType: FC<any>): ReactNode[] =>
    Children.toArray(nodes).filter(child =>
        isValidElement(child) && child.type !== componentType)

export const filterByType = (nodes: ReactNode = [], componentType: FC<any> | FC<any>[]): ReactNode[] => {
    const types = [componentType.toString()].flat()
    return Children
        .toArray(nodes)
        .filter(child => isValidElement(child) && types.includes(child.type as string))
}

export const filterBy = (nodes: ReactNode = [], predicate: (el: ReactNode) => boolean): ReactNode[] =>
    Children.toArray(nodes).filter(predicate)

export const elementProps = (node: ReactNode): Record<string, any> => isValidElement(node) ? node.props : {}
export const elementType = (node: ReactNode): string | JSXElementConstructor<any> | null =>
    isValidElement(node) ? node.type : null

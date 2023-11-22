import { Children, FC, ForwardRefExoticComponent, isValidElement, JSXElementConstructor, ReactNode } from 'react'
import './array.polyfill.flat' // for Mobile Safari 11

const componentName =
  (component: FC<any> | JSXElementConstructor<any> | ForwardRefExoticComponent<any> | string): string | undefined => {
      switch (typeof component) {
          case 'string':
              return component
          case 'function':
              return component.name
          case 'symbol':
              return (component as any).displayName
          default:
              return undefined
      }
  }

// Returns props of a valid ReactElement
export const elementProps = (node: ReactNode): Record<string, any> => isValidElement(node) ? node.props : {}

// Returns component type name or null
export const elementType = (node: ReactNode): string | null =>
    isValidElement(node) ? componentName(node.type) : null

// Finds first node of certain component type
export const findComponent = (nodes: ReactNode = [], componentType: FC<any>): ReactNode | undefined =>
    Children.toArray(nodes).find(child => elementType(child) === componentName(componentType)) || null

// Filters nodes by predicate
export const filterBy = (nodes: ReactNode = [], predicate: (el: ReactNode) => boolean): ReactNode[] =>
    Children.toArray(nodes).filter(predicate)

// Filters nodes by component type(s)
export const filterByType = (nodes: ReactNode = [], componentType: FC<any> | FC<any>[]): ReactNode[] => {
    const types = [componentType]
        .flat()
        .map(comp => typeof comp === 'function' && comp.name)
        .filter(Boolean)
    return filterBy(nodes, child => types.includes(elementType(child)))
}

// Filters out nodes of certain component type(s)
export const excludeComponent = (nodes: ReactNode = [], componentType: FC<any> | FC<any>[]): ReactNode[] => {
    const types = [componentType]
        .flat()
        .map(comp => typeof comp === 'function' && comp.name)
        .filter(Boolean)
    return filterBy(nodes, child => !types.includes(elementType(child)))
}

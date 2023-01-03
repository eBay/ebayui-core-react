import { Children, cloneElement, ReactElement, ReactNode } from 'react'

export const applyGap = (children: ReactNode, gap: number) => {
    const childrenArray = Children.toArray(children)
    return childrenArray.map((item: ReactElement, index) => {
        const { style } = item.props

        return cloneElement(item, {
            ...item.props,
            style: {
                ...style,
                marginRight: `${gap}px`
            }
        })
    })
}

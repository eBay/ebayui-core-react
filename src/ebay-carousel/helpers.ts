import { Children, cloneElement, ReactElement, ReactNode, ReactNodeArray } from 'react'
import { MovementDirection } from './types'

export const getReactChildren = (children: ReactNode): ReactNodeArray => Children.toArray(children)

export const applyGap = (children: ReactNode, gap: number) => {
    const childrenArray = getReactChildren(children)

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

export const isNativeScrolling = (el: Element) => getComputedStyle(el).overflowX !== 'visible'

export const getMaxOffset = (items: ReactNode, slideWidth: number) => {
    const childrenArray = getReactChildren(items)
    if (!childrenArray.length) {
        return 0
    }
    return Math.max(items[childrenArray.length - 1].right - slideWidth, 0) || 0
}

export const getOffset = (items: ReactNode, index: number, slideWidth: number) => {
    const childrenArray = getReactChildren(items)
    if (!childrenArray.length) {
        return 0
    }
    return Math.min(items[index].left, getMaxOffset(items, slideWidth)) || 0
}

export const calculateSlideOffset = (targetOffset: number, direction: MovementDirection, maxOffset: number): number => {
    if ((direction === 'RIGHT') && targetOffset < maxOffset) return targetOffset
    if ((direction === 'RIGHT') && targetOffset >= maxOffset) return maxOffset
    if ((direction === 'LEFT') && targetOffset > 0) return targetOffset

    return 0
}


// export const slideToIndex = (index: number) => {
//
//
//     return newIndex;
// }

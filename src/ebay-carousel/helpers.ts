import React, { Children, cloneElement, ReactElement, ReactNode, ReactNodeArray, RefObject } from 'react'
import { ListItemRef, MovementDirection, RelativeRect } from './types'
import { LogLevel } from 'ts-loader/dist/logger'

export const getReactChildren = (children: ReactNode): ReactNodeArray => Children.toArray(children)

export function getRelativeRects(el: Element): RelativeRect {
    const parent = el.parentElement
    const currentLeft = parent
        ? parent.firstElementChild.getBoundingClientRect().left
        : 0
    const { left, right } = el.getBoundingClientRect()

    return {
        left: left - currentLeft,
        right: right - currentLeft
    }
}

export const isNativeScrolling = (el: Element) => getComputedStyle(el).overflowX !== 'visible'

export const getMaxOffset = (items: ListItemRef[], slideWidth: number) => {
    if (!items.length) {
        return 0
    }

    const lastEl = items[items.length - 1]
    return Math.max(lastEl.right - slideWidth, 0) || 0
}

export const getOffset = (items: ListItemRef[], index: number, slideWidth: number) => {
    if (!items.length) {
        return 0
    }

    return Math.min(items[index].left, getMaxOffset(items, slideWidth)) || 0
}

export const alterChildren = (
    children: ReactNode,
    itemsRef: RefObject<Array<ListItemRef | null>>,
    itemsPerSlide?: number,
    slideWidth?: number,
    offset?: number,
    gap?: number) => {
    const childrenArray = getReactChildren(children)

    return childrenArray.map((item: ReactElement, index) => {
        const { style } = item.props
        let itemWidth

        if (itemsPerSlide) {
            const itemsInSlide = itemsPerSlide + (itemsPerSlide % 1)
            itemWidth = `calc(${100 / itemsInSlide}% - ${((itemsInSlide - 1) * gap) / itemsInSlide}px)`
        }

        return cloneElement(item, {
            ...item.props,
            slideWidth,
            offset,
            ref: el => {
                itemsRef.current[index] = el
            },
            style: {
                ...style,
                width: itemWidth || style.width,
                marginRight: gap && index !== childrenArray.length - 1 ? `${gap}px` : style.marginRight
            }
        })
    })
}
/**
 * Ensures that an index is valid.
 */
const normalizeIndex = (index: number, items?: ListItemRef[], itemsPerSlide?: number) => {
    if (index > 0) {
        let result = index
        result %= items.length || 1 // Ensure index is within bounds.
        result -= result % (itemsPerSlide || 1) // Round index to the nearest valid slide index.
        result = Math.abs(result) // Ensure positive value.
        return result
    }

    return 0
}

/**
 * Gets the slide for a given index.
 * Defaults to the current index if none provided.
 */
export const getSlide = (activeIndex: number, itemsPerSlide?: number, nextIndex = activeIndex) => {
    if (!itemsPerSlide) {
        return
    }

    return Math.ceil(nextIndex / itemsPerSlide)
}

const getDelta = (direction: MovementDirection) => direction === 'LEFT' ? -1 : 1

export const getNextIndex = (
    direction: MovementDirection,
    activeIndex: number,
    items?: ListItemRef[],
    slideWidth?: number,
    itemsPerSlide?: number) => {
    let i = activeIndex
    let item

    // If going backward from 0, we go to the end.
    if (direction === 'LEFT' && i === 0) {
        i = items.length - 1
    } else {
        // Find the index of the next item that is not fully in view.
        do {
            const delta = getDelta(direction)
            item = items[i += delta]
        } while (item && item.fullyVisible)

        if (direction === 'LEFT' && !itemsPerSlide) {
            // If going left without items per slide, go as far left as possible while keeping this item fully in view.
            const targetOffset = item.right - slideWidth
            do {
                item = items[--i]
            } while (item && item.left >= targetOffset)
            i += 1
        }
    }

    return normalizeIndex(i, items, itemsPerSlide)
}

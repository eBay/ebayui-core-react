import { MAX_PAGES, MIN_PAGES } from './const'
import { ItemState, PaginationVariant } from './types'

export function pageNumbersAround(
    totalPages: number,
    selectedPage: number,
    maxVisiblePages: number = totalPages,
    withDots = false
): ItemState[] {
    const visibleItems = Math.min(maxVisiblePages, totalPages)
    const startIndexWithoutDots = Math.max(0, selectedPage - Math.ceil((visibleItems - 1) / 2))
    const startIndexWithDots = visibleItems < 4 ? selectedPage :
        Math.max(0, selectedPage - Math.floor((visibleItems - 1) / 2))
    const endIndex = (withDots ? startIndexWithDots : startIndexWithoutDots) + visibleItems
    const closeToEnd = endIndex >= totalPages

    const visibleRangeWithDots = (start: number, end: number) => {
        const items = visibleRange(totalPages, start, end)

        if (visibleItems > 2) {
            items[end - 2] = 'dots'
            items[end - 1] = 'hidden'
            items[totalPages - 1] = 'visible'
        } else if (visibleItems > 1) {
            items[end - 1] = 'dots'
        }

        return items
    }

    if (closeToEnd) {
        return visibleRange(totalPages, totalPages - visibleItems)
    }

    return withDots ?
        visibleRangeWithDots(startIndexWithDots, endIndex) :
        visibleRange(totalPages, startIndexWithoutDots, endIndex)
}

export function calcPageState(
    selectedPage: number,
    visiblePages: number,
    totalPages: number,
    variant: PaginationVariant = 'show-range'
): ItemState[] {
    if (selectedPage === -1) {
        return []
    }

    const adjustedNumPages = clamp(Math.min(totalPages, visiblePages), MIN_PAGES, MAX_PAGES)

    return pageNumbersAround(totalPages, selectedPage - 1, adjustedNumPages, variant === 'show-last')
}

function clamp(n: number, min: number, max: number): number {
    // eslint-disable-next-line no-nested-ternary
    return n <= min ? min : n >= max ? max : n
}

function visibleRange(totalItems: number, start: number, end?: number): ItemState[] {
    return Array<ItemState>(totalItems)
        .fill('hidden')
        .fill('visible', start, end)
}

/**
 * Calculates the maximum width for an element within its container.
 *
 * Based on eBayUI Core Marko implementation.
 * See https://github.com/eBay/ebayui-core/blob/v8.6.0/src/components/ebay-pagination/component.js#L119-L132
 */
export function getMaxWidth(el?: HTMLElement): number {
    if (!el) {
        return 0
    }

    el.style.width = '100vw'
    const result = el.offsetWidth
    el.style.width = null
    return result
}

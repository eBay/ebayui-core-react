import React, {
    FC, ReactNode,
    Children, useEffect,
    useRef, RefObject, useCallback, useState
} from 'react'
import classNames from 'classnames'
import { isNativeScrolling, alterChildren, getClosestIndex } from './helpers'
import { scrollTransition } from './scroll-to-transition'
import { ListItemRef } from './types'

type CarouselListProps = {
    gap?: number;
    itemsPerSlide: number;
    slideWidth: number;
    offset: number;
    activeIndex: number;
    className?: string;
    itemsRef?: RefObject<Array<ListItemRef | null>>;
    children: ReactNode;
    onSetActiveIndex: (index: number) => void
    onScroll?: ({ index }) => void;
};

let scrollTimeout = null

const CarouselList: FC<CarouselListProps> = ({
    gap = 16,
    itemsPerSlide,
    slideWidth,
    offset,
    activeIndex,
    className,
    itemsRef,
    children,
    onSetActiveIndex,
    onScroll
}) => {
    const [translateLeft, setTranslateLeft] = useState(0)
    const [skipScrolling, setSkipScrolling] = useState(false)
    const [scrollTransitioning, setScrollTransitioning] = useState(false)
    const listRef = useRef<HTMLUListElement | null>(null)

    useEffect(() => {
        const size = Children.count(children)

        if (!size) return

        if (skipScrolling) {
            setSkipScrolling(false)

            return
        }

        const list = listRef.current
        const isNativeScroll = isNativeScrolling(list)

        if (isNativeScroll) {
            setScrollTransitioning(true)
            scrollTransition(list, offset, () => setScrollTransitioning(false))
        } else {
            setTranslateLeft(offset)
        }
    }, [offset, listRef.current])

    const handleFinishScrolling = useCallback(() => {
        const scrollLeft = listRef.current.scrollLeft
        const closest = getClosestIndex(scrollLeft, itemsRef.current, slideWidth, itemsPerSlide, gap)
        if (closest !== activeIndex) {
            setSkipScrolling(true)
            onSetActiveIndex(closest)
            onScroll({ index: closest })
        }
    }, [listRef.current, itemsRef.current, slideWidth, activeIndex, onSetActiveIndex])

    const handleScroll = () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout)
        }
        scrollTimeout = setTimeout(() => {
            if (!scrollTransitioning) {
                handleFinishScrolling()
            }
        }, 640)
    }

    return (
        <div className={classNames('carousel__viewport', 'carousel__viewport--mask', className)}>
            <ul
                className="carousel__list"
                ref={listRef}
                onScroll={handleScroll}
                style={{ transform: `translate3d(${-translateLeft}px, 0, 0)` }}>
                {alterChildren(children, itemsRef, itemsPerSlide, slideWidth, offset, gap)}
            </ul>
        </div>
    )
}

export default CarouselList

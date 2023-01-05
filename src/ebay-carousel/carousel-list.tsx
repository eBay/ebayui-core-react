import React, {
    FC,
    ReactNode,
    Children,
    useEffect,
    useRef,
    RefObject
} from 'react'
import classNames from 'classnames'
import { isNativeScrolling, alterChildren } from './helpers'
import { scrollTransition } from './scroll-to-transition'
import { ListItemRef } from './types'

type CarouselListProps = {
    gap?: number;
    itemsPerSlide: number;
    slideWidth: number;
    offset: number;
    className?: string;
    itemsRef?: RefObject<Array<ListItemRef | null>>;
    children: ReactNode;
};


const CarouselList: FC<CarouselListProps> = ({
    gap = 16,
    itemsPerSlide,
    slideWidth,
    offset,
    className,
    itemsRef,
    children }) => {
    const [translateLeft, setTranslateLeft] = React.useState(0)
    const listRef = useRef()

    useEffect(() => {
        const size = Children.count(children)

        if (!size) return

        const list = listRef.current
        const isNativeScroll = isNativeScrolling(list)

        if (isNativeScroll) {
            scrollTransition(list, offset, () => {})
        } else {
            setTranslateLeft(offset)
        }
    }, [offset, listRef.current])

    return (
        <div className={classNames('carousel__viewport', 'carousel__viewport--mask', className)}>
            <ul
                className="carousel__list"
                ref={listRef}
                style={{ transform: `translate3d(${-translateLeft}px, 0, 0)` }}>
                {alterChildren(children, itemsRef, itemsPerSlide, slideWidth, offset, gap)}
            </ul>
        </div>
    )
}

export default CarouselList

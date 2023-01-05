import React, {
    FC,
    ReactNode,
    Children,
    ReactElement,
    cloneElement,
    useEffect,
    useRef,
    useState,
    forwardRef,
    RefObject
} from 'react'
import classNames from 'classnames'
import { getReactChildren, isNativeScrolling, getRelativeRects, alterChildren, getOffset } from './helpers'
import { scrollTransition } from './scroll-to-transition'
import { withForwardRef } from '../common/component-utils'

type CarouselListProps = {
    gap?: number;
    activeIndex: number;
    itemsPerSlide: number;
    slideWidth: number;
    onSetActiveIndex: (index: number) => void;
    className?: string;
    forwardedRef?: RefObject<HTMLUListElement>;
    children: ReactNode;
};


const CarouselList: FC<CarouselListProps> = ({
    gap = 16,
    activeIndex,
    itemsPerSlide,
    slideWidth,
    className,
    onSetActiveIndex,
    forwardedRef,
    children }) => {
    const [translateLeft, setTranslateLeft] = React.useState(0)

    useEffect(() => {
        const size = Children.count(children)

        if (!size || !forwardedRef.current?.children?.length) return

        const list = forwardedRef.current

        // For native scroll
        // // TODO: replace gap calculation. Hotfix logic.
        const isLastSlide = activeIndex === size - 1
        let scrollGap = -gap
        if (isLastSlide) {
            scrollGap = gap || 0
        }

        const currentOffsetEl: HTMLElement = list.children[activeIndex] as HTMLElement
        const isNativeScroll = getComputedStyle(list).overflowX !== 'visible'

        if (isNativeScroll) {
            const offset = getOffset(list.children, activeIndex, slideWidth)
            scrollTransition(list, offset, () => {})
        } else {
            const offset = getOffset(list.children, activeIndex, slideWidth)
            setTranslateLeft(offset)
        }
    }, [activeIndex])

    return (
        <div className={classNames('carousel__viewport', 'carousel__viewport--mask', className)}>
            <ul
                className="carousel__list"
                ref={forwardedRef}
                style={{ transform: `translate3d(${-translateLeft}px, 0, 0)` }}>
                {alterChildren(children, forwardedRef.current?.children, activeIndex, itemsPerSlide, slideWidth, gap)}
            </ul>
        </div>
    )
}

export default withForwardRef(CarouselList)

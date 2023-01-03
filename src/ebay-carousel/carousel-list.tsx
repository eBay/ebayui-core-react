import React, { FC, ReactNode, Children, ReactElement, cloneElement, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { applyGap, getReactChildren, isNativeScrolling } from './helpers'

type CarouselListProps = {
    gap?: number;
    activeIndex: number;
    onSetActiveIndex: (index: number) => void;
    className?: string;
};


const CarouselList: FC<CarouselListProps> = ({ gap, activeIndex, className, onSetActiveIndex, children }) => {
    const [translateLeft, setTranslateLeft] = React.useState(0)
    const listRef = useRef(null)

    useEffect(() => {
        const size = Children.count(children)

        if (!size || !listRef.current) return

        const list = listRef.current

        // For native scroll
        // // TODO: replace gap calculation. Hotfix logic.
        // const isFirstSlide = activeIndex === 0
        // const isLastSlide = activeIndex === size - 1
        // let scrollGap = -gap
        // if (isLastSlide) {
        //     scrollGap = gap || 0
        // }

        const currentOffsetEl: HTMLElement = list.children[activeIndex] as HTMLElement
        const isNativeScroll = false

        // console.log(currentOffsetEl.offsetLeft)

        if (isNativeScroll) {
            // Implement native scrolling
        } else {
            setTranslateLeft(currentOffsetEl.offsetLeft)
        }
    }, [activeIndex])

    return (
        <div className={classNames('carousel__viewport', 'carousel__viewport--mask', className)}>
            <ul
                className="carousel__list"
                ref={listRef}
                style={{ transform: `translate3d(${-translateLeft}px, 0, 0)` }}>
                {gap ? applyGap(children, gap) : children}
            </ul>
        </div>
    )
}

export default CarouselList

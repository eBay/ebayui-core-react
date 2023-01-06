import React, { Children, ComponentProps, FC, useEffect, useLayoutEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import CarouselControlButton from './carousel-control-button'
import CarouselList from './carousel-list'
import { ListItemRef, MovementDirection } from './types'
import { getMaxOffset, getNextIndex, getOffset, getSlide } from './helpers'

type CarouselProps = ComponentProps<'div'> & {
    className?: string;
    gap?: number;
    index?: number; // Scroll to index slide
    imageTreatment?: boolean; // Image slide?
    itemsPerSlide?: number; // number of slides to be displayed
    a11yPreviousText?: string;
    a11yNextText?: string;
    ariaLabel?: string;
    onCarouselUpdate?: () => void;
    onNext?: () => void;
    onPrevious?: () => void;
    onScroll?: () => void;
    onPlay?: (event: React.SyntheticEvent) => void
    onPause?: (event: React.SyntheticEvent) => void
};

// TO-DO:
// Image slides
// Auto play

const EbayCarousel: FC<CarouselProps> = ({
    gap = 16,
    index = 0,
    itemsPerSlide,
    ariaLabel,
    a11yPreviousText,
    a11yNextText,
    className,
    children,
    ...rest
}) => {
    const [activeIndex, setActiveIndex] = React.useState(index)
    const [slideWidth, setSlideWidth] = useState(0)
    const [offset, setOffset] = useState(0)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const itemsRef = useRef<Array<ListItemRef | null>>([])
    const itemCount = Children.count(children)
    const isSingleSlide = itemCount <= itemsPerSlide
    const prevControlDisabled = isSingleSlide || offset === 0
    const nextControlDisabled =
        isSingleSlide || (offset === getMaxOffset(itemsRef.current, slideWidth))

    useEffect(() => {
        setOffset(getOffset(itemsRef.current, activeIndex, slideWidth))
    }, [itemsRef.current, activeIndex, slideWidth])

    useEffect(() => {
        if (index && index >= 0 && index <= itemCount - 1) {
            setActiveIndex(index)
        }
    }, [index])

    useEffect(() => {
        itemsRef.current = itemsRef.current.splice(0, itemCount)
    }, [children])

    useEffect(() => {
        const { width: containerWidth } = containerRef.current.getBoundingClientRect()
        setSlideWidth(containerWidth)
    }, [containerRef.current])

    const handleControlClick = (direction: MovementDirection) => {
        const nextIndex = getNextIndex(direction, activeIndex, itemsRef.current, slideWidth, itemsPerSlide)
        const slide = getSlide(activeIndex, itemsPerSlide, nextIndex)
        setActiveIndex(nextIndex)
    }

    return (
        <div className={classNames('carousel', className)} {...rest}>
            <div ref={containerRef} className="carousel__container">
                <CarouselControlButton
                    label={a11yPreviousText}
                    type="prev"
                    disabled={prevControlDisabled}
                    onClick={handleControlClick} />
                <CarouselList
                    itemsRef={itemsRef}
                    offset={offset}
                    gap={gap}
                    itemsPerSlide={itemsPerSlide}
                    activeIndex={activeIndex}
                    onSetActiveIndex={setActiveIndex}
                    slideWidth={slideWidth}>
                    {children}
                </CarouselList>
                <CarouselControlButton
                    type="next"
                    label={a11yNextText}
                    disabled={nextControlDisabled}
                    onClick={handleControlClick} />
            </div>
        </div>
    )
}

export default EbayCarousel

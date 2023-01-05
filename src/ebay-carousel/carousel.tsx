import React, { Children, ComponentProps, FC, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import CarouselControlButton from './carousel-control-button'
import CarouselList from './carousel-list'
import { CarouselControlType, MovementDirection } from './types'
import { calculateSlideOffset, getMaxOffset, getNextIndex, getOffset, getSlide } from './helpers'
import {LogLevel} from "ts-loader/dist/logger";

type CarouselProps = ComponentProps<'div'> & {
    className?: string;
    gap?: number;
    index?: number; // Scroll to index slide
    imageTreatment?: boolean; // Image slide?
    itemsPerSlide?: number; // number of slides to be displayed
    a11yPreviousText?: string;
    a11yNextText?: string;
    ariaLabel?: string;
    onCarouselUpdate: () => void;
    onNext: () => void;
    onPrevious: () => void;
    onScroll: () => void;
    onPlay: (event: React.SyntheticEvent) => void
    onPause: (event: React.SyntheticEvent) => void
};

// TO-DO:
// Scroll through slides using prev,next buttons
// Image slides
// Auto play

const EbayCarousel: FC<CarouselProps> = ({
    gap = 16,
    itemsPerSlide,
    ariaLabel,
    a11yPreviousText,
    a11yNextText,
    className,
    children,
    ...rest
}) => {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [itemsInSlide, setItemInSlide] = useState(0)
    const [slideWidth, setSlideWidth] = useState(0)
    const containerRef = useRef(null)
    const listRef = useRef(null)
    const items: HTMLCollection = listRef.current?.children
    const itemCount = Children.count(children)
    const isSingleSlide = itemCount <= itemsPerSlide
    const offset = getOffset(items, activeIndex, slideWidth)
    const prevControlDisabled = isSingleSlide || offset === 0
    const nextControlDisabled =
        isSingleSlide || (offset === getMaxOffset(items, slideWidth))

    useEffect(() => {
        const roundedItemsPerSlide = Math.floor(itemsPerSlide)
        setItemInSlide(roundedItemsPerSlide)
    }, [itemsPerSlide])

    useEffect(() => {
        if (!containerRef.current) return
        const { width: containerWidth } = containerRef.current.getBoundingClientRect()
        setSlideWidth(containerWidth)
    }, [containerRef])

    const goToIndex = (index: number, direction: MovementDirection) => {
        const maxOffset = itemCount - itemsInSlide
        const newIndex = calculateSlideOffset(index, direction, maxOffset)
        setActiveIndex(newIndex)
    }

    const handleControlClick = (direction: MovementDirection) => {
        const nextIndex = getNextIndex({ activeIndex, items, slideWidth, itemsPerSlide }, direction)
        const slide = getSlide({ index: activeIndex, itemsPerSlide }, nextIndex)
        console.log(nextIndex, slide)
        setActiveIndex(nextIndex)
        // setActiveIndex(nextIndex)
        // if (direction === 'LEFT') {
        //     goToIndex(activeIndex - itemsInSlide, 'LEFT')
        // } else {
        //     goToIndex(activeIndex + itemsInSlide, 'RIGHT')
        // }
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
                    ref={listRef}
                    gap={gap}
                    itemsPerSlide={itemsPerSlide}
                    slideWidth={slideWidth}
                    activeIndex={activeIndex}
                    onSetActiveIndex={setActiveIndex}>
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

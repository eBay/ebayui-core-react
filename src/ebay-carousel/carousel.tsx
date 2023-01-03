import React, { Children, ComponentProps, FC, useEffect, useState } from 'react'
import classNames from 'classnames'
import CarouselControlButton from './carousel-control-button'
import CarouselList from './carousel-list'
import { CarouselControlType, MovementDirection } from './types'
import { calculateSlideOffset, getMaxOffset } from './helpers'

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
    itemsPerSlide = 1,
    ariaLabel,
    a11yPreviousText,
    a11yNextText,
    className,
    children,
    ...rest
}) => {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [itemsInSlide, setItemInSlide] = useState(0)
    const itemCount = Children.count(children)

    useEffect(() => {
        const roundedItemsPerSlide = Math.floor(itemsPerSlide)
        setItemInSlide(roundedItemsPerSlide)
    }, [itemsPerSlide])

    const goToIndex = (index: number, direction: MovementDirection) => {
        const maxOffset = itemCount - itemsInSlide
        const newIndex = calculateSlideOffset(index, direction, maxOffset)
        setActiveIndex(newIndex)
    }

    const handleControlClick = (type: CarouselControlType) => {
        if (type === 'prev') {
            goToIndex(activeIndex - itemsInSlide, 'LEFT')
        } else {
            goToIndex(activeIndex + itemsInSlide, 'RIGHT')
        }
    }

    return (
        <div className={classNames('carousel', className)} {...rest}>
            <div className="carousel__container">
                <CarouselControlButton label={a11yPreviousText} type="prev" onClick={handleControlClick} />
                <CarouselList gap={gap} activeIndex={activeIndex} onSetActiveIndex={setActiveIndex}>
                    {children}
                </CarouselList>
                <CarouselControlButton type="next" label={a11yNextText} onClick={handleControlClick} />
            </div>
        </div>
    )
}

export default EbayCarousel

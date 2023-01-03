/* eslint-disable react/no-unused-prop-types */
import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import CarouselControlButton from './carousel-control-button'
import CarouselList from './carousel-list'

type CarouselProps = {
    className?: string;
    children?: ReactNode;
    gap?: number;
    index?: number; // Scroll to index slide
    imageTreatment?: boolean; // Image slide?
    itemsPerSlide?: number; // number of slides to be displayed
    previousText?: string;
    nextText?: string;
    label?: string;
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
    gap,
    label,
    previousText,
    nextText,
    className,
    children
}) => (
    <div className={classNames('carousel', className)} aria-label={label}>
        <div className="carousel__container">
            <CarouselControlButton label={previousText} type="prev" />
            <CarouselList gap={gap}>
                {children}
            </CarouselList>
            <CarouselControlButton type="next" label={nextText} />
        </div>
    </div>
)

export default EbayCarousel

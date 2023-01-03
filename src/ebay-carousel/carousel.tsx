import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import CarouselControlButton from './carousel-control-button'
import CarouselList from './carousel-list'

type CarouselProps = {
    className?: string;
    children?: ReactNode;
    gap?: number;
};

const EbayCarousel: FC<CarouselProps> = ({
    gap,
    className,
    children
}) => (
    <div className={classNames('carousel', className)}>
        <div className="carousel__container">
            <CarouselControlButton type="prev" label="Previous Slide" />
            <CarouselList gap={gap}>
                {children}
            </CarouselList>
            <CarouselControlButton type="next" label="Next Slide" />
        </div>
    </div>
)

export default EbayCarousel

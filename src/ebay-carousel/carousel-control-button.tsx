import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { EbayIcon, Icon } from '../ebay-icon'
import { CarouselControlType } from './types'

type CarouselControlProps = {
    label?: string;
    hidden?: boolean;
    type: CarouselControlType;
    onClick: (type: CarouselControlType) => void;
}

const icon: Record<CarouselControlType, Icon> = {
    prev: 'carouselPrev',
    next: 'carouselNext'
}

const CarouselControlButton: FC<CarouselControlProps> = ({ type, label, hidden, onClick }) => (
    <button
        className={classNames('carousel__control', `carousel__control--${type}`)}
        aria-label={label}
        onClick={() => onClick(type)}>
        <EbayIcon
            className={classNames('icon', `icon--carousel-${type}`)}
            focusable={false}
            name={icon[type]}
            aria-hidden={hidden} />
    </button>
)

export default CarouselControlButton

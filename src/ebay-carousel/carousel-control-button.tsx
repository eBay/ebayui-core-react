import React, { FC, SyntheticEvent } from 'react'
import classNames from 'classnames'
import { EbayIcon, Icon } from '../ebay-icon'
import { CarouselControlType, MovementDirection } from './types'

type CarouselControlProps = {
    label?: string;
    hidden?: boolean;
    type: CarouselControlType;
    disabled?: boolean;
    onClick: (direction: MovementDirection) => (event: SyntheticEvent<HTMLButtonElement>) => void;
}

const icon: Record<CarouselControlType, Icon> = {
    prev: 'carouselPrev',
    next: 'carouselNext'
}

const CarouselControlButton: FC<CarouselControlProps> = ({ type, label, hidden, disabled, onClick }) => (
    <button
        className={classNames('carousel__control', `carousel__control--${type}`)}
        aria-label={label}
        aria-disabled={disabled}
        disabled={disabled}
        onClick={onClick(type === 'prev' ? 'LEFT' : 'RIGHT')}>
        <EbayIcon
            className={classNames('icon', `icon--carousel-${type}`)}
            focusable={false}
            name={icon[type]}
            aria-hidden={hidden} />
    </button>
)

export default CarouselControlButton

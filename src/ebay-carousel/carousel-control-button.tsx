import React, { FC, SyntheticEvent } from 'react'
import classNames from 'classnames'
import { EbayIcon, Icon } from '../ebay-icon'
import { CarouselControlType, MovementDirection } from './types'

type CarouselControlProps = {
    label?: string;
    hidden?: boolean;
    type: CarouselControlType;
    disabled?: boolean;
    onClick: (event: SyntheticEvent<HTMLButtonElement>, { direction }) => void;
}

const icon: Record<CarouselControlType, Icon> = {
    prev: 'chevronLeft24',
    next: 'chevronRight24'
}

const typeToDirection: Record<CarouselControlType, MovementDirection> = {
    prev: 'LEFT',
    next: 'RIGHT'
}

const CarouselControlButton: FC<CarouselControlProps> = ({ type, label, hidden, disabled, onClick }) => {
    const handleOnClick = (event: SyntheticEvent<HTMLButtonElement>) => {
        onClick(event, { direction: typeToDirection[type] })
    }

    return (
        <button
            className={classNames('carousel__control', `carousel__control--${type}`)}
            aria-label={label}
            aria-disabled={disabled}
            disabled={disabled}
            onClick={handleOnClick}>
            <EbayIcon
                className={classNames('icon', `icon--carousel-${type}`)}
                focusable={false}
                name={icon[type]}
                aria-hidden={hidden} />
        </button>
    )
}

export default CarouselControlButton

import React, { FC, ReactNode, Children, ReactElement, cloneElement } from 'react'
import classNames from 'classnames'
import { applyGap } from './helpers'

type CarouselListProps = {
    gap?: number;
    className?: string;
    children?: ReactNode;
};


const CarouselList: FC<CarouselListProps> = ({ gap, className, children }) => (
    <div className={classNames('carousel__viewport', 'carousel__viewport--mask', className)}>
        <ul className="carousel__list">
            {gap ? applyGap(children, gap) : children}
        </ul>
    </div>
)

export default CarouselList

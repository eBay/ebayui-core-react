import React, { ComponentProps, FC, forwardRef, ReactNode, RefObject, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

type ListProps = ComponentProps<'li'>
type CarouselItemProps = ListProps & {
    isFullyVisible?: boolean;
    className?: string;
};


const CarouselItem: FC<CarouselItemProps> = ({ isFullyVisible, className, children, ...rest }) => {

    console.log(isFullyVisible)
    return (
        <li
            aria-hidden={!isFullyVisible}
            className={classNames('carousel__snap-point', className)}
            {...rest}>
            {children}
        </li>
    )
}

export default CarouselItem

import React, { ComponentProps, FC, ReactNode } from 'react'
import classNames from 'classnames'

type ListProps = Omit<ComponentProps<'li'>, 'onChange'>
type CarouselItemProps = ListProps & {
    className?: string;
    children?: ReactNode;
};


const CarouselItem: FC<CarouselItemProps> = ({ className, children, ...rest }) => (
    <li className={classNames('carousel__snap-point', className)} {...rest}>
        {children}
    </li>
)

export default CarouselItem

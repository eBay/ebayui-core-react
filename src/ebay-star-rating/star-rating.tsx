import React, { ComponentProps, FC } from 'react'
import classNames from 'classnames'
import { EbayIcon } from '../ebay-icon'
import { range } from '../common/range'

type Props = ComponentProps<'div'> & {
    a11yText?: string;
    value?: number | string;
}

const EbayStarRating: FC<Props> = ({
    value,
    a11yText,
    className,
    ...rest
}) => (
    <div
        role="img"
        aria-label={a11yText}
        className={classNames('star-rating', className)}
        data-stars={value}
        {...rest}
    >
        {range(1, 5).map((i) => (<EbayIcon key={i} className="star-rating__icon" name="starDynamic" />))}
    </div>
)


export default EbayStarRating

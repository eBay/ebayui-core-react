import React, { FC } from 'react'
import { EbayIcon, Icon } from '../index'

type Props = {
    name: Icon;
    className?: string;
}

const EbayMenuButtonIcon: FC<Props> = ({
    name,
    className
}) => (
    <EbayIcon
        name={name}
        className={className}
    />
)

export default EbayMenuButtonIcon

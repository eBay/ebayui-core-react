import React, { ComponentProps, FC } from 'react'
import classNames from 'classnames'

type Props = ComponentProps<'h2'> & {
    type?: string
}

const EbayTooltipHeading: FC<Props> = ({
    className,
    type = 'infotip',
    ...props
}) => (
    <h2 {...props} className={classNames(`${type}__heading`, className)} />
)

export default EbayTooltipHeading

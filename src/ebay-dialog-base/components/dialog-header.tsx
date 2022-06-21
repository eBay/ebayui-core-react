import React, { FC, ComponentProps } from 'react'

type Props = ComponentProps<'h2'>

const EbayDialogHeader:FC<Props> = ({
    children,
    ...rest
}) => <h2 {...rest}>{children}</h2>

export default EbayDialogHeader

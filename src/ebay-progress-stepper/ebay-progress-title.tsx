import { createElement, FC } from 'react'

type Props = {
    as?: string;
}

const EbayProgressTitle: FC<Props> = ({
    as: TitleComponent = 'h4',
    children
}) => createElement(TitleComponent, {}, children)

export default EbayProgressTitle

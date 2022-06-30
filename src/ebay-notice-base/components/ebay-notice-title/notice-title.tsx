import React, { FC, ReactNode } from 'react'

type EbayNoticeTitleProps = {
    children?: ReactNode;
}

const EbayNoticeTitle: FC = ({ children }: EbayNoticeTitleProps) => (
    <span className="page-notice__title">
        {children}
    </span>
)

export default EbayNoticeTitle

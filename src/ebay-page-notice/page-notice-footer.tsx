import React, { FC } from 'react'
import NoticeFooter from '../common/notice-utils/notice-footer'

type Props = {
    className?: string;
}

const EbayPageNoticeFooter: FC<Props> = ({ className, children }) => (
    <NoticeFooter className={className} type="page">
        {children}
    </NoticeFooter>
)

export default EbayPageNoticeFooter

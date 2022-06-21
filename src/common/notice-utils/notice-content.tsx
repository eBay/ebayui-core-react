import React, { FC } from 'react'
import cx from 'classnames'

type Props = {
    type: 'inline' | 'section' | 'page';
    className?: string;
}

const NoticeContent: FC<Props> = ({ className, type, children }) => {
    const ContentTag = type === 'inline' ? 'span' : 'div'
    return (
        <ContentTag className={cx(className, `${type}-notice__main`)}>
            {children}
        </ContentTag>
    )
}

export default NoticeContent

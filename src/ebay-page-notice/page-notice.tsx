import React, { FC, ReactElement } from 'react'
import NoticeContent from '../common/notice-utils/notice-content'
import { EbayNoticeContent } from '../ebay-notice-base/components/ebay-notice-content'
import EbayIcon from '../ebay-icon/icon'

type Props = React.HTMLProps<HTMLElement> & {
    status?: 'general' | 'attention' | 'confirmation' | 'information',
    'aria-label'?: string;
};

const EbayPageNotice: FC<Props> = ({
    status = 'general',
    children,
    'aria-label': ariaLabel,
    ...rest
}) => {
    const childrenArray = React.Children.toArray(children)
    const content = childrenArray.find((child: ReactElement) => child.type === EbayNoticeContent) as ReactElement

    if (!content) {
        throw new Error(`EbayPageNotice: Please use a EbayNoticeContent that defines the content of the notice`)
    }

    return (
        <section
            {...rest}
            aria-labelledby={`${status}-status`}
            className={`page-notice ${status !== `general` ? `page-notice--${status}` : ``}`}
            role="region">
            {status !== `general` ? (
                <div className="page-notice__header" id={`${status}-status`}>
                    <EbayIcon
                        name={`${status}-filled` as any}
                        a11yText={ariaLabel}
                        a11yVariant="label"
                    />
                </div>
            ) : null}
            <NoticeContent {...content.props} type="page" />
            {children}
        </section>
    )
}

export default EbayPageNotice

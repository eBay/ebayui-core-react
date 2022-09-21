import React, { FC, ReactElement } from 'react'
import cx from 'classnames'
import { EbayNoticeContent } from '../ebay-notice-base/components/ebay-notice-content'
import NoticeContent from '../common/notice-utils/notice-content'
import { EbayIcon, Icon } from '../ebay-icon'

type Props = React.HTMLProps<HTMLElement> & {
    status?: 'general' | 'none' | 'attention' | 'confirmation' | 'information';
    'aria-label'?: string;
    'aria-roledescription'?: string;
    className?: string;
}

const EbaySectionNotice: FC<Props> = ({
    status = 'general',
    children,
    className,
    'aria-label': ariaLabel,
    'aria-roledescription': ariaRoleDescription = 'Notice',
    ...rest
}) => {
    const childrenArray = React.Children.toArray(children) as ReactElement[]
    const content = childrenArray.find(({ type }) => type === EbayNoticeContent)
    const hasStatus = status !== 'general' && status !== 'none'

    if (!content) {
        throw new Error(`EbaySectionNotice: Please use a EbayNoticeContent that defines the content of the notice`)
    }

    return (
        <section
            {...rest}
            className={cx(className, `section-notice`, hasStatus && `section-notice--${status}`)}
            role="region"
            aria-label={!hasStatus ? ariaLabel : null}
            aria-labelledby={hasStatus ? `section-notice-${status}` : null}
            aria-roledescription={ariaRoleDescription}>
            {hasStatus && (
                <div className="section-notice__header" id={`section-notice-${status}`}>
                    <EbayIcon name={`${status}FilledSmall` as Icon} a11yText={ariaLabel} a11yVariant="label" />
                </div>
            )}
            <NoticeContent {...content.props} type="section" />
            {children}
        </section>
    )
}

export default EbaySectionNotice

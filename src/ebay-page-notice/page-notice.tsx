import React, { Dispatch, FC, MouseEvent, ReactElement, useState } from 'react'
import NoticeContent from '../common/notice-utils/notice-content'
import { EbayNoticeContent } from '../ebay-notice-base/components/ebay-notice-content'
import { EbayIcon, Icon } from '../ebay-icon'

type Props = React.HTMLProps<HTMLElement> & {
    status?: 'general' | 'attention' | 'confirmation' | 'information',
    'aria-label'?: string,
    a11yDismissText?: string,
    onDismiss?: Dispatch<MouseEvent>
};

const EbayPageNotice: FC<Props> = ({
    id,
    status = 'general',
    children,
    onDismiss,
    a11yDismissText,
    'aria-label': ariaLabel,
    ...rest
}) => {
    const [dismissed, setDismissed] = useState(false)
    const childrenArray = React.Children.toArray(children)
    const content = childrenArray.find((child: ReactElement) => child.type === EbayNoticeContent) as ReactElement

    if (!content) {
        throw new Error(`EbayPageNotice: Please use a EbayNoticeContent that defines the content of the notice`)
    }

    const handleDismissedClicked = (event: MouseEvent) => {
        setDismissed(true)
        if (onDismiss) {
            onDismiss(event)
        }
    }

    return dismissed ? null : (
        <section
            {...rest}
            aria-labelledby={id || `${status}-status`}
            className={`page-notice ${status !== `general` ? `page-notice--${status}` : ``}`}
            role="region">
            {status !== `general` ? (
                <div className="page-notice__header" id={id || `${status}-status`}>
                    <EbayIcon
                        name={`${status}Filled16` as Icon}
                        a11yText={ariaLabel}
                        a11yVariant="label"
                    />
                </div>
            ) : null}
            <NoticeContent {...content.props} type="page" />
            {children}
            {a11yDismissText && (
                <div className="page-notice__footer">
                    <button
                        aria-label={a11yDismissText}
                        className="fake-link page-notice__dismiss"
                        onClick={handleDismissedClicked}>
                        <EbayIcon name="close16" />
                    </button>
                </div>
            )}
        </section>
    )
}

export default EbayPageNotice

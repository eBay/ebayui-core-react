import React, {
    ComponentProps,
    FC,
    KeyboardEvent,
    KeyboardEventHandler,
    MouseEvent,
    MouseEventHandler,
    useState
} from 'react'
import NoticeContent from '../common/notice-utils/notice-content'
import { EbayNoticeContent } from '../ebay-notice-base/components/ebay-notice-content'
import { EbayIcon, Icon } from '../ebay-icon'
import { EbayPageNoticeFooter } from './index'
import { elementProps, elementType } from '../common/component-utils'

export type PageNoticeStatus = 'general' | 'attention' | 'confirmation' | 'information'
export type Props = ComponentProps<'section'> & {
    status?: PageNoticeStatus;
    'aria-label'?: string;
    a11yDismissText?: string;
    onDismiss?: MouseEventHandler & KeyboardEventHandler;
};

const EbayPageNotice: FC<Props> = ({
    id,
    status = 'general',
    children,
    a11yDismissText,
    'aria-label': ariaLabel,
    onDismiss = () => {},
    ...rest
}) => {
    const [dismissed, setDismissed] = useState(false)
    const childrenArray = React.Children.toArray(children)
    const content = childrenArray.find(child => elementType(child) === EbayNoticeContent)

    if (!content) {
        throw new Error(`EbayPageNotice: Please use a EbayNoticeContent that defines the content of the notice`)
    }

    const handleDismissed = (event: MouseEvent & KeyboardEvent) => {
        setDismissed(true)
        onDismiss(event)
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
            <NoticeContent {...elementProps(content)} type="page" />
            {children}
            {a11yDismissText && (
                <EbayPageNoticeFooter>
                    <button
                        aria-label={a11yDismissText}
                        className="fake-link page-notice__dismiss"
                        onClick={handleDismissed as any}>
                        <EbayIcon name="close16" />
                    </button>
                </EbayPageNoticeFooter>
            )}
        </section>
    )
}

export default EbayPageNotice

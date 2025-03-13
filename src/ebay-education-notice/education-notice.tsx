import React, {
    MouseEventHandler,
    KeyboardEventHandler,
    ComponentProps,
    FC,
    ReactElement,
    useState,
    ReactNode,
    cloneElement
} from 'react'
import cx from 'classnames'
import { EbayNoticeContent } from '../ebay-notice-base/components/ebay-notice-content'
import NoticeContent from '../common/notice-utils/notice-content'
import { findComponent } from '../common/component-utils'
import EbayIcon from '../ebay-icon/icon'
import { EbayIconButton } from '../ebay-icon-button'
import { EbayEducationNoticeTitle } from './index'
import { EbayEducationNoticeFooter } from './index'

export type Props = ComponentProps<'section'> & {
    a11yIconText?: string
    a11yDismissText?: string
    onDismiss?: MouseEventHandler & KeyboardEventHandler
    dismissed?: boolean
    prominent?: boolean
    educationIcon?: ReactNode
    variant?: 'prominent' | 'none'
    iconVariant?: 'prominent' | 'none'
}

const EbayEducationNotice: FC<Props> = ({
    children,
    className,
    a11yIconText,
    variant = 'none',
    iconVariant = 'none',
    a11yDismissText,
    educationIcon = <EbayIcon name="lightbulb24" />,
    prominent,
    dismissed = false,
    onDismiss = () => {},
    ...rest
}) => {
    const [isDismissed, setIsDismissed] = useState(dismissed)

    const content = findComponent(children, EbayNoticeContent)
    const titleComponent = findComponent(children, EbayEducationNoticeTitle)
    const footerComponent = findComponent(children, EbayEducationNoticeFooter)

    const isProminent = variant === 'prominent'
    const isIconProminent = iconVariant === 'prominent'

    const handleDismissed: MouseEventHandler & KeyboardEventHandler = (
        event
    ) => {
        setIsDismissed(true)
        onDismiss(event)
    }

    if (!titleComponent) {
        throw new Error(
            `<EbayEducationNoticeTitle>: Please use a <EbayEducationNoticeTitle> that defines the content of the notice`
        )
    }

    return isDismissed || dismissed ? null : (
        <section
            aria-roledescription="Notice"
            {...rest}
            className={cx(className, `education-notice`, {
                'education-notice--prominent': isProminent
            })}
            role="region"
        >
            <div className="education-notice__header">
                {cloneElement(educationIcon as ReactElement, {
                    className: isIconProminent && 'icon--prominent',
                    a11yText: a11yIconText,
                    a11yVariant: 'label'
                })}

                {titleComponent}
                {a11yDismissText && (
                    <EbayIconButton
                        aria-label={a11yDismissText}
                        size="small"
                        className="education-notice__dismiss"
                        onClick={handleDismissed}
                        icon="close16"
                    />
                )}
            </div>
            <NoticeContent {...content?.props} type="education" />
            {footerComponent}
        </section>
    )
}

export default EbayEducationNotice

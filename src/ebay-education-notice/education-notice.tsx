import React, {
    ComponentProps,
    FC,
    ReactElement,
    useState,
    cloneElement,
    useEffect
} from 'react'
import cx from 'classnames'
import { EbayNoticeContent } from '../ebay-notice-base/components/ebay-notice-content'
import NoticeContent from '../common/notice-utils/notice-content'
import { findComponent } from '../common/component-utils'
import { Icon } from '../ebay-icon'
import EbayIcon from '../ebay-icon/icon'
import { EbayEducationNoticeTitle } from './index'
import { EbayEducationNoticeFooter } from './index'

export type Props = ComponentProps<'section'> & {
    'aria-label'?: string
    'aria-roledescription'?: string
    a11yText?: string
    className?: string
    a11yDismissText?: string
    onDismiss?: (
        event:
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLButtonElement>
    ) => void
    dismissed?: boolean
    prominent?: boolean
    educationIcon?: Icon
    variant?: 'prominent' | 'none'
    iconVariant?: 'prominent' | 'none'
}

const EbayEducationNotice: FC<Props> = ({
    children,
    className,
    a11yText,
    variant = 'none',
    iconVariant = 'none',
    'aria-label': ariaLabel,
    'aria-roledescription': ariaRoleDescription = 'Notice',
    a11yDismissText,
    educationIcon = 'lightbulb24',
    prominent,
    dismissed = false,
    onDismiss = () => {},
    ...rest
}) => {
    const [isDismissed, setIsDismissed] = useState(dismissed)

    const childrenArray = React.Children.toArray(children) as ReactElement[]
    const content = childrenArray.find(({ type }) => type === EbayNoticeContent)
    const titleComponent = findComponent(children, EbayEducationNoticeTitle)
    const footerComponent = findComponent(children, EbayEducationNoticeFooter)

    const iconComponent = childrenArray.find(
        ({ type }) => type === EbayIcon
    ) || <EbayIcon name={educationIcon} />

    const isProminent = variant === 'prominent'
    const isIconProminent = iconVariant === 'prominent'

    const handleDismissed = (
        event:
            | React.MouseEvent<HTMLButtonElement>
            | React.KeyboardEvent<HTMLButtonElement>
    ) => {
        setIsDismissed(true)
        onDismiss(event)
    }

    useEffect(() => {
        setIsDismissed(dismissed)
    }, [dismissed])

    if (!titleComponent) {
        throw new Error(
            `EbayEducationNoticeTitle: Please use a EbayEducationNoticeTitle that defines the content of the notice`
        )
    }

    return isDismissed ? null : (
        <section
            {...rest}
            className={cx(className, `education-notice`, {
                'education-notice--prominent': isProminent
            })}
            role="region"
            aria-label={ariaLabel}
            aria-roledescription={ariaRoleDescription}
        >
            <div className="education-notice__header">
                {cloneElement(iconComponent, {
                    className: isIconProminent && 'icon--prominent',
                    a11yText,
                    a11yVariant: 'label'
                })}

                {titleComponent}
                {a11yDismissText && (
                    <button
                        aria-label={a11yDismissText}
                        className="education-notice__dismiss icon-btn icon-btn--small"
                        onClick={handleDismissed}
                    >
                        <EbayIcon name="close16" />
                    </button>
                )}
            </div>
            <NoticeContent {...content?.props} type="education" />
            {footerComponent}
        </section>
    )
}

export default EbayEducationNotice

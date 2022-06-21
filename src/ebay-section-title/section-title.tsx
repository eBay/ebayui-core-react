import React, { FC, HTMLProps, ReactNode } from 'react'
import classNames from 'classnames'
import { findComponent } from '../common/component-utils'
import {
    EbaySectionTitleSubtitle,
    EbaySectionTitleTitle,
    EbaySectionTitleInfo,
    EbaySectionTitleOverflow
} from './index'
import Cta from './cta'

export type EbaySectionTitleProps = Omit<HTMLProps<HTMLDivElement>, 'title'|'size'> & {
size?: 'small' | 'large' | 'giant';
href?: string;
ctaText?: ReactNode;
}

const EbaySectionTitle: FC<EbaySectionTitleProps> = ({
    href,
    ctaText,
    size,
    className,
    children,
    ...rest
}) => {
    const sectionTitleClass = classNames(className, 'section-title', {
        [`section-title--${size}`]: size
    })
    const title = findComponent(children, EbaySectionTitleTitle)
    const subtitle = findComponent(children, EbaySectionTitleSubtitle)
    const info = findComponent(children, EbaySectionTitleInfo)
    const overflow = findComponent(children, EbaySectionTitleOverflow)

    return (
        <div {...rest} className={sectionTitleClass}>
            <div className="section-title__title-container">
                {title || <EbaySectionTitleTitle>{children}</EbaySectionTitleTitle>}
                {subtitle}
            </div>
            {href && <Cta href={href} ctaText={ctaText} /> || info || overflow}
        </div>
    )
}

export default EbaySectionTitle

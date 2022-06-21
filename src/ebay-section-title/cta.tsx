import React, { ComponentProps, FC, ReactNode } from 'react'
import classNames from 'classnames'
import { EbayIcon, Icon } from '../ebay-icon'

type Props = ComponentProps<'div'> & {
  ctaText?: ReactNode;
  href?: string;
  icon?: Icon;
}

const Cta: FC<Props> = ({
    ctaText,
    href,
    icon = 'arrowRightBold',
    ...rest
}: Props) => {
    const className = classNames('section-title__cta', {
        'section-title__cta--no-text': !ctaText
    })

    return (
        <div {...rest} className={className}>
            <a href={href} tabIndex={-1} aria-hidden="true">
                {ctaText && <span className="section-title__cta-text">{ctaText}</span>}
                <EbayIcon
                    name={icon}
                    className="section-title__cta-icon"
                    noSkinClasses
                    height="24"
                    width="24"
                    aria-hidden="true"
                />
            </a>
        </div>
    )
}

export default Cta

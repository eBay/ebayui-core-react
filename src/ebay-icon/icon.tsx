import React, { FC, Ref, SVGProps, useState, useEffect } from 'react'
import classNames from 'classnames'
import { withForwardRef } from '../common/component-utils'
import { randomId } from '../common/random-id'
import { Icon } from './types'

const iconPixelSizes: Record<string, number> = {
    small: 16,
    large: 64
}
const DEFAULT_ICON_SIZE = 24

export type A11yVariant = 'label';

export type EbayIconProps = SVGProps<SVGSVGElement> & {
    className?: string;
    type?: 'icon'| 'program-badge' | string
    name: Icon;
    noSkinClasses?: boolean;
    a11yText?: string;
    a11yVariant?: A11yVariant;
    forwardedRef?: Ref<SVGSVGElement>;
};

const EbayIcon: FC<EbayIconProps> = ({
    name,
    type = 'icon',
    className: extraClass,
    noSkinClasses = false,
    a11yText,
    a11yVariant,
    forwardedRef,
    ...rest
}) => {
    const [rId, setRandomId] = useState('')

    useEffect(() => {
        setRandomId(randomId())
    }, [])

    const withAriaLabel = a11yVariant === 'label'
    const a11yTextId = a11yText && `icon-title-${rId}`
    const a11yProps = a11yText ? {
        'aria-labelledby': withAriaLabel ? undefined : a11yTextId,
        'aria-label': withAriaLabel ? a11yText : undefined,
        role: 'img'
    } : {
        'aria-hidden': true
    }
    const prefixSvg = type === 'icon' ? 'icon-' : ''
    const kebabName = kebabCased(name)
    const iconSize = `${getIconPixelSize(kebabName)}px`
    const className = classNames(extraClass,
        { [getIconClass(type, kebabName)]: !noSkinClasses }
    )

    return (
        <svg
            height={iconSize}
            width={iconSize}
            {...rest}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            focusable={false}
            ref={forwardedRef}
            {...a11yProps}
        >
            {a11yText && !withAriaLabel && <title id={a11yTextId}>{a11yText}</title>}
            <use xlinkHref={`#${prefixSvg}${kebabName}`} />
        </svg>
    )
}

function getIconPixelSize(iconName: string) {
    const sizeCandidate = iconName.split('-').slice(-1)[0]
    return iconPixelSizes[sizeCandidate] || DEFAULT_ICON_SIZE
}

function kebabCased(str: string) {
    return str.replace(/([A-Z])/g, (s, c) => `-${c.toLowerCase()}`)
}

function getIconClass(type, name) {
    if (type === 'icon') {
        return `icon icon--${name}`
    }
    const dashedName = name.replace(type, `${type}-`)
    return `${type} ${dashedName}`
}

export default withForwardRef(EbayIcon)

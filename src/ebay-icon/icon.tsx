import React, { FC, Ref, SVGProps, useState, useEffect } from 'react'
import classNames from 'classnames'
import { withForwardRef } from '../common/component-utils'
import { randomId } from '../common/random-id'
import { Icon } from './types'

const SMALL_ICON_SIZE = 16
const LARGE_ICON_SIZE = 64
const DEFAULT_ICON_SIZE = 24

export type A11yVariant = 'label';

export type EbayIconProps = SVGProps<SVGSVGElement> & {
    className?: string;
    name: Icon;
    noSkinClasses?: boolean;
    a11yText?: string;
    a11yVariant?: A11yVariant;
    forwardedRef?: Ref<SVGSVGElement>;
};

const EbayIcon: FC<EbayIconProps> = ({
    name,
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

    const noTitle = a11yVariant === 'label'
    const a11yTextId = a11yText && `icon-title-${rId}`
    const a11yProps = a11yText ? {
        'aria-labelledby': noTitle ? undefined : a11yTextId,
        'aria-label': noTitle ? a11yText : undefined,
        role: 'img'
    } : {
        'aria-hidden': true
    }
    const iconSize = `${getIconSize(name)}px`
    const kebabName = kebabCased(name)
    const className = classNames(extraClass,
        { 'icon': !noSkinClasses },
        { [`icon--${kebabName}`]: !noSkinClasses }
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
            {a11yText && !noTitle && <title id={a11yTextId}>{a11yText}</title>}
            <use xlinkHref={`#icon-${kebabName}`} />
        </svg>
    )
}

function getIconSize(iconName) {
    const sizeCandidate = iconName.split('-').slice(-1)[0]
    return {
        small: SMALL_ICON_SIZE,
        large: LARGE_ICON_SIZE
    }[sizeCandidate] || DEFAULT_ICON_SIZE
}

function kebabCased(str) {
    return str.replace(/([A-Z])/g, (s, c) => `-${c.toLowerCase()}`)
}

export default withForwardRef(EbayIcon)

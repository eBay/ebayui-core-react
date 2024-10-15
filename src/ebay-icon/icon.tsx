import React, { FC, Ref, SVGProps, useEffect, useState } from 'react'
import classNames from 'classnames'
import { withForwardRef } from '../common/component-utils'
import { randomId } from '../common/random-id'
import { Icon } from './types'

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

    const withAriaLabel = a11yVariant === 'label'
    const a11yTextId = a11yText && `icon-title-${rId}`
    const a11yProps = a11yText ? {
        'aria-labelledby': withAriaLabel ? undefined : a11yTextId,
        'aria-label': withAriaLabel ? a11yText : undefined,
        role: 'img'
    } : {
        'aria-hidden': true
    }
    const kebabName = kebabCased(name)
    const size = getIconSize(kebabName) || kebabName

    const skinClassName = [`icon`, `icon--${size}`, getFilledIconName(kebabName)].filter(Boolean).join(' ')
    const className = classNames(extraClass,
        { [skinClassName]: !noSkinClasses }
    )

    return (
        <svg
            {...rest}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            focusable={false}
            ref={forwardedRef}
            {...a11yProps}
        >
            {a11yText && !withAriaLabel && <title id={a11yTextId}>{a11yText}</title>}
            <use xlinkHref={`#icon-${kebabName}`} />
        </svg>
    )
}

// This function extract the size of the icon name.
// The icon can have these name structures:
// - icon-name-24
// - icon-name-24-colored
// - icon-name-filled-24
// - icon-name-filled-24-colored
// - icon-name
function getIconSize(iconName: string) {
    const iconNameArray = iconName.split('-')
    const size = iconNameArray[iconNameArray.length - 1]

    if (size === 'colored') {
        return iconNameArray[iconNameArray.length - 2]
    }

    if (isNaN(Number(size))) {
        return ''
    }

    return size
}

function getFilledIconName(iconName: string) {
    const iconNameArray = iconName.split('-')
    const filledIndex = iconNameArray.indexOf('filled')

    if (filledIndex === -1) {
        return ''
    }

    return `icon--${iconNameArray.slice(0, filledIndex + 1).join('-')}`
}

export function kebabCased(str: string): string {
    return str
        .replace(/([0-9]+)/g, (s, n) => `-${n}`)
        .replace(/([A-Z])/g, (s, c) => `-${c.toLowerCase()}`)
}

export default withForwardRef(EbayIcon)

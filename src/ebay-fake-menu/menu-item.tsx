import React, { ComponentProps, FC, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { EbayIcon } from '../index'

export type EbayFakeMenuItemProps = Omit<ComponentProps<'a'>, 'onKeyDown'> & {
    focused?: boolean;
    checked?: boolean;
}

const EbayMenuItem: FC<EbayFakeMenuItemProps> = ({
    className,
    checked,
    focused,
    children,
    ...rest
}) => {
    const ref = useRef(null)

    useEffect(() => {
        if (ref.current && focused) {
            ref.current.focus()
        }
    }, [ref, focused])

    return (
        <a
            {...rest}
            ref={ref}
            className={classNames(className, 'fake-menu__item')}
            aria-current={checked ? 'page' : undefined}
        >
            <span>
                {children}
            </span>
            <EbayIcon name="tickSmall" />
        </a>
    )
}

export default EbayMenuItem

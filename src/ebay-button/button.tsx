import React, {
    Children,
    ComponentProps,
    FC,
    KeyboardEvent,
    MouseEvent,
    ReactElement,
    ReactNode,
    RefObject
} from 'react'
import classNames from 'classnames'
import { withForwardRef } from '../common/component-utils/forwardRef'
import { Priority, Size, BodyState, Variant } from './types'
import { EbayIcon } from '../ebay-icon'
import EbayButtonLoading from './button-loading'

export type EbayButtonProps = {
    fluid?: boolean;
    partiallyDisabled?: boolean;
    truncate?: boolean;
    href?: string;
    priority?: Priority;
    variant?: Variant;
    size?: Size;
    bodyState?: BodyState,
    transparent?: boolean;
    onClick?: (e: MouseEvent) => void;
    onEscape?: (e: KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    forwardedRef?: RefObject<HTMLAnchorElement & HTMLButtonElement>;
}

type Props = ComponentProps<'button'> & ComponentProps<'a'> & EbayButtonProps;

function isIconOnly(children: ReactNode): boolean {
    const childrenArray = Children.toArray(children) as ReactElement[]
    return childrenArray.length === 1 && childrenArray[0].type === EbayIcon
}

const EbayButton:FC<Props> = ({
    priority = 'secondary',
    variant = 'standard',
    size = 'default',
    bodyState,
    transparent = false,
    fluid = false,
    disabled,
    partiallyDisabled,
    children,
    onEscape = () => {},
    truncate = false,
    href,
    className: extraClasses,
    forwardedRef,
    ...rest
}) => {
    const iconOnly = isIconOnly(children)
    const classPrefix = href ? 'fake-btn' : 'btn'
    const priorityStyles: { [key in Priority]: string } = {
        delete: '', // deprecated
        primary: `${classPrefix}--primary`,
        secondary: `${classPrefix}--secondary`,
        tertiary: `${classPrefix}--tertiary`,
        none: ''
    }
    const sizeStyles: { [key in Size]: string } = {
        large: `${classPrefix}--large`,
        default: ''
    }
    const isDestructive = variant === 'destructive'
    const isLoading = bodyState === `loading`
    const className = classNames(
        classPrefix,
        extraClasses,
        priorityStyles[priority],
        sizeStyles[size],
        isDestructive && `${classPrefix}--destructive`,
        iconOnly && `${classPrefix}--icon-only`,
        transparent && `${classPrefix}--transparent`,
        fluid && `${classPrefix}--fluid`,
        truncate && `${classPrefix}--truncated`
    )

    const onKeyDown = (e: KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        if (e.key === 'Escape' || e.key === 'Esc') {
            onEscape(e)
        }
    }

    const bodyContent = isLoading ? <EbayButtonLoading /> : children
    const ariaLive = isLoading ? `polite` : null

    return href ? (
        <a
            className={className}
            href={disabled ? undefined : href}
            ref={forwardedRef}
            onKeyDown={onKeyDown}
            aria-live={ariaLive}
            {...rest}
        >
            {bodyContent}
        </a>
    ) : (
        <button
            disabled={disabled}
            aria-disabled={partiallyDisabled}
            aria-live={ariaLive}
            className={className}
            ref={forwardedRef}
            onKeyDown={onKeyDown}
            {...rest}
        >
            {bodyContent}
        </button>
    )
}

export default withForwardRef(EbayButton)

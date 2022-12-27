import React, { FC, Key, ReactNode, RefObject, StyleHTMLAttributes, MouseEvent, ComponentProps } from 'react'
import { EbayIcon } from '../ebay-icon'
import { withForwardRef } from '../common/component-utils'
import classNames from 'classnames'

export type PaginationItemType = 'previous' | 'next' | 'page' | 'separator'
type HtmlProps = Omit<ComponentProps<'button'>, 'type' | 'role'> & ComponentProps<'a'> & ComponentProps<'li'>
export type PaginationItemProps = HtmlProps & {
    pageIndex?: number;
    key?: Key;
    type?: PaginationItemType;
    current?: boolean;
    disabled?: boolean;
    href?: string;
    hide?: boolean;
    a11yPreviousText?: string;
    a11yNextText?: string;
    onSelect?: (e: MouseEvent | KeyboardEvent, value: string, index: number) => void;
    onNext?: (e: MouseEvent | KeyboardEvent) => void;
    onPrevious?: (e: MouseEvent | KeyboardEvent) => void;
    style?: StyleHTMLAttributes<HTMLButtonElement & HTMLAnchorElement>;
    forwardedRef?: RefObject<HTMLAnchorElement & HTMLButtonElement>;
    children?: ReactNode;
};

const EbayPaginationItem: FC<PaginationItemProps> = ({
    pageIndex = 0,
    key,
    current,
    disabled,
    type = 'page',
    href,
    hide,
    children,
    a11yPreviousText = 'Previous page',
    a11yNextText = 'Next page',
    onSelect,
    onNext,
    onPrevious,
    className,
    style,
    forwardedRef,
    ...rest
}) => {
    const handlePageNumber = (e) => {
        onSelect(e, e.currentTarget.innerText, pageIndex)
    }

    const handleNextPage = (e) => {
        if (!e.currentTarget.getAttribute('aria-disabled')) {
            onNext(e)
        }
    }

    const handlePreviousPage = (e) => {
        if (!e.currentTarget.getAttribute('aria-disabled')) {
            onPrevious(e)
        }
    }
    const isAnchor = !!href
    const ButtonOrAnchor = isAnchor ? 'a' : 'button'
    const iconClassName = isAnchor ? 'icon-link' : 'icon-btn'
    switch (type) {
        case 'previous':
            return (
                <ButtonOrAnchor
                    {...rest}
                    ref={forwardedRef}
                    aria-disabled={disabled ? 'true' : undefined}
                    aria-label={a11yPreviousText}
                    href={disabled ? undefined : href}
                    className={classNames(iconClassName, 'pagination__previous')}
                    style={style}
                    onClick={handlePreviousPage}
                >
                    <EbayIcon name="paginationPrev" />
                </ButtonOrAnchor >
            )
        case 'next':
            return (
                <ButtonOrAnchor
                    {...rest}
                    ref={forwardedRef}
                    aria-disabled={disabled ? 'true' : undefined}
                    aria-label={a11yNextText}
                    href={disabled ? undefined : href}
                    className={classNames(iconClassName, 'pagination__next')}
                    style={style}
                    onClick={handleNextPage}
                >
                    <EbayIcon name="paginationNext" />
                </ButtonOrAnchor >
            )
        case 'separator':
            return (
                <span
                    key={key}
                    style={style}
                    className="pagination__item"
                    ref={forwardedRef}
                    role="separator">
                    {children}
                </span>
            )
        default:
            return (
                <li {...rest} hidden={hide}>
                    <ButtonOrAnchor
                        ref={forwardedRef}
                        aria-current={current ? 'page' : undefined}
                        href={href}
                        className="pagination__item"
                        style={style}
                        key={key}
                        onClick={handlePageNumber}
                    >
                        {children}
                    </ButtonOrAnchor>
                </li >
            )
    }
}

export default withForwardRef(EbayPaginationItem)

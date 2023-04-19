import React, { ComponentProps, FC, MouseEventHandler, ReactNode } from 'react'
import { EbayIcon } from '../ebay-icon'

type ItemAttributes = ComponentProps<'a'> & ComponentProps<'button'>;

type BreadcrumbItemProps = ItemAttributes & {
    children: ReactNode;
    tag?: 'a' | 'button';
    href?: string;
    isLastItem?: boolean;
    onClick?: MouseEventHandler;
    _sp?: string;
    navsrc?: string;
}

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
    tag: Item = 'button',
    isLastItem = false,
    href,
    children,
    onClick,
    ...rest
}) => {
    const isLink = Item === 'a'
    const itemAttr: ItemAttributes = {
        ...rest,
        ...isLastItem ? { 'aria-current': 'location' } : {},
        href: isLink ? href : undefined,
        onClick: isLink ? undefined : onClick
    }
    return (
        <li>
            <Item {...itemAttr}>{children}</Item>
            {!isLastItem && <EbayIcon name="chevronRight12" />}
        </li>
    )
}

export default BreadcrumbItem

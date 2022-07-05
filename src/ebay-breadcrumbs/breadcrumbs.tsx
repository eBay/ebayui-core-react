import React, { Children, cloneElement, ComponentProps, FC, ReactElement, ReactNode } from 'react'
import classNames from 'classnames'

type BreadcrumbProps = ComponentProps<'div'> & {
    /**
     * Breadcrumbs expects `<EbayBreadcrumbItem/>` as children.
     * Other elements will not work.
     *
     * @see Docs https://github.com/eBay/ebayui-core-react/tree/main/src/components/ebay-breadcrumb#usage
     */
    children: ReactNode;
    id?: string;
    a11yHeadingTag?: keyof JSX.IntrinsicElements;
    a11yHeadingText?: string;
    onSelect?: (event: MouseEvent | KeyboardEvent, target: HTMLElement) => void;
}

const Breadcrumbs: FC<BreadcrumbProps> = ({
    a11yHeadingText = 'Page navigation',
    a11yHeadingTag = 'h2',
    id = 'ebay-breadcrumb',
    children: breadcrumbItems = [],
    className,
    onSelect = () => {},
    ...rest
}) => {
    const headingId = `${id}-breadcrumbs-heading`
    const lastItemIndex = Children.count(breadcrumbItems) - 1
    const A11yHeadingTag = a11yHeadingTag
    const anyLink = Children.toArray(breadcrumbItems).some((item: ReactElement) => item.props.href)
    const tag = anyLink ? 'a' : 'button'

    return (
        <nav
            {...rest}
            aria-labelledby={headingId}
            className={classNames('breadcrumbs', className)}
            role="navigation"
        >
            <A11yHeadingTag id={headingId} className="clipped">{a11yHeadingText}</A11yHeadingTag>
            <ul>
                {Children.map(breadcrumbItems, (item: ReactElement, index) => {
                    const isLastItem = index === lastItemIndex
                    const { href, children } = item.props
                    const itemProps = {
                        tag,
                        isLastItem,
                        href,
                        children,
                        onClick: event => onSelect(event, event.target)
                    }

                    return cloneElement(item, itemProps)
                })}
            </ul>
        </nav>
    )
}

export default Breadcrumbs

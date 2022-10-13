import React, { Children, ComponentProps, FC, MouseEvent, useState } from 'react'
import classnames from 'classnames'
import { EbayIcon, Icon } from '../ebay-icon'
import { EbayButtonCell } from '../ebay-button'

type HTMLButtonProps = ComponentProps<'button'>;
export type ExpandButtonProps = HTMLButtonProps & {
    borderless?: boolean;
    icon?: Icon;
    onExpand?: () => void;
    onCollapse?: () => void;
    onClick?: (e: MouseEvent) => void;
}

const EbayExpandButton: FC<ExpandButtonProps> = ({
    className,
    borderless,
    icon = 'dropdown',
    onExpand = () => {},
    onCollapse = () => {},
    onClick = () => {},
    children,
    ...rest
}) => {
    const [expanded, setExpanded] = useState(false)
    const hasChildren = !!Children.count(children)
    const buttonClasses = classnames('btn', className,
        { 'btn--icon-only': !hasChildren },
        { 'btn--borderless': borderless }
    )

    const handleClick = e => {
        const willExpand = !expanded
        if (willExpand) {
            onExpand()
        } else {
            onCollapse()
        }
        setExpanded(!expanded)
        onClick(e)
    }

    return (
        <button
            {...rest}
            className={borderless && !hasChildren ? 'icon-btn' : buttonClasses}
            aria-expanded={expanded}
            onClick={handleClick}
        >
            {borderless && !hasChildren ?
                <EbayIcon name={icon} /> :
                <EbayButtonCell type="expand">
                    {hasChildren && <span className="btn__text">{children}</span>}
                    <EbayIcon name={icon} />
                </EbayButtonCell>
            }
        </button>
    )
}

export default EbayExpandButton

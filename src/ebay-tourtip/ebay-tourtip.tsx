import React, { CSSProperties, FC, useRef } from 'react'
import { findComponent } from '../common/component-utils'
import {
    Tooltip,
    TooltipHost,
    TooltipContent,
    TooltipProps,
    PointerDirection,
    useTooltip,
    TooltipFooter
} from '../common/tooltip-utils'
import EbayTourtipContent from './ebay-tourtip-content'
import EbayTourtipHost from './ebay-tourtip-host'
import EbayTourtipFooter from './ebay-tourtip-footer'
import EbayTourtipHeading from './ebay-tourtip-heading'

// @todo: this type is weird, we should improve it
type TourtipProps = Omit<TooltipProps, 'ref'> & {
    a11yCloseText: string;
    pointer?: PointerDirection;
    onExpand?: () => void;
    onCollapse?: () => void;
    overlayStyle?: CSSProperties;
    'aria-label'?: string;
    className?: string;
}

const EbayTourtip:FC<TourtipProps> = ({
    a11yCloseText,
    'aria-label': ariaLabel,
    className,
    children,
    onCollapse,
    onExpand,
    overlayStyle,
    pointer,
    ...rest
}) => {
    const buttonRef = useRef()
    const {
        isExpanded,
        collapseTooltip
    } = useTooltip({ onExpand, onCollapse, initialExpanded: true, hostRef: buttonRef })
    const containerRef = useRef()
    const content = findComponent(children, EbayTourtipContent)
    if (!content) {
        throw new Error(`EbayTourtip: Please use a EbayTourtipContent that defines the content of the tourtip`)
    }
    const { children: contentChildren, contentProps } = content.props
    const footer = findComponent(contentChildren, EbayTourtipFooter)
    const host = findComponent(children, EbayTourtipHost)
    if (!host) {
        throw new Error(`EbayTourtip: Please use a EbayTourtipHost that defines the host of the tourtip`)
    }
    const heading = findComponent(children, EbayTourtipHeading)


    return (
        <Tooltip
            {...rest}
            className={className}
            type="tourtip"
            isExpanded={isExpanded}
            ref={containerRef}
        >
            <TooltipHost
                {...host.props}
                forwardedRef={buttonRef}
                ariaLabel={ariaLabel}
                ariaExpanded={isExpanded} />
            <TooltipContent
                {...contentProps}
                a11yCloseText={a11yCloseText}
                onClose={collapseTooltip}
                pointer={pointer}
                showCloseButton
                style={overlayStyle}
                type="tourtip"
            >
                {heading}
                {contentChildren}
                {footer && (
                    <TooltipFooter displayPagination {...footer.props}>
                        {footer.props.children}
                    </TooltipFooter>
                )}
            </TooltipContent>
        </Tooltip>
    )
}
export default EbayTourtip

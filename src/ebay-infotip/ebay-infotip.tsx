import React, { cloneElement, createElement, CSSProperties, FC, useRef } from 'react'
import classNames from 'classnames'
import { findComponent } from '../common/component-utils'
import { Tooltip, TooltipHost, TooltipContent, PointerDirection, useTooltip } from '../common/tooltip-utils'
import { EbayLightboxDialog } from '../ebay-lightbox-dialog'
import { EbayDialogHeader } from '../ebay-dialog-base'
import EbayInfotipHost from './ebay-infotip-host'
import { Icon } from '../ebay-icon'
import { Variant } from './types'
import { EbayInfotipHeading, EbayInfotipContent } from './index'

type InfotipProps = {
    variant?: Variant;
    icon?: Icon;
    disabled?: boolean;
    initialExpanded?: boolean;
    pointer?: PointerDirection;
    overlayStyle?: CSSProperties;
    onExpand?: () => void;
    onCollapse?: () => void;
    a11yCloseText: string;
    'aria-label'?: string;
    className?: string;
};

const EbayInfotip: FC<InfotipProps> = ({
    variant = 'default',
    pointer,
    overlayStyle,
    disabled,
    onExpand,
    onCollapse,
    children,
    initialExpanded,
    icon = 'informationSmall',
    a11yCloseText,
    'aria-label': ariaLabel,
    className
}) => {
    const {
        isExpanded,
        expandTooltip,
        collapseTooltip
    } = useTooltip({ onCollapse, onExpand, initialExpanded })

    const isModal = variant === 'modal'
    const containerRef = useRef()
    const heading = findComponent(children, EbayInfotipHeading)
    const content = findComponent(children, EbayInfotipContent)
    const button = findComponent(children, EbayInfotipHost) || createElement(EbayInfotipHost)

    const toggleTooltip = () => {
        if (isExpanded) {
            collapseTooltip()
        } else {
            expandTooltip()
        }
    }

    if (!content) {
        throw new Error(`EbayInfotip: Please use a EbayInfotipContent that defines the content of the infotip`)
    }

    const { children: contentChildren, ...contentProps } = content.props

    return (
        <Tooltip
            type="infotip"
            isExpanded={isExpanded}
            className={classNames(className, { 'dialog--mini': isModal })}
            ref={containerRef}>
            <TooltipHost>
                {cloneElement(button, {
                    onClick: toggleTooltip,
                    disabled,
                    variant,
                    'aria-label': ariaLabel,
                    'aria-expanded': isExpanded,
                    icon,
                    ...button.props
                })}
            </TooltipHost>
            {isModal ? (
                <EbayLightboxDialog
                    {...contentProps}
                    open={isExpanded}
                    onClose={collapseTooltip}
                    mode="mini"
                    a11yCloseText={a11yCloseText}
                    className="dialog--mini__overlay"
                >
                    <EbayDialogHeader />
                    {contentChildren}
                </EbayLightboxDialog>
            ) : (
                <TooltipContent
                    {...contentProps}
                    type="infotip"
                    style={overlayStyle}
                    pointer={pointer}
                    showCloseButton
                    a11yCloseText={a11yCloseText}
                    onClose={collapseTooltip}
                >
                    {heading}
                    {contentChildren}
                </TooltipContent>
            )}
        </Tooltip>
    )
}

export default EbayInfotip

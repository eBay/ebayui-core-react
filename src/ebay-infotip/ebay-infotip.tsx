import React, { cloneElement, createElement, CSSProperties, FC, useRef, ReactNode, isValidElement } from 'react'
import classNames from 'classnames'
import { elementProps, findComponent } from '../common/component-utils'
import { Tooltip, TooltipHost, TooltipContent, PointerDirection, useTooltip } from '../common/tooltip-utils'
import { EbayDrawerDialog } from '../ebay-drawer-dialog'
import { EbayDialogHeader } from '../ebay-dialog-base'
import EbayInfotipHost, { InfotipHostProps } from './ebay-infotip-host'
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
    children?: ReactNode;
    a11yMaximizeText?:string;
    a11yMinimizeText?:string;
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
    icon = 'information16',
    a11yCloseText,
    'aria-label': ariaLabel,
    className,
    a11yMaximizeText,
    a11yMinimizeText
}: InfotipProps) => {
    const buttonRef = useRef()
    const {
        isExpanded,
        expandTooltip,
        collapseTooltip
    } = useTooltip({ onCollapse, onExpand, initialExpanded, hostRef: buttonRef })

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

    const { children: contentChildren, ...contentProps } = elementProps(content)

    return (
        <>

            <Tooltip
                type="infotip"
                isExpanded={isExpanded}
                className={classNames(className, { 'dialog--mini': isModal })}
                ref={containerRef}>
                <TooltipHost>
                    {isValidElement(button) && cloneElement<InfotipHostProps>(button, {
                        ref: buttonRef,
                        onClick: toggleTooltip,
                        disabled,
                        variant,
                        'aria-label': ariaLabel,
                        'aria-expanded': isExpanded,
                        icon,
                        ...elementProps(button)
                    })}
                </TooltipHost>
                {!isModal && (
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
            {isModal && (
                <EbayDrawerDialog
                    {...contentProps}
                    open={isExpanded}
                    onClose={collapseTooltip}
                    a11yCloseText={a11yCloseText}
                    className="dialog--mini__overlay"
                    a11yMaximizeText={a11yMaximizeText}
                    a11yMinimizeText={a11yMinimizeText}
                >
                    <EbayDialogHeader>{heading}</EbayDialogHeader>
                    {contentChildren}
                </EbayDrawerDialog>
            )}
        </>
    )
}

export default EbayInfotip

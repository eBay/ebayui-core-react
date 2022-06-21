import React, { Children, FC, ReactElement, RefObject, Touch, TouchEvent, useState } from 'react'
import classNames from 'classnames'
import { DialogBaseProps, DialogBaseWithState, EbayDialogHeader } from '../../ebay-dialog-base'

const THRESHOLD_TOUCH = 30
const classPrefix = 'drawer-dialog'

export interface EbayDrawerProps<T> extends DialogBaseProps<T> {
    expanded?: boolean;
    open?: boolean;
    noHandle?: boolean;
    focus?: RefObject<HTMLAnchorElement & HTMLButtonElement>;
    a11yCloseText?: string;
    a11yMinimizeText?: string;
    a11yMaximizeText?: string;
    onShow?: () => void;
    onClose?: () => void;
    onExpanded?: () => void;
    onCollapsed?: () => void;
}

const EbayDrawerDialog: FC<EbayDrawerProps<any>> = ({
    expanded: defaultExpanded = false,
    noHandle,
    onClose = () => {},
    onCollapsed = () => {},
    onExpanded = () => {},
    a11yMaximizeText = 'Maximize Drawer',
    a11yMinimizeText = 'Minimize Drawer',
    children,
    ...rest
}) => {
    let touches: Partial<Touch>[] = []
    const [expanded, setExpanded] = useState(defaultExpanded)

    const setExpandedState = (expand: boolean) => {
        setExpanded(expand)
        if (expand) {
            onExpanded()
        } else {
            onCollapsed()
        }
    }

    const handleTouchStart = (e: TouchEvent) => {
        touches = Array.from(e.changedTouches).map(({ identifier, pageY }) => ({ identifier, pageY }))
    }

    const handleTouchEnd = (e: TouchEvent) => {
        Array.from(e.changedTouches).forEach(({ identifier }) => {
            const idx = touches.findIndex((touch) => touch.identifier === identifier)
            if (idx > -1) {
                touches.splice(idx, 1)
            }
        })
    }

    const handleTouchMove = (e: TouchEvent) => {
        if (touches.length) {
            Array.from(e.changedTouches).forEach(({ identifier, pageY }) => {
                const compare = touches.findIndex(touch => touch.identifier === identifier)
                const diff = pageY - touches[compare].pageY
                if (diff > THRESHOLD_TOUCH) {
                    // Drag down, collpase
                    if (expanded) {
                        setExpandedState(false)
                    } else {
                        onClose()
                    }
                    handleTouchEnd(e)
                } else if (diff < -THRESHOLD_TOUCH) {
                    setExpandedState(true)
                    handleTouchEnd(e)
                }
            })
        }
    }

    const handle = noHandle ? null : (
        <button
            aria-label={expanded ? a11yMinimizeText : a11yMaximizeText}
            className={`${classPrefix}__handle`}
            onClick={() => setExpandedState(!expanded)}
            onScroll={() => setExpandedState(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        />
    )

    const childrenArray = Children.toArray(children) as ReactElement[]
    const header = childrenArray.find(({ type }) => type === EbayDialogHeader)
    const withoutHeader = childrenArray.filter(({ type }) => type !== EbayDialogHeader)

    return (
        <DialogBaseWithState
            {...rest}
            classPrefix={classPrefix}
            buttonPosition="right"
            onCloseBtnClick={onClose}
            className={classNames(rest.className, `${classPrefix}--mask-fade-slow`)}
            windowClass={classNames(`${classPrefix}__window`, `${classPrefix}__window--slide`, {
                [`${classPrefix}__window--expanded`]: expanded
            })}
            onBackgroundClick={onClose}
            top={handle}
        >
            {header || <EbayDialogHeader />}
            {withoutHeader}
        </DialogBaseWithState>
    )
}

export default EbayDrawerDialog

import React, {
    FC,
    HTMLProps,
    RefObject,
    useEffect,
    useRef,
    useState,
    ReactElement,
    cloneElement,
    MouseEventHandler,
    ReactNode
} from 'react'
import classNames from 'classnames'
import * as screenreaderTrap from 'makeup-screenreader-trap'
import * as keyboardTrap from 'makeup-keyboard-trap'
import { EbayIcon } from '../../ebay-icon'
import { randomId } from '../../common/random-id'
import { useDialogAnimation, TransitionElement } from './animation'

export type WindowType = 'compact'
type ClassPrefix = 'fullscreen-dialog' | 'lightbox-dialog' | 'panel-dialog'
    | 'drawer-dialog' | 'toast-dialog' | 'alert-dialog' | 'confirm-dialog'
    | 'snackbar-dialog'
type ButtonPosition = 'top' | 'right' | 'bottom' | 'left' | 'hidden'


export interface DialogBaseProps<T> extends HTMLProps<T> {
    baseEl?: 'div' | 'span' | 'aside';
    open?: boolean;
    classPrefix?: ClassPrefix;
    windowClass?: string;
    windowType?: WindowType;
    header?: ReactElement;
    footer?: ReactElement;
    actions?: ReactElement;
    isModal?: boolean;
    top?: ReactElement;
    buttonPosition?: ButtonPosition;
    ariaLabelledby?: string;
    a11yCloseText?: string;
    onCloseBtnClick?: MouseEventHandler;
    onBackgroundClick?: MouseEventHandler;
    mainId?: string;
    ignoreEscape?: boolean;
    closeButton?: ReactElement;
    focus?: RefObject<HTMLAnchorElement & HTMLButtonElement>;
    animated?: boolean;
    transitionElement?: TransitionElement;
    children?: ReactNode;
}

export const DialogBase: FC<DialogBaseProps<HTMLElement>> = ({
    baseEl: Container = 'div',
    classPrefix = 'drawer-dialog',
    windowClass,
    windowType,
    mainId,
    top,
    header,
    buttonPosition = 'right',
    children,
    ariaLabelledby,
    a11yCloseText,
    onCloseBtnClick = () => {},
    footer,
    actions,
    onScroll,
    open = false,
    onBackgroundClick = () => {},
    ignoreEscape,
    closeButton,
    isModal,
    role = 'dialog',
    focus,
    transitionElement,
    animated,
    ...props
}) => {
    const dialogRef = useRef(null)
    const drawerBaseEl = useRef(null)
    const closeButtonRef = useRef(null)

    const [rId, setRandomId] = useState('')

    useEffect(() => {
        setRandomId(randomId())
    }, [])

    useEffect(() => {
        const handleBackgroundClick = (e: React.MouseEvent) => {
            if (drawerBaseEl.current && !drawerBaseEl.current.contains(e.target)) {
                onBackgroundClick(e)
            }
        }
        if (open && buttonPosition !== 'hidden') {
            // On React 18 useEffect hooks runs synchronous instead of asynchronous as React 17 or prior
            // causing the event listener to be attached to the document at the same time that the dialog
            // opens. Adding a timeout so the event is attached after the click event that opened the modal
            // is finished.
            setTimeout(() => {
                document.addEventListener('click', handleBackgroundClick as any, false)
            })
        }
        return () => document.removeEventListener('click', handleBackgroundClick as any, false)
    }, [onBackgroundClick, open])

    useEffect(() => {
        if (open && isModal) {
            screenreaderTrap.trap(drawerBaseEl.current)
            keyboardTrap.trap(drawerBaseEl.current)
        } else {
            screenreaderTrap.untrap()
            keyboardTrap.untrap()
        }
        return () => {
            screenreaderTrap.untrap()
            keyboardTrap.untrap()
        }
    }, [open, isModal])

    useDialogAnimation({
        open,
        classPrefix,
        transitionElement,
        dialogRef,
        dialogWindowRef: drawerBaseEl,
        enabled: animated,
        onTransitionEnd: () => handleFocus(open)
    })

    const onKeyDown = (event: React.KeyboardEvent) => {
        if (!ignoreEscape && event.key === 'Escape') {
            event.stopPropagation()
            onCloseBtnClick(undefined)
        }
    }

    useEffect(() => {
        // For animated dialogs we handle the focus on transitionEnd event
        if (!animated) {
            handleFocus(open)
        }
    }, [open])

    function handleFocus(isOpen: boolean) {
        if (isOpen) {
            if (focus) {
                focus.current?.focus()
            } else if (isModal) {
                closeButtonRef.current?.focus()
            }
            document.addEventListener('keydown', onKeyDown as any, false)
            return () => document.removeEventListener('keydown', onKeyDown as any, false)
        }
    }

    const closeButtonContent = buttonPosition !== 'hidden' && (
        <button
            ref={closeButtonRef}
            className={classNames(`icon-btn`, `${classPrefix}__close`, {
                'icon-btn--transparent': classPrefix === `toast-dialog`
            })}
            type="button"
            aria-label={a11yCloseText}
            onClick={onCloseBtnClick as any}
        >
            {closeButton || <EbayIcon name="close" />}
        </button>
    )

    const windowClassName = windowType ? `${classPrefix}__${windowType}-window` : `${classPrefix}__window`

    const dialogTitleId = header?.props?.id || `dialog-title-${rId}`
    const dialogLabelledBy = ariaLabelledby || dialogTitleId
    const dialogHeader = header ? cloneElement(header, { ...header.props, id: dialogTitleId }) : null

    return (
        <Container
            {...props}
            aria-labelledby={dialogLabelledBy}
            arial-modal="true"
            role={role}
            hidden={!open}
            className={classNames(classPrefix, props.className)}
            aria-live={!isModal ? 'polite' : undefined}
            ref={dialogRef}
            onKeyDown={onKeyDown}
        >
            <div className={classNames(windowClassName, windowClass)} ref={drawerBaseEl}>
                {top}
                {dialogHeader && (
                    <div className={`${classPrefix}__header`}>
                        {buttonPosition === 'right' && dialogHeader}
                        {buttonPosition !== 'bottom' && closeButtonContent}
                        {(buttonPosition === 'left' || buttonPosition === 'hidden') && dialogHeader}
                    </div>
                )}
                <div id={mainId} className={`${classPrefix}__main`} onScroll={onScroll}>
                    {children}
                </div>
                {actions ? (
                    <div className={`${classPrefix}__actions`}>
                        {actions}
                    </div>
                ) : null}
                {footer || buttonPosition === 'bottom' ? (
                    <div className={`${classPrefix}__footer`}>
                        {footer}
                        {buttonPosition === 'bottom' && closeButtonContent}
                    </div>
                ) : null}
            </div>
        </Container>
    )
}

export default DialogBase

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
    ReactNode,
    KeyboardEvent,
    KeyboardEventHandler,
    MouseEvent
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
    onOpen?: () => void;
    onCloseBtnClick?: MouseEventHandler & KeyboardEventHandler;
    onBackgroundClick?: MouseEventHandler;
    mainId?: string;
    ignoreEscape?: boolean;
    closeButton?: ReactElement;
    previousButton?: ReactElement;
    focus?: RefObject<HTMLAnchorElement & HTMLButtonElement>;
    animated?: boolean;
    closeButtonClass?: string;
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
    onOpen = () => {},
    onBackgroundClick = () => {},
    ignoreEscape,
    closeButton,
    previousButton,
    isModal,
    role = 'dialog',
    focus,
    transitionElement,
    animated,
    closeButtonClass,
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

    const onKeyDown = (event: KeyboardEvent) => {
        if (!ignoreEscape && event.key === 'Escape') {
            event.stopPropagation()
            onCloseBtnClick(event)
        }
    }

    useEffect(() => {
        // For animated dialogs we handle the focus on transitionEnd event
        if (!animated) {
            handleFocus(open)
        }
        if (open) {
            onOpen()
        }
    }, [open])

    const handleDialogClick = (e: MouseEvent) => {
        if (e.currentTarget === e.target && buttonPosition !== 'hidden') {
            onBackgroundClick(e)
        }
    }

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
            className={classNames(`icon-btn`, closeButtonClass, `${classPrefix}__close`, {
                'icon-btn--transparent': classPrefix === `toast-dialog`
            })}
            type="button"
            aria-label={a11yCloseText}
            onClick={onCloseBtnClick}
        >
            {closeButton || <EbayIcon name="close16" />}
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
            onClick={handleDialogClick}
            onKeyDown={onKeyDown}
        >
            <div className={classNames(windowClassName, windowClass)} ref={drawerBaseEl}>
                {top}
                {dialogHeader && (
                    <div className={`${classPrefix}__header`}>
                        {previousButton}
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

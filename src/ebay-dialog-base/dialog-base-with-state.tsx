import React, { Children, ReactElement } from 'react'
import { RemoveScroll } from 'react-remove-scroll'
import { DialogBase, DialogBaseProps } from './components/dialogBase'
import { EbayDialogCloseButton, EbayDialogFooter, EbayDialogHeader, EbayDialogActions } from './index'

export const DialogBaseWithState = ({
    isModal,
    open,
    children,
    animated = true,
    ...rest
}: DialogBaseProps<HTMLElement>): ReactElement => {
    const shouldRenderModal = isModal !== false

    const childrenArray = Children.toArray(children) as ReactElement[]
    const header = childrenArray.find((child: ReactElement) => child.type === EbayDialogHeader)
    const footer = childrenArray.find((child: ReactElement) => child.type === EbayDialogFooter)
    const actions = childrenArray.find((child: ReactElement) => child.type === EbayDialogActions)
    const closeButton = childrenArray.find((child: ReactElement) => child.type === EbayDialogCloseButton)
    const content = childrenArray.filter((child: ReactElement) =>
        ![EbayDialogHeader, EbayDialogFooter, EbayDialogCloseButton, EbayDialogActions].some(c => c === child.type))

    const dialogBase = (
        <DialogBase
            {...rest}
            open={open}
            isModal={shouldRenderModal}
            header={header}
            footer={footer}
            actions={actions}
            closeButton={closeButton}
            animated={animated}
        >
            {content}
        </DialogBase>
    )

    const renderOverLay = () => shouldRenderModal ? (
        <RemoveScroll enabled={open}>
            {dialogBase}
        </RemoveScroll>
    ) : dialogBase

    return animated || open ? renderOverLay() : null
}

export default DialogBaseWithState

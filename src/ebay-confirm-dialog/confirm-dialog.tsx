import React, { FC, useRef } from 'react'
import classNames from 'classnames'
import { DialogBaseProps, DialogBaseWithState, EbayDialogFooter } from '../ebay-dialog-base'
import { DialogCloseEventHandler } from '../ebay-dialog-base/types'
import { EbayButton } from '../ebay-button'

const classPrefix = 'confirm-dialog'

export interface Props<T = any> extends DialogBaseProps<T> {
    open?: boolean;
    confirmText: string;
    rejectText: string;
    onReject?: DialogCloseEventHandler;
    onConfirm?: () => void;
}

const EbayConfirmDialog: FC<Props> = ({
    a11yCloseText = 'Close Dialog',
    confirmText,
    rejectText,
    onReject = () => {},
    onConfirm = () => {},
    ...rest
}) => {
    const confirmBtnRef = useRef(null)
    const confirmId = 'confirm-dialog-confirm'
    const mainId = 'confirm-dialog-main'
    return (
        <DialogBaseWithState
            focus={confirmBtnRef}
            {...rest}
            a11yCloseText={a11yCloseText}
            role="dialog"
            mainId={mainId}
            classPrefix={classPrefix}
            className={classNames(rest.className, `${classPrefix}--mask-fade`)}
            windowClass={`${classPrefix}__window ${classPrefix}__window--fade`}
            buttonPosition="hidden"
            onCloseBtnClick={onReject}
        >
            {rest.children}
            <EbayDialogFooter classPrefix={classPrefix}>
                <EbayButton
                    onClick={onReject}
                    className="confirm-dialog__reject"
                >
                    {rejectText}
                </EbayButton>
                <EbayButton
                    ref={confirmBtnRef}
                    priority="primary"
                    onClick={onConfirm}
                    id={confirmId}
                    aria-describedby={mainId}
                    className="confirm-dialog__confirm"
                >
                    {confirmText}
                </EbayButton>
            </EbayDialogFooter>
        </DialogBaseWithState>
    )
}

export default EbayConfirmDialog

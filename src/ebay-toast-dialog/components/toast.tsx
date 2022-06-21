import React, { MouseEventHandler, KeyboardEventHandler, FC } from 'react'
import classNames from 'classnames'
import { DialogBaseWithState, DialogBaseProps } from '../../ebay-dialog-base'

export type EbayToastProps = DialogBaseProps<HTMLElement> & {
  onClose?: MouseEventHandler<HTMLButtonElement> & KeyboardEventHandler;
};

export const EbayToast: FC<EbayToastProps> = ({
    className,
    onClose = () => {},
    ...rest
}) => (
    <DialogBaseWithState
        {...rest}
        isModal={false}
        baseEl="aside"
        classPrefix="toast-dialog"
        buttonPosition="right"
        transitionElement="root"
        className={classNames(className, 'toast-dialog--transition')}
        onCloseBtnClick={onClose}
    />
)

export default EbayToast

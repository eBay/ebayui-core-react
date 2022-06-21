import React, { FC } from 'react'
import classNames from 'classnames'
import { DialogBaseProps, DialogBaseWithState } from '../ebay-dialog-base'

const classPrefix = 'fullscreen-dialog'

export interface Props<T = any> extends DialogBaseProps<T> {
  open?: boolean;
  sliding?: boolean /* DEPRECATED */;
  onOpen?: () => void;
  onClose?: () => void;
}

const EbayFullscreenDialog: FC<Props> = ({
    open,
    onClose = () => {},
    onOpen = () => {},
    a11yCloseText = 'Close Dialog',
    className,
    animated,
    sliding,
    ...rest
}) => (
    <DialogBaseWithState
        {...rest}
        classPrefix={classPrefix}
        buttonPosition="left"
        onCloseBtnClick={onClose}
        transitionElement="window"
        animated={sliding || animated}
        className={classNames(className, `${classPrefix}--mask-fade-slow`)}
        windowClass={classNames(`${classPrefix}__window`, `${classPrefix}__window--slide`)}
        open={open}
    />
)

export default EbayFullscreenDialog

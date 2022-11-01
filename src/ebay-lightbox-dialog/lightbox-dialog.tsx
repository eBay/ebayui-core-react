import React, { FC } from 'react'
import classNames from 'classnames'
import { DialogBaseProps, DialogBaseWithState } from '../ebay-dialog-base'

const classPrefix = 'lightbox-dialog'

type Mode = 'default' | 'mini'

export interface Props<T = any> extends DialogBaseProps<T> {
  open?: boolean;
  mode?: Mode;
  onOpen?: () => void;
  onClose?: () => void;
}

const EbayLightboxDialog: FC<Props> = ({
    open,
    mode,
    onClose = () => {},
    onOpen = () => {},
    ...rest
}) => (
    <DialogBaseWithState
        buttonPosition="right"
        {...rest}
        classPrefix={classPrefix}
        onCloseBtnClick={onClose}
        onBackgroundClick={onClose}
        className={classNames(rest.className, `${classPrefix}--mask-fade`)}
        windowClass={classNames('lightbox-dialog__window--fade', {
            [`${classPrefix}__window--mini`]: mode === 'mini'
        })}
        open={open}
    />
)

export default EbayLightboxDialog

import React, { FC } from 'react'
import classNames from 'classnames'
import { DialogBaseProps, DialogBaseWithState } from '../ebay-dialog-base'

const classPrefix = 'lightbox-dialog'

type Mode = 'default' | 'mini'
type Size = 'wide' | 'narrow' | 'fullscreen' | 'large'

export type Props<T = any> = Omit<DialogBaseProps<T>, 'size'> & {
  open?: boolean;
  mode?: Mode;
  size?: Size;
  onClose?: () => void;
}

const EbayLightboxDialog: FC<Props> = ({
    open,
    mode,
    size,
    onClose = () => {},
    ...rest
}) => (
    <DialogBaseWithState
        buttonPosition="right"
        {...rest}
        classPrefix={classPrefix}
        onCloseBtnClick={onClose}
        onBackgroundClick={onClose}
        className={classNames(rest.className, `${classPrefix}--mask-fade`, size && `${classPrefix}--${size}`)}
        windowClass={classNames('lightbox-dialog__window--fade', {
            [`${classPrefix}__window--mini`]: mode === 'mini'
        })}
        open={open}
    />
)

export default EbayLightboxDialog

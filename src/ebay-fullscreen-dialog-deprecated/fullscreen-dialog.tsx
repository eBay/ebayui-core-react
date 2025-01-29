import React, { FC } from 'react'
import classNames from 'classnames'
import { DialogBaseProps, DialogBaseWithState } from '../ebay-dialog-base'

const classPrefix = 'fullscreen-dialog'

export interface Props<T = any> extends DialogBaseProps<T> {
  open?: boolean;
  onClose?: () => void;
}

const EbayFullscreenDialogDeprecated: FC<Props> = ({
    open,
    onClose = () => {},
    className,
    animated,
    ...rest
}) => (
    <DialogBaseWithState
        {...rest}
        classPrefix={classPrefix}
        buttonPosition="right"
        onCloseBtnClick={onClose}
        transitionElement="window"
        animated={animated}
        className={classNames(className, `${classPrefix}--mask-fade-slow`)}
        windowClass={classNames(`${classPrefix}__window`, `${classPrefix}__window--slide`)}
        open={open}
    />
)

export default EbayFullscreenDialogDeprecated

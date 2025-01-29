import React, { CSSProperties, FC } from 'react'
import classNames from 'classnames'
import { DialogBaseProps, DialogBaseWithState } from '../ebay-dialog-base'

type Mode = 'default' | 'mini'
type Size = 'wide' | 'narrow' | 'fullscreen' | 'large'

export type Props<T = any> = Omit<DialogBaseProps<T>, 'size'> & {
  open?: boolean;
  mode?: Mode;
  size?: Size;
  bannerImgSrc?: string;
  bannerImgPosition?: CSSProperties['backgroundPosition'];
  a11yBannerText?: string;
  onClose?: () => void;
}

const EbayLightboxDialog: FC<Props> = ({
    open,
    mode,
    size,
    bannerImgSrc,
    bannerImgPosition,
    a11yBannerText,
    onClose = () => {},
    ...rest
}) => {
    const top = bannerImgSrc ? (
        <div
            className="lightbox-dialog__image"
            role="img"
            aria-label={a11yBannerText}
            style={{
                backgroundImage: `url(${bannerImgSrc})`,
                backgroundPosition: bannerImgPosition
            }} />
    ) : null

    return (
        <DialogBaseWithState
            buttonPosition="right"
            {...rest}
            classPrefix="lightbox-dialog"
            onCloseBtnClick={onClose}
            onBackgroundClick={onClose}
            className={classNames(
                rest.className,
                'lightbox-dialog--mask-fade',
                {
                    [`lightbox-dialog--${size}`]: size,
                    'lightbox-dialog--expressive': bannerImgSrc
                }
            )}
            windowClass={classNames('lightbox-dialog__window--fade', {
                'lightbox-dialog__window--mini': mode === 'mini'
            })}
            top={top}
            open={open}
        />
    )
}
export default EbayLightboxDialog

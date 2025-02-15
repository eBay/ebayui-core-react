import React, { ComponentProps, FC } from 'react'
import cx from 'classnames'
import { EbayIcon } from '../ebay-icon'
import { getColorForText } from './utils'
import { Size, Color } from './types'

export type EbayAvatarProps = ComponentProps<'div'> & {
    size?: Size;
    color?: Color;
    username?: string;
}

const EbayAvatar: FC<EbayAvatarProps> = ({
    size,
    color,
    username,
    children,
    className,
    ...rest
}: EbayAvatarProps) => (
    <div
        {...rest}
        role="img"
        className={cx(
            'avatar',
            className,
            size && `avatar--${size}`,
            `avatar--${getColorForText(username, color)}`
        )}>
        {React.Children.count(children) > 0
            ? children
            : username?.charAt(0).toUpperCase() || <EbayIcon name="avatarSignedOut" />
        }
    </div>
)

export default EbayAvatar

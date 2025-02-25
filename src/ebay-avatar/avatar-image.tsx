import React, { ComponentProps, FC } from 'react'

export type EbayAvatarImageProps = ComponentProps<'img'>

const AvatarImage: FC<EbayAvatarImageProps> = (props) =>
    <img {...props} />

export default AvatarImage

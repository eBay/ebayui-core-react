import React, { FC, ReactNode } from 'react'

type EbayDialogCloseButtonProps = {
    children?: ReactNode;
}

const EbayDialogCloseButton: FC = ({ children }: EbayDialogCloseButtonProps) => <>{children}</>

export default EbayDialogCloseButton

import React, { FC, ReactNode } from 'react'

type EbayDialogFooterProps = {
    children?: ReactNode;
}

const EbayDialogCloseButton: FC = ({ children }: EbayDialogFooterProps) => <>{children}</>

export default EbayDialogCloseButton

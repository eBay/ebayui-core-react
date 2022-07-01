/**
 * This Component is used only for finding it as a child of EbayInfotip
 * and pass the properties to TooltipContent
*/
import React, { FC, ReactNode } from 'react'

type EbayInfotipContentProps = {
    children?: ReactNode;
}

const EbayInfotipContent: FC = ({ children }: EbayInfotipContentProps) => <>{children}</>

export default EbayInfotipContent

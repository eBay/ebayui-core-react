import React, { FC, ReactNode } from 'react'
import { ClassPrefix } from '../types'

type EbayDialogFooterProps = {
    classPrefix?: ClassPrefix;
    children?: ReactNode;
};

const EbayDialogFooter: FC<EbayDialogFooterProps> = ({ classPrefix = 'drawer-dialog', children }) => (
    <div className={`${classPrefix}__footer`}>{children}</div>
)

export default EbayDialogFooter

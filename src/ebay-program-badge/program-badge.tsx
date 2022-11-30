import React, { FC } from 'react'
import { EbayIcon, EbayIconProps } from '../ebay-icon'
import { ProgramBadge } from './index'

export type EbayProgramBadgeProps = Omit<EbayIconProps, 'type' | 'name' | 'ref'> & {
    name: ProgramBadge;
};

const EbayProgramBadge: FC<EbayProgramBadgeProps> = ({ name, ...rest }) =>
    <EbayIcon {...rest} type="program-badge" name={name as any} />

export default EbayProgramBadge

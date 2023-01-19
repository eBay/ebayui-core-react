import React from 'react'
import { EbayBadge } from '../index'


export default {
    component: EbayBadge,
    title: 'ebay-badge'
};

export const Default = () => (<>
    <EbayBadge aria-label="1 unread item" number={1} />
</>)

export const Zero = () => (<>
    <EbayBadge aria-label="0 unread items" number={0} />
</>)

export const BigNumbers = () => (<>
    <EbayBadge aria-label="120 unread items" number={120} />
</>)

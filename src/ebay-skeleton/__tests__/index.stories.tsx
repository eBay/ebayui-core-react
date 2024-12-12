import React from 'react'
import { EbaySkeleton, EbaySkeletonAvatar, EbaySkeletonButton, EbaySkeletonImage } from '../'

export default {
    component: EbaySkeleton,
    title: 'skeleton &ebay-skeleton-avatar'
}

export const Avatar = () => (
    <>
        <EbaySkeleton>
            <EbaySkeletonAvatar />
        </EbaySkeleton>
    </>
)

export const ButtonSmall = () => (
    <>
        <EbaySkeleton>
            <EbaySkeletonButton size="small" style={{ width: '200px'}} />
        </EbaySkeleton>
    </>
)

export const ButtonLarge = () => (
    <>
        <EbaySkeleton>
            <EbaySkeletonButton size="large" style={{ width: '200px'}}/>
        </EbaySkeleton>
    </>
)

export const Image = () => (
    <>
        <EbaySkeleton>
            <EbaySkeletonImage style={{ width: '100px', height: '100px' }} />
        </EbaySkeleton>
    </>
)

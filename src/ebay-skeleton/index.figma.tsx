import figma from '@figma/code-connect'

import React from 'react'
import {
    EbaySkeleton, EbaySkeletonAvatar, EbaySkeletonButton, EbaySkeletonImage, EbaySkeletonText
} from '.'

figma.connect(
    EbaySkeleton,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=89925-103954',
    {
        example: () => (
            <EbaySkeleton aria-label="Loading...">
                <EbaySkeletonImage style={{ width: '220px', height: '220px' }} />
            </EbaySkeleton>
        )
    }
)

figma.connect(
    EbaySkeleton,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=88744-100839',
    {
        example: () => (
            <EbaySkeleton aria-label="Loading...">
                <EbaySkeletonText multiline />
            </EbaySkeleton>
        )
    }
)

figma.connect(
    EbaySkeleton,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=88945-100989',
    {
        example: () => (
            <EbaySkeleton aria-label="Loading...">
                <EbaySkeletonButton />
            </EbaySkeleton>
        )
    }
)

figma.connect(
    EbaySkeleton,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=88945-103105',
    {
        example: () => (
            <EbaySkeleton aria-label="Loading...">
                <EbaySkeletonAvatar />
            </EbaySkeleton>
        )
    }
)

figma.connect(
    EbaySkeleton,
    'https://www.figma.com/design/zEBdEhbonrBOGzZ0fXzWvM/eBay-Evo-Design-System?node-id=89178-102271',
    {
        example: () => (
            <EbaySkeleton
                aria-label="Loading..."
                style={{
                    width: '220px'
                }}
            >
                <EbaySkeletonImage
                    style={{
                        height: '220px',
                        width: '220px'
                    }}
                />
                <EbaySkeletonText
                    multiline
                    size="large"
                />
            </EbaySkeleton>
        )
    }
)


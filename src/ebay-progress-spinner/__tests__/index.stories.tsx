import React from 'react'
import { storiesOf } from '@storybook/react'
import { EbayProgressSpinner } from '../index'

storiesOf(`ebay-progress-spinner`, module)
    .add(`Default, Small & Large`, () => (
        <>
            <p><EbayProgressSpinner /></p>
            <p><EbayProgressSpinner size="small" aria-label="Stand by..."/></p>
            <p><EbayProgressSpinner size="large" aria-label="Stand by..."/></p>
        </>
    ))

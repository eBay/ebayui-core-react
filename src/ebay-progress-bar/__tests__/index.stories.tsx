import React from 'react'
import { storiesOf } from '@storybook/react'
import { EbayProgressBar } from '../index'

storiesOf(`ebay-progress-bar`, module)
    .add(`Default`, () => (
        <>
            <p>0%<br/><EbayProgressBar /></p>
            <p>50%<br/><EbayProgressBar value={50} /></p>
            <p>100%<br/><EbayProgressBar value={100} /></p>
        </>
    ))
    .add(`Custom Max`, () => (
        <>
            <p>50/200<br/><EbayProgressBar value={50} max={200} /></p>
            <p>100/200<br/><EbayProgressBar value={100} max={200} /></p>
        </>
    ))
    .add(`Fluid`, () => (
        <>
            <p><EbayProgressBar fluid value={50} /></p>
        </>
    ))

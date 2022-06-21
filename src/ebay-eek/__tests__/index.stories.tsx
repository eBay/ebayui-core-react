import React from 'react'
import { storiesOf } from '@storybook/react'
import { EbayEek } from '../index'

storiesOf(`ebay-eek`, module)
    .add(`Standard`, () => (
        <>
            <EbayEek max="A+++" min="E" rating="C" />
        </>
    ))
    .add('Regular A', () => (
        <>
            <div>
                <EbayEek max="A" min="G" rating="A" />
                <EbayEek max="A" min="G" rating="B" />
                <EbayEek max="A" min="G" rating="C" />
                <EbayEek max="A" min="G" rating="D" />
                <EbayEek max="A" min="G" rating="E" />
                <EbayEek max="A" min="G" rating="F" />
                <EbayEek max="A" min="G" rating="G" />
            </div>
        </>
    ))
    .add('A++', () => (
        <>
            <div>
                <EbayEek max="A++" min="E" rating="A++" />
                <EbayEek max="A++" min="E" rating="A+" />
                <EbayEek max="A++" min="E" rating="A" />
                <EbayEek max="A++" min="E" rating="B" />
                <EbayEek max="A++" min="E" rating="C" />
                <EbayEek max="A++" min="E" rating="D" />
                <EbayEek max="A++" min="E" rating="E" />
            </div>
            <div>
                <EbayEek max="A++" min="G" rating="A++" />
                <EbayEek max="A++" min="G" rating="A+" />
                <EbayEek max="A++" min="G" rating="A" />
                <EbayEek max="A++" min="G" rating="B" />
                <EbayEek max="A++" min="G" rating="C" />
                <EbayEek max="A++" min="G" rating="D" />
                <EbayEek max="A++" min="G" rating="E" />
                <EbayEek max="A++" min="G" rating="F" />
                <EbayEek max="A++" min="G" rating="G" />
            </div>
        </>
    ))
    .add('Valid A+++', () => (
        <>
            <div>
                <EbayEek max="A+++" min="D" rating="A+++" />
                <EbayEek max="A+++" min="D" rating="A++" />
                <EbayEek max="A+++" min="D" rating="A+" />
                <EbayEek max="A+++" min="D" rating="A" />
                <EbayEek max="A+++" min="D" rating="B" />
                <EbayEek max="A+++" min="D" rating="C" />
                <EbayEek max="A+++" min="D" rating="D" />
            </div>
            <div>
                <EbayEek max="A+++" min="E" rating="A+++" />
                <EbayEek max="A+++" min="E" rating="A++" />
                <EbayEek max="A+++" min="E" rating="A+" />
                <EbayEek max="A+++" min="E" rating="A" />
                <EbayEek max="A+++" min="E" rating="B" />
                <EbayEek max="A+++" min="E" rating="C" />
                <EbayEek max="A+++" min="E" rating="D" />
                <EbayEek max="A+++" min="E" rating="E" />
            </div>
            <div>
                <EbayEek max="A+++" min="G" rating="A+++" />
                <EbayEek max="A+++" min="G" rating="A++" />
                <EbayEek max="A+++" min="G" rating="A+" />
                <EbayEek max="A+++" min="G" rating="A" />
                <EbayEek max="A+++" min="G" rating="B" />
                <EbayEek max="A+++" min="G" rating="C" />
                <EbayEek max="A+++" min="G" rating="D" />
                <EbayEek max="A+++" min="G" rating="E" />
                <EbayEek max="A+++" min="G" rating="F" />
                <EbayEek max="A+++" min="G" rating="G" />
            </div>
        </>
    ))
    .add('Invalid Combinations', () => (
        <>
            <EbayEek max="B" min="G" rating="D" />
            <EbayEek max="A" min="G" rating="A+++" />
            <EbayEek max="A++" min="B" rating="A++" />
            <EbayEek max="A+" min="B" rating="A++" />
        </>
    ))

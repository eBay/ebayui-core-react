import React from 'react'
import { EbayEek, EbayEekProps } from '../index'
import { Meta, Story } from '@storybook/react'

const meta: Meta<typeof EbayEek> = {
    component: EbayEek,
    title: 'graphics & icons/ebay-eek'
}

export default meta

export const RegularA: Story<EbayEekProps> = () => (
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
)

export const A: Story<EbayEekProps> = () => (
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
)

A.story = {
    name: 'A++'
}

export const ValidA: Story<EbayEekProps> = () => (
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
)

ValidA.story = {
    name: 'Valid A+++'
}

export const InvalidCombinations: Story<EbayEekProps> = () => (
    <>
        <EbayEek max="B" min="G" rating="D" />
        <EbayEek max="A" min="G" rating="A+++" />
        <EbayEek max="A++" min="B" rating="A++" />
        <EbayEek max="A+" min="B" rating="A++" />
    </>
)

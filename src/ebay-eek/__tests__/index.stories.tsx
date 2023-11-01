import React from 'react'
import { EbayEek } from '../index'

export default {
    title: 'ebay-eek'
}

export const Standard = () => (
    <>
        <EbayEek max="A+++" min="E" rating="C" />
    </>
)

export const RegularA = () => (
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

export const A = () => (
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

export const ValidA = () => (
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

export const InvalidCombinations = () => (
    <>
        <EbayEek max="B" min="G" rating="D" />
        <EbayEek max="A" min="G" rating="A+++" />
        <EbayEek max="A++" min="B" rating="A++" />
        <EbayEek max="A+" min="B" rating="A++" />
    </>
)

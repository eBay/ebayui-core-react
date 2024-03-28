import React from 'react'
import { EbaySignal } from '../index'

export default {
    component: EbaySignal,
    title: 'graphics & icons/ebay-signal'
}

export const defaultCase = () => (
    <>
        <EbaySignal>Default</EbaySignal>
    </>
)

export const trustworthy = () => (
    <>
        <EbaySignal status="trustworthy">Trustworthy</EbaySignal>
    </>
)

export const recent = () => (
    <>
        <EbaySignal status="recent">Recent</EbaySignal>
    </>
)

export const timeSensitive = () => (
    <>
        <EbaySignal status="time-sensitive">Time-Sensitive</EbaySignal>
    </>
)

export const neutral = () => (
    <>
        <EbaySignal status="neutral">Neutral</EbaySignal>
    </>
)

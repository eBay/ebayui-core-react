import React from 'react'
import { storiesOf } from '@storybook/react'
import {
    EbaySectionTitle,
    EbaySectionTitleTitle as Title,
    EbaySectionTitleSubtitle as Subtitle,
    EbaySectionTitleInfo as Info,
    EbayInfotip,
    EbayInfotipContent,
    EbayInfotipHeading
} from '../../index'

storiesOf('ebay-section-title', module)
    .add('Size', () => (
        <>
            <EbaySectionTitle size="small">Small Section Title</EbaySectionTitle>
            <EbaySectionTitle>Default Section Title</EbaySectionTitle>
            <EbaySectionTitle size="large">Large Section Title</EbaySectionTitle>
            <EbaySectionTitle size="giant">Giant Section Title</EbaySectionTitle>
        </>
    ))
    .add('With Subtitle', () => (<>
        <EbaySectionTitle>
            <Title>Today’s Deals – All With Free Shipping</Title>
            <Subtitle>Plus, guaranteed best prices.</Subtitle>
        </EbaySectionTitle>
    </>))
    .add('With Title But W/O Subtitle', () => (<>
        <EbaySectionTitle>
            <Title>Missing subtitle shouldn't throw</Title>
        </EbaySectionTitle>
    </>))
    .add('With CTA', () => (
        <>
            <EbaySectionTitle href="https://www.ebay.com">
                <Title>Today’s Deals – All With Free Shipping</Title>
                <Subtitle>Plus, guaranteed best prices.</Subtitle>
            </EbaySectionTitle>

            <EbaySectionTitle href="https://www.ebay.com" ctaText="See All">
                <Title>Today’s Deals – All With Free Shipping</Title>
                <Subtitle>Plus, guaranteed best prices.</Subtitle>
            </EbaySectionTitle>
        </>
    ))
    .add('With Info', () => (<>
        <EbaySectionTitle>
            <Title>Today’s Deals – All With Free Shipping</Title>
            <Subtitle>Plus, guaranteed best prices.</Subtitle>
            <Info>
                <EbayInfotip
                    a11yCloseText="Dismiss infotip"
                    aria-label="Important information"
                    pointer="top-left"
                    icon="information"
                >
                    <EbayInfotipHeading>Important</EbayInfotipHeading>
                    <EbayInfotipContent><p>This is some important info</p></EbayInfotipContent>
                </EbayInfotip>
            </Info>
        </EbaySectionTitle>
    </>))
    // @todo: add overflow story as soon as EbayMenuButton is implemented

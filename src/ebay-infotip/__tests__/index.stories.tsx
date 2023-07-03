import React from 'react'
import { storiesOf } from '@storybook/react'
import {
    EbayInfotip,
    EbayInfotipContent,
    EbayInfotipHeading,
    EbayInfotipHost,
    PointerDirection
} from '../index'

const allPointers: PointerDirection[] = [
    `top`, `top-left`, `top-right`,
    `right`, `right-bottom`, `right-top`,
    `bottom`, `bottom-left`, `bottom-right`,
    `left`, `left-bottom`, `left-top`
]

storiesOf(`ebay-infotip`, module)
    .add(`Default`, () => (
        <div style={{ display: 'flex', margin: 200 }}>
            <EbayInfotip a11yCloseText="Close" aria-label="Infotip">
                <EbayInfotipHeading>Title</EbayInfotipHeading>
                <EbayInfotipContent>
                    <p>Content</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>
    ))
    .add(`Custom icon`, () => (
        <div style={{ width: '100%', margin: 200 }}>
            <EbayInfotip icon="settings" aria-label="Infotip" a11yCloseText="Close">
                <EbayInfotipContent>
                    <EbayInfotipHeading>Title</EbayInfotipHeading>
                    <p>Content</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>
    ))
    .add(`Disabled`, () => (
        <div style={{ display: 'flex', margin: 200 }}>
            <EbayInfotip disabled a11yCloseText="Close" aria-label="Infotip">
                <EbayInfotipHeading>Title</EbayInfotipHeading>
                <EbayInfotipContent>
                    <p>Content</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>
    ))
    .add(`In paragraph`, () => (
        <div style={{ width: '100%', margin: 100 }}>
            <em>
                NOTE: No block elements can be nested in p elements, like div, h1-6, or other p elements.
                Any content with that will break
            </em>
            <p>
                Some paragraph content {' '}
                <EbayInfotip a11yCloseText="Dismiss infotip" aria-label="Important information">
                    <EbayInfotipHeading>Important</EbayInfotipHeading>
                    <EbayInfotipContent>
                        <span>This is some important info</span>
                    </EbayInfotipContent>
                </EbayInfotip>{' '}
                More paragraph content
            </p>
        </div>
    ))
    .add(`Modal`, () => (
        <div style={{ width: '100%', margin: 100 }}>
            <EbayInfotip variant="modal" a11yCloseText="Close" aria-label="Infotip" modala11yMaximizeText='Maximize Text Label' modala11yMinimizeText='Minimize Text Label'>
                <EbayInfotipHeading>Title</EbayInfotipHeading>
                <EbayInfotipContent>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>
    ))
    .add(`Pointer direction`, () => (
        <div style={{ width: '100%', marginLeft: 300 }}>
            {allPointers.map((pointerType, index) => (
                <div
                    key={index}
                    style={{ margin: '100px 0' }}>
                    {pointerType} {' '}
                    <EbayInfotip pointer={pointerType} a11yCloseText="Close" aria-label="Infotip">
                        <EbayInfotipHeading>Title</EbayInfotipHeading>
                        <EbayInfotipContent>
                            <p>Use Access Key &apos;S&apos; to display settings.</p>
                        </EbayInfotipContent>
                    </EbayInfotip>
                </div>
            ))}
        </div>
    ))
    .add(`Pointer with custom location`, () => (
        <div style={{ width: '100%', margin: 200 }}>
            <EbayInfotip pointer="top-left" overlayStyle={{ top: 40, left: -16 }} a11yCloseText="Close" aria-label="Infotip">
                <EbayInfotipHeading>Title</EbayInfotipHeading>
                <EbayInfotipContent>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>
    ))
    .add(`Text instead of icon`, () => (
        <div style={{ width: '100%', margin: 200 }}>
            <EbayInfotip pointer="top-left" a11yCloseText="Close">
                <EbayInfotipHost>
                    Click for infotip
                </EbayInfotipHost>
                <EbayInfotipHeading>Title</EbayInfotipHeading>
                <EbayInfotipContent>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>
    ))
    .add(`Custom button content (With render prop)`, () => (
        <div style={{ width: '100%', margin: 200 }}>
            <EbayInfotip pointer="top-left" a11yCloseText="Close" aria-label="Wrong aria-label, should be overwritten">
                <EbayInfotipHost aria-label="Click to open infotip" style={{ height: 'auto', width: 'auto' }}>
                    {({ icon }: any) => (
                        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                            {icon}
                            <span style={{ marginLeft: 5 }}>Click me</span>
                        </span>
                    )}
                </EbayInfotipHost>
                <EbayInfotipContent>
                    <EbayInfotipHeading>Title</EbayInfotipHeading>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>
    ))
    .add(`Expanded by default`, () => (
        <div style={{ width: '100%', margin: 200 }}>
            <EbayInfotip pointer="top-left" initialExpanded a11yCloseText="Close" aria-label="Infotip">
                <EbayInfotipHeading>Title</EbayInfotipHeading>
                <EbayInfotipContent>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayInfotipContent>
            </EbayInfotip>
        </div>
    ))

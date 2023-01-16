import React from 'react'
import { storiesOf } from '@storybook/react'
import { EbayTourtip, EbayTourtipHeading , EbayTourtipContent, EbayTourtipHost, EbayButton, PointerDirection, EbayTourtipFooter } from '../../index'

const allPointers: PointerDirection[] = [
    `top`, `top-left`, `top-right`,
    `right`, `right-bottom`, `right-top`,
    `bottom`, `bottom-left`, `bottom-right`,
    `left`, `left-bottom`, `left-top`
]

storiesOf(`ebay-tourtip`, module)
    .add(`Default tourtip`, () => (
        <div style={{ width: '100%', margin:300 }}>
            <EbayTourtip a11yCloseText='close'>
                <EbayTourtipContent>
                    <p>Content</p>
                </EbayTourtipContent>

                <EbayTourtipHost>
                    <EbayButton>Info</EbayButton>
                </EbayTourtipHost>
            </EbayTourtip>
        </div>
    )).add(`Pointer direction`, () => (
        <div>
            {allPointers.map((pointerType, index) => (
                <div
                    key={index}
                    style={{
                        width: '100%',
                        margin: 300
                    }}>
                    <EbayTourtip pointer={pointerType} a11yCloseText='close'>
                        <EbayTourtipHost>
                            <a href="https://www.ebay.com">{pointerType}</a>
                        </EbayTourtipHost>

                        <EbayTourtipContent>
                            <p>Use Access Key &apos;S&apos; to display settings.</p>
                        </EbayTourtipContent>
                    </EbayTourtip>
                </div>
            ))}
        </div>
    )) .add(`Pointer with custom location`, () => (
        <div style={{ width: '100%', margin: 300 }}>
            <EbayTourtip a11yCloseText='close' pointer="top-left" overlayStyle={{ top: 40, left: -16 }}>
                <EbayTourtipHost>
                    <a href="https://www.ebay.com">View options</a>
                </EbayTourtipHost>

                <EbayTourtipContent>
                    <p>Use Access Key &apos;S&apos; to display settings.</p>
                </EbayTourtipContent>
            </EbayTourtip>
        </div>
    )).add(`Footer tourtip`, () => (
        <div style={{ width: '100%', margin: 300 }}>
            <EbayTourtip a11yCloseText='close' pointer='bottom'>
                <EbayTourtipHost>
                    <EbayButton>Info</EbayButton>
                </EbayTourtipHost>
                <EbayTourtipContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </EbayTourtipContent>
                <EbayTourtipFooter index='1 / 3'>
                    <button className="fake-link">Back</button>
                    <button className="btn btn--primary">Next</button>
                </EbayTourtipFooter>
            </EbayTourtip>
        </div>
    )).add(`Footer and heading tourtip`, () => (
        <div style={{ width: '100%', margin: 300 }}>
            <EbayTourtip a11yCloseText='close' pointer='bottom'>
                <EbayTourtipHost>
                    <EbayButton>Info</EbayButton>
                </EbayTourtipHost>
                <EbayTourtipHeading type='tourtip'>Title</EbayTourtipHeading>
                <EbayTourtipContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </EbayTourtipContent>
                <EbayTourtipFooter index='1 / 3'>
                    <button className="fake-link">Back</button>
                    <button className="btn btn--primary">Next</button>
                </EbayTourtipFooter>
            </EbayTourtip>
        </div>
    ))
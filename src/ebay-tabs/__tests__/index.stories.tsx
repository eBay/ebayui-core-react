import React, { useState } from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'

import { EbayTabs, EbayTab as Tab, EbayTabPanel as Panel } from '../index'

const disableInfo = {
    info: {
        disable: true // disable info addon cause it throws an error
    }
}

storiesOf('ebay-tab', module)
    .add('Default Tabs', () => (<>
        <EbayTabs onTabSelect={action('tab selected')}>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
            <Panel>
                <h3>Panel 1</h3>
                <p>Focus should go to <a href="#">this link</a> using `tab`-key immediately after the `Tab 1`
                    (skipping `Tab 2` and `Tab 3`)
                </p>
            </Panel>
            <Panel>
                <h3>Panel 2</h3>
                <p>Focus should go to <a href="#">this link</a> using `tab`-key immediately after the `Tab 2`
                    (skipping `Tab 3` and `Tab 1`)
                </p>
            </Panel>
            <Panel>
                <h3>Panel 3</h3>
                <p>Focus should go to <a href="#">this link</a> using `tab`-key immediately after the `Tab 3`
                    (skipping `Tab 1` and `Tab 2`)
                </p>
            </Panel>
        </EbayTabs>
    </>), disableInfo)
    .add('Pre-selected Tab', () => (<>
        <EbayTabs index={2}>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
            <Panel>
                <h3>Panel 1</h3>
                <p>Focus should go to <a href="#">this link</a> using `tab`-key immediately after the `Tab 1`
                    (skipping `Tab 2` and `Tab 3`)
                </p>
            </Panel>
            <Panel>
                <h3>Panel 2</h3>
                <p>Focus should go to <a href="#">this link</a> using `tab`-key immediately after the `Tab 2`
                    (skipping `Tab 3` and `Tab 1`)
                </p>
            </Panel>
            <Panel>
                <h3>Panel 3</h3>
                <p>Focus should go to <a href="#">this link</a> using `tab`-key immediately after the `Tab 3`
                    (skipping `Tab 1` and `Tab 2`)
                </p>
            </Panel>
        </EbayTabs>
    </>), disableInfo )
    .add('Programmatically selected Tabs', () => {
        const Component = () => {
            const [selectedTab, selectTab] = useState(0)

            return (<>
                {[0, 1, 2].map(i => (<button key={i} onClick={() => selectTab(i)}>Select Tab {i+1}</button>))}
                <EbayTabs index={selectedTab}>
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                    <Panel><h3>Panel 1</h3></Panel>
                    <Panel><h3>Panel 2</h3></Panel>
                    <Panel><h3>Panel 3</h3></Panel>
                </EbayTabs>
            </>)
        }

        return <><Component /></>
    }, disableInfo )
    .add('Fake Tabs (links)', () => (<>
        <EbayTabs>
            <Tab href="https://www.ebay.com/1">Tab 1</Tab>
            <Tab href="https://www.ebay.com/2">Tab 2</Tab>
            <Tab href="https://www.ebay.com/3">Tab 3</Tab>
            <Panel>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare, quam at lacinia pretium, lacus
                    urna luctus nisi, eget molestie massa tortor id lacus. Aenean ac fringilla lacus. Fusce vel dui ex.
                    Vivamus luctus egestas nulla, non hendrerit purus luctus at. Maecenas vel diam enim. Pellentesque
                    quam neque, porttitor tincidunt vestibulum at, dapibus sit amet tortor.
                </p>
            </Panel>
        </EbayTabs>
    </>), disableInfo)
    .add('Manually activated Tabs', () => (<>
        <EbayTabs activation="manual">
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
            <Panel>
                <h3>Panel 1</h3>
                <p>These tabs are activated manually on Space/Enter key press</p>
                <p>Focus should go to <a href="#">this link</a> using `tab`-key immediately after the `Tab 1`
                    (skipping `Tab 2` and `Tab 3`)
                </p>
            </Panel>
            <Panel>
                <h3>Panel 2</h3>
                <p>These tabs are activated manually on Space/Enter key press</p>
                <p>Focus should go to <a href="#">this link</a> using `tab`-key immediately after the `Tab 2`
                    (skipping `Tab 3` and `Tab 1`)
                </p>
            </Panel>
            <Panel>
                <p>These tabs are activated manually on Space/Enter key press</p>
                <h3>Panel 3</h3>
                <p>Focus should go to <a href="#">this link</a> using `tab`-key immediately after the `Tab 3`
                    (skipping `Tab 1` and `Tab 2`)
                </p>
            </Panel>
        </EbayTabs>
    </>), disableInfo)
    .add('Large Tabs', () => (<>
        <EbayTabs size="large">
            <Tab>Large Tab 1</Tab>
            <Tab>Large Tab 2</Tab>
            <Tab>Large Tab 3</Tab>
            <Panel>
                <h3>Panel 1</h3>
                <p>Focus should go to <a href="#">this link</a> using `tab`-key immediately after the `Tab 1`
                    (skipping `Tab 2` and `Tab 3`)
                </p>
            </Panel>
            <Panel>
                <h3>Panel 2</h3>
                <p>Focus should go to <a href="#">this link</a> using `tab`-key immediately after the `Tab 2`
                    (skipping `Tab 3` and `Tab 1`)
                </p>
            </Panel>
            <Panel>
                <h3>Panel 3</h3>
                <p>Focus should go to <a href="#">this link</a> using `tab`-key immediately after the `Tab 3`
                    (skipping `Tab 1` and `Tab 2`)
                </p>
            </Panel>
        </EbayTabs>
    </>), disableInfo)

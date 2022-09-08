import React, { useState } from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'

import { EbayTabs, EbayTab as Tab, EbayTabPanel as Panel } from '../index'

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
    </>))
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
    </>) )
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
    } )
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
    </>))
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
    </>))
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
    </>))
    .add('Multiple Tabs', () => (<>
        <div>
            <EbayTabs id="tab-upper">
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Panel>
                    <h3>Panel 1</h3>
                    <p>Panel 1 content. Here is a <a href="#">link</a>.</p>
                </Panel>
                <Panel>
                    <h3>Panel 2</h3>
                    <p>Panel 2 content. Here is a <a href="#">link</a>.</p>
                </Panel>
            </EbayTabs>
        </div>
        <div style={{marginTop: '64px'}}>
            <EbayTabs id="tab-lower">
                <Tab>Tab A</Tab>
                <Tab>Tab B</Tab>
                <Tab>Tab C</Tab>
                <Panel>
                    <h3>Panel A</h3>
                    <p>Panel A content. Here is a <a href="#">link</a>.</p>
                </Panel>
                <Panel>
                    <h3>Panel B</h3>
                    <p>Panel B content. Here is a <a href="#">link</a>.</p>
                </Panel>
                <Panel>
                    <h3>Panel C</h3>
                    <p>Panel C content. Here is a <a href="#">link</a>.</p>
                </Panel>
            </EbayTabs>
        </div>
    </>))
    .add('Tabs with inputs', () => {
        const Component = () => {
            const [name, setName] = useState('John Doe')

            return (
                <EbayTabs>
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                    <Panel>
                        <label htmlFor='name'>Name </label>
                        <input id='name' onChange={(e) => setName(e.target.value)} type='text' placeholder='john doe' value={name} />
                        <p>My name is {name}</p>
                    </Panel>
                    <Panel><h3>Panel 2</h3></Panel>
                    <Panel><h3>Panel 3</h3></Panel>
                </EbayTabs>
            )
        }

        return <><Component /></>
    })

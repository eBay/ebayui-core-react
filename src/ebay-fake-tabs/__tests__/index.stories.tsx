import React from 'react';
import { storiesOf } from '@storybook/react'

import { EbayFakeTabs, EbayFakeTab as Tab } from '../index'

storiesOf('ebay-fake-tabs', module)
    .add('Default Tabs', () => (<>
        <EbayFakeTabs>
            <Tab href="http://ebay.com">eBay.com</Tab>
            <Tab href="http://ebay.de">eBay.de</Tab>
            <Tab href="http://ebay.co.uk">eBay.co.uk</Tab>
            <h3>eBay.com Content</h3>
            <p>Some US content...</p>
        </EbayFakeTabs>
    </>))
    .add('Pre-selected Tab', () => (<>
        <EbayFakeTabs selectedIndex={1}>
            <Tab href="http://ebay.com">eBay.com</Tab>
            <Tab href="http://ebay.de">eBay.de</Tab>
            <Tab href="http://ebay.co.uk">eBay.co.uk</Tab>
            <h3>eBay.de Content</h3>
            <p>Some German content...</p>
        </EbayFakeTabs>
    </>))
    .add('tabMatchesCurrentUrl: false', () => (<>
        <EbayFakeTabs tabMatchesCurrentUrl={false} selectedIndex={2}>
            <Tab href="http://ebay.com">eBay.com</Tab>
            <Tab href="http://ebay.de">eBay.de</Tab>
            <Tab href="http://ebay.co.uk">eBay.co.uk</Tab>
            <h3>eBay.co.uk Content</h3>
            <p>Some British content...</p>
        </EbayFakeTabs>
    </>))

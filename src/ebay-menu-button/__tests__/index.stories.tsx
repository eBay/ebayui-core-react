import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import {
    EbayMenuButton,
    EbayMenuButtonItem as Item,
    EbayMenuButtonIcon,
    EbayMenuButtonSeparator as Separator,
    EbayMenuButtonLabel,
} from '..'

storiesOf('ebay-menu-button', module)
    .add('Default', () => (<>
        <EbayMenuButton text="eBay Menu">
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>))
    .add('Expanded', () => (<>
        <EbayMenuButton expanded text="eBay Menu">
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>))
    .add('Disabled', () => (<>
        <EbayMenuButton text="eBay Menu" disabled>
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>))
    //
    // Custom button stories
    //
    .add('With icon', () => (<>
        <EbayMenuButton text="Settings">
            <EbayMenuButtonIcon name="settings" />
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>))
    .add('Without toggle icon', () => (<>
        <EbayMenuButton noToggleIcon text="Menu">
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>))
    .add('Variant: Overflow', () => (<>
        <EbayMenuButton variant="overflow" a11y-text="Menu">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>))
    .add('Priority', () => (<>
        <p>
            <EbayMenuButton priority="primary" text="Primary" a11y-text="Menu">
                <Item>item 1</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
            </EbayMenuButton>
        </p>
        <p>
            <EbayMenuButton priority="tertiary" text="Tertiary" a11y-text="Menu">
                <Item>item 1</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
            </EbayMenuButton>
        </p>
    </>))
    .add('Split', () => (<>
        <p>
            <EbayMenuButton priority="primary" split="start" text="Left" a11y-text="Menu">
                <Item>item 1</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
            </EbayMenuButton>
            <EbayMenuButton priority="primary" split="end" a11y-text="Menu">
                <Item>item 1</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
            </EbayMenuButton>
        </p>
        <p>
            <EbayMenuButton split="start" text="Left" a11y-text="Menu">
                <Item>item 1</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
            </EbayMenuButton>
            <EbayMenuButton split="end" text="Right" a11y-text="Menu">
                <Item>item 1</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
            </EbayMenuButton>
        </p>
        <p>
            <EbayMenuButton priority="tertiary" split="start" text="Left" a11y-text="Menu">
                <Item>item 1</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
            </EbayMenuButton>
            <EbayMenuButton priority="tertiary" split="end" text="Right" a11y-text="Menu">
                <Item>item 1</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
            </EbayMenuButton>
        </p>
    </>))
    .add('Borderless', () => (<>
        <EbayMenuButton text="eBay Menu without borders!" borderless>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>))
    .add('With Custom Label', () => (<>
        <EbayMenuButton>
            <EbayMenuButtonLabel>
                <span style={{
                    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='15' viewBox='0 0 5 3'%3E%3Cpath d='M0 0h5v3H0z'/%3E%3Cpath fill='%23D00' d='M0 1h5v2H0z'/%3E%3Cpath fill='%23FFCE00' d='M0 2h5v1H0z'/%3E%3C/svg%3E") no-repeat 50% 50%`,
                    display: 'inline-block',
                    height: '20px',
                    marginRight: '8px',
                    verticalAlign: 'middle',
                    width: '26px'
                }} />Fun with flags!
            </EbayMenuButtonLabel>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>))
    //
    // Custom menu stories
    //
    .add('With Separator', () => (<>
        <EbayMenuButton
            text="Complex menu"
            onExpand={action('Menu expanded!')}
            onCollapse={action('Menu collapsed!')}
        >
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Separator/>
            <Item>item 3</Item>
            <Item>item 4</Item>
            <Item>item 5</Item>
            <Separator/>
            <Item onClick={action('Open login popup!')}>Log in</Item>
        </EbayMenuButton>
    </>))
    .add('Single-Select Menu Button (item.checked)', () => (<>
        <EbayMenuButton text="Sort order" type="radio">
            <Item>Date</Item>
            <Item checked>Price</Item>
            <Item>Relevance</Item>
        </EbayMenuButton>
    </>))
    .add('Single-Select Menu Button (collapse on click)', () => {
        const defaultSortIndex = 1
        const sortItems = ['Date', 'Price', 'Relevance']
        const [checkedSort, setCheckedSort] = useState(defaultSortIndex)

        return <EbayMenuButton
            text={`Sort order: ${sortItems[checkedSort]}`}
            type="radio"
            collapseOnSelect
            checked={defaultSortIndex}
            onChange={(i) => setCheckedSort(i)}
        >
            {sortItems.map((item, i) => <Item key={i}>{item}</Item>)}
        </EbayMenuButton>
    })
    .add('Single-Select Menu Button (menu.checked)', () => {
        const defaultSortIndex = 2
        const defaultTopicIndex = 1
        const sortItems = ['Date', 'Price', 'Relevance']
        const topicItems = ['Cars', 'Phones', 'Computers']
        const [checkedSort, setCheckedSort] = useState(defaultSortIndex)
        const [checkedTopic, setCheckedTopic] = useState(defaultTopicIndex)

        return (<>
            <EbayMenuButton
                text={`Topic: ${topicItems[checkedTopic]}`}
                type="radio"
                checked={defaultTopicIndex}
                onChange={(i) => setCheckedTopic(i)}
            >
                {topicItems.map((item, i) => <Item key={i}>{item}</Item>)}
            </EbayMenuButton>
            &nbsp;
            <EbayMenuButton
                text={`Sort order: ${sortItems[checkedSort]}`}
                type="radio"
                checked={defaultSortIndex}
                onChange={(i) => setCheckedSort(i)}
            >
                {sortItems.map((item, i) => <Item key={i}>{item}</Item>)}
            </EbayMenuButton>
        </>)
    })
    .add('Multi-Select Menu Button', () => (<>
        <EbayMenuButton text="Filter" type="checkbox">
            <Item checked>Snickers</Item>
            <Item>T-Shirts</Item>
            <Item checked>Pants</Item>
        </EbayMenuButton>
    </>))
    .add('Fixed Width', () => (<>
        <EbayMenuButton text="Menu has a button width" fixWidth>
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>))
    .add('Reverse (Menu grows to the left)', () => (<div style={{ marginLeft: '100px' }}>
        <EbayMenuButton text="Menu grows to the left" reverse>
            <Item>item 1 that has very very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </div>))


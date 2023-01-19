import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import { EbayIcon } from '../../ebay-icon'
import { EbayMenuButtonItem as Item, EbayMenuButtonSeparator as Separator } from '../../ebay-menu-button'
import { EbaySplitButton } from '../index'

storiesOf(`ebay-split-button`, module)
    .add(`Default`, () => (<>
        <p>
            <EbaySplitButton priority="primary" a11yMenuText="Show save options" onClick={action(`Saved`)}>
                Save document
                <Item>Save as...</Item>
                <Item>Export</Item>
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton a11yMenuText="Menu" onClick={action(`clicked`)}>
                Split Button Menu with Separator
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Separator />
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton priority="tertiary" a11yMenuText="Expand" onClick={action(`clicked`)}>
                Tertiary button menu with icons
                <Item>
                    <EbayIcon name="confirmation" style={{ marginRight: '8px' }} /> Confirmed
                </Item>
                <Item>
                    <EbayIcon name="attention" style={{ marginRight: '8px' }} /> Not yet confirmed
                </Item>
                <Item>
                    <EbayIcon name="attention" style={{ marginRight: '8px' }} /> Not yet confirmed
                </Item>
            </EbaySplitButton>
        </p>
    </>))
    .add(`Size`, () => (<>
        <p>
            <EbaySplitButton
                priority="primary"
                size="large"
                type="checkbox"
                a11yMenuText="Show options"
                onClick={action(`clicked`)}
            >
                Primary split button menu with checkboxes
                <Item>Item 1</Item>
                <Item checked>Item 2</Item>
                <Item>Item 3</Item>
                <Item checked>Item 4</Item>
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton
                size="large"
                type="radio"
                a11yMenuText="Menu"
                onClick={action(`clicked`)}
            >
                Split button menu with radio
                <Item>Item 1</Item>
                <Item checked>Item 2</Item>
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton size="large" priority="tertiary" a11yMenuText="Expand" onClick={action(`clicked`)}>
                Tertiary
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
    </>))
    .add(`Truncated`, () => (<>
        <p>
            <EbaySplitButton priority="primary" style={{ maxWidth: '200px' }} truncate a11yMenuText="Show options" onClick={action(`clicked`)}>
                Primary Split Button with truncated text label
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton style={{ maxWidth: '200px' }} truncate a11yMenuText="Menu" onClick={action(`clicked`)}>
                Split Button with truncated text label
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
    </>))
    .add(`Loading`, () => {
        const [loading, setLoading] = useState(false)

        return (<>
            <p>
                <EbaySplitButton
                    bodyState={loading ? 'loading' : 'reset'}
                    a11yMenuText="Show options"
                    a11yButtonLoadingText="Stand by or stop loading by using menu"
                    onClick={() => setLoading(true)}
                >
                    Load
                    <Item disabled={loading} onClick={() => setLoading(true)}>Start loading</Item>
                    <Item disabled={!loading} onClick={() => setLoading(false)}>Stop loading</Item>
                </EbaySplitButton>
            </p>
        </>)
    })
    .add(`Transparent`, () => (<div style={{ background: 'lightcyan', padding: '1em' }}>
        <p>
            <EbaySplitButton transparent a11yMenuText="Show options" onClick={action(`clicked`)}>
                Transparent split button
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton priority="tertiary" transparent a11yMenuText="Show options" onClick={action(`clicked`)}>
                Transparent tertiary split button
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
    </div>))
    .add(`Disabled`, () => (<>
        <p>
            <EbaySplitButton disabled a11yMenuText="Show options" onClick={action(`clicked`)}>
                Disabled Split Button
            </EbaySplitButton>
        </p>
    </>))

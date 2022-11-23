import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import { EbaySplitButton } from '../index'

storiesOf(`ebay-split-button`, module)
    .add(`Default`, () => (<>
        <p>
            <EbaySplitButton priority="primary" a11yMenuText="Show options" onClick={action(`clicked`)}>
                Primary Split
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton a11yMenuText="Menu" onClick={action(`clicked`)}>
                Split Button
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton priority="tertiary" a11yMenuText="Expand" onClick={action(`clicked`)}>
                Tertiary
            </EbaySplitButton>
        </p>
    </>))
    .add(`Size`, () => (<>
        <p>
            <EbaySplitButton priority="primary" size="large" a11yMenuText="Show options" onClick={action(`clicked`)}>
                Primary Split
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton size="large" a11yMenuText="Menu" onClick={action(`clicked`)}>
                Split Button
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton size="large" priority="tertiary" a11yMenuText="Expand" onClick={action(`clicked`)}>
                Tertiary
            </EbaySplitButton>
        </p>
    </>))
    .add(`Truncated`, () => (<>
        <p>
            <EbaySplitButton priority="primary" style={{ maxWidth: '200px' }} truncate a11yMenuText="Show options" onClick={action(`clicked`)}>
                Primary Split Button with truncated text label
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton style={{ maxWidth: '200px' }} truncate a11yMenuText="Menu" onClick={action(`clicked`)}>
                Split Button with truncated text label
            </EbaySplitButton>
        </p>
    </>))
    .add(`Transparent`, () => (<div style={{ background: 'lightcyan', padding: '1em' }}>
        <p>
            <EbaySplitButton transparent a11yMenuText="Show options" onClick={action(`clicked`)}>
                Transparent split button
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton priority="tertiary" transparent a11yMenuText="Show options" onClick={action(`clicked`)}>
                Transparent tertiary split button
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

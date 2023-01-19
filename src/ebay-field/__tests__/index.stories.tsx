import React from 'react'
import { storiesOf } from '@storybook/react'
import { EbayTextbox } from '../../ebay-textbox'
import { EbaySwitch } from '../../ebay-switch'
import { EbayCheckbox } from '../../ebay-checkbox'
import { EbayField, EbayLabel, EbayFieldDescription } from '../index'

storiesOf(`ebay-field`, module)

    .add(`Default - inline`, () => (
        <div>
            <EbayField>
                <EbayLabel>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label 1</EbayLabel>
                <EbaySwitch value="123" id="switch-1" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label 1</EbayLabel>
                <EbayCheckbox defaultChecked id="checkbox-2" />
            </EbayField>
        </div>
    ))
    .add(`Block`, () => (
        <div>
            <EbayField layout="block">
                <EbayLabel stacked>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField layout="block">
                <EbayLabel stacked>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField layout="block">
                <EbayLabel stacked>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
        </div>
    ))
    .add(`Block and inline combination`, () => (
        <div>
            <EbayField>
                <EbayLabel>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label 2</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField layout="block">
                <EbayLabel>Label 3</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label 4</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label 5</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
        </div>
    ))
    .add(`required`, () => (
        <div>
            <EbayField>
                <EbayLabel required>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
            <EbayField>
                <EbayLabel>Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
            </EbayField>
        </div>
    ))
    .add(`with description`, () => (
        <div>
            <EbayField layout="block">
                <EbayLabel stacked htmlFor="field1">Label 1</EbayLabel>
                <EbayTextbox placeholder="placeholder text" id="field1" />
                <EbayFieldDescription>Some description Text</EbayFieldDescription>
            </EbayField>
            <EbayField layout="block">
                <EbayLabel stacked>Label 2</EbayLabel>
                <EbayTextbox placeholder="placeholder text" />
                <EbayFieldDescription type="confirmation">
                    Some description Text
                </EbayFieldDescription>
            </EbayField>
            <EbayField layout="block">
                <EbayLabel stacked>Label 3</EbayLabel>
                <EbayTextbox placeholder="placeholder text" invalid />
                <EbayFieldDescription type="attention">
                    Some description Text
                </EbayFieldDescription>
            </EbayField>
            <EbayField layout="block">
                <EbayLabel stacked htmlFor="field4">Label 4</EbayLabel>
                <EbayTextbox placeholder="placeholder text" id="field4" />
                <EbayFieldDescription type="confirmation" position="below">
                    Some description Text
                </EbayFieldDescription>
            </EbayField>
        </div>
    ))
    .add(`Labels on the right`, () => (
        <>
            <p>
                <EbayField>
                    <EbayTextbox placeholder="placeholder text" />
                    <EbayLabel position="end">Label 1</EbayLabel>
                </EbayField>
            </p><p>
                <EbayField>
                    <EbaySwitch value="123" id="switch-1" />
                    <EbayLabel position="end">Label 1</EbayLabel>
                </EbayField>
            </p><p>
                <EbayField>
                    <EbayCheckbox defaultChecked id="checkbox-2" />
                    <EbayLabel position="end">Label 1</EbayLabel>
                </EbayField>
            </p>
        </>
    ))


import React, { useState, useRef, ChangeEvent } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { EbayLabel } from '../../ebay-field'
import { EbayTriStateCheckbox } from '../index'

const meta: Meta<typeof EbayTriStateCheckbox> = {
    component: EbayTriStateCheckbox,
    title: 'form input/ebay-tristate-checkbox',
    argTypes: {
        checked: {
            options: ["false", "mixed", "true"],
            type: { category: "Options" },
            description:
                'Either "true", "false" or "mixed". Defaults to "false". Changes the checkbox state to the given one depdending on the checked state.',
            table: {
                defaultValue: {
                    summary: "false",
                },
            },
        },
        skipMixed: {
            type: "boolean",
            control: { type: "boolean" },
            description:
                "If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none.",
        },
        size: {
            options: ["default", "large"],
            type: { category: "Options" },
            description:
                'Either "large" or "default". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)',
            table: {
                defaultValue: {
                    summary: "default",
                },
            },
        },
        onChange: {
            action: "on-change",
            description: "Triggered on change",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value, checked }",
                },
            },
        },
        onFocus: {
            action: "on-focus",
            description: "Triggered on focus",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value }",
                },
            },
        },
    },
}

export default meta

export const Default: StoryFn<typeof EbayTriStateCheckbox> = (args) => (
    <>
        <p style={{ alignItems : "center" }}>
            <EbayTriStateCheckbox
                {...args}
                value="123"
                checked="mixed"
                id="checkbox-11"
                onChange={(e, props) => action('onChange')(e, props)}
                onFocus={(e, props) => action('onFocus')(e, props)}
                onKeyDown={(e, props) => action('onKeyDown')(e, props)}
            />
        </p>
        <p style={{ alignItems : "center" }}>
            <EbayTriStateCheckbox {...args} value="123" id="checkbox-12" size="large" />
        </p>
    </>
)

export const WithLabel: StoryFn<typeof EbayTriStateCheckbox> = (args) => (
    <>
    <p style={{ alignItems : "center" }}>
        <EbayTriStateCheckbox
            {...args}
            value="123"
            checked="mixed"
            id="checkbox-11"
            onChange={(e, props) => action('onChange')(e, props)}
            onFocus={(e, props) => action('onFocus')(e, props)}
            onKeyDown={(e, props) => action('onKeyDown')(e, props)}
        />
        <EbayLabel className="field__label field__label--end" htmlFor="checkbox-11">Default</EbayLabel>
    </p>
    <p style={{ alignItems : "center" }}>
        <EbayTriStateCheckbox {...args} value="123" id="checkbox-12" size="large" />
        <EbayLabel className="field__label field__label--end" htmlFor="checkbox-12">Large</EbayLabel>
    </p>
</>
)

export const Disabled: StoryFn<typeof EbayTriStateCheckbox> = (args) => (
    <p style={{ alignItems : "center" }}>
        <EbayTriStateCheckbox
            {...args}
            value="123"
            disabled
            id="checkbox-11"
            onChange={(e, props) => action('onChange')(e, props)}
            onFocus={(e, props) => action('onFocus')(e, props)}
            onKeyDown={(e, props) => action('onKeyDown')(e, props)}
        />
        <EbayLabel className="field__label--disabled" style={{ marginLeft: "8px" }} htmlFor="checkbox-11">Default</EbayLabel>
    </p>
)


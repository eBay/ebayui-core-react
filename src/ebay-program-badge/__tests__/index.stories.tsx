import React from 'react'
import { Meta } from '@storybook/react'
import { icons } from './constants'
import { EbayProgramBadge } from '../index'

export default {
    component: EbayProgramBadge,
    title: 'ebay-program-badge'
} as Meta;

export const all = () => (
    <table>
        {icons.map((program, i) =>
            <tr key={i}>
                <td>{program}</td>
                <td key={program}>
                    <EbayProgramBadge name={program} />
                </td>
            </tr>
        )}
    </table>
)

all.storyName = 'All program-badge Icons'

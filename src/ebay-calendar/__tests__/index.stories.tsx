import React from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import { EbayCalendar } from '../index'

const story: ComponentMeta<typeof EbayCalendar> = {
  component: EbayCalendar,
  title:'ebay-calendar',
}

export const Default = () => {
    return (
        <EbayCalendar selected="2024-01-03" />
    )
}

export const Interactive = () => {
    return (
        <EbayCalendar interactive selected="2024-01-03" />
    )
}

export const MultipleMonths = () => {
    return (
        <EbayCalendar interactive numMonths={2} selected="2024-01-03" />
    )
}

export const Navigable = () => {
    return (
        <EbayCalendar interactive navigable numMonths={2} selected="2024-01-03" />
    )
}

export const RangeSelected = () => {
    return (
        <EbayCalendar
            interactive
            range
            numMonths={2}
            selected={[
                '2024-01-03',
                '2024-02-01',
            ]}
        />
    )
}

export const DisableBeforeAndAfter = () => {
    return (
        <EbayCalendar
            interactive
            range
            numMonths={2}
            disableBefore="2024-01-03"
            disableAfter="2024-02-03"
            selected={[
                '2024-01-05',
                '2024-02-01',
            ]}
        />
    )
}

export const DisableWeekdays = () => {
    return (
        <EbayCalendar
            interactive
            numMonths={2}
            disableWeekdays={[0, 6]}
            selected="2024-01-03"
        />
    )
}

export default story;

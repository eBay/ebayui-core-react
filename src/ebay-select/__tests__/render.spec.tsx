import React from 'react'
import { render } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Basic, InvalidSelect, BorderlessSelect, DisabledSelect, LargeSelect, FloatingLabel, InvalidFloatingLabelSelect, GroupedOptions } from './index.stories'

const BasicStory = composeStory(Basic, Meta)
const InvalidSelectStory = composeStory(InvalidSelect, Meta)
const BorderlessSelectStory = composeStory(BorderlessSelect, Meta)
const DisabledSelectStory = composeStory(DisabledSelect, Meta)
const LargeSelectStory = composeStory(LargeSelect, Meta)
const FloatingLabelStory = composeStory(FloatingLabel, Meta)
const InvalidFloatingLabelSelectStory = composeStory(InvalidFloatingLabelSelect, Meta)
const GroupedOptionsStory = composeStory(GroupedOptions, Meta)

describe('ebay-select rendering', () => {
    it('renders basic story correctly', () => {
        const { container } = render(<BasicStory />)
        const selectContainer = container.querySelector('.select')
        const select = selectContainer.querySelector('select')
        expect(select).toHaveAttribute('name', 'formSelect')
        const [option1, option2, option3] = select.querySelectorAll('option')
        expect(option1).toHaveAttribute('value', '1')
        expect(option1).toHaveTextContent('Option 1')
        expect(option2).toHaveAttribute('value', '2')
        expect(option2).toHaveTextContent('Option 2')
        expect(option3).toHaveAttribute('value', '3')
        expect(option3).toHaveTextContent('Option 3')
        const svg = selectContainer.querySelector('svg')
        expect(svg).toHaveClass('icon icon--chevron-down-12')
    })

    it('renders invalid select story correctly', () => {
        const { container } = render(<InvalidSelectStory />)
        const select = container.querySelector('select')
        expect(select).toHaveAttribute('aria-invalid', 'true')
        expect(select).toHaveAttribute('aria-label', 'Please select a option')
    })

    it('renders borderless select story correctly', () => {
        const { container } = render(<BorderlessSelectStory />)
        const selectContainer = container.querySelector('.select')
        expect(selectContainer).toHaveClass('select--borderless')
        const select = selectContainer.querySelector('select')
        const options = select.querySelectorAll('option')
        expect(options.length).toBe(3)
    })

    it('renders disabled select story correctly', () => {
        const { container } = render(<DisabledSelectStory />)
        const select = container.querySelector('select')
        expect(select).toHaveAttribute('disabled', '')
        const options = select.querySelectorAll('option')
        expect(options.length).toBe(2)
    })

    it('renders large select story correctly', () => {
        const { container } = render(<LargeSelectStory />)
        const selectContainer = container.querySelector('.select')
        expect(selectContainer).toHaveClass('select--large')
        const select = selectContainer.querySelector('select')
        const options = select.querySelectorAll('option')
        expect(options.length).toBe(4)
    })

    it('renders floating label story correctly', () => {
        const { container } = render(<FloatingLabelStory />)
        const floatingLabelContainer = container.querySelector('.floating-label')
        const label = floatingLabelContainer.querySelector('.floating-label__label')
        expect(label).toHaveTextContent('Label')
        const selectContainer = floatingLabelContainer.querySelector('.select')
        const select = selectContainer.querySelector('select')
        const options = select.querySelectorAll('option')
        expect(options.length).toBe(4)
    })

    it('renders invalid floating label select story correctly', () => {
        const { container } = render(<InvalidFloatingLabelSelectStory />)
        const floatingLabelContainer = container.querySelector('.floating-label')
        const label = floatingLabelContainer.querySelector('.floating-label__label')
        expect(label).toHaveClass('floating-label__label--invalid')
        expect(label).toHaveTextContent('Invalid label')
    })

    it('renders grouped options story correctly', () => {
        const { container } = render(<GroupedOptionsStory />)
        const select = container.querySelector('select')
        const options = select.querySelectorAll('option')
        expect(options.length).toBe(12)
        const optgroup = select.querySelectorAll('optgroup')
        expect(optgroup.length).toBe(3)
    })
})

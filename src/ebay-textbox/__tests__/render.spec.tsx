import React from 'react'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './index.stories'

const {
    DefaultTextbox,
    DisabledTextbox,
    FluidTextbox,
    InvalidTextbox,
    LargeTextbox,
    MultilineTextbox,
    PasswordTextbox,
    WithIcon,
    PlaceholderTextbox,
    FloatingLabel,
    FloatingLabelInvalid,
    FloatingLabelTypeDate
} = composeStories(stories)

describe('ebay-textbox rendering', () => {
    it('renders default story correctly', () => {
        render(<DefaultTextbox />)

        const textbox = screen.getByRole('textbox')
        expect(textbox).toHaveAttribute('type', 'text')
        expect(textbox).toHaveAttribute('value', 'EbayTextbox')
        expect(textbox).toHaveClass('textbox__control')
    })

    it('renders disabled story correctly', () => {
        render(<DisabledTextbox />)

        const textbox = screen.getByRole('textbox')
        expect(textbox).toHaveAttribute('disabled')
        expect(textbox).toHaveAttribute('value', '')
    })

    it('renders fluid story correctly', () => {
        render(<FluidTextbox />)

        const textbox = screen.getByRole('textbox')
        expect(textbox).toHaveAttribute('value', '')
        expect(textbox).toHaveClass('textbox__control textbox__control--fluid')
    })

    it('renders invalid story correctly', () => {
        render(<InvalidTextbox />)

        const textbox = screen.getByRole('textbox')
        expect(textbox).toHaveAttribute('value', '')
        expect(textbox).toHaveAttribute('aria-invalid', 'true')
    })

    it('renders large story correctly', () => {
        render(<LargeTextbox />)

        const textbox = screen.getByRole('textbox')
        expect(textbox).toHaveAttribute('value', '')
        expect(textbox).toHaveClass('textbox__control textbox__control--large')
    })

    it('renders multiline story correctly', () => {
        render(<MultilineTextbox />)

        const textbox = screen.getByRole('textbox')
        expect(textbox).toHaveTextContent('some default value next line')
        expect(textbox).toHaveClass('textbox__control')
    })

    it('renders password story correctly', () => {
        const { container } = render(<PasswordTextbox />)

        const textbox = container.querySelector('input[type="password"]')
        expect(textbox).toHaveAttribute('value', '')
        expect(textbox).toHaveClass('textbox__control')
    })

    it('renders with icon story correctly', () => {
        const { container } = render(<WithIcon />)

        const textbox = container.querySelector('input[type="text"]')
        expect(textbox).toHaveAttribute('value', '')
        expect(textbox).toHaveAttribute('placeholder', 'email')
        expect(textbox).toHaveClass('textbox__control')

        const icon = container.querySelector('svg')
        expect(icon).toMatchSnapshot()
    })

    it('renders placeholder story correctly', () => {
        render(<PlaceholderTextbox />)

        const textbox = screen.getByRole('textbox')
        expect(textbox).toHaveAttribute('value', '')
        expect(textbox).toHaveAttribute('placeholder', 'placeholder text')
        expect(textbox).toHaveClass('textbox__control')
    })

    it('renders floating label story correctly', () => {
        render(<FloatingLabel />)

        const textbox = screen.getByRole('textbox')
        expect(textbox).toHaveAttribute('value', '')
        expect(textbox).toHaveClass('textbox__control')

        const label = screen.getByText('Floating label')
        expect(label).toHaveClass('floating-label__label')
    })

    it('renders floating label invalid story correctly', () => {
        render(<FloatingLabelInvalid />)

        const textbox = screen.getByRole('textbox')
        expect(textbox).toHaveAttribute('value', '')
        expect(textbox).toHaveAttribute('aria-invalid', 'true')

        const label = screen.getByText('Invalid Floating label')
        expect(label).toHaveClass('floating-label__label floating-label__label--invalid')
    })

    it('renders floating label type date story correctly', () => {
        const { container } = render(<FloatingLabelTypeDate />)

        const textbox = container.querySelector('input[type="date"]')
        expect(textbox).toHaveAttribute('value', '')
        expect(textbox).toHaveClass('textbox__control')

        const label = screen.getByText('Floating label')
        expect(label).toHaveClass('floating-label__label')
    })
})

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { act } from '@testing-library/react-hooks/dom'
import EbayToggleButtonGroup from '../index'

import { composeStories } from '@storybook/react'
import * as stories from './index.stories'

const { Default } = composeStories(stories)

describe('<EbayToggleButtonGroup />', () => {
    it('should render component - <Default />', () => {
        const { asFragment } = render(<Default />)

        const snapshot = asFragment()
        expect(snapshot).toMatchSnapshot()
    })
    it('should fire onChange when clicking', async () => {
        const mockOnChange = jest.fn()

        const { getByRole } = render(<Default onChange={mockOnChange} />)

        const button = getByRole('button', { name: /Button3/i })
        await act(() => {
            fireEvent.click(button)
        })
        expect(mockOnChange).toHaveBeenCalledTimes(1)
    })
    it('should have clicked button on radio variant', async () => {
        const { getByRole, getAllByRole } = render(<Default  variant="radio" />)

        const button3 = getByRole('button', { name: /Button3/i })
        await act(() => {
            fireEvent.click(button3)
        })

        // Query all buttons
        const buttons = getAllByRole('button')

        // Filter buttons with aria-pressed="true"
        const pressedButtons = buttons.filter(
            (button) => button.getAttribute('aria-pressed') === 'true'
        )

        // Assert that only one button has aria-pressed="true"
        expect(pressedButtons).toHaveLength(1)
        expect(button3).toHaveAttribute('aria-pressed', 'true')
    })
    it('should toggle radio button on radio-toggle variant', async () => {
        const { getByRole, getAllByRole } = render(
            <Default variant="radio-toggle" />
        )

        const button3 = getByRole('button', { name: /Button3/i })
        await act(() => {
            fireEvent.click(button3)
        })

        // Query all buttons
        const buttons = getAllByRole('button')

        // Filter buttons with aria-pressed="true"
        const pressedButtons = buttons.filter(
            (button) => button.getAttribute('aria-pressed') === 'true'
        )

        // Assert that only one button has aria-pressed="true"
        expect(pressedButtons).toHaveLength(1)
        expect(button3).toHaveAttribute('aria-pressed', 'true')

        await act(() => {
            fireEvent.click(button3)
        })
        // Filter buttons with aria-pressed="true"
        const pressedButtonsAfterToggle = buttons.filter(
            (button) => button.getAttribute('aria-pressed') === 'true'
        )

        // Assert that only one button has aria-pressed="true"
        expect(pressedButtonsAfterToggle).toHaveLength(0)
    })
    it('should check multiple buttons on checkbox variant', async () => {
        const { getByRole, getAllByRole } = render(
            <Default variant="checkbox" />
        )

        const button1 = getByRole('button', { name: /Button1/i })
        const button2 = getByRole('button', { name: /Button2/i })
        const button3 = getByRole('button', { name: /Button3/i })
        await act(() => {
            fireEvent.click(button1)
            fireEvent.click(button2)
            fireEvent.click(button3)
        })

        // Query all buttons
        const buttons = getAllByRole('button')

        // Filter buttons with aria-pressed="true"
        const pressedButtons = buttons.filter(
            (button) => button.getAttribute('aria-pressed') === 'true'
        )

        // Assert that only one button has aria-pressed="true"
        expect(pressedButtons).toHaveLength(2)
        expect(button1).toHaveAttribute('aria-pressed', 'false')
        expect(button2).toHaveAttribute('aria-pressed', 'true')
        expect(button3).toHaveAttribute('aria-pressed', 'true')
    })
})

import React from 'react'
import { render } from '@testing-library/react'
import EbayToggleButton from '../index'
import { toggleButtonProp } from './fixtures'
import { composeStories } from '@storybook/react'
import * as stories from './index.stories'

const {
    Default,
    WithChildren,
    IconButton,
    ImageButton,
    ImageButtonWithPlacement
} = composeStories(stories)

describe('<EbayToggleButton />', () => {
    it('should render component - <Default />', () => {
        const { asFragment } = render(<Default />)

        const snapshot = asFragment()
        expect(snapshot).toMatchSnapshot()
    })
    it('should render component - <WithChildren />', () => {
        const { asFragment } = render(<WithChildren />)

        const snapshot = asFragment()
        expect(snapshot).toMatchSnapshot()
    })
    it('should render component - <IconButton />', () => {
        const { asFragment } = render(<IconButton />)

        const snapshot = asFragment()
        expect(snapshot).toMatchSnapshot()
    })
    it('should render component - <ImageButton />', () => {
        const { asFragment } = render(<ImageButton />)

        const snapshot = asFragment()
        expect(snapshot).toMatchSnapshot()
    })
    it('should render component - <ImageButtonWithPlacement />', () => {
        const { asFragment } = render(<ImageButtonWithPlacement />)

        const snapshot = asFragment()
        expect(snapshot).toMatchSnapshot()
    })
    it('should render component', async () => {
        const mockOnToggle = jest.fn()

        const { getByRole } = render(<Default onToggle={mockOnToggle} />)

        const button = getByRole('button', { name: /title/i })
        await button.click()
        expect(mockOnToggle).toHaveBeenCalledTimes(1)
    })
    it('should render component', async () => {
        const mockOnToggle = jest.fn()

        const { getByRole } = render(<Default disabled={true} />)

        const button = getByRole('button', { name: /title/i })
        expect(button).toBeDisabled()

        await button.click()

        // Assert that the onToggle callback was not called
        expect(mockOnToggle).not.toHaveBeenCalled()
    })
})

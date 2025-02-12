import React from 'react'
import { composeStories } from '@storybook/react'
import { render } from '@testing-library/react'

import * as stories from './index.stories'

const { Default, SignedOut, WithCustomBody, WithImage } = composeStories(stories)

describe('<EbayAvatar /> rendering', () => {
    it('renders default story correctly', () => {
        const { container } = render(<Default />)
        expect(container).toMatchSnapshot()
    })

    it('renders a different color for different users', () => {
        const { container } = render(<Default username="robert" />)
        expect(container).toMatchSnapshot()

        const { container: container2 } = render(<Default username="test" />)
        expect(container2).toMatchSnapshot()

        const { container: container3 } = render(<Default username="john" />)
        expect(container3).toMatchSnapshot()
    })

    it('renders signed out story correctly', () => {
        const { container } = render(<SignedOut />)
        expect(container).toMatchSnapshot()
    })

    it('renders with custom body story correctly', () => {
        const { container } = render(<WithCustomBody />)
        expect(container).toMatchSnapshot()
    })

    it('renders with image story correctly', () => {
        const { container } = render(<WithImage />)
        expect(container).toMatchSnapshot()
    })
})

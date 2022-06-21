import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayButton } from '../../index'

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
})

describe('<EbayButton>', () => {
    describe('on passing a ref', () => {
        it('should set the ref to button element', () => {
            const ref = React.createRef() as any
            render(<EbayButton ref={ref} />)

            expect(ref.current.tagName).toBe('BUTTON')
        })

        it('should set the ref to a element', () => {
            const ref = React.createRef() as any
            render(<EbayButton href="https://www.ebay.com" ref={ref} />)

            expect(ref.current.tagName).toBe('A')
        })
    })

    describe('should fire the corresponding callbacks', () => {
        it('on click', () => {
            const spy = jest.fn()
            const wrapper = render(<EbayButton onClick={spy} />)

            fireEvent.click(wrapper.getByRole('button'))

            expect(spy).toBeCalled()
        })
        it('on escape', () => {
            const spy = jest.fn()
            const wrapper = render(<EbayButton onEscape={spy} />)

            fireEvent.keyDown(wrapper.getByRole('button'), {key: 'Escape' })

            expect(spy).toBeCalled()
        })
    })
})

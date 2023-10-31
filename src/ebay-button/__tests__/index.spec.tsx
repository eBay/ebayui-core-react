import React from 'react'
import requireContext from 'node-require-context'

import { fireEvent, render } from '@testing-library/react'
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayButton } from '../index'

const anySyntheticEvent = expect.objectContaining( { target: null })

initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }

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

            expect(spy).toBeCalledWith(anySyntheticEvent)
        })
        it('on escape', () => {
            const spy = jest.fn()
            const wrapper = render(<EbayButton onEscape={spy} />)

            fireEvent.keyDown(wrapper.getByRole('button'), { key: 'Escape' })

            expect(spy).toBeCalledWith(anySyntheticEvent)
        })
        it('on focus', () => {
            const spy = jest.fn()
            const wrapper = render(<EbayButton onFocus={spy} />)

            fireEvent.focus(wrapper.getByRole('button'))

            expect(spy).toBeCalledWith(anySyntheticEvent)
        })
        it('on blur', () => {
            const spy = jest.fn()
            const wrapper = render(<EbayButton onBlur={spy} />)

            fireEvent.blur(wrapper.getByRole('button'))

            expect(spy).toBeCalledWith(anySyntheticEvent)
        })
    })
})

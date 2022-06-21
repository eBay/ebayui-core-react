import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EbayFloatingLabel } from '../../index'
import { initStoryshots } from '../../../config/jest/storyshots'

describe('<EbayFloatingLabel>', () => {
    describe('on input change', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const { getByLabelText } = render(
                <EbayFloatingLabel id="input" onChange={spy} label="look ma, I float" />
            )
            const input = getByLabelText('look ma, I float')
            userEvent.type(input, '123')

            expect(spy).toBeCalled()
        })
    })

    describe('on input blur', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const { getByLabelText } = render(
                <EbayFloatingLabel id="input" onBlur={spy} label="look ma, I float" />
            )
            const input = getByLabelText('look ma, I float')
            fireEvent.blur(input)

            expect(spy).toBeCalled()
        })

        describe('and there is no value', () => {
            it('should set the inline class in the label', () => {
                const { container, getByLabelText } = render(
                    <EbayFloatingLabel id="input" label="Label" />
                )
                const input = getByLabelText('Label')
                fireEvent.blur(input)

                expect(container.querySelector('.floating-label__label--inline')).toBeInTheDocument()
                expect(container.querySelector('.floating-label__label--animate')).toBeInTheDocument()
            })
        })
    })

    describe('on input focus', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const { getByLabelText } = render(
                <EbayFloatingLabel id="input" onFocus={spy} label="look ma, I float" />
            )

            const input = getByLabelText('look ma, I float')
            fireEvent.focus(input)

            expect(spy).toBeCalled()
        })

        it('should animate the label', () => {
            const { container, getByLabelText } = render(
                <EbayFloatingLabel id="input" label="Label" />
            )

            const input = getByLabelText('Label')
            fireEvent.focus(input)

            expect(container.querySelector('.floating-label__label--animate')).toBeInTheDocument()
            expect(container.querySelector('.floating-label__label--inline')).not.toBeInTheDocument()
        })
    })

    describe('on passing a ref', () => {
        it('should set the ref as the input reference', () => {
            const ref = React.createRef() as any
            render(<EbayFloatingLabel ref={ref} label="look ma, I float" />)

            expect(ref.current.tagName).toBe('INPUT')
        })
    })

    it(`should show placeholder on focus only`, () => {
        const { getByLabelText } = render(
            <EbayFloatingLabel id="input" placeholder="Placeholder" label="look ma, I float" />
        )
        const input = getByLabelText('look ma, I float')
        fireEvent.blur(input)
        expect(input).not.toHaveAttribute('placeholder')

        fireEvent.focus(input)
        expect(input).toHaveAttribute('placeholder', 'Placeholder')
    })


    it(`should animate the label on changing the value`, () => {
        const { container, rerender } = render(
            <EbayFloatingLabel label="Label" />
        )

        rerender(
            <EbayFloatingLabel label="Label" value="234" />
        )

        expect(container.querySelector('.floating-label__label--inline')).not.toBeInTheDocument()
    })
})

global.getComputedStyle = jest.fn().mockReturnValue({ backgroundColor: 'rgb(255, 255, 255)' })

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
})

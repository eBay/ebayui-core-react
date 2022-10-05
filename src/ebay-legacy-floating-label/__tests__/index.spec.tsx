import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { EbayLegacyFloatingLabel } from '../../index'
import { initStoryshots } from '../../../config/jest/storyshots'

describe('<EbayLegacyFloatingLabel>', () => {
    describe('on input change', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const { getByLabelText } = render(
                <EbayLegacyFloatingLabel id="input" onChange={spy} label="look ma, I float" />
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
                <EbayLegacyFloatingLabel id="input" onBlur={spy} label="look ma, I float" />
            )
            const input = getByLabelText('look ma, I float')
            fireEvent.blur(input)

            expect(spy).toBeCalled()
        })
    })

    describe('on input focus', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const { getByLabelText } = render(
                <EbayLegacyFloatingLabel id="input" onFocus={spy} label="look ma, I float" />
            )

            const input = getByLabelText('look ma, I float')
            fireEvent.focus(input)

            expect(spy).toBeCalled()
        })
    })

    describe('on passing a ref', () => {
        it('should set the ref as the input reference', () => {
            const ref = React.createRef() as any
            render(<EbayLegacyFloatingLabel ref={ref} label="look ma, I float" />)

            expect(ref.current.tagName).toBe('INPUT')
        })
    })
})

global.getComputedStyle = jest.fn().mockReturnValue({ backgroundColor: 'rgb(255, 255, 255)' })

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
})

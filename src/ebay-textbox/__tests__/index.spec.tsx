import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react';
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayTextbox, EbayTextboxPostfixIcon } from '../../index'

describe('<EbayTextbox>', () => {
    describe('on textbox change', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const wrapper = render(
                <EbayTextbox onChange={spy} />
            )
            fireEvent.change(wrapper.getByRole('textbox'), { target: { value: `It's a spy!` } })

            expect(spy).toBeCalled()
        })
    })

    describe('on textbox button click', () => {
        it('textbox should fire an event', () => {
            const spy = jest.fn()
            const wrapper = render(
                <EbayTextbox onButtonClick={spy}>
                    <EbayTextboxPostfixIcon name="clear" buttonAriaLabel="Clear!"/>
                </EbayTextbox>
            )
            fireEvent.click(wrapper.getByRole('button'))

            expect(spy).toBeCalled()
        })

        it('button should fire an event', () => {
            const spy = jest.fn()
            const wrapper = render(
                <EbayTextbox>
                    <EbayTextboxPostfixIcon name="clear" buttonAriaLabel="Clear!" onClick={spy} />
                </EbayTextbox>
            )
            fireEvent.click(wrapper.getByRole('button'))

            expect(spy).toBeCalled()
        })
    })

    describe('on passing a ref', () => {
        it('should set the ref as the input reference', () => {
            const ref = React.createRef() as any
            render(<EbayTextbox ref={ref} />)

            expect(ref.current.tagName).toBe('INPUT')
        })
    })
})

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
})

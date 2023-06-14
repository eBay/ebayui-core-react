import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayCheckbox } from '../index'

const anySyntheticEvent = expect.objectContaining( { type: null })

describe('<EbayCheckbox>', () => {
    describe('on checkbox-button click', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const { getByLabelText } = render(
                <EbayCheckbox aria-label="checkbox" value="123" onChange={spy} />
            )
            const input = getByLabelText('checkbox')
            fireEvent.click(input);
            expect(spy).toBeCalledWith(anySyntheticEvent, { value: '123', checked: true })
        })
    })
    describe('on checkbox-button focus', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const { getByLabelText } = render(
                <EbayCheckbox aria-label="checkbox" onFocus={spy} />
            )
            const input = getByLabelText('checkbox')
            fireEvent.focus(input);
            expect(spy).toBeCalledWith(anySyntheticEvent)
        })
    })
    describe('on checkbox-button key down', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const { getByLabelText } = render(
                <EbayCheckbox aria-label="checkbox" onKeyDown={spy} />
            )
            const input = getByLabelText('checkbox')
            fireEvent.keyDown(input);
            expect(spy).toBeCalledWith(anySyntheticEvent)
        })
    })
})

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
});

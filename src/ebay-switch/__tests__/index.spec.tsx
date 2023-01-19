import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { EbaySwitch } from '../index'
import { initStoryshots } from '../../../config/jest/storyshots'

describe('<EbaySwitch>', () => {
    describe('on switch-button click', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const wrapper = render(
                <EbaySwitch onChange={spy} />
            )
            fireEvent.click(wrapper.container.querySelector('input'))

            expect(spy).toBeCalled()
        })
    })
})

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
});

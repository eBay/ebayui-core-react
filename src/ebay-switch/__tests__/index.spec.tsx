import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { EbaySwitch } from '../index'
import { initStoryshots } from '../../../config/jest/storyshots'

var anySyntheticEvent = expect.objectContaining({ type: null });

describe('<EbaySwitch>', () => {
    describe('on switch-button click', () => {
        it('should fire an onChange callback', () => {
            const spy = jest.fn()
            const value = 'test'
            const wrapper = render(
                <EbaySwitch value={value} onChange={spy} />
            )
            fireEvent.click(wrapper.container.querySelector('input'))

            expect(spy).toBeCalledWith(anySyntheticEvent, { value, checked: true })
        })
    })
})

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
});

import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayCheckbox } from '../../index'

describe('<EbayCheckbox>', () => {
    describe('on checkbox-button click', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const { getByLabelText, debug } = render(
                <EbayCheckbox aria-label="checkbox" onChange={spy} />
            )
            const input = getByLabelText('checkbox')
            input.click();
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

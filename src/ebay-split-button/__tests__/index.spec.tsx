import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayIconButton } from '../../ebay-icon-button';

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
})

describe('<EbayIconButton>', () => {
    describe('on button click', () => {
        it('should fire onClick event', () => {
            const spy = jest.fn()
            const wrapper = render(
                <EbayIconButton onClick={spy} icon="add" />
            )
            fireEvent.click(wrapper.getByRole('button'))

            expect(spy).toBeCalled()
        })
    })
})

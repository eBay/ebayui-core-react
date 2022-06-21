import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { initStoryshots } from '../../../config/jest/storyshots';
import { EbayRadio } from '../../index';

initStoryshots({
    config: ({ configure }) =>
        configure(() => {require('./index.stories')}, module),
    storyNameRegex: /^((?!.*?controlled).)*$/i // all stories except the Controlled ones
})

describe('<EbayRadio>', () => {
    describe('on radio-button click', () => {
        it('should fire onChange event', () => {
            const spy = jest.fn()
            const wrapper = render(
                <EbayRadio value="test" onChange={spy} />
            )
            fireEvent.click(wrapper.container.querySelector('input'))

            expect(spy).toBeCalledWith(expect.anything(), 'test')
        })
    })
})

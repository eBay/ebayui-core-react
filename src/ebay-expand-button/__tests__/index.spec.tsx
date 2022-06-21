import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayExpandButton } from '../../index'

initStoryshots({
    config: ({ configure }) => configure(() => {require('./index.stories')}, module)
})

describe('<EbayExpandButton>', () => {
    describe('on button click', () => {
        let spy: any
        beforeEach(() => {
            spy = jest.fn()
            spy.mockReset()
        })
        it('should fire onClick event', () => {
            const wrapper = render(
                <EbayExpandButton onClick={spy} />
            )
            fireEvent.click(wrapper.getByRole('button'))

            expect(spy).toBeCalled()
        })
        it('should fire onExpand event', () => {
            const wrapper = render(
                <EbayExpandButton onExpand={spy} />
            )
            fireEvent.click(wrapper.getByRole('button'))

            expect(spy).toBeCalled()
        })
        it('should fire onCollapse event', () => {
            const wrapper = render(
                <EbayExpandButton onCollapse={spy} />
            )
            const button = wrapper.getByRole('button');
            fireEvent.click(button)
            fireEvent.click(button)

            expect(spy).toBeCalledTimes(1)
        })
    })
})

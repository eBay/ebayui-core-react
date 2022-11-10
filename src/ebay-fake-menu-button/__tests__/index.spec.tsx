import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import initStoryshots from '@storybook/addon-storyshots'
import { EbayFakeMenuButton, EbayFakeMenuButtonItem } from '..'

initStoryshots({
    config: ({ configure }) => configure(() => require('./index.stories.tsx'), module)
})

describe('<EbayFakeMenuButton>', () => {
    describe('on button click', () => {
        let spy
        beforeEach(() => {
            spy = jest.fn()
            spy.mockReset()
        })
        it('should fire onExpand event', () => {
            const wrapper = render(
                <EbayFakeMenuButton onExpand={spy}>
                    <EbayFakeMenuButtonItem />
                </EbayFakeMenuButton>
            )
            fireEvent.click(wrapper.container.querySelector('button'))

            expect(spy).toBeCalled()
        })
        it('should fire onCollapse event', () => {
            const wrapper = render(
                <EbayFakeMenuButton onCollapse={spy}>
                    <EbayFakeMenuButtonItem />
                </EbayFakeMenuButton>
            )
            const button = wrapper.container.querySelector('button')
            fireEvent.click(button)
            fireEvent.click(button)

            expect(spy).toBeCalled()
        })
    })
})
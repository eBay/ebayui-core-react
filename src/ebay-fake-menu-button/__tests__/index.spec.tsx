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
        })
        it('should fire onExpand event', () => {
            const wrapper = render(
                <EbayFakeMenuButton onExpand={spy}>
                    <EbayFakeMenuButtonItem />
                </EbayFakeMenuButton>
            )
            fireEvent.click(wrapper.getByRole('button'))

            expect(spy).toBeCalled()
        })
    })
    describe('on opened menu', () => {
        let spy, button, menu
        beforeEach(() => {
            spy = jest.fn()
            const wrapper = render(
                <EbayFakeMenuButton onCollapse={spy}>
                    <EbayFakeMenuButtonItem />
                </EbayFakeMenuButton>
            )
            button = wrapper.getByRole('button')
            menu = wrapper.getByRole('list')
            fireEvent.click(button)
        })

        it('should close on button click', () => {
            fireEvent.click(button)

            expect(spy).toBeCalled()
        })

        it('should close on Esc press', () => {
            fireEvent.click(button)
            fireEvent.keyDown(menu, { key: 'Esc' })

            expect(spy).toBeCalled()
        })
    })
})

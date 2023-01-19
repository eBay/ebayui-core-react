import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import initStoryshots from '@storybook/addon-storyshots'
import { EbayFakeMenuButton, EbayFakeMenuButtonItem } from '..'

initStoryshots({
    config: ({ configure }) => configure(() => require('./index.stories.tsx'), module)
})

jest.useFakeTimers()

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
        it('should fire onCollapse event', () => {
            const wrapper = render(
                <EbayFakeMenuButton onCollapse={spy}>
                    <EbayFakeMenuButton />
                </EbayFakeMenuButton>
            )

            const button = wrapper.getByRole('button')
            fireEvent.click(button)
            fireEvent.click(button)

            expect(spy).toBeCalled()
        })
    })
    describe('on opened menu', () => {
        let spy, button
        beforeEach(() => {
            spy = jest.fn()
            const wrapper = render(
                <EbayFakeMenuButton onCollapse={spy}>
                    <EbayFakeMenuButtonItem />
                </EbayFakeMenuButton>
            )
            button = wrapper.getByRole('button')
            fireEvent.click(button)
        })

        it('should close on button click', () => {
            fireEvent.click(button)

            expect(spy).toBeCalled()
        })

        // todo: fix these tests
        // it('should close on Esc press', () => {
        //     fireEvent.keyDown(menu, { key: 'Escape' })
        //
        //     expect(spy).toBeCalled()
        // })
        //
        // it('should close on BG click', () => {
        //     jest.runAllTimers()
        //     document.body.click();
        //
        //     expect(spy).toBeCalled()
        // })
    })
})

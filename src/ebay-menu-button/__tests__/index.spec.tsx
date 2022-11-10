import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import initStoryshots from '@storybook/addon-storyshots'
import { EbayMenuButton, EbayMenuButtonItem } from '..'

initStoryshots({
    config: ({ configure }) => configure(() => require('./index.stories.tsx'), module)
})

describe('<EbayMenuButton>', () => {
    describe('on button click', () => {
        let spy
        beforeEach(() => {
            spy = jest.fn()
            spy.mockReset()
        })
        it('should fire onExpand event', () => {
            const wrapper = render(
                <EbayMenuButton onExpand={spy}>
                    <EbayMenuButtonItem />
                </EbayMenuButton>
            )
            fireEvent.click(wrapper.container.querySelector('button'))

            expect(spy).toBeCalled()
        })
        it('should fire onCollapse event', () => {
            const wrapper = render(
                <EbayMenuButton onCollapse={spy}>
                    <EbayMenuButtonItem />
                </EbayMenuButton>
            )

            const button = wrapper.container.querySelector('button')
            fireEvent.click(button)
            fireEvent.click(button)

            expect(spy).toBeCalled()
        })
    })
})
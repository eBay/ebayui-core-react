import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
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
        it('should fire onChange event', () => {
            const wrapper = render(
                <EbayMenuButton type="radio" onChange={spy}>
                    <EbayMenuButtonItem />
                    <EbayMenuButtonItem />
                </EbayMenuButton>
            )

            const button = wrapper.container.querySelector('button')
            fireEvent.click(button)
            const item = screen.getAllByRole('menuitem')[1]
            fireEvent.click(item)

            expect(spy).toBeCalledWith(1, expect.anything())
        })
        it('should fire onSelect event', () => {
            const wrapper = render(
                <EbayMenuButton type="checkbox" onChange={spy}>
                    <EbayMenuButtonItem />
                    <EbayMenuButtonItem />
                </EbayMenuButton>
            )

            const button = wrapper.container.querySelector('button')
            fireEvent.click(button)
            const item = screen.getAllByRole('menuitem')[1]
            fireEvent.click(item)

            expect(spy).toBeCalledWith(1, expect.anything())
        })
    })
})

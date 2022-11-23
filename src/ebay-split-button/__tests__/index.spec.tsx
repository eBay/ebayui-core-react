import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbaySplitButton } from '../index'
import { EbayMenuButtonItem as Item } from '../../ebay-menu-button'

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
})

describe('<EbaySplitButton>', () => {
    describe('on button click', () => {
        it('should fire onClick event', () => {
            const spy = jest.fn()
            const wrapper = render(splitButton({ onClick: spy }))
            fireEvent.click(wrapper.getAllByRole('button')[0])

            expect(spy).toBeCalled()
        })
    })
    describe('on escape keydown', () => {
        it('should fire onEscape event', () => {
            const spy = jest.fn()
            const wrapper = render(splitButton({ onEscape: spy }))
            fireEvent.click(wrapper.getAllByRole('button')[0])

            expect(spy).toBeCalled()
        })
    })
})

function splitButton(props) {
    return <EbaySplitButton {...props}>
        Split Button
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
    </EbaySplitButton>
}

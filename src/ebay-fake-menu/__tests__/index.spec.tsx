import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import initStoryshots from '@storybook/addon-storyshots'
import { EbayFakeMenu, EbayFakeMenuItem } from '../index'

initStoryshots({
    config: ({ configure }) => configure(() => require('./index.stories'), module)
})

describe('<EbayFakeMenu>', () => {
    describe('on menu item click', () => {
        it('should fire onClick event', () => {
            const onClickSpy = jest.fn()
            const wrapper = render(
                <EbayFakeMenu>
                    <EbayFakeMenuItem href="#" onClick={onClickSpy}/>
                </EbayFakeMenu>
            )

            fireEvent.click(wrapper.container.querySelectorAll('.fake-menu__item')[0])
        })
    })
    describe('on key down', () => {
        it('should fire onKeyDown event', () => {
            const onKeyDownSpy = jest.fn()
            const wrapper = render(
                <EbayFakeMenu onKeyDown={onKeyDownSpy}>
                    <EbayFakeMenuItem href="#" />
                </EbayFakeMenu>
            )

            fireEvent.keyDown(wrapper.container.querySelectorAll('.fake-menu__item')[0])

            expect(onKeyDownSpy.mock.calls[0][1]).toEqual(0)
        })
    })
    describe('on item select', () => {
        it('should fire onSelect event', () => {
            const onSelectSpy = jest.fn()
            const wrapper = render(
                <EbayFakeMenu onSelect={onSelectSpy}>
                    <EbayFakeMenuItem href="#" />
                    <EbayFakeMenuItem href="#" />
                </EbayFakeMenu>
            )

            fireEvent.click(wrapper.container.querySelectorAll('.fake-menu__item')[1])

            expect(onSelectSpy.mock.calls[0][1]).toEqual(1)
        })
    })
})
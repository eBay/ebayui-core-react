import React  from 'react'
import { fireEvent, render } from '@testing-library/react';
import initStoryshots from '@storybook/addon-storyshots'
import { EbayFakeMenu, EbayFakeMenuItem } from '../index'

initStoryshots({
    config: ({ configure }) => configure(() => require('./index.stories'), module)
})

const anySyntheticEvent = expect.objectContaining( { type: null })

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

            expect(onClickSpy).toBeCalled()
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

            const index = 0
            fireEvent.keyDown(wrapper.container.querySelectorAll('.fake-menu__item')[index])

            expect(onKeyDownSpy).toBeCalledWith(anySyntheticEvent, { index })
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

            const index = 1
            fireEvent.click(wrapper.container.querySelectorAll('.fake-menu__item')[index])

            expect(onSelectSpy).toBeCalledWith(anySyntheticEvent, { index })
        })
    })

    describe('on appear', () => {
        it('should not autofocus', () => {
            const wrapper = render(
                <EbayFakeMenu>
                    <EbayFakeMenuItem href="#" />
                    <EbayFakeMenuItem href="#" />
                </EbayFakeMenu>
            )
            const firstMenuItem = wrapper.container.querySelectorAll('.fake-menu__item')[0]

            expect(firstMenuItem).not.toHaveFocus()
        })
        it('should autofocus on first item', () => {
            const wrapper = render(
                <EbayFakeMenu>
                    <EbayFakeMenuItem href="#" autoFocus />
                    <EbayFakeMenuItem href="#" />
                </EbayFakeMenu>
            )
            const firstMenuItem = wrapper.container.querySelectorAll('.fake-menu__item')[0]

            expect(firstMenuItem).toHaveFocus()
        })
    })
})

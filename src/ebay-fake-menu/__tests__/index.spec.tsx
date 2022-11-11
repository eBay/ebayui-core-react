import React, { createRef } from 'react'
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

            expect(onSelectSpy).toBeCalledWith(expect.anything(), 1)
        })
    })

    describe('on appear', () => {
        it('should not focus on first item given no ref', () => {
            const wrapper = render(
                <EbayFakeMenu>
                    <EbayFakeMenuItem href="#" />
                    <EbayFakeMenuItem href="#" />
                </EbayFakeMenu>
            )
            const firstMenuItem = wrapper.container.querySelectorAll('.fake-menu__item')[0]

            expect(firstMenuItem).not.toHaveFocus()
        })
        it('should focus on first item given ref', () => {
            const ref: any = createRef()
            const wrapper = render(
                <EbayFakeMenu>
                    <EbayFakeMenuItem href="#" itemRef={ref} />
                    <EbayFakeMenuItem href="#" />
                </EbayFakeMenu>
            )
            const firstMenuItem = wrapper.container.querySelectorAll('.fake-menu__item')[0]

            expect(firstMenuItem).toHaveFocus()
        })
    })
})

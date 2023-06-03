import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayMenu, EbayMenuItem } from '../index'

initStoryshots({
    config: ({ configure }) => configure(() => require('./index.stories'), module)
})

describe('<EbayMenu>', () => {
    describe('on menu item click', () => {
        it('should fire onClick event', () => {
            const onClickSpy = jest.fn()
            const wrapper = render(
                <EbayMenu>
                    <EbayMenuItem onClick={onClickSpy}/>
                </EbayMenu>
            )

            fireEvent.click(wrapper.container.querySelectorAll('.menu__item')[0])

            expect(onClickSpy).toBeCalled()
        })
    })
    describe('on key down', () => {
        it('should fire onKeyDown event', () => {
            const onKeyDownSpy = jest.fn()
            const wrapper = render(
                <EbayMenu onKeyDown={onKeyDownSpy}>
                    <EbayMenuItem/>
                </EbayMenu>
            )
            fireEvent.keyDown(wrapper.container.querySelectorAll('.menu__item')[0])

            expect(onKeyDownSpy).toBeCalledWith(0, false)
        })
    })
    describe('on radio item select', () => {
        it('should fire onSelect & onChange event', () => {
            const onSelectSpy = jest.fn()
            const onChangeSpy = jest.fn()
            const wrapper = render(
                <EbayMenu onSelect={onSelectSpy} onChange={onChangeSpy} type='radio'>
                    <EbayMenuItem checked />
                    <EbayMenuItem />
                </EbayMenu>
            )
            expect(wrapper.container.querySelector('.menu__item')).toHaveAttribute('aria-checked', 'true')
            expect(wrapper.container.querySelectorAll('.menu__item')[1]).toHaveAttribute('aria-checked', 'false')

            fireEvent.click(wrapper.container.querySelectorAll('.menu__item')[1])

            expect(onChangeSpy).toBeCalledWith(1, true)
            expect(onSelectSpy).toBeCalledWith(1, true)

            expect(wrapper.container.querySelector('.menu__item')).toHaveAttribute('aria-checked', 'false')
            expect(wrapper.container.querySelectorAll('.menu__item')[1]).toHaveAttribute('aria-checked', 'true')
        })
    })
    describe('on checkbox item select', () => {
        it('should fire onSelect & onChange event', () => {
            const onSelectSpy = jest.fn()
            const onChangeSpy = jest.fn()
            const wrapper = render(
                <EbayMenu onSelect={onSelectSpy} onChange={onChangeSpy} type='checkbox'>
                    <EbayMenuItem />
                    <EbayMenuItem checked />
                </EbayMenu>
            )
            expect(wrapper.container.querySelector('.menu__item')).not.toHaveAttribute('aria-checked')
            expect(wrapper.container.querySelectorAll('.menu__item')[1]).toHaveAttribute('aria-checked', 'true')

            fireEvent.click(wrapper.container.querySelectorAll('.menu__item')[1])

            expect(onChangeSpy).toBeCalledWith(1, false)
            expect(onSelectSpy).toBeCalledWith(1, false)

            expect(wrapper.container.querySelector('.menu__item')).not.toHaveAttribute('aria-checked')
            expect(wrapper.container.querySelectorAll('.menu__item')[1]).toHaveAttribute('aria-checked', 'false')

            fireEvent.click(wrapper.container.querySelectorAll('.menu__item')[0])

            expect(wrapper.container.querySelector('.menu__item')).toHaveAttribute('aria-checked', 'true')
            expect(wrapper.container.querySelectorAll('.menu__item')[1]).toHaveAttribute('aria-checked', 'false')
        })
    })
})

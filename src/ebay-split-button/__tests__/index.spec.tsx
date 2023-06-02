import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayMenuButtonItem as Item } from '../../ebay-menu-button'
import { EbaySplitButton, Props } from '../index'

const values = ["first", "second", "third"]

jest.mock('../../common/random-id', () => ({ randomId: () => 'abc123' }))

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
            const wrapper = render(splitButton({ onEscape: (e) => spy(e) }))

            fireEvent.keyDown(wrapper.getAllByRole('button')[0], { key: 'Escape' })

            expect(spy).toBeCalled()
        })
    })
    describe('on expand/collapse', () => {
        it('should fire onExpand/onCollapse event', async () => {
            const expandSpy = jest.fn()
            const collapseSpy = jest.fn()
            render(splitButton({ onExpand: expandSpy, onCollapse: collapseSpy }))

            const dropdownButton = screen.getAllByRole('button')[1]
            fireEvent.click(dropdownButton)

            expect(expandSpy).toBeCalled()
            expect(collapseSpy).not.toBeCalled()

            expandSpy.mockReset()
            collapseSpy.mockReset()
            fireEvent.click(dropdownButton)

            expect(expandSpy).not.toBeCalled()
            expect(collapseSpy).toBeCalled()
        })
    })

    describe('on focus/blur', () => {
        it('should fire onFocus/onBlur event', () => {
            const focusSpy = jest.fn()
            const blurSpy = jest.fn()
            render(splitButton({ onFocus: focusSpy, onBlur: blurSpy }))

            const [mainButton] = screen.getAllByRole('button')
            fireEvent.focus(mainButton)

            expect(focusSpy).toBeCalled()
            expect(blurSpy).not.toBeCalled()

            focusSpy.mockReset()
            blurSpy.mockReset()
            fireEvent.blur(mainButton)

            expect(focusSpy).not.toBeCalled()
            expect(blurSpy).toBeCalled()
        })
    })

    describe('on select', () => {
        it('should fire onSelect event', () => {
            const indexToSelect = 1
            const spy = jest.fn()
            render(splitButton({ type: 'checkbox', onChange: spy}))

            const dropdownButton = screen.getAllByRole('button')[1]
            fireEvent.click(dropdownButton)
            const menuItem = screen.getAllByRole('menuitemcheckbox')[indexToSelect]
            fireEvent.click(menuItem)
            
            expect(spy).toBeCalledWith(indexToSelect, true)
        })
    })

    describe('type="radio"', () => {
        it('should fire onChange event', () => {
            const indexToCheck = 1
            const anotherIndexToCheck = 2
            const spy = jest.fn()
            render(splitButton({ type: 'radio', onChange: spy }))

            const dropdownButton = screen.getAllByRole('button')[1]
            fireEvent.click(dropdownButton)
            const menuItems = screen.getAllByRole('menuitemradio')
            const menuItem = menuItems[indexToCheck]
            fireEvent.click(menuItem)

            expect(spy).toBeCalledWith(indexToCheck, true)
            spy.mockClear()

            const anotherMenuItem = menuItems[anotherIndexToCheck]
            fireEvent.click(anotherMenuItem)
            
            expect(spy).toBeCalledWith(anotherIndexToCheck, true)

        })
    })

    describe('type="checkbox"', () => {
        it('should fire onChange event', () => {
            const indexToCheck = 1
            const anotherIndexToCheck = 2
            const spy = jest.fn()
            render(splitButton({ type: 'checkbox', onChange: spy }))

            const dropdownButton = screen.getAllByRole('button')[1]
            fireEvent.click(dropdownButton)
            const menuItems = screen.getAllByRole('menuitemcheckbox')
            const menuItem = menuItems[indexToCheck]
            fireEvent.click(menuItem)

           
            expect(spy).toBeCalledWith(indexToCheck, true)
            spy.mockClear()

            const anotherMenuItem = menuItems[anotherIndexToCheck]
            fireEvent.click(anotherMenuItem)

           
            expect(spy).toBeCalledWith(anotherIndexToCheck, true)

        })
    })
})

function splitButton(props: Props) {
    return <EbaySplitButton {...props}>
        Split Button
        {[0,1,2].map((n, i) => <Item value={values[n]} key={i}>Item {n+1}</Item>)}
    </EbaySplitButton>
}

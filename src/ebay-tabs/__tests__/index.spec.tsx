import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayTabs, EbayTab, EbayTabPanel } from '../index'

describe('<EbayTabs>', () => {
    describe('on `tab` key press', () => {
        let wrapper, tabs

        beforeEach(() => {
            wrapper = render(
                <EbayTabs>
                    <EbayTab key="0">tab1</EbayTab>,
                    <EbayTab key="1">tab2</EbayTab>,
                    <EbayTabPanel key="0">Tab panel 1</EbayTabPanel>,
                    <EbayTabPanel key="1">Tab panel 2</EbayTabPanel>
                </EbayTabs>
            )
            tabs = wrapper.getAllByRole('tab')
            userEvent.tab()
        })
        it ('should focus on the first tab', () => {
            expect(tabs[0]).toHaveFocus()
        })
        it ('should focus on the next tab on Right Arrow key press', () => {
            fireEvent.keyDown(tabs[0], { key: 'ArrowRight' })
            expect(tabs[1]).toHaveFocus()
        })
        it ('should loop focus on the first tab on Right Arrow key press', () => {
            fireEvent.keyDown(tabs[0], { key: 'ArrowRight' })
            fireEvent.keyDown(tabs[1], { key: 'ArrowRight' })
            expect(tabs[0]).toHaveFocus()
        })
        it ('should focus on the previous tab on Left Arrow key press', () => {
            fireEvent.keyDown(tabs[0], { key: 'ArrowLeft' })
            expect(tabs[1]).toHaveFocus()
        })
    })

    describe('after losing focus', () => {
        let wrapper, tabs

        beforeEach(() => {
            wrapper = render(
                <EbayTabs>
                    <EbayTab key="0">tab1</EbayTab>,
                    <EbayTab key="1">tab2</EbayTab>,
                    <EbayTabPanel key="0">Tab panel 1</EbayTabPanel>,
                    <EbayTabPanel key="1">Tab panel 2</EbayTabPanel>
                </EbayTabs>
            )
            tabs = wrapper.getAllByRole('tab')
            userEvent.tab()
        })

        it('should refocus on the latest focused tab', () => {
            expect(tabs[0]).toHaveFocus()
            fireEvent.keyDown(tabs[0], { key: 'ArrowRight' })

            expect(tabs[1]).toHaveFocus()
            userEvent.tab()

            expect(tabs[0]).not.toHaveFocus()
            expect(tabs[1]).not.toHaveFocus()

            userEvent.tab({ shift: true })
            expect(tabs[1]).toHaveFocus()
        })
    })

    describe('on tab click', () => {
        let wrapper, spy, oldSpy, tabs

        beforeEach(() => {
            oldSpy = jest.fn()
            spy = jest.fn()
            wrapper = render(
                <EbayTabs onTabSelect={oldSpy} onSelect={spy}>
                    <EbayTab key="0">tab1</EbayTab>,
                    <EbayTab key="1">tab2</EbayTab>,
                    <EbayTabPanel key="0">Tab panel 1</EbayTabPanel>,
                    <EbayTabPanel key="1">Tab panel 2</EbayTabPanel>
                </EbayTabs>
            )
            tabs = wrapper.getAllByRole('tab')
        })

        it('should fire an event', () => {
            const selectedIndex = 0
            fireEvent.click(tabs[selectedIndex])
            expect(oldSpy).toBeCalledWith(selectedIndex)
            expect(spy).toBeCalledWith({ selectedIndex })
        })

        it('should select the new tab on click', () => {
            fireEvent.click(tabs[1])

            expect(tabs[1]).not.toHaveFocus()
            expect(wrapper.getByText('Tab panel 1')).not.toBeVisible()
            expect(wrapper.getByText('Tab panel 2')).toBeVisible()
        })

        it('should change the selected/focused tab with keyboard', () => {
            expect(tabs[0]).not.toHaveFocus()

            fireEvent.click(tabs[1])
            fireEvent.keyDown(tabs[1], { key: 'ArrowLeft' })

            expect(tabs[0]).toHaveFocus()
        })
    })

    describe('in `manual` mode', () => {
        describe('on tab click', () => {
            let wrapper, spy, tabs

            beforeEach(() => {
                spy = jest.fn()
                wrapper = render(
                    <EbayTabs activation="manual" onTabSelect={spy}>
                        <EbayTab key="0">tab1</EbayTab>,
                        <EbayTab key="1">tab2</EbayTab>,
                        <EbayTabPanel key="0">Tab panel 1</EbayTabPanel>,
                        <EbayTabPanel key="1">Tab panel 2</EbayTabPanel>
                    </EbayTabs>
                )
                tabs = wrapper.getAllByRole('tab')
            })

            it('should fire an event', () => {
                fireEvent.click(tabs[0])
                expect(spy).toBeCalled()
            })

            it('should select the new tab on click', () => {
                fireEvent.click(tabs[1])

                expect(tabs[0]).not.toHaveFocus()
                expect(tabs[1]).not.toHaveFocus()
                expect(wrapper.getByText('Tab panel 1')).not.toBeVisible()
                expect(wrapper.getByText('Tab panel 2')).toBeVisible()
            })

            it('should change the selected/focused tab with keyboard', () => {
                expect(tabs[0]).not.toHaveFocus()
                expect(wrapper.getByText('Tab panel 1')).toBeVisible()

                fireEvent.click(tabs[1])
                expect(wrapper.getByText('Tab panel 2')).toBeVisible()
                expect(tabs[0]).not.toHaveFocus()
                expect(tabs[1]).not.toHaveFocus()

                fireEvent.keyDown(tabs[1], { key: 'ArrowLeft' })
                expect(wrapper.getByText('Tab panel 2')).toBeVisible()
                expect(wrapper.getByText('Tab panel 1')).not.toBeVisible()

                expect(tabs[0]).toHaveFocus()
                fireEvent.keyDown(tabs[0], { key: 'Enter' })
                expect(wrapper.getByText('Tab panel 1')).toBeVisible()

                expect(tabs[0]).toHaveFocus()
                fireEvent.keyDown(tabs[0], { key: 'ArrowLeft' })
                expect(tabs[1]).toHaveFocus()
                fireEvent.keyDown(tabs[1], { key: ' ' })
                expect(wrapper.getByText('Tab panel 2')).toBeVisible()
                expect(wrapper.getByText('Tab panel 1')).not.toBeVisible()
            })
        })

        describe('on `tab` key press', () => {
            let wrapper, tabs

            beforeEach(() => {
                wrapper = render(
                    <EbayTabs activation="manual">
                        <EbayTab key="0">tab1</EbayTab>,
                        <EbayTab key="1">tab2</EbayTab>,
                        <EbayTabPanel key="0">Tab panel 1</EbayTabPanel>,
                        <EbayTabPanel key="1">Tab panel 2</EbayTabPanel>
                    </EbayTabs>
                )
                tabs = wrapper.getAllByRole('tab')
                userEvent.tab()
            })
            it('should focus on the first tab', () => {
                expect(tabs[0]).toHaveFocus()
            })
            it('should focus on the next tab on Right Arrow key press', () => {
                fireEvent.keyDown(tabs[0], { key: 'ArrowRight' })
                expect(tabs[1]).toHaveFocus()
            })
            it('should loop focus on the first tab on Right Arrow key press', () => {
                fireEvent.keyDown(tabs[0], { key: 'ArrowRight' })
                fireEvent.keyDown(tabs[1], { key: 'ArrowRight' })
                expect(tabs[0]).toHaveFocus()
            })
            it('should focus on the previous tab on Left Arrow key press', () => {
                fireEvent.keyDown(tabs[0], { key: 'ArrowLeft' })
                expect(tabs[1]).toHaveFocus()
            })
        })

        describe('after losing focus', () => {
            let wrapper, tabs

            beforeEach(() => {
                wrapper = render(
                    <EbayTabs activation="manual">
                        <EbayTab key="0">tab1</EbayTab>,
                        <EbayTab key="1">tab2</EbayTab>,
                        <EbayTabPanel key="0">Tab panel 1</EbayTabPanel>,
                        <EbayTabPanel key="1">Tab panel 2</EbayTabPanel>
                    </EbayTabs>
                )
                tabs = wrapper.getAllByRole('tab')
                userEvent.tab()
            })

            it('should refocus on the latest focused tab', () => {
                expect(tabs[0]).toHaveFocus()
                fireEvent.keyDown(tabs[0], { key: 'ArrowRight' })

                expect(tabs[1]).toHaveFocus()
                userEvent.tab()

                expect(tabs[0]).not.toHaveFocus()
                expect(tabs[1]).not.toHaveFocus()

                userEvent.tab({ shift: true })
                expect(tabs[1]).toHaveFocus()
            })
        })
    })
})

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
})

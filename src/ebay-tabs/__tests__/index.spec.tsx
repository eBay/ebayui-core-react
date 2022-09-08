import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayTabs, EbayTab, EbayTabPanel } from '../index'

const spy = jest.fn()

describe('<EbayTabs>', () => {
    describe('on tab click', () => {
        let wrapper

        beforeEach(() => {
            wrapper = render(
                <EbayTabs onTabSelect={spy}>
                    <EbayTab key="0">tab1</EbayTab>,
                    <EbayTab key="1">tab2</EbayTab>,
                    <EbayTabPanel key="0">Tab panel 1</EbayTabPanel>,
                    <EbayTabPanel key="1">Tab panel 2</EbayTabPanel>
                </EbayTabs>
            )
        })

        it('should fire an event', () => {
            fireEvent.click(wrapper.container.querySelector('[role="tab"]'))
            expect(spy).toBeCalled()
        })

        it('should select the new tab and focus on the new tab', () => {
            const secondTab = wrapper.container.querySelectorAll('[role="tab"]')[1];

            fireEvent.click(secondTab);

            expect(wrapper.getByText('Tab panel 1')).not.toBeVisible();
            expect(wrapper.getByText('Tab panel 2')).toBeVisible();
            expect(secondTab).toHaveFocus();
        })

        it('should change the selected tab with keyboard', () => {
            const currentTab = wrapper.container.querySelectorAll('[role="tab"]')[0]
            fireEvent.keyDown(currentTab, { key: 'ArrowRight' })

            expect(wrapper.getByText('Tab panel 2')).toBeVisible()
        })
    })
})

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
});

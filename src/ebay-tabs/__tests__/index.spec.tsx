import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayTabs, EbayTab, EbayTabPanel } from '../index'

describe('<EbayTabs>', () => {
    describe('on category click', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const wrapper = render(
                <EbayTabs onTabSelect={spy}>
                    <EbayTab key="0">tab1</EbayTab>,
                    <EbayTab key="1">tab2</EbayTab>,
                    <EbayTabPanel key="0">Tab panel 1</EbayTabPanel>,
                    <EbayTabPanel key="1">Tab panel 2</EbayTabPanel>
                </EbayTabs>
            )

            fireEvent.click(wrapper.container.querySelector('[role="tab"]'))

            expect(spy).toBeCalled()
        })
    })
})

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
});

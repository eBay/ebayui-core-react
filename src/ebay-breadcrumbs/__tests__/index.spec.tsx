import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { initStoryshots } from '../../../config/jest/storyshots'

import { EbayBreadcrumbs, EbayBreadcrumbItem } from '../../index'

describe('<EbayBreadcrumbs>', () => {
    describe('on category click', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const wrapper = render(
                <EbayBreadcrumbs onSelect={spy}>
                    <EbayBreadcrumbItem>home</EbayBreadcrumbItem>
                </EbayBreadcrumbs>
            )
            fireEvent.click(wrapper.getByRole('button'))

            expect(spy).toBeCalled()
        })
    })

    describe('rendering lists', () => {
        it('should render breadcrumb items from a list', () => {
            const items = ['home', 'listings', 'about']

            const wrapper = render(
                <EbayBreadcrumbs>
                    {items.map((item, index) => <EbayBreadcrumbItem key={index}>{item}</EbayBreadcrumbItem>)}
                </EbayBreadcrumbs>
            )

            // Test all items are displayed in correct order.
            items.forEach((value, index) => {
                expect(wrapper.getAllByRole('button')[index].textContent).toEqual(value)
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

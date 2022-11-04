import React from 'react'
import {fireEvent, render} from '@testing-library/react';
import initStoryshots from '@storybook/addon-storyshots'
import { EbayFakeMenu, EbayFakeMenuItem } from '../index'

initStoryshots({
    config: ({ configure }) => configure(() => require('./index.stories'), module)
})

describe('<EbayFakeMenu>', () => {
    describe('on item select', () => {
        it('should fire onSelect event', () => {
            const onSelectSpy = jest.fn()
            const wrapper = render(
                <EbayFakeMenu onSelect={onSelectSpy}>
                    <EbayFakeMenuItem href="#" />
                    <EbayFakeMenuItem href="#" />
                </EbayFakeMenu>
            )
            fireEvent.click(wrapper.container.querySelector('.fake-menu__item'))
            expect(onSelectSpy).toBeCalled()
        })
    })
})

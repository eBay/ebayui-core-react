import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayIconButton } from '../../ebay-icon-button';

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
})

describe('<EbayIconButton>', () => {
    describe('on passing a ref', () => {
        it('should set the ref to button element', () => {
            const ref = React.createRef() as any
            render(<EbayIconButton ref={ref} icon="menu" />)

            expect(ref.current.tagName).toBe('BUTTON')
        })
    })
    describe('on button click', () => {
        it('should fire onClick event', () => {
            const spy = jest.fn()
            const wrapper = render(
                <EbayIconButton onClick={spy} icon="add" />
            )
            fireEvent.click(wrapper.getByRole('button'))

            expect(spy).toBeCalled()
        })
    })
})

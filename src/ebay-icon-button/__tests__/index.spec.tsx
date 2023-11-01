import React from 'react'
import requireContext from 'node-require-context'
import { fireEvent, render } from '@testing-library/react';
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayIconButton } from '../../ebay-icon-button';

initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }

})

const anySyntheticEvent = expect.objectContaining( { type: null })

describe('<EbayIconButton>', () => {
    describe('on passing a ref', () => {
        it('should set the ref to button element', () => {
            const ref = React.createRef() as any
            render(<EbayIconButton ref={ref} icon="menu20" />)

            expect(ref.current.tagName).toBe('BUTTON')
        })
    })
    describe('on button click', () => {
        it('should fire onClick event', () => {
            const spy = jest.fn()
            const wrapper = render(
                <EbayIconButton onClick={spy} icon="add16" />
            )
            fireEvent.click(wrapper.getByRole('button'))

            expect(spy).toBeCalledWith(anySyntheticEvent)
        })
    })
    describe('on focus', () => {
        it('should fire onFocus event', () => {
            const spy = jest.fn()
            const wrapper = render(
                <EbayIconButton onFocus={spy} icon="add16" />
            )
            fireEvent.focus(wrapper.getByRole('button'))

            expect(spy).toBeCalledWith(anySyntheticEvent)
        })
    })
    describe('on blur', () => {
        it('should fire onBlur event', () => {
            const spy = jest.fn()
            const wrapper = render(
                <EbayIconButton onBlur={spy} icon="add16" />
            )
            fireEvent.blur(wrapper.getByRole('button'))

            expect(spy).toBeCalledWith(anySyntheticEvent)
        })
    })
    describe('on Esc press', () => {
        it('should fire onEscape event', () => {
            const spy = jest.fn()
            const wrapper = render(
                <EbayIconButton onEscape={spy} icon="add16" />
            )
            fireEvent.keyDown(wrapper.getByRole('button'), { key: 'Escape' })

            expect(spy).toBeCalledWith(anySyntheticEvent)
        })
    })
})

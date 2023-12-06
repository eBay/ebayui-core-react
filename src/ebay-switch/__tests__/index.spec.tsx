import React from 'react'
import requireContext from 'node-require-context'
import { render, fireEvent } from '@testing-library/react'
import { EbaySwitch } from '../index'
import { initStoryshots } from '../../../config/jest/storyshots'

var anySyntheticEvent = expect.objectContaining({ type: null });

describe('<EbaySwitch>', () => {
    describe('on switch-button click', () => {
        it('should fire an onChange callback', () => {
            const spy = jest.fn()
            const value = 'test'
            const wrapper = render(
                <EbaySwitch value={value} onChange={spy} />
            )
            fireEvent.click(wrapper.container.querySelector('input'))

            expect(spy).toBeCalledWith(anySyntheticEvent, { value, checked: true })
        })

        it('should not change when controlled', () => {
            const checked = true;
            const wrapper = render(<EbaySwitch checked={checked} />)
            const input = wrapper.container.querySelector('input')
            fireEvent.click(input)

            expect(input?.checked).toBe(checked)
        })
    })
})

initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }

});

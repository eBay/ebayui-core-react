import React from 'react'
import requireContext from 'node-require-context'
import { fireEvent, render } from '@testing-library/react';
import { initStoryshots } from '../../../config/jest/storyshots';
import { EbaySelect, EbaySelectOption } from '../index'

initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }

})

const anySyntheticEvent = expect.objectContaining( { type: null })

describe('<EbaySelect>', () => {
    describe('on render', () => {
        it('should pass a proper className to a wrapper element', () => {
            const wrapper = render(
                <EbaySelect name="form-select" value="1" className="blueText">
                    <EbaySelectOption value="1">Option 1</EbaySelectOption>
                    <EbaySelectOption value="2">Option 2</EbaySelectOption>
                    <EbaySelectOption value="3">Option 3</EbaySelectOption>
                </EbaySelect>)
            expect(wrapper.container.querySelectorAll('span')[0]).toHaveClass('blueText')
        })

        it('should pass a `disabled` prop to a `select` element', () => {
            const wrapper = render(
                <EbaySelect name="form-select" value="1" disabled>
                    <EbaySelectOption value="1">Option 1</EbaySelectOption>
                    <EbaySelectOption value="2">Option 2</EbaySelectOption>
                    <EbaySelectOption value="3">Option 3</EbaySelectOption>
                </EbaySelect>
            )
            expect(wrapper.getByRole('combobox')).toHaveAttribute('disabled', '')
        })
    })

    describe('on select-dropdown change', () => {
        it('should fire onChange event', () => {
            const spy = jest.fn()
            const wrapper = render(
                <EbaySelect name="foo" value="1" onChange={spy}>
                    <EbaySelectOption value="1">Option 1</EbaySelectOption>
                    <EbaySelectOption value="2">Option 2</EbaySelectOption>
                    <EbaySelectOption value="3">Option 3</EbaySelectOption>
                </EbaySelect>
            )
            const index = 2
            const selectedValue = '3'
            simulateSelectChange(wrapper, selectedValue, index)

            expect(spy).toBeCalledTimes(1)
            expect(spy).toBeCalledWith(anySyntheticEvent, { index, selected: [selectedValue] })
        })
    })

    describe('on uncontrolled component', () => {
        let wrapper
        let spy

        beforeEach(() => {
            spy = jest.fn()
            wrapper = render(
                <EbaySelect name="foo" defaultValue="2" onChange={spy}>
                    <EbaySelectOption value="1">Option 1</EbaySelectOption>
                    <EbaySelectOption value="2">Option 2</EbaySelectOption>
                    <EbaySelectOption value="3">Option 3</EbaySelectOption>
                </EbaySelect>
            )
        })

        it('should set initial selected value', () => {
            expect(wrapper.getByRole('combobox')).toHaveValue('2')
        })

        it('should automatically render the newly selected value when select changes', () => {
            simulateSelectChange(wrapper, '3', 2)

            expect(wrapper.getByRole('combobox')).toHaveValue('3')
        })
    })

    describe('in case for controlled component', () => {
        let wrapper
        let spy

        beforeEach(() => {
            spy = jest.fn()
            wrapper = render(
                <EbaySelect name="foo" value="2" onChange={spy} >
                    <EbaySelectOption value="1">Option 1</EbaySelectOption>
                    <EbaySelectOption value="2">Option 2</EbaySelectOption>
                    <EbaySelectOption value="3">Option 3</EbaySelectOption>
                </EbaySelect>
            )
        })

        it('should set initial selected value', () => {
            expect(wrapper.getByRole('combobox')).toHaveValue('2')
        })

        it('should not automatically update the newly selected value when select changes', () => {
            simulateSelectChange(wrapper, '3', 2)

            expect(wrapper.getByRole('combobox')).toHaveValue('2')
        })
    })
})

function simulateSelectChange(wrapper, selectedValue, selectedIndex) {
    fireEvent.change(wrapper.getByRole('combobox'), {
        target: {
            value: selectedValue,
            selectedIndex: selectedIndex
        }
    })
}

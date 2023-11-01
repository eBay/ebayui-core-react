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
const EbaySelectWith3Options = (props) => (
    <EbaySelect {...props}>
        <EbaySelectOption value="">Please Select</EbaySelectOption>
        <EbaySelectOption value="1">Option 1</EbaySelectOption>
        <EbaySelectOption value="2">Option 2</EbaySelectOption>
        <EbaySelectOption value="3">Option 3</EbaySelectOption>
    </EbaySelect>
)
describe('<EbaySelect>', () => {
    describe('on render', () => {
        it('should pass a proper className to a wrapper element', () => {
            const wrapper = render(<EbaySelectWith3Options name="form-select" value="1" className="blueText" />)
            expect(wrapper.container.querySelectorAll('span')[0]).toHaveClass('blueText')
        })

        it('should pass a `disabled` prop to a `select` element', () => {
            const wrapper = render(<EbaySelectWith3Options name="form-select" value="1" disabled />)
            expect(wrapper.getByRole('combobox')).toHaveAttribute('disabled', '')
        })
    })
    describe('on blur events', () => {
        it('should have "inline" class after blur event when no value is present', () => {
            const { container, getByRole } = render(<EbaySelectWith3Options floatingLabel="Test label" />);
            fireEvent.blur(getByRole('combobox'));
            expect(container.querySelector('.floating-label__label')).toHaveClass('floating-label__label--inline');
        });
        it('should not have "inline" class after blur event when no value is present', () => {
            const { container, getByRole } = render(<EbaySelectWith3Options floatingLabel="Test label" defaultValue="1" />);
            fireEvent.blur(getByRole('combobox'));
            expect(container.querySelector('.floating-label__label')).not.toHaveClass('floating-label__label--inline');
        });
    })
    describe('on select-dropdown change', () => {
        it('should fire onChange event', () => {
            const spy = jest.fn()
            const wrapper = render(<EbaySelectWith3Options name="foo" value="1" onChange={spy} />)
            const index = 3
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
            wrapper = render(<EbaySelectWith3Options name="foo" defaultValue="2" onChange={spy} />)
        })

        it('should set initial selected value', () => {
            expect(wrapper.getByRole('combobox')).toHaveValue('2')
        })

        it('should automatically render the newly selected value when select changes', () => {
            simulateSelectChange(wrapper, '3', 3)

            expect(wrapper.getByRole('combobox')).toHaveValue('3')
        })
    })

    describe('in case for controlled component', () => {
        let wrapper
        let spy

        beforeEach(() => {
            spy = jest.fn()
            wrapper = render(<EbaySelectWith3Options name="foo" value="2" onChange={spy}  />)
        })

        it('should set initial selected value', () => {
            expect(wrapper.getByRole('combobox')).toHaveValue('2')
        })

        it('should not automatically update the newly selected value when select changes', () => {
            simulateSelectChange(wrapper, '3', 3)

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

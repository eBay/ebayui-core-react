import React from 'react'
import requireContext from 'node-require-context'

import { initStoryshots } from '../../../config/jest/storyshots'
import { fireEvent, render, screen } from '@testing-library/react'
import EbayDateTextbox from '../date-textbox'
import userEvent from '@testing-library/user-event'

jest
    .useFakeTimers()
    .setSystemTime(new Date('2024-01-05').getTime())

// makeup-expander uses a random generated id, so we need to mock it for the
// snapshot to be consistent
jest.mock('makeup-next-id', () => (el) => el.setAttribute('id', 'testid'))

initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }
})

describe('<EbayDateTextbox />', () => {
    it('should open the calendar when clicking on the postfix icon', () => {
        const { container } = render(<EbayDateTextbox />)
        fireEvent.click(screen.getByLabelText('open calendar'))

        expect(container.querySelector('.date-textbox__popover')).not.toHaveAttribute('hidden')
    })

    it('should close the calendar when clicking outside the calendar', () => {
        const { container } = render(<EbayDateTextbox />)
        fireEvent.click(screen.getByLabelText('open calendar'))
        expect(container.querySelector('.date-textbox__popover')).not.toHaveAttribute('hidden')

        fireEvent.click(document.body)
        expect(container.querySelector('.date-textbox__popover')).toHaveAttribute('hidden')
    })

    it('should close the calendar when clicking on the postfix icon', () => {
        const { container } = render(<EbayDateTextbox />)
        fireEvent.click(screen.getByLabelText('open calendar'))
        expect(container.querySelector('.date-textbox__popover')).not.toHaveAttribute('hidden')

        fireEvent.click(screen.getByLabelText('open calendar'))
        expect(container.querySelector('.date-textbox__popover')).toHaveAttribute('hidden')
    })

    it('should not close the calendar when selecting a date and collapseOnSelect is false', () => {
        const { container } = render(<EbayDateTextbox collapseOnSelect={false} />)
        fireEvent.click(screen.getByLabelText('open calendar'))

        fireEvent.click(screen.getByText('1'))
        expect(container.querySelector('.date-textbox__popover')).not.toHaveAttribute('hidden')
    })

    it('should close the calendar when selecting a date and collapseOnSelect is true', () => {
        const { container } = render(<EbayDateTextbox collapseOnSelect />)
        fireEvent.click(screen.getByLabelText('open calendar'))

        fireEvent.click(screen.getByText('1'))
        expect(container.querySelector('.date-textbox__popover')).toHaveAttribute('hidden')
    })

    it('should close the calendar when selecting a range and collapseOnSelect is true', () => {
        const { container } = render(<EbayDateTextbox range collapseOnSelect />)
        fireEvent.click(screen.getByLabelText('open calendar'))

        fireEvent.click(screen.getByText('1'))
        fireEvent.click(screen.getByText('2'))
        expect(container.querySelector('.date-textbox__popover')).toHaveAttribute('hidden')
    })

    it('should not close the calendar when selecting a range and collapseOnSelect is false', () => {
        const { container } = render(<EbayDateTextbox range collapseOnSelect={false} />)
        fireEvent.click(screen.getByLabelText('open calendar'))

        fireEvent.click(screen.getByText('1'))
        fireEvent.click(screen.getByText('2'))
        expect(container.querySelector('.date-textbox__popover')).not.toHaveAttribute('hidden')
    })

    it('should close the calendar when selecting a range and collapseOnSelect is false and clicking outside the calendar', () => {
        const { container } = render(<EbayDateTextbox range collapseOnSelect={false} />)
        fireEvent.click(screen.getByLabelText('open calendar'))

        fireEvent.click(screen.getByText('1'))
        fireEvent.click(screen.getByText('2'))
        expect(container.querySelector('.date-textbox__popover')).not.toHaveAttribute('hidden')

        fireEvent.click(document.body)
        expect(container.querySelector('.date-textbox__popover')).toHaveAttribute('hidden')
    })

    describe('onChange', () => {
        it('should be called with the selected date when selecting a date', () => {
            const onChange = jest.fn()
            render(<EbayDateTextbox onChange={onChange} />)
            fireEvent.click(screen.getByLabelText('open calendar'))

            fireEvent.click(screen.getByText('1'))
            expect(onChange).toHaveBeenCalledWith(expect.anything(), { selected: '2024-01-01' })
        })

        it('should be called with the selected range when selecting a range', () => {
            const onChange = jest.fn()
            render(<EbayDateTextbox range onChange={onChange} />)
            fireEvent.click(screen.getByLabelText('open calendar'))

            fireEvent.click(screen.getByText('1'))
            expect(onChange).toHaveBeenCalledWith(expect.anything(), {
                rangeStart: '2024-01-01',
                rangeEnd: undefined
            })

            fireEvent.click(screen.getByText('2'))
            expect(onChange).toHaveBeenCalledWith(expect.anything(), {
                rangeStart: '2024-01-01',
                rangeEnd: '2024-01-02'
            })
        })
    })

    it('should update numMonths on resize of the window', () => {
        jest.spyOn(document.documentElement, 'clientWidth', 'get')
            .mockImplementation(() => 800)

        const { container } = render(<EbayDateTextbox />)
        fireEvent.click(screen.getByLabelText('open calendar'))

        expect(container.querySelectorAll('.calendar__month')).toHaveLength(2)

        jest.spyOn(document.documentElement, 'clientWidth', 'get')
            .mockImplementation(() => 500)

        fireEvent.resize(window)
        expect(container.querySelectorAll('.calendar__month')).toHaveLength(1)
    })

    it('should allow clear the text field value after selection', () => {
        const { container } = render(<EbayDateTextbox />)
        fireEvent.click(screen.getByLabelText('open calendar'))

        fireEvent.click(screen.getByText('1'))
        expect(container.querySelector('input')).toHaveValue('2024-01-01')

        userEvent.clear(container.querySelector('input') as HTMLInputElement)
        expect(container.querySelector('input')).toHaveValue('')
    })

    it('should not fail if the date passed is invalid', () => {
        expect(() => {
            render(<EbayDateTextbox value="invalid" />)
        }).not.toThrow()
    })
})

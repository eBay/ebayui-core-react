import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { eventOfType } from '../../common/event-utils/__tests__/helpers'
import { EbayTriStateCheckbox } from '../index'

const { getByRole } = screen

describe('<EbayCheckbox>', () => {
    describe('on checkbox-button click', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            render(<EbayTriStateCheckbox aria-label="checkbox" value="123" onChange={spy} />)
            const input = getByRole('checkbox')
            fireEvent.click(input);
            expect(spy).toHaveBeenCalledWith(eventOfType('change'), { value: '123', checked: "false" })
        })
    })
    describe('on checkbox-button focus', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            render(<EbayTriStateCheckbox aria-label="checkbox" value="123" onFocus={spy} />)
            const input = getByRole('checkbox')
            fireEvent.focus(input)
            expect(spy).toHaveBeenCalledWith(eventOfType('focus'), { value: '123', checked: "false" })
        })
    })
    describe('on checkbox-button key down', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            render(<EbayTriStateCheckbox aria-label="checkbox" value="123" onKeyDown={spy} />)
            const input = getByRole('checkbox')
            fireEvent.keyDown(input)
            expect(spy).toHaveBeenCalledWith(eventOfType('keydown'), { value: '123', checked: "false" })
        })
    })
})
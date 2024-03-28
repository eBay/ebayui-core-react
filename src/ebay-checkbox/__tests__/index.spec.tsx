import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { EbayCheckbox } from '../index'

const { getByRole } = screen
const anySyntheticEvent = expect.objectContaining({ type: null })

describe('<EbayCheckbox>', () => {
    describe('on checkbox-button click', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            render(<EbayCheckbox aria-label="checkbox" value="123" onChange={spy} />)
            const input = getByRole('checkbox')
            fireEvent.click(input)
            expect(spy).toBeCalledWith(anySyntheticEvent, { value: '123', checked: true })
        })
    })
    describe('on checkbox-button focus', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            render(<EbayCheckbox aria-label="checkbox" value="123" onFocus={spy} />)
            const input = getByRole('checkbox')
            fireEvent.focus(input)
            expect(spy).toBeCalledWith(anySyntheticEvent, { value: '123', checked: false })
        })
    })
    describe('on checkbox-button key down', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            render(<EbayCheckbox aria-label="checkbox" value="123" onKeyDown={spy} />)
            const input = getByRole('checkbox')
            fireEvent.keyDown(input)
            expect(spy).toBeCalledWith(anySyntheticEvent, { value: '123', checked: false })
        })
    })
})

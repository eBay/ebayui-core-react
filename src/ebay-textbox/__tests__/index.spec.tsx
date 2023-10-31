import React from 'react'
import requireContext from 'node-require-context'
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayTextbox, EbayTextboxPostfixIcon } from '../index'

var anySyntheticEvent = expect.objectContaining({ type: null });

describe('<EbayTextbox>', () => {
    describe('on textbox change', () => {
        it('should fire an onInputChange event', () => {
            const spy = jest.fn()
            render(<EbayTextbox onInputChange={spy} />)

            const value = `It's a spy!`
            const textbox = screen.getByRole('textbox')

            fireEvent.change(textbox, { target: { value } })
            expect(spy).toBeCalledWith(anySyntheticEvent, { value })
        })
    })

    describe('on textbox change (and focus leaving the field)', () => {
        it('should fire an onChange event', () => {
            const spy = jest.fn()
            const wrapper = render(<EbayTextbox onChange={spy} />)

            const value = `It's a spy!`
            const textbox = screen.getByRole('textbox')

            fireEvent.change(textbox, { target: { value } })
            expect(spy).not.toBeCalled()

            fireEvent.blur(textbox, { target: { value } })
            expect(spy).toBeCalledWith(anySyntheticEvent, { value })
        })
    })

    describe('on textbox focus', () => {
        it('should fire an onFocus event', () => {
            const spy = jest.fn()
            render(<EbayTextbox onFocus={spy} />)
            const value = `It's a spy!`

            fireEvent.focus(screen.getByRole('textbox'), { target: { value } })
            expect(spy).toBeCalledWith(anySyntheticEvent, { value })
        })
    })

    describe('on textbox blur', () => {
        it('should fire an onBlur event', () => {
            const spy = jest.fn()
            render(<EbayTextbox onBlur={spy} />)
            const value = `It's a spy!`

            fireEvent.blur(screen.getByRole('textbox'), { target: { value } })
            expect(spy).toBeCalledWith(anySyntheticEvent, { value })
        })
    })

    describe('on textbox key down', () => {
        it('should fire an onKeyDown event', () => {
            const spy = jest.fn()
            render(<EbayTextbox onKeyDown={spy} />)
            const value = `It's a spy!`

            fireEvent.keyDown(screen.getByRole('textbox'), { target: { value } })
            expect(spy).toBeCalledWith(anySyntheticEvent, { value })
        })
    })

    describe('on textbox key up', () => {
        it('should fire an onKeyUp event', () => {
            const spy = jest.fn()
            render(<EbayTextbox onKeyUp={spy} />)
            const value = `It's a spy!`

            fireEvent.keyUp(screen.getByRole('textbox'), { target: { value } })
            expect(spy).toBeCalledWith(anySyntheticEvent, { value })
        })
    })

    describe('on textbox key press', () => {
        it('should fire an onKeyPress event', () => {
            const spy = jest.fn()
            const value = `It's a spy!`
            render(<EbayTextbox onKeyPress={spy} defaultValue={value}/>)

            const textbox = screen.getByRole('textbox')
            userEvent.type(textbox, 'a')
            expect(spy).toBeCalledWith(anySyntheticEvent, { value })
        })
    })

    describe('on textbox invalid value', () => {
        it('should fire an onInvalid event', () => {
            const spy = jest.fn()
            const ref = React.createRef() as any
            render(<form ref={ref}><EbayTextbox onInvalid={spy} required /></form>)

            ref.current?.reportValidity()
            expect(spy).toBeCalledWith(anySyntheticEvent, { value: '' })
        })
    })

    describe('on textbox button click', () => {
        it('textbox should fire two events', () => {
            const textboxSpy = jest.fn()
            const iconSpy = jest.fn()
            const value = 'test'
            const wrapper = render(
                <EbayTextbox defaultValue={value} onButtonClick={textboxSpy}>
                    <EbayTextboxPostfixIcon name="clear16" buttonAriaLabel="Clear!" onClick={iconSpy} />
                </EbayTextbox>
            )
            fireEvent.click(wrapper.getByRole('button'))

            expect(textboxSpy).toBeCalledWith(anySyntheticEvent, { value })
            expect(iconSpy).toBeCalledWith(anySyntheticEvent)
        })

        it('button should fire an event', () => {
            const spy = jest.fn()
            const wrapper = render(
                <EbayTextbox>
                    <EbayTextboxPostfixIcon
                        name="clear16"
                        buttonAriaLabel="Clear!"
                        onClick={spy}
                    />
                </EbayTextbox>
            )
            fireEvent.click(wrapper.getByRole('button'))

            expect(spy).toBeCalledWith(anySyntheticEvent)
        })
    })

    describe('on passing a ref', () => {
        it('should set the ref as the input reference', () => {
            const ref = React.createRef() as any
            render(<EbayTextbox ref={ref} />)

            expect(ref.current.tagName).toBe('INPUT')
        })
    })
})

initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }

})

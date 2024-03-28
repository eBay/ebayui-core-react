import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { Isolated, Fieldset } from './mocks'

const htmlSnap = async (ui: React.ReactElement): Promise<void> => {
    const { asFragment } = await render(ui)
    expect(asFragment()).toMatchSnapshot()
}

let component
const onChangeSpy = jest.fn()
const onFocusSpy = jest.fn()
const onKeyDownSpy = jest.fn()

const anySyntheticEvent = expect.objectContaining({ type: null })

describe('star-rating-select', () => {
    it('renders defaults', async () => {
        await htmlSnap(<Isolated a11yText={null} a11yStarText={null} />)
    })

    it('renders basic fieldset', async () => {
        await htmlSnap(<Fieldset />)
    })

    it('renders with 0 selected', async () => {
        await htmlSnap(<Isolated value="0" />)
    })

    it('renders with 2 selected', async () => {
        await htmlSnap(<Isolated value="2" />)
    })

    it('renders with 5 selected', async () => {
        await htmlSnap(<Isolated value="5" />)
    })

    describe('given star rating', () => {
        afterEach(cleanup)

        beforeEach(async () => {
            onChangeSpy.mockReset()
            component = await render(<Isolated onChange={onChangeSpy} />)
            await fireEvent.click(component.getByLabelText('2 stars'))
        })

        it('should emit the onChange event with 2', () => {
            expect(onChangeSpy).toBeCalledTimes(1)
            expect(onChangeSpy).toBeCalledWith(anySyntheticEvent, { value: 2 })
        })

        describe('when star is clicked', () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByLabelText('4 stars'))
            })

            it('should emit the onChange event with 4', () => {
                expect(onChangeSpy).toBeCalledTimes(2)
                expect(onChangeSpy).toBeCalledWith(anySyntheticEvent, { value: 4 })
            })
        })
    })

    describe('given star is disabled', () => {
        beforeEach(async () => {
            onChangeSpy.mockReset()
            component = await render(<Isolated onChange={onChangeSpy} disabled />)
        })

        describe('when star is clicked', () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByLabelText('2 stars'))
            })

            it('should not emit the change event', () => {
                expect(onChangeSpy).toBeCalledTimes(0)
            })
        })
    })

    describe('when native focus event is fired on star', () => {
        beforeEach(async () => {
            onFocusSpy.mockReset()
            component = await render(<Isolated onFocus={onFocusSpy} />)
            await fireEvent.focus(component.getByLabelText('2 stars'))
        })

        it('should emit the focus event', () => {
            expect(onFocusSpy).toBeCalledTimes(1)
            expect(onFocusSpy).toBeCalledWith(anySyntheticEvent, { value: 2 })
        })
    })

    describe('when native keyboard event is fired on star', () => {
        beforeEach(async () => {
            onKeyDownSpy.mockReset()
            component = await render(<Isolated onKeyDown={onKeyDownSpy} />)
            await fireEvent.keyDown(component.getByLabelText('5 stars'))
        })

        it('should emit the onKeyDown event', () => {
            expect(onKeyDownSpy).toBeCalledTimes(1)
            expect(onKeyDownSpy).toBeCalledWith(anySyntheticEvent, { value: 5 })
        })
    })
})

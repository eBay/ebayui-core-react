import React from 'react'
import { screen, fireEvent, render } from '@testing-library/react';
import { EbayFakeMenuButton, EbayFakeMenuButtonItem } from '..'

const anySyntheticEvent = expect.objectContaining( { type: null })
jest.useFakeTimers()

describe('<EbayFakeMenuButton>', () => {
    describe('on button click', () => {
        let expandSpy

        beforeEach(() => {
            expandSpy = jest.fn()
        })
        afterEach(() => {
            expandSpy.mockClear()
        })
        it('should fire onExpand event', () => {
            render(
                <EbayFakeMenuButton onExpand={expandSpy}>
                    <EbayFakeMenuButtonItem />
                </EbayFakeMenuButton>
            )
            fireEvent.click(screen.getByRole('button'))

            expect(expandSpy).toBeCalled()
        })
        it('should fire onCollapse event', () => {
            render(
                <EbayFakeMenuButton onCollapse={expandSpy}>
                    <EbayFakeMenuButton />
                </EbayFakeMenuButton>
            )

            const button = screen.getByRole('button')
            fireEvent.click(button)
            fireEvent.click(button)

            expect(expandSpy).toBeCalled()
        })
    })

    describe('on opened menu', () => {
        let collapseSpy, keyDownSpy, mouseDownSpy, selectSpy, button

        beforeEach(() => {
            collapseSpy = jest.fn()
            keyDownSpy = jest.fn()
            mouseDownSpy = jest.fn()
            selectSpy = jest.fn()
            render(
                <EbayFakeMenuButton
                    onCollapse={collapseSpy}
                    onKeyDown={keyDownSpy}
                    onMouseDown={mouseDownSpy}
                    onSelect={selectSpy}
                >
                    <EbayFakeMenuButtonItem>link 1</EbayFakeMenuButtonItem>
                    <EbayFakeMenuButtonItem>link 2</EbayFakeMenuButtonItem>
                </EbayFakeMenuButton>
            )
            button = screen.getByRole('button')
            fireEvent.click(button)
        })
        afterEach(() => {
            collapseSpy.mockClear()
        })

        it('should call onMouseDown', () => {
            const link = screen.getByText('link 2')
            fireEvent.mouseDown(link)
            fireEvent.click(link)

            expect(mouseDownSpy).toBeCalledWith(anySyntheticEvent, { index: 1 })
            expect(selectSpy).toBeCalledWith(anySyntheticEvent, { index: 1 })
        })

        it('should close on button click', () => {
            fireEvent.click(button)

            expect(collapseSpy).toBeCalled()
        })

        it('should close on Esc press', () => {
            fireEvent.focus(button)
            fireEvent.keyDown(button, { key: 'Escape' })

            expect(keyDownSpy).toBeCalledWith(anySyntheticEvent)
            expect(collapseSpy).toBeCalled()
        })

        it('should close on BG click', () => {
            jest.runAllTimers()
            document.body.click()

            expect(collapseSpy).toBeCalled()
        })
    })
})

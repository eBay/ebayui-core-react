import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { act } from '@testing-library/react-hooks'
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayMenu, EbayMenuItem } from '../index'

initStoryshots({
    config: ({ configure }) => configure(() => require('./index.stories'), module)
})

const onKeyDownSpy = jest.fn()
const onClickSpy = jest.fn()
const onSelectSpy = jest.fn()
const onChangeSpy = jest.fn()

describe('<EbayMenu>', () => {
    describe('menu item', () => {
        beforeEach(() => {
            render(
                <EbayMenu onClick={onClickSpy} onSelect={onSelectSpy} onKeyDown={onKeyDownSpy}>
                    <EbayMenuItem value="1">item1</EbayMenuItem>
                    <EbayMenuItem value="2">item2</EbayMenuItem>
                </EbayMenu>
            )
        })

        it('should fire onClick, onSelect event', async () => {
            await act(() => {
                fireEvent.click(screen.getByText('item2'))
            })

            const expectedProps = {
                index: 1,
                checked: [1]
            }

            expect(onClickSpy).toBeCalledWith(expect.any(Object))
            expect(onSelectSpy).toBeCalledWith(expect.any(Object), expectedProps)
        })

        it('should fire onKeyDown event', async () => {
            const [item1] = screen.getAllByRole('menuitem')

            await act(() => {
                fireEvent.keyDown(item1, { key: 'Esc' })
            })

            const expectedProps = {
                index: 0,
                checked: []
            }

            expect(onKeyDownSpy).toBeCalledWith(expect.any(Object), expectedProps)
        })

        it('should fire onKeyDown, onSelect event', async () => {
            const [item1, item2] = screen.getAllByRole('menuitem')

            await act(() => {
                fireEvent.keyDown(item2, { key: 'Enter' })
            })

            const expectedProps = {
                index: 1,
                checked: [1]
            }

            expect(onKeyDownSpy).toBeCalledWith(expect.any(Object), expectedProps)
            expect(onSelectSpy).toBeCalledWith(expect.any(Object), expectedProps)
        })
    })

    describe('type="radio"', () => {
        beforeEach(() => {
            render(
                <EbayMenu
                    type="radio"
                    onClick={onClickSpy}
                    onChange={onChangeSpy}
                    onKeyDown={onKeyDownSpy}
                >
                    <EbayMenuItem value="1" checked>item1</EbayMenuItem>
                    <EbayMenuItem value="2">item2</EbayMenuItem>
                </EbayMenu>
            )
        })
        it('should fire onClick, onChange event', async () => {
            const [item1, item2] = screen.getAllByRole('menuitem')

            expect(item1).toHaveAttribute('aria-checked', 'true')
            expect(item2).toHaveAttribute('aria-checked', 'false')

            await act(() => {
                fireEvent.click(item2)
            })

            const expectedProps = {
                index: 1,
                indexes: [1],
                checked: [1],
                checkedValues: ['2']
            }

            expect(onClickSpy).toBeCalledWith(expect.any(Object))
            expect(onChangeSpy).toBeCalledWith(expect.any(Object), expectedProps)

            expect(item1).toHaveAttribute('aria-checked', 'false')
            expect(item2).toHaveAttribute('aria-checked', 'true')
        })

        it('should fire onKeyDown event', async () => {
            const [item1] = screen.getAllByRole('menuitem')

            await act(() => {
                fireEvent.keyDown(item1, { key: 'Esc' })
            })

            const expectedProps = {
                index: 0,
                indexes: [0],
                checked: [0],
                checkedValues: ['1']
            }

            expect(onKeyDownSpy).toBeCalledWith(expect.any(Object), expectedProps)
        })

        it('should fire onKeyDown, onChange event', async () => {
            const [item1, item2] = screen.getAllByRole('menuitem')

            await act(() => {
                fireEvent.keyDown(item2, { key: 'Enter' })
            })

            const expectedProps = {
                index: 1,
                indexes: [1],
                checked: [1],
                checkedValues: ['2']
            }

            expect(onKeyDownSpy).toBeCalledWith(expect.any(Object), expectedProps)
            expect(onChangeSpy).toBeCalledWith(expect.any(Object), expectedProps)
        })
    })

    describe('type="checkbox"', () => {
        beforeEach(() => {
            render(
                <EbayMenu
                    type="checkbox"
                    onClick={onClickSpy}
                    onChange={onChangeSpy}
                    onKeyDown={onKeyDownSpy}
                >
                    <EbayMenuItem value="1" checked>item1</EbayMenuItem>
                    <EbayMenuItem value="2">item2</EbayMenuItem>
                </EbayMenu>
            )
        })
        it('should fire onClick, onChange event', async () => {
            const [item1, item2] = screen.getAllByRole('menuitem')

            expect(item1).toHaveAttribute('aria-checked', 'true')
            expect(item2).toHaveAttribute('aria-checked', 'false')

            await act(() => {
                fireEvent.click(item2)
            })

            let expectedProps = {
                index: 1,
                indexes: [0, 1],
                checked: [0, 1],
                checkedValues: ['1', '2']
            }

            expect(onClickSpy).toBeCalledWith(expect.any(Object))
            expect(onChangeSpy).toBeCalledWith(expect.any(Object), expectedProps)

            expect(item1).toHaveAttribute('aria-checked', 'true')
            expect(item2).toHaveAttribute('aria-checked', 'true')

            await act(() => {
                fireEvent.click(item1)
            })

            expectedProps = {
                index: 0,
                indexes: [1],
                checked: [1],
                checkedValues: ['2']
            }

            expect(onClickSpy).toBeCalledWith(expect.any(Object))
            expect(onChangeSpy).toBeCalledWith(expect.any(Object), expectedProps)

            expect(item1).toHaveAttribute('aria-checked', 'false')
            expect(item2).toHaveAttribute('aria-checked', 'true')
        })

        it('should fire onKeyDown event', async () => {
            const [item1] = screen.getAllByRole('menuitem')

            await act(() => {
                fireEvent.keyDown(item1, { key: 'Esc' })
            })

            const expectedProps = {
                index: 0,
                indexes: [0],
                checked: [0],
                checkedValues: ['1']
            }

            expect(onKeyDownSpy).toBeCalledWith(expect.any(Object), expectedProps)
        })

        it('should fire onKeyDown, onChange event', async () => {
            const [item1, item2] = screen.getAllByRole('menuitem')

            await act(() => {
                fireEvent.keyDown(item2, { key: ' ' })
            })

            const expectedProps = {
                index: 1,
                indexes: [0, 1],
                checked: [0, 1],
                checkedValues: ['1', '2']
            }

            expect(onKeyDownSpy).toBeCalledWith(expect.any(Object), expectedProps)
            expect(onChangeSpy).toBeCalledWith(expect.any(Object), expectedProps)
        })
    })
})

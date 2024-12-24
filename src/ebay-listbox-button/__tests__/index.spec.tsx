/// <reference types="@testing-library/jest-dom" />
import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { eventOfType } from '../../common/event-utils/__tests__/helpers'
import { EbayListboxButton, EbayListboxButtonOption } from '..'

jest.useFakeTimers()
describe('<EbayListboxButton>', () => {
    describe('a11y prefix', () => {
        const renderListbox = async (listboxBtnLabel?) => {
            await render(
                <>
                    <label id={listboxBtnLabel}>Select these items</label>
                    <br />
                    <br />
                    <EbayListboxButton value="BB" prefixId={listboxBtnLabel}>
                        <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
                        <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
                        <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
                    </EbayListboxButton>
                </>
            )
            const buttonElement = screen.getByRole('button')
            const expandBtnTextId = screen.getByText('Option 2').id

            return { buttonElement, expandBtnTextId }
        }

        it('should render with correct aria-labelledby if received prefix id', async () => {
            const listboxBtnLabel = 'listbox-button__label'
            const { buttonElement, expandBtnTextId } = await renderListbox(listboxBtnLabel)

            expect(buttonElement).toHaveAttribute('aria-labelledby', `${listboxBtnLabel} ${expandBtnTextId}`)
        })

        it('should render without aria-labelledby if NOT received prefix id', async () => {
            const { buttonElement } = await renderListbox()

            expect(buttonElement).not.toHaveAttribute('aria-labelledby')
        })

        it('should render aria-activedescendant with selected option id', async () => {
            await renderListbox()

            act(() => {
                userEvent.click(screen.getByRole('button'))
            })

            act(() => {
                userEvent.click(screen.getAllByRole('option')[1])
            })

            expect(screen.getByRole('listbox')).toHaveAttribute('aria-activedescendant', screen.getAllByRole('option')[1].id)
        })

        it('should render aria-activedescendant on focus of the button', async () => {
            await renderListbox()

            expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

            fireEvent.focus(screen.getByRole('button'))

            expect(screen.getByRole('listbox')).toHaveAttribute('aria-activedescendant', screen.getAllByRole('option')[1].id)
        })
    })

    describe('on render', () => {
        it('should display default button label', async () => {
            const component = await render(
                <EbayListboxButton>
                    <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
                </EbayListboxButton>
            )
            expect(component.getByRole('button')).toHaveTextContent('-')
        })
        it('should display custom button label', async () => {
            const component = await render(
                <EbayListboxButton unselectedText="Select">
                    <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
                </EbayListboxButton>
            )
            expect(component.getByRole('button')).toHaveTextContent('Select')
        })
        it('should display button label with selected option', async () => {
            const component = await render(
                <EbayListboxButton value="BB">
                    <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
                </EbayListboxButton>
            )
            expect(component.getByRole('button')).toHaveTextContent('Option 2')
        })
        it('should display button label with prefix', async () => {
            const component = await render(
                <EbayListboxButton prefixLabel="Selected:">
                    <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
                </EbayListboxButton>
            )
            expect(component.getByRole('button')).toHaveTextContent('Selected:-')
        })
        it('should display button label with prefix and selected option', async () => {
            const component = await render(
                <EbayListboxButton prefixLabel="Selected:" selected={1}>
                    <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
                </EbayListboxButton>
            )
            expect(component.getByRole('button')).toHaveTextContent('Selected:Option 2')
        })
        it('should preselect option by index', async () => {
            const component = await render(
                <EbayListboxButton selected={1}>
                    <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
                </EbayListboxButton>
            )
            expect(component.getByRole('button')).toHaveTextContent('Option 2')
        })
    })

    describe('given the listbox with 3 items', () => {
        beforeEach(async () => {
            await render(
                <EbayListboxButton prefixId="listboxBtnLabel" name="listbox-button-name">
                    <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
                </EbayListboxButton>
            )
        })
        it('should display default button label', () => {
            expect(screen.getByRole('button')).toHaveTextContent('-')
        })
        it('should not be expanded', () => {
            expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', `false`)
        })

        describe('when the button is clicked', () => {
            beforeEach(async () => {
                await fireEvent.click(screen.getByRole('button'))
            })
            it('then it has expanded the listbox', () => {
                expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', `true`)
            })
            it('then listbox options and rendered', () => {
                expect(screen.getByRole('listbox')).toBeInTheDocument()
            })
            it('focus should move to listbox', () => {
                const listbox = screen.getByRole('listbox')
                jest.runAllTimers()
                expect(listbox).toHaveFocus()
            })
            describe('when the button is clicked again', () => {
                beforeEach(async () => {
                    await fireEvent.click(screen.getByRole('button'))
                })
                it('then it has collapsed the listbox', () => {
                    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', `false`)
                })
                xit('focus should move to button', () => {
                    const button = screen.getByRole('button')
                    jest.runAllTimers()
                    expect(button).toHaveFocus()
                })
            })
        })
    })

    describe('on change', () => {
        it('should fire onChange event', () => {
            const spy = jest.fn()
            render(
                <EbayListboxButton onChange={spy}>
                    <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
                </EbayListboxButton>
            )
            fireEvent.click(screen.getByRole('button'))
            const index = 0
            fireEvent.mouseDown(screen.getAllByRole('option')[index])
            fireEvent.click(screen.getAllByRole('option')[index])

            expect(spy).toHaveBeenCalledWith(eventOfType('click'), { index, selected: ['AA'], wasClicked: true })
        })

        it(`should pass the current selected value`, () => {
            const spy = jest.fn()
            render(
                <EbayListboxButton onChange={spy}>
                    <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
                </EbayListboxButton>
            )
            fireEvent.click(screen.getByRole('button'))

            fireEvent.mouseDown(screen.getAllByRole('option')[0])
            fireEvent.click(screen.getAllByRole('option')[0])
            expect(spy).toHaveBeenCalledWith(eventOfType('click'), { index: 0, selected: ['AA'], wasClicked: true })

            fireEvent.mouseDown(screen.getAllByRole('option')[1])
            fireEvent.click(screen.getAllByRole('option')[1])
            expect(spy).toHaveBeenCalledWith(eventOfType('click'), { index: 1, selected: ['BB'], wasClicked: true })

            fireEvent.mouseDown(screen.getAllByRole('option')[2])
            fireEvent.click(screen.getAllByRole('option')[2])
            expect(spy).toHaveBeenCalledWith(eventOfType('click'), { index: 2, selected: ['CC'], wasClicked: true })
        })
    })
    describe('on expand', () => {
        it('should fire onExpand event', () => {
            const spy = jest.fn()
            render(
                <EbayListboxButton onExpand={spy}>
                    <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
                </EbayListboxButton>
            )
            fireEvent.click(screen.getByRole('button'))

            expect(spy).toHaveBeenCalledWith()
        })
    })
    describe('on collapse', () => {
        it('should fire a event', () => {
            const spy = jest.fn()
            render(
                <EbayListboxButton onCollapse={spy}>
                    <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
                    <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
                </EbayListboxButton>
            )
            const button = screen.getByRole('button')
            fireEvent.click(button)
            fireEvent.click(button)

            expect(spy).toHaveBeenCalledWith()
        })
    })
})

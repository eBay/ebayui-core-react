import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import initStoryshots from '@storybook/addon-storyshots';
import { EbayListboxButton, EbayListboxButtonOption } from '..';

const { getByRole, getAllByRole } = screen
const anySyntheticEvent = expect.objectContaining( { type: null })

jest.useFakeTimers()
describe("<EbayListboxButton>", () => {
    describe("a11y prefix", () => {
        const renderListbox = async (listboxBtnLabel?) => {
            const { getByRole, getByText } = await render(
                <>
                    <label id={listboxBtnLabel}>Select these items</label>
                    <br></br>
                    <br></br>
                    <EbayListboxButton value="BB" prefixId={listboxBtnLabel}>
                        <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
                        <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
                        <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
                    </EbayListboxButton>
                </>
            );
            const buttonElement = getByRole("button");
            const expandBtnTextId = getByText("Option 2").id

            return { buttonElement, expandBtnTextId };
        };

        it("should render with correct aria-labelledby if received prefix id", async () => {
            const listboxBtnLabel = "listbox-button__label";
            const { buttonElement, expandBtnTextId } = await renderListbox(listboxBtnLabel);

            expect(buttonElement).toHaveAttribute("aria-labelledby", `${listboxBtnLabel} ${expandBtnTextId}`);
        });

        it("should render without aria-labelledby if NOT received prefix id", async () => {
            const { buttonElement } = await renderListbox();

            expect(buttonElement).not.toHaveAttribute("aria-labelledby");
        });
    });

    describe('given the listbox with 3 items', () => {
        let component
        beforeEach(async () => {
            component = await render(
                    <EbayListboxButton value="BB" prefixId={"listboxBtnLabel"} name="listbox-button-name">
                        <EbayListboxButtonOption value="AA">Option 1</EbayListboxButtonOption>
                        <EbayListboxButtonOption value="BB">Option 2</EbayListboxButtonOption>
                        <EbayListboxButtonOption value="CC">Option 3</EbayListboxButtonOption>
                    </EbayListboxButton>
            );
        });
        it('then it should not be expanded', () => {
            expect(component.getByRole('button')).toHaveAttribute("aria-expanded", `false`);
        });

        describe('when the button is clicked', () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByRole('button'));
            });
            it('then it has expanded the listbox', () => {
                expect(component.getByRole('button')).toHaveAttribute("aria-expanded", `true`);
            });
            it('then listbox options and rendered', () => {
                expect(component.getByRole('listbox')).toBeInTheDocument();
            })
            it('focus should move to listbox', () => {
                const listbox =  component.getByRole('listbox')
                jest.runAllTimers()
                expect(listbox).toHaveFocus();
            })
            describe('when the button is clicked again', () => {
                beforeEach(async () => {
                    await fireEvent.click(component.getByRole('button'));
                });
                it('then it has collapsed the listbox',() => {
                    expect(component.getByRole('button')).toHaveAttribute("aria-expanded", `false`);
                });
                xit('focus should move to button', () => {
                    const button = component.getByRole('button')
                    jest.runAllTimers()
                    expect(button).toHaveFocus();
                })
            });
        });

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
            fireEvent.click(getByRole('button'))
            const index = 0
            fireEvent.mouseDown(getAllByRole('option')[index])
            fireEvent.click(getAllByRole('option')[index])

            expect(spy).toBeCalledWith(anySyntheticEvent, { index, selected: ['AA'], wasClicked: true })
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
            fireEvent.click(getByRole('button'))

            expect(spy).toBeCalledWith()
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
            fireEvent.click(getByRole('button'))
            fireEvent.click(getByRole('button'))

            expect(spy).toBeCalledWith()
        })
    })
});

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
})

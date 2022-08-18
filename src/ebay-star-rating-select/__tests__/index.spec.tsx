import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Isolated,Fieldset } from './mocks'

const htmlSnap =(ui: React.ReactElement): void => {
    const { asFragment } = render(ui);
    expect(asFragment()).toMatchSnapshot();
}

let component;
let onChangeSpy = jest.fn()
let onFocusSpy = jest.fn()
let onKeyDownSpy = jest.fn()

describe('star-rating-select', () => {
    it('renders defaults', async () => {
        await htmlSnap(<Isolated a11yText={null} a11yStarText={null}/>);
    });

    it('renders basic fieldset', async () => {
        await htmlSnap(<Fieldset/>);
    });

    it('renders with 0 selected', async () => {
        await htmlSnap(<Isolated value="0"/>);
    });

    it('renders with 2 selected', async () => {
        await htmlSnap(<Isolated value="2"/>);
    });

    it('renders with 5 selected', async () => {
        await htmlSnap(<Isolated value="5"/>);
    });

    describe('given star rating', () => {
        afterEach(cleanup);

        beforeEach(async () => {
            onChangeSpy.mockReset()
            component = await render(<Isolated onChange={onChangeSpy} />);
            await fireEvent.click(component.getByLabelText('2 stars'));
        });

        it('then it emits the event', () => {
            const changeEvents = onChangeSpy.mock.calls;
            expect(changeEvents.length).toBe(1);

            const eventArgs = changeEvents[0];
            expect(eventArgs.length).toBe(2);
            expect(eventArgs[1]).toBe(2);
        });

        describe('when star is clicked', () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByLabelText('4 stars'));
            });

            it('then it emits the event', () => {
                const changeEvents = onChangeSpy.mock.calls;
                expect(changeEvents.length).toBe(2);

                const eventArgs = changeEvents[1];
                expect(eventArgs.length).toBe(2);
                expect(eventArgs[1]).toBe(4);
            });
        });
    });

    describe('given star is disabled', () => {
        beforeEach(async () => {
            onChangeSpy.mockReset()
            component = await render(<Isolated onChange={onChangeSpy} disabled/>);
        });

        describe('when star is clicked', () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByLabelText('2 stars'));
            });

            it("then it doesn't emit the event", () => {
                const changeEvents = onChangeSpy.mock.calls;
                expect(changeEvents.length).toBe(0);
            });
        });
    });

    describe('when native focus event is fired on star', () => {
        beforeEach(async () => {
            onFocusSpy.mockReset()
            component = await render(<Isolated onFocus={onFocusSpy}  />);
            await fireEvent.focus(component.getByLabelText('2 stars'));
        });

        it('then it emits the event', () => {
            const events = onFocusSpy.mock.calls;
            expect(events.length).toBe(1);

            const [[eventArg,value]] = events;
            expect(value).toBe(2);
        });
    });

    describe('when native keyboard event is fired on star', () => {
        beforeEach(async () => {
            onKeyDownSpy.mockReset()
            component = await render(<Isolated onKeyDown={onKeyDownSpy}/>);
            await fireEvent.keyDown(component.getByLabelText('5 stars'));
        });

        it('then it emits the event', () => {
            const events = onKeyDownSpy.mock.calls;
            expect(events.length).toBe(1);
            const [[eventArg,value]] = events;
            expect(value).toBe(5);
        });
    });
});

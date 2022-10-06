import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { DialogBaseWithState } from '..';
import DialogBase from '../components/dialogBase';
import EbayDialogHeader from '../components/dialog-header';
import { HeaderFooterDialog } from './mocks';

jest.useFakeTimers()

describe('DialogBase', () => {
    it('should use id from header', () => {
        const wrapper = render(
            <DialogBase header={<EbayDialogHeader id="header-id" role="heading">title</EbayDialogHeader>} open>
                dialog content
            </DialogBase>
        );

        expect(wrapper.getByRole('dialog').getAttribute('aria-labelledby')).toEqual('header-id');
    });

    it('should generate id for header', () => {
        const wrapper = render(
            <DialogBase header={<EbayDialogHeader role="heading">title</EbayDialogHeader>} open>
                dialog content
            </DialogBase>
        );

        const label = wrapper.getByRole('dialog').getAttribute('aria-labelledby');
        expect(label).toBeTruthy();
        expect(wrapper.getByRole('heading').getAttribute('id')).toEqual(label);
    });

    it('given a closed dialog should return null', () => {
        const wrapper = render(
            <DialogBaseWithState
                animated={false}
                classPrefix="drawer-dialog"
                className="custom-class"
            />
        );
        expect(wrapper.container.childElementCount).toBe(0);
    });

    describe('given a DialogBase', () => {
        let wrapper: RenderResult

        beforeEach(() => {
            wrapper = render(<HeaderFooterDialog classPrefix="drawer-dialog" className="custom-class" open />);
        })
        it('should render a DialogBase', () => {
            expect(wrapper.container.querySelector('.custom-class')).toBeInTheDocument();
        });
        it('should render a DialogBase with custom classNames', () => {
            expect(wrapper.container.firstChild).toHaveClass('custom-class');
        });
        describe('click events', () => {
            let spyCloseBtnClick = jest.fn();
            let spyBackgroundClick = jest.fn();
            beforeEach(() => {
                wrapper = render(
                    <HeaderFooterDialog
                        classPrefix="drawer-dialog"
                        onCloseBtnClick={spyCloseBtnClick}
                        onBackgroundClick={spyBackgroundClick}
                        open
                    />
                );
            });
            it('when btn cliked then it should trigger onCloseBtnClick event', () => {
                fireEvent.click(wrapper.container.querySelector('.drawer-dialog__close'));
                expect(spyCloseBtnClick).toHaveBeenCalled();
            });
            it('when background clicked then it should trigger onBackgroundClick event', () => {
                jest.runAllTimers()
                document.body.click();
                expect(spyBackgroundClick).toHaveBeenCalled();
            });
        });
    });
});

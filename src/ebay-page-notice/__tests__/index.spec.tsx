import React from 'react';
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { initStoryshots } from '../../../config/jest/storyshots';
import { EbayNoticeContent, EbayPageNotice, EbayPageNoticeTitle } from '../index';

jest.mock('../../common/random-id', () => ({ randomId: () => 'abc123' }))

describe('<EbayPageNotice>', () => {
    describe('when a page title exists', () => {
        it('should render the title within the notice content', () => {
            const noticeContentSelector = 'div.page-notice__main'
            const wrapper = render(
                <EbayPageNotice status="confirmation">
                    <EbayNoticeContent>
                        <EbayPageNoticeTitle>Here is the title</EbayPageNoticeTitle>
                        <p id="details">Here is some details</p>
                    </EbayNoticeContent>
                </EbayPageNotice>
            )
            expect(wrapper.container.querySelector(noticeContentSelector)).toBeTruthy()
            expect(wrapper.container.querySelector(`${noticeContentSelector} > p#details`)).toBeTruthy()
            expect(wrapper.getByText('Here is the title')).toBeTruthy()
        })
    })

    describe('when aria-label is given', () => {
        it('should add the text to the icon as an aria-label', () => {
            const wrapper = render(
                <EbayPageNotice status="confirmation" aria-label="Success Confirmation">
                    <EbayNoticeContent>
                        <p>You did it.</p>
                    </EbayNoticeContent>
                </EbayPageNotice>
            )
            expect(wrapper.container.querySelector('svg')).toHaveAttribute('role', 'img')
        })
    })

    describe('on using the notice with no content', () => {
        it('should throw an error', () => {
            jest.spyOn(console, 'error').mockImplementation(() => null)
            expect(() => {
                render(<EbayPageNotice />)
            }).toThrowError(`EbayPageNotice: Please use a EbayNoticeContent that defines the content of the notice`);
            (console.error as jest.Mock).mockRestore()
        })
    })

    describe('when allyDismissText is provided...', () => {
        let wrapper;
        let dismissButton;
        const dismissMock = jest.fn()

        beforeEach( async () => {
            wrapper = render(
                <EbayPageNotice status="information" aria-label="Information" a11yDismissText="Close" onDismiss={dismissMock}>
                    <EbayNoticeContent>
                        <p>Content</p>
                    </EbayNoticeContent>
                </EbayPageNotice>
            )
            dismissButton = await wrapper.getByRole('button', {name:'Close'});
        })

        it( 'should add a close button with the provided label.', () => {
            expect( dismissButton ).not.toBeNull()
        })

        it( 'should hide the notice when the dismiss button is clicked.', async () => {
            expect(wrapper.getByRole('region', { name: 'Information' })).toBeVisible()
            await dismissButton.click()
            expect(wrapper.queryByRole('region', { name: 'Information' })).toBeNull()
            expect(dismissMock).toHaveBeenCalled()
        })

        it('should hide the notice when the user focuses the dismiss button and presses space', async () => {
            expect(wrapper.getByRole('region', { name: 'Information' })).toBeVisible()
            await dismissButton.focus()
            userEvent.type(dismissButton, ' ')
            expect(wrapper.queryByRole('region', { name: 'Information' })).toBeNull()
            expect( dismissMock ).toHaveBeenCalled()
        })
    })
})

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
})

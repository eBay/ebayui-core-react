import React from 'react'
import requireContext from 'node-require-context'
import { render, fireEvent, RenderResult } from '@testing-library/react'
import { EbayDialogHeader } from '../..'
import { EbayConfirmDialog } from '../index';
import { initStoryshots } from '../../../config/jest/storyshots';

jest.mock('../../common/random-id', () => ({ randomId: () => 'abc123' }))


describe('<EbayConfirmDialog>', () => {
    let wrapper: RenderResult
    const closeDrawerHandler = jest.fn()

    beforeEach(() => {
        wrapper = render(
            <EbayConfirmDialog
                confirmText="Confirm"
                rejectText="Reject"
                open
                onReject={closeDrawerHandler}>
                <EbayDialogHeader>Heading</EbayDialogHeader>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p><a href="http://www.ebay.com">www.ebay.com</a></p>
                <input placeholder="Enter a value" />
            </EbayConfirmDialog>
        )
    })

    it('should have close button', () => {
        expect(wrapper.getByText('Reject')).toBeInTheDocument()
    })

    it('should focus on Okay button', () => {
        expect(wrapper.getByText('Confirm')).toHaveFocus()
    })

    it('should trigger onClose when close button is clicked', () => {
        fireEvent.click(wrapper.getByText('Reject'))
        expect(closeDrawerHandler).toBeCalled()
    })
})

initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }
});

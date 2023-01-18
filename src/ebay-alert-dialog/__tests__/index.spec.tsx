import React from 'react'
import requireContext from 'node-require-context'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import { EbayAlertDialog } from '../index';
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayDialogHeader } from '../../ebay-dialog-base'

jest.mock('../../common/random-id', () => ({ randomId: () => 'abc123' }))

describe('<EbayAlertDialog>', () => {
    let wrapper: RenderResult
    const closeDrawerHandler = jest.fn()

    beforeEach(() => {
        wrapper = render(
            <EbayAlertDialog
                confirmText="Confirm"
                open
                onConfirm={closeDrawerHandler}
                a11yCloseText="Close"
            >
                <EbayDialogHeader>Heading</EbayDialogHeader>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p><a href="http://www.ebay.com">www.ebay.com</a></p>
                <input placeholder="Enter a value" />
            </EbayAlertDialog>
        )
    })

    it('should have close button', () => {
        expect(wrapper.getByText('Confirm')).toBeInTheDocument()
    })

    it('should trigger onClose when close button is clicked', () => {
        fireEvent.click(wrapper.getByText('Confirm'))
        expect(closeDrawerHandler).toBeCalled()
    })
})

initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }
});

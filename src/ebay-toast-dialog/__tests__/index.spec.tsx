import * as React from 'react';
import requireContext from 'node-require-context'
import { render, fireEvent } from '@testing-library/react'
import { EbayDialogHeader } from '../../ebay-dialog-base'
import { EbayToast } from '../index'
import { initStoryshots } from '../../../config/jest/storyshots'

jest.mock('../../common/random-id', () => ({ randomId: () => 'abc123' }))

describe('<EbayToast>', () => {
    const closeToastHandler = jest.fn()

    beforeEach(() => {
        render(
            <EbayToast
                open
                onClose={closeToastHandler}
            >
                <EbayDialogHeader>Heading</EbayDialogHeader>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p><a href="http://www.ebay.com">www.ebay.com</a></p>
                <input placeholder="Enter a value" />
            </EbayToast>
        )
    })

    it('should have close button', () => {
        expect(document.querySelector('button.toast-dialog__close')).toBeInTheDocument()
    })

    it('should not focus on close button', () => {
        expect(document.querySelector('button.toast-dialog__close')).not.toHaveFocus()
    })

    it('should trigger onClose when close button is clicked', () => {
        fireEvent.click(document.querySelector('button.toast-dialog__close'))
        expect(closeToastHandler).toBeCalled()
    })
})

initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }

})

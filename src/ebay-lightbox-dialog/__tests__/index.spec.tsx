import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import requireContext from 'node-require-context';
import { EbayDialogFooter, EbayDialogHeader, EbayLightboxDialog } from '../..'
import { initStoryshots } from '../../../config/jest/storyshots'

jest.mock('../../common/random-id', () => ({ randomId: () => 'abc123' }))

describe('<EbayLightboxDialog>', () => {
    const closeDrawerHandler = jest.fn()

    beforeEach(() => {
        render(
            <EbayLightboxDialog
                open
                onClose={closeDrawerHandler}>
                <EbayDialogHeader>Heading</EbayDialogHeader>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p><a href="http://www.ebay.com">www.ebay.com</a></p>
                <input placeholder="Enter a value" />
                <EbayDialogFooter>Footing</EbayDialogFooter>
            </EbayLightboxDialog>
        )
    })

    it('should have close button', () => {
        expect(document.querySelector(`button.lightbox-dialog__close`)).toBeInTheDocument()
    })

    it('should focus on close button', () => {
        expect(document.querySelector('button.lightbox-dialog__close')).toHaveFocus()
    })

    it('should trigger onClose when close button is clicked', () => {
        fireEvent.click(document.querySelector(`button.lightbox-dialog__close`))
        expect(closeDrawerHandler).toBeCalled()
    })
})

initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }
});

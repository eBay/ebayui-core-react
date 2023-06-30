import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import requireContext from 'node-require-context';
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayDialogFooter, EbayDialogHeader } from '../../ebay-dialog-base'
import { EbayLightboxDialog } from '../index'

jest.mock('../../common/random-id', () => ({ randomId: () => 'abc123' }))

const closeSpy = jest.fn()
const openSpy = jest.fn()
const openDialog = () =>
    render(
        <EbayLightboxDialog
            animated={false}
            open
            onOpen={openSpy}
            onClose={closeSpy}
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
            <EbayDialogFooter>Footing</EbayDialogFooter>
        </EbayLightboxDialog>
    )

describe('<EbayLightboxDialog>', () => {
    it('should trigger onOpen when dialog appears', () => {
        openDialog()
        expect(openSpy).toBeCalled()
    })

    it('should have close button', () => {
        openDialog()
        expect(document.querySelector(`button.lightbox-dialog__close`)).toBeInTheDocument()
    })

    it('should focus on close button', () => {
        openDialog()
        expect(document.querySelector('button.lightbox-dialog__close')).toHaveFocus()
    })

    it('should trigger onClose when close button is clicked', () => {
        openDialog()
        fireEvent.click(document.querySelector(`button.lightbox-dialog__close`))
        expect(closeSpy).toBeCalled()
    })
})

initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }
});

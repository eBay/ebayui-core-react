import React from 'react'
import requireContext from 'node-require-context'
import { render, fireEvent } from '@testing-library/react'
import { EbayDrawerDialog } from '../index'
import { EbayDialogHeader } from '../../ebay-dialog-base';
import {initStoryshots} from '../../../config/jest/storyshots'

jest.mock('../../common/random-id', () => ({ randomId: () => 'abc123' }))

const classPrefix = 'drawer-dialog'

describe('<EbayDrawerDialog>', () => {
    let closeDrawerHandler

    beforeEach(() => {
        closeDrawerHandler = jest.fn()

        render(
            <EbayDrawerDialog open onClose={closeDrawerHandler}>
                <EbayDialogHeader>Heading</EbayDialogHeader>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p><a href="http://www.ebay.com">www.ebay.com</a></p>
                <input placeholder="Enter a value" />
            </EbayDrawerDialog>
        )
    })

    it('should have close button', () => {
        expect(document.querySelector(`button.${classPrefix}__close`)).toBeInTheDocument()
    })

    it('should trigger onClose when close button is clicked', () => {
        const closeButton = document.querySelector(`button.${classPrefix}__close`)
        fireEvent.click(closeButton)
        expect(closeDrawerHandler).toBeCalled()
    })
})

initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }
});

import React from 'react'
import requireContext from 'node-require-context'
import { render, fireEvent } from '@testing-library/react'
import { EbayDrawerDialog } from '../index'
import { EbayDialogHeader } from '../../ebay-dialog-base';
import {initStoryshots} from '../../../config/jest/storyshots'

jest.mock('../../common/random-id', () => ({ randomId: () => 'abc123' }))

const classPrefix = 'drawer-dialog'
let closeDrawerHandler = jest.fn()
let wrapper
const renderComponent = (props?: any) => {
    wrapper = render(
        <EbayDrawerDialog open onClose={closeDrawerHandler} {...props}>
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
}

describe('<EbayDrawerDialog>', () => {
    beforeEach(() => {
        renderComponent()
    })

    it('should have close button', () => {
        expect(document.querySelector(`button.${classPrefix}__close`)).toBeInTheDocument()
    })

    it('should trigger onClose when close button is clicked', () => {
        const closeButton = document.querySelector(`button.${classPrefix}__close`)
        fireEvent.click(closeButton)
        expect(closeDrawerHandler).toBeCalled()
    })

    it('should not render close button when buttonPosition is set to hidden', () => {
        renderComponent({ buttonPosition: 'hidden' })
        const closeButton = wrapper.container.querySelector(`button.${classPrefix}__close`)
        expect(closeButton).toBeNull()
    })
})

initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }
});

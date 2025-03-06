import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { EbayDialogFooter, EbayDialogHeader } from '../../ebay-dialog-base'
import { EbayLightboxDialog } from '../index'

jest.mock('../../common/random-id')

const closeSpy = jest.fn()
const openSpy = jest.fn()
const openDialog = (props = {}) =>
    render(
        <EbayLightboxDialog
            animated={false}
            open
            onOpen={openSpy}
            onClose={closeSpy}
            a11yCloseText="Close"
            {...props}
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
        expect(openSpy).toHaveBeenCalled()
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
        expect(closeSpy).toHaveBeenCalled()
    })

    it('should render custom top content', () => {
        openDialog({
            top: <div className="custom-top">Top</div>
        })
        expect(document.querySelector('.custom-top')).toBeInTheDocument()
    })
    it('should render banner image', () => {
        openDialog({
            bannerImgSrc:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg",
        })
        expect(document.querySelector('.lightbox-dialog__image')).toBeInTheDocument()
    })
})

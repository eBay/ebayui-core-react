import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { EbayFilePreviewCard } from '../'

describe('<EbayFilePreviewCard>', () => {
    it('should call onCancel', async () => {
        const onCancelClick = jest.fn()
        const { getByRole } = render(
            <EbayFilePreviewCard
                status="uploading"
                a11yCancelUploadText="Cancel upload"
                onCancel={onCancelClick}
            />
        )

        const buttonEl = getByRole('button', { name: 'Cancel upload' })
        expect(buttonEl).toBeInTheDocument()
        await userEvent.click(buttonEl)
        expect(onCancelClick).toHaveBeenCalled()
    })
    it('should call onDelete', async () => {
        const onDeleteClick = jest.fn()
        const { getByRole } = render(
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete text"
                file={{
                    name: 'file-name.jpg',
                    type: 'image',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                }}
                onDelete={onDeleteClick}
            />
        )

        const buttonEl = getByRole('button', { name: 'Delete text' })
        expect(buttonEl).toBeInTheDocument()
        await userEvent.click(buttonEl)
        expect(onDeleteClick).toHaveBeenCalled()
    })
    it('should call multi action menu delete call', async () => {
        const onDeleteClick = jest.fn()
        const onMenuAction = jest.fn()
        const { getByRole } = render(
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                file={{
                    name: 'file-name.jpg',
                    type: 'image',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                }}
                menuActions={[
                    {
                        event: 'edit',
                        label: 'Edit'
                    },
                    {
                        event: 'download',
                        label: 'Download'
                    }
                ]}
                onMenuAction={onMenuAction}
                onDelete={onDeleteClick}
            />
        )

        const buttonEl = getByRole('button')
        expect(buttonEl).toBeInTheDocument()
        await userEvent.click(buttonEl)
        const deleteEl = getByRole('menuitem', { name: 'Delete' })
        await userEvent.click(deleteEl)
        expect(onDeleteClick).toHaveBeenCalled()
        expect(onMenuAction).not.toHaveBeenCalled()
    })
    it('should call multi action menu delete call', async () => {
        const onDeleteClick = jest.fn()
        const onMenuAction = jest.fn()
        const { getByRole } = render(
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                file={{
                    name: 'file-name.jpg',
                    type: 'image',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                }}
                menuActions={[
                    {
                        event: 'edit',
                        label: 'Edit'
                    },
                    {
                        event: 'download',
                        label: 'Download'
                    }
                ]}
                onMenuAction={onMenuAction}
                onDelete={onDeleteClick}
            />
        )

        const buttonEl = getByRole('button')
        expect(buttonEl).toBeInTheDocument()
        await userEvent.click(buttonEl)
        const editEl = getByRole('menuitem', { name: 'Edit' })
        await userEvent.click(editEl)
        expect(onMenuAction).toHaveBeenCalledWith(
            expect.any(Object),
            expect.objectContaining({
                checked: [0],
                eventName: 'edit',
                index: 0
            })
        )
        expect(onDeleteClick).not.toHaveBeenCalled()
    })
    it('should call see more', async () => {
        const onSeeMoreMock = jest.fn()
        const { getByRole } = render(
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                a11ySeeMoreText="See more"
                seeMore={15}
                onSeeMore={onSeeMoreMock}
                file={{
                    name: 'file-name.jpg',
                    type: 'image/jpeg',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                }}
            />
        )

        const buttonEl = getByRole('button', { name: 'See more' })
        expect(buttonEl).toBeInTheDocument()
        await userEvent.click(buttonEl)
        expect(onSeeMoreMock).toHaveBeenCalled()
    })
    
})

import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { EbayFilePreviewCard } from '..'

export default {
    title: 'media/ebay-file-preview-card',
    component: EbayFilePreviewCard,
    argTypes: {
        a11yCancelUploadText: {
            type: 'string',
            control: { type: 'text' },
            description: 'a11y text for cancel upload button'
        },
        file: {
            type: 'object',
            description:
                'File object, can be raw platform `File` or an object containing `name`, `type`, and a `src` for the preview',
            table: {
                category: 'File'
            }
        },
        status: {
            type: 'string | undefined',
            control: { type: 'text' },
            description:
                'Status of the file, can be `"uploading"` or `undefined`'
        },
        labelText: {
            type: 'string',
            control: { type: 'text' },
            description: 'Text to display in the label'
        },
        infoText: {
            type: 'string',
            control: { type: 'text' },
            description: 'Text to display info in file if not image'
        },
        menuActions: {
            type: 'array',
            description:
                'Array of menu actions, containing `event` and `label`',
            table: {
                category: 'Menu Actions'
            }
        },
        seeMore: {
            type: 'number',
            control: { type: 'number' },
            description:
                'Passing a number here will convert the card to a "see more" card'
        },
        footerTitle: {
            type: 'string',
            control: { type: 'text' },
            description:
                'Title to display beneath the file, usually the filename'
        },
        footerSubtitle: {
            type: 'string',
            control: { type: 'text' },
            description: 'Subtitle to display beneath the file title'
        },
        onMenuAction: {
            action: 'onMenuAction',
            description: 'Triggered when an action is selected from the menu. ',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: 'name, event /* from ebay-menu-button */'
                }
            }
        },
        onSeeMore: {
            action: 'onSeeMore',
            description: 'Triggered when the see more button is clicked',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: ''
                }
            }
        },
        onDelete: {
            action: 'onDelete',
            description: 'Triggered when the delete button is clicked',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: ''
                }
            }
        },
        onCancel: {
            action: 'onCancel',
            description: 'Triggered when the cancel button is clicked',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: ''
                }
            }
        }
    }
} as Meta<typeof EbayFilePreviewCard>

export const Default: StoryObj<typeof EbayFilePreviewCard> = {
    render: (args) => {
        return (
            <EbayFilePreviewCard
                status="uploading"
                a11yCancelUploadText="cancel upload"
                onCancel={(e) => action('onCancel')(e)}
                {...args}
            />
        )
    }
}

export const Image = {
    render: (args) => (
        <>
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                file={{
                    name: 'file-name.jpg',
                    type: 'image',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                }}
                onCancel={(e) => action('onCancel')(e)}
                onDelete={(e) => action('onDelete')(e)}
                {...args}
            />
        </>
    ),

    name: 'Image'
}

export const ImageFooter = {
    render: (args) => (
        <>
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                file={{
                    name: 'file-name.jpg',
                    type: 'image',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                }}
                onMenuAction={(e, selectedProps) =>
                    action('onMenuAction')(e, selectedProps)
                }
                onDelete={(e) => action('onDelete')(e)}
                footerTitle="Here a footer title"
                footerSubtitle="Now a footer subtitle"
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
                {...args}
            />
        </>
    ),

    name: 'Image with footer'
}

export const Video = {
    render: (args) => (
        <>
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                onDelete={(e) => action('onDelete')(e)}
                file={{
                    name: 'file-name.mov',
                    type: 'video/quicktime',
                    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
                }}
                {...args}
            />
        </>
    ),

    name: 'Video'
}

export const Document = {
    render: (args) => (
        <>
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                file={{
                    name: 'file-name.csv',
                    type: 'text/csv'
                }}
                footerTitle="file-name.csv"
                footerSubtitle="English, German, Spanish, French, Polish, Dutch, Italian, Japanese, Portuguese, Arabic"
                onMenuAction={(e, selectedProps) =>
                    action('onMenuAction')(e, selectedProps)
                }
                onDelete={(e) => action('onDelete')(e)}
                menuActions={[
                    {
                        event: 'edit',
                        label: 'Edit'
                    }
                ]}
                {...args}
            />
        </>
    ),

    name: 'Document'
}

export const MultipleActions = {
    render: (args) => (
        <>
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                file={{
                    name: 'file-name.jpg',
                    type: 'image/jpeg',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                }}
                onDelete={(e) => action('onDelete')(e)}
                onMenuAction={(e, selectedProps) =>
                    action('onMenuAction')(e, selectedProps)
                }
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
                {...args}
            />
        </>
    ),

    name: 'Multiple Menu Actions'
}

export const SeeMore = {
    render: (args) => (
        <>
            <EbayFilePreviewCard
                a11yCancelUploadText="Cancel upload"
                deleteText="Delete"
                a11ySeeMoreText="See more"
                seeMore={15}
                onSeeMore={(e) => action('onSeeMore')(e)}
                file={{
                    name: 'file-name.jpg',
                    type: 'image/jpeg',
                    src: 'https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg'
                }}
                {...args}
            />
        </>
    ),

    name: 'SeeMore'
}

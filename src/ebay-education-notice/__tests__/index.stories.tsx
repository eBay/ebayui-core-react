import React from 'react'
import { StoryObj } from '@storybook/react'
import EbayIcon from '../../ebay-icon/icon'
import {
    EbayEducationNotice,
    EbayNoticeContent,
    EbayEducationNoticeTitle,
    EbayEducationNoticeFooter
} from '../index'

export default {
    title: 'notices & tips/ebay-education-notice',
    component: EbayEducationNotice,
    argTypes: {
        a11yText: {
            control: {
                type: 'text'
            },
            table: {
                type: { summary: 'string' }
            },
            description: 'adding description for the notice for a11y users'
        },
        variant: {
            options: ['none', 'prominent'],
            control: {
                type: 'select'
            },
            table: {
                defaultValue: {
                    summary: 'none'
                },
                type: { summary: 'string' }
            },
            description:
                'Either none or prominent. If prominent, the notice will be more prominent'
        },
        iconVariant: {
            options: ['none', 'prominent'],
            control: {
                type: 'select'
            },
            table: {
                defaultValue: {
                    summary: 'none'
                },
                type: { summary: 'string' }
            },
            description:
                'Either none or prominent. If prominent, the notice will be more prominent'
        },
        a11yRoleDescription: {
            control: {
                type: 'text'
            },
            table: {
                defaultValue: {
                    summary: 'Notice'
                },
                type: { summary: 'string' }
            },
            description:
                'The roledescription to announce the component type for a11y users.'
        },
        a11yDismissText: {
            control: {
                type: 'text'
            },
            table: {
                type: { summary: 'string' }
            },
            description:
                'The a11y description for the dismiss button. It will also allow the notice to be dismissed.'
        },
        dismissed: {
            control: {
                type: 'boolean'
            },
            type: 'boolean',
            table: {
                type: { summary: 'boolean' },
                defaultValue: {
                    summary: 'false'
                }
            },
            description: 'Whether or not the notice is dismissed'
        },
        icon: {
            name: 'EbayIcon',
            description: 'The title content to be displayed.',
            table: {
                required: true,
                category: '@attribute tags',
                type: { summary: 'EbayIcon' },
                defaultValue: {
                    summary: 'lightbulb24'
                }
            }
        },
        title: {
            name: 'EbayEducationNoticeTitle',
            description: 'The title content to be displayed.',
            table: {
                required: true,
                category: '@attribute tags',
                type: { summary: 'EbayEducationNoticeTitle' }
            }
        },
        footer: {
            name: 'EbayEducationNoticeFooter',
            description:
                'The footer content to be displayed. Contains a button or link.',
            table: {
                category: '@attribute tags',
                type: { summary: 'EbayEducationNoticeFooter' }
            }
        }
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '3rem' }}>
                <Story />
            </div>
        )
    ]
}

export const Default: StoryObj<typeof EbayEducationNotice> = {
    render: (args) => {
        return (
            <EbayEducationNotice {...args}>
                <EbayIcon name="theEbayVault24" />
                <EbayEducationNoticeTitle>
                    Recommended title format
                </EbayEducationNoticeTitle>
                <EbayNoticeContent>
                    <p>
                        Follow the order below to optimize market valuation from
                        Price Guide. Player + Set or Season + Manufacturer +
                        Card number + Variant + Grader + Grade
                    </p>
                </EbayNoticeContent>
                <EbayEducationNoticeFooter>
                    Education footer
                </EbayEducationNoticeFooter>
            </EbayEducationNotice>
        )
    }
}

export const EducationNoticeOnlyTitle = {
    render: () => (
        <>
            <EbayEducationNotice>
                <EbayIcon name="car24" />
                <EbayEducationNoticeTitle>
                    Only With Title
                </EbayEducationNoticeTitle>
            </EbayEducationNotice>
        </>
    ),

    name: 'Only Title'
}

export const DefaultEducationNotice = {
    render: () => (
        <>
            <EbayEducationNotice
                educationIcon="lightbulb24"
                iconVariant="prominent"
            >
                <EbayEducationNoticeTitle>
                    Education notice title
                </EbayEducationNoticeTitle>
                <EbayNoticeContent>
                    <p>
                        Items you didn&apos;t win will now show in the{' '}
                        <a href="http://www.ebay.com">Didn&apos;t win</a>{' '}
                        section of this page.
                    </p>
                </EbayNoticeContent>
            </EbayEducationNotice>
        </>
    ),

    name: 'No Footer'
}

export const DefaultEducationNoticeFooter = {
    render: () => {
        return (
            <>
                <EbayEducationNotice
                    educationIcon="lightbulb24"
                    a11yDismissText="dismiss text"
                    onDismiss={}
                >
                    <EbayEducationNoticeTitle>
                        Education notice title
                    </EbayEducationNoticeTitle>
                    <EbayNoticeContent>
                        <p>
                            Items you didn&apos;t win will now show in the{' '}
                            <a href="http://www.ebay.com">Didn&apos;t win</a>{' '}
                            section of this page.
                        </p>
                    </EbayNoticeContent>
                </EbayEducationNotice>
            </>
        )
    },

    name: 'With dismiss button'
}

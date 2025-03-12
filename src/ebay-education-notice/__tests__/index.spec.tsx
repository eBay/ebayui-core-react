import React from 'react'
import { render } from '@testing-library/react'
import EbayIcon from '../../ebay-icon/icon'
import {
    EbayEducationNotice,
    EbayNoticeContent,
    EbayEducationNoticeTitle,
    EbayEducationNoticeFooter
} from '../index'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

describe('<EbayEducationNotice>', () => {
    it('should render notice snapshot', () => {
        const { asFragment } = render(
            <EbayEducationNotice a11yText="a11y notice">
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

        expect(asFragment()).toMatchSnapshot()
    })
    it('should render notice prominent snapshot', () => {
        const { asFragment } = render(
            <EbayEducationNotice
                variant="prominent"
                iconVariant="prominent"
                a11yDismissText="dismiss notice"
            >
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
            </EbayEducationNotice>
        )

        expect(asFragment()).toMatchSnapshot()
    })
    it('should no render without title', () => {
        expect(() => {
            render(
                <EbayEducationNotice
                    variant="prominent"
                    iconVariant="prominent"
                    a11yDismissText="dismiss notice"
                >
                    <EbayIcon name="theEbayVault24" />
                    <EbayNoticeContent>
                        <p>
                            Follow the order below to optimize market valuation
                            from Price Guide. Player + Set or Season +
                            Manufacturer + Card number + Variant + Grader +
                            Grade
                        </p>
                    </EbayNoticeContent>
                </EbayEducationNotice>
            )
        }).toThrow(
            'EbayEducationNoticeTitle: Please use a EbayEducationNoticeTitle that defines the content of the notice'
        )
    })

    it('onDismiss being fired', async () => {
        const onDismissMock = jest.fn()
        const { getByRole } = render(
            <EbayEducationNotice
                educationIcon="lightbulb24"
                a11yDismissText="notice dismiss"
                onDismiss={onDismissMock}
            >
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
            </EbayEducationNotice>
        )

        const dismissBtn = getByRole('button', { name: 'notice dismiss' })
        expect(dismissBtn).toBeInTheDocument()
        await act(async () => {
            await userEvent.click(dismissBtn)
        })

        expect(onDismissMock).toHaveBeenCalledTimes(1)
    })
})

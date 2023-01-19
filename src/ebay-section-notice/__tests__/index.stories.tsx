import React  from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '../../../.storybook/action'
import { EbayButton } from '../../ebay-button'
import { EbaySectionNotice, EbayNoticeContent, EbaySectionNoticeTitle, EbaySectionNoticeFooter } from '../index'

storiesOf(`ebay-section-notice`, module)

    .add(`Default message (with no action)`, () => (<>
        <EbaySectionNotice>
            <EbayNoticeContent>
                <p>
                    Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a> section
                    of this page.
                </p>
            </EbayNoticeContent>
        </EbaySectionNotice>
    </>))

    .add(`Default message (with action)`, () => (<>
        <EbaySectionNotice>
            <EbayNoticeContent>
                <p>
                    Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a> section
                    of this page.
                </p>
            </EbayNoticeContent>
            <EbaySectionNoticeFooter>
                <EbayButton onClick={action('Action Button Clicked')} className="fake-link">
                    Do something
                </EbayButton>
            </EbaySectionNoticeFooter>
        </EbaySectionNotice>
    </>))

    .add(`Confirmation message`, () => (<>
        <EbaySectionNotice status="confirmation">
            <EbayNoticeContent>
                <p>This successfully finished <a href="http://www.ebay.com">next page</a></p>
            </EbayNoticeContent>
            <EbaySectionNoticeFooter>
                <EbayButton onClick={action('Action Button Clicked')} className="fake-link">
                    Dismiss
                </EbayButton>
            </EbaySectionNoticeFooter>
        </EbaySectionNotice>
    </>))

    .add(`Information message`, () => (<>
        <EbaySectionNotice status="information">
            <EbayNoticeContent>
                <p>
                    <strong>Good news!</strong> You get free shipping on your next pair of shoes!&nbsp;
                    <a href="http://www.ebay.com">Learn more</a>.
                </p>
            </EbayNoticeContent>
            <EbaySectionNoticeFooter>
                <EbayButton onClick={action('Action Button Clicked')} className="fake-link">
                    Dismiss
                </EbayButton>
            </EbaySectionNoticeFooter>
        </EbaySectionNotice>
    </>))

    .add(`Attention message`, () => (<>
        <EbaySectionNotice status="attention">
            <EbayNoticeContent>
                <p>
                    <strong>Error.</strong> Please take another look at the following:
                    <br />
                    <a href="http://www.ebay.com">Card number</a>,
                    <a href="http://www.ebay.com">Expiration date</a> &amp;
                    <a href="http://www.ebay.com">Security code</a>.
                </p>
            </EbayNoticeContent>
            <EbaySectionNoticeFooter>
                <EbayButton onClick={action('Action Button Clicked')} className="fake-link">
                    Show more
                </EbayButton>
            </EbaySectionNoticeFooter>
        </EbaySectionNotice>
    </>))

    .add(`Section with title`, () => (<>
        <EbaySectionNotice>
            <EbayNoticeContent>
                <EbaySectionNoticeTitle>Title</EbaySectionNoticeTitle>
                <p>
                    Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a> section
                    of this page.
                </p>
            </EbayNoticeContent>
        </EbaySectionNotice>
    </>))

    .add(`Section with link`, () => (<>
        <EbaySectionNotice>
            <EbayNoticeContent>
                <EbaySectionNoticeTitle>Title</EbaySectionNoticeTitle>
                <p>
                    Items you didn&apos;t win will now show in the <a href="http://www.ebay.com">Didn&apos;t win</a> section
                    of this page.
                </p>
            </EbayNoticeContent>
            <EbaySectionNoticeFooter>
                <a href="https://www.ebay.com">Go see details</a>
            </EbaySectionNoticeFooter>
        </EbaySectionNotice>
    </>))

import React  from 'react'
import { storiesOf } from '@storybook/react'
import { EbayPageNotice, EbayNoticeContent, EbayPageNoticeTitle, EbayPageNoticeFooter } from '..'
import {EbayButton} from '../../ebay-button'

storiesOf(`ebay-page-notice`, module)

    .add(`Simple usage`, () => (<>
        <EbayPageNotice aria-label="Default">
            <EbayNoticeContent>text message</EbayNoticeContent>
        </EbayPageNotice>
    </>))

    .add(`Confirmation message`, () => (<>
        <EbayPageNotice status="confirmation" aria-label="Success">
            <EbayNoticeContent>
                <p>
                    <strong>Congrats!</strong>&nbsp;
                    You just listed <a href="#">Spam and Eggs From the Cows Perspective</a> (paperback).
                </p>
            </EbayNoticeContent>
        </EbayPageNotice>
    </>))

    .add(`Information message`, () => (<>
        <EbayPageNotice status="information" aria-label="Information">
            <EbayNoticeContent>
                <p>
                    <strong>Good news!</strong>&nbsp;
                    You get free shipping on your next pair of shoes! <a href="#">Learn more</a>.
                </p>
            </EbayNoticeContent>
        </EbayPageNotice>
    </>))

    .add(`Attention message`, () => (<>
        <EbayPageNotice status="attention" aria-label="Attention">
            <EbayNoticeContent>
                <p>
                    <strong>Error.</strong>&nbsp;
                    Please take another look at the following:<br />
                    <a href="#">Card number</a>, <a href="#">Expiration date</a> &amp; <a href="#">Security code</a>.
                </p>
            </EbayNoticeContent>
        </EbayPageNotice>
    </>))

    .add(`Message with footer`, () => (<>
        <EbayPageNotice status="confirmation" aria-label="Congratulations">
            <EbayNoticeContent>
                <EbayPageNoticeTitle>Your order&apos;s in!</EbayPageNoticeTitle>
                <p>We&apos;ll email updates to jonsnow@gmail.com. You should get it by Thu, Sept 22.</p>
            </EbayNoticeContent>
            <EbayPageNoticeFooter>
                <a href="https://ebay.com">Action</a>
            </EbayPageNoticeFooter>
        </EbayPageNotice>
    </>))

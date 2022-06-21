import React from 'react';
import { render } from '@testing-library/react';
import { initStoryshots } from '../../../config/jest/storyshots';
import { EbayNoticeContent, EbayPageNotice, EbayPageNoticeTitle } from '../';

jest.mock('../../common/random-id', () => ({ randomId: () => 'abc123' }))

describe('<EbayPageNotice>', () => {
    describe('when a page title exists', () => {
        it('should render the title within the notice content', () => {
            const noticeContentSelector = 'div.page-notice__main'
            const wrapper = render(
                <EbayPageNotice status="confirmation">
                    <EbayNoticeContent>
                        <EbayPageNoticeTitle>Here is the title</EbayPageNoticeTitle>
                        <p id="details">Here is some details</p>
                    </EbayNoticeContent>
                </EbayPageNotice>
            )
            expect(wrapper.container.querySelector(noticeContentSelector)).toBeTruthy()
            expect(wrapper.container.querySelector(`${noticeContentSelector} > p#details`)).toBeTruthy()
            expect(wrapper.getByText('Here is the title')).toBeTruthy()
        })
    })

    describe('when aria-label is given', () => {
        it('should add the text to the icon as an aria-label', () => {
            const wrapper = render(
                <EbayPageNotice status="confirmation" aria-label="Success Confirmation">
                    <EbayNoticeContent>
                        <p>You did it.</p>
                    </EbayNoticeContent>
                </EbayPageNotice>
            )
            expect(wrapper.container.querySelector('svg')).toHaveAttribute('role', 'img')
        })
    })

    describe('on using the notice with no content', () => {
        it('should throw an error', () => {
            jest.spyOn(console, 'error').mockImplementation(() => null)
            expect(() => {
                render(<EbayPageNotice />)
            }).toThrowError(`EbayPageNotice: Please use a EbayNoticeContent that defines the content of the notice`);
            (console.error as jest.Mock).mockRestore()
        })
    })
})

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
})

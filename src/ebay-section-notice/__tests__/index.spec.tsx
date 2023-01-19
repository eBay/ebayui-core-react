import React from 'react';
import { render } from '@testing-library/react';
import { initStoryshots } from '../../../config/jest/storyshots';
import { EbayButton } from '../../ebay-button'
import { EbayNoticeContent, EbaySectionNotice } from '../index';

describe('<EbaySectionNotice>', () => {
    describe('when a button is added in the children of the main section notice', () => {
        it('should render the button as well as the notice content', () => {
            const wrapper = render(
                <EbaySectionNotice>
                    <EbayNoticeContent>
                        <p id="content">Here is some content</p>
                    </EbayNoticeContent>
                    <EbayButton id="actionButton">Action</EbayButton>
                </EbaySectionNotice>
            )

            expect(wrapper.getByText('Here is some content')).toBeTruthy()
            expect(wrapper.getByRole('button').textContent).toContain('Action')
        })
    })

    describe('when aria-label is given', () => {
        it('should set SVG role=`img`', () => {
            const wrapper = render(
                <EbaySectionNotice status="confirmation" aria-label="Success Confirmation">
                    <EbayNoticeContent>
                        <p>You did it.</p>
                    </EbayNoticeContent>
                </EbaySectionNotice>
            )
            expect(wrapper.container.querySelector('svg')).toHaveAttribute('role', 'img')
        })

        it('should add the text to the main section as an aria-label if there is no status', () => {
            const wrapper = render(
                <EbaySectionNotice aria-label="Success Confirmation">
                    <EbayNoticeContent>
                        <p>You did it.</p>
                    </EbayNoticeContent>
                </EbaySectionNotice>
            )

            expect(wrapper.getByRole('region')).toHaveAttribute('aria-label', 'Success Confirmation')
        })
    })

    describe('on using the notice with no content', () => {
        it('should throw an error', () => {
            jest.spyOn(console, 'error').mockImplementation(() => null)
            expect(() => {
                render(<EbaySectionNotice />)
            }).toThrowError(`EbaySectionNotice: Please use a EbayNoticeContent that defines the content of the notice`);
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

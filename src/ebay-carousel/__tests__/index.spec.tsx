import React from 'react'
import requireContext from 'node-require-context'
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayCarouselItem, EbayCarousel } from "../index";
import { render, screen, cleanup } from "@testing-library/react";

// NOTE: need to mock scrollTo since JSDOM does not support it
jest.mock('../scroll-to-transition')

const items = Array(8).fill(0).map((_, i) => (
    <EbayCarouselItem key={i}>
        Item Text {i + 1}
    </EbayCarouselItem>
))

// Testing current slide or items per slides is not possible
// because we are using `getBoundingClientRect()` and when testing it returns 0 everytime
describe('<EbayCarousel />', () => {
    const a11yPreviousText = 'Previous Slide';
    const a11yNextText = 'Next Slide';

    beforeEach(() => {
        render(<EbayCarousel
        a11yPreviousText={a11yPreviousText}
        a11yNextText={a11yNextText}>
            {items}
        </EbayCarousel>)
    });

    afterEach(cleanup);

    it('shows the passed carousel items', () => {
        const visibleItems = screen.getAllByRole('listitem').filter(item => item.getAttribute("aria-hidden"))
        expect(visibleItems.length).toBe(8)

    })

    it('shows navigation sliding buttons', () => {
        const prevButton = getPrevSlideButton()
        const nextButton = getNextSlideButton()
        expect(prevButton).toBeInTheDocument()
        expect(prevButton).toHaveAttribute("class", "carousel__control carousel__control--prev")
        expect(nextButton).toBeInTheDocument()
        expect(nextButton).toHaveAttribute("class", "carousel__control carousel__control--next")
    })

    function getPrevSlideButton() {
        return screen.getByRole('button', { name: a11yPreviousText });
    }

    function getNextSlideButton() {
        return screen.getByRole('button', { name: a11yNextText });
    }
})

initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }
});

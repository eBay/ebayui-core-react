import React from 'react'
import { render } from '@testing-library/react';
import { EbayStarRating } from '../'

const htmlSnap =(ui: React.ReactElement): void => {
    const { asFragment } = render(ui);
    expect(asFragment()).toMatchSnapshot();
}
describe('star-rating-select', () => {
    it('renders defaults', async () => {
        await htmlSnap(<EbayStarRating value="3-5" />);
    });

    it('renders basic fieldset', async () => {
        await htmlSnap(<EbayStarRating />);
    });

    it('renders with 0 selected', async () => {
        await htmlSnap(<EbayStarRating value={0} a11yText="star rating"/> );
    });

    it('renders with 2 selected', async () => {
        await htmlSnap(<EbayStarRating value={2} a11yText="star rating"/>);
    });

    it('renders with 5 selected', async () => {
        await htmlSnap(<EbayStarRating value={5}/>);
    });
});

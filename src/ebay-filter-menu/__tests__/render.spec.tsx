import React from 'react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
import { render } from '@testing-library/react';

const { Default, WithSearch, WithFooterButton } = composeStories(stories);

describe('<EbayFilterMenu /> rendering', () => {
    it('renders Default story correctly', () => {
        const { container } = render(<Default />);
        expect(container).toMatchSnapshot();
    });

    it('renders WithSearch story correctly', () => {
        const { container } = render(<WithSearch />);
        expect(container).toMatchSnapshot();
    });

    it('renders WithFooterButton story correctly', () => {
        const { container } = render(<WithFooterButton />);
        expect(container).toMatchSnapshot();
    });
});

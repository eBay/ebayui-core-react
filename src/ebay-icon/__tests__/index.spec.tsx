import React from 'react'
import { render } from '@testing-library/react'
import { composeStory } from '@storybook/react';
import Meta, { AllIcons, CustomColor, Non_Decorative } from './index.stories';

const AllIconsStory = composeStory(AllIcons, Meta);
const CustomColorStory = composeStory(CustomColor, Meta);
const Non_DecorativeStory = composeStory(Non_Decorative, Meta);

jest.mock('../../common/random-id', () => ({ randomId: () => 'abc123' }))

describe('ebay-icon rendering', () => {
    describe('AllIcons story', () => {
        it('renders icons correctly', () => {
            const { container } = render(<AllIconsStory />);
            const [icon] = container.querySelectorAll('svg');
            expect(icon).toHaveAttribute('aria-hidden', 'true');
            expect(icon).toHaveClass('icon icon--add-16');
            expect(icon).toHaveAttribute('focusable', 'false');
            const useElement = icon.querySelector('use');
            expect(useElement).toHaveAttribute('xlink:href', '#icon-add-16');
        })
    })

    describe('CustomColor story', () => {
        it('renders icon correctly', () => {
            const { container } = render(<CustomColorStory />);
            const [_, iconClass, iconStyle] = container.querySelectorAll('svg');
            expect(iconClass).toHaveClass('icon demo3');
            expect(iconStyle).toHaveAttribute('style', 'color: green;');
        })
    })

    describe('Non_Decorative story', () => {
        it('renders icon correctly', () => {
            const { container } = render(<Non_DecorativeStory />);
            const [iconConfirmation, iconAttention] = container.querySelectorAll('svg');

            expect(iconConfirmation).toHaveClass('icon');
            expect(iconConfirmation).toHaveAttribute('aria-labelledby', 'icon-title-abc123');
            const title = iconConfirmation.querySelector('title');
            expect(title).toHaveAttribute('id', 'icon-title-abc123');

            expect(iconAttention).toHaveClass('icon');
            expect(iconAttention).toHaveAttribute('aria-label', 'Attention');
        })
    })
})

import React from 'react'
import { EbayStarRating } from '../'


export default {
    component: EbayStarRating,
    title: 'ebay-star-rating',
    argTypes: {
        value: {
            control: { type: 'select' },
            options: ['0', '0-5', '1', '1-5', '2', '2-5', '3', '3-5', '4', '4-5', '5'],
            description:
                'How many stars are selected, "1" - "5". If "0" or null defaults to no stars selected. Can use "2-5" for 2 and a half stars',
        },
        a11yText: {
            description: 'The aria label for the outer container.',
        },
    },
};

export const DynamicStars = (args) => (<EbayStarRating {...args} />)

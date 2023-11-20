import React from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import { EbayCarousel, EbayCarouselItem, CarouselProps } from '../index';

const story: ComponentMeta<typeof EbayCarousel> = {
  component: EbayCarousel,
  title:'ebay-carousel',
    argTypes: {
        gap: {
            control: { type: 'number' },
            type: { name: "number", required: false },
            defaultValue: 16,
            name: 'gap',
            description: 'override the margin between carousel items in pixels'
        },
      itemsPerSlide: {
          control: { type: 'number' },
          type: { name: "number", required: false },
          description: 'automatically fit a number of items for each carousel slide and enable slide controls. If set to a whole number, will default to x.1 where x is the whole number set.'
      },
      index: {
          control: { type: 'number' },
          type: { name: "number", required: false },
          name: 'index',
          description: '0-based index position'
      },
      onSlide: { action: 'onSlide'},
        onPrevious: { action: 'onPrevious'},
        onNext: { action: 'onNext'},
        onScroll: { action: 'onScroll'}
    },
};

const items = Array(10).fill(0).map((_, i) => (
    <EbayCarouselItem style={{
        color: "#0a1c6b",
        background: "#c2f5ff",
        fontSize: "24px",
        fontWeight: "bold",
        width: "200px",
        height: "120px",
        lineHeight: "120px",
        textAlign: "center"
    }} className="demo-card" key={i}>
        Item {i + 1}
    </EbayCarouselItem>
))

export const Continuous = (args) => {
  return (
    <EbayCarousel {...args}>
        {items}
    </EbayCarousel>
  );
};

const _ItemsPerSlide: Story<CarouselProps> = (args) => {
    return (
        <EbayCarousel gap={16} {...args}>
            {items}
        </EbayCarousel>
    );
};

export const ItemsPerSlide = _ItemsPerSlide.bind({})
ItemsPerSlide.args = {
    itemsPerSlide: 3
}


export default story;

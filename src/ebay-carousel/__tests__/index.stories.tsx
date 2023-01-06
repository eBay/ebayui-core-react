import React from 'react'
import {EbayCarousel, EbayItem} from "../index";
import {ComponentMeta } from "@storybook/react";

const story: ComponentMeta<typeof EbayCarousel> = {
  component: EbayCarousel,
  title:'ebay-carousel',
    argTypes: {
      itemsPerSlide: {
          control: { type: 'number' },
          description: 'automatically fit a number of items for each carousel slide and enable slide controls. If set to a whole number, will default to x.1 where x is the whole number set.'
      },
      index: {
          control: { type: 'number' },
          name: 'index',
          description: '0-based index position'
      }
    }
};

const items = Array(10).fill(0).map((_, i) => (
    <EbayItem style={{
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
    </EbayItem>
))

export const _Default = () => {
  return (
    <EbayCarousel gap={16}>
        {items}
    </EbayCarousel>
  );
};

export const ItemsPerSlide = (args) => {
    return (
        <EbayCarousel gap={16} itemsPerSlide={3} {...args}>
            {items}
        </EbayCarousel>
    );
};


export default story;

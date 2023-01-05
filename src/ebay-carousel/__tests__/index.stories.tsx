import React from 'react'
import {EbayCarousel, EbayItem} from "../index";

const story: any = {
  component: EbayCarousel,
  title:'ebay-carousel'
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
    <EbayCarousel gap={16} itemsPerSlide={3}>
        {items}
    </EbayCarousel>
  );
};


export default story;

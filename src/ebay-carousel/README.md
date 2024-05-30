# EbayCarousel

## Demo
[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/navigation-disclosure-ebay-carousel--continuous)

## Usage

```jsx
<EbayCarousel>
    <CarouselItem>
        Item 1
    </CarouselItem>
</EbayCarousel>
```

## Attributes

Name | Type    | Stateful | Required | Description
--- |---------|----------| --- | ---
`gap` | Number  | Yes      | No | margin between carousel items in pixels.
`index` | Number  | Yes      | No | 0 - based index position. It sets the current slide to be displayed
`itemsPerSlide` | Number  | Yes      | No | number of items for each carousel slide and enable slide controls. If set to a whole number, will default to x.1 where x is the whole number set.
`a11yPreviousText` | String  | No       | Yes | A11y text for previous button and mask.
`a11yNextText` | String  | No       | Yes | A11y text for next button and mask.

## Events

Event | Data  | Description
--- |-------| ---
`onNext` | Event | Trigggered when next slide button is clicked
`onPrevious` | Event | Triggered when previous slide button is clicked
`onScroll` | Event | Triggered when scrolling slides
`onSlide` | Event | new slide is navigated to (by controls or API)


## CarouselItem
Will render slides content

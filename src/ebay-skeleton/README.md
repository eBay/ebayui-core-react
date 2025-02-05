# EbaySkeleton

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/building-blocks-ebay-skeleton--docs)

## Import JS

```jsx harmony
import {
    EbaySkeleton,
    EbaySkeletonAvatar,
    EbaySkeletonButton,
    EbaySkeletonImage,
    EbaySkeletonText,
    EbaySkeletonTextbox,
} from "@ebay/ui-core-react/ebay-skeleton";
```

## Import following styles from SKIN

```js
import "@ebay/skin/skeleton";
```

## Import styles using SCSS/CSS

```js
import "@ebay/skin/skeleton.css";
```

## Usage

```jsx
<EbaySkeleton aria-label="Loading...">
    <EbaySkeletonImage style={{ width: "220px", height: "220px" }} />
    <EbaySkeletonText multiline />
</EbaySkeleton>
```

## Attributes

### EbaySkeleton

| Name    | Type   | Required | Description                                        |
| ------- | ------ | -------- | -------------------------------------------------- |
| `color` | string | No       | Color of the Skeleton, `purple`, `green` or `blue` |

### EbaySkeletonAvatar

| Name | Type   | Required | Description                                            |
| ---- | ------ | -------- | ------------------------------------------------------ |
| `as` | string | No       | Attribute to define the element to use `div` or `span` |

### EbaySkeletonButton

| Name   | Type   | Required | Description                                            |
| ------ | ------ | -------- | ------------------------------------------------------ |
| `as`   | string | No       | Attribute to define the element to use `div` or `span` |
| `size` | string | No       | size of the button can be `small` or `large`           |

### EbaySkeletonImage

| Name | Type   | Required | Description                                            |
| ---- | ------ | -------- | ------------------------------------------------------ |
| `as` | string | No       | Attribute to define the element to use `div` or `span` |

### EbaySkeletonText

| Name        | Type    | Required | Description                                            |
| ----------- | ------- | -------- | ------------------------------------------------------ |
| `as`        | string  | No       | Attribute to define the element to use `div` or `span` |
| `multiline` | boolean | No       | Attribute to define the text as multiline              |
| `size`      | string  | No       | size of the text can be `small` or `large`             |

### EbaySkeletonTextbox

| Name | Type   | Required | Description                                            |
| ---- | ------ | -------- | ------------------------------------------------------ |
| `as` | string | No       | Attribute to define the element to use `div` or `span` |

## Examples

### Composite

```jsx
<EbaySkeleton color={color} style={{ width: "300px" }}>
    <div>
        <EbaySkeletonAvatar as="span" />
        <EbaySkeletonText
            multiline={multiline}
            as="span"
            size={size}
            style={{ width: "220px", verticalAlign: "top" }}
        />
    </div>
    <EbaySkeletonButton size={size} />
</EbaySkeleton>
```

### Tile

```jsx
<EbaySkeleton color={color} style={{ width: "220px" }}>
    <EbaySkeletonImage style={{ width: "220px", height: "220px" }} />
    <EbaySkeletonText multiline={multiline} size={size} />
</EbaySkeleton>
```

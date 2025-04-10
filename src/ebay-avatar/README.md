# EbayAvatar

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/docs/graphics-icons-ebay-avatar--docs)

## Usage

### Import JS

```jsx harmony
import { EbayAvatar } from "@ebay/ui-core-react/ebay-avatar";
```

### Import following styles from SKIN

```jsx harmony
import "@ebay/skin/avatar";
```

### If tokens haven't been added to the project at a higher level, make sure to import

```jsx harmony
import "@ebay/skin/tokens";
```

### Or import styles using SCSS/CSS

```jsx harmony
import "@ebay/skin/avatar.css";
```

```jsx harmony
<EbayAvatar username="Joe" />
```

## Attributes

| Name               | Type   | Required | Description                                                                                                                                                                                                                                                         | Data |
| ------------------ | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| `size`             | Number | No       | The pixel size of the avatar. Can only be specific sizes                                                                                                                                                                                                            |      |
| `color`            | String | No       | The color to color the background. This can be only used in the non icon/image case. This is used simply as an override to the username hash                                                                                                                        |      |
| `username`         | String | No       | The username to display. If there is no body, then this will deternmine what the content is. If there is no username passed, then user is signed out. Based on the username, the icon will change colors and show the first letter if there is no user profile pic. |      |
| `knownAspectRatio` | Number | No       | Optional, as aspect ratio will be calculated when the image loads on the client. This can be passed to help prevent a flash of incorrectly styled content before the image loads                                                                                    |      |

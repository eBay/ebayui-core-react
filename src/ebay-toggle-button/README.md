# EbayToggleButton

## Demo

[Storybook](https://opensource.ebay.com/ebayui-core-react/main/?path=/story/buttons-ebay-toggle-button--docs)

## Install

```
yarn add @ebay/ui-core-react @ebay/skin
```

## Usage

```
import React from 'react'
import { EbayToggleButton } from '@ebay/ui-core-react/ebay-toggle-button'
import '@ebay/skin/toggle-button'

export const Example = () => (
    <EbayToggleButton
        pressed={isPressed}
        onToggle={() => setIsPressed(!isPressed)}
        title='Button 1'
        subtitle='subtitle'
    ></EbayToggleButton>
```

## EbayToggleButton Props

| Name         | Type     | Required | Description                                                      |
| ------------ | -------- | -------- | ---------------------------------------------------------------- |
| `layoutType` | enum     | No       | Can be `minimal` (default), `list` or `gallery`                  |
| `title`      | string   | No       | Title attribute for the button                                   |
| `subtitle`   | string   | No       | Subtitle attribute for the button                                |
| `pressed`    | boolean  | Yes      | Pressed state of the button                                      |
| `icon`       | enum     | No       | EbayIcon name                                                    |
| `img`        | object   | No       | Image obj for the component                                      |
| `onToggle`   | Function | No       | Triggered when the button is toggled: { originalEvent, pressed } |

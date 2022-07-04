# ebay-field

## Demo
[Storybook](https://opensource.ebay.com/ebayui-core-react/master/?path=/story/ebay-field--default-inline)

## Import JS
```jsx harmony
import { EbayField, EbayLabel, fieldLayoutType, EbayFieldDescription, fieldDescriptionType, fieldDescriptionPosition } from '@ebay/ebayui-core-react/ebay-field';
```
## Import following styles from SKIN
```jsx harmony
import '@ebay/skin/src/less/field/ds6/field';
```
## Import styles using SCSS/CSS
```jsx harmony
import '@ebay/skin/dist/field/ds6/field.css'
```
## Usage
```
yarn add @ebay/ebayui-core-react
```
```jsx harmony
 <EbayField layout={fieldLayoutType.BLOCK}>
    <EbayLabel stacked htmlFor="field1">Label 1</EbayLabel>
    <EbayTextbox placeholder="placeholder text" id="field1" />
    <EbayFieldDescription
        type={fieldDescriptionType.CONFIRMATION}
        position={fieldDescriptionPosition.BELOW_FIELD}>
            Some description Text
    </EbayFieldDescription>
</EbayField>
```

## EbayField Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`layout` | String | No | No | `fieldLayoutType.BLOCK`, `fieldLayoutType.inline` (default)

## EbayLabel Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`stacked` | Boolean | No | No | display label above the field if true
`required` | Boolean | No | No | indicates the field is required if true
`position` | String | No | No | `start` (default) or `end` position towards the input

## EbayFieldDescription Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`type` | String | No | No | `fieldDescriptionType.CONFIRMATION`, `fieldDescriptionType.DEFAULT`(Default), `fieldDescriptionType.ATTENTION`, `fieldDescriptionType.INFORMATION`
`position` | String | No | No | `fieldDescriptionPosition.BELOW_FIELD` (Default), `fieldDescriptionPosition.INLINE`

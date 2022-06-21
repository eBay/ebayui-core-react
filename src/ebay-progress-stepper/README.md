# ebay-progress-stepper

## Demo

[Storybook](https://pages.github.com/eBay/ebayui-core-react/master/?path=/story/ebay-progress-stepper--default)

## Usage

```
yarn add @ebay/ebayui-core-react
```

## Import JS

```jsx harmony
import { EbayProgressStepper, EbayProgressStep as Step } from '@ebay/ebayui-core-react/ebay-progress-stepper'
```

### Import styles from Skin

```jsx
import '@ebay/skin/stepper'
```

```jsx
<EbayProgressStepper>
    <Step>Started</Step>
    <Step>Shipped</Step>
    <Step current>Transit</Step>
    <Step>Delivered</Step>
</EbayProgressStepper>
```

## Components

### EbayProgressStepper

This is the container of the wizard stepper and you can define the direction of the stepper and pass properties to
customize the layout (`className` or `style`)

#### Props

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`direction` | String | No | No | Either `column` or `row` (default). Will display stepper as a vertical column or horizontal row.
`defaultState` | String | Yes | No | Either `complete`, `upcoming` or `active` (default). Defines the default state for all steps.

### EbayProgressStep

This component is used to render each step. It renders an icon, a title and a text label.

#### Props

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`current` | Boolean | No | No | The current step. Only first step that has this property will be considered current. All steps before will be rendered as complete, and all after will render as upcoming. If not present on any step, then will render based on `defaultState` property
`type` | String | No | No | Either `attention`, `information`, or `complete`. This takes prescedence over current. Will render the current step with the given icon and color
`number` | Number | No | No | Renders the current step with the given number. Overrides the default number counting for this step

### EbayProgressTitle

The bolded title for each step. Will be rendered in an `h4` by default.

#### Props

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`as` | String | No | No | HTML tag to use instead of `h4`

#### Example

```jsx
<EbayProgressStepper>
    <EbayProgressStep>
        <EbayProgressTitle>Started</EbayProgressTitle>
        July 3rd
    </EbayProgressStep>

    <EbayProgressStep current>
        <EbayProgressTitle>Shipped</EbayProgressTitle>
        July 4th
    </EbayProgressStep>
</EbayProgressStepper>
```

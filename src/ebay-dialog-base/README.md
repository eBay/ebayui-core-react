# DialogBase

## DialogBase Usage

```react
<DialogBase
    open
    a11yClosetext = "Close DialogBase"
    onCloseBtnClick={ handleCloseBtnClick }>

        <h1>Hello World</h1>

</DialogBase>
```

## Attributes

Name | Type | Stateful | Required | Description
--- | --- | --- | --- | ---
`baseEl`  | string| No | No | ---  div' , 'span', 'aside'
`open` | Boolean | Yes | No | Whether drawer is open.
`classPrefix` | drawer or toast or dialog | No | No | "" (default) / modifies the base prefix for all  classes in the component
`windowClass` | String | No | No | "" (default) / modifies the base prefix for all Skin classes in the component
`header` | String | No | No | element placeholder
`footer` | String | No | No | element placeholder
`isModal` | Boolean | No | No | Whether drawer is model.
`top` | --- | --- | --- | ---
`buttonPosition` | string | --- | --- | top or right or bottom or left
`a11yCloseText`| String | No | Yes | A11y text for close button and mask.
`animated` | Boolean | Yes | No | Renders the dialog with an animation. Note that the dialog will always be present in the DOM

## Events

Event | Data | Description
`onCloseBtnClick` | --- | --- | --- | ---
`OnBackgroundClick` | --- | --- | --- | ---

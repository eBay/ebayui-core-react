# ebayui-core-react

eBayUI React components

[Demo](https://opensource.ebay.com/ebayui-core-react/main)

### Requirements

* [Node.js](https://nodejs.org/en/) (v16.14+)
* [React](https://reactjs.org/) (v16.8+)
* [eBay Skin](https://ebay.github.io/skin/) (v15)

### eBayUI Components
* [ ] `ebay-3d-viewer`
* [x] [ebay-alert-dialog](src/ebay-alert-dialog)
* [x] [ebay-confirm-dialog](src/ebay-confirm-dialog)
* [x] [ebay-badge](src/ebay-badge)
* [x] [ebay-breadcrumbs](src/ebay-breadcrumbs)
* [x] [ebay-button](src/ebay-button)
* [ ] `ebay-carousel` (in progress...)
* [x] [ebay-checkbox](src/ebay-checkbox)
* [ ] `ebay-combobox`
* [ ] `ebay-confirm-dialog`
* [x] [ebay-cta-button](src/ebay-cta-button)
* [ ] `ebay-details`
* [x] [ebay-drawer-dialog](src/ebay-drawer-dialog)
* [x] [ebay-eek](src/ebay-eek)
* [x] [ebay-fullscreen-dialog](src/ebay-fullscreen-dialog)
* [ ] `eebay-fake-link`
* [ ] `ebay-fake-menu` (in progress...)
* [ ] `ebay-fake-menu-button` (in progress...)
* [ ] `ebay-fake-tabs`
* [x] [ebay-field](src/ebay-field)
* [ ] `ebay-filter` (in progress...)
* [ ] `ebay-filter-menu`
* [ ] `ebay-filter-menu-button`
* [ ] `ebay-icon-button`
* [x] [ebay-icon](src/ebay-icon)
* [x] [ebay-infotip](src/ebay-infotip)
* [x] [ebay-inline-notice](src/ebay-inline-notice)
* [x] [ebay-lightbox-dialog](src/ebay-lightbox-dialog)
* [x] [ebay-listbox-button](src/ebay-listbox-button)
* [ ] `ebay-listbox`
* [x] [ebay-menu] (src/ebay-menu)
* [ ] `ebay-menu-button` (in progress...)
* [x] [ebay-page-notice](src/ebay-page-notice)
* [x] [ebay-pagination](src/ebay-pagination)
* [x] [ebay-panel-dialog](src/ebay-panel-dialog)
* [ ] `ebay-program-badge`
* [x] [ebay-progress-bar](src/ebay-progress-bar)
* [x] [ebay-progress-spinner](src/ebay-progress-spinner)
* [x] [ebay-progress-stepper](src/ebay-progress-stepper)
* [x] [ebay-radio](src/ebay-radio)
* [x] [ebay-section-title](src/ebay-section-title)
* [x] [ebay-section-notice](src/ebay-section-notice)
* [x] [ebay-select](src/ebay-select)
* [ ] `ebay-snackbar-dialog`
* [ ] `ebay-split-button`
* [ ] `ebay-star-rating`
* [ ] `ebay-star-rating-select`
* [x] [ebay-switch](src/ebay-switch)
* [x] [ebay-signal](src/ebay-signal)
* [x] [ebay-tabs](src/ebay-tabs)
* [x] [ebay-textbox](src/ebay-textbox)
* [x] [ebay-toast-dialog](src/ebay-toast-dialog)
* [x] [ebay-tooltip](src/ebay-tooltip)
* [ ] `ebay-tourtip`
* [ ] `ebay-tri-state-checkbox`
* [ ] `ebay-video`

## Getting Started

These react components are available as `@ebay/ui-core-react` package on [NPM](https://npmjs.org/@ebay/ui-core-react).

Use npm or yarn to add the package dependency to your project:

```sh
yarn add @ebay/ui-core-react
```

### for quick development/POC
```jsx
import { EbayTextbox, EbayButton } from '@ebay/ui-core-react'

<EbayTextbox placeholder="Enter text here" />
<EbayButton>Submit</EbayButton>
```

### for smaller bundle size
```jsx harmony
import { EbayTextbox } from '@ebay/ui-core-react/ebay-textbox'
import { EbayButton } from '@ebay/ui-core-react/ebay-button'

<EbayTextbox placeholder="Enter text here" />
<EbayButton>Submit</EbayButton>
```

### Notes
If you render children components dynamically and don't want to get React `key` warnings then provide a `key`:
```jsx harmony
<EbayParentComponent>
    {items.map((item, index) => <EbayChildComponent key={index}>{item}</EbayChildComponent>)}
</EbayParentComponent>
```

#### IE-10/11 (deprecated)
You will need polyfills for IE. Recommended approach is using `core-js` with or without `babel`.

To manually use polyfills you need to import them:
```js
import 'core-js/stable/object/values'

Object.values({ a: 'Hello' }).map(console.log)
```

But we suggest to use polyfills automatically by editing your `.babelrc`:
```json
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage",
                "corejs": "3",
                "targets": {
                    "chrome": "63",
                    "safari": "12",
                    "ios": "12",
                    "edge": "18",
                    "ie": "11"
                }
            }
        ]
    ]
}
```
`targets` can also be something like "> 0.2%, not dead"


### Issues

Create an issue on github

## Contributing

Write an email to tmanyanov@ebay.com

### How to update icons on `skin` changes
This will update `EbaySvg` and `EbayIcon` components:
```shell script
yarn update-icons
```

### Quick guidance for contribution:

- Create a feature branch `git checkout -b features/new-component`
- `yarn install` to install dependencies
- Add documentations:
  * `README.md` on component level
  * Unit test
  * Storybook file for snapshot tests and also component showcase/demo
- Make your changes pass the:
  * `yarn lint`. You can do `yarn lint --fix` to automatically fix small lint issues (e.g indentation, whitespace, semicolons, ...)
  * `yarn test`. Do `yarn test -u` to automatically the snapshot tests.


### Requirements for new component

If you implement a new component, make sure that it complies with eBay UI guidelines:
  * [Skin](https://ebay.github.io/skin/)
  * [MIND pattern](https://ebay.gitbook.io/mindpatterns/) for accessibility

One way to comply those guidelines is to implement your new component as similiar as possible with the Marko [eBayUI Core](https://github.com/eBay/ebayui-core), or port the Marko implementation to React. This means the new component should:

  * Output the same HTML structure
  * Have similiar behaviour (e.g open menu dropdown on click and keyboard)
  * Support the same attributes (e.g ebay-breadcrumb `a11y-heading-text`, or ebay-button `priority`)
  * Support the same events (e.g ebay-select `select-change`). Since React does not use event emitter (unlike Marko), one can implement this as a prop with Function.

## Changelog

`@ebay/ui-core-react`
### version 2.x (Skin 15)

`@ebay/ebayui-core-react`
### version 10.x (Skin 14)
### version 9.x (skin 13)

`ebayui-core-react`
### version 8.x (skin 12)
### version 6.x (skin 10)
### version 5.x (removed less, changed imports to minimize bundle size)
### version 3.x (skin 9, react 16.8 with hooks support)
### version 2.x (skin 7, react 16.7)
### legacy


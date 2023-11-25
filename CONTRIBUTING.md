# Contributing

## If you have questions

Write an email to tmanyanov@ebay.com

## How to update icons on skin changes

This will update `EbaySvg` and `EbayIcon` components:
```shell script
yarn update-icons
```

## Quick guidance for contribution:

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

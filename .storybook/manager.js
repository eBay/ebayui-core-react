import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'
import { version } from '../package.json'

addons.setConfig({
    theme: create({
        base: "light",
        brandTitle: `eBayUI Core React v.${version}`
    }),
});

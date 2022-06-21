// Workaround for addon-jsx + addon-actions
// from https://github.com/storybookjs/addon-jsx/issues/30

import { action as addonAction } from '@storybook/addon-actions'

export const action = (name: string, options?: any) => {
    const namedAction = addonAction(name, options)

    namedAction.toString = () => `action('${name}')`

    return namedAction
}

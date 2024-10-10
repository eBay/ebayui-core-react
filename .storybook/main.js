const { resolve } = require('path')

module.exports = {
    stories: ['../src/**/__tests__/*.stories.tsx'],
    typescript: {
        check: false,
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
            propFilter: () => true,
        },
    },
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        {
            name: '@storybook/addon-storysource',
            options: {
                rule: {
                    test: [/\.stories\.tsx?$/],
                    include: [resolve(__dirname, '../src')],
                },
                loaderOptions: {
                    injectStoryParameters: false,
                    prettierConfig: { printWidth: 80 },
                },
            },
        },
    ],

    framework: {
        name: '@storybook/react-vite',
        options: {}
    },

    docs: {
        autodocs: true
    },

    core: {
        disableTelemetry: true,
        disableWhatsNewNotifications: true,
    }
}

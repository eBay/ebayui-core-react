module.exports = {
    stories: ['../src/**/__tests__/*.stories.tsx'],
    addons: ['@storybook/addon-essentials', '@storybook/addon-knobs', 'storybook-addon-jsx', '@storybook/addon-a11y'],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                }
            ]
        })
        config.resolve.extensions.push('.ts', '.tsx')

        // Remove storybook css predefined webpack rule and use custom rule
        config.module.rules = config.module.rules.filter(rule => !rule?.test?.test?.('.css'))
        config.module.rules.push({
            test: /\.css$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
        })

        return config
    }
}

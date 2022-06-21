import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
})

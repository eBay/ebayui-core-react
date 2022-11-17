import React from 'react'
import { initStoryshots } from '../../../config/jest/storyshots'

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
})

import { initStoryshots } from '../../../config/jest/storyshots'

jest.mock('../../common/random-id', () => ({ randomId: () => 'abc123' }))

initStoryshots({
    config: ({ configure }) =>
        configure(() => {
            require('./index.stories')
        }, module)
})

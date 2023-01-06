import React from 'react'
import requireContext from 'node-require-context'
import { initStoryshots } from '../../../config/jest/storyshots'

// NOTE: need to mock scrollTo since JSDOM does not support it
jest.mock('../scroll-to-transition');

initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }
});

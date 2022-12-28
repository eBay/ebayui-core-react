import requireContext from 'node-require-context'
import { initStoryshots } from '../../../config/jest/storyshots'

initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }
});

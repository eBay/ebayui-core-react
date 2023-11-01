import initStoryshots from '@storybook/addon-storyshots'
import requireContext from 'node-require-context'


initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }
});
import React from 'react'
import requireContext from 'node-require-context'

import { render } from '@testing-library/react';
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayCtaButton } from '../index'

initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }

})

describe('<EbayCtaButton>', () => {
    describe('on passing a ref', () => {
        it('should set the ref to a element', () => {
            const ref = React.createRef() as any
            render(<EbayCtaButton href="https://www.ebay.com" ref={ref} />)

            expect(ref.current.tagName).toBe('A')
        })
    })
})

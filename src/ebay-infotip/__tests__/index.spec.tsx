import React from 'react'
import requireContext from 'node-require-context'
import { render, fireEvent, RenderResult } from '@testing-library/react'
import { initStoryshots } from '../../../config/jest/storyshots'
import { EbayInfotip, EbayInfotipContent, EbayInfotipHeading, EbayInfotipHost, EbayInfotipProps } from '../index'

jest.mock('../../common/random-id', () => ({ randomId: () => 'abc123' }))

const renderComponent = (props?: Partial<EbayInfotipProps>) => render(
    <EbayInfotip a11yCloseText="Close" {...props}>
        <EbayInfotipHeading>Title</EbayInfotipHeading>
        <EbayInfotipContent>
            <p>Info content</p>
        </EbayInfotipContent>
    </EbayInfotip>
)

const checkIsExpanded = (wrapper: RenderResult) => {
    expect(wrapper.container.querySelector('.infotip--expanded')).toBeInTheDocument()
    expect(wrapper.container.querySelector('button[aria-expanded=true]')).toBeInTheDocument()
}

const checkIsCollapsed = (wrapper: RenderResult) => {
    expect(wrapper.container.querySelector('.infotip--expanded')).not.toBeInTheDocument()
    expect(wrapper.container.querySelector('button[aria-expanded=true]')).not.toBeInTheDocument()
}

describe('<EbayInfotip>', () => {
    describe('on infotip button click', () => {
        it('should expand the infotip', () => {
            const wrapper = renderComponent()
            fireEvent.click(wrapper.container.querySelector('button.infotip__host'))
            checkIsExpanded(wrapper)
        })
    })

    describe('on infotip button close click', () => {
        it('should collapse the infotip', () => {
            const wrapper = renderComponent()
            fireEvent.click(wrapper.container.querySelector('.infotip__close'))
            checkIsCollapsed(wrapper)
        })
    })

    describe('on infotip expanded', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const wrapper = renderComponent({ onExpand: spy })
            fireEvent.click(wrapper.container.querySelector('button.infotip__host'))

            expect(spy).toBeCalled()
        })
    })

    describe('on infotip collapsed', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const wrapper = renderComponent({ onCollapse: spy })
            fireEvent.click(wrapper.container.querySelector('button.infotip__host'))
            fireEvent.click(wrapper.container.querySelector('button.infotip__close'))

            expect(spy).toBeCalled()
        })
    })

    describe('on modal variant', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const wrapper = renderComponent({ variant: 'modal', onExpand: spy })
            fireEvent.click(wrapper.container.querySelector('button.infotip__host'))

            expect(spy).toBeCalled()
        })
    })

    describe('on custom button content', () => {
        it('should overwrite aria-label', () => {
            const wrapper = render(
              <EbayInfotip
                pointer="top-left"
                a11yCloseText="Close"
                aria-label="Wrong aria-label, should be overwritten"
              >
                  <EbayInfotipHost aria-label="Click to open infotip">
                      {({ icon }: any) => (
                        <span>
                            {icon}
                            <span style={{ marginLeft: 5 }}>Click me</span>
                        </span>
                      )}
                  </EbayInfotipHost>
                  <EbayInfotipContent>
                      <EbayInfotipHeading>Title</EbayInfotipHeading>
                      <p>Use Access Key &apos;S&apos; to display settings.</p>
                  </EbayInfotipContent>
              </EbayInfotip>
            )

            expect(wrapper.container.querySelector('button.infotip__host')).toHaveAttribute('aria-label', 'Click to open infotip')
        })
    })

    describe('on using the infotip with no content', () => {
        it('should throw an error', () => {
            jest.spyOn(console, 'error').mockImplementation(() => null)
            expect(() => {
                render(<EbayInfotip a11yCloseText="Close" />)
            }).toThrowError(`EbayInfotip: Please use a EbayInfotipContent that defines the content of the infotip`);
            (console.error as jest.Mock).mockRestore()
        })
    })

    describe('on using the close button', () => {
        it('should pass the property to the button that close the infotip', () => {
            const wrapper = render(
                <EbayInfotip a11yCloseText="Dismiss info">
                    <EbayInfotipHeading>Title</EbayInfotipHeading>
                    <EbayInfotipContent>
                        <p>Info content</p>
                    </EbayInfotipContent>
                </EbayInfotip>
            )

            expect(wrapper.container.querySelector('.infotip__close[aria-label="Dismiss info"]')).toBeInTheDocument()
        })

        it('should focus the button element', () => {
            const { getByLabelText } = render(
                <EbayInfotip a11yCloseText="Dismiss info" aria-label="info">
                    <EbayInfotipContent>
                        <p>Info content</p>
                    </EbayInfotipContent>
                </EbayInfotip>
            )

            const host = getByLabelText('info')

            fireEvent.click(host)
            expect(host).not.toHaveFocus()

            const close = getByLabelText('Dismiss info')

            fireEvent.click(close)
            expect(host).toHaveFocus()
        })
    })
})

initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }

})

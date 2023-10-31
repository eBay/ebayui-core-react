import React from 'react'
import requireContext from 'node-require-context'
import { render, fireEvent } from '@testing-library/react'
import { EbayTooltip, EbayTooltipContent, EbayTooltipHost } from '../index'
import { initStoryshots } from '../../../config/jest/storyshots'

jest.useFakeTimers()

const renderComponent = (props = {}) =>
    render(
        <EbayTooltip {...props}>
            <EbayTooltipHost>
                <button>Info</button>
            </EbayTooltipHost>
            <EbayTooltipContent>
                <p>Info content</p>
            </EbayTooltipContent>
        </EbayTooltip>
    )

const checkIsExpanded = (wrapper) => {
    expect(wrapper.container.querySelector('.tooltip--expanded')).toBeInTheDocument()
    expect(wrapper.container.querySelector('button[aria-expanded=true]')).toBeInTheDocument()
}

const checkIsCollapsed = (wrapper) => {
    expect(wrapper.container.querySelector('.tooltip--expanded')).not.toBeInTheDocument()
    expect(wrapper.container.querySelector('button[aria-expanded=true]')).not.toBeInTheDocument()
}

describe('<EbayTooltip>', () => {
    describe('on tooltip mouse enter', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const { getByText } = renderComponent({ onMouseEnter: spy })
            fireEvent.mouseEnter(getByText('Info content'))

            expect(spy).toBeCalled()
        })

        it('should expand the tooltip', () => {
            const wrapper = renderComponent()
            fireEvent.mouseEnter(wrapper.getByText('Info content'))
            checkIsExpanded(wrapper)
        })

        it('should not expand the tooltip with noHover', () => {
            const wrapper = renderComponent({ noHover: true })
            fireEvent.mouseEnter(wrapper.getByText('Info content'))
            checkIsCollapsed(wrapper)
        })
    })

    describe('on tooltip mouse leave', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const wrapper = renderComponent({ onMouseLeave: spy })
            fireEvent.mouseLeave(wrapper.getByText('Info content'))

            expect(spy).toBeCalled()
        })

        it('should collapse the tooltip', () => {
            const wrapper = renderComponent()
            fireEvent.mouseLeave(wrapper.getByText('Info content'))
            jest.runAllTimers()
            checkIsCollapsed(wrapper)
        })

        it('should not collapse the tooltip with noHover', () => {
            const wrapper = renderComponent({ noHover: true })
            const content = wrapper.getByText('Info content')
            fireEvent.focus(content)
            fireEvent.mouseLeave(content)
            checkIsExpanded(wrapper)
        })
    })

    describe('on tooltip focus', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const wrapper = renderComponent({ onFocus: spy })
            fireEvent.focus(wrapper.getByText('Info'))

            expect(spy).toBeCalled()
        })

        it('should expand the tooltip', () => {
            const wrapper = renderComponent()
            fireEvent.focus(wrapper.getByText('Info'))
            checkIsExpanded(wrapper)
        })

        it('should expand the tooltip even with noHover', () => {
            const wrapper = renderComponent({ noHover: true })
            fireEvent.focus(wrapper.getByText('Info'))
            checkIsExpanded(wrapper)
        })
    })

    describe('on tooltip blur', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const wrapper = renderComponent({ onBlur: spy })
            fireEvent.blur(wrapper.getByText('Info'))

            expect(spy).toBeCalled()
        })

        it('should collapse the tooltip', () => {
            const wrapper = renderComponent()
            fireEvent.blur(wrapper.getByText('Info'))
            checkIsCollapsed(wrapper)
        })
    })

    describe('on tooltip expanded', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const wrapper = renderComponent({ onExpand: spy })
            fireEvent.focus(wrapper.getByText('Info'))

            expect(spy).toBeCalled()
        })
    })

    describe('on tooltip collapsed', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const wrapper = renderComponent({ onCollapse: spy })
            fireEvent.blur(wrapper.getByText('Info'))

            expect(spy).toBeCalled()
        })
    })

    describe('on using the tooltip with no host', () => {
        it('should throw an error', () => {
            jest.spyOn(console, 'error').mockImplementation(() => null)
            expect(() => {
                render(
                    <EbayTooltip>
                        <button>Test</button>
                    </EbayTooltip>
                )
            }).toThrowError(`EbayTooltip: Please use a EbayTooltipHost that defines the host of the tooltip`)
            ;(console.error as jest.Mock).mockRestore()
        })
    })

    describe('on using the tooltip with no content', () => {
        it('should throw an error', () => {
            jest.spyOn(console, 'error').mockImplementation(() => null)
            expect(() => {
                render(
                    <EbayTooltip>
                        <EbayTooltipHost>
                            <a>Test</a>
                        </EbayTooltipHost>
                    </EbayTooltip>
                )
            }).toThrowError(`EbayTooltip: Please use a EbayTooltipContent that defines the content of the tooltip`)
            ;(console.error as jest.Mock).mockRestore()
        })
    })

    describe('on using more than one element in the host', () => {
        it('should throw an error', () => {
            jest.spyOn(console, 'error').mockImplementation(() => null)
            expect(() => {
                render(
                    <EbayTooltip>
                        <EbayTooltipHost>
                            <a>Test</a>
                            <button>Test</button>
                        </EbayTooltipHost>
                        <EbayTooltipContent>Content</EbayTooltipContent>
                    </EbayTooltip>
                )
            }).toThrowError(`React.Children.only expected to receive a single React element child.`)
            ;(console.error as jest.Mock).mockRestore()
        })
    })
})

initStoryshots({
    config: ({ configure }) => {
        const req = requireContext('./', false, /\.stories\.tsx$/);
        return configure(req, module)
    }

});
